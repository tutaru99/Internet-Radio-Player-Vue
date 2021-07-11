<template>
  <div>
    <v-img
      :src="require('../assets/logo.svg')"
      class="my-3"
      contain
      height="150"
    />
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
