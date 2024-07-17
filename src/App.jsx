// import Hello from "./component/Hello"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./crud/Home"

import { FaAddressBook } from "react-icons/fa";
import { FcHome } from "react-icons/fc";

import { VscCopilot } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";


import Insert from "./crud/Insert";
import View from "./crud/View";
import Edit from "./crud/Edit";

function App() {
  return (
    <>
    {/* react component basic */}
    {/* <Hello/> */}
    {/* crud app */}

    <h1 className="head">
      <Link to="/"><VscHome /> Home</Link>
      <Link to="/insert"><FaAddressBook />  Insert Data</Link>
    </h1>

    <div className="mid">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/insert" element={<Insert/>}></Route>
      <Route path="/view/:id" element={<View/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
