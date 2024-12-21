function printName(name = "Anonymous"): void {
  console.log(name);
}

printName(); // Prints 'Anonymous'
printName(undefined); // Prints 'Anonymous'

//Alternatively handling undefined explicitly:
function printName2(name?: string): void {
  const nameToPrint = name === undefined ? "Anonymous" : name;
  console.log(nameToPrint);
}

printName2(); // Prints 'Anonymous'
printName2(undefined); // Prints 'Anonymous'
printName2("John"); // Prints 'John' 