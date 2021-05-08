import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Scene from './scene'

const numbers = Array.from({ length: 100 }, (x, i) => i);
const nftCard = (id) => {
    return <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">#{id}</h5>
        </div>
            <img className="card-img-top" src={`https://storageapi.fleek.co/lucasespinosa28-team-bucket/mageNft/preview/mage${id}.png`}>
            </img>
        </div>
};
const listItems = numbers.map((number) =>
    <Link className="col-md-auto" to={`/nftshop/${number}`}>{nftCard(number)}</Link>
);

const Page = (id) => {
    return <div><Scene/></div>
};

const routeList = numbers.map((number) =>
    <Route key={number} path={`/nftshop/${number}`}>{Page(number)}</Route>
);

function ListNft() {
    return (
    <Router>
        <div className="App">
            </div>
            <Switch>
                {routeList}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
    </Router>
  )
}

function Home() {
    return <div className="row justify-content-md-center">{listItems}</div>;
}

export default ListNft
