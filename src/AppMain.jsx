import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import StudentList from "./Components/Pages/StudentList";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom'
import StudentDetails from "./Components/Pages/StudentDetails";
function AppMain() {
    return (
        <Router>
            <>
                {/* Begin page */}
                <div id="wrapper">
                    <TopBar></TopBar>
                    <LeftSideBar></LeftSideBar>
                    


                    <Switch>
                        <Route exact path="/">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route exact path="/student-list">
                            <StudentList></StudentList>
                        </Route>

                        <Route exact path="/student/:id">
                            <StudentDetails/>
                        </Route>
                    </Switch>



                </div>

                <RightSidebar></RightSidebar>
                <div className="rightbar-overlay"></div>
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;