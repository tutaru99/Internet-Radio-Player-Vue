/* Move Volume to vueX store at some point */
<template>
  <div>
    <v-col cols="12">
      <v-row class="mt-5" id="Stationswrapper">
        <v-col  id="AudioPlayerWrapper" cols="12" md="3" lg="4">
          <div>
            <h2 style="color: white;">Current Radio Card with random info</h2>
          </div>
        </v-col>
       
        <v-col>
          <li v-for="(station, index) in stations" :key="index">
            <v-row>
              <v-col>
           
                  <h2>{{ station.title }}</h2>
                  <v-row id="information" no-gutters d-flex>
                    <v-btn
                      elevation="2"
                      fab
                      outlined
                      color="purple"
                      @click="
                        isRadioPlaying(
                          station.src,
                          station.playing,
                          soundID,
                          index
                        )
                      "
                    >
                      <v-icon dark v-if="!station.playing">
                        mdi-play
                      </v-icon>
                      <v-icon dark v-if="station.playing">
                        mdi-pause
                      </v-icon>
                    </v-btn>
                    <h3 class="ml-2">Genres:</h3>
                    <h3 class="ml-5">Currently Playing:</h3>
                  </v-row>
              </v-col>
            </v-row>
          </li>
        </v-col>
      </v-row>
      <v-col cols="12"> </v-col>
      <v-row align="center" class="d-flex">
        <v-col cols="9" sm="10" md="10" xs="11">
          <v-slider
            :color="!radioMuted ? 'purple' : 'purple'"
            thumb-color="purple"
            :track-color="!radioMuted ? 'blue' : 'red darken-2'"
            max="1.0"
            step="0.05"
            v-model="volume"
            :prepend-icon="
              !radioMuted ? 'mdi-volume-high' : 'mdi-volume-variant-off'
            "
            @change="volumeController()"
            @click:prepend="isRadioMuted(soundID)"
          ></v-slider>
        </v-col>
        <v-col
          class="d-flex justify-end"
          offset-sm="1"
          offset-md="1"
          cols="3"
          sm="1"
          md="1"
          xs="1"
        >
          <v-btn
            elevation="2"
            fab
            outlined
            color="purple"
            @click="isRadioMuted(soundID)"
            class="mr-1"
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
    </v-col>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  name: "Lobby",
  data() {
    return {
      arrayID: null,
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
    /* Check if radio is playing */
    isRadioPlaying(stationSrc, isplaying, soundID, index) {
      if (isplaying === false && this.radioStarted === false) {
        this.startRadio(stationSrc, index);
      } /* If another station is already playing stop that instance and start another station */ else if (
        isplaying === false &&
        this.radioStarted === true
      ) {
        Howler.stop();
        console.log("Howler Fully Stopped everything");
        this.stopRadio(this.arrayID);
        this.startRadio(stationSrc, index);
      } else {
        this.stopRadio(index);
      }
    },

    /* START Radio */
    startRadio(stationSrc, index) {
      this.radioStarted = true;
      this.arrayID = index;
      this.stations[index].playing = true;
      this.sound = new Howl({
        src: stationSrc,
        html5: true,
        volume: this.volume,
      });
      Howler.volume(this.volume);
      this.soundID = this.sound.play();
      console.log("Radio Started Playing");
    },
    /* PAUSE Radio */
    stopRadio(index) {
      this.stations[index].playing = false;
      (this.radioStarted = false), this.sound.unload();
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

    /* MUTE Radio */
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
      if (this.radioStarted === false) {
        this.volume;
        console.log("volume ", this.volume);
      } else {
        this.sound.volume(this.volume);
        console.log("volume ", this.volume);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}

#information {
  align-items: center;
}

#AudioPlayerWrapper {
  background-color: #16171b;
}
#Stationswrapper{
   background-color: #19191d
;
}
</style>
