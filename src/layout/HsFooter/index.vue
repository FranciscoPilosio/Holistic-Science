<template>
  <footer class="flex-container-footer">Chau</footer>
</template>

<script>
export default {
  name: "HsFooter",
  //setup(props) {},
};
</script>

<style>
footer {
  background-color: green;
}

.flex-container-footer {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 20px;
}

.flex-nav {
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
