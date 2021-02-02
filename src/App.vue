<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import PouchDBSetup from './helpers/PouchDBSetup'
import dbTest from './helpers/dbTest'

export default {
  name: 'App',

  created () {
    const pouchDBSetup = new PouchDBSetup()

    pouchDBSetup.initialize()
    pouchDBSetup.createDatabse('my_database')

    // create tables for test
    dbTest()
  }
}
</script>
