var homeClassList = 'item';
var page = window.location.pathname.split('/').pop();
switch (page) {
    default:
        homeClassList = 'active item';
        break;
}
document.getElementById('mobile-tablet-menu').innerHTML = '<div class="ui container"><a class="item" onclick="toggleSidebar();"><i class="bars icon"></i>메뉴</a></div>';
document.getElementById('computer-menu').innerHTML = '<div class="ui container"><a href="/" class="' + homeClassList + '"><i class="home icon"></i>홈</a><div class="right menu"><a id="darkmode-button2" onclick="toggleDarkmode();" class="item"></a><a href="https://github.com/jinoo2005609" class="item"><i class="github icon"></i>GitHub</a></div></div>';
document.getElementById('sidebar').innerHTML = '<a href="/" class="' + homeClassList + '"><i class="home icon"></i>홈</a><a id="darkmode-button1" onclick="toggleDarkmode();" class="item"></a><a href="https://github.com/jinoo2005609" class="item"><i class="github icon"></i>GitHub</a>';
