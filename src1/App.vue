<template>
  <v-app>
    <!-- <HelloWorld /> -->
    <core-filter v-if="test"/>

    <core-toolbar v-if="test"/>

    <core-drawer v-if="test"/>

    <core-view v-if="test"/>
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
test:boolean = true;
}
</script>
