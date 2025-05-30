import {Fragment,useState,useEffect} from "react";
import {boardList} from "../../actions/boardActions";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function BoardList() {
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);
    useEffect(() => {
        dispatch(boardList(curpage)) // action => reducer => store
    },[curpage])
    const board_list=useSelector(state => state.boards.board_list.list )
    const totalpage=useSelector(state => state.boards.board_list.totalpage)
    const today=useSelector(state => state.boards.board_list.today)
    // 이벤트
    const prev=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
    }
    const next=()=>{
        setCurpage(curpage<totalpage?curpage+1:curpage)
        // useEffect()
    }
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/img/community_banner.jpg)`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>community</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <div className={"col-12 p-0"} style={{"fontSize":"20px"}}>
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <Link to={"/board/insert"} className={"myButton"} style={{"fontSize":"20px"}}>
                                        새글
                                    </Link>
                                </tr>
                                </tbody>
                            </table>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <th width={"10%"} className={"text-center"}>번호</th>
                                    <th width={"45%"} className={"text-center"}>제목</th>
                                    <th width={"15%"} className={"text-center"}>이름</th>
                                    <th width={"20%"} className={"text-center"}>작성일</th>
                                    <th width={"10%"} className={"text-center"}>조회수</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    board_list && board_list.map((row,index)=>
                                        <tr key={index}>
                                            <td width={"10%"} className={"text-center"}>{row.no}</td>
                                            <td width={"45%"}>
                                                <Link to={"/board/detail/"+row.no} style={{  "color": "inherit","textDecoration": "none"}}>{row.subject}</Link>&nbsp;
                                            </td>
                                            <td width={"15%"} className={"text-center"}>{row.name}</td>
                                            <td width={"20%"} className={"text-center"}>{row.regdate}</td>
                                            <td width={"10%"} className={"text-center"}>{row.hit}</td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td colSpan={5} className={"text-center"}>
                                        <button className={"myButton"} onClick={prev} style={{"fontSize":"20px"}}>이전</button>
                                        {curpage} page / {totalpage} pages
                                        <button className={"myButton"} onClick={next} style={{"fontSize":"20px"}}>다음</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default BoardList;