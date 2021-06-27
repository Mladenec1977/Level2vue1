<template>
  <div class="board">
    <h2>{{ title }}</h2>
    <h3>{{$route.params.board_id}}</h3>
    <div class="row">
      <List />
      <div>
        <button>+ добавить список</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import List from '@/components/List.vue';

export default Vue.extend({
  name: 'Board',
  data() {
    return {
      title: 'Моя тестовая доска',
    };
  },
  components: {
    List,
  },
});
</script>

<style>
.board {
  height: 93%;
  margin: 5px 20px;
}
.row {
  display: flex;
  flex-direction: row;
}

button {
  background: chartreuse;
  padding: 4px;
}
</style>
