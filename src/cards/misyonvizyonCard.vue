<template>
  <v-container fluid>
    <v-card class="card">
      <v-row no-gutters>
        <v-col cols="6" class="text-center">
          <v-card-text>
            <div class="text-container">
              <p class="centered-text">Biz; gençler olarak iyiliğin, müziğin ve sanatın birleştirici gücüne inanıyoruz.</p>
              <p class="centered-text">Projemiz, insanların birbirine ve dünyaya karşı sorumluluklarını yerine getirirken yardımlaşma ve dayanışma kültürünü güçlendirmeyi hedefler. Bunun yanı sıra, üretkenliği ve yaratıcılığı teşvik etmek de projemizin önemli amaçlarındandır. Son olarak, vizyonumuz sevgi ve dayanışmanın merkezde olduğu bir toplum inşasına katkıda bulunmaktır.</p>
              <p class="centered-text">Bu vizyon doğrultusunda, “entertaining” kanallarıyla desteklenen etkinlikler aracılığıyla toplumda bu kıymetli değerlerin yayılmasını ve güçlenmesini amaçlıyoruz. </p>
              <p class="centered-text">Fun For Favor olarak, her bireyin değerli ve katkısının önemli olduğu bu vizyon için çalışıyoruz.</p>            
            </div>
          </v-card-text>
        </v-col> 
        <v-col cols="6">
          <v-img src="@/assets/web-site-vizyon.png" class="image"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "misyonCard",
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 70%;
  height: 70vh;
  margin-left: 15%;
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

