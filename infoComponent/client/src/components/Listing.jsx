import React from 'react';

class Listing extends React.Component {
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
      if (!this.state.favorite){
        return(
          <div id='listingContainer'>
            <div id='listingImgContainer'><img className='listingImg' src={this.props.listingImg}></img><div onClick={this.toggleFavorite} className='heart' id='emptyHeart'></div></div>
            <div id='listingInfoContainer'>
            <div><span id='listingType'><strong>{((this.props.roomArrangement) + ' · ' + (this.props.city)).toUpperCase()}</strong></span></div>
            <div><strong>{this.props.listingTitle}</strong></div>
            <div><span id='pricing'>{'$' + this.props.nightlyPrice + ' per night'}</span></div>
              <div>
                <div><span id='carouselStar'></span><span id='reviews'><strong>{this.props.numOfReviews}</strong></span></div>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div id='listingContainer'>
            <div id='listingImgContainer'><img className='listingImg' src={this.props.listingImg}></img><div onClick={this.toggleFavorite} className='heart' id='redHeart'></div></div>
            <div id='listingInfoContainer'>
            <div><span id='listingType'><strong>{((this.props.roomArrangement) + ' · ' + (this.props.city)).toUpperCase()}</strong></span></div>
            <div><strong>{this.props.listingTitle}</strong></div>
            <div><span id='pricing'>{'$' + this.props.nightlyPrice + ' per night'}</span></div>
              <div>
                <div><span id='carouselStar'></span><span id='reviews'><strong>{this.props.numOfReviews}</strong></span></div>
              </div>
            </div>
          </div>
        )
      }
    }
}


export default Listing;