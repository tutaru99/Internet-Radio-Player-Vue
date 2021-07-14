/* Move Volume to vueX store at some point */
<template>
  <div>
    <v-col cols="12">
      <v-row class="mt-5" id="Stationswrapper">
        <v-col
          align="center"
          id="AudioPlayerWrapper"
          class="py-2"
          cols="12"
          md="3"
          lg="4"
        >
          <div>
            <h3 class="text-center">
              The Radio
            </h3>
          </div>
          <v-img v-if="this.stationData.imageSrc" contain max-height="200" :src='this.stationData.imageSrc'></v-img>
          <v-img v-else contain max-height="200" src="../assets/radioplaceholder.jpg"></v-img>

          <h2 v-if="this.stationData.title" class="text-center">{{ this.stationData.title }}</h2>
          <h2 v-else class="text-center">Station</h2>

          <h3 class="text-center">Genre or Tags</h3>

          <div class="mt-6">
            <v-btn class="pa-5" icon>
              <v-icon dark style="color: #E0E0E0">
                mdi-heart-outline
              </v-icon>
            </v-btn>
            <v-btn class="pa-5" icon>
              <v-icon dark style="color: #E0E0E0">
                mdi-dots-horizontal
              </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col style="padding: 0" class="py-2">
          <div id="tableWrapper" class="section">
            <li v-for="(station, index) in stations" :key="index">
              <v-row>
                <v-col>
                  <v-simple-table dark id="tableHeight">
                    <template>
                      <tbody>
                        <tr>
                          <td width="5%">
                            <v-btn
                              icon
                              color="white"
                              @click="
                                isRadioPlaying(
                                  station.src,
                                  station.playing,
                                  soundID,
                                  index
                                ),
                                  storeStationData(station, index)
                              "
                            >
                              <v-icon dark v-if="!station.playing">
                                mdi-play
                              </v-icon>
                              <v-icon dark v-if="station.playing">
                                mdi-pause
                              </v-icon>
                            </v-btn>
                          </td>
                          <td width="25%">
                            <v-img
                              contain
                              max-height="80"
                              max-width="80"
                              min-height="80"
                              min-width="80"
                              :src="station.imageSrc"
                            >
                            </v-img>
                          </td>
                          <td width="55">
                            <h3>{{ station.title }}</h3>
                          </td>
                          <td width="15%">
                            <v-btn icon>
                              <v-icon dark style="color: #E0E0E0">
                                mdi-heart-outline
                              </v-icon>
                            </v-btn>
                          </td>
                          <td width="10%">
                            <v-btn icon>
                              <v-icon dark style="color: #E0E0E0">
                                mdi-dots-horizontal
                              </v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </li>
          </div>
        </v-col>
      </v-row>

      <!-- RADIO CONTROLS -->

      <v-row align="center" class="d-flex" id="controllerWrapper">
        <v-col cols="12" sm="12" md="12" xs="12" class="d-flex space-between">
          <!-- Play/Stop Controlls -->
          <v-btn
            class="ml-2"
            fab
            outlined
            x-small
            color="white"
            @click="isRadioPaused()"
          >
            <v-icon dark v-if="radioPaused">
              mdi-play
            </v-icon>
            <v-icon dark v-else>
              mdi-stop
            </v-icon>
          </v-btn>

          <!-- Volume Slider -->
          <v-slider
            class="ml-7"
            :color="!radioMuted ? 'white' : 'white'"
            thumb-color="white"
            :track-color="!radioMuted ? 'grey darken-1' : 'red darken-2'"
            max="1.0"
            step="0.05"
            v-model="volume"
            :prepend-icon="
              !radioMuted ? 'mdi-volume-high' : 'mdi-volume-variant-off'
            "
            @change="volumeController()"
            @click:prepend="isRadioMuted(soundID)"
          ></v-slider>

          <v-btn
            icon
            color="white"
            @click="isRadioMuted(soundID)"
            class="mr-1 ml-7"
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
      stationData: [],
      stationDataIndex: null,
      arrayID: null,
      radioStarted: false,
      radioMuted: false,
      radioPaused: true,
      sound: null,
      soundID: null,
      volume: 0.6,
      stations: [
        {
          title: "Anison.FM",
          src: "https://pool.anison.fm:9000/AniSonFM(320)",
          playing: false,
          imageSrc: "https://anison.fm/images/logo_h_summer.png",
        },
        {
          title: "Hip-Hop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
          playing: false,
          imageSrc:
            "https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg",
        },
        {
          title: "Anison.FM",
          src: "https://pool.anison.fm:9000/AniSonFM(320)",
          playing: false,
          imageSrc: "https://anison.fm/images/logo_h_summer.png",
        },
        {
          title: "Hip-Hop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
          playing: false,
          imageSrc:
            "https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg",
        },
        {
          title: "Anison.FM",
          src: "https://pool.anison.fm:9000/AniSonFM(320)",
          playing: false,
          imageSrc: "https://anison.fm/images/logo_h_summer.png",
        },
        {
          title: "Hip-Hop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
          playing: false,
          imageSrc:
            "https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg",
        },
        {
          title: "Hip-Hop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
          playing: false,
          imageSrc:
            "https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg",
        },
      ],
    };
  },

  methods: {
    storeStationData(station, index) {
      this.stationData = station;
      this.stationDataIndex = index;
      console.log(station, index);
    },

    isRadioPaused() {
      console.log(this.stationData, this.stationDataIndex);

      if (this.stationData.length === 0) {
        console.log("empty station data");
        return;
      }
      if (this.stationData.playing === false && this.radioStarted === false) {
        this.startRadio(this.stationData.src, this.stationDataIndex);
        this.radioPaused = false;
      } else if (
        this.stationData.playing === false &&
        this.radioStarted === true
      ) {
        Howler.stop();
        console.log("Howler Fully Stopped everything");
        this.stopRadio(this.arrayID);
      } else {
        this.stopRadio(this.stationDataIndex);
        this.radioPaused = true;
      }
    },

    /* Check if radio is playing */
    isRadioPlaying(stationSrc, isplaying, soundID, index) {
      if (isplaying === false && this.radioStarted === false) {
        this.startRadio(stationSrc, index);
        this.radioPaused = false;
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
        this.radioPaused = true;
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
  border-top-left-radius: 20px;
}
#Stationswrapper {
  background-color: #19191d;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
h3,
h1,
h2,
p {
  color: #e1e1e1;
}
p {
  color: #38393c;
  font-weight: bold;
}
td {
  background-color: #19191d;
}
#controllerWrapper {
  border-end-start-radius: 20px;
  border-end-end-radius: 20px;
  background: hsla(338, 39%, 21%, 1);

  background: radial-gradient(
    circle,
    hsla(338, 39%, 21%, 1) 0%,
    hsla(338, 39%, 21%, 1) 16%,
    hsla(280, 9%, 13%, 1) 45%,
    hsla(310, 20%, 17%, 1) 76%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(338, 39%, 21%, 1) 0%,
    hsla(338, 39%, 21%, 1) 16%,
    hsla(280, 9%, 13%, 1) 45%,
    hsla(310, 20%, 17%, 1) 76%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(338, 39%, 21%, 1) 0%,
    hsla(338, 39%, 21%, 1) 16%,
    hsla(280, 9%, 13%, 1) 45%,
    hsla(310, 20%, 17%, 1) 76%
  );
}
#tableWrapper {
  height: 500px;
  overflow: auto;
  overflow-x: hidden;
}

.section::-webkit-scrollbar {
  width: 20px;
}

.section::-webkit-scrollbar-track {
  background-color: transparent;
}

.section::-webkit-scrollbar-thumb {
  border-radius: 80px;
  border: 5px solid transparent;
  background-clip: content-box;
  background-color: rgb(66, 66, 66);
}
* ::-webkit-scrollbar {
  display: block !important;
}
</style>
