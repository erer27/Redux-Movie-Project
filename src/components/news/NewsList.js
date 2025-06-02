import {useState, useEffect, Fragment, useRef, use} from 'react'
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchNewsData} from "../../actions/mainActions";

function NewsList(){
    const dispatch = useDispatch();
    const fdRef = useRef(null);
    const [fd,setFd] = useState("맛집");
    useEffect(()=>{
        dispatch(fetchNewsData(fd))
    },[fd])
    const newsClick=()=>{
        if(fd==="")
        {
            fdRef.current.focus();
            return
        }
        setFd(fdRef.current.value);
    }
    const newsList=useSelector(state => state.mains.news_data)
    return (
        <Fragment>
            <div className="breadcumb-area" style={{
                "backgroundImage": `url(${process.env.PUBLIC_URL}/img/news_banner.jpg)`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Movie News</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80 m-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <input type={"text"} size={"25"} className={"input-sm"}
                                   ref={fdRef}
                            />
                            <button className={"myButton ml-2"} style={{"fontSize":"14px"}} onClick={newsClick}>검색</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="archive-area section_padding_80 m-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center p-3" style={{backgroundColor: '#eeeeee'}}>
                            {newsList && newsList.items.map(news=>{
                                return(
                                    <div className={"mb-3 p-3"} style={{
                                        border: '1px solid black',
                                        }}>
                                        <div>
                                            <h3 className={"text-left mb-5"} style={{"color":"#2c3e50"}} dangerouslySetInnerHTML={{__html: news.title}}></h3>
                                        </div>
                                        <div className={"text-left"} style={{"height":"70px","fontSize":"17px"}} dangerouslySetInnerHTML={{__html: news.description}}>

                                        </div>
                                    </div>
                                )
                            })}
{/*                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>
                                        {
                                            newsList && newsList.items.map(news=>
                                                <table className={"table"}>
                                                    <tbody>
                                                    <tr>
                                                        <td className={"text-left"}><h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html: news.title}}></h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"text-left"} dangerouslySetInnerHTML={{__html: news.description}}></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )
                                        }
                                    </td>
                                </tr>
                                </tbody>
                            </table>*/}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsList;