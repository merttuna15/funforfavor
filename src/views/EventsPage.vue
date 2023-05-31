<template>
  <div class="page">
  <eventCard ></eventCard>
  </div>
</template>

<script>
import eventCard from '@/cards/eventCard'

export default {
  name: "eventPage",
    components: {eventCard}
};
</script>

<style>
.page {
  background-color: #38b22f;
}
</style>