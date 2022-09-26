import "./businesscontext.css"
import  arrowicon from "../../assets/icons/tabicon.svg"
import { BusinessContextList } from "../businesscontextlist/BusinessContextList"
import { MessageDetails } from "../messagedetails/MessageDetails"

export const BusinessContext = ({id,title}) => {
    return (
        <div className="business-context-wrapper">
            <div className="business-context_bar-wrapper">
                <div className="business-context-button_wrapper">
                <div className="business-context_icon-wrapper">
                    <img src={arrowicon} alt="blue arrow"/>
                    </div>
                    <button className="business-context_tittle">Business Context</button>
                </div>
            </div>
            <div className="business-context-content_wrapper">
                <div className="business-list-wrapper"> 
           <BusinessContextList id={id}/>
           </div>
            <div className="business-context-message_wrapper">
                <div className="business-context-message">
                   <MessageDetails id={id} title={title}/>
                </div>
            </div>
            </div>
        </div>
    )
}