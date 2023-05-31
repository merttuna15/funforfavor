<template>
  <v-container fluid>
    <v-card class="card">
      <v-row no-gutters>
        <v-col cols="6" class="text-center">
          <v-card-text>
            <div class="text-container">
              <p class="centered-text">Dayanışma Festivali yardımsever, üretken ve sevginin ekseninde bir toplumsal bilincin gelişmesini sağlamak amacıyla 20’den fazla sanatçıyı, sanatı ve sanatseveri dopdolu bir programla 23 Haziran Cuma günü Club Mirador’da buluşturuyor!</p>
              <p class="centered-text">Festivalimiz kendi mesleklerinde çok başarılı olmalarının yanı sıra toplumsal konulara duyarlılık göstermiş, empati ruhunun yaygınlaşmasına katkıda bulunmuş, sosyal sorumluluk projelerinde istikrarlı biçimde yer almış ve deprem sürecinde seferber olmuş sanatçılara ve müzisyenlere teşekkür etmek amacıyla düzenlenen Dayanışma Ödülleri'ne ve iki ayrı sahnede farklı müzikal tarzlarda eş zamanlı olarak gerçekleşecek konser programına ev sahipliği yapacaktır.</p>
              <p class="centered-text">Aktivite stantları, interaktif etkinlikler & oyunlar, bilim, sanat ve zanaat atölyeleri, resim & çizim alanları, yoga & meditasyon bölgeleri ve havuz aktiviteleri müzik ve sanata eşlik edecektir.</p>
              <p class="centered-text">*Festivalimizde elde edilen tüm gelirler deprem bölgesinde tarifsiz kayıplar vermiş insanlarımıza destek olmak amacıyla Ahbap Derneği’ne ve İhtiyaç Haritası'na bağışlanacaktır.</p>
                <p class="centered-text">#funforfavor</p>
          <v-icon>mdi-ticket</v-icon>
              <v-btn outlined href="https://biletino.com/tr/e-nkr/dayanisma-festivali/">Bilet Almak İçin</v-btn>
          <v-icon>mdi-ticket</v-icon>
            </div>
          </v-card-text>
        </v-col> 
        <v-col cols="6">
          <v-img src="@/assets/inner-1.jpg" class="image"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "homePage1",
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
}
</style>