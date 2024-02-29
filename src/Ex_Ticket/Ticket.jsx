import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ticket extends Component {
  renderListTicket = () => {
    return this.props.ticket.map((item, index) => (
      <tr key={index}>
        <td>
          <textarea id={`nameDisplay`}>{item.Name}</textarea>
        </td>
        <td>
          <textarea id={`NumberDisplay`}>{item.Number}</textarea>
        </td>
        <td>
          <textarea id={`seatsDisplay`}>{item.Seats.join(', ')}</textarea>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="displayerBoxes txt-center">
        <table className="Displaytable w3ls-table" width="100%">

            <tr>
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
            </tr>

          {this.renderListTicket()}
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    ticket: state.ticket, 
  };
};

export default connect(mapStateToProps)(Ticket);
