import React, { Component } from 'react';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';
import Pagination from './components/Pagination/Pagination';
import Favourites from './components/Favourites/Favourites';
import MoviePages from './components/MoviePages/MoviePages';
import axios from 'axios';
import { API_KEY, API_URL } from './components/API/security';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {
  state = {
    allMovies: [],
    currentmovie: "batman",
    pages: [],
    currentpage: 1.
  }


  // export const API_URL = "https://api.themoviedb.org/3";
  // export const API_KEY = "bdd243ea847239dc0799805e63e189f0";
  // export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  // https://api.themoviedb.org/3/search/movie?api_key=bdd243ea847239dc0799805e63e189f0&query=avengers&page=1&include_adult=false

  componentDidMount() {
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: this.state.currentpage, query: this.state.currentmovie }
    }).then((mydata) => {
      // console.log(mydata); //{ config :, "data : { results :{ ... } }",  }
      let pagesarr = [];
      for (let i = 1; i <= mydata.data.total_pages; i++) {
        pagesarr[i - 1] = i;
      }
      // console.log(mydata.data.total_pages);
      // my movies are in data=> results
      this.setState({
        allMovies: mydata.data.results,
        pages: pagesarr
      })
    })
  }

  setMovie = async (inputdata) => {
    if (!inputdata) {
      inputdata = "batman";
    }
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: 1, query: inputdata }
    }).then((mydata) => {
      this.setState({
        allMovies: mydata.data.results,
        currentmovie: inputdata
      })
    })
  }

  nextPage = async () => {
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: this.state.currentpage + 1, query: this.state.currentmovie }
    }).then((mydata) => {
      this.setState({
        allMovies: mydata.data.results,
        currentpage: this.state.currentpage + 1
      })
    })
  }
  prevPage = async () => {
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: this.state.currentpage - 1, query: this.state.currentmovie }
    }).then((mydata) => {
      this.setState({
        allMovies: mydata.data.results,
        currentpage: this.state.currentpage - 1
      })
    })
  }
  setPage = async (pageno) => {
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: pageno, query: this.state.currentmovie }
    }).then((mydata) => {
      this.setState({
        allMovies: mydata.data.results,
        currentpage: pageno
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header setmovie={this.setMovie}></Header>

          <Switch>
            <Route path="/" exact>
              {this.state.allMovies.length != 0 ? (
                <React.Fragment>
                  <Movies movies={this.state.allMovies}></Movies>
                  <Pagination curpg={this.state.currentpage}
                    allpgs={this.state.pages}
                    nextPage={this.nextPage}
                    setPage={this.setPage}
                    prevPage={this.prevPage}
                  >
                  </Pagination>
                </React.Fragment>
              ) : (
                <div className="card text-center">
                  <div className="card-header">
                    ☹
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">OOPS ! No Movie Found !</h5>
                    <p className="card-text">Try writing some other movie name.</p>
                  </div>
                </div>
              )}
            </Route>

            <Route path="/fav" exact>
                <Favourites></Favourites> {/* jab bhi Favourites wale component pe click hoga tab page /fav pe redirect krega */}
            </Route>

            <Route path="/moviepage" exact>
                <MoviePages></MoviePages>
            </Route>
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;