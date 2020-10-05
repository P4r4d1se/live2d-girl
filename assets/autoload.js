try {
    $("<link>").attr({href: "/live2d-girl/assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: '/live2d-girl/assets/waifu-tips.min.js?v=1.4.2',dataType:"script", cache: true, async: false});
    $.ajax({url: '/live2d-girl/assets/live2d.min.js?v=1.0.5',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['modelId'] = 1;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 7;          // 默认材质 ID
    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
    live2d_settings['canTurnToHomePage']    = false;         // 显示 返回首页    按钮，可选 true(真), false(假)
    live2d_settings['aboutPageUrl']         = 'https://github.com/P4r4d1se/live2d-girl';   // 关于页地址, '{URL 网址}'
    live2d_settings['modelAPI']             = '/live2d-girl/api/';   // 自建 API 修改这里
    live2d_settings['canTakeScreenshot']    = false;         // 显示 看板娘截图  按钮，可选 true(真), false(假)
    /* 在 initModel 前添加 */
    initModel('/live2d-girl/assets/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
