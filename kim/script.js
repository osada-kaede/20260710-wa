Vue.createApp({
  data() {
    return {
	    key:"",
        code:"",
        ctrl:false,
        shift:false,
        alt:false,
    };
  },
  methods:{
    showKey(e){
        this.key = e.key;
        this.code = e.code;

        this.ctrl = e.ctrlKey;
        this.shift = e.shiftKey;
        this.alt = e.altKey;
    }
  }
}).mount("#app");