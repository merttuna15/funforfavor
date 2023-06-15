<template>
<v-container>
  <v-card class="card" max-width="1000"  >
    <v-container class="text-container">
    <v-card-text>
      <p class="centered-text">Biz; gençler olarak iyiliğin, müziğin ve sanatın birleştirici gücüne inanıyoruz.</p>
              <p class="centered-text">Projemiz, insanların birbirine ve dünyaya karşı sorumluluklarını yerine getirirken yardımlaşma ve dayanışma kültürünü güçlendirmeyi hedefler. Bunun yanı sıra, üretkenliği ve yaratıcılığı teşvik etmek de projemizin önemli amaçlarındandır. Son olarak, vizyonumuz sevgi ve dayanışmanın merkezde olduğu bir toplum inşasına katkıda bulunmaktır.</p>
              <p class="centered-text">Bu vizyon doğrultusunda, “entertaining” kanallarıyla desteklenen etkinlikler aracılığıyla toplumda bu kıymetli değerlerin yayılmasını ve güçlenmesini amaçlıyoruz. </p>
              <p class="centered-text">Fun For Favor olarak, her bireyin değerli ve katkısının önemli olduğu bu vizyon için çalışıyoruz.</p>  
    </v-card-text>
      </v-container>    
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


<style>
.centered-text {
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  margin: 2px;
}

.card {
  width: 100%;
  margin: 0 auto;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>