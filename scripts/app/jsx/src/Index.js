var Index = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row margin-top-10">
                        <div className="col-sm-3">
                            <SideSection/>
                        </div>
                        <div className="col-sm-9">
                            <BlockNewsList/>
                            <BlockThendsList/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var Ads = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">广而告之</div>
                    <div id="ads" className="panel-body">
                        <div style={{width:3000 + "px"}}>
                            <div id="inner01">
                                <ul>
                                    <li>
                                        <a href="http://www.tegent.com.cn/" title="德祥科技1">
                                            <img src="../img/index/ads1.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2015-05-28/德祥科技2.png" title="德祥科技2">
                                            <img src="../img/index/ads2.png"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.sailhero.com/" title="河北先河1">
                                            <img src="../img/index/ads3.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/先河环保宣传图_副本.jpg" title="河北先河2">
                                            <img src="../img/index/ads4.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://thyb.shuoyi.com" title="武汉天虹1">
                                            <img src="../img/index/ads5.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/武汉天虹宣传图_副本.jpg" title="武汉天虹2">
                                            <img src="../img/index/ads6.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/厦门隆力德宣传图_副本.jpg"
                                           title="厦门隆力德2">
                                            <img src="../img/index/ads7.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-02-22/厦门隆力德产品.jpg" title="厦门隆力德1">
                                            <img src="../img/index/ads8.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.comleader.cn/" title="珠海高凌1">
                                            <img src="../img/index/ads9.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2012-09-25/2-简介图.jpg" title="珠海高凌2">
                                            <img src="../img/index/ads10.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.3ctech.com.cn/" title="戈顿三希1">
                                            <img src="../img/index/ads11.jpg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/config/hjjcgl/news_category/2013-04-18/戈顿三希2.jpg" title="戈顿三希2">
                                            <img src="../img/index/ads12.jpg"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div id="inner02"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Index />,
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