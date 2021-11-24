import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";

function AppMain(){
    return(
        <>
        {/* Begin page */}
        <div id="wrapper">
			<TopBar></TopBar>
            <LeftSideBar></LeftSideBar>
            <Dashboard></Dashboard>
		</div>

        <RightSidebar></RightSidebar>
        <div className="rightbar-overlay"></div>
        {/* END wrapper */}
        </>
    );
}
export default AppMain;