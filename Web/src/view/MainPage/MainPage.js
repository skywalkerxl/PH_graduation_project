/**
 *
 *  主功能界面
 *
 */

import S from './MainPage.scss';
import { NavLink } from 'react-router-dom';

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        let {changeTitle} = this.props;
        changeTitle("我的猪场");
    }

    render(){
        return (
            <div>
                <div className={S["menu-wrapper"]}>
                    <img className={S.icon} src={require('../../common/img/ZGL/DataAnalysis.png')}/><br/>
                    <span className={S.text}>{"数据分析"}</span>
                </div>
                <div className={S["menu-wrapper"]}>
                    <img className={S.icon} src={require('../../common/img/ZGL/Setting.png')}/><br/>
                    <span className={S.text}>{"配置设定"}</span>
                </div>
                <NavLink className={S["menu-wrapper"]} to={'/buildFarm'} activeClassName={"link-active"}>
                    <img className={S.icon} src={require('../../common/img/ZGL/FarmSetting.png')}/><br/>
                    <span className={S.text}>{"养殖场设置"}</span>
                </NavLink>
                <div className={S["menu-wrapper"]}>
                    <img className={S.icon} src={require('../../common/img/ZGL/Users.png')}/><br/>
                    <span className={S.text}>{"用户管理"}</span>
                </div>
            </div>
        )
    }
}