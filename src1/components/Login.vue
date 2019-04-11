<template>
    <div class="hello">
    <v-container fill-height style="max-width:450px;">
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <!-- <v-alert
                    class="mb-3"
                    :value="isLoginError"
                    type="error"
                    >
                        Check your ID and PW.
                    </v-alert> -->
                    <!-- <v-alert
                    class="mb-3"
                    :value="isLogin"
                    type="success"
                    >
                        Success Login.
                    </v-alert> -->
                    <v-card>
                        <v-toolbar flat height="30">
                            <v-toolbar-title></v-toolbar-title>
                        </v-toolbar>
                        <div class="pa-3">
                        <v-text-field
                            v-model="email"
                            label="Enter the Email"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="password"
                            label="Enter the Password"
                            type="password"
                        >
                        </v-text-field>
                        <v-btn
                            color="primary"
                            depressed
                            block
                            large
                            @click="login({
                                email:email,
                                password:password
                            })"
                        >
                            Login

                        </v-btn>
                        </div>
                        
                    </v-card>
                    
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
   email:string = '';
   password:string = '';
   login(user){
       console.log(user)
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  width: 100%;
  height: 100%;
  background-image: url('../image/2.gif');
}
</style>
