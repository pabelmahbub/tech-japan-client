import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from '../src/Home/Home';
import ServiceDetail from './ServiceDetail/ServiceDetail';
//import Service from "./Service/Service";
import JobPost from "./JobPost/JobPost";
import Login from './Login/Login';
import NotFound from "./NotFound/NotFound";
import Register from './Register/Register';
import HireBlog from "./HireBlog/HireBlog";
import DeveloperBlog from "./DeveloperBlog/DeveloperBlog";
import MyNavbar from "./MyNavbar/MyNavbar";
import Footer from "./Footer/Footer";
import ManageJob from './MangeJob/ManageJob';
import RequireAuth from "./RequireAuth/RequireAuth";

function App(){
  return(

 <BrowserRouter>
 <MyNavbar></MyNavbar>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/jobPost" element={<RequireAuth><JobPost /></RequireAuth>}/>
      <Route path="/service/:serviceId" element={<ServiceDetail />} />
      <Route path="/hireBlog" element={<HireBlog />} />
      <Route path="/developerBlog" element={<DeveloperBlog />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/manageJob" element={<ManageJob />}/>
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);
        }
export default App;