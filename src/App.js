import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';
import Pigeon from './pigeon/index'
import Overlay from './pigeon/overlay'
import Marker from './pigeon/marker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno-Pigeon</h2>
        </div>
        <p className="App-intro">
          <Pigeon center={[50.879, 4.6997]} zoom={12} width={600} height={400}>
            <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => {}} />
            <Overlay anchor={[50.899, 4.6997]} offset={[120, 79]}>
              <img src='http://placehold.it/240x158' width={240} height={158} alt='' />
            </Overlay>
          </Pigeon> 
        </p>
      </div>
    );
  }
}

export default App;
