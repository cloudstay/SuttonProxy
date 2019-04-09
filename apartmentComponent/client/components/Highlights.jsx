import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKey, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Highlights = function(props) {
  let listing = props.listing;
  if (listing) {
    return (
      <div>
        <div className="container1"></div>
          <div style={{marginTop: 8}}>
            <div className="icon-container">
              <div style={{marginRight: 8}}>
                <div className="icons">
                  <span className="icon" aria-hidden="true">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                </div>
              </div>
            </div>
            <div className="info-container">
              <div className="info-header">{listing.type_of_listings}</div>
              <span className="text">{listing.max_guests === 1 ? '1 Guest' : listing.max_guests.toString() + ' Guests'}</span>
              <span aria-hidden="true"> . </span>
              <span className="text">{listing.bedrooms === 0 ? 'Studio' : listing.bedrooms === 1 ? '1 Bedroom' : listing.bedrooms.toString() + ' Bedrooms'} </span>
              <span aria-hidden="true"> . </span>
              <span className="text">{listing.beds === 1 ? '1 Bed' : listing.beds.toString() + ' Beds'}</span>
              <span aria-hidden="true"> . </span>
              <span className="text">{listing.baths === 1 ? '1 Bath' : listing.baths.toString() + ' Baths'}</span>
              </div>
            </div>
            <div style={{marginTop: 16}}>
              <div className="container1">
                <div className="icon-container">
                  <div style={{marginRight: 8}}>
                    <div className="icons">
                      <span className="icon" aria-hidden="true">
                      <FontAwesomeIcon icon={faKey} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="info-container">
                  <div className="info-header"> Great check-in experience </div>
                  <div className="text">{listing.checkin_rating}</div>
                </div>
              </div>
            </div>
            <div style={{marginTop: 16}}>
              <div className="container1">
                <div className="icon-container">
                  <div style={{marginRight: 8}}>
                    <div className="icons">
                      <span className="icon" aria-hidden="true">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="info-container">
                  <div className="info-header"> Great location </div>
                  <div className="text">{listing.location_rating}</div>
                </div>
              </div>
            </div>
            <div style={{marginTop: 24, marginBottom: 24}}>
              <div className="line-break"></div>
            </div>
      </div>
    )
  }
}

export default Highlights;