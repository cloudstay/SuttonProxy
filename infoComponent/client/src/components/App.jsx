import React from 'react';
import $ from 'jquery';
import HostedBy from './HostedBy.jsx';
import Communications from './Communications.jsx';
import TheNeighborhood from './TheNeighborhood.jsx';
import Policies from './Policies.jsx';
import Cancelations from './Cancelations.jsx';
import RelatedHomes from './RelatedHomes.jsx';
import ThingsToDo from './ThingsToDo.jsx';
import Explore from './Explore.jsx';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            listing: {},
            relatedListings: [],
            thingsToDo: []
        }
    }

    componentDidMount(){
        var listing_Id=window.location.search.slice(4,7);
        $.ajax({
            url: '/rooms/info/api/',
            type: 'GET',
            data: {id: listing_Id},
            success: (data) => {
                data=JSON.parse(data);
                this.setState({
                    listing: data[0],
                    relatedListings: data[0].relatedHomes,
                    thingsToDo: data[0].thingsToDo
                })
            }
        })
    }

    render(){
      return(
        <div>
          <HostedBy hostName={this.state.listing.hostName} hostImage={this.state.listing.hostImage} city={this.state.listing.city} memberSince={this.state.listing.memberSince} isVerified={this.state.listing.isVerified} numOfReviews={this.state.listing.numOfReviews} hostInfo={this.state.listing.hostInfo} languages={this.state.listing.languages} responseRate={this.state.listing.responseRate} responseTime={this.state.listing.responseTime}/>
          <Communications/>
          <TheNeighborhood neighborhoodInfo={this.state.listing.neighborhoodInfo} city={this.state.listing.city}/>
          <Policies selfCheckIn={this.state.listing.selfCheckIn} checkInTime={this.state.listing.checkInTime} smoking={this.state.listing.smoking} parties={this.state.listing.parties} pets={this.state.listing.pets} securityDeposit={this.state.listing.securityDeposit} depositAmount={this.state.listing.depositAmount}/>
          <Cancelations policyDiagram={this.state.listing.policyDiagram}/>
          <RelatedHomes listings={this.state.relatedListings} city={this.state.listing.city}/>
          <ThingsToDo thingsToDo={this.state.thingsToDo}/>
          <Explore city={this.state.listing.city}/> 
          <div className='line-break-long'></div>
        </div>
      )
    }
}


export default App;