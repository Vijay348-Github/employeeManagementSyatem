import React, { Component } from 'react';
import EmployeeListComp from './components/EmployeeListComp';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AddEmployeeComp from './components/AddEmployeeComp';
import UpdateEmployee from './components/UpdateEmployee';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <HeaderComp />
        <div className='container'>
          <Routes>
            <Route path='/' element={<EmployeeListComp />} />
            <Route path='/employees' element={<EmployeeListComp />} />
            <Route path='/addemployee' element={<AddEmployeeComp/>} />
            <Route path='/updateemployee/:id' element={<UpdateEmployee/>} />
          </Routes>
        </div>
        <FooterComp />
      </Router>
    </div>
      
    );
  }
}

export default App;

