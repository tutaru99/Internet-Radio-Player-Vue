<template>
  <div>
    <v-container id="wrapper">
      <!-- Player -->
      <v-row no-gutters justify="center">
        <v-col cols="10" md="9" lg="10">
          <AudioPlayer />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AudioPlayer from "./AudioPlayer.vue";
export default {
  components: {
    AudioPlayer,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
