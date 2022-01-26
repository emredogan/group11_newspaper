import EditorCards from "./Components/EditorCards";
import CreateTask from "./Components/CreateTask";
import "bootstrap/dist/css/bootstrap.min.css";
import JournalistCards from "./Components/JournalistCards";
import Tasks from "./Components/Tasks";
import Employees from "./Components/Employees";
import EditorArticleIdea from "./Components/EditorArticleIdea";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Notifications from "./Components/Notifications";
import DailyTasks from "./Components/DailyTasks";
import Accounts from "./Components/Account";
import ArticleIdea from "./Components/ArticleIdea"
import CreateArticleIdea from "./Components/CreateArticleIdea"
import Parse from "parse";
import Login from "./Login";
import Signup from "./Signup";
import RequireAuth from "./Components/RequireAuth";
import Translation from "./Components/Translation" 


function App() {
  //Following text is presented on welcome page

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
       {/* {Parse.User.current ? ( */}
      
        <>
          <NavigationBar />
            <Routes>
              {/** paths to different pages */}
              {/** Note: element should be updated for each ind. path
               *   Paths so fare: Journalist and Editor
               */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              <Route element={<RequireAuth />}>
              <Route path="/journalist" element={<JournalistCards />} />
              <Route path="/editor" element={<EditorCards />} />
              <Route path="/editor/employees" element={<Employees />} />
              <Route path="/editor/article-ideas" element={<EditorArticleIdea />} />
              <Route path="/account" element={<Accounts />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/journalist/dailyTasks" element={<DailyTasks />} />
              <Route path="/journalist/task" element={<Tasks />} />
              <Route path="/journalist/task/create-task" element={<CreateTask />} />
              <Route path="/journalist/article-ideas" element={<ArticleIdea />} />
              <Route path="/journalist/article-ideas/create-idea" element={<CreateArticleIdea />} />

              <Route path="/translation" element={<Translation />} />

              <Route path="/editor/employees" element={<Tasks />} />
              <Route path="/editor/article-ideas/create-idea" element={<Tasks />}
              />
              <Route path="/editor/newspaper" element={<Tasks />} />
              {/** "homepage" */}
              <Route path="/" element={<JournalistCards />} />
              </Route>
            </Routes>
        </>
        </BrowserRouter>

    </div>
  );
}

export default App;
