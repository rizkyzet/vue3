<template lang="">
    <div :class="status ? 'success' : 'failed' ">
        STATUS
    </div>
    <button @click="status=!status">Change</button>
    <div :class="[boldClass,greenClass]">TES</div>
</template>
<script>
export default {
  data() {
    return {
      status: true,
      boldClass: "bold",
      greenClass: "success",
    };
  },
};
</script>

<style scoped>
.success {
  color: green;
}

.failed {
  color: red;
}

.bold {
  font-weight: 700;
}
</style>