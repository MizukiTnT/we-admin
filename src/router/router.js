/**
 * Created by Administrator on 2017/9/28.
 */
import Vue from 'vue'
import Router from 'vue-router'
import autoReply from 'components/container/autoReply'
import setMenu from 'components/container/setMenu'
import replyApp from 'components/container/reply-app'
import replyPic from 'components/container/reply-pic'
import replyText from 'components/container/reply-text'
import welcome from 'components/welcome/welcome'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path:'/index',
      component:welcome,
      name:'welcome'
    },
    {
      name:'reply',
      path:'/reply',
      component:autoReply,
      children:[
        {
          path:'/text',
          component:replyText
        },
        {
          path:'/pic',
          component:replyPic
        },
        {
          path:'/app',
          component:replyApp
        }
      ]
    },
    {
      name:'menu',
      path:'/menu',
      component:setMenu
    }
  ]
})
