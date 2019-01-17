import React from "react";
import Title from "./comp/Title";

class Jackets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jacketsw",
      title: "Jackets"
    };
  }
  render() {
    return (
      <div>
        <Title name={this.state.name} title={this.state.title} />
      </div>
    );
  }
}
export default Jackets;
