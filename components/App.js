import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faAngleLeft,
  faAngleRight,
  faBars,
  faAngleDown,
  faArrowDown,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingBag,
  faAngleLeft,
  faAngleRight,
  faBars,
  faAngleDown,
  faArrowDown,
  faArrowUp
);
import actions from "../redux/actions";
import "../client/styles.scss";
import ScrollToTop from "./ScrollToTop";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Home from "./Home";
import Blazers from "./Blazers";
import Handbags from "./Handbags";
import Jackets from "./Jackets";
import JacketsW from "./JacketsW";
import Skirts from "./Skirts";
import Sweaters from "./Sweaters";
import Product from "./comp/Product";
import Cart from "./comp/Cart";
import Checkout from "./comp/Checkout";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header item={this.props.item} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blazers/" component={Blazers} />
              <Route path="/handbags/" component={Handbags} />
              <Route path="/jackets/" component={Jackets} />
              <Route path="/jacketsw/" component={JacketsW} />
              <Route path="/skirts/" component={Skirts} />
              <Route path="/sweaters/" component={Sweaters} />
              <Route
                path="/product/:id"
                render={props => (
                  <Product {...props} actions={this.props.actions} />
                )}
              />
              <Route
                path="/cart/"
                render={() => (
                  <Cart actions={this.props.actions} item={this.props.item} />
                )}
              />
              <Route
                path="/checkout/"
                render={() => (
                  <Checkout
                    action={this.props.actions}
                    item={this.props.item}
                  />
                )}
              />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
