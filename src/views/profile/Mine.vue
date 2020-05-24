<template>
  <div>
    <navbar>
      <div slot="center">
        <input type="text" placeholder="购物街">
      </div>
      <div slot="right">
        <img src="../../assets/img/mine/refresh.png"  class='right-img' alt="">
      </div>
    </navbar>
    <!-- 商城 -->
    <div class="store">
      <p class='center-p'>商城</p>
      <div class="sign">
        <div class="sign-left">
          <img src="../../assets/img/mine/mine.png" alt />
          <div class="p">
            <p>登录/注册</p>
            <div class="detail-img">
              <img src="../../assets/img/mine/phone.png" alt />
              <p>暂无绑定手机号</p>
            </div>
          </div>
        </div>
        <div class="sign-right">&gt;</div>
      </div>
    </div>
    <!-- 我的详情 -->
    <ul class="ul1">
      <li class="border-right">
        <span>0.00</span>
        <span>元</span>
        <p>我的余额</p>
      </li>
      <li class="border-right">
        <span>0</span>
        <span>个</span>
        <p>我的优惠</p>
      </li>
      <li>
        <span>0</span>
        <span>分</span>
        <p>我的积分</p>
      </li>
    </ul>
    <!-- 我的明细 -->
    <ul class="ul2">
      <li class="color-g"></li>
      <li>我的信息</li>
      <li>积分商城</li>
      <li>会员卡</li>
      <li class="color-g"></li>
      <li>我的购物车</li>
      <li>下载购物APP</li>
    </ul>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar";
export default {
  name: "mine",
  components: {
    navbar
  }
};
</script>

<style scoped>
input{
  width: 100%;
  border-radius:5px;
  padding: 5px;
  font-size: 14px;
}
.right-img{
  position: relative;
  right: -13px;
  top: 6px;
 width: 30px;
}
.center-p{
  text-align: center;
}
.store {
  background: #f88694;
  color: whitesmoke;
  padding-top:10px;
}
.sign {
  display: flex;
  line-height: 30px;
  padding: 15px;
}
.sign-left {
  width: 90%;
}
.sign-left img,
.p {
  float: left;
}
p:first-child {
  padding: 0 10px;
}
p:last-child {
  font-size: 14px;
  line-height: 30px;
}
.sign-right {
  flex: 1;
  font-size: 28px;
  line-height: 65px;
}
.detail-img {
  width: 200px;
}

/* 我的详情 */
.ul1 {
  display: flex;
  text-align: center;
}
.ul1 li {
  flex: 1;
  padding: 15px;
}
.ul1 li span:first-child {
  color: orangered;
  font-size: 26px;
}
.border-right {
  border-right: 1px solid gainsboro;
}
/* 我的明细 */
.color-g {
  background: gainsboro;
  width: 100%;
  height: 13px;
  border: none;
}
.ul2 li {
  padding: 10px;
  border-bottom: 1px gainsboro solid;
  font-size: 16px;
}
</style>