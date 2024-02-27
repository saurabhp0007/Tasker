"use client"
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


interface CreateContentProps {
    close: () => void;
    updateTasks: (newTask: any) => void
}

const Createcontent: React.FC<CreateContentProps> = ({ close , updateTasks}) => {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [date, setDate] = React.useState("")
    const [completed, setCompleted] = React.useState(false)
    const [important, setImportant] = React.useState(false)
    const [closeState, setClose] = useState(false);




    const handlechange = (name: string) => (
        e: any
    ) => {
        switch (name) {
            case "title":
                setTitle(e.target.value)
                break
            case "description":
                setDescription(e.target.value)
                break
            case "date":
                setDate(e.target.value)
                break
            case "completed":
                setCompleted(e.target.checked)
                break
            case "important":
                setImportant(e.target.checked)
                break
        }
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!title || !description || !date) {
            toast.error("Please fill in all required fields.");
            return;
          }
        const task = {
            title,
            description,
            date,
            completed,
            important
        }

        try {
            const res = await axios.post("/api/tasks", task);
            if (res.data.error) {
                toast.error(res.data.error);
            }else {
                // Update the tasks array using the callback function passed as a prop
                console.log('Updating tasks with new task', res.data.data.task);
                updateTasks(res.data);
                toast.success("Task created");
                setClose(!closeState);
                close();
              }

        } catch (error) {
            console.log("Error Posting Task", error);
            toast.error("Something went wrong");
        }
    }
    const handleClick = () => {
        setClose(!closeState);
        close();
    }



    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="border rounded p-6 bg-white">
                <h1 className="text-2xl font-bold mb-4">Create A Task</h1>

                <div className="input-control mb-4">
                    <label htmlFor='title' className="block text-black">Title</label>
                    <input
                        type='text'
                        id='title'
                        value={title}
                        name='title'
                        onChange={handlechange("title")}
                        placeholder='Title'
                        className="w-full border p-2 text-black"
                    />
                </div>

                <div className="input-control mb-4">
                    <label htmlFor='description' className="block text-black">Description</label>
                    <textarea
                        id='description'
                        value={description}
                        name='description'
                        rows={4}
                        onChange={handlechange("description")}
                        placeholder='Description'
                        className="w-full border p-2 text-black"
                    ></textarea>
                </div>

                <div className="input-control mb-4">
                    <label htmlFor='date' className="block text-black">Date</label>
                    <input
                        type='date'
                        id='date'
                        value={date}
                        name='date'
                        onChange={handlechange("date")}
                        className="w-full border p-2 text-black"
                    />
                </div>

                <div className="input-control mb-4 flex justify-between">
                    <label htmlFor='completed' className="block text-black">Toggle Completed</label>
                    <input
                        type='checkbox'
                        id='completed'
                        value={completed.toString()}
                        name='completed'
                        onChange={handlechange("completed")}
                        className="border p-2 text-black"
                    />
                </div>

                <div className="input-control mb-4 flex justify-between">
                    <label htmlFor='important' className="block text-black">Toggle Important</label>
                    <input
                        type='checkbox'
                        id='important'
                        value={important.toString()}
                        name='important'
                        onChange={handlechange("important")}
                        className="border p-2 text-black"
                    />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <button className='bg-blue-500 text-white flex justify-center rounded-sm p-4 m-4' type='submit'>Submit</button>
                    </div>


                    <button className='bg-blue-500 text-white flex justify-center rounded-sm p-4 m-4' onClick={handleClick}>
                        {closeState ? 'Open' : 'Close'}
                    </button>
                </div>
            </form>


        </div>

    )
}

export default Createcontent


