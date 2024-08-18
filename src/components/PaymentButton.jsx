import React from 'react';
import { ethers } from 'ethers';
import { message, Button } from 'antd';
import abi from '../data/abi.json';

const contractAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8';
const recipientAddress = '0x1Dd839F0da29171C744a718E90ab778739e1AD42';

function PaymentButton({ selectedRoom }) {
  const amount = '1';

  async function handlePayment() {
    if (!amount || isNaN(amount)) {
      message.error('Server went wrong');
      return;
    }

    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const tx = await contract.transfer(recipientAddress, ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        message.success('Payment successful!');
      } catch (error) {
        console.error('Payment failed', error);
        message.error('Payment rejected!');
      }
    } else {
      message.error('Ethereum object not found, install Metamask.');
    }
  }

  return (
    <div style={{ marginTop: 23 }}>
      <Button
        className='button-text'
        type="primary"
        onClick={handlePayment}
        style={{
          backgroundColor: selectedRoom != null ? "green" : "lightgray",
          color: "white",
          borderColor: selectedRoom != null ? "green" : "lightgray",
          width: '100%'
        }}
        disabled={selectedRoom == null}
      >
        Booking Hotel
      </Button>
    </div>
  );
}

export default PaymentButton;
