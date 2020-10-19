import React, { useState} from "react";
import "./App.css";
import Add from "./component/Add";
import Footer from "./component/Footer";
import MovieList from "./component/MovieList";
import Rating from "./component/Rating"
import {InputGroup, FormControl} from "react-bootstrap";

function App() {
  const [movies,setMovies] = useState ([{ title: "Man of Steel" , description:"Clark Kent, one of the last of an extinguished race disguised as an unremarkable human, is forced to reveal his identity when Earth is invaded by an army of survivors who threaten to bring the planet to the brink of destruction." , posterUrl:"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg", rate: 4 },
      { title:"The Dark Tower" , description:"The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O'Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together." , posterUrl:"http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg", rate:3},
      { title: "The Notebook", description:"A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences." , posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_SX300.jpg", rate:5},
      { title: "The Fault In Our Stars", description:"Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam." , posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_SX300.jpg", rate:4},
      { title: "Harry Potter and the Prisoner of Azkaban", description:"It's Harry's third year at Hogwarts; not only does he have a new teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry." , posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg", rate:5},
      { title: "Harry Potter and the Order of the Phoenix", description:"With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts." , posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg", rate:4},
      { title: "Despicable Me 3", description:"Gru meets his long-lost charming, cheerful, and more successful twin brother Dru who wants to team up with him for one last criminal heist." , posterUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@._V1_SX300.jpg", rate:3},
      { title: "It Chapter Two", description:"Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back." , posterUrl:"https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEwZDFmYmM2MjU2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg", rate:3}
      ])
  let [search,setSearch] = useState("")
  let [searchRate,setSearchRate] = useState(0)

const rateFilter = (e) => {
    setSearchRate(e)
  }

const addMovie =(x) =>{
setMovies([...movies,x])
}
  return <div className="App">
      <div>        
    <InputGroup size="lg" >
    <FormControl placeholder="filter by Title" onChange={e => setSearch(e.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
        <Rating   rateFilter={rateFilter}/>
           </div>
          <MovieList movies={movies.filter( 
       movie => movie.title.toLowerCase().includes(search.toLowerCase().trim()) && movie.rate >= searchRate )
    }  
  />
          <Add addMovie={addMovie}/>
      <Footer/>
  </div>
}

export default App;
