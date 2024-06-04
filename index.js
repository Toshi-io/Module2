import React, { useState } from 'react';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setErrors] = useState('');

  // Function to connect to MetaMask
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request access to MetaMask wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the connected wallet address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setErrors("");
        } else {
          setErrorMessage('No account found. Please make sure you have a wallet connected.');
        }
        
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      setErrorMessage('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  };
  // Function to handle button click
  const handleClick = (value, type) => {
    if(walletAddress != ""){
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
          setMessage("Let's make a schedule!");
        } else {
          setMessage('Birthday rate should be 1500');
        }
      } else if (type === 'photoshoot') {
        if (value === 2000) {
          setMessage("Let's make a schedule!");
        } else {
          setMessage('Photoshoot rate should be 2000');
        }
      }
      setErrors("");
    }else{
      setErrors("CONNECT FIRST");
    }
  };



  return (
	<div className="container">
    <div>
      <h2>Connect to MetaMask</h2>
      <button onClick={connectToMetaMask}>Connect</button>
      {walletAddress && (
        <div>
          <p>Connected Wallet Address:</p>
          <p>{walletAddress}</p>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}

      <div className='newcont'>
      <h2 className="title">My Photoshoot Rate</h2>
        <input type="number" id="prenupInput" placeholder="Enter Prenup Rate" />
        <button className="cont2but" onClick={() => handleClick(parseInt(document.getElementById('prenupInput').value), 'prenup')}>Get Prenup Rate</button>
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
      <p className="error">{error}</p>
	</div>
      <style jsx>{`
        .container{
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
          text-align: center;
          margin-top: 150pt;
          border: 1px solid #ccc;
          padding: 50px;
          border-radius: 30pt;
        }

        .newcont{
          margin-top: 50pt;
        }

        button {
          margin-left: 5pt;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: 0.1s ease-in-out;
        }

        button:hover {
          transform: scale(1.1);
          background-color: darkblue;
          color: white;
        }

        input{
          border: 0;
          height: 20pt;
          border-bottom: 2pt solid gray;
          margin-bottom: 20pt;
        }

        .error{
          color: red;
        }
      `}</style>
    </div>
  );
}

export default ConnectWallet;
