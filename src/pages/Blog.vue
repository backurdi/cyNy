<template>
  <Layout>
    <div class="blog sub-page-container">
      <h1 class="my-4 mb-5">Blog</h1>

      <div class="blog-content">
        <g-link
          :to="item.node.path"
          v-for="item in $page.posts.edges"
          :key="item.node.id"
          class="blog-post"
        >
          <div class="media my-5">
            <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
            <div class="media-body">
              <h5 class="mt-0 blog-title">{{item.node.title}}</h5>
              <p class="text-dark">{{item.node.excerpt}}</p>
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

<style lang="scss" scoped>
@import "../assets/styles/general.scss";

.blog-content {
  display: flex;
  flex-wrap: wrap;

  .blog-post {
    flex: 1 0 30%;
    padding: 0 30px;
    border: 1px solid #000;
    border-radius: 20px;
    margin: 20px;

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
