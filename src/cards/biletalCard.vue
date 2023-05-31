<template>
  <v-container fluid>
    <v-card class="card">
      <v-row no-gutters>
        <v-col cols="6" class="text-center">
          <v-card-text>
            <div class="text-container">
              <p class="centered-text">bütünbütün eventler bibütün eventler biletbütün eventler biletletbütün eventler biletbütün eventler biletbütün eventler bilet eventler bilet</p>
            <v-col>
            <v-icon>mdi-ticket</v-icon>
            <v-btn outlined href="https://biletino.com/tr/u-jfvc/fun-for-favor/">Tüm Etkinlik Biletleri İçin</v-btn>
          <v-icon>mdi-ticket</v-icon>
          </v-col>
            </div>
          </v-card-text>
          
        </v-col> 
        <v-col cols="6">
          <v-img src="@/assets/playingdogs.jpg" class="image"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "eventCard",
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 70%;
  height: 50vh;
  margin-left: 15%;
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

.centered-text {
  text-align: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>
