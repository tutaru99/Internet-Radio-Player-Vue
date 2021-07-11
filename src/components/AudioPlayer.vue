<template>
  <div>
    <v-btn @click="interacted()">
      Play
    </v-btn>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  name: "Lobby",
  data() {
    return {
      userInteracted: false,
    };
  },
  methods: {
    interacted: function() {
      this.userInteracted = true;
      let sound = new Howl({
        src: [require("../assets/audio/teddy.mp3")],
        html5: true,
        onend: function() {
          console.log("Finished Playing Song");
        },
      });

      sound.play();
    },
  },
};
</script>
