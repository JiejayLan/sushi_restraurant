import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route,Switch , Link, NavLink} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



const MainPage = () => (
    <App/>
);

const Menu = () => (
    <div>
        This is menu
    </div>
);

const NotFoundPage = () => (
    <div>
        404!Page not found <Link to="/"> go to home</Link>
    </div>
);

const Order = () => (
    <div>

        This is from my help component
    </div>
);

const Routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/menu" component={Menu} exact={true} />
            <Route path="/order" component={Order}  exact={true}/>
            <Route component={NotFoundPage} exact={true}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
