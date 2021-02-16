import Grid from './components/Grid/Default';
import Navbar from './components/Navbar/Default';
import Card from './components/Card/Default';
import HistoriaClinica from './components/HistoriaClinica/Default';
import Pet from './components/Pet/Default';
import MainContent from './components/MainContent/Default';
import './App.css'

function App() {
  return (
    <div className="container" >
      <Navbar />
      <Grid left={
        <Card>
          <Pet />
        </Card>
      } 
      middle={
        <Card>
          <MainContent />
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
    </div>
  );
}

export default App;
