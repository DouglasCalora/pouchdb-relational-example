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

  mounted () {
    const pouchDBSetup = new PouchDBSetup()

    pouchDBSetup.initialize()
    pouchDBSetup.createDatabase('my_database')
    pouchDBSetup.createDatabase('my_database 2')
    pouchDBSetup.createDatabase('my_database 4')

    pouchDBSetup.sync('my_database', 'http://localhost:5984/my_database', {
      live: true,
      retry: true
    })

    // create tables for test
    dbTest()
  }
}
</script>
