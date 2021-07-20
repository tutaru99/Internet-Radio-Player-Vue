<template>
  <div>

  </div>
</template>

<script>
export default {
  data: {},
  methods: {
    startRadio(stationSrc, stationID) {
      this.radioStarted = true;
      this.arrayID = stationID;
      this.stations[stationID].playing = true;
      this.sound = new Howl({
        src: require("@/assets/audio.mp3"),
        format: ["mp3", "aac"],
        volume: this.volume,
      });
      // Create an analyser node in the Howler WebAudio context
      var analyser = Howler.ctx.createAnalyser();
      var dataArray = new Uint8Array(analyser.frequencyBinCount);
      console.log(analyser);
      Howler.ctx.createGain =
        Howler.ctx.createGain || Howler.ctx.createGainNode;
      var gainNode = Howler.ctx.createGain();
      gainNode.gain.setValueAtTime(1, Howler.ctx.currentTime);
      Howler.masterGain.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(Howler.ctx.destination);

      // Starting Playing Audio
      this.soundID = this.sound.play();
      console.log("Radio Started Playing");

      // Defining variables so they can be used globally
      this.analyser = analyser;
      this.gainNode = gainNode;
      this.frequency = dataArray;
      // Call function to show frequency data
      this.drawAudioVisualizer();
    },
    // Start getting Frequency Data
    drawAudioVisualizer() {
      // Animation ends when gain reaches 0
      if (this.gainNode.gain.value === 0) {
        if (this.drawTimer) {
          window.cancelAnimationFrame(this.drawTimer);
          return;
        }
      }
      // Set 0 to 1. Drawing becomes smoother when it is closer to 0
      this.analyser.smoothingTimeConstant = 0.1;
      // FFT size
      this.analyser.fftSize = 1024;
      // Store the waveform data in the frequency domain in an array of arguments
      this.analyser.getByteFrequencyData(this.frequency);
      // Draw every frame
      this.drawTimer = window.requestAnimationFrame(
        this.drawAudioVisualizer.bind(this)
      );
      console.log(this.frequency);
    },
  },
};
</script>

<style lang="scss" scoped></style>
