<template>
  <div id="mainwrapper">
    <v-btn to="MusicPlayer">
      Audio Visualizer
    </v-btn>
    <Stations />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Stations from "../components/Stations.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Stations,
  },
});
</script>

<style scoped></style>
