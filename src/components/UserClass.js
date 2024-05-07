import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    console.log(this.props.name + "constrrucor invoked");
  }

  state = {
    count: 0,
  };

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log(this.props.name + "component did mount!!!!!");
  }

  render() {
    console.log(this.props.name + "render invoked");
    return (
      <div>
        <h1>
          {this.props.name}
          {this.props.location}
          {this.state.count}
          <button onClick={() => this.increaseCount()}>Increase Me!!!</button>
        </h1>
      </div>
    );
  }
}

export default UserClass;
