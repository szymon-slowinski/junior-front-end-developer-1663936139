import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
   <BrowserRouter>
   <Switch>
    <Route exact path="/">
    <Dashboard/>
    </Route>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
