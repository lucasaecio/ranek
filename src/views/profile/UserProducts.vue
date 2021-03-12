<template>
<section>
  <h2>Adicionar Produto</h2>
  <add-product/>
  <h2>Seus Produtos</h2>
  <transition-group v-if="user_products" name="list" tag="ul">
    <li v-for="(product, index) in user_products" :key="index">
      <product-item :produto="product">
        <p>{{product.descricao}}</p>
        <button class="deletar" @click="deletarProduto(product.id)"></button>
      </product-item>
    </li>

  </transition-group>
</section>
</template>

<script>
import AddProduct from "@/components/AddProduct.vue";
import ProductItem from "@/components/ProductItem.vue";
import {mapState, mapActions} from 'vuex';

import { api } from '@/services.js';

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
      ...mapActions(["getUserProducts"]),
      deletarProduto(id) {
        const confirmar = window.confirm("Deseja remover este produto?");

        if(confirmar) {
          api.delete(`/produto/${id}`).then(()=> {
            this.getUserProducts()
          });

        }
      }
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

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all .3s;
}

.deletar {
  position: absolute;
  top: 0;
  right: 0;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>