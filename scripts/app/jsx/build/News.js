var News = React.createClass({displayName: "News",
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
                            React.createElement(ContentList, {title: "信息公告", channelPath: "News"})
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(News, null),
    document.getElementById('page')
);