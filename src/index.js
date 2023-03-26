import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import BlogPost from './Container/BlogPost/BlogPost';

// import Tugas from './Tugas';
import reportWebVitals from './reportWebVitals';
// import BlogPost from './Container/BlogPost/BlogPost';
// import KuisMhs from './Container/mhs/KuisMhs';
import Mahasiswa from './Container/Mahasiswa/Mahasiswa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mahasiswa/>
  </React.StrictMode>
);


reportWebVitals();

