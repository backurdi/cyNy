<template>
  <Layout index="true">
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
    title: "Cy Revision"
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
.sub-page-container {
  padding: 0 50px;
}
</style>
