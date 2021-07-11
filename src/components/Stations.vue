<template>
  <div id="wrapper">
    <v-container>
      <v-row no-gutters>
        <v-col align-self="center">
          <v-card class="pa-2" outlined tile>
            <h1 class="text-center">Radio Stations</h1>
            <p>Done: Play/Stop, Mute/Unmute</p>
            <p>Sort, Search // if possible display current song</p>
            <p>
              Buttons: Adjust Sound Level, Next/Previous Station
            </p>
          </v-card>
          <!-- Plater -->
          <h1 class="text-center">Radio Player</h1>
          <div>
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
    return {

    };
  },
};
</script>
