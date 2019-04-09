import React from 'react';

class Cancelations extends React.Component {
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
            <h2>Cancellations</h2>
            <div>
              <img src={this.props.policyDiagram} id='policyDiagram' alt="Policy Diagram"></img>
            </div>
            <div className='hostedByVerticalSpacing'>
              <a className="link"><strong>Get full details</strong></a>
            </div>
            <div className='hostedByVerticalSpacing' onClick={() => {this.togglePanel()}}>
              <a className="link"><strong>Hide policies</strong></a><div id='up'></div>
            </div>
            <div className='line-break'></div>
          </div>
        )
      } else {
        return(
          <div>
            <h2>Cancellations</h2>
            <div>
            </div>
            <div className='hostedByVerticalSpacing' onClick={() => {this.togglePanel()}}>
              <a className="link"><strong>Read more about the policy</strong></a><div id='down'></div>
            </div>
            <div className='line-break'></div>
          </div>
        )
      }
    }
}


export default Cancelations;