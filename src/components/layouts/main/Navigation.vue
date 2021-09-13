<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
#nav {
  background: #eee;
  padding: 10px;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  text-decoration: none;
  position: relative;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  color: #2c3e50;
  padding: 10px 15px;
  margin: 10px;
  background-color: lightslategray;
  border-radius: 4px;
  border: 1px solid #2c3e50;
  box-shadow: 0 4px #2c3e50;
}

#nav a.router-link-exact-active {
  background-color: #42b983;
}

#nav a:hover {
  background-color: #42b983;
  box-shadow: 0 0px #2c3e50;
  transform: translateY(4px);
}

</style>