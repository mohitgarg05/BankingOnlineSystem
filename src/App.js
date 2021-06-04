
import './App.css';
import {Route } from 'react-router-dom';
import Home from './Components/Home'
import Allcustomers from './Components/Allcustomers'
import TransferPage from './Components/TransferPage'
import CustomersDetail from './Components/CustomersDetail'
import TransferHistory from './Components/TransferHistory'
function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/customers">
        <Allcustomers />
      </Route>
      <Route exact path="/customers/:id">
        <CustomersDetail />
      </Route>
      <Route exact path="/transfer">
        <TransferPage />
      </Route>
      <Route exact path="/history">
        <TransferHistory  />
      </Route>

    </>
  );
}

export default App;
