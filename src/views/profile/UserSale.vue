<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div class="proutos-wrapper" v-for="(venda, index) in vendas" :key="index">
        <product-item v-if="venda.produto" :produto="venda.produto">
          <p class="vendedor"><span>Comprador</span> {{venda.comprador_id}}</p>
        </product-item>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco_id">
            <li v-for="(value, key) in venda.endereco_id" :key="key">
              {{key}}: {{value}}
            </li>
          </ul>
        </div>

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
      vendas: null
    }
  },
  computed: {
    ...mapState(['user', 'isLoggedIn'])
  },
  methods: {
    getVendas() {
      api.get(`/transacao?vendedor_id=${this.user.id}`).then(response => {
        this.vendas = response.data;
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
      this.getVendas();
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

.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom:60px;
}

h2 {
  margin-bottom: 25px;
}

h3 {
  margin: 0px;
  justify-self: end;
}
</style>