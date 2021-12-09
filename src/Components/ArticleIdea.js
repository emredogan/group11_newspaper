import React from 'react';
import CustomButton from './CustomButton';
import TaskTable from './TaskTable';

export default function JournalistIdea() {
    return (
        <div className="screenContain">
            <div className="placingBtnGeneral">
                <CustomButton path="/journalist/article-ideas/create-idea" text="NEW IDEA" />
            </div>
            <header className="screentitle">
                <h2>Overview of Article Ideas</h2>
            </header>
            {/** tmp table - try making generic/reusable */}
            <TaskTable />
            
            
        </div>
    )
}
