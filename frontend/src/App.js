import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompCreateDash from './Dash/CreateDash';
import CompEditDash from './Dash/EditDash';
import CompShowDash from './Dash/ShowDash';
import Footer from './Layout/Footer';
import Navbarx from './Layout/Navbar';
// importando componentes


function App() {
  return (
    <div className="App">
      <Navbarx />
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

      <Footer />
    </div>
  );
}

export default App;
