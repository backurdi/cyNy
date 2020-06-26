<template>
  <div class="why-us">
    <h2>Hvorfor vælge os</h2>
    <div class="why-us-content">
      <div class="why-us-card">
        <div class="why-us-card-title">
          <svg class="why-us-card-title-icon">
            <use xlink:href="../assets/images/sprite.svg#icon-playlist_add_check" />
          </svg>
          <h4>Professionelt Team</h4>
        </div>
        <p>Hos CY har alle medarbejdere en længerevarende universitetsuddannelse. Vores faglige baggrund går hånd i hånd med en bred og solid erfaring. Derfor kan vi tilbyde vores kunder den helt rigtige løsning.</p>
      </div>
      <div class="why-us-card">
        <div class="why-us-card-title">
          <svg class="why-us-card-title-icon">
            <use xlink:href="../assets/images/sprite.svg#icon-error" />
          </svg>
          <h4>Brændslukning og proaktive handlinger</h4>
        </div>
        <p>Én af vores stærke sider er omgående handling på en opgave af hastende karakter. Vi løser problemerne omgående og sørger for at kunden får den korrekte rådgivning, så lignende situationer ikke opstår igen.</p>
      </div>
      <div class="why-us-card">
        <div class="why-us-card-title">
          <svg class="why-us-card-title-icon">
            <use xlink:href="../assets/images/sprite.svg#icon-history" />
          </svg>
          <h4>Altid i tide</h4>
        </div>
        <p>Planlægning for fremtiden er vores ekspertise. Vi er så sikre på at overholde vores del af aftalen, at vi selv står for betaling af bøder hvis det sker. Det sker nemlig ikke!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.why-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 40px;
  }

  &-content {
    display: flex;
    width: 90%;

    & > div {
      flex: 1 0 33%;
    }
  }

  &-card {
    background-color: #0a0540;
    border: 5px solid #faaf40;
    color: white;
    border-radius: 20px;
    padding: 10px 20px;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &-title {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &-icon {
        width: 50px;
        height: 50px;
        fill: white;
        margin-right: 10px;
      }

      h4 {
        font-size: 1rem;
      }
    }

    p {
      margin: 0;
    }
  }
}
</style>