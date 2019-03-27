Egg.js 创建基类base.js 控制器、配置session、创建tools.js 服务（svg-captcha验证码）

一、生成验证码
一、生成验证码
生成验证码用到的模块：https://www.npmjs.com/package/svg-captcha
    const captcha = svgCaptcha.create(
    {
        size:6,
        fontSize: 50,
        width: 100,
        height:40,
        background:"#cc9966"
    });
    ctx.session.code=captcha.text;
    ctx.response.type = 'image/svg+xml';
    ctx.body=captcha.data;
二、配置session
    config.session={
        key:'SESSION_ID',
        maxAge:864000,
        httpOnly: true,
        encrypt: true,
        renew: true //延长会话有效期
    }
