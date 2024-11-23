import "./Content.css"
import { useState } from "react"

const Content = ({className}) => {
    const [editing, setEditing] = useState(false);
    const [mainContent, setMainContent] = useState('Placeholder');

    const editPage = () => {
        setEditing(true);
    }

    const stopEdit = () => {
        setEditing(false);
    }

    const changeText = (e) => {
        // This is perfectly safe in react, it correctly detect the keys
        if(e.key == 'Enter'){
            setMainContent(e.target.value);
            setEditing(false);
        }
    }

    return(
        <div className={className}>
            <div>
                {!editing && <div style={{fontSize: "x-large"}}>{mainContent}</div>}
                {editing &&
                    <input
                        onKeyDown={changeText}
                        placeholder="Press enter to save"
                        style={{padding: "1em", fontSize: "medium"}}
                    />
                }
            </div>
            {!editing && <button className="edit-button" onClick={editPage}>Edit</button>}
            {editing && <button className="done-button" onClick={stopEdit}>Done</button>}
        </div>
    )
}

export default Content