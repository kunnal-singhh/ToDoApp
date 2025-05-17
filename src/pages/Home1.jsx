import { useState } from 'react';
import Navbar from '../components/Navbar'


function Home(){ 

const [toDo,setToDo]=useState([ 
{
      id:1,
     task:'study',
},
{
      id:2,
     task:'meal',
},
{
      id:3,
     task:'gym',
},
{
      id:4,
     task:'rest',
}

]);

const [newTodo, setNewTodo] = useState("");

const [editingId, setEditingId] = useState(null);

const deleteTask=(id)=>{ 
    const updateTask=toDo.filter((el)=>el.id!==id);
    setToDo(()=>updateTask);
    
}

const editTask=(id)=>{ 
    const edit=toDo.find((el)=>el.id==id)
    setNewTodo(()=>edit.task); 
    setEditingId(id);
}

const addTask = () => {
    if (newTodo.trim() === "") return; 

    
        if (editingId !== null) {
           
            const updatedTasks = toDo.map((task) =>
                task.id === editingId ? { id:task.id,task: newTodo.trim() } : task
            );
            setToDo(updatedTasks);
            setEditingId(null); 
    }
  else { const newTask = {
      id: toDo.length + 1,
      task: newTodo.trim(),
    };

    setToDo([...toDo, newTask]);}
    setNewTodo(""); 
  };


    return ( 
        <>
         <Navbar/>
         <div className="container">
            <div className='mt-3'>
                <div className='card'>
                    <div className='card-header'>
                        <p className='mb-0 fs-3 fw-bold ' >MY TODO LIST</p>
                    </div>
                     <div className='card-body'>
                            { 
                               toDo.map((element)=>(
                                <div key={element.id} className='d-flex justify-content-between align-items-center mt-3' >
                                    <pre className="fs-5 mb-0 ">*  {element.task.toUpperCase()}</pre>
                                    <div id="button">
                                         <button onClick={()=>editTask(element.id)} className='btn btn-primary'>Edit</button>
                                    <button onClick={()=>deleteTask(element.id)} className='btn btn-danger'>Delete</button>
                                    </div>
                                   
                                </div>
                               ))
                            }
                     </div>
                     <div className='card-footer'>
                        <input value={newTodo} onChange={(e)=>setNewTodo(()=>e.target.value)} type='text' placeholder='Add new task' id="addField"></input>
                        <button className='btn btn-success ms-3 '  onClick={addTask} id="addBtn">Add Task</button>
                     </div>
                </div>
            </div>
         </div>
        </>
    );
    
}

export default Home