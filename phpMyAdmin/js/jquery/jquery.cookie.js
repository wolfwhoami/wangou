jQuery.cookie = function (e, b, a) {
    if (arguments.length > 1 && String(b) !== "[object Object]") {
        a = jQuery.extend({}, a);
        if (b === null || b === undefined) a.expires = -1;
        if (typeof a.expires === "number") {
            var d = a.expires, c = a.expires = new Date;
            c.setDate(c.getDate() + d)
        }
        b = String(b);
        return document.cookie = [encodeURIComponent(e), "=", a.raw ? b : encodeURIComponent(b), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
    }
    a = b || {};
    c = a.raw ? function (f) {
            return f
        } :
        decodeURIComponent;
    return (d = RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? c(d[1]) : null
};
