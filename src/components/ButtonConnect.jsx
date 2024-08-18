import React, { useState, useEffect } from 'react';
import { message, Button } from 'antd';
import metamask from '../components/svg/metamask.svg';
function ButtonConnect({ onWalletAddressChange }) {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        onWalletAddressChange(accounts[0]);
      } catch (error) {
        console.error('User rejected the request.');
        message.error('User rejected the request.');
      }
    } else if (isMobileDevice()) {
      message.error('Please open this site in the MetaMask app.');
    } else {
      message.error('Please install MetaMask extension');
    }
  }

  async function checkIfWalletIsConnected() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          onWalletAddressChange(accounts[0]);
        } else {
          setWalletAddress('');
          onWalletAddressChange('');
        }
      } catch (error) {
        console.error('Failed to check if wallet is connected.');
      }
    }
  }

  function disconnectAccount() {
    setWalletAddress('');
    onWalletAddressChange('');
    message.success('Disconnected successfully');
  }

  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  return (
    <>
      {!walletAddress ? (
        <Button
          className='button-text'
          type="primary"
          onClick={requestAccount}
          style={{ backgroundColor: 'green', color: 'white', borderColor: 'green' }}
        >
          <img src={metamask} alt="MetaMask" />
          Connect to MetaMask
        </Button>
      ) : (
        <>
          <Button
            className='button-text'
            type="primary"
            onClick={disconnectAccount}
            style={{ backgroundColor: 'white', color: 'red', borderColor: 'red', marginTop: '10px' }}
          >
            Disconnect
          </Button>
        </>
      )}
    </>
  );
}

export default ButtonConnect;
