/**
 *
 *  绑定设备
 *
 */

import S from './BindEquipment.scss';

export default class BindEquipment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            equipmentNum: ""
        };
        this.changeEquipNum = this.changeEquipNum.bind(this);
    }

    // 更改绑定的设备编号
    changeEquipNum(ev){
        this.setState({
            equipmentNum: ev.target.value
        })
    }

    componentDidMount(){
        let { changeTitle } = this.props;
        changeTitle("绑定设备");
    }

    render(){
        let { equipmentNum } = this.state;
        let { changeEquipNum } = this;
        let { ConfirmBindEquip } = this.props;
        return (
            <div className={S.wrapper}>
                <img
                    src={require('../../common/img/ZGL/BuildFarm.png')}
                    className={S.logo}
                /><br/>
                <span className={S.desc}>{"您还没有绑定设备，快来绑定吧"}</span>
                <input
                    className={S["farm-num"]}
                    type={"number"}
                    placeholder={"请输入设备编号"}
                    value={equipmentNum}
                    onChange={changeEquipNum}
                />
                <button
                    className={S["btn-scan"]}
                >{"扫一扫"}</button>
                <button
                    className={S["btn-confirm"]}
                    onClick={ConfirmBindEquip}
                >{"确认绑定"}</button>
            </div>
        )
    }
}