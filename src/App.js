import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarList from './Components/CarList';
import AddCarForm from './Components/AddCarForm';
import './style/style.css';
import SecondPage from './Components/SecondPage';

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const updateCarList = () => {
    fetch('http://localhost:3001/api/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/second-page">Second Page</Link></li>
          </ul>
        </nav>
        <h1>Car Management System</h1>
        <Routes>
          <Route path="/" element={
            <div>
              <CarList cars={cars} setCars={setCars} updateCarList={updateCarList} />
              <AddCarForm addCar={addCar} />
            </div>
          }/>
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
