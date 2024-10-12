let ipLocation = null;  // 初始化为 null

// 发送 GET 请求获取 IP 位置信息
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'TNLBZ-FS2LQ-4X257-4ACX6-OP673-62BFJ',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLocation = res;  // 数据加载成功赋值
        showWelcome();     // 确保数据加载后再调用 showWelcome
    },
    error: function (err) {
        console.error("请求失败:", err);  // 请求失败时记录错误信息
    }
});

// 计算两个经纬度之间的距离
function getDistance(e1, n1, e2, n2) {
    const R = 6371;
    const { sin, cos, asin, PI, hypot } = Math;
    let getPoint = (e, n) => {
        e *= PI / 180;
        n *= PI / 180;
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) };
    };

    let a = getPoint(e1, n1);
    let b = getPoint(e2, n2);
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    return Math.round(asin(c / 2) * 2 * R);
}

// 展示欢迎语
function showWelcome() {
    if (!ipLocation || !ipLocation.result) {
        console.warn("IP 位置数据未加载完成或无效");
        return;
    }

    let { location, ad_info, ip } = ipLocation.result;
    let dist = getDistance(113.625000,34.747201, location.lng, location.lat);  // 使用获取到的经纬度
    let pos = ad_info.nation;
    let posdesc = "带我去你的国家逛逛吧！";

    if (pos === "中国") {
        pos = `${ad_info.province} ${ad_info.city} ${ad_info.district}`;
        switch (ad_info.province) {
            case "北京市": posdesc = "北——京——欢迎你~~~"; break;
            case "天津市": posdesc = "讲段相声吧"; break;
            case "河南省":
                switch (ad_info.city) {
                    case "郑州市": posdesc = "豫州之域，天地之中"; break;
                    case "洛阳市": posdesc = "洛阳牡丹甲天下"; break;
                    default: posdesc = "可否带我品尝河南烩面啦？"; break;
                }
                break;
            default: posdesc = "带我去你的城市逛逛吧！"; break;
        }
    }

    let timeChange;
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 5 && hour < 11) timeChange = "🌤️ 早上好，一日之计在于晨";
    else if (hour >= 11 && hour < 13) timeChange = "☀️ 中午好，记得午休喔~";
    else if (hour >= 13 && hour < 17) timeChange = "🕞 下午好，饮茶先啦！";
    else if (hour >= 17 && hour < 19) timeChange = "🚶‍♂️ 即将下班，记得按时吃饭~";
    else if (hour >= 19 && hour < 24) timeChange = "🌙 晚上好，夜生活嗨起来！";
    else timeChange = "夜深了，早点休息，少熬夜";

    if (ip.includes(":")) ip = "<br>好复杂，咱看不懂~(ipv6)";

    try {
        document.getElementById("welcome-info").innerHTML = `
            欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${pos}</span></b> 的小友💖<br>
            ${posdesc}🍂<br>
            当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${dist}</span></b> 公里！<br>
            您的IP地址为：<b><span>${ip}</span></b><br>
            ${timeChange} <br>`;
    } catch (err) {
        console.error("无法获取元素:", err);
    }
}

// 确保页面加载完后调用 showWelcome，如果数据已加载
window.onload = function () {
    if (ipLocation) showWelcome();
};

// 如果页面使用了 Pjax 重新加载部分内容，确保也能触发 showWelcome
document.addEventListener('pjax:complete', function () {
    if (ipLocation) showWelcome();
});
