/**
 * Created by Ethan on 16/5/18.
 */

var SideSection = React.createClass({
    render: function () {
        return (
            <div>
                <SideProductList/>
                <LinkList/>
            </div>
        );
    }
});

var SideProductList = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">产品列表(平台登录)</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <a href={SiteProperties.plantClientURL} target="_blank">集装箱运输车辆尾气净化装置</a>
                            </li>
                            <li className="list-group-item">
                                <a href={SiteProperties.telemetryWebURL} target="_blank">汽车遥感废弃分析仪（光测遥感）</a>
                            </li>
                            <li className="list-group-item">
                                公交汽车尾气净化装置
                            </li>
                            <li className="list-group-item">
                                重型货车尾气精华装置
                            </li>
                            <li className="list-group-item">
                                公交汽车车内空气质量检测
                            </li>
                            <li className="list-group-item">
                                出租汽车车内空气质量检测
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});


var LinkList = React.createClass({
    render: function () {
        return (
            <div className="block">
                <div className="panel panel-success">
                    <div className="panel-heading">友情链接</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item"><a href="http://www.zhb.gov.cn/" target="_blank"><img
                                src="../img/index/link6.png"/></a></li>
                            <li className="list-group-item"><a href="http://www.moc.gov.cn/"
                                                               target="_blank"><img
                                src="../img/index/link8.png"/></a></li>
                            <li className="list-group-item"><a href="http://www.cnemc.cn" target="_blank"><img
                                src="../img/index/link1.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://www.hjjkyyj.com" target="_blank"><img
                                src="../img/index/link2.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://hjjcgl.cnjournals.net/ch/index.aspx"
                                                               target="_blank"><img
                                src="../img/index/link3.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://www.vecc-mep.org.cn/index.jsp"
                                                               target="_blank"><img
                                src="../img/index/link7.jpg"/></a></li>
                            <li className="list-group-item"><a href="http://www.es.org.cn/cn/index.html"
                                                               target="_blank"><img
                                src="../img/index/link9.jpg"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});
