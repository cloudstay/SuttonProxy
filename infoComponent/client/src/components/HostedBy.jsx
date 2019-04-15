import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class HostedBy extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isVerified: 'Not Verified'

    }
  }

  componentDidMount(){
    if (this.props.isVerified){
      this.setState({
        isVerified: false      
      });
    }
  }

    render(){
      if (this.props.isVerified){
        return(
          <div >
            <div className='line-break'></div>
            <div id='hostInfoHeaderContainer'>
            <div id='headingContainer'>
                <h2 id='hostedByHostName'>Hosted by {this.props.hostName}</h2>
                <div className='hostedByVerticalSpacing'>{this.props.city} · Joined <Moment fromNow>{this.props.memberSince}</Moment></div>
              </div>
              <div id='hostImageContainer'>
                <div><img id='hostImage' src={this.props.hostImage}></img></div>
              </div>
            </div>
            <div id='hostedByDetails'>
              <div className='container'><span id='star'></span><div className='hostedByVerticalSpacing' className='hostedBySideSpacingOne'>{this.props.numOfReviews} Reviews</div><span id='check'></span><div className='hostedByVerticalSpacing' className='hostedBySideSpacingTwo'>Verified</div></div>
              <p className='hostedByVerticalSpacing'>{this.props.hostInfo}</p>
              <div className='hostedByVerticalSpacing'>Languages: <strong>{this.props.languages}</strong></div>
              <div className='hostedByVerticalSpacing'>Response rate: <strong>{this.props.responseRate}%</strong></div>
              <div className='hostedByVerticalSpacing'>Response time: <strong>within {this.props.responseTime} hours</strong></div>
            </div>
            <button id='hostedByContactHostButton' className='hostedByVerticalSpacing'><strong>Contact host</strong></button>
            <div className='line-break'></div>
          </div>
        )
      } else {
        return (
          <div >
            <div className='line-break'></div>
            <div id='hostInfoHeaderContainer'>
              <div id='headingContainer'>
                <h2 id='hostedByHostName'>Hosted by {this.props.hostName}</h2>
                <div className='hostedByVerticalSpacing'>{this.props.city} · Joined <Moment fromNow>{this.props.memberSince}</Moment></div>
              </div>
              <div id='hostImageContainer'>
              <div><img id='hostImage' src={this.props.hostImage}></img></div>
              </div>
            </div>
            <div id='hostedByDetails'>
              <div className='container'><span id='star'></span><div className='hostedByVerticalSpacing' className='hostedBySideSpacingOne'>{this.props.numOfReviews} Reviews</div><div></div><div className='hostedByVerticalSpacing' className='hostedBySideSpacingTwo'></div></div>
              <p className='hostedByVerticalSpacing'>{this.props.hostInfo}</p>
              <div className='hostedByVerticalSpacing'>Languages: <strong>{this.props.languages}</strong></div>
              <div className='hostedByVerticalSpacing'>Response rate: <strong>{this.props.responseRate}%</strong></div>
              <div className='hostedByVerticalSpacing'>Response time: <strong>within {this.props.responseTime} hours</strong></div>
            </div>
            <button id='hostedByContactHostButton' className='hostedByVerticalSpacing'><strong>Contact host</strong></button>
            <div className='line-break'></div>
          </div>
      )
    }
  }
}

export default HostedBy;