import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Thông tin cá nhân</h1>
        <p><strong>Họ và tên:</strong>Nguyễn Ngọc Hiến</p>
        <p><strong>Mã sinh viên:</strong> 2310900033</p>
        <p><strong>Ngày sinh:</strong> 13/06/2005</p>
        <p><strong>Điện thoại:</strong>0336076551</p>
        <p><strong>Tên lớp:</strong> K23CNT1</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
