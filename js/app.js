$(document).ready(function () {
    $(".color-choose input").click(function () {
        var cap = $(this).attr("data-img");
        $(".active").removeClass("active");
        $(".left-column img[data-img=" + cap + "]").addClass("active");
    });
});