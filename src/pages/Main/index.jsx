import * as S from '../../style/Global';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from '../Home';
import Page1 from '../Topics/Page1';
import Page2 from '../Topics/Page2';
import Page3 from '../Topics/Page3';
import Page4 from '../Topics/Page4';
import Page5 from '../Topics/Page5';
import Page6 from '../Topics/Page6';
import Page7 from '../Topics/Page7';
import Page8 from '../Topics/Page8';
import Page9 from '../Topics/Page9';
import Page10 from '../Topics/Page10';
import Page11 from '../Topics/Page11';
import Page12 from '../Topics/Page12';
import Page13 from '../Topics/Page13';
import Page14 from '../Topics/Page14';
import Page15 from '../Topics/Page15';
import Page16 from '../Topics/Page16';
import Page17 from '../Topics/Page17';

export default function Main(){
    return(
        <>
            <Router>
                <S.GlobalStyle />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/page1' element={<Page1 />}></Route>
                    <Route path='/page2' element={<Page2 />}></Route>
                    <Route path='/page3' element={<Page3 />}></Route>
                    <Route path='/page4' element={<Page4 />}></Route>
                    <Route path='/page5' element={<Page5 />}></Route>
                    <Route path='/page6' element={<Page6 />}></Route>
                    <Route path='/page7' element={<Page7 />}></Route>
                    <Route path='/page8' element={<Page8 />}></Route>
                    <Route path='/page9' element={<Page9 />}></Route>
                    <Route path='/page10' element={<Page10 />}></Route>
                    <Route path='/page11' element={<Page11 />}></Route>
                    <Route path='/page12' element={<Page12 />}></Route>
                    <Route path='/page13' element={<Page13 />}></Route>
                    <Route path='/page14' element={<Page14 />}></Route>
                    <Route path='/page15' element={<Page15 />}></Route>
                    <Route path='/page16' element={<Page16 />}></Route>
                    <Route path='/page17' element={<Page17 />}></Route>
                </Routes>
            </Router>
        </>
    );
}