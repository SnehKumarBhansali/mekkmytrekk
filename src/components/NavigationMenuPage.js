import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TrekListingHomePage from '../components/TrekListing/TrekListingHomePage';
import NotFoundPage from '../components/NotFound'
import HomePage from '../components/Home/HomePage';
import TrekListItemHomePage from '../components/TrekListItem/TrekListItemHomePage';

class NavigationMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      navbarItem: true,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleNavBarItem = () => {
    this.setState({navbarItem: false})
  }
  
  handleNavBarHome = () => {
    this.setState({navbarItem: true})
  }
     

  handleClick = (event) => {
    let elmnt = event.target.name ? document.getElementById(event.target.name) : document.getElementById("navbar")
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <header id="navbar">
        <Router>
          <div>
            <Navbar color="primary-color" dark expand="md" fixed="top" scrolling>
              <NavbarBrand href="/" onClick={this.handleNavBarHome}>
                <strong
                  className="font-weight-bold"
                  name="navbar"
                  style={{ fontSize: "22px" }}
                >
                  MekkMyTrekk
                </strong>
              </NavbarBrand>
              <NavbarToggler onClick={this.onClick} />
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav right>
                  <NavItem>
                    <Link to={'/events'}><button className="z-depth-0 navigation-btn" name="events">Events</button></Link>
                  </NavItem>
                  {this.state.navbarItem ?
                    <NavItem>
                      <button className="z-depth-0 navigation-btn" name="gallery" onClick={(event) => { this.handleClick(event) }}>Gallery</button>
                    </NavItem> : undefined}
                  {this.state.navbarItem ?
                    <NavItem>
                      <button className="z-depth-0 navigation-btn" name="reviews" onClick={(event) => { this.handleClick(event) }}>Reviews</button>
                    </NavItem> : undefined}

                </NavbarNav>
              </Collapse>
            </Navbar>
            <Switch>
              <Route path="/" render={(props)=><HomePage {...props} handleNavBarHome={this.handleNavBarHome} />} exact={true} />
              <Route path="/events" render={(props)=><TrekListingHomePage {...props} handleNavBarItem={this.handleNavBarItem}/>} />
              <Route path="/eventDetail" render={(props)=><TrekListItemHomePage {...props} handleNavBarItem={this.handleNavBarItem}/>} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </header>
    );
  }
}
export default NavigationMenuPage;