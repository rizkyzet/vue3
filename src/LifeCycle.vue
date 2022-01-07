<template>
  <div id="lifecycle">{{ message }}</div>

  <button @click="message = 'tulisan setelah di render ulang'">Update</button>
</template>
<script>
export default {
  data() {
    return {
      message: "text awal",
    };
  },
  beforeCreate() {
    console.log("before Create");
  },
  created() {
    // Buat fetch API
    console.log("created");
    console.log(this.message);
    console.log(document.getElementById("lifecycle"));
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    console.log(this.message);
    console.log(document.getElementById("lifecycle"));
  },
  beforeUpdate() {
    console.log("before update");
    console.log(document.getElementById('lifecycle').textContent)
  },
  updated() {
    console.log("updated");
     console.log(document.getElementById('lifecycle').textContent)
  },
  beforeUnmount() {
    console.log("before destroy");
  },
  unmounted() {
    console.log("before destroyed");
  },
};
</script>
<style lang=""></style>
