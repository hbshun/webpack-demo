import React from 'react';
import ReactDOM from "react-dom";
import loadable from "@loadable/component";
import Loading from "./components/Loading.js";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const pages = ['home', 'about', 'dashboard'];
const Pages = pages.map(pagename => {
  return loadable(() => import(`./pages/${pagename}.js`), {
    fallback: <Loading />
  });
});

const Home = loadable(() => import('./pages/home.js'), {
  fallback: <Loading />
});
const About = loadable(() => import('./pages/about.js'), {
  fallback: <Loading />
});
const Dashboard = loadable(() => import('./pages/dashboard.js'), {
  fallback: <Loading />
});

console.log(Pages);
class LoadablePage extends React.Component {
  render() {
    const index = this.props.index;
    const Page = Pages[index];
    return <Page />;
  }
}

function RouterExample () {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <LoadablePage index="0" />
          </Route>
          <Route path="/about">
            <LoadablePage index="1" />
          </Route>
          <Route path="/dashboard">
            <LoadablePage index="2" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <RouterExample />,
  document.getElementById('react-root'),
);
