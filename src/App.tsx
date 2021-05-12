import './App.css';
import GoogleMap from './components/map.component';

function App() {

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 100}}>
      <div style={{ width: 600, height: 600, backgroundColor: 'rgba(143, 103, 103, 0.575)'}}>
        <GoogleMap
          address="3650 NW 36th ST, Miami FL, 33142"
         />
      </div>
      </div>
    </div>
  );
}

export default App;
