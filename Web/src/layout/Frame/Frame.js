// 框架包
import { Route,NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

/**************************
 *
 *  基础页面组件
 *
************************* */
// 欢迎页
import WelcomePage from '../../view/WelcomePage/WelcomePage';
// 我的猪厂
import MainPage from "../../view/MainPage/MainPage";
// 企业注册
import CompanySignUp from "../../view/User/CompanySignUp";
// 个人注册
import PersonSignUp from "../../view/User/PersonSignUp";
import SignUp from "../../view/User/SignUp";
import SignIn from "../../view/User/SignIn";
import BuildFarm from "../../view/Farm/BuildFarm";
import FloorDisplay from "../../view/Farm/FloorDisplay";
import BindEquipment from "../../view/Equipment/BindEquipment";

const history = createHistory();

/**************************
 *
 *  代码实现
 *
 ************************* */
export default class Frame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false, // 是否已登录
            hasFarm: false,  // 是否已有农场，
            farmNum: 0, // 农场数量
            needBindEquipNum: "",  // 当前点击时需要绑定的设备编号
            farmInfo: {  }
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.signUpAjaxByPer = this.signUpAjaxByPer.bind(this);
        this.signUpAjaxByCom = this.signUpAjaxByCom.bind(this);
        this.signInAjax = this.signInAjax.bind(this);
        this.createFarm = this.createFarm.bind(this);
        this.clickNeedBindEquip = this.clickNeedBindEquip.bind(this);
        this.ConfirmBindEquip = this.ConfirmBindEquip.bind(this);
    }

    // 更改页面标题
    changeTitle(name){
        document.title = name;
    }

    // 登录
    signInAjax() {
        this.setState({
            isLogin: true
        })
    }

    // 单位注册
    signUpAjaxByCom(){
        this.setState({
            isLogin: true
        })
    }

    // 个人注册
    signUpAjaxByPer(){
        this.setState({
            isLogin: true
        })
    }

    // 新建猪场
    createFarm(number){
        let { farmInfo } = this.state
        for(let i = 0 ; i < parseInt(number) ; i++){
            farmInfo[i] = {
                hasBind: false,
                nameTxt: ""
            }
        }
        this.setState({
            farmInfo,  // 新增的农场信息
            farmNum: number,  // 添加农村数量
            hasFarm: true,  // 成功添加农场
        });
    }

    // 点击需要绑定的设备
    clickNeedBindEquip(ev){
        let itemId = ev.currentTarget.getAttribute("data-id");
        this.setState({
            needBindEquipNum: itemId
        });
    }

    // 确认绑定
    ConfirmBindEquip(){
        let { farmInfo, needBindEquipNum } = this.state;
        farmInfo[needBindEquipNum].hasBind = true;
        this.setState({
            farmInfo
        });
        history.goBack(-1)  // 这里主要剔除一个多余的路由历史
    }

    render(){
        let {
            changeTitle,
            signInAjax,
            signUpAjaxByCom,
            signUpAjaxByPer,
            createFarm,
            clickNeedBindEquip,
            ConfirmBindEquip
        } = this;
        let { isLogin, hasFarm, farmInfo, needBindEquipNum } = this.state;

        return (
            <div>
                <Route exact path={'/'} render={
                    ()=>(
                        <NavLink to={'/welcome'}>转到欢迎页</NavLink>
                    )
                }/>
                {/* 欢迎页 */}
                <Route exact path={'/welcome'} render={
                    ()=>(
                        <WelcomePage/>
                    )
                }/>
                {/* 我的猪场页 */}
                <Route exact path={'/main'} render={
                    ()=>(
                        isLogin ? (
                            <MainPage
                                {...{changeTitle}}
                            />
                        ) : (
                            <Redirect to={'/SignUp'}/>
                        )
                    )
                }/>

                {/********************

                    注册登录部分路由

                 *********************/}

                {/* 注册方式选择页 */}
                <Route exact path={'/SignUp'} render={
                    ()=>(
                        isLogin ? (
                            <Redirect to={'/main'}/>
                        ) : (
                            <SignUp
                                {...{
                                    changeTitle
                                }}
                            />
                        )
                    )
                }/>
                {/* 企业注册页 */}
                <Route exact path={'/companySignUp'} render={
                    ()=>(
                        isLogin ? (
                            <Redirect to={'/main'}/>
                        ) : (
                            <CompanySignUp
                                {...{
                                    changeTitle,
                                    signUpAjaxByCom
                                }}
                            />
                        )
                    )
                }/>
                {/* 个人注册页 */}
                <Route exact path={"/personSignUp"} render={
                    ()=>(
                        isLogin ? (
                            <Redirect to={'/main'}/>
                        ) : (
                            <PersonSignUp
                                {...{
                                    changeTitle,
                                    signUpAjaxByPer
                                }}
                            />
                        )
                    )
                }/>
                {/* 用户登录 */}
                <Route exact path={"/signIn"} render={
                    ()=>(
                        isLogin ? (
                            <Redirect to={'/main'}/>
                        ) : (
                            <SignIn
                                {...{
                                    changeTitle,
                                    signInAjax
                                }}
                            />
                        )
                    )
                }/>

                {/********************

                    农场部分路由

                *********************/}
                {/* 新建猪场 */}
                <Route exact path={"/buildFarm"} render={
                    ()=>(
                        hasFarm ? (
                            <Redirect to={'/floorDisplay'}/>
                        ) : (
                            <BuildFarm
                                {...{
                                    changeTitle,
                                    createFarm
                                }}
                            />
                        )
                    )
                }/>
                {/* 场内显示 */}
                <Route exact path={"/floorDisplay"} render={
                    ()=>(
                        hasFarm ? (
                            <FloorDisplay
                                {...{
                                    changeTitle,
                                    clickNeedBindEquip,
                                    farmInfo
                                }}
                            />
                        ) : (
                            <Redirect to={'/buildFarm'}/>
                        )
                    )
                }/>

                {/********************

                    设备部分路由

                 *********************/}
                 {/* 绑定设备 */}
                 <Route exact path={'/bindEquipment'} render={
                     ()=>(
                         ( farmInfo[needBindEquipNum] === undefined || farmInfo[needBindEquipNum].hasBind === false )? (
                             <BindEquipment
                                 {...{
                                     changeTitle,
                                     ConfirmBindEquip
                                 }}
                             />
                         ) : (
                             <Redirect to={'/floorDisplay'}/>
                         )
                     )
                 }/>
            </div>
        )
    }
}