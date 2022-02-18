import React from 'react';

export const MessageList = ({ messages }) => (
    <div className='chat'>
        {messages.map(
            message => <div  className='chatItem' key={message.id}>{message.author}: {message.text}</div>
        )}
    </div>
)