import React from 'react';

class DriverForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          Name: <input type="text"></input><br/>
          Destination: <input type="text"></input><br/>
          Origin: <input type="text"></input><br/>
          Departure Date: <input type="text"></input><br/>
          # of Open Seats: <input type="text"></input><br/>
          Price: <input type="text"></input><br/>
        </form>
      </div>
    );
  }
}

export default DriverForm;