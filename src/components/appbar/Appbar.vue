<template>
  <div>
    <v-container>
      <v-toolbar flat class="mainHeader" hide-on-scroll scroll-target="#scrolling-techniques-4">
        <router-link to="/">
            <img src="@/assets/funforfavorlogo.png" alt="Logo" style="max-width: 250px; max-height: 220px;" />
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
         <v-list>
  <v-list-item-group class="d-flex">
    <v-list-item to="/" link class="mr-4">
      <v-list-item-content>
        <v-list-item-title>ANASAYFA</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/hakkimizda" link class="mr-4">
      <v-list-item-content>
        <v-list-item-title>HAKKIMIZDA</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item to="/etkinlikler" link>
      <v-list-item-content>
        <v-list-item-title>DAYANIŞMA FESTİVALİ</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</v-list>
          <!-- <v-btn class="black--text" text style="text-decoration: none;">
            <router-link to="/iletisim" style="text-decoration: none;"><span style="color: black;">İletişim</span></router-link>
          </v-btn> -->
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "customNavbar",
  data() {
    return {};
  },
  methods: {
    goToLink(link) {
      window.location.href = link;
    },
  },
};
</script>

<style scoped>
.mainHeader {
  padding-left: 5%;
  padding-right: 5%;
}

.custom-active-class {
  background-color: white !important; /* Butonun arka plan rengini beyaz olarak ayarlayın */
  color: black !important; /* Butonun metin rengini siyah olarak ayarlayın */
}


</style>
