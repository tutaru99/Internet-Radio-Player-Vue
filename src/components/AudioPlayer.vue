<template>
  <div>
    <li v-for="station in stations" :key="station.title">
      {{ station.title }}
      <v-btn @click="startRadio(station.src)">
        Play
      </v-btn>
      <v-btn @click="stopRadio(station.src)">
        Stop
      </v-btn>
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
      sound: null,
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
    startRadio(stationSrc) {
      this.radioStarted = true;
      this.sound = new Howl({
        src: stationSrc,
        html5: true,
      });
      this.sound.play();
      console.log(stationSrc, "Radio Playing");
    },
    stopRadio() {
      this.sound.stop();
      console.log("Radio Stopped");
    },
  },
};
</script>
