<template>
  <div class="row mt-3 mb-3" >
    <div class="d-flex col justify-content-start align-items-center">
      <span>{{ order.name }}({{ order.size[0] }}) </span>
    </div>
    <div class="d-flex col justify-content-end align-items-center">
      <span>{{ order.price }} $</span>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice: function () {
      return 'hi'
    },
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