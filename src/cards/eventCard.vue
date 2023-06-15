<template>
  <v-container fluid>
    <v-card class="card" max-width="1500">
      <v-container class="text-container">
        <v-card-text>
          <p class="centered-text">Dayanışma Festivali yardımsever, üretken ve sevginin ekseninde bir toplumsal bilincin gelişmesini sağlamak amacıyla 20’den fazla sanatçıyı, sanatı ve sanatseveri dopdolu bir programla 23 Haziran Cuma günü Club Mirador’da buluşturuyor!</p>
          <p class="centered-text">Festivalimiz kendi mesleklerinde çok başarılı olmalarının yanı sıra toplumsal konulara duyarlılık göstermiş, empati ruhunun yaygınlaşmasına katkıda bulunmuş, sosyal sorumluluk projelerinde istikrarlı biçimde yer almış ve deprem sürecinde seferber olmuş sanatçılara ve müzisyenlere teşekkür etmek amacıyla düzenlenen Dayanışma Ödülleri'ne ve iki ayrı sahnede farklı müzikal tarzlarda eş zamanlı olarak gerçekleşecek konser programına ev sahipliği yapacaktır.</p>
          <p class="centered-text">Aktivite stantları, interaktif etkinlikler & oyunlar, bilim, sanat ve zanaat atölyeleri, resim & çizim alanları, yoga & meditasyon bölgeleri ve havuz aktiviteleri müzik ve sanata eşlik edecektir.</p>
          <p class="centered-text">*Festivalimizde elde edilen tüm gelirler deprem bölgesinde tarifsiz kayıplar vermiş insanlarımıza destek olmak amacıyla Ahbap Derneği’ne ve İhtiyaç Haritası'na bağışlanacaktır.</p>
          <p class="centered-text">#funforfavor</p>
          <div class="centered-text">
            <v-icon>mdi-ticket</v-icon>
            <v-btn outlined href="https://biletino.com/tr/e-nkr/dayanisma-festivali/">Bilet Almak İçin</v-btn>
            <v-icon>mdi-ticket</v-icon>
          </div>
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "homeCard",
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
