<template>
  <div class="hero">
    <h1>
      CY revision vil være din
      <br />foretrukkene sparingspartner
    </h1>
    <button>Lad os tage en snak</button>
    <div class="path"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero {
  background: linear-gradient(to right bottom, #0a0540, #000);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 100px 0;
  text-align: center;
  position: relative;

  .path {
    background-image: url("../assets/images/path.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: -180px;
    height: 180px;
    width: 101%;
  }

  h1 {
    font-size: 4rem;
    color: white;
  }

  button {
    margin-top: 40px;
    width: 150px;
    background: none;
    border: 1px solid #faaf40;
    color: white;
  }
}
</style>