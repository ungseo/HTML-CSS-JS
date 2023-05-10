<template>
  <div id="app">
    <h1 style="text-align: center"><b>Coffee Order App</b></h1>
    <br><br>
    <div class="appcont container">
      <div class="row justify-content-evenly">

        <div class="col-5 d-flex align-items-center justify-content-center appscont">
          <MenuList/>
        </div>

        <div class="col-5  d-flex  justify-content-center appscont">
          <SizeList/>
        </div>

      </div>
      <div class="row justify-content-center">
        <button class="col-10 bg-success text-white orderbtn" @click="addOrder">장바구니 담기</button>
      </div>

      <div>
        <div class="col d-flex align-items-center justify-content-center">
          <OrderList/>
        </div>

      </div>

    </div>
    
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue'
import SizeList from './components/SizeList.vue'
import OrderList from './components/OrderList.vue'
export default {
  name: 'App',
  data() {
    return {
      aa: false,
    }
  },
  components: {
    MenuList,
    SizeList,
    OrderList,
  },
  methods: {
    addOrder() {
      const menu = this.selectedMenu
      const size = this.selectedSize
    
      if (menu == null || size == null) {
        alert("주문하실 음료를 확인해주세요.")
      } else {
        const selectedMenu = {
        name: menu.title,
        size: size.name,
        price: menu.price + size.price,

      }
      this.$store.dispatch('addOrder', selectedMenu)

      }
    },
    
  },
  computed: {
    selectedMenu() {
      // console.log(this.$store.getters.selectedMenu)
      return this.$store.getters.selectedMenu
    },
    selectedSize() {
      // console.log(this.$store.getters.selectedSize)
      return this.$store.getters.selectedSize
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

.appscont {
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 30px;
}
.orderbtn {
  border-radius: 10px;
  height: 40px;
  margin-bottom: 30px;
}

.appcont {
  background-color: rgb(236, 244, 251);
  border-radius: 10px;
}
</style>
