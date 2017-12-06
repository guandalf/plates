<template>
  <!--
    Use <q-side-link> component
    instead of <q-item> for
    internal vue-router navigation
  -->
  <q-layout>
    <q-list>
      <form id="form" v-on:submit.prevent="addRating">
      <q-item>
        <q-item-main>
          <q-field label="Enter a plate">
            <q-input v-model="newRating.platenum" placeholder="Start typing a plate">
              <q-autocomplete
                :debounce="1000"
                :filter="myFilter"
                @selected="selected" />
            </q-input>
          </q-field>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-field label="Rate this plate">
            <q-rating v-model="newRating.platerating" align="center" :max="5" />
          </q-field>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-field label="Comment">
            <!-- Multiple Line Input -->
            <q-input
              v-model="newRating.platecomment"
              type="textarea"
              float-label="Enter your comments"
              :max-height="100"
              :min-rows="3"
            />
          </q-field>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-main>
          <q-field>
            <q-btn icon="create" align="center">Submit</q-btn>
          </q-field>
        </q-item-main>
      </q-item>
      </form>
      <q-item>
        <q-item-side icon="info" />
        <q-item-main label="About" sublabel="What about us" />
      </q-item>
    </q-list>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QInput,
  QRating,
  QField,
  Toast,
  QAutocomplete
} from 'quasar'
import fuzzysearch from 'fuzzysearch'
import { db } from '../fbaselib'

export default {
  name: 'left-menu',
  components: {
    QLayout,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QInput,
    QRating,
    QField,
    Toast,
    QAutocomplete
  },
  data () {
    return {
      newRating: {
        platenum: '',
        platerating: 0,
        platecomment: ''
      },
      r: []
    }
  },
  firebase: {
    items: db.ref('scorching-heat-9667')
  },
  methods: {
    addRating () {
      this.$firebaseRefs.items.push(this.newRating)
      this.newRating.platenum = ''
      this.newRating.platerate = 0
      this.newRating.platecomment = ''
    },
    selected (item) {
      console.log('got it')
      console.log(item)
      Toast.create(`Selected suggestion "${item.platenum}"`)
    },
    myFilter (terms, { field, list }) {
      const token = terms.toLowerCase()
      return list.filter(item => fuzzysearch(token, item[field].toLowerCase()))
    }
  }
}
</script>

<style lang="stylus">

</style>
