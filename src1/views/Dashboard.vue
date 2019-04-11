<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    dashBoard
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import echarts from 'echarts';

@Component({
  components: {
  },
})
export default class DashBoard extends Vue {
mounted() {
  console.log(echarts);
}

}

</script>
