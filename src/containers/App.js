// import deconstructed { Component } from 'react'
import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// Error Boundary introduced in React 16
import ErrorBoundry from "../components/ErrorBoundary";
import "./App.css";
import { setSearchField } from '../actions';

// The state to be used for the reducer property (searchField) is going to come from the 
// state.reducerName.property
// that is, state.searchRobots.searchField
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField
  }
}
// What props that should be listened to, that are actions that need to get actioned
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

// Basic construct of State in react
// Your App extends the Component class

// Use a constructor do declare the state.
// Within the state object, you define the items
// that can change as a part of state

// In this case, it is the robots data file, and the
// search field acting on that data file
class App extends Component {
  // call the base class
  // call super
  constructor() {
    super();
    // define the 'state' object
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  // use React lifecycle method to call componentDidMount() and create a GET
  // request to an API endpoint.  This endpoint holds the data we need, so the static
  // robots.txt data file is not needed

  // JSON-formatted response is returned, then this is set as the new state of the 'robots' prop
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  // the function action on state.
  // You need to use the functionName = (params) => { syntax so that when you call 'this', the app
  // knows that you are referring to the parent, and not the event in question, sent as params
  onSearchChange = (event) => {
    // set the state of the searchfield to equal that of the value being typed into the searchfield
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    // your constant then becomes a filtered list of robots, based on what is put into the searchfield
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // ternary operator.  If robots.length is equal to 0, display "Loading..."
    // if not, display the robots
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        {/* the onSearchChange prop is sent to the searchBox */}
        <SearchBox searchChange={this.onSearchChange} />
        {/* instead of a constant list of 10 robots, you then set the value of robots to be the list of filteredRobots */}
        {/* Wrap our card list in the Error Boundary to catch if anything went wrong */}
        <ErrorBoundry>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </ErrorBoundry>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
