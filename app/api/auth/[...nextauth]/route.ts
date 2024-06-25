import bcrypt from "bcrypt";
import NextAuth , {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/libs/prismadb";

export const authOptions : AuthOptions = {
    adapter : PrismaAdapter(prisma),

    providers : [
        CredentialsProvider({
            name : "credentials",
            credentials : {
                email : { label : "email" , type : "text"},
                password : {label  : "password" , type : "password"}
            },

            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Invalid Credentials")
                }
                const user = await prisma.user.findUnique({
                    where : { email : credentials.email}
                });

                if( !user){
                    throw new Error("Invalid Credentials")
                }
                
                if(user.password === null){
                    throw new Error("Invalid Credentials")
                }
                
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password ,
                    user.password
                )
                
                if( !isCorrectPassword ){
                    throw new Error("Invalid Credentials")
                }

                return user;
            }
        })
    ],

    debug : process.env.NODE_ENV === "development",

    session : {
        strategy : "jwt"
    } ,

    secret : process.env.NEXTAUTH_URL
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};