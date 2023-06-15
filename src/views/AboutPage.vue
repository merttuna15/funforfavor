<template>
  <div class="page">
    <v-spacer></v-spacer>
    <v-container fluid>
      <v-img src="@/assets/web-site-biz-kimiz.jpg" class="centered-image" contain max-width="100%" max-height="600"></v-img>
    </v-container>
    <hakkimizdaCard></hakkimizdaCard>
    <v-container class="text-container">
      <v-img src="@/assets/web-site-vizyon.jpg" class="centered-image" contain max-width="100%" max-height="600"></v-img>
    </v-container>
    <misyonvizyonCard></misyonvizyonCard>
  </div>
</template>

<script>
import hakkimizdaCard from '@/cards/hakkimizdaCard'
import misyonvizyonCard from '@/cards/misyonvizyonCard'

export default {
  name: "aboutPage",
  components: {
    hakkimizdaCard,
    misyonvizyonCard
  }
};
</script>

<style>
.centered-image {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .centered-image {
    max-width: 100%;
  }
}
</style>
