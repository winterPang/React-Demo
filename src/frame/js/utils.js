/**
 * Created by Administrator on 2016/9/5.
 */

    function getRcString(sRcId, sRcName) {
        return $("#" + sRcId).attr(sRcName) || "";
    }

    function getUrl(method, bFlag, releaseUrl, localUrl) {
        var host = window.location.host;
        var localPath = "../..";
        var oasisPath = '/v3/ace/oasis';
        var o2oPortalPath = '/v3/ace';
        var path = '/v3';
        if (typeof(releaseUrl) != "string" || !releaseUrl) {
            //console.log("eeeee")
            return {};
        }

        if (releaseUrl && !method) {
           // console.log("eeeee")
            return {};
        }

        if (typeof(localUrl) != "string" || !localUrl || !/\.json$/.test(localUrl)) {
            //console.log("aaa")
            return {};
        }

        if (host.indexOf('localhost') >= 0) {
            return {
                method: 'get',
                url: localPath + localUrl
            };
        }
        else {
            if (bFlag === 'oasis') {
                releaseUrl = oasisPath + releaseUrl;
            } else if (bFlag === 'o2o') {
                releaseUrl = o2oPortalPath + releaseUrl;
            } else if(bFlag === 'default'){
                releaseUrl = releaseUrl
            }else {
                releaseUrl = path + releaseUrl
            }
            return {
                method: method,
                url: releaseUrl
            };
        }
    }

    var Cookie =
        {
            get: function (sName) {
                // cookies are separated by semicolons
                var aCookie = document.cookie.split("; ");
                for (var i = 0; i < aCookie.length; i++) {
                    // a name/value pair (a crumb) is separated by an equal sign
                    var aCrumb = aCookie[i].split("=");
                    if (sName == aCrumb[0])
                        return unescape(aCrumb[1] || "");
                }

                // a cookie with the requested name does not exist
                return null;
            },

            set: function (oPara, retentionDuration, domain) {
                var sExpres = "";
                var n = parseInt(retentionDuration);
                if (-1 == n) {
                    // ²»ÀÏ»¯
                    var date = new Date(2099, 12, 31);
                    sExpres = "expires=" + date.toGMTString();
                }
                else if (n > 0) {
                    var date = new Date();
                    date.setTime(date.getTime() + n * 3600000);
                    sExpres = "expires=" + date.toGMTString();
                }
                if (domain) {
                    domain = "; domain=" + domain + "; path=/;";
                }
                else {
                    domain = "; path=/;";
                }

                for (var sName in oPara) {
                    //document.cookie = "name=" + "value;" + "expires=" + "datatime;" + "domain=" + "" + "path=/;";
                    var sCookie = sName + "=" + escape(oPara[sName]) + domain + sExpres;
                    document.cookie = sCookie;
                }
            },
            del: function (sName) {
                var date = new Date();
                date.setTime(date.getTime() - 10000);

                var aTemp = sName.split(",");
                for (var i = 0; i < aTemp.length; i++) {
                    var sCookie = aTemp[i] + "=d; path=/; expires=" + date.toGMTString();
                    document.cookie = sCookie;
                }
            }
        }


    function getLang() {
        return Cookie.get('lang') ? Cookie.get('lang') : 'cn';
    }

    function setLang(oPara, retentionDuration, domain) {
        Cookie.set(oPara, retentionDuration, domain);
    }

    // set  default language ‘cn’
    if (!getLang()) {
        setLang({'lang': 'cn'}, undefined, '.h3c.com');
    }
  
    /*
     *flag  传入数值单位  
     *unit  true/false 单位  
     *strPktBytes
     **/
    function transformFlow(flag,unit,strPktBytes){
            var nKb = 1024, nMb = 1024 * nKb, nGb = 1024 * nMb, nTb = 1024 * nGb;
            var nPktBytes = Number(strPktBytes) || 0;
            if(flag == "byte"){
                if (nPktBytes < nKb) {
                    strPktBytes = unit ? nPktBytes + "(Byte)" : nPktBytes
                }
                else if (nPktBytes < nMb) {
                    strPktBytes = unit ? (nPktBytes / nKb).toFixed(2) + "(KB)" : (nPktBytes / nKb).toFixed(2);
                }
                else if (nPktBytes < nGb) {
                    strPktBytes = unit ? (nPktBytes / nMb).toFixed(2) + "(MB)" : (nPktBytes / nMb).toFixed(2)  ;
                }
                else if (nPktBytes < nTb) {
                    strPktBytes = unit ? (nPktBytes / nGb).toFixed(2) + "(GB)" : (nPktBytes / nGb).toFixed(2);
                }
                else {
                    strPktBytes = unit ? (nPktBytes / nTb).toFixed(2) + "(TB)" : (nPktBytes / nTb).toFixed(2); 
                }
            }else if(flag == "kb"){
                if(nPktBytes < 1024){
                    strPktBytes = unit ? nPktBytes.toFixed(2) + "(KB)" : nPktBytes.toFixed(2);
                }
                else if (nPktBytes < (1024 * 1024)) {
                    strPktBytes = unit ? (nPktBytes / 1024).toFixed(2) + "(MB)" : (nPktBytes / 1024).toFixed(2);
                }
                else if (nPktBytes < (1024 * 1024 * 1024)) {
                    strPktBytes = unit ? (nPktBytes / (1024 * 1024)).toFixed(2) + "(GB)" : (nPktBytes / ( 1024 * 1024)).toFixed(2);
                }
                else{
                    strPktBytes = unit ? (nPktBytes / (1024 * 1024 * 1024)).toFixed(2) + "(TB)" : (nPktBytes / (1024 * 1024 * 1024)).toFixed(2); 
                }
                
            }else if(flag == "mb"){
                if (nPktBytes < 1024) {
                    strPktBytes = unit ? nPktBytes .toFixed(2) + "(MB)" : nPktBytes .toFixed(2);
                }
                else if (nPktBytes < (1024 * 1024)) {
                    strPktBytes = unit ? (nPktBytes / 1024).toFixed(2) + "(GB)" : (nPktBytes / 1024).toFixed(2);
                }
                else {
                    strPktBytes = unit ? (nPktBytes / (1024 * 1024)).toFixed(2) + "(TB)" : (nPktBytes / (1024 * 1024 )).toFixed(2); 
                }
            }else if(flag == "gb"){
                if (nPktBytes < 1024) {
                    strPktBytes = unit ? nPktBytes .toFixed(2) + "(GB)" : nPktBytes .toFixed(2);
                }
                else {
                    strPktBytes = unit ? (nPktBytes / 1024).toFixed(2) + "(TB)" : (nPktBytes / 1024).toFixed(2); 
                }
            }else if(flag == "tb"){
                strPktBytes = unit ? nPktBytes.toFixed(2) + "(TB)" : nPktBytes.toFixed(2);
            }
            return strPktBytes;
    }

    /*
     * formStr yyyy/mm/dd hh:MM:ss
     */
    function transformTimeStr(formStr,time){
        var oDate = new Date(time),nYear = oDate.getFullYear(),
        nMonth = dealTimeByTen(oDate.getMonth() + 1), nDate = dealTimeByTen(oDate.getDate()),
        nHours = dealTimeByTen(oDate.getHours()), nMinutes = dealTimeByTen(oDate.getMinutes()),
        nSeconds = dealTimeByTen(oDate.getSeconds());
        var returnTimeStr = "";
        formStr = formStr.toLowerCase();
        if(formStr == "yyyy/mm/dd hh:mm:ss"){
            returnTimeStr =  nYear + '/' + nMonth + '/' + nDate + ' ' +
                        nHours + ':' + nMinutes + ':' + nSeconds;
        }else if(formStr == "yyyy-mm-dd hh:mm:ss"){
            returnTimeStr =  nYear + '-' + nMonth + '-' + nDate + ' ' +
                        nHours + ':' + nMinutes + ':' + nSeconds;
        }else if(formStr == "yyyy-mm-dd"){
             returnTimeStr =  nYear + '-' + nMonth + '-' + nDate ;
        }else if(formStr == "yyyy-mm-dd hh:mm"){
             returnTimeStr =  nYear + '-' + nMonth + '-' + nDate + ' ' +
                        nHours + ':' + nMinutes;
        }
        else if(formStr == "hh:mm:ss"){
            returnTimeStr =  nYear + '-' + nMonth + '-' + nDate ;
        }
        return returnTimeStr;
    }

    function dealTimeByTen(nNum) {
        return Number(nNum) < 10 ? ('0' + nNum) : nNum;
    }

    /*
     * @flag  s  / ms  undefined 按照s计算
     * @time 毫秒 number
     * @return str （时：分：秒）
     */
    function transformOnlineTimeStr(flag,time){

        function dealTimeByHundred(nTime) {
            return nTime > 99 ? nTime : (nTime > 9 ? ('0' + nTime) : ('00' +  nTime));
        }


        if(flag == "s"){
            time =  Number(time) ;  
        }else if(flag == "ms"){
            time = parseInt(Number(time) / 1000);
        }
        if(time < 0) return time;
        var nHour = dealTimeByHundred(parseInt(time / 3600));
        var nMinute = dealTimeByTen(parseInt(time % 3600 / 60));
        var nSeconds = dealTimeByTen(parseInt(time % 3600 % 60 % 60));

        return nHour + ":" + nMinute + ":" + nSeconds;
    }

    function transformHtmlToString(value){
        var codeHtml = "";
        if(typeof value == 'string' && value){
            codeHtml = value.replace(/\</g, "&amp;lt;");
            codeHtml = codeHtml.replace(/\>/g, "&amp;gt;");
        }
        return codeHtml;
    }

    function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch(e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }
    window.copyToClipboard = copyToClipboard;

    export default {
        getRcString: getRcString,
        getUrl: getUrl,
        getLang: getLang,
        setLang: setLang,
        transformFlow:transformFlow,
        transformTimeStr:transformTimeStr,
        transformOnlineTimeStr:transformOnlineTimeStr,
        transformHtmlToString:transformHtmlToString,
        copyToClipboard:copyToClipboard
    }