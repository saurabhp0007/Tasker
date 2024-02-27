"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';
const { importantTask } = useGlobalState();
function page() {
 
  return <Tasks tasks={importantTask} title="Important Tasks"/>
     
}

export default page;