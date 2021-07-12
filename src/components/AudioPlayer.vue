/* Move Volume to vueX store at some point */
<template>
  <div id="wrapper">
    <v-row align="center" class="d-flex">
      <v-col cols="9" sm="10" md="11" xs="9">
        <v-slider
          color="purple"
          thumb-color="purple"
          track-color="blue"
          max="1.0"
          step="0.1"
          v-model="volume"
          :prepend-icon="
            !radioMuted ? 'mdi-volume-high' : 'mdi-volume-variant-off'
          "
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
          <v-icon dark v-if="radioMuted">
            mdi-volume-variant-off
          </v-icon>
          <v-icon dark v-if="!radioMuted">
            mdi-volume-source
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <li v-for="(station, index) in stations" :key="index">
      <v-row>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <h1 class="text-center">{{ station.title }}</h1>
            <v-row no-gutters>
              <v-btn
                elevation="2"
                fab
                outlined
                color="purple"
                @click="isRadioPlaying(station.src, station.playing, index)"
              >
                <v-icon dark v-if="!station.playing">
                  mdi-play
                </v-icon>
                <v-icon dark v-if="station.playing">
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
      volume: 0.6,
      stations: [
        {
          title: "Anison.FM",
          src: "https://pool.anison.fm:9000/AniSonFM(320)",
          playing: false,
        },
        {
          title: "Hip-Hop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
          playing: false,
        },
      ],
    };
  },
  methods: {
    isRadioPlaying(stationSrc, playing, index) {
      if (playing === false) {
        this.startRadio(stationSrc, index);
      } else {
        this.stopRadio(index);
      }
    },
    /* START Radio */
    startRadio(stationSrc, index) {
      this.stations[index].playing = true;
      this.sound = new Howl({
        src: stationSrc,
        html5: true,
        volume: this.volume,
      });
      this.sound.play();
      Howler.volume(this.volume);
      this.soundID = this.sound.play();

      console.log(this.soundID);
      console.log(stationSrc, "Radio Playing", this.sound);
    },
    /* PAUSE Radio */
    stopRadio(index) {
      this.stations[index].playing = false;
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
