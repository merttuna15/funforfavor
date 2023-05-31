<template>
  <div class="page">
  <v-spacer></v-spacer>
  <hakkimizdaCard></hakkimizdaCard>
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

.page {
  background-color: #38b22f;
}
</style>