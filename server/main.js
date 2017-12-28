import _ from 'lodash'
import faker from 'faker'

Test1.remove({})
Test2.remove({})

const test1 = _.times(5000, idx => ({
  content: faker.lorem.sentences(),
}))

const test2 = _.times(5000, idx => ({
  name: faker.name.findName(),
}))

Test1.batchInsert(test1)
Test2.batchInsert(test2)

Meteor.publish('test1', function () {
  return Test1.find()
})

Meteor.publish('test2', function () {
  return Test2.find()
})
