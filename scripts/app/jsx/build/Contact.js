var ContactActions = Reflux.createActions(['getChannleContent']);

var ContactStore = Reflux.createStore({
    listenables: [ContactActions],

    onGetChannleContent: function (data) {
        var url = SiteProperties.serverURL + API.getChannleContent;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.siteCode = SiteProperties.siteCode;
        data.channelPath = "Contact";
        var self = this;
        var callback = function (result) {
            if (result.status == 200) {
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    }
});

var Contact = React.createClass({displayName: "Contact",
    mixins: [Reflux.connect(ContactStore, 'content')],
    getInitialState: function () {
        return {
            content: {}
        };
    },
    componentWillMount: function () {
        ContactActions.getChannleContent(this.state);
    },
    componentDidUpdate: function () {
        $("#contactMap").load(SiteProperties.clientURL + Page.ContactMap);

    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, null), 

                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row margin-top-10"}, 
                        React.createElement("div", {className: "col-sm-3"}, 
                            React.createElement(SideSection, null)
                        ), 
                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("div", {className: "block"}, 
                                React.createElement("div", {className: "panel panel-success"}, 
                                    React.createElement("div", {className: "panel-heading"}, "联系我们"), 
                                    React.createElement("div", {className: "panel-body"}, 
                                        React.createElement("div", {id: "contactMap"}), 
                                        this.state.content.contentBody
                                    )
                                )
                            )
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Contact, null),
    document.getElementById('page')
);