<template>
  <div>
    <v-row no-gutters justify="center">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12">
        <AudioPlayer />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AudioPlayer from "../components/AudioPlayer.vue";

export default Vue.extend({
  name: "Home",

  components: {
    AudioPlayer,
  },
});
</script>

<style scoped></style>
