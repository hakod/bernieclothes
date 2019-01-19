import React from "react";

class Total extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = [0];
    let total = this.props.item;
    for (let i = 0; i < total.length; i++) {
      arr.push(total[i].item.product.price * total[i].qty);
    }
    let tot = arr.reduce((x, y) => x + y);
    return (
      <div className="total">
        <div>
          <h2>estimated total</h2>
          <h2>${tot ? tot : null}</h2>
        </div>
        <button>proceed to checkout</button>
      </div>
    );
  }
}
export default Total;
