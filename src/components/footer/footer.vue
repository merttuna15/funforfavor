<template>
    <v-container fluid>
      <v-row align="center" justify="center" class="footer-row">
        <v-col cols="12" md="2">
          <div class="text-center">
            <h4 class="footer-title">İletişim</h4>
            <p class="footer-text">
              E-posta: iletisim@funforfavor.org
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="text-center">
            <h4 class="footer-title">Sosyal Medya</h4>
            <v-row justify="center" align="center" class="mb-1">
              <v-btn icon href="https://www.instagram.com/funforfavor/" class="mr-2; mt-1">
                <v-icon size="20">mdi-instagram</v-icon>
              </v-btn>
              <v-btn class="mt-1" icon href="https://biletino.com/tr/u-jfvc/fun-for-favor/">
                <v-icon size="20">mdi-ticket</v-icon>
              </v-btn>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<style>
.footer {
  text-align: center;
}

.footer-row {
  justify-content: center;
}

.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
export default {
  name: 'FooterComp'
}
</script>
