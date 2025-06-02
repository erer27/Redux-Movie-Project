import {Fragment} from "react";
import {Link} from "react-router-dom";
// jsx => javascript+xml => createElement
function Header() {
    return (
        <Fragment>
            <div className="top_header_area"
                 style={{
                     position:"absolute"
                 }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6" style={{"zIndex": "999"}}>

                            <div className="top_social_bar">
                                <Link to="/"><span style={{"color":"white","fontSize":"20px"}}>HOME</span></Link>
                            </div>
                        </div>

                        <div className="col-7 col-sm-6">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    <div className="login">
                                        <Link to="/movie/list" style={{"color":"white"}}>Movies</Link>
                                    </div>
                                    <div className="login">
                                        <Link to="/board/list" style={{"color":"white"}}>Community</Link>
                                    </div>
                                    <div className="register">
                                        <Link to="/news/list" style={{"color":"white"}}>News</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Header;