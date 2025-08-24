import React, { Component } from "react";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterTitle: "",
      timeElapsed: 0, // ⏳ compteur de secondes
    };
  }

  componentDidMount() {
    // Initialiser films
    this.setState({
      movies: [
    {
      id: 1,
      title: "Inception",
      description: "Un voleur entre dans les rêves pour voler des secrets.",
      posterURL: "https://media.senscritique.com/media/000012872128/0/inception.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Des explorateurs voyagent à travers un trou de ver.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._SL1500_.jpg",
      rating: 4,
    },
    {
  id: 3,
  title: "The Dark Knight",
  description: "Batman affronte le Joker, un criminel imprévisible qui sème le chaos à Gotham.",
  posterURL: "https://fr.web.img3.acsta.net/medias/nmedia/18/83/56/27/20158098.jpg",
  rating: 5,

},
    {
      id: 4,
      title: "Avatar",
      description: "Un marine paralysé est envoyé sur une planète extraterrestre.",
      posterURL: "https://www.humanite.fr/wp-content/uploads/2023/08/315082.HR_.jpg?w=1024",
      rating: 4,
    },
    {
      id: 5,
      title: "Titanic",
      description: "Une romance naît à bord du tristement célèbre paquebot.",
      posterURL: "https://i.pinimg.com/originals/77/81/0d/77810de24f9779ad122de1f07966fade.jpg",
      
    
    }  ],
    });


  
 // ⏳ démarrer le compteur
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // 🛑 nettoyer le timer quand le composant est détruit
    clearInterval(this.timer);
  }

 


  setFilterTitle = (value) => {
    this.setState({ filterTitle: value });
  };

  render() {
    const { movies, filterTitle, timeElapsed } = this.state;

    // filtrer films par titre
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase())
    );

    return (
      <div>
        <Navbar setFilterTitle={this.setFilterTitle} />

        <div style={{ padding: "20px" }}>
          {/* afficher compteur */}
          <p>⏳ Temps passé sur l’app : {timeElapsed} secondes</p>
              
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    );
  }
}

export default App;