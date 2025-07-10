import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4 flex justify-between">
          <h1 className="text-xl font-bold">SuperShop</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/products" className="hover:text-blue-500">Products</Link>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/register" className="hover:text-blue-500">Register</Link>
            <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <div className="p-8">Welcome to SuperShop! Browse and order your favorite items.</div>;
}

function Products() {
  const sampleProducts = [
    { id: 1, name: "Apple", price: "$1" },
    { id: 2, name: "Milk", price: "$2" },
    { id: 3, name: "Bread", price: "$1.5" },
  ];
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {sampleProducts.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">{item.name}</h2>
          <p>{item.price}</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">Order</button>
        </div>
      ))}
    </div>
  );
}

function Login() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="text" placeholder="Email" className="block mb-2 p-2 border w-full" />
      <input type="password" placeholder="Password" className="block mb-4 p-2 border w-full" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}

function Register() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="block mb-2 p-2 border w-full" />
      <input type="email" placeholder="Email" className="block mb-2 p-2 border w-full" />
      <input type="password" placeholder="Password" className="block mb-4 p-2 border w-full" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}

function Dashboard() {
  return <div className="p-8">This is the employee/manager dashboard (stock tracking coming soon!)</div>;
}

export default App;
