import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Store from './pages/store/Store';
import Reserve from './pages/store/Reserve';


function App() {
  return (
    <>
   {/* 추후 Router(페이지연결)이 이루어질 곳 */}
      {/* <Store/> */}
      <Reserve/>
    </>
    

  );
}

export default App;
