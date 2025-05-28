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

const deleteTask=(id)=>{ 
    const updateTask=toDo.filter((el)=>el.id!==id);
    setToDo(()=>updateTask);
    
}



const addTask = () => {
  

   
   const newTask = {
      id: toDo.length + 1,
      task: newTodo.trim(),
    };

    setToDo([...toDo, newTask]);
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
                                       <button onClick={()=>deleteTask(element.id)} className='btn btn-danger'>Done</button>
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
         {/* Already Done Section */}
      <div className="container">
        <div className="mt-3">
          <div className="card">
            <div className="card-header">
              <p className="mb-0 fs-3 fw-bold">ALREADY DONE!</p>
            </div>
            <div className="card-body">
              {toDo.filter((task) => task.done).length === 0 ? (
                <p className="text-muted">No tasks marked as done yet.</p>
              ) : (
                toDo
                  .filter((task) => task.done)
                  .map((element) => (
                    <div key={element.id} className="d-flex justify-content-between align-items-center mt-3">
                      <pre className="fs-5 mb-0 text-success">
                        ✓ {element.task.toUpperCase()}
                      </pre>
                      <button   onClick={() => deleteTask(element.id)}   className="btn btn-danger" >
                        Undone
                      </button>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
        </>
    );
    
}

export default Home