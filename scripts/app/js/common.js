/**
 * Created by Ethan on 16/4/6.
 */

SiteProperties = {
    siteCode: "zgvemc",
    // 开发环境
    clientURL: "http://localhost:63342/zgvemc-homepage",
    plantClientURL: "http://localhost:63342/gauge-web",
    serverURL: "http://localhost:8080/iidooo-cms",
    // 测试环境
    //clientURL: "http://www.iidooo.com/gauge-web",
    //serverURL : "http://zgvemc.iidooo.com/gauge-server"


    // 正式环境
    //clientURL : "http://www.zgvemc.com",
    //serverURL : "http://zgvemc.iidooo.com/iidooo-cms",
    //plantClientURL: "http://www.zgvemc.com/gauge-web",
};


SecurityClient = {
    appID: "zgvemc",
    secret: "7580715fc2fa4b75ba789f75b6d19bda",
};

Message = {
    NO_PERMISSION: "你所在的用户组无权限执行该操作！",
    NO_PERMISSION_BY_READONLY_USER: "只读角色用户，无法进行编辑操作！",
    NO_PERMISSION_BY_CREATE_USER: "非此内容创建者，无法进行编辑操作！",
    NO_PERMISSION_BY_CONTENT_STATUS: "审核权限不够，无法进行编辑操作！"
};

API = {
    getChannelList: "/getChannelList",
    getContentList: "/getContentList",
    getChannleContent: "/getChannleContent",
    getContent: "/getContent",
};

Page = {
    Index: "/pages/Index.html",
    Product: "/pages/Product.html",
    Trends: "/pages/Trends.html",
    News: "/pages/News.html",
    Contact: "/pages/Contact.html",
    ContactMap: "/pages/ContactMap.html",
    Download: "/pages/Download.html",
    Content: "/pages/Content.html",
};

SessionKey = {
    accessToken: "ACCESS_TOKEN",
    userID: "USER_ID",
};

ContentType = {
    Default: "1",
    News: "2",
    File:"3"
}

// 日期格式化
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),   //day
        "h+": this.getHours(),  //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

// 得到地址栏中的路径指定参数值
function getQueryStr(key) {
    var url = window.document.location.href;
    if (url.indexOf("?") != -1) {
        var queryStr = url.substr(url.indexOf("?") + 1);
        var params = queryStr.split("&");
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            if (param != null && param.length == 2 && param[0] == key) {
                return param[1];
            }
        }
    }
    return "";
}


function ajaxPost(url, data, callback) {
    $.ajax({
        type: "POST",
        timeout: 3000, //超时时间设置，单位毫秒
        url: url,
        dataType: "json",
        data: data,
        success: function (result) {
            if (result && null != result.status && ((result.status + "").indexOf("20") == 0)) {
                callback(result);
            } else {
                alert("服务器端处理失败，出现异常，详细请看控制台！错误编号：" + result.status);
                console.log(result);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //ajaxpost(url, data, callback);
        }
    });
}

// 提供showdown格式的预览
function showdownPreview(content, containerID) {
    showdown.setOption('strikethrough', 'true');
    var converter = new showdown.Converter();
    // 替换所有的>转义符号
    content = content.replace(/&gt;/g, ">");
    var rawMarkup = converter.makeHtml(content);
    console.log(rawMarkup);
    $("#" + containerID).html(rawMarkup);
}

function showdownConvert(containerID){
    showdown.setOption('strikethrough', 'true');
    var converter = new showdown.Converter();
    // 替换所有的>转义符号
    var content = document.getElementById(containerID).innerHTML;
    content = content.replace(/&gt;/g, ">");
    var rawMarkup = converter.makeHtml(content);
    $("#" + containerID).html(rawMarkup);
}

function dataPermission(messageBoxID, content) {
    var isRefuse = false;
    var text = "";
    // 权限控制
    if (securityUser.roleCode == role.readonly) {
        isRefuse = true;
        text = message.NO_PERMISSION_BY_READONLY_USER;
    } else if (securityUser.roleCode == role.editor) {
        if (content.createUserID != securityUser.userID) {
            isRefuse = true;
            text = message.NO_PERMISSION_BY_CREATE_USER;
        } else if (content.status == ContentStatus.PUBLISHED ||
            content.status == ContentStatus.APPROVED) {
            isRefuse = true;
            text = message.NO_PERMISSION_BY_CONTENT_STATUS;
        }
    }

    if (isRefuse && messageBoxID != null) {
        var $messageBox = $("#" + messageBoxID);
        $messageBox.text(text);
        $messageBox.removeClass("hidden");
        $messageBox.addClass("show");
        $("input,select,textarea").attr('readonly', true);
        $("input[type='checkbox']").attr('disabled', true);
        $("input[type='file']").attr('disabled', true);
    }

    return isRefuse;
}