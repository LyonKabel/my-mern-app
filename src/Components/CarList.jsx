import React, { useState } from 'react';
import UpdateCarForm from './UpdateCarForm';

const CarList = ({ cars, setCars, updateCarList }) => {
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/cars/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCars(cars.filter(car => car._id !== id));
      })
      .catch(error => console.error('Error deleting car:', error));
  };

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.make} {car.model} ({car.year}) - ${car.price}
            <button onClick={() => setSelectedCarId(car._id)}>Update</button>
            <button onClick={() => handleDelete(car._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedCarId && <UpdateCarForm carId={selectedCarId} onUpdate={updateCarList} />}
    </div>
  );
};

export default CarList;
