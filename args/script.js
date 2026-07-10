Vue.createApp({
  data() {
    return {
      message: 'チケットを選択してください',
      total: 0
    };
  },
  methods: {
    buyTicket(type, price, quantity) {
      this.total = price * quantity;

      this.message =
        `${type}チケットを${quantity}枚購入しました。`;
    }
  }
}).mount('#app');