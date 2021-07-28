<template>
  <div >
    <v-container id="wrapper">
      <!-- Player -->
      <v-row no-gutters justify="center">
        <v-col cols="12" xs="12" sm="12" md="12" lg="11">
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

<style scoped>
*{
  padding: 0;
}
</style>
