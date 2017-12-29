import _ from 'lodash'
import faker from 'faker'

Test1.remove({})

const test1 = _.times(5, idx => ({
  type: 1,
  content: faker.lorem.sentences(),
}))

const test2 = _.times(5, idx => ({
  type: 2,
  content: faker.lorem.sentences(),
}))

Test1.batchInsert(test1)
Test1.batchInsert(test2)

Meteor.publish('test1', function () {
  // this.unblock()
  console.log(this._subscriptionId)
  const { _subscriptionId } = this
  const test1 = Test1.find({ type: 1 }).forEach(test => {
    this.added('test1', test._id, { _subscriptionId, ...test })
  })
  return this.ready()
})

Meteor.publish('test2', function () {
  // this.unblock()
  console.log(this._subscriptionId)
  const { _subscriptionId } = this
  const test1 = Test1.find({ type: 2 }).forEach(test => {
    this.added('test1', test._id, { _subscriptionId, ...test })
  })
  return this.ready()
})
