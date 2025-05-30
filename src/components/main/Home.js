import {Fragment,useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMainData} from "../../actions/mainActions";
function Home(){
    // action연결 = reducer = store
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchMainData());
    },[]) // vue => mounted()
    const mainData=useSelector(state=>state.mains.main_data);
    const bestMovies = mainData.slice(0, 4);

    const otherMovies = mainData.slice(4);
    console.log(mainData && mainData);
    return (
        <Fragment>
            <div
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL}/img/banner.jpg)`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     width: "100%",
                     height: "800px", // 원하는 높이로 조절
                     color: "white",  // 필요 시 텍스트 색 변경
                     position:"relative"
                 }}>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "64px", // 대문짝만하게
                        fontWeight: "bold",
                        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // 배경 대비 강조
                        whiteSpace: "nowrap"
                    }}
                >
                    WELCOME TO MOVIELAND
                </div>
            </div>
            <div className="container h-100">
                <div className="row h-100 align-items-center align-justify-center">
                    <div className="col-12">
                        <div className="text-center p-5">
                            <h1 className={"fw-light"} style={{"fontWeight":"100","fontSize":"60px"}}>
                                Best Movies
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="categories_area clearfix" id="about" style={{"margin":"0px",padding:"0px",}}>
                <div className="container">
                    <div className="row">

                        {mainData && bestMovies.map((data)=>{
                            return (
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                        <img src={data.poster} alt=""
                                            style={{"width":"800px","borderRadius": "0"}}
                                        />
                                        <div className={"text-center"} style={{"fontSize":"20px"}}>
                                            {data.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="container h-100">
                <div className="row h-100 align-items-center align-justify-center">
                    <div className="col-12">
                        <div className="text-center p-5">
                            <h1 className={"fw-light"} style={{"fontWeight":"100","fontSize":"60px"}}>
                                Box Office
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <section className="categories_area clearfix" id="about" style={{"margin":"0px",padding:"0px"}}>
                <div className="container">
                    <div className="row">

                        {mainData && otherMovies.map((data)=>{
                            return (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                        <img src={data.poster} alt=""
                                             style={{"width":"800px","borderRadius": "0"}}
                                        />
                                        <div className={"text-center"} style={{"fontSize":"20px"}}>
                                            {data.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;