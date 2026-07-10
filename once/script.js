Vue.createApp({
  data() {
    return {
	    gift: "🎁",
        message: "プレゼントがあります。"
    };
  },
  methods: {
    openGift() {
       this.gift = "🎉";
       this.message = "プレゼントを開けました！";
    }
  }
}).mount("#app");