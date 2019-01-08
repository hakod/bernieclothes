import React from "react";
import Title from "./comp/Title";

class Handbags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Handbags"
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
export default Handbags;
