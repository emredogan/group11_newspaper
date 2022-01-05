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
import Accounts from "./Components/Account";
import ArticleIdea from "./Components/ArticleIdea"
import CreateArticleIdea from "./Components/CreateArticleIdea"
import Parse from "parse";
import { googleTranslate } from "./utils/googleTranslate";



function App() {
  //Following text is presented on welcome page

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  Parse.initialize(
    process.env.REACT_APP_PARSE_API_APPLICATION_KEY, 
    process.env.REACT_APP_PARSE_API_JAVASCRIPT_KEY, 
    process.env.REACT_APP_PARSE_API_MASTER_KEY
  );

  Parse.serverURL = "https://parseapi.back4app.com/";

  return (
    // wraps everything
    // for future: navlinks og links
    <div className="App">
      <BrowserRouter>
      {/*The following needs to replace the current isLoggedIn for the Breadcrumps to work */}
      {Parse.User.current ? (
      // {isLoggedIn ? (
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
              <Route path="/account" element={<Accounts />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/journalist/task" element={<Tasks />} />
              <Route path="/journalist/task/create-task" element={<CreateTask />} />
              <Route path="/journalist/article-ideas" element={<ArticleIdea />} />
              <Route path="/journalist/article-ideas/create-idea" element={<CreateArticleIdea />} />

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
