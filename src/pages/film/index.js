import React from 'react';
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Index = () => {
    return (
        <>
            <Header></Header>
            <body>
                <Hero></Hero>
                <div className='film__list'>
                    <div className='film__new'>
                        <h1>Nouveautés</h1>
                        <img src="" alt="" />
                    </div>
                    <div className='film__genre'>
                        <h1>Actions</h1>
                        <img src="" alt="" />
                    </div>
                    <div className='film__mylist'>
                        <h1>Ma list</h1>
                        <img src="" alt="" />
                    </div>
                </div>
                
            </body>
            
        </>
    );
}

export default Index;
