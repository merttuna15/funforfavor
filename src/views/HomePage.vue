<template>
  <div class="page">
    <welcomeCard></welcomeCard>
    <homePage1></homePage1>
  </div>
</template>

<script>
import welcomeCard from '@/cards/welcomeCard'
import homePage1 from '@/cards/homePage-1'

export default {
  name: "homePage",
  components: {
    welcomeCard, 
    homePage1,
  }
};
</script>

<style scoped>
.page {
  background-color: #38b22f;
}
</style>
