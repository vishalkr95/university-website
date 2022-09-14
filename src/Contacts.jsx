import React from 'react';
import TimeCot from './TimeCot';
import NoticeLeftSide from './NoticeLeftSide';
const Contacts = () => {
    return (
        <>
            <TimeCot allInOne="Contact" />
            <div id="container">
                <NoticeLeftSide />
                <div id="rightContainer">
                    <div id="map">
                        <div class="mapouter" style={{ position: "relative", textAlign: "right", width: "100%", height: "443px" }}><div class="gmap_canvas" style={{ overflow: 'hidden', background: 'none', width: '100%', height: '443px' }}><iframe class="gmap_iframe" style={{ height: "443px" }} width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=747&amp;height=443&amp;hl=en&amp;q=university institute of technology  burdwan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fridaynightfunkin.net/">Friday Night Funkin Download</a></div>
                        </div>
                    </div>
                    <div id="admssionRelatedInfo">
                        <h1>Admission Related Phone Numbers :</h1>
                        <h1>Call for Admission: 9476322966, 9564632839</h1>
                    </div>
                    <div id="contactPage">
                        <p>University Institute Of Technology</p>
                        <p>The University of Burdwan,</p>
                        <p>Golapbag (North), Burdwan-713104.</p>
                        <p>Golapbag (North), Burdwan-713104.</p>
                        <p><b>WLL: +919476322966</b></p>
                        <p><b>Mob: +919564632839, 9382092494, 9382182071</b></p>
                        <p>Telephone: (0342) 2658777 , 2658787</p>
                        <p>Telefax: 91-342-2658776</p>
                        <p>Email: principal@uit.buruniv.ac.in</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contacts;