"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';

function page() {
  const { notCompletedTask } = useGlobalState();
  return <Tasks tasks={notCompletedTask} title="Incompleted Tasks"/>
     
}

export default page;