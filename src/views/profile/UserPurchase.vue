<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div class="proutos-wrapper" v-for="(compra, index) in compras" :key="index">
        <product-item v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor"><span>Vendedor</span> {{compra.vendedor_id}}</p>
        </product-item>

      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import {mapState} from 'vuex'
import {api} from '@/services.js'

export default {
  components: { 
    ProductItem
  },
  data() {
    return {
      compras: null
    }
  },
  computed: {
    ...mapState(['user', 'isLoggedIn'])
  },
  methods: {
    getCompras() {
      api.get(`/transacao?comprador_id=${this.user.id}`).then(response => {
        this.compras = response.data;
      })
    }
  },
  watch: {
    isLoggedIn() {
      this.getUserProducts();
    }
  },
  created () {
    if(this.isLoggedIn) {
      this.getCompras();
    }
  }
}
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}

h2 {
  margin-bottom: 25px;
}
</style>