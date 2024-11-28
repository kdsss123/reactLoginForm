import React from "react";
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />}/ >          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;