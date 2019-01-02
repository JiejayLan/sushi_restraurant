import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



const MainPage = () => (
      <App/>
);

const Menu = () => (
    <div>
        This is menu
    </div>
);

// const EditExpensePage = () => (
//     <div>
//         This is from my edit expense component
//     </div>
// );
//
const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/menu" component={Menu} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render( routes , document.getElementById('root'));

registerServiceWorker();