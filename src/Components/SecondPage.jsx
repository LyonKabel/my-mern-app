import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <p>This is the second page of the application.</p>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default SecondPage;
