<template>
  <Layout>
    <Hero />
    <WhyUs />
    <Services />
    <Action />
  </Layout>
</template>

<script>
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Action from "../components/Action";

export default {
  metaInfo: {
    title: "Gridsome starter bootstrap"
  },

  components: {
    Hero,
    WhyUs,
    Services,
    Action
  }
};
</script>

<style lang="scss">
.hero {
  margin-bottom: 200px;
}
</style>
