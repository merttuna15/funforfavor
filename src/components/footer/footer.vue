<template>
    <v-container class="container">
      <v-row>
        <v-col class="footer-column">
          <v-img src="@/assets/footer.png" alt="Logo" class="logo-image"></v-img>
        </v-col>
        <v-col class="footer-column; mt-4">
          <h4 class="black--text">İletişim</h4>
          <p class="black--text">
            E-posta: iletisim@funforfavor.org<br>
          </p>
        </v-col>
        <v-col class="footer-column; mt-4">
          <h4 class="black--text">Sosyal Medya</h4>
          <v-btn icon class="mr-2" href="https://www.instagram.com/funforfavor/">
            <v-icon size="24">mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon class="mr-2" href="https://biletino.com/tr/u-jfvc/fun-for-favor/">
            <v-icon size="24">mdi-ticket</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "footerCom",
  data() {
    return {
      isFooterVisible: false,
    };
  },
}
</script>

<style scoped>
#footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.logo-image {
  max-width: 250px;
  max-height: 80px;
}

.container {
  margin-left: 17%;
}
</style>
