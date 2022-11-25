import React from "react";
import "./user.css";

function UserOrder({ name, description, withdrawals, deposit, date, balance }) {
  return (
    <div className="user pb-3 flex justify-between order-details ">
      <div className="order-name">{name}</div>
      <div className="order-name">{description}</div>
      <div className="order-name text-[#F04438]">{withdrawals}</div>
      <div className="order-name text-[#12B76A]">{deposit}</div>
      <div className="order-name">{date}</div>
      <div className="order-action">{balance}</div>
    </div>
  );
}

export default UserOrder;
