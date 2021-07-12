<template id="dis">
  <v-app id="mainWrapper">
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
.v-application--is-ltr .v-messages {
  display: none;
}
.v-icon.v-icon.v-icon--link {
  color: purple;
}
#mainWrapper {
  background-color: rgb(43, 38, 38);
}
html {
  overflow-y: hidden !important;
}
</style>
