const Elykia = {
  // 欢迎语
  setWelcome_info: async () => {
    if (!document.getElementById("welcome-info")) return;

    let ipLoacation = saveToLocal.get('welcome-info');

    try {
      if (!ipLoacation) {
        return new Promise((resolve, reject) => {
          var script = document.createElement('script');
          var url = `https://apis.map.qq.com/ws/location/v1/ip?key=TNLBZ-FS2LQ-4X257-4ACX6-OP673-62BFJ&output=jsonp`;
          script.src = url;

          window.QQmap = (data) => {
            if (data.status === 0) {
              // console.info(data);
              ipLoacation = data;
              saveToLocal.set('welcome-info', ipLoacation, 0.5);
              Elykia.showWelcome(ipLoacation);
              resolve();
            } else {
              reject(new Error('Failed to fetch location data'));
            }
            document.body.removeChild(script);
            delete window.QQmap;
          };
          document.body.appendChild(script);
        });
      } else {
        await Promise.resolve(); // 确保在同步代码路径上也能保持异步风格
        Elykia.showWelcome(ipLoacation);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  },
  //根据经纬度计算两点距离(点1经度,点1纬度,点2经度,点2纬度)
  getDistance: (e1, n1, e2, n2) => {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
      e *= PI / 180
      n *= PI / 180
      return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }
    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
  },
  //根据国家、省份、城市信息自定义欢迎语
  showWelcome: (ipStore) => {
    const WelcomeInfo = document.getElementById("welcome-info"),
      IP = ipStore.result.ip || "未知";
    let dist = Elykia.getDistance(113.625000, 34.747201, ipStore.result.location.lng, ipStore.result.location.lat),
      address,
      welcome_info;
    //根据国家、省份、城市信息自定义欢迎语
    //海外地区不支持省份及城市信息
    switch (ipStore.result.ad_info.nation) {
      case "日本":
        welcome_info = "よろしく，一起去看樱花吗";
        break;
      case "美国":
        welcome_info = "Let us live in peace!";
        break;
      case "英国":
        welcome_info = "想同你一起夜乘伦敦眼";
        break;
      case "俄罗斯":
        welcome_info = "Здравствуйте, друзья из России.";
        break;
      case "法国":
        welcome_info = "C'est La Vie";
        break;
      case "德国":
        welcome_info = "Die Zeit verging im Fluge.";
        break;
      case "澳大利亚":
        welcome_info = "一起去大堡礁吧！";
        break;
      case "加拿大":
        welcome_info = "拾起一片枫叶赠予你";
        break;
      case "中国":
        address = ipStore.result.ad_info.province + " " + ipStore.result.ad_info.city+ " " + ipStore.result.ad_info.district;
        switch (ipStore.result.ad_info.province) {
          case "北京市":
            address = "北京市";
            welcome_info = "北——京——欢迎你~~~";
            break;
          case "天津市":
            address = "天津市";
            welcome_info = "讲段相声吧";
            break;
          case "重庆市":
            address = "重庆市";
            welcome_info = "高德地图:已到达重庆，下面交给百度地图导航"
            break;
          case "河北省":
            welcome_info = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山";
            break;
          case "山西省":
            welcome_info = "展开坐具长三尺，已占山河五百余";
            break;
          case "内蒙古自治区":
            welcome_info = "天苍苍，野茫茫，风吹草低见牛羊";
            break;
          case "辽宁省":
            welcome_info = "我想吃烤鸡架";
            break;
          case "吉林省":
            welcome_info = "状元阁就是东北烧烤之王";
            break;
          case "黑龙江省":
            welcome_info = "很喜欢哈尔滨大剧院";
            break;
          case "上海市":
            address = "上海市";
            welcome_info = "众所周知，中国只有两个城市";
            break;
          case "江苏省":
            switch (ipStore.result.ad_info.city) {
              case "南京市":
                welcome_info = "欢迎来自安徽省南京市的小伙伴";
                break;
              case "苏州市":
                welcome_info = "上有天堂，下有苏杭";
                break;
              default:
                welcome_info = "散装是必须要散装的";
                break;
            }
            break;
          case "浙江省":
            switch (ipStore.result.ad_info.city) {
              case "杭州市":
                welcome_info = "东风渐绿西湖柳，雁已还人未南归";
                break;
              default:
                welcome_info = "望海楼明照曙霞,护江堤白蹋晴沙";
                break;
            }
            break;
          case "安徽省":
            welcome_info = "蚌埠住了，芜湖起飞";
            break;
          case "福建省":
            welcome_info = "井邑白云间，岩城远带山";
            break;
          case "江西省":
            welcome_info = "落霞与孤鹜齐飞，秋水共长天一色";
            break;
          case "山东省":
            welcome_info = "遥望齐州九点烟，一泓海水杯中泻";
            break;
          case "湖北省":
            switch (ipStore.result.ad_info.city) {
              case "黄冈市":
                welcome_info = "红安将军县！辈出将才！";
                break;
              default:
                welcome_info = "来碗热干面~";
                break;
            }
            break;
          case "湖南省":
            welcome_info = "74751，长沙斯塔克";
            break;
          case "广东省":
            switch (ipStore.result.ad_info.city) {
              case "广州市":
                welcome_info = "看小蛮腰，喝早茶了嘛~";
                break;
              case "深圳市":
                welcome_info = "今天你逛商场了嘛~";
                break;
              case "阳江市":
                welcome_info = "阳春合水！";
                break;
              default:
                welcome_info = "老板来两斤福建人";
                break;
            }
            break;
          case "广西壮族自治区":
            welcome_info = "桂林山水甲天下";
            break;
          case "海南省":
            welcome_info = "朝观日出逐白浪，夕看云起收霞光";
            break;
          case "四川省":
            welcome_info = "康康川妹子";
            break;
          case "贵州省":
            switch (ipStore.result.ad_info.city) {
              case "六盘水市":
                welcome_info = "凉都六盘水，您好";
                break;
              case "贵阳市":
                welcome_info = "爽爽贵阳，您好";
                break;
              case "遵义市":
                welcome_info = "遵义红城，您好";
                break;
              case "安顺市":
                welcome_info = "安顺福地，您好";
                break;
              case "毕节市":
                welcome_info = "毕节山水，您好";
                break;
              case "铜仁市":
                welcome_info = "铜仁梵净，您好";
                break;
              case "黔西南布依族苗族自治州":
                welcome_info = "黔西南风情，您好";
                break;
              case "黔东南苗族侗族自治州":
                welcome_info = "黔东南歌舞，您好";
                break;
              case "黔南布依族苗族自治州":
                welcome_info = "黔南美景，您好";
                break;
              default:
                welcome_info = "茅台，学生，再塞200";
                break;
            }
            break;
          case "云南省":
            welcome_info = "玉龙飞舞云缠绕，万仞冰川直耸天";
            break;
          case "西藏自治区":
            welcome_info = "躺在茫茫草原上，仰望蓝天";
            break;
          case "陕西省":
            welcome_info = "来份臊子面加馍";
            break;
          case "甘肃省":
            welcome_info = "羌笛何须怨杨柳，春风不度玉门关";
            break;
          case "青海省":
            welcome_info = "牛肉干和老酸奶都好好吃";
            break;
          case "宁夏回族自治区":
            welcome_info = "大漠孤烟直，长河落日圆";
            break;
          case "新疆维吾尔自治区":
            welcome_info = "驼铃古道丝绸路，胡马犹闻唐汉风";
            break;
          case "台湾省":
            welcome_info = "我在这头，大陆在那头";
            break;
          case "香港特别行政区":
            address = "香港特别行政区";
            welcome_info = "永定贼有残留地鬼嚎，迎击光非岁玉";
            break;
          case "澳门特别行政区":
            address = "澳门特别行政区";
            welcome_info = "性感荷官，在线发牌";
            break;
          case "河南省":
            switch (ipStore.result.ad_info.city) {
              case "郑州市":
                welcome_info = "豫州之域，天地之中";
                break;
              case "南阳市":
                welcome_info = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                break;
              case "驻马店市":
                welcome_info = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                break;
              case "开封市":
                welcome_info = "刚正不阿包青天！";
                break;
              case "洛阳市":
                welcome_info = "洛阳牡丹甲天下";
                break;
              case "平顶山市":
                welcome_info = "QQ市~ 博主家乡~ 欢迎来玩~！";
                break;
              default:
                welcome_info = "可否带我品尝河南烩面啦？";
                break;
            }
            break;
          default:
            welcome_info = "带我去你的城市逛逛吧";
            break;
        }
        break;
      default:
        welcome_info = "带我去你的国家看看吧";
        break;
    }
    //判断时间
    let timeChange,
      date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>🌤️上午好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>☀️中午好，该摸鱼吃午饭了</span>";
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>🕞下午好，懒懒地睡个午觉吧</span>";
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>🍵三点几啦，饮茶先啦</span>";
    else if (date.getHours() >= 16 && date.getHours() < 18) timeChange = "<span>🚶‍♂️即将下班，记得按时吃饭~</span>";
    else if (date.getHours() >= 18 && date.getHours() < 19) timeChange = "<span>🌇夕阳无限好，只是近黄昏</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>🌔晚上好，夜生活嗨起来</span>";
    else timeChange = "🌌夜深了，早点休息，少熬夜";

    //自定义文本需要放的位置
    WelcomeInfo && (WelcomeInfo.innerHTML = `
    欢迎来自 <strong>${address}</strong> 的小伙伴🍂<br>
    <strong>${welcome_info}！</strong><br>
    您距离 <strong>Elykia</strong> 约有 <strong>${dist}</strong> 公里！<br>
    您的IP地址为：<strong>${IP}</strong><br>
    <strong>${timeChange}！</strong>`);
  },
}

