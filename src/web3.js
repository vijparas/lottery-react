import Web3 from 'web3'

// here we are taking provider from metamask which is installed as a plugin in our browser
const web3=new Web3(window.web3.currentProvider);

export default web3;
