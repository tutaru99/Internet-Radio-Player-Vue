<template>
  <div id="mainwrapper">
    <v-row no-gutters justify="center">
      <v-col cols="12" xs="12" sm="12" md="12" lg="11">
        <v-btn to="/">
          Internet Radio Player
        </v-btn>
        <LocalSongs />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LocalSongs from "../components/LocalSongs.vue";

export default Vue.extend({
  name: "Home",

  components: {
    LocalSongs,
  },
});
</script>

<style scoped></style>
