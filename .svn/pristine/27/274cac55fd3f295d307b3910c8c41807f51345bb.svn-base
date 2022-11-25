import {
  Routes,
  Route,
} from "react-router-dom";
import AddCounter from "../Pages/PrivatePages/Counter/AddCounter";
import AddRegisterVehicle from '../Pages/PrivatePages/Vehicle/AddRegisterVehicle';
import AppSettings from '../Pages/PrivatePages/AppSettings/AppSettings';
import Counter from "../Pages/PrivatePages/Counter";
import Dashboard from '../Pages/PrivatePages/Dashboard/Dashboard';
import DateWiseRouteDetails from "../Pages/PrivatePages/Route/DateWiseRoute";
import RegisterVehicle from '../Pages/PrivatePages/Vehicle/RegisterVehicle';
import Report from '../Pages/PrivatePages/Report/Report';
import User from "../Pages/PrivatePages/User";
import VehicleOwner from "../Pages/PrivatePages/VehicleOwner";
import VehicleStaff from "../Pages/PrivatePages/VehicleStaff";
import VehicleWiseRouteDetails from "../Pages/PrivatePages/Route/VehicleWiseRoute";
import AddUser from "../Pages/PrivatePages/User/AddUser";
import AllVehicleInsert from "../Pages/PrivatePages/AllVehicleDetails";
import AddRegisterOwner from "../Pages/PrivatePages/VehicleOwner/AddRegisterOwner";
import AddRegisterVehicleStaff from "../Pages/PrivatePages/VehicleStaff/AddRegisterVehicleStaff";
import AddRouteDetails from "../Pages/PrivatePages/Route/AddRouteDetails";
import CompanyWiseRouteDetails from "../Pages/PrivatePages/Route/CompanyWiseRoute";
import DynamicReport from "../Pages/PrivatePages/Report/DynamicReport";
import RegisteredVehicleReport from "../Pages/PrivatePages/Report/RegisteredVehicleReport";
import CollectionByCounterReport from "../Pages/PrivatePages/Report/CollectionByCounterReport";
import CounterWiseTotalReport from "../Pages/PrivatePages/Report/CounterWiseReport";
import Registration from "../Pages/PrivatePages/AppSettings/Registration";
import UserProfile from "../Pages/PrivatePages/User/UserProfile";

/**
 * @desc: define static routes here
 *  
 */
const MainRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard />} />

      {/* counter routes */}
      <Route exact path='/counter' element={<Counter />} />
      <Route exact path='/addcounter' element={<AddCounter />} />
      <Route exact path='/editcounter' element={<AddCounter forEdit={true} />} />
      {/* counter routes */}

      {/* register vehicle */}
      <Route exact path='/vehicle' element={<RegisterVehicle />} />
      <Route exact path='/addallvehicle' element={<AllVehicleInsert />} />
      <Route exact path='/registervehicle' element={<AddRegisterVehicle />} />
      <Route exact path='/editvehicle' element={<AddRegisterVehicle forEdit={true} />} />
      {/* register vehicle */}

      {/* vehicle owner */}
      <Route exact path='/vehicleowner' element={<VehicleOwner />} />
      <Route exact path='/registervehicleowner' element={<AddRegisterOwner />} />
      <Route exact path='/editvehicleowner' element={<AddRegisterOwner forEdit={true} />} />
      {/* vehicle owner */}

      {/* vehicle staff */}
      <Route exact path='/vehiclestaff' element={<VehicleStaff />} />
      <Route exact path='/registervehiclestaff' element={<AddRegisterVehicleStaff />} />
      <Route exact path='/editvehiclestaff' element={<AddRegisterVehicleStaff forEdit={true} />} />
      {/* vehicle staff */}

      {/* route details */}
      <Route exact path='/addroutedetails' element={<AddRouteDetails />} />
      <Route exact path='/editroutedetails' element={<AddRouteDetails forEdit={true} />} />
      <Route exact path='/croutedetails' element={<CompanyWiseRouteDetails />} />
      <Route exact path='/droutedetails' element={<DateWiseRouteDetails />} />
      <Route exact path='/vroutedetails' element={<VehicleWiseRouteDetails />} />
      {/* route details */}

      {/* user details */}
      <Route exact path='/user' element={<User />} />
      <Route exact path='/adduser' element={<AddUser />} />
      <Route exact path='/userprofile' element={<UserProfile />} />
      <Route exact path='/edituser' element={<AddUser forEdit={true} />} />
      {/* user details */}

      {/* report details */}
      <Route exact path='/reports' element={<Report />} />
      <Route exact path='/reports/collectiondetail' element={<DynamicReport />} />
      <Route exact path='/reports/vehicledetail' element={<RegisteredVehicleReport />} />
      <Route exact path='/reports/counterdetail' element={<CollectionByCounterReport />} />
      <Route exact path='/reports/countertotaldetail' element={<CounterWiseTotalReport />} />
      {/* report details */}
      
      <Route exact path='/settings' element={<AppSettings />} />
      <Route exact path='/registration' element={<Registration />} />
    </Routes>
  )
}

export default MainRoute