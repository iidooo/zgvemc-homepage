/**
 * Created by Ethan on 16/5/18.
 */

var ContentListActions = Reflux.createActions(['getContentList']);

var ContentListStore = Reflux.createStore({
    listenables: [ContentListActions],

    onGetContentList: function (data) {
        var url = SiteProperties.serverURL + API.getContentList;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.siteCode = SiteProperties.siteCode;
        data.contentType = ContentType.File;
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

var ContentList = React.createClass({
    mixins: [Reflux.connect(ContentListStore, 'contentListData')],
    getInitialState: function () {
        return {
            contentListData: {
                page: {},
                contentList: []
            }
        };
    },
    componentWillMount: function () {
        this.state.channelPath = this.props.channelPath;
        ContentListActions.getContentList(this.state);
    },
    onChildChanged: function (childState) {
        if (childState.currentPage != null) {
            this.state.channelPath = this.props.channelPath;
            this.state.currentPage = childState.currentPage;
            ContentListActions.getContentList(this.state);
        }
    },
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">{this.props.title}</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.state.contentListData.contentList.map(function (item) {
                                return <ContentListItem key={item.contentID} content={item}/>
                            })}
                        </ul>
                        <Pager callbackParent={this.onChildChanged}
                               recordSum={this.state.contentListData.page.recordSum}
                               currentPage={this.state.contentListData.page.currentPage}
                               pageSum={this.state.contentListData.page.pageSum}/>
                    </div>
                </div>
            </div>
        );
    }
});


var ContentListItem = React.createClass({
    render: function () {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-8">
                        <a href={this.props.content.fileURL}>
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

