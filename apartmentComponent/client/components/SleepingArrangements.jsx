import React from 'react';

class SleepingArrangements extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      start: 0,
      end: 2,
      rightArrow: false,
      leftArrow: false
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }


  componentDidMount(){
    this.setState({
      sleepingArrangements: this.props.sleepingArrangements,
      rightArrow: this.props.sleepingArrangements.length > 3
    })
  }

  handleArrowClick (direction) {
    // console.log("clicked direction ", direction)
    if (direction === "right" && this.state.sleepingArrangements.length > this.state.end) {
      this.setState({
        start: this.state.end
      })
      if (this.state.sleepingArrangements.length > this.state.end + 3) {
        this.setState({end: this.state.end + 3})
      } else {
        this.setState({end: this.state.sleepingArrangements.length})
      }
    } else if (direction === "left" && this.state.start >= 2) {
      this.setState({
        start: this.state.start - 2,
      })
      if (this.state.end > 6){
        this.setState({
          end: this.state.end - 3,
        })
      } else {
        this.setState({
          end: 2,
        })
      }
    }

  }


  render() {
    // console.log('sleepingArrangements: ', this.props.sleepingArrangements.slice('_').join(' '))
    // console.log("current state: ", this.state)
    return (
      <div style={{marginBottom: 0, marginTop: 30}}>
        <section>
          <div style={{marginBottom: 16}}>
            <h2 className="title-bold">
              <div className="sub-header">Sleeping Arrangements</div>
            </h2>
          </div>
          <div className="listing-sa-container">
            {(this.state.start > 0) &&
              <div onClick={()=> this.handleArrowClick("left")} className="arrow-btn" style={{marginRight: -30}}>
                <span className="arrow-container">
                  <button type='button' className="left-button-container left-button" onClick={this.handleCloseModal}></button>
                </span>
              </div>}
            {
              this.state.sleepingArrangements && this.state.sleepingArrangements.map( (item, index) => {
                if ((index === 0 && this.state.start === 0) || (index > this.state.start && index <= this.state.end)) {
                  return (
                    <div className="box" key={index}>
                    <img className="bed-icon" src={`https://s3-us-west-1.amazonaws.com/staycloudphotobucket/svg/bed.svg`}></img>
                    <div style={{marginBottom: 8, marginLeft: -5}} className="info-header">Bedroom {index + 1}</div>
                    <div className="info" style={{marginLeft: -5}}>{item.split('_').join(' ')}</div>
                    </div>
                  )
                }
              })
            }
            {(this.state.end <= 2) &&
              <div onClick={()=> this.handleArrowClick("right")} className="arrow-btn">
              <span className="arrow-container">
                  <button type='button' className="right-button-container right-button" onClick={this.handleCloseModal}></button>
                </span>
              </div>}
          </div>
          <div style={{marginTop: 24, marginBottom: 24}}>
            <div className="line-break"></div>
          </div>
        </section>
      </div>
    )
  }
}

export default SleepingArrangements;