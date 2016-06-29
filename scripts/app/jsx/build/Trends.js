var Trends = React.createClass({displayName: "Trends",
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
                            React.createElement(ContentList, {title: "行业动态", channelPath: "Trends"})
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Trends, null),
    document.getElementById('page')
);