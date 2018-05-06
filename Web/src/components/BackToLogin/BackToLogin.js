/**
 *
 *  已有账号，返回登录
 *
 */

import S from './BackToLogin.scss';
import { NavLink } from 'react-router-dom';

export default class BackToLogin extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavLink
                className={S["back-singin"]}
                to={'/signIn'}
                activeClassName={"link-active"}
            >
                <span>已经有账号了？点击登录</span>
            </NavLink>
        )
    }
}