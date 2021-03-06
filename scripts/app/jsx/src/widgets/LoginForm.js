/**
 * Created by Ethan on 16/5/13.
 */

var LoginActions = Reflux.createActions(['login']);

var LoginStore = Reflux.createStore({
    listenables: [LoginActions],

    onLogin: function (data) {
        var url = SiteProperties.serverURL + API.getAccessToken;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;

        var callback = function (result) {
            if (result.status == 200) {
                sessionStorage.setItem(SessionKey.accessToken, result.data.token);
                sessionStorage.setItem(SessionKey.userID, result.data.userID);
                location.href = SiteProperties.clientURL + Page.gaugeList;
            } else {
                console.log(result);
                alert("用户名密码错误，登陆失败！");
            }
        };

        ajaxPost(url, data, callback);
    }
});

var LoginForm = React.createClass({
    getInitialState: function () {
        return {
            loginID: "",
            password: ""
        };
    },

    handleClick: function () {
        this.state.loginID = this.refs.inputUserName.value;
        this.state.password = this.refs.inputPassword.value
        if (this.state.loginID == "" || this.state.password == "") {
            alert("用户名和密码不能为空！");
            return false;
        }
        LoginActions.login(this.state);
    },

    render: function () {
        return (
                <div className="block">
                    <div className="panel panel-success">
                        <div className="panel-heading">监测平台登录</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="form-username">用户名</label>
                                <input ref="inputUserName" type="text" name="form-username" placeholder="请输入用户名"
                                       className="form-username form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="form-password">密码</label>
                                <input ref="inputPassword" type="password" name="form-password" placeholder="请输入密码"
                                       className="form-password form-control"/>
                            </div>
                            <button type="button" className="btn btn-success btn-block" onClick={this.handleClick}>登录</button>
                        </div>
                    </div>
                </div>
        );
    }
});

