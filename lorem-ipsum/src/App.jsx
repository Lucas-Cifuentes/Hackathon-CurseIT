import Navbar from './components/Navbar/Default';
import SignIn from './pages/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Card from './components/Card/Default';
import HistoriaClinica from './components/HistoriaClinica/Default';
import Pet from './components/Pet/Default';
import './App.css'
import { useState } from 'react';

function App() {
  const [userID, setUserID] = useState(null)
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <SignIn userID={userID} setUserID={setUserID} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;