import React from "react";
import EditorCards from "./Components/EditorCards";
import  CreateTask  from "./Components/CreateTask";
import "bootstrap/dist/css/bootstrap.min.css";
import JournalistCards from "./Components/JournalistCards";
import Tasks from "./Components/Tasks";
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
           <Route path="/" element={<JournalistCards />} /> {/** temp page */}
          <Route path="/journalist" element={<JournalistCards />} />
          <Route path="/editor" element={<EditorCards />} />
          <Route path="/journalist/employees" element={<Tasks />} />
          <Route path="/editor" element={<Tasks />} />
          <Route path="/journalist/task" element={<Tasks />} />
          <Route path="/journalist/task/create-task" element={< CreateTask />} />
          <Route path="/journalist/article-ideas" element={<Tasks />} />
          <Route
            path="/journalist/article-ideas/create-idea"
            element={<Tasks />}
          />
          <Route path="/editor/employees" element={<Tasks />} />
          <Route path="/editor/article-ideas/create-idea" element={<Tasks />} />
          <Route path="/editor/newspaper" element={<Tasks />} />
          {/** "homepage" */}
          <Route path="/" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

