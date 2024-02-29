import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
        
        <div class="inputForm">
        <h2>fill the required details below and select your seats</h2>
        <div class="mr_agilemain">
            <div class="agileits-left">
                <label> Name
                    <span>*</span>
                </label>
                <input type="text" id="Username" required></input>
            </div>
            <div class="agileits-right">
                <label> Number of Seats
                    <span>*</span>
                </label>
                
                <input type="number" id="Numseats" required min="1"></input>
            </div>
        </div>
        <button>Start Selecting</button>
    </div>
    )
  }
}
