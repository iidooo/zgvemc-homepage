/**
 * Created by Ethan on 16/5/18.
 */

var BlockThendsListActions = Reflux.createActions(['getContentList']);

var BlockThendsListStore = Reflux.createStore({
    listenables: [BlockThendsListActions],

    onGetContentList: function (data) {
        var url = SiteProperties.serverURL + API.getContentList;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.siteCode = SiteProperties.siteCode;
        data.channelPath = "Trends";

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

var BlockThendsList = React.createClass({
    mixins: [Reflux.connect(BlockThendsListStore, 'contentListData')],
    getInitialState: function () {
        return {
            contentListData: {
                page: {},
                contentList: []
            }
        };
    },
    componentWillMount: function () {
        BlockThendsListActions.getContentList(this.state);
    },
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">行业动态</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.state.contentListData.contentList.map(function (item) {
                                return <BlockNewsListItem key={item.contentID} content={item}/>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});


var BlockThendsListItem = React.createClass({
    render: function () {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-8">
                        <a href={SiteProperties.clientURL + Page.content + "?id=" + this.props.content.contentID} target="_blank">
                            {this.props.content.contentTitle}
                        </a>
                    </div>
                    <div className="col-sm-4 text-right">
                        {new Date(this.props.content.createTime).format('yyyy-MM-dd hh:mm:ss')}
                    </div>
                </div>
            </li>
        );
    }
});

