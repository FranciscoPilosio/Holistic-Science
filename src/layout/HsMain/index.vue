<template>
  <section id="projectSection">
    <h1>Quien soy?</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore
      numquam ullam temporibus itaque, libero, maiores mollitia modi fuga fugiat
      quia ipsam. Ad ratione totam voluptas inventore assumenda esse natus!
    </p>
    <h2>Que hago?</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet
      animi a cum nobis iste illum ab vero quidem. Ea, consequuntur consequatur?
      Eius perferendis eveniet ea, doloribus dignissimos recusandae quae.
      <br />
      <br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est incidunt
      quidem voluptatum tempore quasi iste, minima nemo. Sequi, atque. Ut quae
      ipsa sequi in soluta rem fugit et a animi.
    </p>
    <h2>Propuestas</h2>

    <div class="row">
      <div class="column">
        <div class="card">
          <div class="recentProjects">
            <h4 class="header-background">XXXX</h4>
            <p class="card-style"><br /><br /><br /><br /></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="recentProjects">
            <h4 class="header-background">XXXXX</h4>
            <p class="card-style"><br /><br /><br /><br /></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HsMain",
  setup(props) {},
};
</script>

<style>
h1 {
  font-weight: bold;
  font-size: 40px;
  color: #292e47;
  margin-bottom: 50px;
}
h2 {
  font-weight: bold;
  font-size: 30px;
  color: #292e47;
  margin: 50px 0 50px 0;
}
.column {
  float: left;
  width: auto;
  padding: 0 40px 0 0;
}

.row {
  margin: 0;
  display: inline-flex;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: inherit;
  background-color: white;
  padding-bottom: 5px;
  padding-top: 10px;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
}
</style>
