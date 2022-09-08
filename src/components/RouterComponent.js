import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import First from '../layouts/First';
import Fourth from '../layouts/Fourth';
import Second from '../layouts/Second';
import Third from '../layouts/Third';
const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/first" element={<First/>}/>
            <Route path="/second" element={<Second/>}/>
            <Route path="/third" element={<Third/>}/>
            <Route path="/fourth" element={<Fourth/>}/>
            <Route path="/" element={<First/>}/>
        </Routes>
    );
}

export default RouterComponent;