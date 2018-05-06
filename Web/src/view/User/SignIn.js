// 登录

import S from './SignIn.scss';
import { NavLink } from 'react-router-dom';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tel: '',
            password: ''
        };
        this.changePassword = this.changePassword.bind(this);
        this.changeTel = this.changeTel.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    changeTel(ev){
        this.setState({
            tel: ev.target.value
        })
    }

    changePassword(ev){
        this.setState({
            password: ev.target.value
        })
    }

    formSubmit(){

    }

    componentWillMount(){
        let {changeTitle} = this.props;
        changeTitle("用户登录");
    }

    render(){
        let { changePassword, changeTel, formSubmit } = this;
        let { tel, password } = this.state;
        let { signInAjax } = this.props;

        return (
            <div className={S["form-wrapper"]}>
                <input
                    type={"text"}
                    className={S["input-box"]}
                    placeholder={"手机号"}
                    onChange={changeTel}
                    value={tel}
                />
                <input
                    type={"password"}
                    className={S["input-box"]}
                    placeholder={"密码"}
                    onChange={changePassword}
                    value={password}
                />
                <button
                    className={S["btn-signin"]}
                    onClick={signInAjax}
                >{"登录"}</button>
                <NavLink
                    to={"/SignUp"}
                    className={S["back-singin"]}
                    activeClassName={"link-active"}
                >
                    <span>{"新用户？点击这里注册"}</span>
                </NavLink>
            </div>
        )
    }
}