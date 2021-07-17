<template>
  <div>
    <v-col cols="12">
      <v-row class="mt-5" id="Stationswrapper">
        <v-col cols="12">
          <v-row class="header">
            <v-col cols="4">
              <div>
                <h3 class="text-center">
                  The Radio
                </h3>
              </div>
            </v-col>
            <v-col cols="8" md="8">
              <div class="d-flex flex-row-reverse">
                <v-btn
                  width="100"
                  text
                  color="white"
                  class="mr-2"
                  @click="filterCategory('Anime')"
                  >Anime</v-btn
                >
                <v-btn
                  width="100"
                  text
                  color="white"
                  class="mr-2"
                  @click="filterCategory('HipHop')"
                  >HipHop</v-btn
                >
                <v-btn
                  width="100"
                  text
                  color="white"
                  class="mr-2"
                  @click="filterCategory('Chill')"
                  >Chill</v-btn
                >
                <v-btn
                  width="100"
                  text
                  color="white"
                  class=""
                  @click="filterCategory('All')"
                  >All</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          align="center"
          id="AudioPlayerWrapper"
          class="py-2"
          cols="12"
          md="3"
          lg="4"
        >
          <v-img
            class="mt-10"
            v-if="this.stationData.imageSrc"
            contain
            max-height="200"
            :src="this.stationData.imageSrc"
          ></v-img>
          <v-img
            class="mt-16"
            v-else
            contain
            max-height="200"
            src="../assets/radioplaceholder.jpg"
          ></v-img>

          <h2 v-if="this.stationData.title" class="text-center mt-3">
            {{ this.stationData.title }}
          </h2>

          <p v-if="this.stationData.genres" class="text-center mt-4">
            {{ this.stationData.genres }}
          </p>

          <p v-if="this.stationData.website" class="text-center">
            <a :href="this.stationData.website" target="_blank">Website</a>
          </p>

          <div class="mt-6">
            <v-btn icon>
              <v-icon v-if="stationData.liked" dark style="color: red">
                mdi-heart
              </v-icon>
              <v-icon v-else dark style="color: #E0E0E0">
                mdi-heart-outline
              </v-icon>
            </v-btn>
            <v-btn class="pa-5" icon>
              <v-icon dark style="color: #E0E0E0">
                mdi-dots-horizontal
              </v-icon>
            </v-btn>
          </div>
          <!-- <canvas width="300" height="300">
            An alternative text describing what your canvas displays.
          </canvas> -->
        </v-col>

        <v-col style="padding: 0">
          <div id="tableWrapper" class="section">
            <li v-for="station in selectedFilterGenre" :key="station.id">
              <v-row>
                <v-col>
                  <v-simple-table dark>
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
                                  station.id
                                ),
                                  storeStationData(station, station.id)
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
                          <td
                            width="15%"
                            @click="
                              isRadioPlaying(
                                station.src,
                                station.playing,
                                soundID,
                                index,
                                station.id
                              ),
                                storeStationData(station, index)
                            "
                          >
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
                          <td
                            width="65"
                            @click="
                              isRadioPlaying(
                                station.src,
                                station.playing,
                                soundID,
                                index,
                                station.id
                              ),
                                storeStationData(station, station.id)
                            "
                          >
                            <h3>{{ station.title }}</h3>
                          </td>
                          <td width="10%">
                            <v-btn icon @click="likeStation(station.id)">
                              <v-icon
                                v-if="station.liked"
                                dark
                                style="color: red"
                              >
                                mdi-heart
                              </v-icon>
                              <v-icon v-else dark style="color: #E0E0E0">
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

      <v-row align="center" class="d-flex pt-2" id="controllerWrapper">
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
/* Save -Liked- and volume into local storage and later mb sorting by genre*/
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
      volume: this.$store.state.volume,
      stations: [
        {
          id: 0,
          title: "Mi-Soul",
          src: "http://178.159.3.22:8177/;stream/1",
          playing: false,
          imageSrc: "https://mi-soul.com/wp-content/uploads/play.gif",
          genres: "Soul R&B House Reggae Hip Hop Dance Soulful Music",
          website: "http://mi-soul.com",
          liked: false,
          genre: "HipHop",
        },

        {
          id: 1,
          title: "Anison.FM",
          src: "https://pool.anison.fm:9000/AniSonFM(320)",
          playing: false,
          imageSrc: "https://anison.fm/images/logo_h_summer.png",
          genres: "Anime Variety",
          website: "http://www.anison.fm",
          liked: false,
          genre: "Anime",
        },
        {
          id: 2,
          title: "Dance UK Radio",
          src: "https://uk2.internet-radio.com/proxy/danceradiouk?mp=/stream;",
          playing: false,
          imageSrc:
            "https://danceradiouk.com/wp-content/uploads/2021/02/druk1-350.png",
          genres: "Dance House Trance Techno Top 40",
          website: "https://danceradiouk.com/",
          liked: false,
          genre: "Chill",
        },

        {
          id: 3,
          title: "JapanNext",
          src: "http://198.50.158.92:8803/;stream/1",
          playing: false,
          imageSrc:
            "http://1.bp.blogspot.com/-WYvLtD46Tik/XHuMLFCHJTI/AAAAAAAAHag/zil8qukJvU8eWZvlbqIHZT8Ej9NZ-dRvwCK4BGAYYCw/s1600/Logo%2Bcopia.png",
          genres: "Anime",
          website: "http://www.japan-next.blogspot.com",
          liked: false,
          genre: "Anime",
        },

        {
          id: 4,
          title: "Radio Isekai",
          src: "http://66.70.249.70:5080/;stream/1",
          playing: false,
          imageSrc:
            "https://fastcast4u.com/player/radioisekai/_user/logo/r/radioisekai/ch0.png",
          genres: "Anime Kpop Krock Jpop Jrock Others",
          website: "https://www.radioisekai.com/",
          liked: false,
          genre: "Anime",
        },
        {
          id: 5,
          title: "Jake Radio Live",
          src: "http://188.165.192.5:8015/autodj",
          playing: false,
          imageSrc:
            "https://jakeradiolive.com/wp-content/uploads/2019/11/773eba52-880d-4ae4-aa5b-b0cd8ae2fa3a_200x200.png",
          genres: "Hip Hop",
          website: "https://jakeradiolive.com",
          liked: false,
          genre: "HipHop",
        },
        {
          id: 6,
          title: "Nei-Di's ACG",
          src: "http://106.104.32.86:8080/;stream/1",
          playing: false,
          imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/61ent1CSpRL.png",
          genres: "Anime",
          liked: false,
          genre: "Anime",
        },

        {
          id: 7,
          title: "Tsubaki Radio",
          src: "http://stream.tsubakianimeradio.com:9000/;stream/1",
          playing: false,
          imageSrc:
            "http://tsubakianimeradio.com/wp-content/uploads/2020/08/logo-new.png",
          genres: "Anime Openings Endings OST Japan Japanese Jpop Jrock",
          website: "http://tsubakianimeradio.com",
          liked: false,
          genre: "Anime",
        },
        {
          id: 8,
          title: "Hip-Hop Hits",
          src: "https://streaming.radio.co/s97881c7e0/listen",
          playing: false,
          imageSrc:
            "https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg",
          genres: "Hip Hop Adult Hits Classic Hip Hop",
          liked: false,
          genre: "HipHop",
        },

        {
          id: 9,
          title: "BakaRadio",
          src: "http://144.217.203.184:8398/;stream/1",
          playing: false,
          imageSrc:
            "https://www.bakaradio.net/wp-content/uploads/2015/12/bkrlogo.png",
          genres: "Anime",
          website: "http://www.bakaradio.net",
          liked: false,
          genre: "Anime",
        },
        {
          id: 10,
          title: "Hip Hop Request # 1 In Hip-Hop and RnB",
          src: "http://149.56.175.167:5461/;stream/1",
          playing: false,
          imageSrc:
            "https://hiphoprequest.com/wp-content/uploads/2020/02/HHRlogo-300x128.png",
          genres: "Hip Hop Urban Contemporary R&B and Urban",
          website: "http://www.hiphoprequest.com",
          liked: false,
          genre: "HipHop",
        },

        {
          id: 11,
          title: "BEST SMOOTH JAZZ - UK",
          src: "http://64.95.243.43:8002/;stream/1",
          playing: false,
          imageSrc: "https://i.ytimg.com/vi/4s2RD4e5ZwU/maxresdefault.jpg",
          genres: "Smooth Jazz",
          website: "http://bestsmoothjazz.com",
          liked: false,
          genre: "Chill",
        },
        {
          id: 12,
          title: "LIFE CHILL MUSIC",
          src: "http://aska.ru-hoster.com:8053/autodj",
          playing: false,
          imageSrc:
            "http://www.lifechillmusic.com/wp-content/uploads/2019/12/Logo-original.png",
          genres: "Chill Chillout Downtempo Ambient Lounge",
          website: "http://www.lifechillmusic.com/",
          liked: false,
          genre: "Chill",
        },
      ],
      selectedGenre: "All",
    };
  },
  computed: {
    selectedFilterGenre: function() {
      if (this.selectedGenre === "Anime") {
        return this.stations.filter(function(u) {
          console.log("filter", u.genre);
          return u.genre === "Anime";
        });
      }
      if (this.selectedGenre === "Chill") {
        return this.stations.filter(function(u) {
          console.log("filter", u.genre);
          return u.genre === "Chill";
        });
      }
      if (this.selectedGenre === "HipHop") {
        return this.stations.filter(function(u) {
          console.log("filter", u.genre);
          return u.genre === "HipHop";
        });
      }
      if (this.selectedGenre === "All") {
        return this.stations;
      }
      return this.stations;
    },
  },
  methods: {
    filterCategory(category) {
      if (category === "Anime") {
        console.log("filter", category);
        this.selectedGenre = "Anime";
      }
      if (category === "All") {
        console.log("filter", category);
        this.selectedGenre = "All";
      }
      if (category === "HipHop") {
        console.log("filter", category);
        this.selectedGenre = "HipHop";
      }
      if (category === "Chill") {
        console.log("filter", category);
        this.selectedGenre = "Chill";
      }
    },
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
    isRadioPlaying(stationSrc, isplaying, soundID, stationID) {
      if (isplaying === false && this.radioStarted === false) {
        this.startRadio(stationSrc, stationID);
        this.radioPaused = false;
      } /* If another station is already playing stop that instance and start another station */ else if (
        isplaying === false &&
        this.radioStarted === true
      ) {
        Howler.stop();
        console.log("Howler Fully Stopped everything");
        this.stopRadio(this.arrayID);
        this.startRadio(stationSrc, stationID);
      } else {
        this.stopRadio(stationID);
        this.radioPaused = true;
      }
    },

    /* START Radio */
    startRadio(stationSrc, stationID) {
      this.radioStarted = true;
      this.arrayID = stationID;
      this.stations[stationID].playing = true;
      this.sound = new Howl({
        src: stationSrc,
        html5: true,
        volume: this.volume,
      });

      /* Hooking into Howler to be able to analyze sound via Audio Nodes*/
      // ____________________________________________________
      // Create an analyser node in the Howler WebAudio context
      var analyser = Howler.ctx.createAnalyser();
      // Connect the masterGain -> analyser (disconnecting masterGain -> destination)
      Howler.masterGain.connect(analyser);
      console.log(analyser, "analyser");
      analyser.fftSize = 2048;
      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);
      console.log("getByteTimeDomainData -", dataArray);
      // ____________________________________________________

     analyser.getByteFrequencyData(dataArray);
     console.log("getByteFrequencyData - ", dataArray)


      this.soundID = this.sound.play();
      console.log("Radio Started Playing");
      Howler.masterGain.gain.value = this.volume;
    },

    /* PAUSE Radio */
    stopRadio(stationID) {
      this.stations[stationID].playing = false;
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
      this.$store.commit("volumeSlider", this.volume);
      if (this.radioStarted === false) {
        console.log("volume ", this.volume);
      } else {
        this.sound.volume(this.volume);
        console.log("volume ", this.volume);
      }
    },
    likeStation(stationID) {
      this.stations[stationID].liked = !this.stations[stationID].liked;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #16171b;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
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
  cursor: default;
}
p {
  color: #38393c;
  font-weight: bold;
}
tr:hover {
  background-color: #16171b !important;
}
tr {
  background-color: #19191d !important;
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
  height: 77vh;
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
a {
  text-decoration: none;
  font-size: 0.8em;
}
</style>
