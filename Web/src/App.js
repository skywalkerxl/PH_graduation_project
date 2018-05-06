import './App.scss';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';



import Frame from './layout/Frame/Frame';

// 引入 主页
import MainPage from "./view/MainPage/MainPage";



// 页面节点渲染
ReactDOM.render(
    <div>
        <Router>
            <Route path={'/'} component={Frame}/>
        </Router>
    </div>,
    document.getElementById('root')
)