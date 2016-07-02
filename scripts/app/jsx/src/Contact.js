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

var Contact = React.createClass({
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
        showdownConvert("contentBody");

    },
    render: function () {
        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row margin-top-10">
                        <div className="col-sm-3">
                            <SideSection/>
                        </div>
                        <div className="col-sm-9">
                            <div className="block">
                                <div className="panel panel-success">
                                    <div className="panel-heading">联系我们</div>
                                    <div className="panel-body">
                                        <div id="contactMap"></div>
                                        <div id="contentBody">{this.state.content.contentBody}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <Contact />,
    document.getElementById('page')
);