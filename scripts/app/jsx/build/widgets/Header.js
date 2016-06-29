/**
 * Created by Ethan on 16/5/13.
 */
var Header = React.createClass({displayName: "Header",
    render: function () {
        return (
            React.createElement("div", {id: "header", className: "container"}, 
                React.createElement("div", {className: "banner"}, 
                    React.createElement("h1", {className: "banner-title"}, "中国车辆尾气排放在线监测平台")
                ), 
                React.createElement(MainMenu, null)
            )
        );
    }
});