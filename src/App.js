import React, { Component } from 'react';



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
      this.setState({
        name:theNewValue
      })
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div class="form-group">
              Name:<input className="form-control" value={this.state.name} onChange={this.updateValue.bind(this)} placeholder={this.state.name}/>
            </div>
          </div>
          <div className="row border border-primary rounded col-sm-4">
              <div class="col-sm-12"><center><h2>{this.state.company}</h2></center></div>
              <div class="col-sm-2"></div>
              <div class="col-sm-10">{this.state.name}</div>
              <div class="col-sm-2"></div>
              <div class="col-sm-10">{this.state.address}</div>
              <div class="col-sm-2"></div>
              <div class="col-sm-10">{this.state.phone}</div>
          </div>
      </div>
    );
  }
}

export default App;
