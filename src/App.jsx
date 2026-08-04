import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import DashboardLayout from "./pages/DashboardLayout";

import DashboardHome from "./dashboard/DashboardHome";
import Products from "./dashboard/Products";
import Customers from "./dashboard/Customers";
import Orders from "./dashboard/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}>

          <Route index element={<DashboardHome />} />

          <Route path="products" element={<Products />} />

          <Route path="customers" element={<Customers />} />

          <Route path="orders" element={<Orders />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;