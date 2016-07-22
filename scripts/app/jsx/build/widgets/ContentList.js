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

var ContentList = React.createClass({displayName: "ContentList",
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
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, this.props.title), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            this.state.contentListData.contentList.map(function (item) {
                                return React.createElement(ContentListItem, {key: item.contentID, content: item})
                            })
                        ), 
                        React.createElement(Pager, {callbackParent: this.onChildChanged, 
                               recordSum: this.state.contentListData.page.recordSum, 
                               currentPage: this.state.contentListData.page.currentPage, 
                               pageSum: this.state.contentListData.page.pageSum})
                    )
                )
            )
        );
    }
});


var ContentListItem = React.createClass({displayName: "ContentListItem",
    render: function () {

        return (
            React.createElement("li", {className: "list-group-item"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-8"}, 
                        React.createElement("a", {href: SiteProperties.clientURL + Page.content + "?id=" + this.props.content.contentID, target: "_blank"}, 
                            this.props.content.contentTitle
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4 text-right"}, 
                        new Date(this.props.content.createTime).format('yyyy-MM-dd hh:mm:ss')
                    )
                )
            )
        );
    }
});

