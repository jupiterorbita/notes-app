const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

// button Create Note
document.querySelector('#create-note').addEventListener('click', function(e_event) {
    console.log('clicked #create-note')
    // console.log(e_event)
    e_event.target.textContent = 'The button was clicked'
})

// second button - query all - grab 2nd (idx=1)
document.querySelector('#remove-all').addEventListener('click', function(e) {
    console.log('clicked #remove-all notes')
    document.querySelectorAll('.note').forEach(function (note, idx) {
        note.remove()
        console.log('note removed')
    })
})

















// // DOM Document Object Model

// // const p = document.querySelector('p') // only matches the first tag
// // p.remove()

// // Query all and remove
// const ps = document.querySelectorAll('p')

// // cencor p tags
// ps.forEach(function(item_p, index) {
//     item_p.textContent = '*****'
//     // console.log(item_p.textContent)
//     // item_p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = "This is a new element from JavaScript"
// document.querySelector('body').appendChild(newParagraph)