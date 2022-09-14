import React from 'react';
import image from './image/uitlogo.jfif';
const Nav1 = () => {
    return (
        <>
            <div id="nav1">
                <div id="secnav">
                    <div id="collegeName">
                        <h2 style={{ color: "mediumblue" }}>University Institute Of Technology</h2>
                        <h2 style={{ color: "burlywood" }}>The Burdwan University</h2>
                        <img id="uitlogo" src={image} alt="" />
                    </div>
                    <ul id="nav_ul_list">
                        {/* 1st image */}
                        <li className="logonav1 " id="name1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">|   Institute</li>

                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    Some text as placeholder Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatibus!. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                     </div>

                            </div>
                        </div>

                        {/* end */}

                        <li className="logonav1" id="name2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">|    Academeics</li>
                        {/* 2nd image */}
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                     </div>

                            </div>
                        </div>
                        {/* end */}
                        <li className="logonav1" id="name3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">|     Students</li>
                        {/* 3rd image */}

                        {/* end */}
                    </ul>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default Nav1;