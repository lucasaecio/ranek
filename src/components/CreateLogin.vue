<template>
<section>
    <h2>Crie sua conta</h2>
    <transition mode="out-in">
        <button v-if="!criar" class="btn" @click="criar = true"> Criar Conta</button>
        <user-form v-else>
            <button class="btn btn-form" @click.prevent="criarUsuario">Criar Usuário</button>
        </user-form>
    </transition>
</section>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
    name: 'CreateLogin',
    components: { UserForm },
    data () {
        return {
            criar: false
        }
    },
    methods: {
        async criarUsuario() {
            try {
                await this.$store.dispatch("setUsuario", this.$store.state.user);
                await this.$store.dispatch("getUsuario", this.$store.state.user.email);
                this.$router.push({name: 'user'})
            } catch(error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
}

.btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.btn-form {
    max-width: 100%;
}
</style>