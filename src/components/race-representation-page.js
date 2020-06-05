import React, { Component } from "react";
import { Link } from "react-router-dom";

class RaceRep extends Component {
    constructor(props) {
      super(props);
      //console.log(props);
      //the props is an object that just contains the fetchMovies function
      this.state = { term: '' };

      this.onSearchClick = this.onSearchClick.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      // this.renderSearch = this.renderSearch.bind(this);

    }

    onInputChange(event) {
      this.setState({ term: event.target.value });
      // console.log(this.state);
    }


    onSearchClick(event) {
      event.preventDefault();

      this.setState({ term: '' });

      console.log(this.state);
      this.renderSearch()

    }


    renderSearch() {//I want this to be added to main return after the button is clicked
        return (
          <h1>No results found</h1>
        )
    }




    render() {
      return (
        <div>
          <div className="navigation">

            <br />
            <h1 className="heading">Race Representation</h1>
            <br />
          </div>

          <div className="col-md-8 offset-md-2 opacity">
            <h3>What if we want to search by race representation?</h3>
            <form className="input-group">
              <input
                placeholder="Type movie to search here"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <span className="input-group-btn">
                <button onClick={this.onSearchClick} type="submit" className="btn btn-secondary">
                  Search</button>
              </span>
            </form>
            <br />

              <div className="default-search">{this.renderSearch()}</div>

            <Link to="/"><button className="btn btn-secondary">Back to Homepage</button></Link>
            <div className="divider"></div>
            <Link to="/my-list"><button className="btn btn-secondary">View My List</button></Link>

          </div>
        </div>

)
}
}
export default RaceRep;
