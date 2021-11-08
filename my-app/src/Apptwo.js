import React from 'react';
import Welcome from './Components/Welcome';
import SideI from './SideI';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import App from './App';

function Apptwo() {
    //Following text is presented on welcome page
    return (
        // wraps everything
        // for future: navlinks og links
        <BrowserRouter>
            <Routes>
                {/** paths to different pages */}
                <Route path="/journalist" element={}/>
                <Route path="/editor" element={}/>
                <Route path="/journalist/employees" element={}/>
                <Route path="/editor" element={}/>
                <Route path="/journalist/task" element={}/>
                <Route path="/journalist/task/create-task" element={}/>
                <Route path="/journalist/task/create-task" element={}/>
                <Route path="/journalist/article-ideas" element={}/>
                <Route path="/journalist/article-ideas/create-idea" element={}/>
                <Route path="/editor/employees" element={}/>
                <Route path="/editor/article-ideas/create-idea" element={}/>
                <Route path="/editor/newspaper" element={}/>
                {/** "homepage" */}
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>

    );

}

export default Apptwo;