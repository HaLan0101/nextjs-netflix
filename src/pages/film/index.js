import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import List from "../../components/List";
const Index = () => {
    return (
        <>
            <Header></Header>
            <body className="film__home">
                <Hero type="film"></Hero>
                <div className="film__category">
                    <List title="Tendances actuelles"></List>
                </div>
                <div className="film__category">
                    <List title="Action"></List>
                </div>
                <div className="film__category">
                    <List title="Ma liste"></List>
                </div>
            </body>
            
        </>
    );
}

export default Index;
