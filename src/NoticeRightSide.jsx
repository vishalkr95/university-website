import React from 'react';
import { Link } from 'react-router-dom';
const NoticeRightSide = () => {

    return (
        <>
            < div id="rightContainer" >
                <div id="main">
                    <h2>Notice(General)</h2>
                    <p><span class="badge bg-danger">New</span><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification Regarding COVID-19</a></p>
                    <p><span class="badge bg-danger">New</span><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification regarding submission of Semester Fees </a> (Published on 08.04.2021)</p>


                    <p><span class="badge bg-danger">New</span><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification dated 05-04-2021 </a>(Published on 05.04.2021)</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification regarding Semester fees </a>(Published on 09.03.2021)</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification regarding Physical Verification towards Confirmation of Admission in B.E. Courses (Lateral Admission)</a>(Published on 04.03.2021)</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification regarding Library cards

</a>(Published on 04.03.2021)</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification for Semester Fees </a>(Published on 01.03.2021)</p>

                    <p>Students who applied for SVMCM (Fresh) Scholarships are advised to submit their filled-in applications along with self attested copies of documents (including original) on or within 25-02-2021 for verification. This order is being issued with the approval of competent authority.</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification for Decentralized Counseling process under Lateral Entry Scheme </a>(Published on 19.02.2021)</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">HRA and HRA Declaration Form (for employees)</a>(Published on 11.02.2021</p>

                    <p>Students who applied for NSP Scholarships are advised to submit their filled-in applications along with self attested copies of documents (including original) on or within 04-02-2021 for verification</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification for All Departmental In-charges </a>(Published on 10.01.2021)</p>

                    <p><a className="text-primary" style={{ textDecoration: "underline" }} href="">Notification regarding Functioning of UIT,BU w.e.f 11.01.2021 </a>(Published on 09.01.2021)</p>

                    <p><span class="badge bg-danger">New</span><a className="text-primary" style={{ textDecoration: "underline" }} href="">List of holidays 2021</a></p>
                </div>

                <div id="notice1styear">
                    <h1>Notice (For First Year)</h1>
                    <p><span className="badge bg-danger"></span><a style={{ textDecoration: "underline", color: "blue" }} href="">Notification regarding Library cards </a>(Published on 04.03.2021)</p>
                </div>

                <div id="archiveOldNotice">
                    <h1>Archive (Old Notice)</h1>
                    <h2><Link style={{ textDecoration: "underline", color: "blue" }} to="/old_Archive_Notice">click here</Link></h2>
                </div>
            </div >
        </>
    )
}
export default NoticeRightSide;