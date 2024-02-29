import { lazy } from "react";
import { ADD_TICKET, CONFIRM } from "./constant";

let initialState = {
  gheArr: [
    {
      "hang": "",
      "danhSachGhe": [
        { "soGhe": "1", "gia": 0 },
        { "soGhe": "2", "gia": 0 },
        { "soGhe": "3", "gia": 0 },
        { "soGhe": "4", "gia": 0 },
        { "soGhe": "5", "gia": 0 },
        { "soGhe": "6", "gia": 0 },
        { "soGhe": "7", "gia": 0 },
        { "soGhe": "8", "gia": 0 },
        { "soGhe": "9", "gia": 0 },
        { "soGhe": "10", "gia": 0 },
        { "soGhe": "11", "gia": 0 },
        { "soGhe": "12", "gia": 0 }
      ]
    }
    ,
    {
      "hang": "A",
      "danhSachGhe": [
        { "soGhe": "A1", "gia": 75000, "daDat": false },
        { "soGhe": "A2", "gia": 75000, "daDat": false },
        { "soGhe": "A3", "gia": 75000, "daDat": false },
        { "soGhe": "A4", "gia": 75000, "daDat": false },
        { "soGhe": "A5", "gia": 75000, "daDat": false },
        { "soGhe": "A6", "gia": 75000, "daDat": false },
        { "soGhe": "A7", "gia": 75000, "daDat": false },
        { "soGhe": "A8", "gia": 75000, "daDat": false },
        { "soGhe": "A9", "gia": 75000, "daDat": false },
        { "soGhe": "A10", "gia": 75000, "daDat": false },
        { "soGhe": "A11", "gia": 0, "daDat": true },
        { "soGhe": "A12", "gia": 0, "daDat": true }
      ]
    },
    {
      "hang": "B",
      "danhSachGhe": [
        { "soGhe": "B1", "gia": 75000, "daDat": false },
        { "soGhe": "B2", "gia": 75000, "daDat": false },
        { "soGhe": "B3", "gia": 75000, "daDat": false },
        { "soGhe": "B4", "gia": 75000, "daDat": false },
        { "soGhe": "B5", "gia": 75000, "daDat": false },
        { "soGhe": "B6", "gia": 75000, "daDat": false },
        { "soGhe": "B7", "gia": 75000, "daDat": false },
        { "soGhe": "B8", "gia": 75000, "daDat": false },
        { "soGhe": "B9", "gia": 75000, "daDat": false },
        { "soGhe": "B10", "gia": 75000, "daDat": false },
        { "soGhe": "B11", "gia": 75000, "daDat": false },
        { "soGhe": "B12", "gia": 75000, "daDat": false }
      ]
    },
    {
      "hang": "C",
      "danhSachGhe": [
        { "soGhe": "C1", "gia": 75000, "daDat": false },
        { "soGhe": "C2", "gia": 75000, "daDat": false },
        { "soGhe": "C3", "gia": 75000, "daDat": false },
        { "soGhe": "C4", "gia": 75000, "daDat": false },
        { "soGhe": "C5", "gia": 75000, "daDat": false },
        { "soGhe": "C6", "gia": 75000, "daDat": false },
        { "soGhe": "C7", "gia": 75000, "daDat": false },
        { "soGhe": "C8", "gia": 75000, "daDat": false },
        { "soGhe": "C9", "gia": 75000, "daDat": false },
        { "soGhe": "C10", "gia": 75000, "daDat": false },
        { "soGhe": "C11", "gia": 75000, "daDat": false },
        { "soGhe": "C12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "D",
      "danhSachGhe": [
        { "soGhe": "D1", "gia": 75000, "daDat": false },
        { "soGhe": "D2", "gia": 75000, "daDat": false },
        { "soGhe": "D3", "gia": 75000, "daDat": false },
        { "soGhe": "D4", "gia": 75000, "daDat": false },
        { "soGhe": "D5", "gia": 75000, "daDat": false },
        { "soGhe": "D6", "gia": 75000, "daDat": false },
        { "soGhe": "D7", "gia": 75000, "daDat": false },
        { "soGhe": "D8", "gia": 75000, "daDat": false },
        { "soGhe": "D9", "gia": 75000, "daDat": false },
        { "soGhe": "D10", "gia": 75000, "daDat": false },
        { "soGhe": "D11", "gia": 75000, "daDat": false },
        { "soGhe": "D12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "E",
      "danhSachGhe": [
        { "soGhe": "E1", "gia": 75000, "daDat": false },
        { "soGhe": "E2", "gia": 75000, "daDat": false },
        { "soGhe": "E3", "gia": 75000, "daDat": false },
        { "soGhe": "E4", "gia": 75000, "daDat": false },
        { "soGhe": "E5", "gia": 75000, "daDat": false },
        { "soGhe": "E6", "gia": 75000, "daDat": false },
        { "soGhe": "E7", "gia": 75000, "daDat": false },
        { "soGhe": "E8", "gia": 75000, "daDat": false },
        { "soGhe": "E9", "gia": 75000, "daDat": false },
        { "soGhe": "E10", "gia": 75000, "daDat": false },
        { "soGhe": "E11", "gia": 75000, "daDat": false },
        { "soGhe": "E12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "F",
      "danhSachGhe": [
        { "soGhe": "F1", "gia": 75000, "daDat": false },
        { "soGhe": "F2", "gia": 75000, "daDat": false },
        { "soGhe": "F3", "gia": 75000, "daDat": false },
        { "soGhe": "F4", "gia": 75000, "daDat": false },
        { "soGhe": "F5", "gia": 75000, "daDat": false },
        { "soGhe": "F6", "gia": 75000, "daDat": false },
        { "soGhe": "F7", "gia": 75000, "daDat": false },
        { "soGhe": "F8", "gia": 75000, "daDat": false },
        { "soGhe": "F9", "gia": 75000, "daDat": false },
        { "soGhe": "F10", "gia": 75000, "daDat": false },
        { "soGhe": "F11", "gia": 75000, "daDat": false },
        { "soGhe": "F12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "G",
      "danhSachGhe": [
        { "soGhe": "G1", "gia": 75000, "daDat": false },
        { "soGhe": "G2", "gia": 75000, "daDat": false },
        { "soGhe": "G3", "gia": 75000, "daDat": false },
        { "soGhe": "G4", "gia": 75000, "daDat": false },
        { "soGhe": "G5", "gia": 75000, "daDat": false },
        { "soGhe": "G6", "gia": 75000, "daDat": false },
        { "soGhe": "G7", "gia": 75000, "daDat": false },
        { "soGhe": "G8", "gia": 75000, "daDat": false },
        { "soGhe": "G9", "gia": 75000, "daDat": false },
        { "soGhe": "G10", "gia": 75000, "daDat": false },
        { "soGhe": "G11", "gia": 75000, "daDat": false },
        { "soGhe": "G12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "H",
      "danhSachGhe": [
        { "soGhe": "H1", "gia": 75000, "daDat": false },
        { "soGhe": "H2", "gia": 75000, "daDat": false },
        { "soGhe": "H3", "gia": 75000, "daDat": false },
        { "soGhe": "H4", "gia": 75000, "daDat": false },
        { "soGhe": "H5", "gia": 75000, "daDat": false },
        { "soGhe": "H6", "gia": 75000, "daDat": false },
        { "soGhe": "H7", "gia": 75000, "daDat": false },
        { "soGhe": "H8", "gia": 75000, "daDat": false },
        { "soGhe": "H9", "gia": 75000, "daDat": false },
        { "soGhe": "H10", "gia": 75000, "daDat": false },
        { "soGhe": "H11", "gia": 75000, "daDat": false },
        { "soGhe": "H12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "I",
      "danhSachGhe": [
        { "soGhe": "I1", "gia": 75000, "daDat": false },
        { "soGhe": "I2", "gia": 75000, "daDat": false },
        { "soGhe": "I3", "gia": 75000, "daDat": false },
        { "soGhe": "I4", "gia": 75000, "daDat": false },
        { "soGhe": "I5", "gia": 75000, "daDat": false },
        { "soGhe": "I6", "gia": 75000, "daDat": false },
        { "soGhe": "I7", "gia": 75000, "daDat": false },
        { "soGhe": "I8", "gia": 75000, "daDat": false },
        { "soGhe": "I9", "gia": 75000, "daDat": false },
        { "soGhe": "I10", "gia": 75000, "daDat": false },
        { "soGhe": "I11", "gia": 75000, "daDat": false },
        { "soGhe": "I12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "J",
      "danhSachGhe": [
        { "soGhe": "J1", "gia": 75000, "daDat": false },
        { "soGhe": "J2", "gia": 75000, "daDat": false },
        { "soGhe": "J3", "gia": 75000, "daDat": false },
        { "soGhe": "J4", "gia": 75000, "daDat": false },
        { "soGhe": "J5", "gia": 75000, "daDat": false },
        { "soGhe": "J6", "gia": 75000, "daDat": false },
        { "soGhe": "J7", "gia": 75000, "daDat": false },
        { "soGhe": "J8", "gia": 75000, "daDat": false },
        { "soGhe": "J9", "gia": 75000, "daDat": false },
        { "soGhe": "J10", "gia": 75000, "daDat": false },
        { "soGhe": "J11", "gia": 75000, "daDat": false },
        { "soGhe": "J12", "gia": 75000, "daDat": false }
      ]
    }

  ],

  cart: [], // chứa object shoe khi user click button confirm
  ticket: [],
  name: null,
  number: null,
};

export let ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKET: {
      let cloneCart = [...state.cart];
      let existingIndex = cloneCart.findIndex((item) => item.soGhe === action.payload.soGhe);

      if (existingIndex !== -1) {
        // Đối tượng đã tồn tại trong cart
        // Xoá đối tượng cũ
        cloneCart.splice(existingIndex, 1);
      }
      else {
        // Thêm đối tượng mới vào cart
        cloneCart.push({ ...action.payload });
      }
      state.cart = cloneCart;
      return { ...state };
    }
    case CONFIRM: {
      // Kiểm tra xem name và number đã điền chưa
      const nameInput = document.getElementById('Username');
      const numberInput = document.getElementById('Numseats');
    
      // Kiểm tra xem số ghế đã chọn có bằng với số lượng ghế nhập vào hay không
      if (!nameInput.value || !numberInput.value || parseInt(numberInput.value, 10) !== state.cart.length) {
        alert('Vui lòng điền đầy đủ thông tin. Số ghế khi chọn phải bằng với số ghế nhập vào');
        return {...state};
        break;
      }
    
      let updatedGheArr = state.gheArr.map((hang) => {
        let updatedDanhSachGhe = hang.danhSachGhe.map((ghe) => {
          let matchedCartItem = state.cart.find((cartItem) => cartItem.soGhe === ghe.soGhe);
          if (matchedCartItem) {
            return { ...ghe, daDat: true };
          }
          return ghe;
        });
        return { ...hang, danhSachGhe: updatedDanhSachGhe };
      });
    
      state.gheArr = updatedGheArr;
    
      // Lấy danh sách ghế đã chọn từ cart
      let selectedSeats = state.cart.map(item => item.soGhe);
    
      // Xử lý tên và số ghế
      let name = nameInput.value;
      let number = parseInt(numberInput.value, 10);
      // Cập nhật state
      state.name = name;
      state.number = number;
    
      // Cập nhật state.ticket
      state.ticket = [...state.ticket, { Name: name, Number: number, Seats: selectedSeats }];
      state.cart = [];
      return { ...state };
    }
    
    
    default:
      return state;
  }
};
