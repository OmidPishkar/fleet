import prisma from "@/libs/prismadb";
import { getServerSession } from "next-auth";

export default async function getCurrentUser(){


    try {
        const session = await getServerSession();
        if(!session?.user?.email){
            return null;
        };


        const email = session.user.email;
        
        const targetUser = await prisma.user.findUnique({
            where : {email : email as string}
        }).then(res => res);

        if(!targetUser){
            return null;
        }

        return targetUser

    } catch (error) {
        console.log("GET CURRENT USER ERROR" , error);
        return null;
    }
}