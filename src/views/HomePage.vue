<template>
  <div class="page">
  <welcome-card></welcome-card>
    <homePage1></homePage1>
    <v-container class="text-container">
      <v-img
        src="@/assets/inner-1.jpg"
        class="centered-image"
        contain
        :max-width="getImageMaxWidth"
        aspect-ratio="1"
      ></v-img>
    </v-container>
  </div>
</template>

<script>
import homePage1 from '@/cards/homePage-1'
import welcomeCard from '@/cards/welcomeCard'

export default {
  name: "eventsPage",
  components: {
    homePage1,
    welcomeCard
  },
  computed: {
    getImageMaxWidth() {
      if (this.$vuetify.breakpoint.smAndUp) {
        return "50%";
      } else {
        return "100%";
      }
    },
  },
};
</script>

<style scoped>
.page {
  background-color: #38b22f;
}

.centered-image {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</style>
