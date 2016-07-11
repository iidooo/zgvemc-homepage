/**
 * Created by Ethan on 16/5/13.
 */
var Header = React.createClass({displayName: "Header",
    render: function () {
        return (
            React.createElement("div", {id: "header", className: "container"}, 
                React.createElement("div", {className: "banner"}, 
                    React.createElement("h1", {className: "banner-title"})
                ), 
                React.createElement(MainMenu, null)
            )
        );
    }
});