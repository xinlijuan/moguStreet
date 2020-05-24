// 返回顶部公共插件
import BackTop from '../components/content/backTop/BackTop'
export let backTopMixin = {
  data() {
    return {
      isShowTop: false
    }
  },

  methods: {
    backTop() {
      this.$refs.scroll.bs.scrollTo(0, 0, 2000);
    },
    getBackTopShow(position) {
       this.isShowTop = position.y < -800; 
    }
  },
  components: {
    BackTop
  }
}