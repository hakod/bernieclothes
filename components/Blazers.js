import React from "react";
import Title from "./comp/Title";

class Blazers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Blazers"
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
export default Blazers;
