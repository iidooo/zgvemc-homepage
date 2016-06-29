var ProductList = React.createClass({displayName: "ProductList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {activeMenuID: "menuProductList"}), 

                React.createElement("div", {className: "container"}, 
                    React.createElement(SearchCondition, null), 
                    React.createElement(SearchResult, null)
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

var SearchCondition = React.createClass({displayName: "SearchCondition",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    handleCreate : function(){
        location.href = SiteProperties.clientURL + Page.ProductDetail;
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-primary"}, 
                React.createElement("div", {className: "panel-heading"}, "查询条件"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-horizontal"}, 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "设备编号")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "车牌号码")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            )
                        ), 
                        React.createElement("div", {className: "row form-group"}, 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "驾驶员姓名")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputProductCode"})
                                )
                            ), 
                            React.createElement("div", {className: "col-sm-6"}, 
                                React.createElement("div", {className: "col-sm-4 control-label"}, 
                                    React.createElement("label", null, "联系电话")
                                ), 
                                React.createElement("div", {className: "col-sm-8"}, 
                                    React.createElement("input", {type: "text", className: "form-control", ref: "inputVehicleLicense"})
                                )
                            )
                        )
                    ), 

                    React.createElement("div", {className: "text-right"}, 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-primary", onClick: this.handleSearch}, 
                            "查 询"
                        ), 
                        " ", 
                        React.createElement("a", {href: "javascript:void(0)", className: "btn btn-success", onClick: this.handleCreate}, "注册新设备")
                    )
                )
            )
        );
    }
});

var SearchResult = React.createClass({displayName: "SearchResult",

    handleSearch: function () {
        //this.state.contentTitle = this.refs.inputContentTitle.value;
        //this.state.startDate = this.refs.inputStartDate.value;
        //this.state.endDate = this.refs.inputEndDate.value;
        //PageActions.search(this.state);
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-success"}, 
                React.createElement("div", {className: "panel-heading"}, "查询结果"), 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("table", {className: "table table-striped table-hover"}, 
                        React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "设备编号"), 
                            React.createElement("th", null, "注册时间"), 
                            React.createElement("th", null, "最后监测温度"), 
                            React.createElement("th", null, "最后监测压力"), 
                            React.createElement("th", null, "车牌号"), 
                            React.createElement("th", null, "驾驶员姓名"), 
                            React.createElement("th", null, "联系电话")
                        )
                        ), 
                        React.createElement("tbody", null, 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, "2"), 
                            React.createElement("td", null, "2016-06-22 16:30:23"), 
                            React.createElement("td", null, "500.56 ℃"), 
                            React.createElement("td", null, "600.45 kPa"), 
                            React.createElement("td", null, "沪N2348"), 
                            React.createElement("td", null, "王XX"), 
                            React.createElement("td", null, "13828763721")
                        )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(ProductList, null),
    document.getElementById('page')
);