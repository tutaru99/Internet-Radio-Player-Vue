<template>
  <div>
    <v-col cols="12">
      <v-row align="center" justify="center" class="d-flex">
        <div class="p-view">
          <div class="p-view__box" id="js-view">
            <svg
              ref="jssvg"
              class="p-view__svg"
              id="js-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="600"
              height="400"
              viewBox="0 0 600 400"
              preserveAspectRatio="none"
            >
              <path
                ref="path"
                d="M0,200 L600,200"
                stroke="#fff"
                stroke-width="0.5"
                fill="none"
              />
            </svg>
          </div>
          <div>
            <v-row align="center" justify="center" class="d-flex">
              <v-btn class="" @click="playAudio()">
                Start Music
              </v-btn>
              <v-btn class="ml-4" @click="stopAudio()">
                STOP AUDIO
              </v-btn>
            </v-row>
          </div>
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
export default {
  data() {
    return {
      sound: null,
      analyser: null,
      gainNode: null,
      drawTimer: null,
      frequency: [],
      ffrequency: null,
      playing: false,
      audio: null,
      sourceAudio: null,
    };
  },
  created() {
    this.createVisualizerData(); // Read the sound source first
  },

  methods: {
    playAudio() {
      this.initAudioVisualizer();
      this.sound.play();
      this.drawAudioVisualizer();
    },
    createVisualizerData() {
      var sound = new Howl({
        src: ["https://musicbird.leanstream.co/JCB068-MP3"],
        html5: true,
      });
      this.sound = sound;
    },

    stopAudio() {
      this.sound.stop();
      if (this.drawTimer) {
        window.cancelAnimationFrame(this.drawTimer);
        return;
      }
    },

    initAudioVisualizer() {
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
      console.log(this.frequency);
      console.log(this.ffrequency);

      Howler.ctx.createGain =
        Howler.ctx.createGain || Howler.ctx.createGainNode;
      var gainNode = Howler.ctx.createGain();
      gainNode.gain.setValueAtTime(1, Howler.ctx.currentTime);
      Howler.masterGain.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(Howler.ctx.destination);

      // Starting Playing Audio
      console.log("Radio Started Playing");

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
      this.analyser.smoothingTimeConstant = 0.05;
      // FFT size
      this.analyser.fftSize = 1024;
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
h1 {
  color: #fff;
}
</style>
