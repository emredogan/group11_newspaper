import React from 'react';
import Welcome from './Components/Welcome';
import SideI from './SideI';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function Apptwo() {
    //Following text is presented on welcome page
    return (
        // wraps everything
        // for future: navlinks og links
        <BrowserRouter>
            <Routes>
                {/** paths to different pages */}
<<<<<<< HEAD
                <Route path="/journalist" element={<App/>}/>
                <Route path="/editor" element={<App/>}/>
                <Route path="/journalist/employees" element={<App/>}/>
                <Route path="/editor" element={<App/>}/>
                
=======
                {/** Note: element should be updated for each ind. path */}
                <Route path="/journalist" element={<Welcome />}/>
                <Route path="/editor" element={<SideI/>}/>
                <Route path="/journalist/employees" element={<SideI/>}/>
                <Route path="/editor" element={<SideI/>}/>
                <Route path="/journalist/task" element={<SideI/>}/>
                <Route path="/journalist/task/create-task" element={<SideI/>}/>
                <Route path="/journalist/task/create-task" element={<SideI/>}/>
                <Route path="/journalist/article-ideas" element={<SideI/>}/>
                <Route path="/journalist/article-ideas/create-idea" element={<SideI/>}/>
                <Route path="/editor/employees" element={<SideI/>}/>
                <Route path="/editor/article-ideas/create-idea" element={<SideI/>}/>
                <Route path="/editor/newspaper" element={<SideI/>}/>
>>>>>>> navbar
                {/** "homepage" */}
                <Route path="/" element={<SideI />}/>
            </Routes>
        </BrowserRouter>

    );

}

export default Apptwo;