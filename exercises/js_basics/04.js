// Take a look at the following code:

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);

/* What does this code log to the console? Think about it for a moment before 
continuing. */

// Alice Bob

/* If you said that this code logged:

Alice Bob

you would be 100% correct, and the answer should come as no surprise. 
Now let's look at something slightly different: */

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// Bob Bob

/* LS Answer:

Discussion

If you were thinking that at least one or both of the names should be in 
uppercase, then you would be wrong. Don't worry though, you're not alone—
especially if you come from other programming languages in which strings are 
mutable. In JavaScript however, primitive strings—such as the ones shown above—
are immutable. */
