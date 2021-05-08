import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ListNft from './listNft'
import Wallet from './wallet'
function Menu() {
    return (
    <Router>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar</Link>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                    <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link" to="/nftshop">NFT Shop</Link>
                 </div>
              </div>
          </div>
       </nav>
        <Switch>
            <Route path="/nftshop">
                <ListNft />
            </Route>
            <Route path="/">
                <Wallet />
            </Route>
        </Switch>
    </Router>
  )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default Menu
