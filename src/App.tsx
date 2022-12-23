import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { DomainName } from './components/DomainName/DomainName';
import { ErrorSnackbar } from './components/ErrorSnackbar/ErrorSnackbar';
import Header from './components/Header/Header';
import { Profile } from './components/Profile/Profile';

function App() {

  const [domain, setDomain] = useState('')

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<DomainName setDomain={setDomain} />} />
          <Route path='/profile' element={<Profile domain={domain} />} />
        </Routes>
      </div>
      <ErrorSnackbar />
    </div>
  );
}

export default App;
