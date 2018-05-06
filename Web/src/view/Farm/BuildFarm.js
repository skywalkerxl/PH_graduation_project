/**
 *
 *  新建农场
 *
 */

import S from './BuildFarm.scss';

export default class BuildFarm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: ""
        };
        this.changeFarmNumber = this.changeFarmNumber.bind(this);
    }

    changeFarmNumber(ev){
        this.setState({
            num: ev.target.value
        });
    }

    componentDidMount(){
        let { changeTitle } = this.props;
        changeTitle("新建农场");
    }

    render(){
        let { createFarm } = this.props;
        let { num } = this.state;
        let { changeFarmNumber } = this;
        return (
            <div className={S.wrapper}>
                <img
                    src={require('../../common/img/ZGL/BuildFarm.png')}
                    className={S.logo}
                /><br/>
                <span className={S.desc}>{"您还没有猪场，快来新建吧"}</span>
                <input
                    className={S["farm-num"]}
                    type={"number"}
                    placeholder={"请输入猪舍数量"}
                    value={num}
                    onChange={changeFarmNumber}
                />
                <button
                    className={S["btn-confirm"]}
                    onClick={()=>{createFarm(num)}}
                >{"确认新建"}</button>
            </div>
        )
    }
}