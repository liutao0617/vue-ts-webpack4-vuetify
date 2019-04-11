<template>
  <v-container
    fill-height
    fluid
  >
   typography
  </v-container>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
@Component({
  components:{}
})
export default class Typography extends Vue{}

</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
