import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Order } from 'pages/order';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Order/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
