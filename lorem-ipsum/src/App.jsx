import Grid from './components/Grid/Default';
import Navbar from './components/Navbar/Default';
import './App.css'

function App() {
  return (
    <div className="container" >
      <Navbar />
      <Grid left={<p>left</p>} middle={ <p>middle</p> } right={ <p>right</p> } />
    </div>
  );
}

export default App;
