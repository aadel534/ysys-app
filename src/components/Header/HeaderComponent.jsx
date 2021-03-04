import React from 'react';
import './HeaderComponent.css';

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = (props) => {

    let headerClass = "header";
    if (props.expanded) {
        headerClass += " expanded";
    }
    else{
        headerClass += " collapsed";
    }

    const updateExpansion = (e) => {
        props.setExpanded(props.expanded ? false : true);
    };

    return <header className={headerClass}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        I'm the header component
        <button onClick = {updateExpansion} >SIDEBAR</button>
    </header>
};