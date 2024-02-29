import React, { Component } from 'react'
import Detail from './Detail'
import "../Ex_Ticket/css/style.css"
import List from './List'
import Cart from './Ticket'

export default class Ex_Ticket extends Component {
    render() {
        return (
            <div class="container">
                <div className="w3ls-reg">
                    <Detail></Detail>
                    <List></List>
                    <Cart></Cart>
                </div>
            </div>
        )
    }
}
