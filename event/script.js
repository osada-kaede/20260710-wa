Vue.createApp({
  methods:{
    showEvent(event){
        // console.log(event);
        // console.log(event.type);
        // console.log(event.target);
    },
    
  showMessage(message, event) {
    console.log(message);
    console.log(event.target);
    }
  }
}).mount("#app");