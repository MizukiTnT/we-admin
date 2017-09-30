<template>
    <div>
      <div class="reply">
        <div class="tit">默认回复</div>
        <div class="tab">
          <router-link class="/text" to="/text">文本</router-link>
          <router-link to="/pic">图文</router-link>
          <router-link to="/app">微应用</router-link>
        </div>
        <router-view></router-view>

      </div>
    </div>
</template>

<script>
  let Editor = require('wangeditor')
export default{

}
</script>
<style scoped>
  /*reply*/
  .reply {
    background-color: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid #fdfdfd;
    box-shadow: 0 0 3px #e4e4e4;
    padding: 15px;
  }
  /*tit*/
  .tit {
    font-size: 20px;
    color: #363636;
    padding-bottom: 15px;
    border-bottom: 1px solid #dbdbdb;
  }
  /*tab*/
  .tab {
    display: flex;
    margin-top: 15px;
  }
  .router-link-active {
    border: 1px solid  #20bc56 !important;
    color: #fff!important;
    background-color:  #20bc56!important;
  }
  .tab a{
    display: inline-block;
    width: 130px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    color: #20bc56;
    border-right:1px solid #dbdbdb;
    border-top:1px solid #dbdbdb;
    border-bottom:1px solid #dbdbdb;
    transition: all .5s;
  }
  .tab a:nth-child(1) {
    border-left: 1px solid #dbdbdb;
  }
  .selected {
    background-color: #20bc56!important;
    color: #fff !important;
    border-color: #20bc56;
  }
</style>
