import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";
import {fetchMainData} from "../../actions/mainActions";
import {fetchMovieDetail} from "../../actions/movieActions";
import {useNavigate, useParams} from "react-router";

function MovieList(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const nav=useNavigate();
    useEffect(()=>{
        dispatch(fetchMovieDetail(id)) // 데이터를 서버에서 읽어서 저장
    },[])
    const movieDetail=useSelector(state=>state.movies.movie_detail)
    const listClick=()=>{
        nav("/food/list")
    }

    return (
        <Fragment>
            <div className="breadcumb-area" style={{
                "backgroundImage": `url(${process.env.PUBLIC_URL}/img/list_banner.jpg)`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Movie Detail</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {movieDetail&&
                <section className="archive-area section_padding_80">
                    <div className="container p-0">
                        <div className="row col-12 ">
                            <div className="col-8 mt-5">
                                <h1 style={{fontSize:"30px","fontWeight":"500"}}>
                                    {movieDetail.title}
                                </h1>
                                <div style={{fontSize:"25px"}}>
                                    {movieDetail.originalTitle}
                                </div>
                                <div className={"mt-5 "}>
                                    <div className={"d-flex mb-2"} style={{fontSize:"18px"}} >
                                        <span className={"col-1 p-0"} style={{fontWeight:"500"}}>개봉</span>
                                        <span className={"col-11 p-0"} style={{width:"80%"}}>{movieDetail.releaseDate}</span>
                                    </div>
                                    <div className={"d-flex mb-2"} style={{fontSize:"18px"}}>
                                        <span className={"col-1 p-0"} style={{fontWeight:"500"}}>등급</span>
                                        <span className={"col-11 p-0"}>{movieDetail.rating}</span>
                                    </div>
                                    <div className={"d-flex mb-2"} style={{fontSize:"18px"}}>
                                        <span className={"col-1 p-0"} style={{fontWeight:"500"}}>시간</span>
                                        <span className={"col-11 p-0"}>{movieDetail.runtime}</span>
                                    </div>
                                    <div className={"d-flex mb-2"} style={{fontSize:"18px"}}>
                                        <span className={"col-1 p-0"} style={{fontWeight:"500"}}>장르</span>
                                        <span className={"col-11 p-0"}>{movieDetail.genre}</span>
                                    </div>
                                    <div className={"d-flex mb-2"} style={{fontSize:"18px"}}>
                                        <span className={"col-1 p-0"} style={{fontWeight:"500"}}>감독</span>
                                        <span className={"col-11 p-0"}>{movieDetail.director}</span>
                                    </div>
                                    <div className={"d-flex mb-2"} style={{fontSize:"18px"}}>
                                        <span className={"col-1 p-0"} style={{fontWeight:"500"}}>출연</span>
                                        <span className={"col-11 p-0"}>{movieDetail.cast}</span>
                                    </div>
                                </div>

                            </div>
                            <div className={"col-4 "}>
                                <img src={movieDetail.poster}></img>
                            </div>
                        </div>
                        <div className={"row col-12 bg-secondary mb-5 mt-3"}>

                        </div>
                        <div className={"row col-12"} style={{"fontSize":"15px","color":"#6e6e6e"}}>
                            {movieDetail.synopsis}
                        </div>
                        <div className={"row col-12 p-0 mt-5"} style={{"display":"flex","justifyContent":"flex-end"}}>
                                <button className={"myButton"} style={{"fontSize":"15px"}}>목록</button>
                        </div>
                    </div>
                </section>
            }

        </Fragment>
    )
}

export default MovieList;