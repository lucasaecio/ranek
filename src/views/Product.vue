<template>
<section>
  <div v-if="produto" class="produto">
    <ul class="fotos" v-if="produto.fotos">
      <li v-for="foto, key in produto.fotos" :key="key">
        <img :src="foto.src" :alt="foto.titulo">
      </li>
    </ul>
    <div class="info">
      <h1>{{produto.nome}}</h1>
      <p class="preco">{{ valueToMoney }}</p>
      <p class="descricao">{{produto.descricao}}</p>
      <button class="btn" v-if="produto.vendido === 'false'">Comprar</button>
      <button class="btn" v-else disabled>Vendido</button>
    </div>
  </div>
  <loading-page v-else/>
</section>
</template>

<script>
import LoadingPage from '../components/LoadingPage.vue'
import {api} from "@/services.js"

export default {
    name: "Produtos",
    components: {
        LoadingPage
    },
    props: ["id"],
    data() {
      return {
        produto: null
      }
    },
    methods: {
      getProduto() {
        api.get(`/produto/${this.id}`).then(response => {
          this.produto = response.data
        })
      }
    },
    computed: {
      valueToMoney() {
        let value = Number(this.produto.preco);

        if(!isNaN(value)) {
          return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          });
        } else {
          return "";
        }
      }
    },
    created() {
      this.getProduto();
    }

}
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>