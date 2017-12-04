<template>
  <q-list highlight>
    <q-list-header>Recent ratings</q-list-header>
    <q-item v-for="r in items" :key="r.id">
      <q-item-side>
        <q-item-tile label><big>{{r.platenum}}</big></q-item-tile>
        <q-item-tile sublabel>
          <q-rating slot="subtitle" v-model="r.platerating" :max="5" />
        </q-item-tile>
      </q-item-side>
      <q-item-main>
        <q-item-tile label>{{r.platecomment}}</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</template>

<script>
import {
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QRating,
  QField
} from 'quasar'
import { db } from '../firebase'

export default {
  name: 'ratings-list',
  data () {
    return {}
  },
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QRating,
    QField
  },
  firebase: {
    items: db.ref('scorching-heat-9667')
  }
}
</script>

<style>
</style>
