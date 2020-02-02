// initialize the variables
let droppingCollabClass;
let takeDataviz;
let internshipPossibility;
// get input for the first checkpoint

droppingCollabClass= prompt( "Should I drop a collab class? Y/N " );

// create the first decision

if ( droppingCollabClass === 'Y' ) {    // i guess I am dropping it 

  takeDataviz = prompt( "Should I take Datavisualiztion? Y/N" );  //but is Dataviz good?
  
  if ( takeDataviz ==='Y' ) {       // Cool beans
    
    console.log('Wake up at 7 everyday to go to school' );
    console.log('Get my portfolio ready' );
    internshipPossibility = true

  } else {      // Hypernatural studio?
    console.log('Take Hypernatural studio class' );
    console.log('Live rest of the semester in misery' );
  }
} else { // I'm not dropping a collab class :(
  console.log('Live rest of the semester in misery' );
}
if(internshipPossibility=true){     // yay internship :)
    console.log('Congrats!');
    console.log('You somehow got an internship!');
}