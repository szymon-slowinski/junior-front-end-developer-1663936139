
import { useEffect } from "react"
import { useState } from "react"

import { Message } from "../../features/message/Message"
import { tasks } from "../../mocks/data"
import "./businesscontextlist.css"

export const BusinessContextList = ({id}) => {
    const [task,setTask] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        if(id !== "0" && typeof id !=="undefined") {
        const data = tasks.filter((el) => el.id === id)
        setTask(data)
        setLoading(false)
        }
    },[id])
    
   
    return(
        <div className="business-context_list-wrapper">
        <div className="business-context_list">
        {!loading ? (<div>
            {task[0].businessContext.map((businessTask) => (
                    <div className="business-context-task" key={businessTask.title}>
                        <Message
                        to={`/${id}/${businessTask.title}`}
                        author={businessTask.author}
                        date={businessTask.created_at}
                        title={businessTask.title}
                        content={businessTask.content}
                        />
                    </div>
                  ))}
        </div>)  : (<div>Loading... or try to Refresh</div>)} 
        </div>
        </div>
    )
}