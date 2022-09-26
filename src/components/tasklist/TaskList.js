import {tasks} from "../../mocks/data"
import "./tasklist.css"

export const TaskList = ({setId}) => {  
   return (
    <div className="task-list">
        <div className="task-list_tittle">
            <h2>Your Tasks</h2>
        </div>
        <div className="divider"></div>
        <div className="task-list_list">
          {tasks.map((task)=> (
                <div key={task.id} onClick={()=> setId(task.id)} className="task-list_task">
                  <div className="task-list_task_icon-wrapper">
                    <img src={task.status} alt="" /> 
                  </div>
                  {task.title}
                </div>
          ))}
        </div>
    </div>
   ) 
}