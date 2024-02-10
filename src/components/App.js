import React from "react";
import ListEmployee from "./ListEmployee";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Employee";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                {/* // http://localhost:3000 */}
                <Route path="/" element={ <ListEmployee /> }></Route>
                {/* // http://localhost:3000/employees */}
                <Route path="/employees" element={ <ListEmployee /> }></Route>
                {/* // http://localhost:3000/add-employee */}
                <Route path="/add-employee" element={ <Employee /> }></Route>
                {/* // http://localhost:3000/edit-employee/1 */}
                <Route path="/edit-employee/:id" element={ <Employee /> }></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
