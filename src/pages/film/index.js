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
                <List title="Tendances actuelles"></List>
                <List title="Action"></List>
                <List title="Ma liste"></List>
            </body>
            
        </>
    );
}

export default Index;
