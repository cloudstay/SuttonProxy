import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangements from './SleepingArrangements.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
    this.getListing = this.getListing.bind(this);
  }


  componentWillMount() {
    this.getListing();
  }


  getListing() {
    var listing_Id=window.location.search.slice(4,7);
    console.log(listing_Id)
    axios.get(`/rooms/apart/api/${listing_Id}`)
    .then((response) => {
      console.log('send a get request to the server', response.data);
      this.setState({
        listings: response.data
      })
    })
    .catch((error) => {
      console.log('Error in retrieving listings: ', error)
    })
  }


  render() {
    // console.log('listings:', this.state.listings[0]);
    return (
      <div id="main">
        <div className="main-container">
          <div>
            {this.state.listings[0] && <Title listing ={this.state.listings[0]}/>}
            {this.state.listings[0] && <Highlights listing ={this.state.listings[0]}/>}
            {this.state.listings[0] && <Description listing={this.state.listings[0]}/>}
            {this.state.listings[0] && <Amenities amenities ={this.state.listings[0].amenities[0]}/>}
            {this.state.listings[0] && <SleepingArrangements sleepingArrangements ={this.state.listings[0].sleeping_arrangements}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;