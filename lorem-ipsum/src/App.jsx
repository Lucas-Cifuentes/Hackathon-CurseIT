import Navbar from './components/Navbar/Default';
import SignIn from './pages/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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

{/* <div className="container" >
      <Navbar />
      <Grid left={
        <Card>
          <p>left</p>
        </Card>
      } 
      middle={
        <Card>
          <SignIn />
        </Card>
    } 
      right={
        <Card>
          <HistoriaClinica 
            title="Historia Clinica"
            data={[{ date: '15/2/2021', description: 'Probando item', id: '1' }, { date: '16/2/2021', description: 'Probando item 2', id: '2' }]}
          />
        </Card>
      } />
    </div> */}