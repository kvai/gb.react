import headerImg from './images/frog.gif'
import { Message } from './components/Message/Message';

const text = {
  react: 'Learn React',
  description: 'JavaScript-библиотека для создания пользовательских интерфейсов',
}

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="headerImg" src={headerImg} img={text.react}/>
        <Message data={text}/>
      </header>
    </div>
  );
}