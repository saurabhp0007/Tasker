"use client"
import { useGlobalState } from '@/app/context/globalProvider'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import styled from 'styled-components';
import TaskItem from '@/app/TaskItem/TaskItem';
import { add, plus } from '@/app/utils/Icons';
import Createcontent from '../Models/createcontent';

interface Props {
  title: string;
  tasks: any[];

}

function Tasks({ title, tasks }: Props) {
  const { theme }: any = useGlobalState();
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [tasksState, setTasks] = useState(tasks);

  const handleClick = () => {
    setShowContent(!showContent);
  };
  const handleCloseCreateContent = () => {
    setShowContent(false);
  };
  const updateTasks = (newTask: any) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskStyled theme={theme}>

      <h1>{title}</h1>

      <button className="btn-rounded">
        {plus}
      </button>

      <div className="tasks grid">
      {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            isImportant={task.isImportant}
            id={task.id}
          />
        ))}
        <div>
          <button className="create-task p-16" onClick={handleClick}>

            {add}
            Add new Task
          </button>
          {showContent && (
            <div className="centered-content">
              <Createcontent close={handleCloseCreateContent} updateTasks={updateTasks}/>
            </div>
          )}
        </div>

      </div>
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .btn-rounded {
    position: fixed;
    top: 4.9rem;
    right: 5.1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-color: ${(props) => props.theme.colorBg};
    border: 2px solid ${(props) => props.theme.borderColor2};
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      top: 3rem;
      right: 3.5rem;
    }
  }

  .tasks {
    margin: 2rem 0;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
  }

  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 16rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey0};
    }
  }
  .centered-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Tasks;