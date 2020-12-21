import React, { Component } from "react";
// Create the error boundary class
// Create state
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // If an error is caught
  // change the error bool
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  // If the error bool is true, render an "oops" h1 tag
  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong</h1>;
    }
    // if not, render normally
    return this.props.children;
  }
}
export default ErrorBoundry;
