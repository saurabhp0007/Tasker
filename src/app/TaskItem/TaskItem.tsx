"use client"
import React from 'react'
import { edit, trash } from '../utils/Icons';
import styled from 'styled-components';
import { useGlobalState } from '../context/globalProvider';
import formatDate from '../utils/formatDate';
import axios from 'axios';
import toast from 'react-hot-toast';
import Createcontent from '../Components/Models/createcontent';

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
  id: string;
}

function TaskItem({ title, description, date, isCompleted, isImportant, id }: Props) {
  const { theme, deleteTask, updateTask } = useGlobalState();

  const handleToggleComplete = () => {
    const updatedTask = {
      id,
      isCompleted: !isCompleted,
    };

    updateTask(id, updatedTask);
  };

  

  return (
    <TaskItemStyled theme={theme}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button className="completed" onClick={handleToggleComplete}>
            completed
          </button>
        ) : (
          <button className="incomplete" onClick={handleToggleComplete}>
            not completed
          </button>
        )}
        <button className="edit">
          {edit}
        </button>
        <button className="delete" onClick={() => deleteTask(id)}>
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
}


const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;

export default TaskItem