import faker from 'faker'

Meteor.users.remove({})

Accounts.onCreateUser((options, user) => ({ ...options, ...user }))

Accounts.createUser({
  username: 'demo',
  password: 'demo',
  name: 'demo',
  job: 'test',
})

Accounts.addAutopublishFields({
  forLoggedInUser:['name', 'job'],
  forOtherUsers: ['name', 'job'],
})

Meteor.publish(null, function() {
  const _id = Meteor.userId()
  if (_id)
    return Meteor.users.find({ _id }, { fields: { services: false } })
})

Meteor.methods({
  randomJob() {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        job: faker.name.jobTitle(),
      },
    })
  }
})
