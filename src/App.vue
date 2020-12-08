<template>
  <main>
    <RobotPage />
  </main>
</template>

<script>
import RobotPage from "./components/RobotPage.vue";

export default {
  name: "App",
  components: {
    RobotPage
  }
};
</script>

<style>
body {
  margin: 0;
}
main {
  min-height: 100vh;
}
</style>
