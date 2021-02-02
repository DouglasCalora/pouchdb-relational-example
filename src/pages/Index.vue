<template>
  <q-page class="flex flex-center">
    <div class="text-h2">My posts!</div>

    <div class="row q-col-gutter-md">
      <div v-for="(post, index) in posts" :key="index" class="col-3">
        <q-card dark bordered class="my-card">
          <q-card-section>
            <div class="text-h6">{{ post.title }}</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            {{ post.text }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import PouchDBSetup from '..//helpers/PouchDBSetup'

export default {
  name: 'PageIndex',

  data () {
    return {
      posts: []
    }
  },

  async mounted () {
    const pouchDBSetup = new PouchDBSetup()
    const myDatabase = pouchDBSetup.getDatabase('my_database')

    this.addPosts(3, myDatabase)

    const { posts } = await myDatabase.rel.find('posts')
    this.posts.push(...posts)
  },

  methods: {
    addPosts (quantity, db) {
      for (let index = 0; index < quantity; index++) {
        this.addPost(db)
      }
    },

    addPost (db) {
      db.rel.save('post', {
        title: 'Rails is Omakase',
        text: 'There are a lot of a-la-carte software...'
      })
    }
  }
}
</script>
