import * as S from '../../style/Global';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from '../Home';

export default function Main(){
    return(
        <>
            <Router>
                <S.GlobalStyle />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    );
}