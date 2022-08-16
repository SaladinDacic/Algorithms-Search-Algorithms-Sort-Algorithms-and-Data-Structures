let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favouriteNumbers: [1,2,3,4]
}


//Objekti su uvijek brži od array.a ali nema order

// Insertion- O(1)
// Removal-  O(1)
// Searching- O(n)
// Access- O(1)
// Objekti pristupaju keyovima sa O(1), a value-ovima sa O(n) jer mora za svaki key da traži da li ima taj value
//npr. da li je true u instructor? provjerava prvo firstName pa isInstructor i onda kaže ima tj. prošao je objekt n puta o(n)

Object.keys(instructor)
Object.values(instructor)
Object.assign(obj, arrZaUbacit);
Object.entries(instructor) // pretvara objekt u ArrayOfArrays sa po 2 člana u drugom arrayu tj. key i value iz objekta 
typeof obj === 'object'
instructor.hasOwnProperty("firstName") // O(1) jer pretražuje keys