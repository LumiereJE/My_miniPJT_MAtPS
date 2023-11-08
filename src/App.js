import '../src/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Store from './pages/Store';
import Reserve from './pages/Reserve';


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
