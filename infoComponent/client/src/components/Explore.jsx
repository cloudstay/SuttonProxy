import React from 'react';
var faker = require('faker');

class Explore extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <h2>Explore other options in and around {this.props.city}</h2>
          <div className='exploreTitleVerticalSpacing'>More places to stay in {this.props.city}: <a className="linkExplore">Houses</a> · <a className="linkExplore">Bed and breakfasts</a> · <a className="linkExplore">Lofts</a> · <a className="linkExplore">Villas</a> · <a className="linkExplore">Condominiums</a></div>
          <div className='exploreRowContainer'>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
          </div>
          <div className='exploreRowContainer'>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
          </div>
          <div className='exploreRowContainer'>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
          </div>
          <div className='exploreRowContainer'>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
          </div>
          <div className='exploreRowContainer'>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
          </div>
          <div className='exploreRowContainer'>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
            <div className='exploreHorizontalSpacing'><a className="linkExplore">{faker.address.city()}</a></div>
          </div>
        </div>
      )
    }
}


export default Explore;