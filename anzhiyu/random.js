var posts=["posts/4.html","posts/6.html","posts/2.html","posts/16.html","posts/11.html","posts/17.html","posts/12.html","posts/18.html","posts/19.html","posts/23.html","posts/7.html","posts/8.html","posts/1.html","posts/20.html","posts/9.html","posts/10.html","posts/21.html","posts/3.html","posts/13.html","posts/15.html","posts/5.html","posts/22.html","posts/14.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"AnZhiYu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Butterfly主题","link":"https://butterfly.js.org/","avatar":"https://butterfly.js.org/img/avatar.png","descr":"今日事 今日毕"},{"name":"Hexo","link":"https://hexo.io/zh-cn/","avatar":"https://hexo.io/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebc5158dc.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://avatars.githubusercontent.com/u/53938635?v=4","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":"vip","tag":"技术"},{"name":"Tianli","link":"https://blog.tianli0.top/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","siteshot":"https://npm.elemecdn.com/@kmar/fonts@1.8.1/sc/tianli.jpg","color":"vip","tag":"技术"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp","color":"vip","tag":"技术"},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","descr":"分享技术与科技生活","siteshot":"https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png","color":"vip","tag":"技术"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://avatars.githubusercontent.com/u/53938635?v=4","descr":"Future is now 🍭🍭🍭","recommend":true},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","descr":"分享技术与科技生活","recommend":true},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","recommend":true},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","recommend":true},{"name":"唐志远","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志"},{"name":"小N同学","link":"https://www.imcharon.com/","avatar":"https://img.picui.cn/free/2025/03/19/67da42e9358c4.png","descr":"青石落晚巷 故人未还乡"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Tianli","link":"https://blog.tianli0.top/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","recommend":true},{"name":"贰猹的小窝","link":"https://noionion.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/12/27/63aa52f8c4542.webp","descr":"用这生命中的每一秒，给自己一个不后悔的未来"},{"name":"LargeSkull","link":"https://largeskull.github.io/","avatar":"https://avatars.githubusercontent.com/u/167324049?v=4","descr":"莽撞的开始，拙劣的完成，也好过因心怀完美主义而不动手去做。"},{"name":"小冰博客","link":"https://zfe.space/","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"Mr.Nyampasu","link":"https://blog.mpsxx.top/","avatar":"https://blog.mpsxx.top/img/favicon.svg","descr":"分享、学习、生活"},{"name":"EvanNotFound","link":"https://ohevan.com","avatar":"https://cdn.v2ex.com/gravatar/a350c97fc040a23538db38ba3fb7b17e?d=retro","descr":"Evan的部落阁，用香港记者的速度更新文章","recommend":true},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1736191951&spec=640","descr":"寒蝉黎明之时，便是重生之日"},{"name":"煮雪话河山","link":"https://blog.cent1pedee.top/","avatar":"https://avatars.githubusercontent.com/u/141298221?v=4","descr":"如月之恒，如日之升。"},{"name":"atpX","link":"https://atpx.com/blog/","avatar":"https://avatars.githubusercontent.com/u/32787144?v=4","descr":"A nook where thoughts and ideas sometimes echo","recommend":true},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.avif","descr":"Don't worry, Be happy."},{"name":"矿井小帕的茶馆","link":"https://minecreeper.top/","avatar":"https://avatars.githubusercontent.com/u/61276297?v=4","descr":"Don't worry, Be happy."},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","recommend":true},{"name":"SCOTT STUDIO","link":"https://blog.scott-studio.cn","avatar":"https://avatars.githubusercontent.com/u/22902749?v=4","descr":"不知名前端攻城狮，分享编程经验和技术干货。"},{"name":"iMaeGoo","link":"https://www.imaegoo.com","avatar":"https://bu.dusays.com/2023/10/11/652689c8646ef.jpg","descr":"虹墨空间站","recommend":true},{"name":"小TiD笔记","link":"https://www.tidnotes.top/","avatar":"https://cdn.cbd.int/tidnotes-blog-static@1.0.0/img/avatar.jpg","descr":"技术无止境，随心随所记"},{"name":"CrazyWong","link":"https://blog.crazywong.com/","avatar":"https://blog.crazywong.com/img/avatar.png","descr":"熱衷學習，熱衷生活"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活","recommend":true},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://avatars.githubusercontent.com/u/55614189?v=4","descr":"漫天倾尘,风中轻笑","recommend":true},{"name":"木木木木木","link":"https://immmmm.com/","avatar":"https://avatars.githubusercontent.com/u/1472390?v=4","descr":"全栈开发工程师，生活化语言的技术博客"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://npm.elemecdn.com/@kmar/fonts@1/avatar/own.png","descr":"开发学习启发性二刺螈"},{"name":"小旦","link":"https://satera.cn","avatar":"https://avatars.githubusercontent.com/u/141537015?v=4","descr":"SNTube Studio"},{"name":"琅環书生","link":"https://www.zlog.us.kg","avatar":"https://avatars.githubusercontent.com/u/111574393?v=4","descr":"无远弗届，皆有可能"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://avatars.githubusercontent.com/u/79169717?v=4","descr":"路虽远行则将至，事虽难做则必成！"},{"name":"Fgaoxing","link":"https://www.yt-blog.top/","avatar":"https://bu.dusays.com/2024/01/30/65b88de36f87b.png","descr":"一个少年的博客","recommend":true},{"name":"三钻","link":"https://tridiamond.tech","avatar":"https://upen.caup.net/ai_pics_mj/202303/1677952366325269.jpg","descr":"Think like an artist, develop like an artisan."},{"name":"陆小启 Kairo","link":"https://blog.luxq.space","avatar":"https://weavatar.com/avatar/a73561eefd17b4bd759ab56f36a1bafa07e057370d39b5655db99e0479641bd0?d=letter&letter=Q","descr":"往者不谏，来者可追"},{"name":"ImQi1","link":"https://imqi1.com","avatar":"https://cravatar.cn/avatar/2841d29eeabab633ae116c7b2c97e3bf","descr":"做技术的分享者、生活的摄影师、时事的评论员。"},{"name":"Guo Le","link":"https://blog.guole.fun/","avatar":"https://avatars.githubusercontent.com/u/63436555?v=4","descr":"生命是独立是自由是爱与和平"},{"name":"Dejavu","link":"https://blog.dejavu.moe/","avatar":"https://avatars.githubusercontent.com/u/57177121?v=4","descr":"Not for success, just for growing."},{"name":"忆星辰","link":"https://www.extingstudio.com","avatar":"https://cdn.jsdmirror.com/gh/BillScott1024/cdn-blog/images/avatar.webp","descr":"游戏开发者, 业余摄影师"},{"name":"别碰我的镜头盖","link":"https://blog.bornforthis.cn","avatar":"https://avatars.githubusercontent.com/u/48122016?v=4","descr":"I love the people I photograph！"},{"name":"小赵の破宅","link":"https://blog.zhaoziyi.site","avatar":"https://avatars.githubusercontent.com/u/71519877?v=4","descr":"生数理化生一塌糊涂的理科生，对兴趣情有独钟的追寻！"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://weavatar.com/avatar/7cf5faae1803c83051687896b792ac79?d=letter&letter=梦","descr":"但愿日子清静抬头遇见的满是柔情","recommend":true},{"name":"屑殇","link":"https://jinghuashang.cn/","avatar":"https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0b45db496.webp","descr":"桃李春风一杯酒，江湖夜雨十年灯"},{"name":"咖啡豆子coffee","link":"https://blog.kfdzcoffee.cn/","descr":"所有奇迹的始发点","avatar":"https://avatars.githubusercontent.com/u/84187695?v=4"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","avatar":"https://blog.liushen.fun/info/avatar.ico","recommend":true},{"name":"Fluid","link":"https://hexo.fluid-dev.com/","descr":"Fluid 主题官方博客","avatar":"https://hexo.fluid-dev.com/img/avatar.png"},{"name":"zephyr","link":"https://blog.manmandong.top/","descr":"记录，分享。","avatar":"https://weavatar.com/avatar/315a243be6d3ecc3fb35ef870e7cc765?d=letter&letter=z"},{"name":"sheetung","link":"https://moontung.top/","descr":"The record & of sheetung","avatar":"https://avatars.githubusercontent.com/u/30528385?v=4"},{"name":"初之音","link":"https://www.himiku.com/","descr":"聆听心中最初的声音","avatar":"https://cravatar.cn/avatar/2fc4cf3560ff5a1cc64ea029896ab235?s=400"},{"name":"青稚の空间","link":"https://blog.linux-qitong.top/","avatar":"https://weavatar.com/avatar/4c4cce79bae6e0d806150b0b0c711d6d?d=letter&letter=青","descr":"越努力，越幸运."},{"name":"胡桃木实验室","link":"https://www.htmacg.cn","avatar":"https://www.htmacg.cn/wp-content/uploads/2024/05/cropped-efi.png","descr":"一个神秘的小窝"},{"name":"一只小白菜","link":"https://blog.1zxbc.cn","avatar":"https://q2.qlogo.cn/g?b=qq&nk=2694199949&s=100","descr":"分享白菜的快乐，努力地工作"},{"name":"一粒微尘","link":"https://blog.667408.xyz","avatar":"https://avatars.githubusercontent.com/u/170312054?v=4","descr":"撷光以望，纳星于瞳"},{"name":"绾秋小站","link":"https://www.gx.gx.cn/","avatar":"https://weavatar.com/avatar/0e88c874bc04e292c4ba6fc6f24219a5?d=letter&letter=小","descr":"用文字记录生活。"},{"name":"朽丘秋雨","link":"https://koxiuqiu.cn","avatar":"https://avatars.githubusercontent.com/u/166214162?v=4","descr":"一定会和喜欢的人在夏日夜晚牵手慢步"},{"name":"XingJi","link":"https://love.xingji.fun/","avatar":"https://avatars.githubusercontent.com/u/177649500?v=4","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨"},{"name":"伍十七","link":"https://blog.everfu.cn","avatar":"https://avatars.githubusercontent.com/u/74389842?v=4","descr":"我是一名正在上大一的前端爱好者,专注于构建优秀的应用程序。"},{"name":"Naokuo","link":"https://blog.naokuo.top","avatar":"https://cdn.cbd.int/naokuo-blog/img/about/avatar-512x512.png","descr":"请给我来亿碗三鲜面"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://avatars.githubusercontent.com/u/30703483?v=4","descr":"愿岁并谢，与友长兮","recommend":true},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://bu.dusays.com/2023/08/25/64e8ca25e89c5.jpg","descr":"有肉有猫有生活.","recommend":true},{"name":"Arthals","link":"https://arthals.ink/","avatar":"https://cdn.arthals.ink/Arthals.png","descr":"所见高山远木，阔云流风；所幸岁月盈余，了无拘束。","recommend":true},{"name":"Ethan","link":"https://hanlife02.com.cn/","avatar":"https://avatars.githubusercontent.com/u/150881448?v=4","descr":"Don't stay awake for too long.","recommend":true},{"name":"C+V","link":"https://pku-cs-cjw.top/","avatar":"https://avatars.githubusercontent.com/u/155640404?v=4","descr":"万物可爱，你也不例外"},{"name":"GnaixEuy","link":"https://blog.gnaixeuy.cn/","avatar":"https://pic.imgdb.cn/item/66f0dfe3f21886ccc05254ec.png","descr":"求知若饥，虚心若愚"},{"name":"鹰瑶","link":"https://www.ayao.ltd","avatar":"https://avatars.githubusercontent.com/u/86733666?v=4","descr":"瑶瑶瑶瑶小可爱","recommend":true},{"name":"别亦难","link":"https://lazyingman.cn","avatar":"https://bu.dusays.com/2023/06/23/64959cf745a4d.png","descr":"准时不定期更新"},{"name":"MJ","link":"https://blog.justlovesmile.top","avatar":"https://npm.elemecdn.com/justlovesmile-img/logo.jpg","descr":"醒亦念卿，梦亦念卿"},{"name":"qlAD","link":"https://www.qladgk.com/","avatar":"https://avatars.githubusercontent.com/u/54198685?v=4","descr":"一名小小的计算机爱好者"},{"name":"MysticStars","link":"https://www.mysticstars.cn","avatar":"https://avatars.githubusercontent.com/u/97295993?v=4","descr":"Discover Infinity"},{"name":"凌尘k","link":"https://b.icxk.cn/","avatar":"https://avatars.githubusercontent.com/u/61767731?v=4","descr":"于高山之巅，方见大河奔涌；于群峰之上，更觉长风浩荡。"},{"name":"星の野","link":"https://blog.byer.top/","avatar":"https://bu.dusays.com/2023/10/01/6519291503349.jpg","descr":"我自是年少，韶华倾负"},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://bu.dusays.com/2023/08/24/64e6be008d84b.jpg","descr":"热爱你来过的每度温暖"},{"name":"残页","link":"https://blog.canyie.top/","avatar":"https://avatars.githubusercontent.com/u/31466456?v=4","descr":"残页无聊搭的一个小博客"},{"name":"FF","url":"https://foolishfox.cn/","avatar":"https://cravatar.cn/avatar/808b2d2bcf421a7f3d99310c0dc3271a?s=100&r=G&d=mm","descr":"foolish fox"},{"name":"羿潇贤鱼の窝","link":"https://blog.raxianch.moe","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1025212779&s=5","descr":"为之则易，不为则难。"},{"name":"Chrison","link":"https://chrison.cn/","avatar":"https://cravatar.cn/avatar/03ce846eef46a1b21c1bc5a4f03c2de1?s=200&r=&d=404","descr":"前程似锦、未来可期、寻得良人、共赴白头，祝你也祝我。","recommend":true},{"name":"Kris Yan","link":"https://blog.krisyan.dev/","avatar":"https://avatars.githubusercontent.com/u/90099234?v=4","descr":"無限進步"},{"name":"Oyiso","link":"https://oyiso.cn","avatar":"https://oyiso.cn/logo.png","descr":"The shortest answer is doing"},{"name":"kina","link":"https://kina.uno/","avatar":"https://cn.cravatar.com/avatar/4f8dd0f283e616c518aea9bf06bda2e0?s=128&d=mm","descr":"千鹤飞， 樱花映樱井， 春梦轻绕"},{"name":"李小白","link":"https://blog.lxb.icu/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"风共舞，随心而行"},{"name":"ChrAlpha","link":"https://blog.ichr.me/","avatar":"https://friends.ichr.me/img/ichr.me.png","descr":"你必须拼尽全力，才能显得毫不费力"},{"name":"Chlorine","link":"https://www.yoghurtlee.com","avatar":"https://avatars.githubusercontent.com/u/146422759?v=4","descr":"Como el viento."},{"name":"tangly1024","link":"https://blog.tangly1024.com/","avatar":"https://avatars.githubusercontent.com/u/15920488?v=4","descr":"NotionNext博客作者"},{"name":"胜天半子","link":"https://blog.291055.xyz/","avatar":"https://i1.wp.com/ruom.wuaze.com/i/2024/11/02/166823.webp","descr":"事已至此，先吃饭吧"},{"name":"紗夕里","link":"https://blog.ovofish.com/","avatar":"https://blog.ovofish.com/img/avatar.webp","descr":"在你心里-直到永远"},{"name":"RandomEnch","link":"https://blog.randench.cn/","avatar":"https://avatars.githubusercontent.com/u/79776324?v=4","descr":"施恩勿念，受恩莫忘。"},{"name":"Xaoxuu","link":"https://xaoxuu.com","avatar":"https://bu.dusays.com/2021/09/24/2f74810ceb3d3.png","descr":"Volantis主题开发者"},{"name":"Sukka","link":"https://blog.skk.moe/","avatar":"https://avatars.githubusercontent.com/u/40715044?v=4","descr":"童话只美在真实却从不续写"},{"name":"汐塔魔法屋","link":"https://blog.storical.space/","avatar":"https://weavatar.com/avatar/e873808e83cf6b677b23b760c77523fb660b5db100791b3cb9a99cd5c25f9e84?d=wavatar","descr":"种下一颗有故事的种子，让它带着魔法和奇迹生根发芽"},{"name":"W4J1e","link":"https://hin.cool","avatar":"https://cravatar.cn/avatar/8def0c8c73b56dc0e18744a9a43d70f4","descr":"总是偏爱不务正业"},{"name":"Homulilly","link":"https://homulilly.com","avatar":"https://homulilly.com/images/avatar.jpg","descr":"Aroes's Blog | \\萌脇舞以/"},{"name":"喵二","link":"https://www.miaoer.net/","avatar":"https://avatars.githubusercontent.com/u/66155308?v=4","descr":"缘，妙不可言"},{"name":"菲兹克斯喵","link":"https://physnya.top","avatar":"https://weavatar.com/avatar/8ab48309bf3986edc53ac1a52e94f9dcc11ef2919dd4687272b26ba9bbfb2b78?d=letter&letter=菲","descr":"Eclipse first, the rest nowhere."},{"name":"灯火橘","link":"https://blog.catouo.cn/","avatar":"https://avatars.githubusercontent.com/u/49292532?v=4","descr":"橘橘博客"},{"name":"小奥","link":"https://www.aokaoka.top/","avatar":"https://avatars.githubusercontent.com/u/115939152?v=4","descr":"不经一事，不长一智。"},{"name":"PeterJXL","link":"https://www.peterjxl.com","avatar":"https://weavatar.com/avatar/0a061266d748a3722dcf86ee1dfff2bccf51c2f989096d8f33057f805d809bd0?d=letter&letter=P","descr":"从 01 开始"},{"name":"Canmi","link":"https://arc.canmi.icu/","avatar":"https://avatars.githubusercontent.com/u/168910609?v=4","descr":"彩笔猫猫"},{"name":"陵长镜","link":"https://r1n.top","avatar":"https://avatars.githubusercontent.com/u/187223050?v=4","descr":"Everything collapses, but you rise."},{"name":"璜珀的小屋","link":"https://blog.hpcesia.com/","avatar":"https://weavatar.com/avatar/2d14bc5be8688ca71eacb09e4af3494b66a6c493d4c5422548b13a2624cc0b93?d=letter&letter=璜","descr":"一个想要摆烂却又不甘于躺平的人"},{"name":"没有楼的楼长","link":"https://blog.sdnie.fun/","avatar":"https://bu.dusays.com/2023/10/19/6530bb8a4fb8e.jpg","descr":"事已至此，木已成舟"},{"name":"Velas电波站","link":"https://www.velasx.com/","avatar":"https://imiku.org/avatar/cd6b3888fe3cbbe26db0f2b3baff813f?s=500","descr":"Perceive more. Judge less."},{"name":"张文保","link":"https://zhangwenbao.com","avatar":"https://weavatar.com/avatar/097149970bb2820dedda1dc33952f00559ea4b01984814140962b783aa089d2c?d=letter&letter=张","descr":"SEO顾问、高级SEO工程师"},{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com","avatar":"https://avatars.githubusercontent.com/u/112921458?v=4","descr":"以博客记录生活与热爱！"},{"name":"东方月初","link":"https://blog.liuer.xin/","avatar":"https://serv.200038.xyz/2024/09/19/040857.webp","descr":"分享有趣但又无聊的东西。"},{"name":"小李同学 Coding","link":"https://blog.xxfer.cn/","avatar":"https://avatars.githubusercontent.com/u/111830843?v=4","descr":"在深度学习的真火里，寻找解释世界的终极灵丹妙药..."},{"name":"摸鱼の客栈","link":"https://blog.hanbaka.cn","avatar":"https://avatars.githubusercontent.com/u/122472858?v=4","descr":"没事摸摸鱼，反正焦虑也解决不了问题"},{"name":"ZLA小站","link":"https://www.zla.pub/","avatar":"https://avatars.githubusercontent.com/u/40444637?v=4","descr":"不要哭，不要笑，不要恨，要理解。"},{"name":"Hinai","link":"https://blog.woo.moe","avatar":"https://weavatar.com/avatar/2f9f0f51438c3149782997bc360c9716458b513b1b3de5cbca6e5609055b1a79?d=letter&letter=H","descr":"曇花一現"},{"name":"Ciel","link":"https://lar.moe/","avatar":"https://avatars.githubusercontent.com/u/168252381?v=4","descr":"Hana to Uta"},{"name":"Steve ZMT","link":"https://blog.stevezmt.top/","avatar":"https://avatars.githubusercontent.com/u/98326195?v=4","descr":"又名“史蒂夫ZMT”的树洞。"},{"name":"Leet","link":"https://leetme.netlify.app","avatar":"https://weavatar.com/avatar/85066406f1ea5020d995cb9c133017532c2bc31adb517b1fb503a9aec8a99210?d=letter&letter=L","descr":"Out of my mind."},{"name":"DuckXu","link":"https://i.duckxu.com","avatar":"https://cravatar.cn/avatar/709d78e1b88a3ce2e071b556df7e01b1?s=100&r=X&d=","descr":"duckxu's internet home"},{"name":"I Am I","link":"https://5ime.cn","avatar":"https://avatars.githubusercontent.com/u/31686695?v=4","descr":"永远相信美好的事情即将发生"},{"name":"365云栈","link":"https://blog.365sites.top","avatar":"https://avatars.githubusercontent.com/u/133582008?v=4","descr":"初阅不明言外意，重温方觉字中情"},{"name":"辣条","link":"https://blog.owwo.fun","avatar":"https://weavatar.com/avatar/ba85eafa93f44b2a4420375c628a759eb6c76bb9d826fb5a075473feec2e5a74?d=letter&letter=辣","descr":"悠远的天空，在苍穹的尽头"},{"name":"筱荷","link":"https://rimrose.top/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=2632364603&s=640","descr":"生活在阴沟里，依然有仰望星空的权利。"},{"name":"B84F2246","link":"https://blog.b84f2246.top/","avatar":"https://avatars.githubusercontent.com/u/122760868?v=4","descr":"TECH OTAKUS SAVE THE WORLD!"},{"name":"xyx404","link":"https://xyx404.github.io/","avatar":"https://weavatar.com/avatar/1705912b9f9e2095db615b59d1ae9fa18fbbbcd7002340518b004006f6b24884?d=letter&letter=x","descr":"在努力和摆烂中选择了努力摆烂AWA"},{"name":"周润发","link":"https://blog.aizrf.com/","avatar":"https://avatars.githubusercontent.com/u/45180881?v=4","descr":"收录开源，好用的互联网项目"},{"name":"諾諾の魔法ノート.","link":"https://rmolives.com/","avatar":"https://cn.cravatar.com/avatar/05bb825396ccabff784eed95b9ca7f5d?s=128&d=mm","descr":"一个对精神病学、语言学、神学以及计算机感兴趣的魔法使 😁"},{"name":"Illustar0","link":"https://illustar0.com/","avatar":"https://avatars.githubusercontent.com/u/53867435?v=4","descr":"FTL"},{"name":"妖の森","link":"https://fjwr.xyz/","avatar":"https://weavatar.com/avatar/49088d4decf8b6298dc49439ee4291b7f318818a1208eee973a17d4facb8e6de?d=letter&letter=妖","descr":"一个划水摸鱼的博主"},{"name":"王鑫","link":"https://wxweb.xyz","avatar":"https://weavatar.com/avatar/f7c740e48d7f02b45e1899b9b9752c6420e758289a8c74167d616d790bed9169?d=letter&letter=王","descr":"活着就是为了折腾"},{"name":"isYangs","link":"https://isyangs.cn","avatar":"https://avatars.githubusercontent.com/u/110588441?v=4","descr":"一个前端Bug构造师的博客"},{"name":"Rolenx","link":"https://home.yesord.top","avatar":"https://avatars.githubusercontent.com/u/186162989?v=4","descr":"你相信光吗～"},{"name":"ZeroLatency","link":"https://blog.3ms.run/","avatar":"https://weavatar.com/avatar/6e7877f3977b666df9c66cf47062376e32671daa87baa5cda31cca6e9328c447?d=letter&letter=Z","descr":"探索科技与生活的交汇。"},{"name":"solaireh3","link":"https://xxxh.de","avatar":"https://xxxh.de/upload/IMG_1966.gif","descr":"愛しの君とこの世のはたて"},{"name":"Hoey","link":"https://zhenghaoyang.cn/","avatar":"https://avatars.githubusercontent.com/u/95458562?v=4","descr":"老师，我太想进步了。"},{"name":"Bleaz","link":"https://www.bleaz.top/","avatar":"https://weavatar.com/avatar/f2fc20f52bda9878af292c87bce58cc4d1608ae3b69f6670aa77625b72ce0679?d=letter&letter=B","descr":"不畏过往，不惧将来"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };