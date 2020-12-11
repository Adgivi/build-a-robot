<template>
  <div class="robot-page">
    <img :src="require('../assets/robot-home.png')" alt="robot" class="robot" />
  </div>
</template>

<script>
export default {
  name: "HelloPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.robot-page {
  position: relative;
  min-height: 100vh;
}
.robot {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 95vh;
}
</style>
