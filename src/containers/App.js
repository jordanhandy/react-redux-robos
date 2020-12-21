// import deconstructed { Component } from 'react'
import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// Error Boundary introduced in React 16
import ErrorBoundry from "../components/ErrorBoundary";
import "./App.css";
import { setSearchField, requestRobots } from '../actions';

// The state to be used for the reducer property (searchField) is going to come from the 
// state.reducerName.property
// that is, state.searchRobots.searchField
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
// What props that should be listened to, that are actions that need to get actioned
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
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
  // use React lifecycle method to call componentDidMount() and create a GET
  // request to an API endpoint.  This endpoint holds the data we need, so the static
  // robots.txt data file is not needed

  // JSON-formatted response is returned, then this is set as the new state of the 'robots' prop
  componentDidMount() {
    this.props.onRequestRobots();
  }

  // the function action on state.
  // You need to use the functionName = (params) => { syntax so that when you call 'this', the app
  // knows that you are referring to the parent, and not the event in question, sent as params

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    // your constant then becomes a filtered list of robots, based on what is put into the searchfield
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // ternary operator.  If robots.length is equal to 0, display "Loading..."
    // if not, display the robots
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        {/* the onSearchChange prop is sent to the searchBox */}
        <SearchBox searchChange={onSearchChange} />
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
