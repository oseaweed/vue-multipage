<template>
    <input type="button" value="1" @click="go()" />
</template>

<script>
export default {
  name: "second",
  methods: {
    go() {
      window.location.href = "/";
    }
  }
};
</script>
<style lang="scss">
#second {
  background: red;
}
</style>
