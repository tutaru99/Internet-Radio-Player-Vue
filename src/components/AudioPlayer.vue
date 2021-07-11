/* Move Volume to vueX store at some point */
<template>
  <div id="wrapper">
    <v-card-text>
      <v-slider color="purple" thumb-color="purple" track-color="blue" max="1.0" step="0.1" v-model="volume" prepend-icon="mdi-volume-high" @change="volumeController()" ></v-slider>
    </v-card-text>
    <li v-for="station in stations" :key="station.title">
      {{ station.title }}
      <v-btn
        elevation="2"
        fab
        outlined
        color="purple"
        @click="isRadioPlaying(station.src)"
      >
        <v-icon dark v-if="!radioStarted">
          mdi-play
        </v-icon>
        <v-icon dark v-if="radioStarted">
          mdi-pause
        </v-icon>
      </v-btn>
      <v-btn
        elevation="2"
        fab
        outlined
        color="purple"
        @click="isRadioMuted(soundID)"
      >
        <v-icon dark v-if="!radioMuted">
          mdi-volume-variant-off
        </v-icon>
        <v-icon dark v-if="radioMuted">
          mdi-volume-source
        </v-icon>
      </v-btn>
      {{ soundID }}
    </li>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  name: "Lobby",
  data() {
    return {
      radioStarted: false,
      radioMuted: false,
      sound: null,
      soundID: null,
      volume: 1,
      stations: [
        {
          title: "HipHop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
        },
        {
          title: "HipHop Hits 2",
          src: "https://streaming.radio.co/s97881c7e0/listen",
        },
      ],
    };
  },
  methods: {
    isRadioPlaying(stationSrc) {
      if (this.radioStarted === false) {
        this.startRadio(stationSrc);
      } else {
        this.stopRadio();
      }
    },
    /* START Radio */
    startRadio(stationSrc) {
      this.radioStarted = true;
      this.sound = new Howl({
        src: stationSrc,
        html5: true,
      });
      this.sound.play();
      this.soundID = this.sound.play();

      console.log(this.sound.play());
      console.log(stationSrc, "Radio Playing", this.sound);
    },
    /* PAUSE Radio */
    stopRadio() {
      this.radioStarted = false;
      this.sound.unload();
      console.log("Radio Stopped");
    },

    /* MUTE Handler */
    isRadioMuted(soundID) {
      if (this.radioMuted === false) {
        this.muteRadio(soundID);
      } else {
        this.unmuteRadio(soundID);
      }
    },
    /* MUTE Radio  pass .playID */
    muteRadio(soundID) {
      (this.radioMuted = true), this.sound.fade(1.0, 0.0, 1200, soundID);
      console.log("Radio Muted");
    },
    /* UNMUTE Radio */
    unmuteRadio(soundID) {
      (this.radioMuted = false), this.sound.fade(0.0, 1, 1200, soundID);
      console.log("Radio Unmuted");
    },

    /* Volume Slider */
    volumeController() {
      this.sound.volume(this.volume);
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  border: 1px solid purple;
  border-radius: 20px;
  padding: 15px 15px;
}
li {
  list-style-type: none;
}
</style>
