import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {

constructor(props){
  super(props);
  this.state={manager:'',players:[],balance:'',value:'',message:'',winner:''};
}
  async componentDidMount(){
    const manager=await lottery.methods.manager().call();
    const players=await lottery.methods.getPlayers().call();
    const balance=await web3.eth.getBalance(lottery.options.address);
    this.setState({manager:manager});
    this.setState({players:players});
    this.setState({balance:balance});


  }
  onSubmit=async (event)=>{
      event.preventDefault();
      const accounts=await web3.eth.getAccounts();
      this.setState({message:'We are sending your transaction'})
      await lottery.methods.enter().send({
        from:accounts[0],
        value:web3.utils.toWei(this.state.value,'ether')
      });
      this.setState({message:'You have entered into tournament'})
  };
  onWinnerClick=async (event)=>{

      const accounts=await web3.eth.getAccounts();
      this.setState({message:'We are going to pick winner'})
      await lottery.methods.pickWinner().send({
        from:accounts[0]

      });
      const winner=await lottery.methods.displayWinner().call();
      this .setState({'winner':winner});
      this.setState({message:'A Winner has been picked and winner is '+this.state.winner});
  };
  render() {
  //  web3.eth.getAccounts().then(console.log);

    return (
      <div>
        <h2>Lotter Contract</h2>
        <p>This Contract is managed by {this.state.manager}</p>
        <p>Number of players presently in lottery is {this.state.players.length}
        fighting for prize money of  {web3.utils.fromWei(this.state.balance,'ether')} ether</p>

        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Enter into Lottery</h4>
          <div>
          <label>Amount of ether to enter</label>
          <input value={this.state.value}onChange={event=>this.setState({'value':event.target.value})}/>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h1> {this.state.message}</h1>
        <hr />
        <div>
          <button onClick={this.onWinnerClick}>Choose Winner</button>
        </div>
        </div>

    );
  }
}

export default App;
