import headerImg from './images/frog.gif'
import { Message } from './components/Message';

const text = {
  react: 'Learn React',
  description: 'JavaScript-библиотека для создания пользовательских интерфейсов',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="headerImg" src={headerImg}/>
        <Message data={text}/>
      </header>
    </div>
  );
}

export default App;
