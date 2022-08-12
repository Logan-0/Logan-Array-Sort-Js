I made this because sometimes when your dealing with code in Node.Js, like a promise chain. I wanted a way I could handle it for myself easier. Nothing special may be updated in the Future.


USES -> {
    Json array with String or Number Attributes;
    e.g. lastName = "Johnson", age = 5, or dateJoined = "Jan 11th, 2008"
}

Example 

SampleFile ***************************

    const CleanSorter = require('../From/Some/Other/File/To/CleanSorter.js')


    arr1 = [3,7,3,346,65,23,4]



    ~Do Magic end up in promise chain~
    .then((result) => {


    // New Container After Started Promise Chain
    this.arrayContainer
    

    // Populate New Array From Previous Promise Results
    .getAll()
    
    
    // Now to implement the functions
    .then((result) => {

        // Use Container to implement Sort as Usual for arr
          result = result.sort((a, b) => {

            // Implement the function - example
            return CleanSorter.compareNumber(a,b);

            //Ending for Completion Sake
        }).catch ((err) => {
            ~BugCatcher~
        })

    })
}