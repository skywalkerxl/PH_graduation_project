/**
 *
 *  场内显示
 *
 */

import S from './FloorDisplay.scss';
import { NavLink } from 'react-router-dom';

export default class FloorDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            needBindEquipNum : ""
        };
    }

    componentDidMount(){
        let {changeTitle} = this.props;
        changeTitle("场内显示");
    }

    render(){
        let { farmInfo, clickNeedBindEquip } = this.props;

        return (
            <div className={S.wrapper}>
                <div className={S["search-wrapper"]}>
                    <input
                        className={S["search-box"]}
                    ></input>{""}<img className={S["search-img"]} src={require('../../common/img/ZGL/search.png')}/>
                </div>
                <div>
                    {
                        (()=>{
                            let listArr = [];
                            for( let key in farmInfo){
                                listArr.push(
                                    // 这里判断设备是否已绑定，
                                    farmInfo[key].hasBind ? (
                                        <li
                                            className={S["item-list"]}
                                            data-id={key}
                                            key={key}
                                        >
                                            <img
                                                src={
                                                    farmInfo[key].hasBind ? (
                                                        require('../../common/img/ZGL/hasBind.png')
                                                    ) : (
                                                        require('../../common/img/ZGL/hasNotBind.png')
                                                    )
                                                }
                                                className={S["status-img"]}
                                            />
                                            <span className={S["name-text"]}>
                                            {
                                                farmInfo[key]["nameTxt"] ? (
                                                    farmInfo[key]["nameTxt"]
                                                ) : (
                                                    `第${key}舍`
                                                )
                                            }</span>
                                            <img src={require('../../common/img/ZGL/ItemOpt.png')} className={S["opt-img"]}/>
                                        </li>
                                    ) : (
                                        <NavLink
                                            to={'/bindEquipment'}
                                            className={S["item-list"]}
                                            onClick={clickNeedBindEquip}
                                            data-id={key}
                                            key={key}
                                        >
                                            <img
                                                src={
                                                    farmInfo[key].hasBind ? (
                                                        require('../../common/img/ZGL/hasBind.png')
                                                    ) : (
                                                        require('../../common/img/ZGL/hasNotBind.png')
                                                    )
                                                }
                                                className={S["status-img"]}
                                            />
                                            <span className={S["name-text"]}>
                                            {
                                                farmInfo[key]["nameTxt"] ? (
                                                    farmInfo[key]["nameTxt"]
                                                ) : (
                                                    `第${key}舍`
                                                )
                                            }</span>
                                            <img src={require('../../common/img/ZGL/ItemOpt.png')} className={S["opt-img"]}/>
                                        </NavLink>
                                    )
                                )
                            }
                            return listArr;
                        })()
                    }
                </div>
            </div>
        )
    }
}