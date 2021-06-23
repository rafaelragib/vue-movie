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
import { store } from "../store";
export default defineComponent({
  name: "SignIn",
  data() {
    return {
      dataUser: store,
      userName: "",
      password: "",
    };
  },
  methods: {
    async authenticate() {
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.userName,
          password: this.password,
        }),
      };
      fetch("http://localhost:3000/login", request).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            store.token = data.token;
            store.userId = data.userId;
           
            console.log(data.userId);
            this.$emit("updateUserId", data.links.watchlist);
            this.populateWatchList(data.links.watchlist);
          });
        } else {
          alert("wrong password and user");
        }
      }).catch(error=>{
        console.log(error);
      });
    },
    async populateWatchList(getLink: string) {
      try {
        const response = await fetch(getLink);

        const data = await response.json();
        store.watchList = data;
        //   console.log(store.watchList);
        //  store.watchList=data.watchList;
        //  this.val=data.watchList;
      } catch (error) {
        console.log(error);
      }
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
  padding: 0 0.5em;
}
</style>