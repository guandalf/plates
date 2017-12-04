<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Tell to a plate
        <div slot="subtitle">A place where to tell what you think to a plate</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
        <form id="form" v-on:submit.prevent="addRating">
          <q-field label="Enter a plate">
            <q-input v-model="newRating.platenum" align="center" float-label="Plate number" placeholder="DV968GV" />
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
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <ratings-list/>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
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
  QField
} from 'quasar'
import { db } from '../firebase'
import RatingsList from './RatingsList.vue'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
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
    RatingsList
  },
  data () {
    return {
      newRating: {
        platenum: '',
        platerating: 0,
        platecomment: ''
      }
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
    }
  }
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
