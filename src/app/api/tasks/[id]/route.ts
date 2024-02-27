import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(res:Request ,{params}:{params:{id:string}}) {
    try {
        const {userId}= auth();
        if(!userId){
            return NextResponse.json({ message: "User Not Found",status: 404 });
        }
        const {id}=params;
        const task = await prisma.task.delete({
            where: {
                id ,
            },
        });
         
        return NextResponse.json(task  );  
    } catch (error) {
        console.log("Error Deleting Task",error);
        return NextResponse.json({ message: "Something went wrong",status: 500 });
    }
    
}