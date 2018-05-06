import S from './SignUp.scss';
import {NavLink} from 'react-router-dom';
import BackToLogin from "../../components/BackToLogin/BackToLogin";

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        let {changeTitle} = this.props;
        changeTitle("用户注册");
    }

    render(){
        return (
            <div>
                <div className={S.wrapper}>
                    <NavLink
                        to={'/CompanySignUp'}
                        className={S["per-choice"]}>{"企业注册"}</NavLink>
                    <NavLink
                        to={'/PersonSignUp'}
                        className={S["com-choice"]}>{"个人注册"}</NavLink>
                    <BackToLogin/>
                </div>
            </div>
        )
    }
}