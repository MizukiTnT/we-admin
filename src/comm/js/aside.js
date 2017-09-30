/**
 * Created by Administrator on 2017/9/26.
 */

// 动效
export function asideTransiton() {
  jq(function () {
    jq('aside ul li>.text').click(function () {
      if(jq(this).siblings()[0]) {
        jq(this).find('i').toggleClass('rotate')
        jq(this).siblings().slideToggle(400)
      }
    })


    toggleClass('.text','bgc')
    toggleClass('.text','color_white')

//toggleClass
    function toggleClass(dom,className) {
      jq(dom).click(function () {
        jq(dom).removeClass(className)
        jq(this).addClass(className)
      })
    }
  })
}
