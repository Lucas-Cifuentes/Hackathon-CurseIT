import Grid from './components/Grid/Default';
import Navbar from './components/Navbar/Default';
import Card from './components/Card/Default';
import './App.css'

function App() {
  return (
    <div className="container" >
      <Navbar />
      <Grid left={
        <Card>
          <p>left</p>
        </Card>
      } 
      middle={
        <Card>
        <p>middle</p> 
        </Card>
    } 
      right={
        <Card>
          <p>right</p>
        </Card>
      } />
    </div>
  );
}

export default App;
