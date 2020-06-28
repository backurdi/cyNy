<template>
  <Layout>
    <div class="about sub-page-container">
      <h1>Om os</h1>
      <div class="cy-story">
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
    </div>

    <div class="team">
      <h1>Vores team</h1>
      <div class="team-members">
        <div class="member" v-for="item in $page.posts.edges" :key="item.node.id">
          <img :src="item.node.employee_image.src" class="mr-3" alt="image" />
          <div class="member-body">
            <h5 class="mt-0">{{item.node.name}}</h5>
            <p class="text-dark">{{item.node.employee_description}}</p>
          </div>
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
@import "../assets/styles/general.scss";
h1 {
  text-align: center;
}

.cy-story {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 500px;
  }
}
.about-image {
  display: block;
  width: 30%;
  padding-bottom: 50px;
  margin-right: 40px;
}

.team {
  margin: 150px 0;

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
}
.team-members {
  display: flex;
  justify-content: center;
}
.member {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 50px;
  }

  img {
    border-radius: 50%;
  }
}
</style>
