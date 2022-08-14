import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Lists from "./pages/Lists";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Lists/>}/>
      <Route path="/list/:id" element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
