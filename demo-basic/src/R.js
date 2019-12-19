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

const pages = [
  {
    path: '/',
    name: '首页',
    component: './pages/home.js',
    filename: 'home.js'
  },
  {
    path: '/about',
    name: '关于',
    component: './pages/about.js',
    filename: 'about.js'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: './pages/dashboard.js',
    filename: 'dashboard.js'
  }
];

// 特别注意 动态加载的前缀
const Pages = pages.map(page => {
  return loadable(() => import(`./pages/${page.filename}`), {
    fallback: <Loading />
  });
});

class LoadablePage extends React.Component {
  render() {
    const index = this.props.index;
    const Page = Pages[index];
    return <Page />;
  }
}

function RouterExample() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          {pages.map(page => {
            return (
              <li key={page.path}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            );
          })}
        </ul>

        <hr />

        <Switch>
          {pages.map((page, index) => {
            return (
              <Route key={page.path} exact={page.path === '/'} path={page.path}>
                <LoadablePage index={index} />
              </Route>
            );
          })}

        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <RouterExample />,
  document.getElementById('react-root'),
);
