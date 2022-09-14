import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Nav1 from './Nav1';
import TimeCot from './TimeCot';
import Notice from './Notice';
import Home from './Home';
import Course from './Course';
import Contacts from './Contacts';
import Trainingandplace from './Trainingandplace';
import Scholorships from './Scholorships';
import OldNotice from './OldNotice';
import About from './About';
import Footer from './Footer';
const App = () => {
    return (
        <div>

            <Navbar />
            <Nav1 />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/notice" exact component={Notice}></Route>
                {/* <Route path="/coursestudy" exact component={Notice}></Route> */}
                <Route path="/contacts" exact component={Contacts}></Route>
                <Route path="/training_and_placement" exact component={Trainingandplace}></Route>
                <Route path="/scholorships" exact component={Scholorships}></Route>
                <Route path="/old_Archive_Notice" exact component={OldNotice}></Route>
                <Route path="/about_institute" exact component={About}></Route>
            </Switch>
            <Footer />
        </div>
    )
}
export default App;