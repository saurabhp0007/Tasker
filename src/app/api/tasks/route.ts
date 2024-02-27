import prisma from "@/app/utils/connect";
import { connectToDatabase } from "@/app/utils/server-helper";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const {userId}= auth();
        if(!userId){
            return NextResponse.json({ message: "User Not Found",status: 404 });
        }

        const {title,description ,date, completed,important}= await req.json();

        if(!title || !description || !date){
            return NextResponse.json({ message: "All fields are required",status: 400 });
        }

        if(title.length < 3){
            return NextResponse.json({ message: "Title should be less than 3 characters",status: 400 });
        }
        await connectToDatabase();

        const task = await prisma.task.create({
            data:{
                title,
                description,
                date,
               isCompleted: completed,
               isImportant: important,
                userId
            }
        })

        return NextResponse.json({ message: "Task Created",status: 201, data: task });
    } catch (error) {
        console.log("Error Posting Task",error);
        return NextResponse.json({ message: "Something went wrong",status: 500 });
    }
}

export async function GET(req:Request) {
    try {
        const {userId}= auth();
        if(!userId){
            return NextResponse.json({ message: "User Not Found",status: 404 });
        }
        const tasks = await prisma.task.findMany({
            where:{ 
                userId
            },
        });
        console.log(tasks)
        
        return NextResponse.json({ message: "Task Found",status: 200, data: tasks });
        
    } catch (error) {
        console.log("Error Geting Task",error);
        return NextResponse.json({ message: "Something went wrong",status: 500 });
    }
}
export async function PUT(req:Request) {
    try {
        const {userId}= auth();
        const {isCompleted,id}= await req.json();
        if(!userId){
            return NextResponse.json({ message: "User Not Found",status: 404 });
        }
        const task = await prisma.task.update({
            where: {
                id,
            },
            data: {
               isCompleted,
            },
        });
         
        return NextResponse.json(task  );
        
    } catch (error) {
        console.log("Error Putting Task",error);
        return NextResponse.json({ message: "Something went wrong",status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {

        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ message: "User Not Found", status: 404 });
        }

        const task = await prisma.task.findUnique({
            where: {
                id: userId,
            },
        });

        if (!task || task.userId !== userId) {
            return NextResponse.json({ message: "Task not found or unauthorized", status: 404 });
        }

        // Delete the task
        await prisma.task.delete({
            where: {
                id: userId,
            },
        });

        return NextResponse.json({ message: "Task deleted successfully", status: 200 });
    } catch (error) {
        console.log("Error deleting Task", error);
        return NextResponse.json({ message: "Something went wrong", status: 500 });
    }
}

