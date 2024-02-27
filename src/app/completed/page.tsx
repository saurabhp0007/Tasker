"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';

function Page() {
  const { completedTask } = useGlobalState();
  return <Tasks tasks={completedTask} title="Completed Tasks"/>
     
}

export default Page;