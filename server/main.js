import _ from 'lodash'
import faker from 'faker'

Test1.remove({})
Test2.remove({})

const test1 = _.times(5000, idx => ({
  content: faker.lorem.sentences(),
  type: 1,
}))

const test2 = _.times(10, idx => ({
  content: faker.lorem.sentences(),
  type: 2,
}))

Test1.batchInsert(test1)
Test1.batchInsert(test2)

Meteor.publish('test1', function () {
  this.unblock()
  return Test1.find({ type: 1 })
})

Meteor.publish('test2', function () {
  this.unblock()
  return Test1.find({ type: 2 })
})
