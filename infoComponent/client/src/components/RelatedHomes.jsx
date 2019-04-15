import React from 'react';
import Listing from './Listing.jsx';

class RelatedHomes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      start: 0,
      end: 3
    }
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
}

previous(){
  if (this.state.start > 0){
    this.setState({
      start: this.state.start - 1,
      end: this.state.end - 1
    })
  }
}

next(){
  if (this.state.end < 12){
    this.setState({
      start: this.state.start + 1,
      end: this.state.end + 1
    })
  }
}

    render(){
      var listings = this.props.listings.slice(this.state.start, this.state.end).map((listing, index) => {
        return <li id='carouselItem'><Listing key={listing} city={this.props.city} listingId={listing.listingId} listingImg={listing.listingImg} roomArrangement={listing.roomArrangement} listingTitle={listing.listingTitle} nightlyPrice={listing.nightlyPrice} reviewAvg={listing.reviewAvg} numOfReviews={listing.numOfReviews}/></li>
      })
      if (this.state.start < 1){
        return(
          <div>
            <h2>More homes you may like</h2>
            <div id='containerAndArrows'>
              <div id='leftArrowContainer'></div>
              <div id='carouselContainer'>
                <ul id='carouselList'>{listings}</ul>
              </div>
              <div id='rightArrowContainer' id='right' onClick={this.next}></div>
            </div>
          </div>
        )
      }
      if (this.state.end > 11){
        return(
          <div>
            <h2>More homes you may like</h2>
            <div id='containerAndArrows'>
              <div id='leftArrowContainer' id='left' onClick={this.previous}></div>
              <div id='carouselContainer'>
                <ul id='carouselList'>{listings}</ul>
              </div>
              <div id='rightArrowContainer'></div>
            </div>
          </div>
        )
      } else {
        return(
          <div>
            <h2>More homes you may like</h2>
            <div id='containerAndArrows'>
              <div id='leftArrowContainer' id='left' onClick={this.previous}></div>
              <div id='carouselContainer'>
                <ul id='carouselList'>{listings}</ul>
              </div>
              <div id='rightArrowContainer' id='right' onClick={this.next}></div>
            </div>
          </div>
        )
      }
    }
}


export default RelatedHomes;