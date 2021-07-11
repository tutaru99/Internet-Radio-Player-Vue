<template>
  <div id="wrapper">
    <v-container>
      <v-row no-gutters>
        <v-col align-self="center">
          <v-card class="pa-2" outlined tile>
            <h1 class="text-center">Radio Stations</h1>
            <p>Sort, Search // if possible display current song</p>
            <p>Buttons: Play, Pause, Adjust Sound Level, Next/Previous Station</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
#wrapper {
    background-color: rgb(190, 170, 170);
}
</style>
