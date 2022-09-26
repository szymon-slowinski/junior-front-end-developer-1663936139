import { useState } from "react"
import { BusinessContext } from "../components/businesscontext/BusinessContext"
import { Footer } from "../components/footer/Footer"
import { NavBar } from "../components/navbar/NavBar"
import { TaskList } from "../components/tasklist/TaskList"
import "./layout.css"

export const BasicLayout = ({children}) => {
    const [id,setId] = useState(1)
    return(
        <div className='wrapper-content'>
      <header className='menu'>
        <NavBar/>
      </header>
      <div className='dashboard-wrapper'>
        <div className='dashboard-tasklist_wrapper'>
      <TaskList setId={setId}/>
      </div>
      <div className='dashboard-business_wrapper'>
      <BusinessContext id={id}/>
      </div>
      </div>
      <Footer/> 
    </div>
    )
}

export const DashboardLayout = () => {
    return (
        <BasicLayout>
            <div></div>
        </BasicLayout>
    )
}

export const BusinessContextPageLayout = () => {
    return (
        <BasicLayout> 
        </BasicLayout>
    )
}

export const MessageDetailsPageLayout = () => {
    return (
        <BasicLayout>
        </BasicLayout>
    )
}