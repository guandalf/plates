<template>
  <!--
    Use <q-side-link> component
    instead of <q-item> for
    internal vue-router navigation
  -->
  <q-list no-border link inset-delimiter>
    <q-list-header>Menu</q-list-header>
    <form id="form" v-on:submit.prevent="addRating">
      <q-field label="Enter a plate">
        <q-input v-model="newRating.platenum" placeholder="Start typing a plate">
          <q-autocomplete
            @search="search"
            :debounce="1000"
            @selected="selected" />
        </q-input>
      </q-field>
      <q-field label="Rate this plate">
        <q-rating v-model="newRating.platerating" align="center" :max="5" />
      </q-field>
      <q-field label="Comment">
        <!-- Multiple Line Input -->
        <q-input
          v-model="newRating.platecomment"
          type="textarea"
          float-label="You can comment your exeprience here"
          :max-height="100"
          :min-rows="3"
        />
      </q-field>
      <q-field>
        <q-btn icon="create" align="center">Submit</q-btn>
      </q-field>
    </form>
    <q-item>
      <q-item-side icon="info" />
      <q-item-main label="About" sublabel="What about us" />
    </q-item>
  </q-list>
</template>

<script>
import {
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
  filter,
  QAutocomplete
} from 'quasar'
import { db } from '../firebase'

export default {
  name: 'left-menu',
  components: {
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
    search (terms, done) {
      this.$bindAsArray('r', this.$firebaseRefs.items)
      console.log(filter(terms, {field: 'platenum', list: this.r}))
      done(filter(terms, {field: 'platenum', list: this.r}))
    },
    selected (item) {
      console.log('got it')
      console.log(item)
      Toast.create(`Selected suggestion "${item.platenum}"`)
    }
  }
}
</script>

<style lang="stylus">

</style>
