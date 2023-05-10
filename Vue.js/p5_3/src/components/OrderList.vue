<template>
  <div class="container">
    <h1>주문 내역</h1>
    <p>
      총 {{totalOrderCount}}건 : {{ totalOrderPrice }} $
    </p>
    <div v-for="order in orderList" :key="order.id">
      <OrderListItem :order="order" />
    </div>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem.vue'
export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount

    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
</style>