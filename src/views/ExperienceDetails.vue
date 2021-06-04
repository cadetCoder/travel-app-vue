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
    experiencesSlug: {
      type: String,
      require: true,
    },
  },
};
</script>
