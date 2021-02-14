import Grid from './components/Grid/Default';
import './App.css'

function App() {
  return (
    <div className="container" >
      <h1>Lorem Ipsum</h1>
      <Grid left={<p>left</p>} middle={ <p>middle</p> } right={ <p>right</p> } />
    </div>
  );
}

export default App;
