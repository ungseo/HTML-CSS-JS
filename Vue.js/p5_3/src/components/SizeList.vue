<template>
  <div class="size-list container" v-show="menuValid">
  <br>
    <h2><b>2. 사이즈를 고르세요.</b></h2>
    <div v-for="size in sizeList" :key="size.id" @click="selectSize(size)">
      <SizeListItem :size="size" />
    </div>
  <br>
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem.vue'
export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  data() {
    return {
      selectedMenu: false
    }
  },
  methods: {
    onSelectMenu: function () {},
    selectSize(size) {
      this.$store.dispatch('updateSizeList', size)
    },

  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList;
    },
    menuValid: function (){
      let count = 0
      this.$store.state.menuList.forEach(ele => {
        if (ele.selected === true) {
          count = 1
        }
      }) 
      if (count ===1){
        return true
      }
      else {
        return false
      }
      
    },
  },
}
</script>

<style>
</style>