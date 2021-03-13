<template>
<section>
  <user-form>
    <button class="btn" @click.prevent="atualizarUsuario">Atualizar usuário</button>
  </user-form>
</section>
</template>

<script>
import UserForm from '../../components/UserForm.vue';
import {api} from '@/services.js';

export default {
  name: 'UserUpdate',
  components: { UserForm },
  methods: {
    atualizarUsuario() {
      api.put(`/usuario/${this.$store.state.user.id}`, this.$store.state.user).then(() => {
        this.$store.dispatch("getUsuario", this.$store.state.user.id);
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>

<style>

</style>