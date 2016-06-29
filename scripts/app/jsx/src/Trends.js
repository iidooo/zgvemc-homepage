var Trends = React.createClass({
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
                            <ContentList title="行业动态" channelPath="Trends"/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <Trends />,
    document.getElementById('page')
);