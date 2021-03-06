<template>
<div id="app">
  <theHeader/>
  <main id="main">
    <router-view/>
  </main>
  <theFooter/>
</div>
</template>

<script>
import theHeader from '@/components/theHeader.vue'
import theFooter from '@/components/theFooter.vue'

export default {
  components: {
    theHeader,
    theFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: 'Nunito', Arial, Helvetica, sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: 'Nunito', Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}

input, textarea {
  border: 1px solid white;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  font-size: 1rem;
  font-family: Helvetica, Arial,  sans-serif;
}

input:hover, textarea:hover,
input:focus, textarea:focus {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
  outline: none;
}
</style>
