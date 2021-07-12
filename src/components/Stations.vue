<template>
  <div id="wrapper">
    <v-container>
      <v-row no-gutters>
        <v-col align-self="center">
          <!-- Player -->
          <v-row no-gutters d-flex justify="center">
            <v-col cols="8" lg="6">
              <div id="player">
                <AudioPlayer />
              </div>
            </v-col>
          </v-row>
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
#player {
  background-color: black;
  border-radius: 15px;
}
</style>
