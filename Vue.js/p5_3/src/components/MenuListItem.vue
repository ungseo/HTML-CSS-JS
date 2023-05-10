<template>
<div class="row mt-3 mb-3" :class="{'bg-success text-white': menu.selected}" >
    <div class="col d-flex justify-content-start p-0">
      <img :src="menu.image" alt="사진">
    </div>
    <div class="col  d-flex align-items-center justify-content-center">
      <span>{{menu.title}}</span>
    </div>
    <div class="col  d-flex align-items-center justify-content-end">
      <span>{{menu.price}} $</span>
    </div>
 </div>   
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border-right: solid black 1px;
}

.row {
  border-radius: 5px;
  border: solid 1px black;
}
</style>