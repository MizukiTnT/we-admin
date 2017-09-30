<template>
  <div id="app" class="wrapper">
    <top></top>
    <side></side>
  </div>
</template>

<script>
import Top from './components/header/header'
import Side from './components/aside/aside'
export default {
  components: {
    Top,
    Side
  }
}
</script>

<style>
  body,input,ul,li,span,ol,img,form,div,header,aside {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  div {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
  }
  body,html {
    width: 100%;
    height: 100%;
  }
  .wrapper{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size:0;
  }
  /*header*/
  header {
    height:70px;
    color:#28374b;
    background-color:#fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
    display: flex;
    line-height: 70px;
    padding: 0 40px 0 20px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  header>div {
    width: 50%;
  }
  header>.header_name {
    font-size: 23px;
    font-weight: 700;
    width: 50%;
  }
  header>.header_username {
    text-align: right;
    font-size: 18px;
  }
  /*aside*/
  aside {
    padding: 20px 0 0 10px;
    width: 200px;
    position:absolute;
    left: 0;
    top: 70px;
    height: 100%;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);;
    z-index: 99;
  }
  aside ul li {
    padding: 10px 10px 0 0 ;
    color: #4a4a4a;
  }
  aside ul li .text {
    cursor: pointer;
    color: #4a4a4a;
    padding: 10px 5px;
    border-radius: 5px;
    display: block;
  }
  aside ul li .text:hover {
    background-color: #f5f5f5;
    color: #00d1b2;
  }
  .menu_1 .text {
    width: 90%;
  }
  aside ul li .text i {
    position: relative;
    top: 6px;
    float: right;
    display: inline-block;
    width: 10px;
    height: 7px;
    background-image: url("assets/menu-down.png");
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    -webkit-background-size:contain;
    background-size:contain;
    background-repeat:no-repeat;
    -webkit-transition: all .4s;
    -moz-transition: all .4s;
    -ms-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s;
  }
  .menu_1 {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0 5px 10px;
    display: none;
  }
  .menu_1 a {
    display: block;
    margin-top: 5px;
    width: 100%;
  }
  .rotate {
    -webkit-transform: rotateZ(180deg) !important;
    -moz-transform: rotateZ(180deg) !important;
    -ms-transform: rotateZ(180deg) !important;
    -o-transform: rotateZ(180deg) !important;
    transform: rotateZ(180deg) !important;
  }
  .bgc {
    background-color: #00d1b2 !important;
  }
  .color_white {
    color: white !important;
  }
  /*container*/
  .container {
    background-color: #f5f5f5;
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    height: 100%;
    padding: 25px ;
  }
.em {
  font-weight: 600 !important;
}

  /*移动端*/
  @media screen and (max-width:768px ){
    div {
      font-size: 12px;
    }
    /*header*/
    .header_name {
      font-size: 18px !important;
    }
    .header_username {
      font-size: 15px !important;
    }
    /*aside*/
    aside {
      width: 30% !important;
    }
    /*container*/
    .container {
      left: 30% !important;
    }
    /*wrapper*/
    .wrapper {
      min-width: 336px;
    }
  }
</style>
