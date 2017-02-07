import React from 'react';

class RoboInfo extends React.Component {
  // you need a constructor if you want initial state
  constructor() {
    // you need to call super() if you have a constructor
    super();

    // set up initial state (use this.state instead of getInitialState)
    this.state = {
      robots: [],
      drones: []
    };

    // functions must be bound manually with ES6 classes
    this.flyDrones = this.flyDrones.bind(this);
  }

  componentDidMount() {
    this.setState({
      robots: this.props.robots,
      drones: this.props.drones
    })
  }

  // no commas between functions (classes have different syntax than objects)
  flyDrones() {
    this.state.drones.forEach(drone => drone.fly());
  }

  // render is the only required function
  render() {
    return (
      <div>
        <button onClick={this.flyDrones}>Fly Drones</button>
        <ul>
          {this.state.drones.length > 0 ? this.state.drones.map((drone, indx) => (<li key={indx}>{`${drone.name} is at ${drone.current_location} and is ready to fly.`}</li>)) : <h1>Loading...</h1>}
        </ul>
      </div>
    );
  }
}

// RoboInfo.propTypes = {
//   drones: React.PropTypes.array,
//   robots: React.PropTypes.array
// };

export default RoboInfo;
