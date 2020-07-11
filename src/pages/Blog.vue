<template>
  <Layout>
    <div class="blog sub-page-container">
      <h1 class="my-4 mb-5">Blog</h1>

      <form v-on:submit.prevent>
        <input class="search-field" v-model="searchTerm" type="text" placeholder="Search through" />
      </form>

      <div class="blog-content">
        <g-link
          :to="item.node.path"
          v-for="item in searchResults"
          :key="item.node.id"
          class="blog-post"
        >
          <div class="media my-5">
            <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
            <div class="media-body">
              <h5 class="mt-0 blog-title">{{ item.node.title }}</h5>
              <p class="text-dark">{{ item.node.excerpt }}</p>
            </div>
          </div>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Blog {
	posts: allBlogPost(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Blog",
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length > 2) {
        return this.$page.posts.edges.filter(post =>
          post.node.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.$page.posts.edges;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/general.scss";

form {
  display: flex;
  justify-content: center;

  .search-field {
    width: 500px;
    height: 70px;
    border-radius: 50px;
    padding: 20px;
    border: 1px solid #0a0540;
    transition: border 150ms;
    margin-bottom: 50px;

    &:hover {
      border: 2px solid #1a117a;
    }

    &:focus {
      outline: none;
    }
  }
}

.blog-content {
  display: flex;
  flex-wrap: wrap;

  .blog-post {
    flex: 1 0 30%;
    padding: 0 30px;
    border: 1px solid #000;
    border-radius: 20px;
    margin: 20px;
    transition: background-color 150ms;

    &:hover {
      background-color: #352b9c;

      h5 {
        color: white;
      }
      p {
        color: white !important;
      }
    }

    .blog-title {
      color: #000;
    }
  }
}

.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>
