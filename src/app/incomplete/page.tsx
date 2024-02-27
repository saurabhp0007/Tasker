"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';
const { notCompletedTask } = useGlobalState();

function page() {
  
  return <Tasks tasks={notCompletedTask} title="Incompleted Tasks"/>
     
}

export default page;