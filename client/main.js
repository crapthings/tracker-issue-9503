// a = Tracker.autorun(() => {
//   let computation
//   console.log('level 1')
//   console.log('add collection reactive source', Test.find().count())
//   Tracker.nonreactive(() => {
//     console.log('level 2')
//     console.log('ts is', Session.get('ts'))
//     computation = Tracker.autorun(c => {
//         console.log('level 3')
//         console.log('should i print times?', Session.get('ts'))
//     })
//   })

//   Tracker.onInvalidate(() => {
//     computation.stop()
//   })
// })
