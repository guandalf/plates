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

    <left-menu slot="left" />
    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <router-view/>
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
import RatingsList from './components/RatingsList.vue'
import LeftMenu from 'components/LeftMenu.vue'

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
    RatingsList,
    LeftMenu
  },
  data () {
    return {}
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
