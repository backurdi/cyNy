<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header :style="[index ? style1 : style2]" />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  props: ["index"],
  components: {
    Footer,
    Header
  },
  created: () => {},
  data() {
    return {
      style1: {
        background: "transparent"
      },
      style2: {
        background: "#0a0540"
      }
    };
  }
};
</script>


<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
