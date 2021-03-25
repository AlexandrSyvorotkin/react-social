import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Alex' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Alena' id='3'/>
                <DialogItem name='Viktor' id='4'/>
                <DialogItem name='Valera' id='5'/>
                <DialogItem name='Violetta' id='6'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Lets go for a walk Bro'/>
                <Message message='Son where is you father?'/>
                <Message message='Hello can we meet today?'/>

            </div>
        </div>
    )
}

export default Dialogs