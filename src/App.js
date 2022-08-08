import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobPost from './JobPost/JobPost';
import NotFound from './NotFound/NotFound';
import ManagePost from './MangePost/ManagePost';
import JobPostDetail from './JobPostDetail/JobPostDetail';


function App() {
  return (
    <div className="App">

     
      <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/jobPost">
          <JobPost></JobPost>
        </Route>
        <Route path="/managePost">
         <ManagePost></ManagePost>

        </Route>
        <Route path="/jobPost/:jobPostId">
        <JobPostDetail></JobPostDetail>

        </Route>
{/* 
        <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
        </PrivateRoute>

        <Route path="/addService">
          <AddService></AddService>
        </Route>

        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
 */}

        <Route path="*">
          <NotFound />
        </Route>
       
      </Switch>
    </div>
  </Router>
    </div>
  );
}

export default App;