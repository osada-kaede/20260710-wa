Vue.createApp({
  data() {
    return {
	    x:0,
        y:0,
        showPoint:false,
        message:"まだクリックされていません。"
    }
  },
  methods:{
    showPosition(e){
        this.x = e.offsetX;
        this.y = e.offsetY;

        this.showPoint = true;

        this.message=`(X:${this.x},Y:${this.y}をクリックしました。)`
    }
  }
}).mount("#app");