import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompCreateDash from './Dash/CreateDash';
import CompEditDash from './Dash/EditDash';
import CompShowDash from './Dash/ShowDash';
// importando componentes


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='titulo'>CRUD App</h1>

      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowDash />} />
          <Route path='/crear' element={<CompCreateDash />} />
          <Route path='/edit/:id' element={<CompEditDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
