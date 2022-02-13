import React from "react";
import "./App.css";
import CustomerInfo from "./components/customerInfo";
import Header from "./components/Header";
import OrderInfo from "./components/orderInfo";
import ProductList from "./components/productList";

function App() {
  const userData = {
    name: "Alan Ford",
    employe_id: "00005152",
    Appointment_time: "9:00",
    Appointment_Date: "08-02-2022",
    e_mail: "alan.ford@gmail.com",
    phone: "+31105123278",
    profile_img: "https://www.w3schools.com/howto/img_avatar.png",
    status: "In Progress",
    date: "10:30",
    time: "(25-05-16)",
  };
  return (
    <div className="site-container">
      <Header Data={userData} />
      <CustomerInfo Data={userData} />
      <OrderInfo Data={userData} />
      <ProductList Data={userData} />
    </div>
  );
}

export default App;
