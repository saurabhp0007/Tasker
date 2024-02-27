"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';


function Page() {
  const { notCompletedTask } = useGlobalState();
  return <Tasks tasks={notCompletedTask} title="Incompleted Tasks"/>
     
}

export default Page;