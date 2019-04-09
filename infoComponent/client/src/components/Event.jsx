import React from 'react';

class Event extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      favorite: false
    }
    this.toggleFavorite = this.toggleFavorite.bind(this);
}

toggleFavorite(){
  this.setState({
    favorite: this.state.favorite ? false : true
  })
}


    render(){

      if (this.state.favorite === false){
        return(
          <div id='eventContainer'>
            <div id='listingImgContainer'><img className='listingImg' src={this.props.eventImg}></img><div onClick={this.toggleFavorite} className='heart' id='emptyHeart' ></div></div>
            <div id='eventInfoContainer'>
              <div><span id='eventType'><strong>{(this.props.eventCategory).toUpperCase()}</strong></span></div>
              <div><strong>{this.props.eventName}</strong></div>
              <div><span id='pricing'>{'$' + this.props.price + ' per person'}</span></div>
              <div>
                <div><span id='reviewsAvg'><strong>{this.props.ratingAvg}</strong></span><span id='carouselStar'></span><span id='reviews'>{' (' + this.props.numOfRatings + ') '}</span></div>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div id='eventContainer'>
            <div id='listingImgContainer'><img className='listingImg' src={this.props.eventImg}></img><div onClick={this.toggleFavorite} className='heart' id='redHeart' ></div></div>
            <div id='eventInfoContainer'>
              <div><span id='eventType'><strong>{(this.props.eventCategory).toUpperCase()}</strong></span></div>
              <div><strong>{this.props.eventName}</strong></div>
              <div><span id='pricing'>{'$' + this.props.price + ' per person'}</span></div>
              <div>
                <div><span id='reviewsAvg'><strong>{this.props.ratingAvg}</strong></span><span id='carouselStar'></span><span id='reviews'>{' (' + this.props.numOfRatings + ') '}</span></div>
              </div>
            </div>
          </div>
        )
      }
    }
}


export default Event;