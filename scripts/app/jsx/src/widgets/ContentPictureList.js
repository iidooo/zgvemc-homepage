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
        data.pageSize = 12;
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
                        {this.state.contentListData.contentList.map(function (item) {
                            return <ContentListItem key={item.contentID} content={item}/>
                        })}
                        <div className="clear"></div>
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
            <div className="float-left width-150 height-200 margin-right-15 margin-bottom-50">
                <div>
                    <a href={SiteProperties.clientURL + Page.Content + "?id=" + this.props.content.contentID}
                       target="_blank">
                        <img src={this.props.content.contentImageTitle}/>
                    </a>
                </div>
                <div className="word-over-hidden text-center">
                    <a href={SiteProperties.clientURL + Page.Content + "?id=" + this.props.content.contentID}
                       target="_blank">
                        {this.props.content.contentTitle}
                    </a>
                </div>
            </div>
        );
    }
});

