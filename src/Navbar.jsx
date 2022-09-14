import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './App.css'
const navbar = () => {
    const style = {
        color: 'blue'
        // fontSize: 200
    };

    return (
        <>
            <div id="nav">
                <div id="mynav">
                    <ul id="ullist">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/notice"><li>Notice/Circular</li></Link>
                        {/* for pdf direct call not using LInk only use of a->anchar tag */}
                        <a href="http://uit.buruniv.ac.in/notifications_files/Notice%20for%20Admission%20in%20M.E.%20courses%202020%20(24.09.20).pdf" target="_Blank"><li>Course of study</li></a>


                        <a href="http://uit.buruniv.ac.in/notifications_files/Notice%20for%20Fees%20Structure%202020.pdf" target="_Blank"><li>New Fee Structure</li></a>
                        <li>
                            <details>
                                <summary>
                                    Undergraduate
                                </summary>
                                <div id="postnav">
                                    <a style={style} href="https://uit.buruniv.ac.in/admission-ug-uit.pdf"><li className="postdiv" id="hovpost">Admission</li></a>

                                    <a style={style} href="https://uit.buruniv.ac.in/notifications_files/Curricula/BE_REGULATIONN2009_ONWARDS.pdf"><li className="postdiv">BE Regulation OLD</li></a>

                                    <a style={style} href="https://uit.buruniv.ac.in/notifications_files/Curricula/BE_Regulations.pdf"><li className="postdiv">BE regulations Intermeduiate</li></a>
                                    <a style={style} href="https://uit.buruniv.ac.in/notifications_files/Curricula/1st%20Year%20BE%20Curriculum%20for%202018-19%20batch%20onwards.pdf">
                                        <li className="postdiv">1st year BE Curriculam for 2018-2019 batch onwards</li></a>

                                    <a style={style} href="https://uit.buruniv.ac.in/notifications_files/Curricula/AICTE_Induction_Programe_Schedule_Session_2020-21.pdf"><li className="postdiv">AICTE Induction Programme Schedule Session 2020-21</li></a>
                                    {/* here use rar file  */}
                                    <a style={style} href='https://uit.buruniv.ac.in/notifications_files/Curricula/AICTE Syllabus 3rd and 4th Sem .rar'><li className="postdiv">BE Syllabus for 3rd and 4th Sem as per AICTE</li></a>

                                    <a href="" style={style}><li className="postdiv">BE Syllabus for 5th to 8th Sem as per AICTE</li></a>

                                    <a href="" style={style}><li className="postdiv">Intermediate Syllabus</li></a>
                                </div>

                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Postgraduate
                                </summary>
                                <div id="postnav">
                                    <a style={style} href="https://uit.buruniv.ac.in/Eligibility%20criteria%20ME%202019.pdf" target="_"><li className="postdiv" id="hovpost">Eligibility and Schedule</li></a>
                                    <a style={style} href="https://uit.buruniv.ac.in/ME_regulation2012-14onwards.pdf" target="_"> <li className="postdiv">University Regulations</li>
                                    </a>
                                </div>

                            </details>
                        </li>

                        <Link to="/contacts"><li>Contacts</li></Link>
                        <Link to="/training_and_placement"><li>Trainig and Placement</li></Link>
                        <a href="http://www.uitalumni.org/" target="_"><li>UIT Alumni</li></a>
                        <a href="http://www.buruniv.ac.in/uit/teqip/Welcome%20-%20TEQUIP%20Phase%20II.htm" target="_"><li>TEQIP Cell</li></a>
                        <Link to="/scholorships"><li>Scholorships</li></Link>
                        <li>
                            <details>
                                <summary>
                                    Academic Calender
                                </summary>
                                <div id="postnav">
                                    <a style={style} href="http://uit.buruniv.ac.in/notifications_files/Academic%20Calendar%20for%20B.E-M.E%202020-21(Even).pdf"><li className="postdiv" id="hovpost">Academic calender for Even Semester 2020-21</li></a>
                                    <a style={style} href="http://uit.buruniv.ac.in/notifications_files/Academic%20Calendar%20for%20B.E-M.E%202020-21(Odd).pdf"><li className="postdiv">Academic calender for Odd Semester 2020-21</li></a>
                                    <a style={style} href="http://uit.buruniv.ac.in/notifications_files/Calendar%202020.pdf"><li className="postdiv">calender 2020</li></a>

                                </div>

                            </details>
                        </li>

                        <li>
                            <details>

                                <summary id="summary">
                                    Admission through WEBJEE 2020
                                </summary>
                                <div id="postnav">
                                    <span class="badge bg-danger">New</span>
                                    <a href="http://uit.buruniv.ac.in/notifications_files/Notification%20for%20Provisional%20Admission%20to%20UIT%20through%20WBJEE%202020%20counselling%20upto%203rd%20round%20(29.10.20).pdf" style={style}><li className="postdiv" id="hovpost" target="_">Notification for provisional Admission for UIT WBJEE 2020 counselling upto 3rd round (29.10.20)</li></a>

                                </div>

                            </details>
                        </li>
                        <a href="https://drive.google.com/drive/folders/1zo8QDs-h6CqdF17PHsJRtvDJ21Cb1Qk0" s><li>Teaching Through Internet</li></a>
                    </ul>

                    <div id="soemLink">
                        <marquee behavior="alternate" direction="ltr">  <ul id="someourLink">
                            <li id="redcolor" style={{ color: "rgb(255, 23, 70)" }}>Vishal kumar</li>
                            <li id="cyancolor" style={{ color: "cyan" }}>vishalkr09708@gmail.com</li>
                            <li className="cyanColor" style={{ color: "cyan" }}>My University website</li>
                        </ul></marquee>
                    </div>

                    <div id="singleLink">
                        <marquee behavior="" direction="">
                            <ul style={{ color: "rgb(89, 89, 201)", listStyleType: "none", paddingTop: '2em' }}>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, earum?</li>
                            </ul>
                        </marquee>
                    </div>
                </div>
            </div>


        </>
    )
}
export default navbar;