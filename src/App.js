import React, { useState } from "react";
import EditorCards from "./Components/EditorCards";
import CreateTask from "./Components/CreateTask";
import "bootstrap/dist/css/bootstrap.min.css";
import JournalistCards from "./Components/JournalistCards";
import Tasks from "./Components/Tasks";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import LoginOut from "./Components/LoginOut";
import Notifications from "./Components/Notifications";

function App() {
  //Following text is presented on welcome page
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // wraps everything
    // for future: navlinks og links
    <div className="App">
      <BrowserRouter>
      {isLoggedIn ? (
        <>
          <NavigationBar />
            <Routes>
              {/** paths to different pages */}
              {/** Note: element should be updated for each ind. path
               *   Paths so fare: Journalist and Editor
               */}
              <Route path="/journalist" element={<JournalistCards />} />
              <Route path="/editor" element={<EditorCards />} />
              <Route path="/journalist/employees" element={<Tasks />} />
              <Route path="/editor" element={<Tasks />} />
              <Route path="/account" element={<Tasks />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/journalist/task" element={<Tasks />} />
              <Route
                path="/journalist/task/create-task"
                element={<CreateTask />}
              />
              <Route path="/journalist/article-ideas" element={<Tasks />} />
              <Route
                path="/journalist/article-ideas/create-idea"
                element={<Tasks />}
              />
              <Route path="/editor/employees" element={<Tasks />} />
              <Route
                path="/editor/article-ideas/create-idea"
                element={<Tasks />}
              />
              <Route path="/editor/newspaper" element={<Tasks />} />
              {/** "homepage" */}
              <Route path="/" element={<JournalistCards />} />
            </Routes>
        </>
      ) : (
        <LoginOut setIsLoggedIn={setIsLoggedIn} />
      )}
        </BrowserRouter>
    </div>
  );
}

export default App;