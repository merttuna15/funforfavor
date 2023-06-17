<template>
  <v-container fluid>
    <v-card class="card">
      <v-img src="@/assets/BILETINO-17-HAZIRAN.jpg" class="image" max-width="100%" height="auto"></v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "welcomeCard",
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
