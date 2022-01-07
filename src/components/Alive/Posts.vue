<template>
  <div v-for="post in posts" :key="post">
    <span>{{ post.name }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        
      ],
    };
  },
  async created() {
    const res = await fetch("https://swapi.dev/api/planets");
    const { results } = await res.json();
    this.posts = results;

    // const res = fetch("https://swapi.dev/api/planets");
    // res
    //   .then((result) => result.json())
    //   .then(({results}) => {
    //     this.posts = results;
    //   });
  },
};
</script>
