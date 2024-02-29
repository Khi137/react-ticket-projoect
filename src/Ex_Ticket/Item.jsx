import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTicketAction } from './redux/action';

class Item extends Component {
    render() {
        let { value } = this.props.data; // Giả sử value chứa thông tin ghế
        console.log(this.props.data)
        return (
            this.props.data.daDat ? 
            <td>
                <input  
                type="checkbox" className={`seats selectedSeat`} value={value} checked/>
            </td> 
            : 
            <td>
                <input  onClick={() => {this.props.handleClickAdd(this.props.data);}} type="checkbox" className={`seats`} value={value}/>
            </td>
        );
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleClickAdd: (ghe) => {
            dispatch(addTicketAction(ghe));
          },
    };
};

export default connect(null, mapDispatchToProps)(Item);