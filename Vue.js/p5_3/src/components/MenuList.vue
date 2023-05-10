<template>
  <div class="menu-list container">
    <br>
    <h2><b>1. 음료를 고르세요.</b></h2>
    <div v-for="menu in menuList" :key="menu.id" @click="updateMenuList(menu)">
      <MenuListItem :menu="menu" />
    </div>
  <br>

  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem.vue'
export default {
  name: 'MenuList',
  data() {
    return{
    }
  },
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList;
    },
  },
  methods: {
    updateMenuList: function (menu) {
      this.$store.dispatch('updateMenuList', menu)
    },
  },
}
</script>

<style>

</style>