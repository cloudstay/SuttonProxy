import React from 'react';
import Event from './Event.jsx';

class ThingsToDo extends React.Component {
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
  if (this.state.end < 8){
    this.setState({
      start: this.state.start + 1,
      end: this.state.end + 1
    })
  }
}

    render(){
      var thingsToDo = this.props.thingsToDo.slice(this.state.start, this.state.end).map((event, index) => {
        return <li id='carouselItem'><Event key={event} eventImg={event.eventImg} eventCategory={event.eventCategory} eventName={event.eventName} price={event.price} ratingAvg={event.ratingAvg} numOfRatings={event.numOfRatings}/></li>
      })
      if (this.state.start < 1){
        return(
          <div>
            <h2>Things to do near this home</h2>
            <div id='containerAndArrows'>
              <div id='leftArrowContainer'></div>
              <div id='carouselContainer'>
                <ul id='carouselList'>{thingsToDo}</ul>
              </div>
              <div id='rightArrowContainer' id='right' onClick={this.next}></div>
            </div>
          </div>
        )
      } 
      if (this.state.end > 7){
        return(
          <div>
            <h2>Things to do near this home</h2>
            <div id='containerAndArrows'>
              <div id='leftArrowContainer' id='left' onClick={this.previous}></div>
              <div id='carouselContainer'>
                <ul id='carouselList'>{thingsToDo}</ul>
              </div>
              <div id='rightArrowContainer'></div>
            </div>
          </div>
        )
      } else {
        return(
          <div>
            <h2>Things to do near this home</h2>
            <div id='containerAndArrows'>
              <div id='leftArrowContainer' id='left' onClick={this.previous}></div>
              <div id='carouselContainer'>
                <ul id='carouselList'>{thingsToDo}</ul>
              </div>
              <div id='rightArrowContainer' id='right' onClick={this.next}></div>
            </div>
          </div>
        )
      }
    }
}


export default ThingsToDo;
