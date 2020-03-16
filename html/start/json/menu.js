{
  "code": 0
  ,"msg": ""
  ,"data": [
  {
    "title": "主页"
    ,"icon": "layui-icon-home"
    ,"list": [{
      "title": "控制台"
      ,"jump": "/"
    }, {
      "name": "homepage1"
      ,"title": "主页一"
      ,"jump": "home/homepage1"
    }, {
      "name": "homepage2"
      ,"title": "主页二"
      ,"jump": "home/homepage2"
    }]
  }, 
  {
    "name": "template"
    ,"title": "页面"
    ,"icon": "layui-icon-template"
    ,"list": [{
      "name": "personalpage"
      ,"title": "个人主页"
      ,"jump": "template/personalpage"
    },{
      "name": "addresslist"
      ,"title": "通讯录"
      ,"jump": "template/addresslist"
    },{
      "name": "caller"
      ,"title": "客户列表"
      ,"jump": "template/caller"
    },{
      "name": "goodslist"
      ,"title": "商品列表"
      ,"jump": "template/goodslist"
    },{
      "name": "msgboard"
      ,"title": "留言板"
      ,"jump": "template/msgboard"
    },{
      "name": "search"
      ,"title": "搜索结果"
      ,"jump": "template/search"
    },{
      "name": "reg"
      ,"title": "注册"
      ,"jump": "user/reg"
    },{
      "name": "login"
      ,"title": "登入"
      ,"jump": "user/login"
    },{
      "name": "forget"
      ,"title": "忘记密码"
      ,"jump": "user/forget"
    },{
      "name": "404"
      ,"title": "404"
      ,"jump": "template/tips/404"
    },{
      "name": "error"
      ,"title": "错误提示"
      ,"jump": "template/tips/error"
    }, {
      "name": ""
      ,"title": "内嵌页面"
      ,"spread": true
      ,"list": [{
        "name": ""
        ,"title": "百度一下"
        ,"jump": "/iframe/link/baidu"
      }, {
        "name": ""
        ,"title": "layui官网"
        ,"jump": "/iframe/link/layui"
      }, {
        "name": ""
        ,"title": "layuiAdmin官网"
        ,"jump": "/iframe/link/layuiAdmin"
      }]
    }]
  }, 
  {
    "name": "app"
    ,"title": "应用"
    ,"icon": "layui-icon-app"
    ,"list": [{
      "name": "content"
      ,"title": "内容系统"
      ,"list": [{
        "name": "list"
        ,"title": "文章列表"
      },{
        "name": "tags"
        ,"title": "分类管理"
      },{
        "name": "comment"
        ,"title": "评论管理"
      }]
    },{
      "name": "forum"
      ,"title": "社区系统"
      ,"list": [{
        "name": "list"
        ,"title": "帖子列表"
      },{
        "name": "replys"
        ,"title": "回帖列表"
      }]
    },{
      "name": "message"
      ,"title": "消息中心"
    },{
      "name": "workorder"
      ,"title": "工单系统"
      ,"jump": "app/workorder/list"
    }]
  },
  {
     "name": "wechat"
     ,"title": "微信"
     ,"icon": "layui-icon-user"
     ,"list": [
		 {"name": "publicaccount","title": "公众号","jump": "wechat/publicaccount/list"},
		 {"name":"qrcode","title":"活动管理","jump":"wechat/qrcode/list"}
		 ]
  },
  {
    "name": "senior"
    ,"title": "高级"
    ,"icon": "layui-icon-senior"
    ,"list": [{
      "name": "im"
      ,"title": "通讯系统"
    },{
      "name": "echarts"
      ,"title": "Echarts集成"
      ,"list": [{
        "name": "line"
        ,"title": "折线图"
      },{
        "name": "bar"
        ,"title": "柱状图"
      },{
        "name": "map"
        ,"title": "地图"
      }]
    }]
  }, 
  {
    "name": "user"
    ,"title": "用户"
    ,"icon": "layui-icon-user"
    ,"list": [{
      "name": "user"
      ,"title": "网站用户"
      ,"jump": "user/user/list"
    }, {
      "name": "administrators-list"
      ,"title": "后台管理员"
      ,"jump": "user/administrators/list"
    }, {
      "name": "administrators-rule"
      ,"title": "角色管理"
      ,"jump": "user/administrators/role"
    }]
  }, 
  {
    "name": "set"
    ,"title": "设置"
    ,"icon": "layui-icon-set"
    ,"list": [{
      "name": "system"
      ,"title": "系统设置"
      ,"spread": true
      ,"list": [{
        "name": "website"
        ,"title": "网站设置"
      },{
        "name": "email"
        ,"title": "邮件服务"
      }]
    },
	{
      "name": "user"
      ,"title": "我的设置"
      ,"spread": true
      ,"list": [{
        "name": "info"
        ,"title": "基本资料"
      },{
        "name": "password"
        ,"title": "修改密码"
      }]
    }]
  }, 
  {
    "name": "get"
    ,"title": "授权"
    ,"icon": "layui-icon-auz"
    ,"jump": "system/get"
  }]
}