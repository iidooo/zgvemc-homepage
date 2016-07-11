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

var Content = React.createClass({
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
    componentDidUpdate: function () {
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
                            <div className="content-title"><h2>{this.state.content.contentTitle}</h2></div>
                            <div className="text-right">{new Date(this.state.content.createTime).format('yyyy-MM-dd')}</div>
                            <div id="contentBody" className="content-body">
                                {this.state.content.contentBody}
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
    <Content />,
    document.getElementById('page')
);