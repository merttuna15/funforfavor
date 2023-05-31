<template>
  <div class="page">
  <iletisimCard></iletisimCard>
  </div>
</template>

<script>
import iletisimCard from '@/cards/iletisimCard'

export default {
  name: "contactPage",
components: {iletisimCard}
};
</script>

<style>
.car {
  width: 1200px;
  height: 400px;
  align-items: center;
  margin-left: 300px;
}

.page {
  background-color: #38b22f;
}
</style>