<template>
  <v-app class="app">
    <AppbarVue></AppbarVue>
    <v-main>
      <router-view />
    </v-main>
    <div class="scroll-up-button" v-show="showScrollButton" @click="scrollToTop">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
      <v-icon class="scroll-up-icon" color="white">mdi-chevron-up</v-icon>
    </div>
    <v-footer>
      <footerCom></footerCom>
    </v-footer>
  </v-app>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import footerCom from "@/components/footer/footer.vue";

export default {
  components: { AppbarVue, footerCom },
  data() {
    return {
      showScrollButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showScrollButton = scrollPosition > 0;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.scroll-up-button {
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 50px;
  height: 50px;
  background-color: #2b2b2b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
  transition: background-color 0.3s;
}

.scroll-up-button:hover {
  background-color: #2b2b2b;
}
</style>
