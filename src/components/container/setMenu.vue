<template>
  <div class="container">
    <div class="set_button_wrapper">
      <!--提示信息 _s-->
      <div class="set_button">
        <div class="button_tittle">设置一级标题</div>
        <input type="text" class="button" id="button" placeholder="一级菜单最多4个汉字">
      </div>
      <div class="recommend">
        <h3>温馨提示</h3>
        <ul>
          <li>1. 要使用自定义菜单，需要在公共平台申请自定义菜单使用的"AppId"和"AppSecret",然后填入下边表单；</li>
          <li>2. 提交完"AppId"和"AppSecret"后，设置菜单，点击"启用"按钮，自定义菜单功能便生效了；</li>
          <li>3. 微信公众号自定义菜单最多创建3个一级菜单，每个一级菜单下最多可以创建5个二级菜单；</li>
          <li>4. 微信公众号平台规定；菜单发布24小时生效，如果为新增粉丝，则可马上看到菜单；</li>
          <li>5. 同步；菜单内容编辑完成后，需要点击添加菜单才能显示到微信手机端。</li>
        </ul>
      </div>
      <!--提示信息 _e-->
      <div class="set_sub_button">
        <div id="sub_button_submit"><span>+</span> 添加菜单</div>
        <ul>
          <li v-for="items in buttonList">
            <div class="sub_button_name" >{{items.name}}</div>
            <div class="sub_button_type" v-if="!items.IsContent" >
              <span v-if="!items.IsContent">{{items.type}}</span>
              <select v-if="items.IsContent">
                <option value="url">url</option>
                <option value="click">click</option>
                <option value="camera"></option>
              </select>
            </div>
            <div class="sub_button_content" >{{items.content}}</div>
            <div class="sub_button_change">{{items.operation}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonList:[
        {
          isContent: false,
          emphasis: true,
          name: '菜单名称',
          type: '类型',
          content: '内容',
          operation: '操作'
        },
        {
          IsContent: true,
          emphasis: false,
          name: '买农场',
          type: 'url',
          content: 'ha',
          operation: '操作'
        },
        {
          IsContent: true,
          emphasis: false,
          name: '菜单名称',
          type: '类型',
          content: '内容',
          operation: '操作'
        }
      ]
    }
  }
}
</script>

<style>

</style>
