import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";
import {fetchMainData} from "../../actions/mainActions";
import {fetchMovieList} from "../../actions/movieActions";

function MovieList(){
    // action함수호출 => reducer => store
    const dispatch = useDispatch()
    const [curpage,setCurpage] = useState(1);
    useEffect(()=>{
        // 리렌더링
        dispatch(fetchMovieList(curpage));
    },[curpage]);
    const movieListData=useSelector(state=>state.movies.movie_list);


    // 이벤트 처리
    const prev=()=>{
        setCurpage(movieListData.startPage-1)
    }
    const next=()=>{
        setCurpage(movieListData.endPage+1)
    }
    const pageChange=(page)=>{
        setCurpage(page);
    }
    let row=[]

    if (movieListData.startPage > 1) {
        row.push(<li className="page-item">
            <a className="page-link" onClick={prev}>Prev <i
                className="fa fa-angle-double-left" aria-hidden="true"

            ></i></a>
        </li>)
    }
    for (let i = movieListData.startPage; i <= movieListData.endPage; i++) {
        if(i===movieListData.curpage)
        {
            row.push(<li className="page-item active"><a className="page-link" onClick={()=>pageChange(i)}>{i}</a></li>)
        }
        else
        {
            row.push(<li className="page-item"><a className="page-link" onClick={()=>pageChange(i)}>{i}</a></li>)
        }

    }
    if (movieListData.endPage < movieListData.totalpage) {
        row.push(<li className="page-item">
            <a className="page-link" onClick={next}>Next <i
                className="fa fa-angle-double-right" aria-hidden="true"></i></a>
        </li>)
    }

    return (
        <Fragment>
            <div className="breadcumb-area" style={{
                "backgroundImage": `url(${process.env.PUBLIC_URL}/img/list_banner.jpg)`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Movie List</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container h-100">
                <div className="row h-100 align-items-center align-justify-center">
                    <div className="col-12">
                        <div className="text-center p-5">
                        </div>
                    </div>
                </div>
            </div>
            <section className="categories_area clearfix" id="about" style={{"margin":"0px",padding:"0px"}}>
                <div className="container">
                    <div className="row">

                        {movieListData.list && movieListData.list.map((data)=>{
                            return (
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                        <Link to={"/movie/detail/"+data.id} style={{  "color": "inherit","textDecoration": "none"}}>
                                            <img src={data.poster} alt=""
                                                 style={{"width":"800px","borderRadius": "0"}}
                                            />
                                            <div className={"text-center"} style={{"fontSize":"18px",fontWeight:"400"}} >
                                                {data.title}
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <div className="pagination-area mt-15 ">
                        <nav aria-label="#">
                            <ul className="pagination ">
                                {row}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MovieList;