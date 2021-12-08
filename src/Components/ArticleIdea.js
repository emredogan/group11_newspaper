import React from 'react';
import CustomButton from './CustomButton';

export default function JournalistIdea() {
    return (
        <div className="screenContain">
            <CustomButton path="/journalist/article-ideas/create-idea" text="NEW IDEA"></CustomButton>
        </div>
    )
}
