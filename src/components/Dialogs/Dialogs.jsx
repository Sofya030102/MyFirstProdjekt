import Teact from 'react'
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let link = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={link} className = { navData => navData.isActive ? s.active : s.item }>{props.name}</NavLink>
        </div>
    )

}

const Message = (props) => {
    return <div className={s.message}>{props.message}
    </div>
}


const Dialogs = (props) => {

let dialogs = [
    {id: 1, name: 'Лиза'},
    {id: 2, name: 'Витя'},
    {id: 3, name: 'Мама'},
    {id: 4, name: 'Папа'},
    {id: 5, name: 'Альбина'},
    {id: 5, name: 'Андрей'},
]

let messages = [
    {id: 1, message:'Привет' },
    {id: 2, message:'Как твоя черепаха?' },
    {id: 3, message:'хи хи ха ха' },
    {id: 4, message:'хи хи ха ха' },
    {id: 5, message:'хи хи ха ха' },
    
]
  
    let dialogsElements = dialogs.map (d => <DialogItem name = {d.name} id={d.id}  />);
    let messagesElements = messages.map (m => <Message mesasge = {m.message} />);



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

export default Dialogs;