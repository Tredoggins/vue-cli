<template>
  <div class="book">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
  </div>
</template>

<script>
import Media from "@/components/Media";
export default {
  name: "Movie",
  extends: Media
}
</script>

<style scoped>

</style>