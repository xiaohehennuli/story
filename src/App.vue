<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
    document.addEventListener("keydown", function (event) {
      if (
        event.keyCode === 123 ||
        (event.ctrlKey && event.shiftKey && event.keyCode === 73)
      ) {
        event.preventDefault();
      }
    });
  },

  methods: {},
};
</script>

<style scoped></style>
