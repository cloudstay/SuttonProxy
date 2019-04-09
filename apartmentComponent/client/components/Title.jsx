import React from 'react';

const Title = function(props) {
  let listing = props.listing;
  if (listing) {
    // console.log('props', listing.city);
    let name = listing.listing_name.charAt(0).toUpperCase() + listing.listing_name.slice(1)
    return (
      <div className="header-container" style={{marginTop: 24, marginBottom: 8}}>
        <div className="main-title">
          <div className="title-container" style={{marginBottom: 6}}>
            <span className="listing-title-text">
              <h1 className="title-bold">{name}</h1>
            </span>
          </div>
          <div style={{marginBottom: 16}} className="container1">
            <div className="text">
              {listing.city}
            </div>
          </div>
        </div>
        <div className="host-container">
          <div style={{marginTop: 12}}>
            <div className="host-box">
              <div style={{marginBottom: 0}}>
                <div className="host-image-box">
                  <img src={listing.host_picture_url} className="host-picture host-image" height={64} width={64} alt={listing.host_name}/>
                </div>
              </div>
              <div className="host-name">
                {listing.host_name}
              </div>
            </div>
          </div>
        </div>
      </div>
    )} else {
      return (
        <div>Loading...</div>
      )
    }
}

export default Title;
