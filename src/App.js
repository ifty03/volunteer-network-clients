import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvents from "./Pages/AddEvents/AddEvents";
import Blogs from "./Pages/Blogs/Blogs";
import Donation from "./Pages/Donation/Donation";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/donation" element={<Donation></Donation>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/addEvents" element={<AddEvents></AddEvents>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
