import _ from 'lodash'
import faker from 'faker'

Test.remove({})

const dummies = _.times(5000, idx => ({
  content: faker.lorem.sentences(),
}))

Test.batchInsert(dummies)
