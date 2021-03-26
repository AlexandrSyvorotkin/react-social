import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Violetta'},

    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Lets go for a walk Bro'},
        {id: 4, message: 'Son where is you father?'},
        {id: 5, message: 'Hello can we meet today?'},
    ]

    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = messages
        .map(m => <Message message={m.message}/>)

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs