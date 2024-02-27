"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../Components/Tasks/tasks';

function Page() {
  const { importantTask } = useGlobalState();
  return <Tasks tasks={importantTask} title="Important Tasks"/>
     
}

export default Page;