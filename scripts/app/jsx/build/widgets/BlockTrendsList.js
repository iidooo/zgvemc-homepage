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

var BlockThendsList = React.createClass({displayName: "BlockThendsList",
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
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "行业动态"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            this.state.contentListData.contentList.map(function (item) {
                                return React.createElement(BlockNewsListItem, {key: item.contentID, content: item})
                            })
                        )
                    )
                )
            )
        );
    }
});


var BlockThendsListItem = React.createClass({displayName: "BlockThendsListItem",
    render: function () {
        return (
            React.createElement("li", {className: "list-group-item"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-8"}, 
                        React.createElement("a", {href: SiteProperties.clientURL + Page.Content + "?id=" + this.props.content.contentID, target: "_blank"}, 
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

