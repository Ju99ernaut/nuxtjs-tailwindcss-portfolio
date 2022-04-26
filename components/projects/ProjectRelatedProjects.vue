<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["projects"]),
    filteredProjects() {
      return this.firstFour(this.filterProjectsByCategory());
    },
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },
  methods: {
    firstFour(projects) {
      return projects
        .filter((item) => item.id !== this.project?.id)
        .slice(0, 4);
    },
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(this.project?.category);
      });
    },
  },
  data: () => {
    return {
      relatedProject: {
        relatedProjectsHeading: "Related Projects",
      },
    };
  },
};
</script>

<template>
  <div
    class="
      mt-10
      pt-10
      sm:pt-14 sm:mt-20
      border-t-2 border-primary-light
      dark:border-secondary-dark
    "
  >
    <p
      class="
        font-general-regular
        text-primary-dark
        dark:text-primary-light
        text-3xl
        font-bold
        mb-10
        sm:mb-14
        text-left
      "
    >
      {{ relatedProject.relatedProjectsHeading }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="item in filteredProjects" :key="item.id">
        <NuxtLink :to="`/projects/${item.id}`">
          <img
            :src="item.img"
            class="rounded-xl cursor-pointer"
            :alt="item.title"
          />
        </NuxtLink>
      </div>
    </div>

    <!-- Load not found components if no project found -->
    <div
      v-if="!filteredProjects.length"
      class="
        font-general-semibold
        text-xl text-ternary-dark
        dark:text-ternary-light
        font-semibold
        container
        text-center
      "
    >
      <h1>No related projects</h1>
    </div>
  </div>
</template>
