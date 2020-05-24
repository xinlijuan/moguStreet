export default{
   // 异步操作 对上面内容进行增减操作
   addCart(context,payload){
    let oldCartInfo = context.state.cartList.find((item)=>item.iid==payload.iid)
    if(oldCartInfo){
      context.commit('addCount',oldCartInfo)
    }else{
      // payload.count = 1
      context.commit('addToCart',payload)
    }
  }
}