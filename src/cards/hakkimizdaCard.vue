<template>
  <v-container fluid>
    <v-card class="card">
      <v-row no-gutters>
        <v-col cols="6" class="text-center">
          <v-card-text>
            <div class="text-container">
              <p class="centered-text">Fun For Favor; yardımsever, üretken ve sevginin ekseninde hareket ederek toplumdaki yardımlaşma ve dayanışma bilincini güçlendirmek için hayata geçirilmiş üniversite tabanlı bir sosyal girişimcilik projesidir.</p>
              <p class="centered-text">
  Çeşitli etkinlikler, sanat ve müzik gibi yaratıcı araçları dayanışma ve iyilik faaliyetlerine entegre ederek, insanların bu etkinliklere ilgi göstermesini ve katkıda bulunmasını sağlıyoruz. Bu sayede, ihtiyaç sahiplerine destek olurken pozitif bir etki yaratıp dayanışma ağlarının oluşmasına katkı sağlıyoruz.
</p>
            </div>
          </v-card-text>
        </v-col> 
        <v-col cols="6">
          <v-img src="@/assets/web-site-biz-kimiz.png" class="image"></v-img>
        </v-col>
      </v-row>
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

<style scoped>
.card {
  width: 70%;
  height: 70vh;
  margin-left: 15% ;
  display: flex;
  justify-content: center;
  align-items: center;
}


.image {
  width: 99%;
  height: 100%;
  object-fit: cover;
}

.text-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered-text {
  text-align: center;
  font-size: 25px; /* Yazıların puntosunu burada ayarlayabilirsiniz */
  line-height: 1.2; /* Satırlar arasındaki boşluğu burada ayarlayabilirsiniz */
}

</style>