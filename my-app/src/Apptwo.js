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
        <BrowserRouter>
            <Routes>
                {/** paths to different pages */}
                <Route path="/one" element={<SideI/>}/>
                <Route path="/two" element={<SideI/>}/>
                <Route path="/three" element={<Welcome/>}/>
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>

    );

}

export default Apptwo;