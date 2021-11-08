import React from 'react';
import Header from './Header';
import MyButton from './MyButton';

function EditorCards() {
    return (
        (
         <div className="welcome">
           <Header name={"Editor"}/>
           <ul className='Cards'>
        <li><MyButton text="Employee Overview" imageURL="accounts.svg"></MyButton></li>
        <li><MyButton text="Article Idea" imageURL="dialogue.svg"></MyButton></li>
        {/* In according to prototype, editor has three categories to choose from */}
        {/*<li><MyButton text="Overview of Tasks" imageURL="statistic.svg"></MyButton></li>*/}
        <li><MyButton text="Newspaper" imageURL="newspaper.svg"></MyButton></li>
    </ul>
    
           
            </div>
       )
       
      
      );

}

export default EditorCards;