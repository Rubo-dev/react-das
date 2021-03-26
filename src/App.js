import './App.scss';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/ContactUs';
import About from './components/AboutUs';



function App(props) {
  return (
    <Router>
      <div className="App">
        <Header data = {props.state.header} />
        <Route path= '/home'>
          <Home data = {props.state.pages.home} />
        </Route>
        <Route path = '/contact-us'>
          <Contact data = {props.state.pages.contact_page} dispatch = {props.dispatch}/>
        </Route>
        <Route path = '/about-us'>
          <About />
        </Route>
        {/* <Route path = '/vlo'>
          Es Vlona
        </Route>
        <Route path='/rubo' >
          Es Rubona
        </Route> */}
        <Footer data = {props.state.footer} />
      </div>
    </Router>
  );
}



export default App;
