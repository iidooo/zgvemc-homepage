var News = React.createClass({
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
                            <ContentList title="下载专区" channelPath="Download" isDownload="true"/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <News />,
    document.getElementById('page')
);