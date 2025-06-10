//* JavaScript
function regexString(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

export default regexString;

//* TypeScript
// function regexString(inputString: string): string[] {
//   const characters: string[] = [];
//   // math any character includes new lines
//   const regex = /[\s\S]/gu;

//   let match;

//   while ((match = regex.exec(inputString)) !== null) {
//     characters.push(match[0]);
//   }

//   return characters;
// }

// export default regexString;
