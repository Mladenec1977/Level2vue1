<template>
  <div class="hello">
    <router-link class="panel"
                 v-for="board in boards"
                 :key="board.id"
                 tag="div"
                 :to=" '/board/' + board.id ">
      {{ board.title }}
    </router-link>
    <div class="panel">
      <button>+ создать доску</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  data: () => ({
    boards: [
      { id: 1, title: 'покупки' },
      { id: 2, title: 'подготовка к свадьбе' },
      { id: 3, title: 'разработка интернет-магазина' },
      { id: 4, title: 'курс по продвижению в соцсетях' },
    ],
  }),
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.panel {
  background: cyan;
  width: 250px;
  height: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: brown;
  font-size: 25px;
}
button {
  width: 100%;
  height: 100%;
}
</style>
