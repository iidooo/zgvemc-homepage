var Index = React.createClass({displayName: "Index",
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
                            React.createElement(BlockNewsList, null), 
                            React.createElement(BlockThendsList, null)
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-12"}, 
                            React.createElement(Ads, null)
                        )
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var Ads = React.createClass({displayName: "Ads",
    render: function () {
        return (
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "panel panel-success"}, 
                    React.createElement("div", {className: "panel-heading"}, "广而告之"), 
                    React.createElement("div", {id: "ads", className: "panel-body"}, 
                        React.createElement("div", {style: {width:3000 + "px"}}, 
                            React.createElement("div", {id: "inner01"}, 
                                React.createElement("ul", null, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.tegent.com.cn/", title: "德祥科技1"}, 
                                            React.createElement("img", {src: "../img/index/ads1.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2015-05-28/德祥科技2.png", title: "德祥科技2"}, 
                                            React.createElement("img", {src: "../img/index/ads2.png"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.sailhero.com/", title: "河北先河1"}, 
                                            React.createElement("img", {src: "../img/index/ads3.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/先河环保宣传图_副本.jpg", title: "河北先河2"}, 
                                            React.createElement("img", {src: "../img/index/ads4.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://thyb.shuoyi.com", title: "武汉天虹1"}, 
                                            React.createElement("img", {src: "../img/index/ads5.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/武汉天虹宣传图_副本.jpg", title: "武汉天虹2"}, 
                                            React.createElement("img", {src: "../img/index/ads6.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/厦门隆力德宣传图_副本.jpg", 
                                           title: "厦门隆力德2"}, 
                                            React.createElement("img", {src: "../img/index/ads7.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-02-22/厦门隆力德产品.jpg", title: "厦门隆力德1"}, 
                                            React.createElement("img", {src: "../img/index/ads8.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.comleader.cn/", title: "珠海高凌1"}, 
                                            React.createElement("img", {src: "../img/index/ads9.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2012-09-25/2-简介图.jpg", title: "珠海高凌2"}, 
                                            React.createElement("img", {src: "../img/index/ads10.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://www.3ctech.com.cn/", title: "戈顿三希1"}, 
                                            React.createElement("img", {src: "../img/index/ads11.jpg"})
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "/config/hjjcgl/news_category/2013-04-18/戈顿三希2.jpg", title: "戈顿三希2"}, 
                                            React.createElement("img", {src: "../img/index/ads12.jpg"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {id: "inner02"})
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Index, null),
    document.getElementById('page')
);

$(function () {
    var outer_keleyi_com = $("#ads");
    var inner01 = $("#inner01");
    var inner02 = $("#inner02");
    inner02.html(inner01.html());
    function que() {
//alert(outer_keleyi_com.scrollLeft() +" "+ inner01.width());
        if (outer_keleyi_com.scrollLeft() >= inner01.width()) {
//alert(outer_keleyi_com.scrollLeft() +" "+ inner01.width());
            outer_keleyi_com.scrollLeft(0);
        }
        else {
            outer_keleyi_com.scrollLeft(outer_keleyi_com.scrollLeft() + 1);
        }
    }

    setInterval(que, 50);
})