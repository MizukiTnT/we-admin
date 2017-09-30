<template>
  <div class="wrapper">
    <aside>
      <ul>
        <li>
          <div class="text">
            <span>设置菜单</span>
            <i></i>
          </div>
          <div class="menu_1">
            <router-link to="/menu" class="text">一级菜单左侧</router-link>
            <router-link to="/menu" class="text">一级菜单中</router-link>
            <router-link to="/menu" class="text">一级菜单右侧</router-link>
          </div>
        </li>
        <li>
          <router-link to="/reply" class="text">
            <span>自动回复</span>
            <i></i>
          </router-link>
        </li>
        <li>
          <div class="text">
            <span>查询？</span>
            <i></i>
          </div>
        </li>
      </ul>
    </aside>
    <router-view class="container"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {asideTransiton} from '../../comm/js/aside'
  export default {
    methods:{
      _transition (){
        asideTransiton()
      }
    },
    mounted(){
      console.log(this.$route.params);
      this._transition()
    }
  }
</script>

<style>
  /*common*/
  .set_button_box {
    box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);;
  }
  .set_button_wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  /*button*/
  .set_button_wrapper .set_button {
    background-color: #fff;
    padding: 15px;
  }
  .set_button_wrapper .set_button .button_tittle {
    font-size: 20px;
    color: #363636;
    margin-bottom: 15px;
  }
  #button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #363636;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 14px;
    height: 32px;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    vertical-align: top;
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    max-width: 100%;
    width: 100%;
  }
  /*recommends*/
  .recommend {
    padding: 10px 0 20px 20px;
    background-color: #dbdbdb;
    color: gray;
    display: none;
  }
  .recommend ul li {
    margin-bottom: 10px;
  }

  /*sub_button*/
  .set_sub_button {
    padding: 15px ;
    background-color: #fff;
    position: absolute;
    top: 120px;
    width: 100%;
    bottom: 0;
  }
  #sub_button_submit {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ff3860;
    border-radius: 3px;
    color: #ff3860;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 14px;
    height: 32px;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    vertical-align: top;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    white-space: nowrap;
  }
  #sub_button_submit:active {
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
  }
  #sub_button_submit:hover {
    background-color: #ff3860;
    border-color: #ff3860;
    color: #fff;
  }
  #sub_button_submit span {
    font-weight: 700;
  }
  .set_sub_button ul {
    margin-top:30px;
    border: 1px solid #ccc ;
    border-bottom: 0px solid #ccc;
  }
  .set_sub_button ul li {
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
  }
  .set_sub_button ul li>div {
    font-size: 12px;
    border-right: 1px solid #ccc;
    padding: 6px 0;
    border-bottom: 1px solid #ccc;
  }
  .set_sub_button ul li>div:first-child {
    width: 30%;
  }
  .set_sub_button ul li>div:nth-child(2) {
    width: 10%;
  }
  .set_sub_button ul li>div:nth-child(3) {
    width: 30%;
  }
  .set_sub_button ul li>div:last-child {
    width: 30%;
    border-right: 0px solid #ccc;
  }
  .set_sub_button .sub_button_type select {
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    border: none;
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
  /*media*/
  @media screen and (max-width:768px ){
    /*recommends*/
    .recommend {
      display: none;
    }
    /*sub_button*/
    .set_sub_button {
      top:120px;
    }
  }
</style>
