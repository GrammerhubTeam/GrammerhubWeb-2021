import React from "react";
import Link from "next/link";

import Header from "../components/Header";
import css from "../pages/assets/css/Navbar/header-nav.scss";

class HeaderNavbar extends React.Component {
  state = {
    collapsed: true,
    toggled: false
  };

  toggleNavbarHandler = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;

    const mobileNavbar = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";

    const showNavbar = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <header id="header">
        <div id="navbar" className={css.HeaderNavbar}>
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="" alt="GrammerHub" />
              </Link>

              <button
                onClick={this.toggleNavbarHandler}
                className={showNavbar}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={mobileNavbar} id="navbarSupportedContent">
                <Header />
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderNavbar;
