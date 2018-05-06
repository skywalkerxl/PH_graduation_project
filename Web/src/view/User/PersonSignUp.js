import S from './PersonSignUp.scss';
import BackToLogin from "../../components/BackToLogin/BackToLogin";

export default class PersonSignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',  // 姓名
            idcard: '',  // 身份证号
            password: '',  // 密码
            sex: '',  // 性别
            tel: '',  // 手机号
        };
        this.changeName = this.changeName.bind(this);  // 更改姓名
        this.changeIdCard = this.changeIdCard.bind(this);  // 更改身份证号
        this.changePassword = this.changePassword.bind(this);  // 更改密码
        this.changeSex = this.changeSex.bind(this);  // 更改性别
        this.changeTel = this.changeTel.bind(this);  // 更改手机号
        this.formSubmit = this.formSubmit.bind(this);  // 提交个人注册
    }

    // 更改姓名
    changeName(ev){
        this.setState({
            name: ev.target.value
        })
    }

    // 更改身份证号码
    changeIdCard(ev){
        this.setState({
            idcard: ev.target.value
        })
    }

    // 更改密码
    changePassword(ev){
        this.setState({
            password: ev.target.value
        })
    }

    // 更改性别
    changeSex(ev){
        this.setState({
            sex: ev.target.value
        })
    }

    // 更改手机号
    changeTel(ev){
        this.setState({
            tel: ev.target.value
        })
    }

    formSubmit(){

    }

    // 组件加载前更改页面标题为 个人注册
    componentWillMount(){
        let { changeTitle } = this.props;
        changeTitle("个人注册");
    }

    render(){
        let {
            changeIdCard,
            changeName,
            changePassword,
            changeSex,
            changeTel,
            formSubmit
        } = this;

        let {
            name,
            sex,
            idcard,
            password,
            tel
        } = this.state;

        let {
            signUpAjaxByPer
        } = this.props;
        return (
            <div className={S.wraper}>
                <div className={S["form-wrapper"]}>
                    <input
                        type={"text"}
                        placeholder={"姓名"}
                        className={S["input-box"]}
                        onChange={changeName}
                        value={name}
                    />
                    <input
                        type={"text"}
                        placeholder={"身份证号"}
                        className={S["input-box"]}
                        onChange={changeIdCard}
                        value={idcard}
                    />
                    <input
                        type={"text"}
                        placeholder={"密码"}
                        className={S["input-box"]}
                        onChange={changePassword}
                        value={password}
                    />
                    <input
                        type={"text"}
                        placeholder={"性别"}
                        className={S["input-box"]}
                        onChange={changeSex}
                        value={sex}
                    />
                    <input
                        type={"text"}
                        placeholder={"手机号"}
                        className={S["input-box"]}
                        onChange={changeTel}
                        value={tel}
                    />
                </div>
                <div className={S["opt-menu"]}>
                    <button
                        className={S["btn-signin"]}
                        onClick={signUpAjaxByPer}
                    >{"注册"}</button>
                </div>
                <BackToLogin/>
            </div>
        )
    }
}
