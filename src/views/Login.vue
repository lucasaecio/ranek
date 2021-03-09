<template>
<section class="login">
  <h1>Login</h1>
  <form>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="login.email">
    
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="login.password">

    <button class="btn" @click.prevent="logar">Logar</button>
  </form>

  <p class="retrieve-password">
    <a href="#" target="_blank">Esqueceu sua senha?</a>
  </p>

  <create-login/>
</section>
</template>

<script>
import CreateLogin from '@/components/CreateLogin.vue';

export default {
    name: "login",
    components: { CreateLogin },
    data() {
      return {
        login: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      logar() {
        this.$store.dispatch("getUsuario", this.login.email)
        this.$router.push({name: 'user'})

      }
    }
}
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.retrieve-password {
  text-align: center;
  margin: 20px auto 0 auto;
}

.retrieve-password a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>