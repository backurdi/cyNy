<template>
  <div class="action">
    <div class="path"></div>
    <h1>Book os til en snak, om en fremtid til din økonomi</h1>
    <button>Book</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.action {
  background: linear-gradient(to right bottom, #faaf40, #dfc195);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  position: relative;

  .path {
    background-image: url("../assets/images/path-bottom.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: -179px;
    height: 180px;
    width: 101%;
  }

  h1 {
    font-weight: 600;
    font-size: 3rem;
    width: 700px;
    text-align: center;
    margin-bottom: 40px;
  }

  button {
    background: none;
    border: 1px solid #0a0540;
    border-radius: 20px;
    padding: 10px 40px;
    transition: 0.5s;

    &:hover {
      background-color: #0a0540;
      animation-duration: 2s;
      color: #dfc195;
    }
  }
}
</style>