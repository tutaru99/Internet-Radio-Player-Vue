<template>
  <div style="padding-top: 0; margin-top: -20px;">
    <transition name="fade" appear>
      <v-col style="padding-top: 0" cols="12">
        <v-row class="mt-5" id="Stationswrapper">
          <v-col cols="12">
            <v-row class="header">
              <transition name="fade" appear>
                <v-col
                  cols="4"
                  md="3"
                  lg="3"
                  sm="12"
                  style="background-color: #000; border-right: 1px solid #282828;"
                >
                  <div>
                    <h3 class="text-center mt-1">
                      The Radio
                    </h3>
                  </div>
                </v-col>
              </transition>
              <v-col style="border-bottom: 1px solid #282828;" cols="9" md="9">
                <div class="d-flex flex-row-reverse">
                  <v-btn
                    width="100"
                    text
                    color="white"
                    class="mr-2"
                    :class="
                      this.selectedGenre === 'Anime' ? 'red darken-4' : ''
                    "
                    @click="filterCategory('Anime')"
                    >Anime</v-btn
                  >
                  <v-btn
                    width="100"
                    text
                    color="white"
                    class="mr-2"
                    :class="
                      this.selectedGenre === 'HipHop' ? 'red darken-4' : ''
                    "
                    @click="filterCategory('HipHop')"
                    >HipHop</v-btn
                  >
                  <v-btn
                    width="100"
                    text
                    color="white"
                    class="mr-2"
                    :class="
                      this.selectedGenre === 'Chill' ? 'red darken-4' : ''
                    "
                    @click="filterCategory('Chill')"
                    >Chill</v-btn
                  >
                  <v-btn
                    width="100"
                    text
                    color="white"
                    :class="this.selectedGenre === 'All' ? 'red darken-4' : ''"
                    @click="filterCategory('All')"
                    >All</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
          <transition name="fade" appear>
            <v-col
              style="border-right: 1px solid #282828;"
              align="center"
              id="AudioPlayerWrapper"
              class="py-2"
              cols="12"
              md="3"
              lg="3"
            >
              <transition name="fade">
                <div v-if="this.stationData.imageSrc">
                  <v-img
                    class="mt-2"
                    contain
                    max-width="70%"
                    max-height="200"
                    min-height="200"
                    :src="this.stationData.imageSrc"
                    @error="
                      station.imageSrc = require('@/assets/placeholder.jpg')
                    "
                  ></v-img>
                </div>
                <div v-else>
                  <v-img
                    class="mt-2"
                    contain
                    max-width="70%"
                    max-height="200"
                    min-height="200"
                    src="../assets/radioplaceholder.jpg"
                  ></v-img>
                </div>
              </transition>
              <h2 v-if="this.stationData.title" class="text-center mt-3">
                {{ this.stationData.title }}
              </h2>

              <p v-if="this.stationData.genres" class="text-center mt-4">
                {{ this.stationData.genres }}
              </p>

              <p v-if="this.stationData.website" class="text-center">
                <a :href="this.stationData.website" target="_blank">Website</a>
              </p>

              <div class="mt-5">
                <div v-if="soundID">
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
                <div class="mt-4">
                  <div class="p-view__box" id="js-view">
                    <svg
                      ref="jssvg"
                      class="p-view__svg"
                      id="js-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="300"
                      viewBox="0 0 600 400"
                      preserveAspectRatio="none"
                    >
                      <path
                        ref="path"
                        d="M0,200 L600,200"
                        stroke="red"
                        stroke-width="0.5"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </v-col>
          </transition>
          <v-col style="padding: 0" >
            <transition name="fade" appear>
              <div id="tableWrapper" class="section">
                <li v-for="station in selectedFilterGenre" :key="station.id">
                  <v-row>
                    <v-col>
                      <v-simple-table dark class="red">
                        <template>
                          <tbody>
                            <tr
                              :class="
                                station.playing === true ? 'PlayingStation' : ''
                              "
                            >
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
                                    station.id
                                  ),
                                    storeStationData(station, station.id)
                                "
                              >
                                <v-img
                                  contain
                                  max-height="80"
                                  max-width="80"
                                  min-height="80"
                                  min-width="80"
                                  :src="station.imageSrc"
                                  @error="
                                    station.imageSrc = require('@/assets/placeholder.jpg')
                                  "
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
            </transition>
          </v-col>
        </v-row>

        <!-- RADIO CONTROLS -->
        <v-footer fixed class="pa-0">
          <v-row
            align="center"
            class="d-flex pt-2"
            id="controllerWrapper"
            justify="center"
          >
            <v-col
              cols="12"
              sm="12"
              md="12"
              xs="12"
              class="pt-0 d-flex justify-center"
            >
              <!-- Play/Stop Controlls -->
              <v-col cols="1" md="1" lg="1" sm="4" xs="4" align="end">
                <v-btn
                  class="mr-6  mb-2"
                  fab
                  outlined
                  small
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
              </v-col>
              <!-- Volume Slider -->
              <v-col cols="4" md="4" lg="5" sm="4" xs="4">
                <v-slider
                  class="mt-1"
                  :color="!radioMuted ? 'white' : 'white'"
                  thumb-color="white"
                  :track-color="!radioMuted ? 'grey darken-1' : 'red darken-4'"
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

              <v-col cols="1" md="1" lg="1" sm="4" xs="4">
                <v-btn
                  icon
                  color="white"
                  @click="isRadioMuted(soundID)"
                  class="ml-6"
                >
                  <v-icon dark v-if="radioMuted">
                    mdi-volume-variant-off
                  </v-icon>
                  <v-icon dark v-if="!radioMuted">
                    mdi-volume-source
                  </v-icon>
                </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-footer>
      </v-col>
    </transition>
  </div>
