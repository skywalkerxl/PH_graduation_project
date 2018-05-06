import S from './WelcomePage.scss';

export default class WelcomePage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={S.wrapper}>
                <div className={S.tree}>
                    <img className={S["main-logo"]} src={require('../../common/img/tree.jpg')}/>
                    <div className={S.welcome2}>
                        <img className={S.title} src={require('../../common/img/title.png')}/>
                        <span className={S.shake}></span>
                    </div>
                    <img src={require('../../common/img/title2.png')} className={S.tree3}/>
                    <span className={S.cloud}></span>
                    <span className={S.cloud}></span>
                    <span className={S.cloud}></span>
                </div>
                <h1 className={S.logo}>
                    <img src={require('../../common/img/logo.png')}/>
                </h1>
            </div>
        )
    }
}