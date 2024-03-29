"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";
import toast from "react-hot-toast";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [tasks, setTasks] = useState([]);

  const theme = themes[selectedTheme];

 

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");

      setTasks(res.data.data || []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    allTasks();
  }, []);
 
 


  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");
      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }; 
  const completedTask = tasks.filter((task) => task.isCompleted === true);
  const notCompletedTask = tasks.filter((task) => task.isCompleted === false); 

  const importantTask = tasks.filter((task) => task.isImportant === true); 

  const updateTask = async ( id,task) => {
    try {
      const res = await axios.put(`/api/tasks/`, task);
      toast.success("Task updated");
      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
        allTasks,
        collapsed,
        collapseMenu,
        deleteTask,
        completedTask,
        notCompletedTask,
        importantTask,
        updateTask,
        modal,
        setModal,
        
        
       
        
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
