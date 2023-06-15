<template>
  <div>
    <v-container fluid>
      <v-toolbar flat class="mainHeader" hide-on-scroll >
        <router-link to="/">
            <img src="@/assets/funforfavorlogo.png" alt="Logo" style="max-width: 250px; max-height: 220px;" />
        </router-link>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/" link class="mr-4" active-class="custom-active-class">
              <v-list-item-content>
                <v-list-item-title>ANASAYFA</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/hakkimizda" link class="mr-4" active-class="custom-active-class">
              <v-list-item-content>
                <v-list-item-title>HAKKIMIZDA</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/etkinlikler" link active-class="custom-active-class">
              <v-list-item-content>
                <v-list-item-title>DAYANIŞMA FESTİVALİ</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
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

@media (min-width: 600px) {
  .hidden-xs-only {
    display: none !important;
  }
}
</style>
