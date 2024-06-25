import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST( req : Request ) {
    try {
        
        const body = await req.json();
        const {
            email , username , password
        } = body;

        if( !email || !password || !username ){
            return new NextResponse("Missing Info" , { status : 400 });
        }


        const invalidEmail = await prisma.user.findUnique({
            where : {email}
        });
        if(invalidEmail){
            return new NextResponse("Invalid Email" , { status : 409})
        };

        const hashedPassword = await bcrypt.hash(password , 8);

        const user = await prisma.user.create({
            data : {
                email ,
                username ,
                password : hashedPassword
            }
        });

        console.log(user);

        return NextResponse.json(user);

    } catch (error) {
        console.log("REGISTER ROUTER ERROR" , error);
        return new NextResponse("Internal Error" , {status : 500})
    }
}