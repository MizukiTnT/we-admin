<template>
    <div class="pic-text">
      <div class="tit-box">
        <input id="tit" type="text" @input="log()" v-model="params.tit" placeholder="标题">
      </div>
      <div class="log-box">
        <input id="log" type="text" v-model="params.log" placeholder="摘要">
      </div>
      <div id="wang-editor">

      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  var E = require(wangeditor)
  var editor = new E('#editor')
  editor.create()
 export default {
   data() {
     return {
        params: {
          tit: '',
          log:''
        }
     }
   },
   methods: {
      log(){
        console.log(this.params.tit);
      }
   }
 }
</script>

<style scoped>
  .pic-text {
    margin-top: 30px;
  }
  #tit{
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-flex-align: center;
    -webkit-box-align: center;
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
    -webkit-box-pack: start;
    justify-content: flex-start;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    vertical-align: top;
    -webkit-box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    max-width: 100%;
    width: 100%;
  }
  #log {
    width: 100%;
    margin-top: 10px;
    height: 70px;
    -webkit-box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #363636;
    padding-left: 10px;
  }
</style>
