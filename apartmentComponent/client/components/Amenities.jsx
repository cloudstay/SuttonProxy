import React from 'react';
import Modal from 'react-modal';
import uuidv4 from 'uuid/v4';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'scroll',
    height                : '600px',
    width                 : '600px'
  }
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('div');

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      modal: true
    })
  }

  handleCloseModal(){
    this.setState({
      modal: false
    })
  }

  render() {
    let amenities = this.props.amenities;
    console.log('Amenities are: ', amenities);

    let amenitiesArray = [];

    for (let key in amenities) {
      if(key !== '_id'){
        if(amenities[key]) {
          amenitiesArray.unshift(<div key={uuidv4()}>{key}</div>)
        } else {
          amenitiesArray.push(<div key={uuidv4()}><s>{key}</s></div>)
        }
      }
    }
    return (
        <div className="listing-amenities">
          <div style={{marginBottom: 0}}>
            <div style={{marginBottom: 16}}>
              <h2 className="title-bold">
                <div className="sub-header">Amenities</div>
              </h2>
            </div>
            <div className="listing-amenities-container">
              <div className="amenities-container">
                <div style={{marginBottom: 16}}>
                  <div className="listing-amenities_wrapper">
                    {amenitiesArray && amenitiesArray.slice(0, 4).map((item, index) =>
                      <div className="amenity-name" key={index}>
                        <span className="amenity">{item}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="amenitiesModal" className="info-header">
            <button type="button"  className="button" aria-expanded="false" aria-busy="false" onClick={this.handleOpenModal}>
              <div className="show-all">
                Show all amenities
              </div>
            </button>
            <Modal
                isOpen={this.state.modal}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.handleCloseModal}
                style={customStyles}
                contentLabel="Amenities Modal"
              >
                <div className="close-container">
                  <button type='button' className="close-btn" onClick={this.handleCloseModal}>X</button>
                </div>
                <h1 className="amenities-header">Amenities</h1>
                  {amenitiesArray.map((item, index) =>
                    <div className="listing-amenities-detail" key={index}>{item}</div>
                )}
              </Modal>
          </div>
          <div style={{marginTop: 24, marginBottom: 24}}>
            <div className="line-break"></div>
          </div>
      </div>
    )
  }

}

export default Amenities;

