import React, { useState, useEffect  } from 'react'
import { ethers, Wallet } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

/console.log(provider);


async function balance() {
    const balance = await provider.getBalance("ethers.eth")
    console.log(balance);
}
//balance()
const newWallet = async () => await Wallet.createRandom();
async function key() {
    const data = await Wallet.createRandom();
    return data;
}
function Home() {
    const [wallet, setWallet] = useState();
    const [address, setAddress] = useState();
    useEffect(async () => {
        const wallet = await Wallet.createRandom();
        setWallet(wallet);
        setAddress(wallet.address);
    }, []);
    console.log(wallet)
    console.log(address)
  return (
    <div className="App">
          <h1>Wallet</h1>
          <h2>{address}</h2>
    </div>
  )
}

export default Home
