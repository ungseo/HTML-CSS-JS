import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: 'Americano',
        price: 3000,
        selected: false, //초기값
        image: 'https://source.unsplash.com/featured/?americano',
      },
      {
        title: 'Cafelatte',
        price: 3500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?cafelatte',
      },
      {
        title: 'Cappuccino', 
        price: 5800,
        selected: false,
        image: 'https://source.unsplash.com/featured/?cappuccino',
      },
      {
        title: 'Coolmint',
        price: 5500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?choco',
      },
      {
        title: 'Kamille',
        price: 3500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?kamille',
      },

    ],
    sizeList: [
      {
        name: 'Short',
        price: 0,
        selected: false,
      },
      {
        name: 'Tall',
        price: 300,
        selected: false,
      },
      {
        name: 'Grande',
        price: 500,
        selected: false,
      },
      {
        name: 'Venti',
        price: 800,
        selected: false,
      },
    ],

  },
  getters: {
    selectedMenu(state) {
      let menu = null
      state.menuList.forEach(ele => {
        if (ele.selected) {
          menu = ele
        }
      })
      return menu
    },
    selectedSize(state) {
      let size = null
      state.sizeList.forEach(ele => {
        if (ele.selected) {
          size = ele
        }
      })
      return size
    },
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      const totalPrice = state.orderList.reduce((acc, ele) => {
        return acc + ele.price
      }, 0)
      return totalPrice
    }
  },
  mutations: {
    addOrder: function (state, selectedMenu) {
      state.orderList.push(selectedMenu);
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList.forEach(ele => {
        if (ele === selectedMenu) {
          ele.selected = !selectedMenu.selected
          if (ele.selected === false) {
            state.sizeList.forEach(ele1 => {
              ele1.selected = false
            })
          }
        }
        else {
          ele.selected = false
        }

      })
    },
    
    updateSizeList: function (state, selectedSize) {
      state.sizeList.forEach(ele => {
        if (ele === selectedSize) {
          ele.selected = !selectedSize.selected
        }
        else {
          ele.selected = false
        }
      })
    },
  },
  actions: {
    updateMenuList(context, selectedMenu) {
      context.commit('updateMenuList', selectedMenu);
  },
    updateSizeList(context, selectedSize) {
      context.commit('updateSizeList', selectedSize);
  },
    addOrder(context, menu) {
      context.commit('addOrder', menu)

  },
},
  modules: {
  }
})