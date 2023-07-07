const app = Vue.createApp({
  data() {
    return {
      cartItem: [
        {
          id: 1,
          name: "燃燒戒指",
          desc: "燃燒自己生命",
          link: "./img/burner.png",
          price: 3000,
          stock: 5,
          count: 1,
        },

        {
          id: 2,
          name: "輪迴碑石",
          desc: "輪迴刷首抽",
          link: "./img/trans.jpg",
          price: 25000,
          stock: 5,
          count: 1,
        },

        {
          id: 3,
          name: "天上氣息",
          desc: "此曲只應天上有",
          link: "./img/heaven.png",
          price: 2000,
          stock: 5,
          count: 1,
        },
      ],
    };
  },

  computed: {
    totalPrice() {
      if (this.cartItem.length === 0) return 0;
      //慧芳老師寫的
      let total = 0;
      for (let index = 0; index < this.cartItem.length; index++) {
        const itemPrice =
          this.cartItem[index]["price"] * this.cartItem[index]["count"];
        total += itemPrice;
      }

      return total;
    },
  },

  methods: {
    reduceItem(index) {
      //禁止購物車數量<0
      if (this.cartItem[index]["count"] == 0) return;
      this.cartItem[index]["count"] -= 1;
    },
    addItem(index) {
      //禁止購物車數量>商品庫存數量
      if (this.cartItem[index]["count"] === this.cartItem[index]["stock"])
        return;
      this.cartItem[index]["count"] += 1;
    },
    removeCart(index) {
      this.cartItem.splice(index, 1);
    },
  },
});

app.mount("#app");
