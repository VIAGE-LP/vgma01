$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    // 立即購買btn動態
    $('.offerbtn, .offerbtn_m').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });
    // 立即訂購btn動態
    $('.buybtn').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });

    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw=$(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://line.me/R/oaMessage/@fhl1857j/?%E7%B4%A2%E5%8F%96%E6%9C%80%E6%96%B0%E5%84%AA%E6%83%A0");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }
});

// 查詢老顧客獨享優惠
// https://line.me/R/oaMessage/@fhl1857j/?%E6%9F%A5%E8%A9%A2%E8%80%81%E9%A1%A7%E5%AE%A2%E7%8D%A8%E4%BA%AB%E5%84%AA%E6%83%A0

// 索取最新優惠
// https://line.me/R/oaMessage/@fhl1857j/?%E7%B4%A2%E5%8F%96%E6%9C%80%E6%96%B0%E5%84%AA%E6%83%A0