import React from 'react';
import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <ToastContainer position='top-center'></ToastContainer>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/add' element={<AddEdit />}></Route>
          <Route path='/update/:id' element={<AddEdit />}></Route>
          <Route path='/view/:id' element={<View />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


// function App() {
//   return (
//     <div className="">
//       <ToastContainer position='top-center' />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path='/add' element={<AddEdit />} />
//         <Route exact path="/update/:id" element={<AddEdit />} />
//         <Route exact path="/view/:id" element={<View />} />
//         <Route exact path="/about" element={<About />} />

//         {/* <Route exact path='/' component={<Home />} /> */}
//         {/* <Route path='/add' component={AddEdit} />
//         <Route exact path='/update/:id' component={AddEdit} />
//         <Route exact path='/view/:id' component={View} />
//         <Route path='/about' component={<About />} /> */}
//       </Routes>
//     </div>
//   );
// }

export default App;
