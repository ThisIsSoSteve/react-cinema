import React from 'react';
import axios from 'axios';
import './App.css';


export default class App extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`https://localhost:44372/movie/featured`)
      .then(res => {
        console.log(res);
        
        const movies = res.data;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
         <h1>Cinema UI</h1>
         <ul>
        { this.state.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
        </ul>
       </header>
     </div>
    )
  }
}
