import React from "react";
import Title from "./comp/Title";

class Jackets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jackets"
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
export default Jackets;
