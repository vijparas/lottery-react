import web3 from './web3';

const address='0xff57c428C558BE1434fE34A580C4b59A3d6aB830';
const abi=[{"constant":true,"inputs":[],"name":"lotteryWinner","outputs":[{"name":"","type":"address"}],
"payable":false,"stateMutability":"view","type":"function"},{"constant":true,
"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}]
,"payable":false,"stateMutability":"view","type":"function"},{"constant":true,
"inputs":[],"name":"displayWinner","outputs":[{"name":"","type":"address"}],
"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs"
:[],"name":"pickWinner","outputs":[],"payable":false,
"stateMutability":"nonpayable",
"type":"function"},{"constant":true,"inputs":[],"name":"getPlayers",
"outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view",
"type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],
"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs"
:[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"",
"type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

export default new web3.eth.Contract(abi,address);
