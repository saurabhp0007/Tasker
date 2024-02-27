"use client"
import { auth } from "@clerk/nextjs";
import Tasks from "./Components/Tasks/tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const {tasks}:any = useGlobalState()

 
  return (
    <Tasks tasks={tasks} title="All Tasks"/> 
  );
}
 