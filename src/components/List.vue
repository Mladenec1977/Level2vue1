<template>
  <div class="row">
    <div class="pillar"
         v-for="list in lists"
         :key="list.id">
      <h2>{{ list.title }}</h2>
      <Card class="card"
            v-for="card in list.cards"
            :key="card.id"
            :title="card.title"/>
      <button>+ добавить карточку</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ICard } from '@/common/interfaces/card.d.ts';
import Card from '@/components/Card.vue';

export default Vue.extend({
  name: 'List',
  props: {
    id: Number,
    title: String,
    cards: Object as PropType<ICard[]>,
  },
  data: () => ({
    lists: [
      {
        id: 1,
        title: 'Планы',
        cards: [
          { id: 1, title: 'помыть кота' },
          { id: 2, title: 'приготовить суп' },
          { id: 3, title: 'сходить в магазин' },
        ],
      },
      {
        id: 2,
        title: 'В процессе',
        cards: [
          { id: 4, title: 'посмотреть сериал' },
        ],
      },
      {
        id: 3,
        title: 'Сделано',
        cards: [
          { id: 5, title: 'сделать домашку' },
          { id: 6, title: 'погулять с собакой' },
        ],
      },
    ],
  }),
  components: {
    Card,
  },
});

</script>

<style>
.card {
  background: antiquewhite;
  width: 80%;
  padding: 2px;
  margin: 5px auto;
}
.pillar {
  background: aqua;
  width: 200px;
  height: 50ex;
  margin: 20px;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
