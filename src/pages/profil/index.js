import React from 'react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
const Index = () => {
    const router = useRouter();
    const [user, setUser] = useState();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        console.log(JSON.parse(localStorage.getItem('user')));
      }, []);
    const logout=() =>{
        localStorage.removeItem('user');
        router.push("/");
    }
    return (
        <>
        <Header></Header>
        {user ? (
            <>
            <div className='profil'>
                <h1 className='profil__title'>Profil</h1>
                <div className='profil__content'> 
                    <p>Hello  {user.user.email}</p>
                    <Button title="Logout" type="button" classes="btn btn__color-red" function={(e)=> logout(e)}></Button>
                </div>
            </div>
            </>
          ) : (
            ""
          )}
        </>
    );
}

export default Index;
