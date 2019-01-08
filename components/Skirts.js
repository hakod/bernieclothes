import React from "react";
import Title from "./comp/Title";

class Skirts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Skirts"
    };
  }
  render() {
    return (
      <div>
        <Title name={this.state.name} />
      </div>
    );
  }
}
export default Skirts;
