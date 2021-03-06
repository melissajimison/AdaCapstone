/*!
 * The main vanilla javascript library for accessing the Air-port-codes API
 *
 * @license MIT license
 * apc library v1.0.0 | (c) 2016 AIR-PORT-CODES | Air-port-codes.com/legal/terms-of-use
 */
var apc=function(t,e){var n=this,o={},r="https://www.air-port-codes.com/api/v1/",i;return n={request:function(e){n[t](e)},init:function(){for(var t in e)"key"!==t&&"secret"!==t&&(o[t]=e[t])},multi:function(t){o.term=t,n.doAjax()},single:function(t){o.iata=t,n.doAjax()},countries:function(){n.doAjax()},doAjax:function(){i.post(r+t,o,function(t){t=JSON.parse(t),t.status?n.onSuccess(t):n.onError(t)})}},i={x:function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],e,n=0;n<t.length;n++)try{e=new ActiveXObject(t[n]);break}catch(o){}return e},send:function(t,n,o,r,c){void 0===c&&(c=!0);var s=i.x();s.open(o,t,c),s.onreadystatechange=function(){4===s.readyState&&n(s.responseText)},"POST"===o&&(s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.setRequestHeader("APC-Auth",e.key),e.secret&&s.setRequestHeader("APC-Auth-Secret",e.secret)),s.send(r)},post:function(t,e,n,o){var r=[];for(var c in e)r.push(encodeURIComponent(c)+"="+encodeURIComponent(e[c]));i.send(t,n,"POST",r.join("&"),o)}},n.init(),n};
