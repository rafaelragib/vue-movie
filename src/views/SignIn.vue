<template>
  <div class="formContainer">
    <div>User Login</div>
    <form @submit.prevent="">
      <input text="email" placeholder="example@domain.com" />
      <input text="password" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    readFile() {
    },
  },
};
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