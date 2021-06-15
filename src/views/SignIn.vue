<template>
  <div class="formContainer">
    <div>User Login</div>
    <form @submit.prevent="">
      <input v-model="userName" type="text" placeholder="example@domain.com" />
      <input v-model="password" type="password" />
      <button @click="authenticate">Click me</button>
    </form>
    <!-- <div v-for="data in myData" :key="data.id">{{data.username}}</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import store from "../store";
export default defineComponent({
  name: "SignIn",
  data() {
    return {
      dataUser:store,
      userName: "",
      password: "",
      auth: false,
      correctUserName: "testuser",
      correctPassword: "pass",
    };
  },
  methods: {
    authenticate() {
      if (
        this.userName === this.correctUserName &&
        this.password === this.correctPassword
      )
        store.user=this.userName;
       console.log(this.dataUser);
    },
  },
});
</script>

<style>
.formContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
.formContainer form {
  display: flex;
  flex-direction: column;
}
.formContainer input {
  display: flex;
  flex-direction: column;
  margin: 1em;
}
</style>