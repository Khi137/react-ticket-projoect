import React, { Component } from 'react';
import { connect } from "react-redux";
import Item from './Item';
import { confirmTicketAction } from './redux/action';
class List extends Component {

    renderListGhe = () => {
        return this.props.gheArr.slice(1).map((hang) => (
            <tr>
                <td key={hang.hang}></td>
                <h2>{hang.hang}</h2>
                {hang.danhSachGhe.map((ghe) => (
                    <Item key={ghe.soGhe} data={ghe} />
                ))}
            </tr>
        ));
    };
    render() {
        return <div className='seatStructure txt-center'>
            <ul class="seat_w3ls">
                <li class="smallBox greenBox">Selected Seat</li>

                <li class="smallBox redBox">Reserved Seat</li>

                <li class="smallBox emptyBox">Empty Seat</li>
            </ul>
            <div id="listGhe">
                <table id="seatsBlock">
                    <p id="notification"></p>
                    <tr>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                </table>
                {this.renderListGhe()}
                <div class="screen">
                    <h2 class="wthree">Screen this way</h2>
                </div>
            </div>

            <button onClick={() => { this.props.handleClickConfirm(this.props.data); }} >Confirm Selection</button>
        </div>;
    };


}

let mapStateToProps = (state) => {
    return {
        gheArr: state.gheArr,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleClickConfirm: (payload) => {
            dispatch(confirmTicketAction(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