</template>
<script>
import { Howl, Howler } from "howler";
export default {
  name: "Lobby",
  components: {},
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
      selectedGenre: "All",
      analyser: null,
      gainNode: null,
      drawTimer: null,
      frequency: [],
      ffrequency: null,
      audio: null,
      sourceAudio: null,
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
          title: "RadioDoki",
          src: "http://144.217.203.184:8972/;stream/1",
          playing: false,
          imageSrc:
            "https://seeded-session-images.scdn.co/v1/img/artist/3ToMMHLyKIJnyMJ5Y7vllT/en",
          genres: "J-Pop J-Music Anime Vocaloid",
          website: "http://www.radiodoki.com",
          liked: false,
          genre: "Anime",
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
            "https://liveonlineradio.net/wp-content/uploads/2014/11/Baka-Radio.jpg",
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
        {
          id: 13,
          title: "Be-Happy",
          src: "https://musicbird.leanstream.co/JCB068-MP3",
          playing: false,
          imageSrc: "https://www.be-happy789.com/images/logo.png",
          genres: "Japanese, Rock, Jpop, Anime, English Songs",
          website: "https://www.be-happy789.com/",
          liked: false,
          genre: "Anime",
        },
        {
          id: 14,
          title: "Chilltrax",
          src: "https://streamssl.chilltrax.com:80/;stream/1",
          playing: false,
          imageSrc:
            "https://www.chilltrax.com/images/chilltrax-header-logo.svg",
          genres: "Chill, Downtempo, Ambient",
          website: "http://www.chilltrax.com",
          liked: false,
          genre: "Chill",
        },
        {
          id: 15,
          title: "Radio DHR",
          src: "http://37.187.93.104:8589/;stream/1",
          playing: false,
          imageSrc:
            "https://static.wixstatic.com/media/da966a_f5f97999e9404436a2c30e3336a3e307~mv2.png/v1/fill/w_183,h_183,al_c,q_95/da966a_f5f97999e9404436a2c30e3336a3e307~mv2.webp",
          genres: "Chill, Electronic",
          website: "https://www.deephouse-radio.com",
          liked: false,
          genre: "Chill",
        },
        {
          id: 16,
          title: "PulseEDM",
          src: "http://pulseedm.cdnstream1.com:8124/1373_128",
          playing: false,
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4Dhl-XtQlsHiQipt3ezHqLY3imWV66V8jL-AwY96saoIEjYhXGbKnBV36eWlxG_Vw_c&usqp=CAU",
          genres:
            "Electronic, dance, house, trance, pop, EDM, techno, electro, dubstep",
          website: "www.pulseedm.com",
          liked: false,
          genre: "Chill",
        },
        {
          id: 17,
          title: "80s 90s Pop Hits",
          src: "http://51.222.42.9:2000/;stream/1",
          playing: false,
          imageSrc:
            "https://direct.rhapsody.com/imageserver/images/alb.398906129/500x500.jpg",
          genres: "80s 90s Pop Hits",
          website: "http://www.977music.net",
          liked: false,
          genre: "Chill",
        },
        {
          id: 18,
          title: "Hot Hitz 80's",
          src: "http://63.143.40.238:9900/;stream/1",
          playing: false,
          imageSrc:
            "https://www.storefrontier.com/sites/default/files/artwork_preview/front/50611/hothitz_logo_45colors_1560782314_preview_1083_53_black.png",
          genres: "80s 90s Pop Hits, Retro",
          website: "http://www.hothitzradio.com",
          liked: false,
          genre: "Chill",
        },
        {
          id: 19,
          title: "Alabama's Finest Radio",
          src: "http://alabamasfinest.net:8000/;stream/1",
          playing: false,
          imageSrc:
            "https://www.fleetradionetwork.com/wp-content/uploads/2020/05/Alabama_Fleet_Radio.jpg",
          genres: "Urban Contemporary Underground Hip Hop Rap",
          website: "http://alabamasfinest.net",
          liked: false,
          genre: "HipHop",
        },
        {
          id: 20,
          title: "WHAT?! - HipHop",
          src: "http://162.144.106.6:9119/;stream/1",
          playing: false,
          imageSrc: "https://cdn-radiotime-logos.tunein.com/s151508g.png",
          genres: "Hip Hop",
          website: "http://www.itswhatradio.com",
          liked: false,
          genre: "HipHop",
        },
        {
          id: 21,
          title: "Hip Hop and RNB FM",
          src: "http://192.99.41.102:5429/;stream/1",
          playing: false,
          imageSrc:
            "https://static.tuneyou.com/images/logos/500_500/3/15303/.100HipHopandRNBFM_5.png",
          genres: "Urban RnB, Hip Hop, Soul, House, Urban",
          website: "http://www.100HipHopandRNB.FM",
          liked: false,
          genre: "HipHop",
        },
        {
          id: 22,
          title: "Deep House Radio",
          src: "http://62.210.105.16:7000/;stream/1",
          playing: false,
          imageSrc:
            "https://setoftheday.com/wp-content/uploads/2019/10/0-1.jpg",
          genres: "Romanian, House",
          website: "http://www.dancemusic.ro",
          liked: false,
          genre: "Chill",
        },
        {
          id: 23,
          title: "RnB Channel (HD)",
          src: "http://192.99.8.192:3132/;stream/1",
          playing: false,
          imageSrc:
            "https://www.radio.dk/images/broadcasts/cc/d9/34436/c300.png",
          genres: "Hip Hop, RnB",
          website: "http://www.thernbchannel.com/",
          liked: false,
          genre: "HipHop",
        },
        {
          id: 24,
          title: "J-Pop Sakura",
          src: "https://igor.torontocast.com:1710/;stream/1",
          playing: false,
          imageSrc:
            "https://i1.sndcdn.com/artworks-000205160237-4h6tl8-t500x500.jpg",
          genres: "Jpop",
          website: "https://asiadreamradio.com",
          liked: false,
          genre: "Anime",
        },
        {
          id: 25,
          title: "Asia DREAM Radio - Japan Hits",
          src: "http://184.75.212.82:1025/;stream/1",
          playing: false,
          imageSrc:
            "https://mytuner.global.ssl.fastly.net/media/tvos_radios/nxrsacawm2ey.png",
          genres: "Jpop",
          website: "https://asiadreamradio.com",
          liked: false,
          genre: "Anime",
        },
        {
          id: 26,
          title: "J-Rock Powerplay",
          src: "https://kathy.torontocast.com:3340/stream/1/",
          playing: false,
          imageSrc:
            "https://www.radio.net/images/broadcasts/be/67/39809/1/c300.png",
          genres: "Nagoya, Japan Rock, Pop",
          website: "https://asiadreamradio.com",
          liked: false,
          genre: "Anime",
        },
        {
          id: 27,
          title: "J-Club asia DREAM",
          src: "https://kathy.torontocast.com:3350/stream/1/",
          playing: false,
          imageSrc:
            "https://www.radio.net/images/broadcasts/d2/e8/35558/1/c300.png",
          genres:
            "From Japan - The hottest Japanese Hip-Hop and R&B music anywhere on the net",
          website: "https://asiadreamradio.com",
          liked: false,
          genre: "Anime",
        },
        {
          id: 28,
          title: "ZipFM LT",
          src: "https://stream2.zipfm.lt/zipfm128.mp3",
          playing: false,
          imageSrc:
            "https://zipfm.lt/wp-content/themes/zipfm/img/headerlogo.jpg",
          genres: "International Pop, rock, hiphop",
          website: "zipfm.lt",
          liked: false,
          genre: "Chill",
        },
        {
          id: 29,
          title: "Power Hit Radio LT",
          src: "https://powerhit.ls.lv/PHR_AAC?nocache=0.7866212939226969",
          playing: false,
          imageSrc:
            "https://www.radio.net/images/broadcasts/79/8c/13985/c300.png",
          genres: "International Pop, rock, hiphop, Dance",
          website: "https://powerhitradio.tv3.lt",
          liked: false,
          genre: "Chill",
        },
      ],
    };
  },
  created() {
    this.loadAudioSource();
  },

  computed: {
    selectedFilterGenre: function() {
      if (this.selectedGenre === "Anime") {
        return this.stations.filter(function(u) {
          return u.genre === "Anime";
        });
      }
      if (this.selectedGenre === "Chill") {
        return this.stations.filter(function(u) {
          return u.genre === "Chill";
        });
      }
      if (this.selectedGenre === "HipHop") {
        return this.stations.filter(function(u) {
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
    loadAudioSource() {
      var sound = new Howl({
        src: ["https://musicbird.leanstream.co/JCB068-MP3"],
        html5: true,
      });
      this.sound = sound;
    },
    filterCategory(category) {
      if (category === "Anime") {
        this.selectedGenre = "Anime";
      }
      if (category === "All") {
        this.selectedGenre = "All";
      }
      if (category === "HipHop") {
        this.selectedGenre = "HipHop";
      }
      if (category === "Chill") {
        this.selectedGenre = "Chill";
      }
    },
    storeStationData(station, id) {
      this.stationData = station;
      this.stationDataIndex = id;
    },
    isRadioPaused() {
      if (this.stationData.length === 0) {
        console.log("No Station Selected");
        return;
      }
      if (this.stationData.playing === false && this.radioStarted === false) {
        this.startRadio(this.stationData.src, this.stationDataIndex);
        this.playAudio();
        this.radioPaused = false;
      } else if (
        this.stationData.playing === false &&
        this.radioStarted === true
      ) {
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
        this.playAudio();
        this.radioPaused = false;
      } /* If another station is already playing stop that instance and start another station */ else if (
        isplaying === false &&
        this.radioStarted === true
      ) {
        console.log("Howler Fully Stopped everything");
        this.stopRadio(this.arrayID);
        this.startRadio(stationSrc, stationID);
        this.playAudio();
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
      this.changeTitle(this.stations[stationID].title);
      this.sound = new Howl({
        src: stationSrc,
        html5: true,
        volume: this.volume,
      });
      console.log("Station Source Loaded into Howler");
      Howler.masterGain.gain.value = this.volume;

      if (this.radioMuted === true) {
        this.muteRadioOnStart();
      }
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
      if (this.radioStarted === false) {
        return;
      } else {
        (this.radioMuted = true), this.sound.fade(this.volume, 0.0, 1200);
        console.log("Radio Muted");
      }
    },
    /* UNMUTE Radio */
    unmuteRadio() {
      (this.radioMuted = false), this.sound.fade(0.0, this.volume, 1200);
      console.log("Radio Unmuted");
    },
    /* MUTE Radio instantly if u chose to mute before starting any station */
    muteRadioOnStart() {
      this.sound.fade(this.volume, 0.0, 0);
    },
    /* Volume Slider */
    volumeController() {
      this.$store.commit("volumeSlider", this.volume);
      if (this.radioStarted === false) {
        return;
      }
      if (this.radioMuted === true) {
        return;
      } else {
        this.sound.volume(this.volume);
      }
    },
    likeStation(stationID) {
      this.stations[stationID].liked = !this.stations[stationID].liked;
    },
    changeTitle (title) {
      document.title = "Playing" + " " + title;
    },
    /* Visualizer Stuff */
    unloadAll() {
      Howler.unload();
    },
    playAudio() {
      //  Howler.unload();
      this.initAudioVisualizer();
      console.log("Radio Started Playing");
      this.soundID = this.sound.play();
      this.drawAudioVisualizer();
    },

    initAudioVisualizer() {
      var AudioContext = window.AudioContext || window.webkitAudioContext;

      // Create an analyser node in the Howler WebAudio context
      var analyser = Howler.ctx.createAnalyser();
      this.audio = !this.audio
        ? Howler._html5AudioPool.slice(-1)[0]
        : this.audio;
      this.audio.crossOrigin = "anonymous";
      this.sourceAudio = !this.sourceAudio
        ? Howler.ctx.createMediaElementSource(this.audio)
        : this.sourceAudio;
      this.sourceAudio.connect(analyser);

      this.frequency = new Uint8Array(analyser.frequencyBinCount);
      this.ffrequency = new Uint8Array(1);

      if (this.gainNode === null) {
        Howler.ctx.createGain =
          Howler.ctx.createGain || Howler.ctx.createGainNode;
        var gainNode = Howler.ctx.createGain();
        gainNode.gain.setValueAtTime(1, Howler.ctx.currentTime);
        Howler.masterGain.connect(analyser);
        analyser.connect(gainNode);
        gainNode.connect(Howler.ctx.destination);
      } else {
        /* You must disconnect gainNode before connecting with a
    new one otherwise sound will get more distorted with each new station chosen/each time this method runs */
        this.gainNode.disconnect();
        Howler.ctx.createGain =
          Howler.ctx.createGain || Howler.ctx.createGainNode;
        gainNode = Howler.ctx.createGain();
        gainNode.gain.setValueAtTime(1, Howler.ctx.currentTime);
        Howler.masterGain.connect(analyser);
        analyser.connect(gainNode);
        gainNode.connect(Howler.ctx.destination);
      }

      // Defining variables so they can be used globally
      this.analyser = analyser;
      this.gainNode = gainNode;
    },

    drawAudioVisualizer() {
      // Animation ends when gain reaches 0
      if (this.gainNode.gain.value === 0) {
        if (this.drawTimer) {
          window.cancelAnimationFrame(this.drawTimer);
          return;
        }
      }
      // Set 0 to 1. Drawing becomes smoother when it is closer to 0
      this.analyser.smoothingTimeConstant = 0.03;
      // FFT size
      this.analyser.fftSize = 2048;
      // Store the waveform data in the frequency domain in an array of arguments
      this.analyser.getByteFrequencyData(this.frequency);
      this.analyser.getByteFrequencyData(this.ffrequency);

      // draw svg with frequency data
      const barWidth =
        (document.getElementById("js-svg").width.baseVal.value * 1.5) /
        this.analyser.frequencyBinCount;
      this.drawSvgPath(barWidth);

      // Draw every frame
      this.drawTimer = window.requestAnimationFrame(
        this.drawAudioVisualizer.bind(this)
      );
    },

    drawSvgPath(barWidth) {
      let d = "M";
      const frequency = this.frequency;
      frequency.forEach((y, i) => {
        const x = i * barWidth;
        const value = frequency[i];
        const percent = value / 255;
        const yBase = i % 2 === 0 ? 1 : -1;
        const height =
          this.$refs.jssvg.height.baseVal.value / 2 +
          (this.$refs.jssvg.height.baseVal.value / 2) *
            percent *
            -1 *
            yBase *
            this.gainNode.gain.value;
        d += `${x} ${height},`;
      });
      this.$refs.path.setAttribute("d", d);
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
  background-color: #000000;
  border-top-left-radius: 20px;
}
#Stationswrapper {
  background-color: #121212;
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
  color: #545558;
  font-weight: bold;
}
tr:hover {
  background-color: #5e0303 !important;
}
tr {
  background-color: #121212 !important;
}
#controllerWrapper {
  border-end-start-radius: 20px;
  border-end-end-radius: 20px;
  background-color: #16171b;
  border-top: 1px solid #282828;
}
#tableWrapper {
  height: 86vh;
  overflow: auto;
  overflow-x: hidden;
}
.PlayingStation {
  background-color: #b71c1c !important;
}
.PlayingStation:hover {
  background-color: #b71c1c !important;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}
.fade-enter-active {
  transition: opacity 1.2s ease-in-out;
}
.fade-enter-to {
  transition: opacity 1.2s ease-in-out;
}
</style>
