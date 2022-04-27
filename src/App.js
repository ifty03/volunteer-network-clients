import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvents from "./Pages/AddEvents/AddEvents";
import Blogs from "./Pages/Blogs/Blogs";
import Donations from "./Pages/Donations/Donations";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RegisterList from "./Pages/RegisterList/RegisterList";
import Header from "./Pages/Shared/Header/Header";
import SignUP from "./Pages/SignUp/SignUP";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/donations" element={<Donations></Donations>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/registerList"
          element={<RegisterList></RegisterList>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUP" element={<SignUP></SignUP>}></Route>
        <Route path="/addEvents" element={<AddEvents></AddEvents>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
