import React, { useState } from 'react'
import styles from './Form.css'



export const Form = ({ addMessage }) => {

    const [text, setText] = useState('');

    const handleText = (e) => {
        e.preventDefault();
        addMessage({
            text,
            author: 'User',
          });
          setText('');
    }

    return (
        <React.Fragment>
            <div className="form">
               <form onSubmit={handleText} className="decor">
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                        <h3>Написать нам</h3>
                        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Сообщение..." rows="3"></textarea>
                        <input type="submit" value="Отправить" />
                    </div>
                </form> 
            </div>
        </React.Fragment>
    )
}