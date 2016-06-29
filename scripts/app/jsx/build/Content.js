var ContentActions = Reflux.createActions(['getContent']);

var ContentStore = Reflux.createStore({
    listenables: [ContentActions],

    onGetContent: function (data) {
        var url = SiteProperties.serverURL + API.getContent;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
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

var Content = React.createClass({displayName: "Content",
    mixins: [Reflux.connect(ContentStore, 'content')],
    getInitialState: function () {
        return {
            content: {}
        };
    },
    componentWillMount: function () {
        var id = getQueryStr("id");
        this.state.contentID = id;
        ContentActions.getContent(this.state);
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
                            React.createElement("div", {className: "content-title"}, this.state.content.contentTitle), 
                            React.createElement("div", {className: "content-body"}, 
                                this.state.content.contentBody
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
    React.createElement(Content, null),
    document.getElementById('page')
);