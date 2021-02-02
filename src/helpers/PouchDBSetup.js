import PouchDB from 'pouchdb'
import PouchdbFind from 'pouchdb-find'
import RelationalPouch from 'relational-pouch'

export default class PouchDBSetup {
  constructor () {
    if (PouchDBSetup.instance instanceof PouchDBSetup) {
      return PouchDBSetup.instance
    }

    PouchDBSetup.instance = this

    this.pouchDB = null
    this.databases = {}
  }

  initialize () {
    PouchDB.plugin(RelationalPouch)
    PouchDB.plugin(PouchdbFind)
  }

  getPouchDBInstance () {
    return PouchDB
  }

  createDatabse (name, options = {}) {
    this.databases[name] = new PouchDB(name, options)
  }

  getDatabase (name) {
    return this.databases[name]
  }

  deleteDatabase (name) {
    this.getDatabase(name).destroy()

    delete this.databases[name]
  }
}
