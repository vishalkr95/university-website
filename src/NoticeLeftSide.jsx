import React from 'react';
import { Link } from 'react-router-dom';
const NoticeLeftSide = () => {
    return (
        <>
            <div id="leftContainer">
                <div id="noticeAndCirdulr">
                    <hr />
                    <div class="btn-group w-100">
                        <button type="button" class="btn bg-danger dropdown-toggle text-white" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            Institute
                                                  </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            <Link to="/about_institute"><li><button class="dropdown-item" type="button">About us</button></li></Link>
                            <li><button class="dropdown-item" type="button">Mission,Vission and Objective</button></li>
                            <li><button class="dropdown-item" type="button">Organization Heirarchy</button></li>
                            <li><button class="dropdown-item" type="button">Facilities</button></li>
                            <li><button class="dropdown-item" type="button">Training and Placement</button></li>
                        </ul>
                    </div>
                    <hr />
                    <div class="btn-group w-100">
                        <button type="button" class="btn bg-danger dropdown-toggle text-white" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            Academics
                                                  </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            <li><button class="dropdown-item" type="button">Department of Electronic and Communication Engineering</button></li>
                            <li><button class="dropdown-item" type="button">Department of Computer Science and Engineering</button></li>
                            <li><button class="dropdown-item" type="button">Department of Information Technology</button></li>
                            <li><button class="dropdown-item" type="button">Department of Applied Electronic and Instrument Engineering</button></li>
                            <li><button class="dropdown-item" type="button">Department of Electrical Engineering</button></li>
                            <li><button class="dropdown-item" type="button">Department of Civil Engineering</button></li>
                            <li><button class="dropdown-item" type="button">Humanities / General Sc / Engg</button></li>

                        </ul>
                    </div>
                    <hr />
                    <div class="btn-group w-100">
                        <button type="button" class="btn bg-danger dropdown-toggle text-white" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            Student
                                                  </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            <li><button class="dropdown-item" type="button">Admission Undergraduate</button></li>
                            <li><button class="dropdown-item" type="button">Admission Postgraduate</button></li>
                            <li><button class="dropdown-item" type="button">Studuent Activities</button></li>
                            <li><button class="dropdown-item" type="button">UIT Alumni</button></li>
                        </ul>
                    </div>
                    <hr />
                    <div id="adverNotice">
                        <h2>Notice(Advertisement)</h2>

                        <p><a className="text-primary" style={{ textDecoration: "underline" }} href="www.google.com">Notice for Admission in M.E courses 20202</a> (published on 24.9.2020)</p>
                    </div>

                    <div id="notiveExam">
                        <h2>Notice (Examination)</h2>
                        <p>
                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">TCPA format UG 2019</a><span class="badge bg-danger">New</span></p>
                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">TCPA format ME 2019</a><span class="badge bg-danger">New</span></p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Corrigendum (Program Schedule)</a>(Published on 17.03.2021)</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Program Schedule for BE Odd Semester Theoretical Examination (Regular) 2020-21, UIT, BU</a>(Published on 08.03.2021</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Program Schedule for BE Odd Semester Theoretical Examination (BP) 2020-21 </a>(Published on 08.03.2021)</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Program Schedule for ME Odd Semester Theoretical Exam 2020-21, UIT, BU </a>(Published on 08.03.2021)</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Student Guidelines for BE and ME Odd Semester Examinations 2020-21 </a>(Published on 08.03.2021)</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Answer Script Front Page </a>(Published on 08.03.2021)</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification for Form Fill-up and Exam Fee Clearance of Back-Paper Candidates </a>(Published on 04.03.2021)</p>

                            <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Corrigendum of Provisional Result of B.E. 2nd Semester Exam 2019-20 </a>(Published on 20.01.2021)</p>

                        </p>
                    </div>

                </div >

            </div >
        </>
    )
}
export default NoticeLeftSide;