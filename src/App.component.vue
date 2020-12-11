<template>
  <main>
    <RobotBuilder />
  </main>
</template>

<script>
// import RobotPage from "@/pages/Robot.page.vue";
import RobotBuilder from "@/components/RobotBuilder.component";

export default {
  name: "App",
  components: {
    // RobotPage,
    RobotBuilder
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
