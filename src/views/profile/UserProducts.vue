<template>
<section>
  <h2>Adicionar Produto</h2>
  <add-product/>
  <h2>Seus Produtos</h2>
  <transition-group v-if="user_products" name="list" tag="ul">
    <li v-for="(product, index) in user_products" :key="index">
      <product-item :produto="product">
        <p>{{product.descricao}}</p>
      </product-item>
    </li>

  </transition-group>
  {{user_products}}
</section>
</template>

<script>
import AddProduct from "@/components/AddProduct.vue";
import ProductItem from "@/components/ProductItem.vue";
import {mapState, mapActions} from 'vuex';

export default {
    name: "userproducts",
    components: {
      AddProduct,
      ProductItem
    },
    computed: {
      ...mapState(["isLoggedIn", "user", "user_products"])
    },
    methods: {
      ...mapActions(["getUserProducts"])
    },
    watch: {
      isLoggedIn() {
        this.getUserProducts();
      }
    },
    created () {
      if(this.isLoggedIn) {
        this.getUserProducts();
      }
    }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

</style>