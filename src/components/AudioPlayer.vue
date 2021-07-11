/* Move Volume to vueX store at some point */
<template>
  <div id="wrapper">
    <v-row align="center"  class="d-flex">
      <v-col cols="9" sm="10" md="11" xs="9">
        <v-slider
          color="purple"
          thumb-color="purple"
          track-color="blue"
          max="1.0"
          step="0.1"
          v-model="volume"
          prepend-icon="mdi-volume-high"
          @change="volumeController()"
          @click:prepend="isRadioMuted(soundID)"
        ></v-slider>
      </v-col>
      <v-col cols="3" sm="2" md="1" xs="3">
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
      </v-col>
    </v-row>
    <li v-for="station in stations" :key="station.id">
      <v-row>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <h1 class="text-center">{{ station.title }} {{ soundID }}</h1>
            <v-row no-gutters justify="space-between">
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
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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
      volume: .4,
      stations: [
        {
          title: "Anison.FM",
          src: "https://pool.anison.fm:9000/AniSonFM(320)",
        },
        {
          title: "Hip-Hop Hits",
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

      console.log(this.soundID);
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
    muteRadio() {
      (this.radioMuted = true), this.sound.fade(this.volume, 0.0, 1200);
      console.log("Radio Muted");
    },
    /* UNMUTE Radio */
    unmuteRadio() {
      (this.radioMuted = false), this.sound.fade(0.0, this.volume, 1200);
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
