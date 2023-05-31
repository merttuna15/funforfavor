<template>
  <v-container fluid>
    <v-card class="card">
      <v-row no-gutters>
        <v-col cols="6" class="text-center">
          <v-container class="container">
            <v-row>
              <v-col cols="12" md="8" class="footer-column">
                <h3 class="black--text">FunForFavor -- LOGO GELEBİLİR --</h3>
                <p class="black--text">
                  Ankara, Türkiye
                </p>
              </v-col>
              <v-col cols="12" md="8" class="footer-column">
                <h4 class="black--text">İletişim Bilgileri</h4>
                <p class="black--text">
                  E-posta: example@example.com<br>
                  Telefon: +90 123 456 7890
                </p>
              </v-col>
              <v-col cols="12" md="8" class="footer-column">
                <h4 class="black--text">Sosyal Medya</h4>
                <v-btn icon class="mr-2" href="https://www.instagram.com/funforfavor/">
                  <v-icon size="24">mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon class="mr-2" href="https://biletino.com/tr/u-jfvc/fun-for-favor/">
                  <v-icon size="24">mdi-ticket</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon size="24">mdi-youtube</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "iletisimCard",
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.text-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
}

.footer-column {
  margin: 0 auto;
}
</style>
