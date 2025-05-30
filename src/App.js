import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/main/Home"
import Header from "./components/main/Header"
import Footer from "./components/main/Footer"
import store from "./store/store"
import {Provider} from "react-redux";
import MovieList from "./components/movie/MovieList";
import MovieDetail from "./components/movie/MovieDetail";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardDelete from "./components/board/BoardDelete";
import BoardUpdate from "./components/board/BoardUpdate";
// <함수명> => return에 있는 HTML을 출력
// 모든 component => 반드시 return을 포함하고 있어야 된다
/*
        리덕스 규칙
        1) ACTION 생성 : 실제 서버와 연결 => 데이터 읽기 , 수정
            = 구분자 FETCH_MAIN_DATA
            = axios / fetch => 서버 연결하는 함수 제작
                    | dispatch()
        2) Reduce : action에서 읽은 데이터를 해당 변수에 저장
                    | dispatch() => useDispatch
 */
function App() {
    // store => 등록된 모든 컴포넌트가 사용이 가능
  return (
      <Provider store={store}>
      <Router>
        <Header/>
          <Routes>
            <Route path={"/"} element={<Home/>} />
              <Route path={"/movie/list"} element={<MovieList/>} />
              <Route path={"/movie/detail/:id"} element={<MovieDetail/>} />
              <Route path={"/board/list"} element={<BoardList/>} />
              <Route path={"/board/insert"} element={<BoardInsert/>} />
              <Route path={"/board/detail/:no"} element={<BoardDetail/>} />
              <Route path={"/board/delete/:no"} element={<BoardDelete/>} />
              <Route path={"/board/update/:no"} element={<BoardUpdate/>} />
          </Routes>
        <Footer/>
      </Router>
      </Provider>
  );
}

export default App;
