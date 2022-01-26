/* Read through the following code. Why will it log 'debugging'? */

function debugIt() {
  const status = 'debugging';  // function scope
  function logger() {
    console.log(status); // accessible, has access to outer function, lexical 
  }                      // scope rules

  logger();
}

debugIt();