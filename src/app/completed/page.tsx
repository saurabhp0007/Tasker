"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';


const { completedTask } = useGlobalState();

function page() {
  
  return <Tasks tasks={completedTask} title="Completed Tasks"/>
     
}

export default page;