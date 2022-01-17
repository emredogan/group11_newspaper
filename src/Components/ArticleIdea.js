import React from 'react';
import CustomButton from './CustomButton';
import OverviewTable from './OverviewTable';
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function JournalistIdea() {
    return (
    <>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Article Ideas</Breadcrumb.Item>
        </Breadcrumb>
        <div className="screenContain">
            <div className="placingBtnGeneral">
                <CustomButton path="/journalist/article-ideas/create-idea" text="NEW IDEA" />
            </div>
            <header className="screentitle">
                <h2>Overview of Article Ideas</h2>
            </header>
            <OverviewTable objectName="Idea" />
        </div>
    </>
    )
};
