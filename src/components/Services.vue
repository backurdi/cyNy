<template>
  <div class="services">
    <h1>Ydelser</h1>
    <div class="content">
      <div v-for="(data, index) of servicesData" :key="index">
        <div class="title-image" :style="{backgroundImage: `url(${data.titleImage})`}">
          <h3>{{data.title}}</h3>
        </div>
        <ul>
          <li v-for="(listItem, index) of data.listItems" :key="index">{{listItem}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fileEmpty from "~/assets/images/SVG/files-empty.svg";
import book from "~/assets/images/SVG/book.svg";
import chest from "~/assets/images/SVG/chest.svg";
import city from "~/assets/images/SVG/location_city.svg";
import money from "~/assets/images/SVG/money.svg";
import smiley from "~/assets/images/SVG/sentiment_satisfied_alt.svg";

export default {
  data: () => {
    return {
      fileEmpty,
      servicesData: [
        {
          title: "Årsafslutning",
          titleImage: fileEmpty,
          listItems: [
            "Årsrapporter for selskaber og personlige virksomheder",
            "Udarbejdelse af interne og eksterne årsregnskaber",
            "Indberetning til Erhvervsstyrelsen"
          ]
        },
        {
          title: "Bogholderi",
          titleImage: book,
          listItems: [
            "Bogføring af finanser og transaktionsflow",
            "Afstemninger af debitorer, kreditorer, skatter og finansiering",
            "Indberetning moms og lønsumsafgift"
          ]
        },
        {
          title: "Lønadministration",
          titleImage: money,
          listItems: [
            "Rettelse af ansattes forskudsopgørelser",
            "Ferie & Pension",
            "Overenskomster"
          ]
        },
        {
          title: "Køb og salg af virksomheder",
          titleImage: city,
          listItems: [
            "Budgettering og værdiansættelse af virksomheder",
            "Proces og plan for virksomheds overdragelser",
            "Sparring og råd hele vejen"
          ]
        },
        {
          title: "Forhandling og forlig",
          titleImage: smiley,
          listItems: [
            "Forhandlinger med bank og realkredit",
            "Forhandlinger med Skattestyrelsen ved sikkerhedsstillelser",
            "Forhandlinger med Gældsstyrelsen ved gammel gæld"
          ]
        },
        {
          title: "Skatteplanlægning",
          titleImage: chest,
          listItems: [
            "Skattepligt for personer og selskaber",
            "Muligheder, faldgrubber og betingelser",
            "Plan for skattebetaling i forhold til virksomhedens rejse"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.services {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    margin-bottom: 200px;

    & > div {
      flex: 1 0 50%;

      h3 {
        text-align: center;
      }
    }

    .title-image {
      background-repeat: no-repeat;
    }
  }
}
</style>