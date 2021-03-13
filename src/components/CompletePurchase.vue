<template>
<section>
    <h2>Endereço de Envio</h2>
    <user-form>
        <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </user-form>
</section>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { api } from '@/services.js'
import {mapState} from 'vuex'

export default {
    name: "CompletePurchase",
    components: { UserForm },
    props: ["produto"],
    computed: {
        ...mapState(["user"]),
        compra() {
            return {
                comprador_id: this.user.email,
                vendedor_id: this.produto.usuario_id,
                produto: this.produto,
                endereco_id: { 
                    cep: this.user.cep,
                    rua: this.user.rua,
                    numero: this.user.numero,
                    bairro: this.user.bairro,
                    cidade: this.user.cidade,
                    estado: this.user.estado,
                }

            }
        }
    },
    methods: {
        criarTransacao() {
            return api.post("/transacao", this.compra).then(() => {
                this.$router.push({name: "user-purchase"})
            })
        },
        async criarUsuario() {
            try {
                await this.$store.dispatch("setUsuario", this.$store.state.user);
                await this.$store.dispatch("getUsuario", this.$store.state.user.email);

                await this.criarTransacao();
            } catch(error) {
                console.log(error)
            }
        },
        finalizarCompra() {
            if(this.$store.state.isLoggedIn) {

                this.criarTransacao();
            } else {
                this.criarUsuario()
            }
        }
    }

}
</script>

<style scoped>
h2 {
    margin-top: 40px;
    margin-bottom: 20px;
}

.btn {
    background: #e80;
}
</style>