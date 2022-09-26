
import "./message.css"
export const Message = ({author,date,title,content,}) => {
    return (
        <div className="message-wrapper">
        <div className="information-wrapper">
            <div className="new-information">NEW</div>
            <div className="information-author">{author}</div>
            <div className="information-date">{date}</div>       
        </div>
        <div className="message-link">
        {title}
        </div>
        <p className="message-content">{content}</p>
        </div>   
    )
}