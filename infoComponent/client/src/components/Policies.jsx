import React from 'react';

class Policies extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showPanel: false

    }
    this.togglePanel = this.togglePanel.bind(this);
}

togglePanel(){
  this.setState({
    showPanel: this.state.showPanel ? false : true
  })
}

    render(){
      if (this.state.showPanel){
        return(
          <div>
            <h2>Policies</h2>
            <h3>House Rules</h3>
            <div>Check in Time: {this.props.checkInTime + 'pm'}</div>
            <div>Self Check In: {this.props.selfCheckIn ? 'Yes' : 'No'}</div>
            <div>Smoking: {this.props.smoking ? 'Yes' : 'No'}</div>
            <div>Parties: {this.props.parties ? 'Yes' : 'No'}</div>
            <div>Pets: {this.props.pets ? 'Yes' : 'No'}</div>
            <div>Security Deposit: {this.props.securityDeposit ? 'Yes' : 'No'}</div>
            <div>Deposit Amount: {this.props.securityDeposit ? '$' + this.props.depositAmount : '$0'}</div>
            <div className='hostedByVerticalSpacing' onClick={() => {this.togglePanel()}}>
              <a className="link"><strong>Hide rules</strong></a><div id='up'></div>
            </div>
            <div className='line-break'></div>
          </div>
        )
      } else {
        return(
          <div>
            <h2>Policies</h2>
            <h3>House Rules</h3>
            <div>Check in Time: {this.props.checkInTime + 'pm'}</div>
            <div>Self Check In: {this.props.selfCheckIn ? 'Yes' : 'No'}</div>
            <div className='hostedByVerticalSpacing' onClick={() => {this.togglePanel()}}>
              <a className="link"><strong>Read all rules</strong></a><div id='down'></div>
            </div>
            <div className='line-break'></div>
          </div>
        )
      }
    }
}


export default Policies;