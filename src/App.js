import React, { useState, useEffect, useCallback } from 'react'
import { nanoid } from 'nanoid';
import headerImg from './images/frog.gif';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';

const text = {
  react: 'Learn React',
  description: 'JavaScript-библиотека для создания пользовательских интерфейсов',
}

const defaultMessages = [{
  author: 'admin',
  id: 1,
  text: 'Добрый день! Напишите в форме свой вопрос.'
}]

export const App = () => {

  const [messages, setMessages] = useState(defaultMessages);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === 'User') {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            text: 'Ваше сообщение получено!',
            author: 'Менеджер',
          }),
        1000
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const handleSendMessage = useCallback(({ text, author }) => {
      setMessages((prevMessages) => [
        ...prevMessages, {
          id: nanoid(),
          author,
          text,
        },
      ]);
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img className="headerImg" src={headerImg} img={text.react} />
      </header>
      <Form addMessage={handleSendMessage} />
      <MessageList messages={messages} />
    </div>
  );
}