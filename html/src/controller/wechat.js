/**

 @Name：layuiAdmin 微信管理
 @Author：aaron
 @Site:
 @License：LPPL
    
 */


layui.define(['table', 'form'], function(exports){
  var $ = layui.$
  ,setter = layui.setter
  ,admin = layui.admin
  ,view = layui.view
  ,table = layui.table
  ,form = layui.form
  
  ,postJson=function(options){
	  $.ajax({
		  url:baseUrl+options.controller
		  ,type:'POST'
		  ,data:JSON.stringify(options.data)
		  ,contentType:'application/json'
		  ,xhrFields: {withCredentials: false}
		  ,success:function(res){
			  var ret=JSON.parse(res);
			  var msg='请求失败!';
			  var style={offset: '15px',icon: 1,time: 1000};
			  
			  if(ret.code<=0){
				  layer.msg(options.action+'失败',style,function(){
					  layer.close(options.index);
				  });
				  return;
			  }
			  layer.msg(options.action+'成功',style,function(){
				  layui.table.reload(options.table); //重载表格
				  layer.close(options.index);
			  });
			  return;
		  }
		  
	  });
  },
  postJsonCallback=function(options){
	  $.ajax({
		  url:baseUrl+options.controller,
		  type:'POST',
		  data:JSON.stringify(options.data),
		  contentType:'application/json',
		  xhrFields:{withCredentials:false},
		  success:function(res){
			  options.success(res);
		  }
	  });
	  
  };
  
  var baseUrl='http://127.0.0.1:5001/api/'
  
  //公众号管理
  table.render({
    elem: '#LAY-publicaccount-list'
	,url:baseUrl+ 'publicaccount/list'//模拟接口
	,where:{userid:layui.data(setter.tableName)['userid']}
	,cols: [[
      {type: 'checkbox', fixed: 'left'}
	  ,{field: 'code',width:80, title: '编号', sort: true}
      ,{field: 'id',hide:true}
      ,{field: 'name', title: '名称', Width: 100,align:'center'}
	  ,{field:'wechatid',title:'微信号',minWidth:150,align:'center'}
      ,{field: 'appid', title: 'AppID',align:'center'}
      ,{field: 'appsecret', title: 'AppSecret'}
	  ,{field: 'domain', title: '域名',width:200}
      ,{field: 'createtime', title: '创建时间', sort: true}
      ,{title: '操作', minWidth: 150, align: 'center', fixed: 'right', toolbar: '#table-wechat-publicaccount'}
    ]]
    ,page: true
    ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
	
  });
  
  //监听公众号工具条
  table.on('tool(LAY-publicaccount-list)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
      layer.confirm('确定删除该公众号吗？', function(index){
		  postJson({
			  controller:'publicaccount/delete'
			  ,data:data
			  ,action:'公众号删除'
			  ,table:'LAY-publicaccount-list'
			  ,index:index
		  });
      });
    } else if(obj.event === 'edit'){
      admin.popup({
        title: '编辑公众号'
        ,area: ['550px', '550px']
        ,id: 'LAY-popup-content-edit'
        ,success: function(layero, index){
          view(this.id).render('wechat/publicaccount/publicaccountEditform', data).done(function(){
            form.render(null, 'layuiadmin-publicaccount-edit');
            //监听提交
            form.on('submit(LAY-publicaccount-edit-submit)', function(data){
              var field = data.field; //获取提交的字段
			  var local=layui.data(setter.tableName);
			  field.userid=local['userid'];
			  
			  postJson({
			  			  controller:'publicaccount/update'
			  			  ,data:field
			  			  ,action:'公众号更新'
			  			  ,table:'LAY-publicaccount-list'
			  			  ,index:index
			  });
			  
			  
			  });
			
          });
        }
      });
    }
  });

  //二维码管理
  table.render({
    elem: '#LAY-qrcode-list'
    ,url:baseUrl+'qrcode/list' //模拟接口
	,where:{userid:layui.data(setter.tableName)['userid']}
    ,cols: [[
      {type: 'checkbox', fixed: 'left'}
      ,{field: 'code', width: 100, title: '编号', sort: true}
	  ,{field:'name',title:'标题',width:200,align:'center'}
	  ,{field:'startend',title:'活动时间',minWidth:280,align:'center'}
	  ,{field:'url',title:'模板url',width:100}
      ,{field: 'qrurl', title: '二维码链接', minWidth:200,align:'center'}
	  ,{field: 'createtime', title: '创建时间', sort: true}
      ,{title: '操作', width:300, align: 'center', fixed: 'right', toolbar: '#table-wechat-qrcode'}
    ]]
	,page: true
	,limit: 10
	,limits: [10, 15, 20, 25, 30]
	,text: '对不起，加载出现异常！'
  });
  
  //监听二维码工具条
  table.on('tool(LAY-qrcode-list)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
      layer.confirm('确定删除此二维码吗？', function(index){
        postJson({
			controller:'qrcode/delete',
			data:data,
			action:'删除二维码',
			index:index,
			table:'LAY-qrcode-list'
		});
      });
    } else if(obj.event === 'edit'){
      admin.popup({
        title: '编辑二维码'
        ,area: ['450px', '550px']
        ,id: 'LAY-popup-qrcode-edit'
        ,success: function(layero, index){
          view(this.id).render('wechat/qrcode/qreditform', data).done(function(){
			  layui.use('laydate',function(){
			  	var laydate=layui.laydate;
			  	laydate.render({
			  		  elem:'#starttime',
			  		  type:'date',
			  		  value:new Date()
			  	});
			  	laydate.render({
			  		  elem:'#endtime',
			  		  type:'date',
			  		  value:new Date()
			  	});
			  });
            form.render(null, 'layuiadmin-form-qredit');
            //监听提交
            form.on('submit(LAY-qr-edit-submit)', function(data){
              var field = data.field; //获取提交的字段
			  var local=layui.data(setter.tableName);
			  field.createtime=obj.data.createtime;
			  field.userid=local['userid'];
			  postJson({
			  	controller:'qrcode/update',
			  	data:field,
			  	action:'二维码更新',
			  	index:index,
			  	table:'LAY-qrcode-list'
			  });
            });
          });
        }
      });
    } else if(obj.event=='preview'){
		postJsonCallback({
			controller:'qrcode/preview',
			data:obj.data,
			action:'预览二维码',
			success:function(res){
				var ret=JSON.parse(res);
				if(ret.code==0){
					admin.popup({title:'预览二维码',area:['450px','550px'],id:'LAY-popup-qrcode-preview',
					success:function(layero,index){
						data.src=ret.imgUrl;
						view(this.id).render('wechat/qrcode/preview',data).done(function(){
							form.render(null,'layuiadmin-form-qrpreview');
							form.on('submit(LAY-qr-download)',function(data){
								var field=data.field;
							});
						});
					}});
				}
			}
		});
		
		
	}
  });

  //评论管理
  table.render({
    elem: '#LAY-app-content-comm'
    ,url: './json/content/comment.js' //模拟接口
    ,cols: [[
      {type: 'checkbox', fixed: 'left'}
      ,{field: 'id', width: 100, title: 'ID', sort: true}
      ,{field: 'reviewers', title: '评论者', minWidth: 100}
      ,{field: 'content', title: '评论内容', minWidth: 100}
      ,{field: 'commtime', title: '评论时间', minWidth: 100, sort: true}
      ,{title: '操作', width: 150, align: 'center', fixed: 'right', toolbar: '#table-content-com'}
    ]]
    ,page: true
    ,limit: 10
    ,limits: [10, 15, 20, 25, 30]
    ,text: '对不起，加载出现异常！'
  });
  
  //监听工具条
  table.on('tool(LAY-app-content-comm)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
      layer.confirm('确定删除此条评论？', function(index){
        obj.del();
        layer.close(index);
      });
    } else if(obj.event === 'edit'){
      admin.popup({
        title: '编辑评论'
        ,area: ['450px', '550px']
        ,id: 'LAY-popup-content-comm'
        ,success: function(layero, index){
          view(this.id).render('app/content/contform', data).done(function(){
            form.render(null, 'layuiadmin-form-comment');
            
            //监听提交
            form.on('submit(layuiadmin-app-com-submit)', function(data){
              var field = data.field; //获取提交的字段

              //提交 Ajax 成功后，关闭当前弹层并重载表格
              //$.ajax({});
              layui.table.reload('LAY-app-content-comm'); //重载表格
              layer.close(index); //执行关闭 
            });
          });
        }
      });
    }
  });

  exports('wechat', {})
});