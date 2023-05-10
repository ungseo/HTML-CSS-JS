<template>
  <div class="row mt-3 mb-3" :class="{'bg-success text-white': size.selected}">
    <div class="d-flex col justify-content-start align-items-center">
      <span>{{ size.name }}</span>
    </div>
    <div class="d-flex col justify-content-end align-items-center">
      <span>+ {{ size.price }}$</span>
    </div>    
  </div>

</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
}
</script>

<style scoped>
.row {
  border-radius: 5px;
  border: solid black 1px;
  height: 50px;
}
</style>