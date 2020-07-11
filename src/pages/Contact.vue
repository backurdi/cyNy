<template>
  <Layout>
    <div class="contact sub-page-container">
      <div class="contact-container">
        <div class="contact-info"></div>
        <b-form
          class="contact-form"
          name="contact"
          method="post"
          @submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <h2>Kontakt os på</h2>
          <h3 class="adress">Borups allé 117, 2000 Frederiksberg</h3>
          <h3 class="number">+45 71 99 28 37</h3>
          <h3 class="email">kontakt@cyrevision.dk</h3>
          <input type="hidden" name="name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <h2>Eller udfyld og vi kontakter dig</h2>
          <b-form-group id="input-group-2" label="Name:" label-for="form-name">
            <b-form-input
              id="name"
              name="name"
              v-model="form.name"
              required
              placeholder="Enter name"
            />
          </b-form-group>

          <b-form-group id="input-group-1" label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              placeholder="Enter email"
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Message:" label-for="message">
            <b-form-textarea
              id="message"
              name="message"
              v-model="form.message"
              required
              placeholder="Enter message"
            />
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.form
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/general.scss";
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-info {
    text-align: center;
    flex-direction: column;
  }

  .contact-form {
    width: 100%;
    max-width: 700px;
    background: #0a0540;
    padding: 40px;
    border-radius: 20px;
    color: #fff;
    margin-bottom: 40px;

    h3 {
      text-align: center;
      font-size: 1rem;
    }

    h2 {
      font-size: 26px;
      margin-bottom: 20px;
      text-align: center;
      border-bottom: 1px solid white;
    }
  }
}
</style>
