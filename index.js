import React, { useState } from 'react';

function AppointmentRate() {
  const [message, setMessage] = useState('');

  // Function to handle button click
  const handleClick = (value, type) => {
    if (type === 'prenup') {
      if (value < 3000) {
        setMessage('My Pren-up rate is 3000');
      } else if (value === 3000) {
        setMessage("Let's make a schedule!");
      } else {
        setMessage('Prenup rate should be 3000 or less');
      }
    } else if (type === 'birthday') {
      if (value === 1500) {
        setMessage('My Birthday rate was 1500');
      } else {
        setMessage('Birthday rate should be 1500');
      }
    } else if (type === 'photoshoot') {
      if (value === 2000) {
        setMessage('My Photoshoot rate was 2000');
      } else {
        setMessage('Photoshoot rate should be 2000');
      }
    }
  };

  return (
    <div className="container">
      <h2 className="title">My Photoshoot Rate</h2>
      <div>
        <input type="number" id="prenupInput" placeholder="Enter Prenup Rate" />
        <button onClick={() => handleClick(parseInt(document.getElementById('prenupInput').value), 'prenup')}>Get Prenup Rate</button>
      </div>
      <div>
        <input type="number" id="birthdayInput" placeholder="Enter Birthday Rate" />
        <button onClick={() => handleClick(parseInt(document.getElementById('birthdayInput').value), 'birthday')}>Get Birthday Rate</button>
      </div>
      <div>
        <input type="number" id="photoshootInput" placeholder="Enter Photoshoot Rate" />
        <button onClick={() => handleClick(parseInt(document.getElementById('photoshootInput').value), 'photoshoot')}>Get Photoshoot Rate</button>
      </div>
      <p>{message}</p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
          border: 1px solid #ccc;
          padding: 50px;
          width: 300px;
          margin: 0 auto;
        }

        .title {
          margin-bottom: 50px;
        }

        input {
          padding: 10px;
          margin-bottom: 20px;
          margin-left: 50px;
        }

        button {
          padding: 2px;
          display: auto;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          margin-left: 100px;
          margin-bottom: 20px;
        }

        button:hover {
          background-color: #0056b3;
        }

        p {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default AppointmentRate;
