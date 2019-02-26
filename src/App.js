import React, { Component } from 'react';

//component
class InputComp extends Component {
    render(){
      return(
        <input className="form-control" name={this.props.name} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder}/>
      )
    }
}

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        name : 'Name',
        address:'address',
        phone:'xxx-xxx-xxxx',
        company:'Company Name'
      }
  }

  updateValue (e) {
      var theNewValue = e.target.value;
      if(e.target.name === 'company'){
        this.setState({
          company:theNewValue
        })
      }
      if(e.target.name === 'name'){
        this.setState({
          name:theNewValue
        })
      }
      if(e.target.name === 'phone'){
        this.setState({
          phone:theNewValue
        })
      }
      if(e.target.name === 'address'){
        this.setState({
          address:theNewValue
        })
      }

  }

  render() {
    return (
      <div className="container">
          <h2>Please enter your information below</h2>
          <div className="row">
            <div className="form-group">
              Company Name:<InputComp name="company" value={this.state.company} onChange={this.updateValue.bind(this)} placeholder={this.state.company}/>
              Name:<InputComp name="name" value={this.state.name} onChange={this.updateValue.bind(this)} placeholder={this.state.name}/>
              Address:<InputComp name="address" value={this.state.address} onChange={this.updateValue.bind(this)} placeholder={this.state.address}/>
              Phone:<InputComp name="phone" value={this.state.phone} onChange={this.updateValue.bind(this)} placeholder={this.state.phone}/>
            </div>
          </div>
          <div className="row border border-primary rounded col-sm-4">
              <div className="col-sm-12"><center><h2>{this.state.company}</h2></center></div>
              <div className="col-sm-2"></div>
              <div className="col-sm-10">{this.state.name}</div>
              <div className="col-sm-2"></div>
              <div className="col-sm-10">{this.state.address}</div>
              <div className="col-sm-2"></div>
              <div className="col-sm-10">{this.state.phone}</div>
          </div>
      </div>
    );
  }
}

export default App;
