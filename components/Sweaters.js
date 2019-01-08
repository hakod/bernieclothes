import React from "react";
import Title from "./comp/Title";

class Sweaters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sweaters"
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
export default Sweaters;
