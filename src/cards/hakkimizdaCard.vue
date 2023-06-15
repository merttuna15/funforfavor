<template>
<v-container >
  <v-card class="card" max-width="1000"  >
    <v-container class="text-container">
    <v-card-text>
      <p class="centered-text">Fun For Favor; yardımsever, üretken ve sevginin ekseninde hareket ederek toplumdaki yardımlaşma ve dayanışma bilincini güçlendirmek için hayata geçirilmiş üniversite tabanlı bir sosyal girişimcilik projesidir.</p>
      <p class="centered-text">Çeşitli etkinlikler, sanat ve müzik gibi yaratıcı araçları dayanışma ve iyilik faaliyetlerine entegre ederek, insanların bu etkinliklere ilgi göstermesini ve katkıda bulunmasını sağlıyoruz. Bu sayede, ihtiyaç sahiplerine destek olurken pozitif bir etki yaratıp dayanışma ağlarının oluşmasına katkı sağlıyoruz.</p>
    </v-card-text>
      </v-container>    
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: "hakkimizdaCard",
  data() {
    return {};
  },
};
</script>


<style>
.centered-text {
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  margin: 2px;
}

.card {
  width: 100%;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>