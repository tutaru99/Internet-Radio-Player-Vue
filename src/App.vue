<template>
  <v-app  id="mainWrapper">
    <v-main id="body">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
*{
padding: 0;
font-family: 'Encode Sans SC', sans-serif;
}
.v-application--is-ltr .v-messages {
  display: none;
}
.v-icon.v-icon.v-icon--link {
  color: white;
}
#mainWrapper {
  // background-color: rgb(43, 38, 38);
  background-color: #16171bfa;
}
html {
  // overflow-y: hidden !important;
  ::-webkit-scrollbar {
    display: none !important;
  }

  ::-webkit-scrollbar {
    width: 20px;
    background-color: rgba(43, 38, 38, 0) !important;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 80px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: rgb(66, 66, 66);
  }
}
</style>
