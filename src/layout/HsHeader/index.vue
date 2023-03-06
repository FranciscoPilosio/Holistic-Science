<template>
  <nav id="nav-format">
    <ul class="flex-container-nav">
      <div class="flex-nav">
        <li id="home-nav">Nachito Project</li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HsHeader",
  //setup(props) {},
};
</script>

<style>
header {
  background-color: brown;
}
nav {
  background-color: brown;
}

.flex-container-nav {
  display: flex;
  flex-wrap: wrap;

  padding: 20px;
}

.flex-nav {
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
