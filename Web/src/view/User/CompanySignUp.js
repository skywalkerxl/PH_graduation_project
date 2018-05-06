import S from './CompanySignUp.scss';
import BackToLogin from "../../components/BackToLogin/BackToLogin";


export default class CompanySignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            companyName: '',  // 单位名称
            companyProperty: '',  // 单位性质
            companyAddress: '',  // 单位地址
            linkman: '',  // 联系人
            linktel: '',  // 联系电话
            password: ''  // 密码
        };
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.changeCompanyProperty = this.changeCompanyProperty.bind(this);
        this.changeCompanyAddress = this.changeCompanyAddress.bind(this);
        this.changeLinkMan = this.changeLinkMan.bind(this);
        this.changeLinkTel = this.changeLinkTel.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }


    // 更改单位名称
    changeCompanyName(ev) {
        let companyName = ev.target.value;
        this.setState({
            companyName
        })
    }

    // 更改单位性质
    changeCompanyProperty(ev) {
        let companyProperty = ev.target.value;
        this.setState({
            companyProperty
        })
    }

    // 更改单位地址
    changeCompanyAddress(ev) {
        let companyAddress = ev.target.value;
        this.setState({
            companyAddress
        })
    }

    // 更改联系人
    changeLinkMan(ev) {
        let linkman = ev.target.value;
        this.setState({
            linkman
        })
    }

    // 更改联系电话
    changeLinkTel(ev){
        let linktel = ev.target.value;
        this.setState({
            linktel
        })
    }

    // 更改密码
    changePassword(ev){
        let password = ev.target.value;
        this.setState({
            password
        })
    }

    formSubmit(){

    }

    // 加载页面时更改名称为 企业注册
    componentWillMount(){
        let {changeTitle} = this.props;
        changeTitle("企业注册");
    }


    render(){
        let {
            companyName,
            companyProperty,
            companyAddress,
            linkman,
            linktel,
            password
        } = this.state;

        let {
            changeCompanyName,
            changeCompanyProperty,
            changeCompanyAddress,
            changeLinkMan,
            changeLinkTel,
            changePassword,
            formSubmit
        } = this;

        let { signUpAjaxByCom } = this.props;

        return (
            <div className={S.wraper}>
                <div className={S["form-wrapper"]}>
                    <input
                        type={"text"}
                        placeholder={"单位名称"}
                        className={S["input-box"]}
                        onChange={changeCompanyName}
                        value={companyName}
                    />
                    <input
                        type={"text"}
                        placeholder={"单位性质"}
                        className={S["input-box"]}
                        onChange={changeCompanyProperty}
                        value={companyProperty}
                    />
                    <input
                        type={"text"}
                        placeholder={"单位地址"}
                        className={S["input-box"]}
                        onChange={changeCompanyAddress}
                        value={companyAddress}
                    />
                    <input
                        type={"text"}
                        placeholder={"联系人"}
                        className={S["input-box"]}
                        onChange={changeLinkMan}
                        value={linkman}
                    />
                    <input
                        type={"text"}
                        placeholder={"联系电话"}
                        className={S["input-box"]}
                        onChange={changeLinkTel}
                        value={linktel}
                    />
                    <input
                        type={"text"}
                        placeholder={"密码"}
                        className={S["input-box"]}
                        onChange={changePassword}
                        value={password}
                    />
                </div>
                <div className={S["opt-menu"]}>
                    <button
                        className={S["btn-signin"]}
                        onClick={signUpAjaxByCom}
                    >{"注册"}</button>
                </div>
                <BackToLogin/>
            </div>
        )
    }
}