import PouchDBSetup from '../helpers/PouchDBSetup'

export default () => {
  const pouchDBSetup = new PouchDBSetup()
  const myDatabase = pouchDBSetup.getDatabase('my_database')

  return myDatabase.setSchema([
    {
      singular: 'post',
      plural: 'posts',
      relations: {
        author: { belongsTo: 'author' },
        comments: { hasMany: 'comment' }
      }
    },
    {
      singular: 'author',
      plural: 'authors',
      relations: {
        posts: { hasMany: 'post' }
      }
    },
    {
      singular: 'comment',
      plural: 'comments',
      relations: {
        post: { belongsTo: 'post' }
      }
    }
  ])
}
