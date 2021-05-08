import { useLoader, render, events, Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense } from 'react'
import { ethers, Wallet } from "ethers";
import json from './Mage';

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

const contractAddress = "0x4841F760fd55882B7A42A58Db6A48FAc5E984242";
const Contract = new ethers.Contract(contractAddress, json.abi, signer);

const mint = () => {
    const number = window.location.pathname.replace("/nftshop/", "");
    Contract.mintRandomMage(number);
} 

const Model = () => {
    const id = window.location.pathname.replace("/nftshop/", "");
    const gltf = useLoader(GLTFLoader, `https://storageapi.fleek.co/lucasespinosa28-team-bucket/mageNft/mage${id}.gltf`);
    return (
        <>
            <primitive position={[0, -1, 3]}  object={gltf.scene} scale={1} />
        </>
    );
};

function Scene() {

    return (
        <div className="App">
            <div className="btn-group m-2">
                <button onClick={mint} className="btn btn-primary">Mint #{window.location.pathname.replace("/nftshop/", "")}</button>
                <h2>See in <a href="https://testnets.opensea.io/assets?search[query]=0x4841F760fd55882B7A42A58Db6A48FAc5E984242" target="_blank">OpenSea</a></h2>
            </div>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.1} />
                    <Model />
                    <OrbitControls />
                    <Environment preset="forest" background />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Scene
