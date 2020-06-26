<template>
  <Layout>
    <div class="about">
      <img class="about-image" src="../../uploads/profile.svg" />
      <p>
        Vores virksomhed er etableret og stiftet af Ghazwan Cheikh-Youssef, derfra navnet CY.
        Vi består af 4 målfaste og dedikerede medarbejdere, som sammen står til rådighed for vores kunder.
        CY Revision har gennem de seneste år i branchen tilbudt ekspertise indenfor regnskab og rådgivning med særlig fokus på skat.
        Vi har beskæftiget os med skatteplanlægning og skatteoptimering for selskaber og private.
        Vi fører skattesager i Landsskatteretten og skatteankenævnet, og med tæt samarbejde med advokater er sagerne taget videre i Byretten og Landsretten.
        Herudover tilbyder vi vores kunder løbende eller årlig bogføring, lønadministration, styring af moms og lønsumsafgift – samt rådgivning ved køb eller stiftelse af ny virksomhed.
        Hos os får du altså meget mere end blot revision og regnskabsførelse. Vi bekymrer os, tager ansvar og tager fuld hånd om vores kunder.
        Som kunde hos CY opnår du et samlet overblik over din forretning eller personlige forhold, og vi rådgiver dig om hvilke tiltag der giver mening for at opnå den fremtid du ønsker for virksomheden.
        Vi vil være din foretrukne sparringspartner.
      </p>
    </div>

    <div
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="blog-post"
    >
      <div class="media my-5">
        <img :src="item.node.employee_image.src" class="mr-3" alt="image" />
        <div class="media-body">
          <h5 class="mt-0">{{item.node.name}}</h5>
          <p class="text-dark">{{item.node.employee_description}}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Employees {
	posts: allEmployees(sortBy: "date") {
    edges {
      node {
        name,
        employee_description,
        employee_image
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About"
  }
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;

  p {
    width: 400px;
  }
}
.about-image {
  display: block;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
