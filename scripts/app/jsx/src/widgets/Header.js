/**
 * Created by Ethan on 16/5/13.
 */
var Header = React.createClass({
    render: function () {
        return (
            <div id="header" className="container">
                <div className="banner">
                    <h1 className="banner-title"></h1>
                </div>
                <MainMenu/>
            </div>
        );
    }
});