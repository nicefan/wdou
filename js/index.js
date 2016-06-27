/**
 * Created by u-fan on 2016/6/27.
 */
$.get("header.html",function (data) {
   $("body").prepend(data);
});
$.get("footer.html",function (data) {
    $("body").append(data);
});