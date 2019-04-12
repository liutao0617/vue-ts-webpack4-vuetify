<template>
  <v-app>
    <Login />
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
import Login from '@/components/Login.vue'; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class App extends Vue {
test:boolean = false;
}
</script>
