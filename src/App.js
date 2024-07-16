import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePageComponents/HomePage";
import DekstopLogin from "./desktopLoginPage/DekstopLogin";
import DesktopSignup from "./desktopSignupPage/DesktopSignup";
import EnterOtp from "./desktopSignupPage/EnterOtp";
import UserDashboard from "./userDashboard/UserDashboard";
import DoctorLisiting from "./doctorPages/DoctorLisiting";
import DoctorDetail from "./doctorPages/DoctorDetail";
import TeacherListing from "./teacherPages/TeacherListing";
import TeacherDetail from "./teacherPages/TeacherDetail";
import CaListing from "./caPages/CaListing";
import CaDetail from "./caPages/CaDetail";
import LabourListing from "./labourPages/LabourListing";
import LabourDetail from "./labourPages/LabourDetail";
import EngineerListing from "./engineerPages/EngineerListing";
import EngineerDetail from "./engineerPages/EngineerDetail";
import Trial from "./commonComponents/Trial";
import AdvocateListing from "./advocatePages/AdvocateListing";
import AdvocateDetail from "./advocatePages/AdvocateDetail";
import OfficersListing from "./officersPages/OfficersListing";
import OfficersDetail from "./officersPages/OfficersDetail";
import GovtOfficesListing from "./govtofficesPages/GovtOfficesListing";
import GovtOfficesDetail from "./govtofficesPages/GovtOfficesDetail";
import Listing from "./listingPages/Listing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage userDashboard="true" />} />
        <Route path="/login" element={<DekstopLogin />} />
        <Route path="/register" element={<DesktopSignup />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/doctors" element={<DoctorLisiting />} />
        <Route path="/teachers" element={<TeacherListing />} />
        <Route path="/ca's" element={<CaListing />} />
        <Route path="/labours" element={<LabourListing />} />
        <Route path="/engineers" element={<EngineerListing />} />
        <Route path="/advocates" element={<AdvocateListing />} />
        <Route path="/officers" element={<OfficersListing />} />
        <Route path="/govt. officers" element={<GovtOfficesListing />} />

        <Route path="/doctor-detail" element={<DoctorDetail />} />
        <Route path="/teacher-detail" element={<TeacherDetail />} />
        <Route path="/ca-detail" element={<CaDetail />} />
        <Route path="/labour-detail" element={<LabourDetail />} />
        <Route path="/engineer-detail" element={<EngineerDetail />} />
        <Route path="/advocate-detail" element={<AdvocateDetail />} />
        <Route path="/officer-detail" element={<OfficersDetail />} />
        <Route path="/govt-offices-detail" element={<GovtOfficesDetail />} />

        <Route path="/list-yourself" element={<Listing />} />

        <Route path="/trial" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
