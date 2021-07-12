<template>
  <div id="wrapper">
    <v-container>
      <v-row no-gutters>
        <v-col align-self="center">
          <v-card class="pa-2" outlined tile>
            <h1 class="text-center">Radio Stations</h1>
            <p>
              Sort, Search // if possible display current song, mb tags for
              stations
            </p>
          </v-card>
          <!-- Player -->
          <h1 class="text-center">Radio Player</h1>
          <div id="player">
            <AudioPlayer />
          </div>
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
