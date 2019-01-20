import React from "react";
import Total from "./Total";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="checkout-page">
        <div className="checkout">
          <h2>enter shipping address</h2>
          <form>
            <input type="text" placeholder="* email address" required />
            <input type="text" placeholder="* first name" required />
            <input type="text" placeholder="* last name" required />
            <input type="text" placeholder="* address" required />
            <input type="text" placeholder="* city" required />
            <select name="province">
              <option value="BC">BC</option>
              <option value="AB">AB</option>
              <option value="YK">YK</option>
            </select>
            <input type="text" placeholder="* postal code" required />
            <select>
              <option value="Canada">Canada</option>
            </select>
            <input type="text" placeholder="* phone" required />
            <input type="text" placeholder="* shipping method" required />
            <input type="submit" value="proceed" />
          </form>
        </div>
        <Total item={this.props.item} />
      </div>
    );
  }
}
export default Checkout;
