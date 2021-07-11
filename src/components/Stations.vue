<template>
  <div id="wrapper">
    <v-container>
      <v-row no-gutters>
        <v-col align-self="center">
          <v-card class="pa-2" outlined tile>
            <h1 class="text-center">Radio Stations</h1>
            <p>Sort, Search // if possible display current song</p>
            <p>
              Buttons: Play, Pause, Adjust Sound Level, Next/Previous Station
            </p>
          </v-card>
          <!-- Plater -->
          <h2>Audio Player</h2>
          <div>
            <AudioPlayer :sources="audioSources" :loop="true"></AudioPlayer>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AudioPlayer from "./AudioPlayer.vue";
import VueHowler from "vue-howler";
export default {
  components: {
    AudioPlayer,
  },

  data() {
    return {
      audioSources: ["assets/audio/okawari.mp3", "assets/audio/teddy.mp3"],
    };
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  background-color: rgb(190, 170, 170);
}
</style>
