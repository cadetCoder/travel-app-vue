/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ destination.name }}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      require: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        // eslint-disable-next-line prettier/prettier
        destination => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        // eslint-disable-next-line prettier/prettier
        experience => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
</style>
