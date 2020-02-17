<template>
  <v-app>
    <Navbar/>
    <Alert />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Alert from './components/Alert'

export default {
  name: 'App',
  components: {
    Alert,
    Navbar,
  },
};
</script>
