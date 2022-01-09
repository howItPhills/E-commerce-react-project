import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route, Switch } from 'react-router-dom'


const HatsPage = () => (
  <h1>Hey</h1>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
