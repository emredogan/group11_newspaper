import React from 'react';
import Header from './Header';
import MyButton from './MyButton';

import { Link } from "react-router-dom";

function Cards() {
    return (
        (
         <div className="welcome">
           <Header name={'Journalist'}/>
           <ul className='Cards'>
            <li><Link to=""><MyButton text="Newspaper" imageURL="/newspaper.svg"></MyButton></Link></li>
            <li><Link to=""><MyButton text="Article Idea" imageURL="/dialogue.svg"></MyButton></Link></li>
            <li><Link to="/journalist/task" style={{ textDecoration: 'none'}}><MyButton text="Overview of Tasks" imageURL="/statistic.svg"></MyButton></Link></li>
           </ul>
        </div>
       )
    );
}

export default Cards;