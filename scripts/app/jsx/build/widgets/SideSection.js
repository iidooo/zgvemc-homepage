/**
 * Created by Ethan on 16/5/18.
 */

var SideSection = React.createClass({displayName: "SideSection",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(SideProductList, null), 
                React.createElement(LinkList, null)
            )
        );
    }
});

var SideProductList = React.createClass({displayName: "SideProductList",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "产品列表(平台登录)"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            React.createElement("li", {className: "list-group-item"}, 
                                React.createElement("a", {href: SiteProperties.plantClientURL, target: "_blank"}, "集装箱运输车辆尾气净化装置")
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                "汽车遥感废弃分析仪（光测遥感）"
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                "公交汽车尾气净化装置"
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                "重型货车尾气精华装置"
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                "公交汽车车内空气质量检测"
                            ), 
                            React.createElement("li", {className: "list-group-item"}, 
                                "出租汽车车内空气质量检测"
                            )
                        )
                    )
                )
            )
        );
    }
});


var LinkList = React.createClass({displayName: "LinkList",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "友情链接"), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("ul", {className: "list-group"}, 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.zhb.gov.cn/", target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link6.png"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.moc.gov.cn/", 
                                                               target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link8.png"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.cnemc.cn", target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link1.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.hjjkyyj.com", target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link2.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://hjjcgl.cnjournals.net/ch/index.aspx", 
                                                               target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link3.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.vecc-mep.org.cn/index.jsp", 
                                                               target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link7.jpg"}))), 
                            React.createElement("li", {className: "list-group-item"}, React.createElement("a", {href: "http://www.es.org.cn/cn/index.html", 
                                                               target: "_blank"}, React.createElement("img", {
                                src: "../img/index/link9.jpg"})))
                        )
                    )
                )
            )
        );
    }
});
