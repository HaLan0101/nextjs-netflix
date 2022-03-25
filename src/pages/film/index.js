import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import FilmCard from "../../components/FilmCard";
import filmService from "../../services/film.service";
const Index = () => {
    const [films, setFilms] = useState();
    useEffect(() => {
        filmService.getTrending()
          .then((data) => {
            console.log(data);
            setFilms(data);
          })
        .catch(err=>console.log(err))
      },[]);
    return (
        <>
            <Header></Header>
            <body>
                <Hero></Hero>
                <div className='film__list'>
                    <div className='film__trend'>
                        <h1>Tendances actuelles</h1>
                        <div className="film__grid">
                            <FilmCard></FilmCard>
                        </div>
                    </div>
                    <div className='film__genre'>
                        <h1>Actions</h1>
                        <div className="film__grid"></div>
                    </div>
                    <div className='film__mylist'>
                        <h1>Ma list</h1>
                        <div className="film__grid"></div>
                    </div>
                </div>
                
            </body>
            
        </>
    );
}

export default Index;
