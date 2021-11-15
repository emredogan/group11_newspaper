import React from "react";
import EditorCards from "./Components/EditorCards";
import "bootstrap/dist/css/bootstrap.min.css";
import JournalistCards from "./Components/JournalistCards";
import SideI from "./SideI";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import LoginOut from "./Components/LoginOut";

function App() {
  //Following text is presented on welcome page
  return (
    // wraps everything
    // for future: navlinks og links
    <div className="App">
     
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          {/** paths to different pages */}
          {/** Note: element should be updated for each ind. path
           *   Paths so fare: Journalist and Editor
           */}
           <Route path="/" element={<LoginOut />} />
          <Route path="/journalist" element={<JournalistCards />} />
          <Route path="/editor" element={<EditorCards />} />
          <Route path="/journalist/employees" element={<SideI />} />
          <Route path="/editor" element={<SideI />} />
          <Route path="/journalist/task" element={<SideI />} />
          <Route path="/journalist/task/create-task" element={<SideI />} />
          <Route path="/journalist/task/create-task" element={<SideI />} />
          <Route path="/journalist/article-ideas" element={<SideI />} />
          <Route
            path="/journalist/article-ideas/create-idea"
            element={<SideI />}
          />
          <Route path="/editor/employees" element={<SideI />} />
          <Route path="/editor/article-ideas/create-idea" element={<SideI />} />
          <Route path="/editor/newspaper" element={<SideI />} />
          {/** "homepage" */}
          <Route path="/" element={<SideI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

