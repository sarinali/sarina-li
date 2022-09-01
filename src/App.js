import logo from './logo.svg';
import './App.css';
import './components/Header.js'
import Header from './components/Header.js';
// import './Header.css';

function App() {
  document.body.style = 'background: #F3F3F3;'
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
