/*
bonus.1
Write a recursive function called reverse which 
accepts a string and returns a new string in reverse.

*/
function reverse(string) {
  // add whatever parameters you deem necessary - good luck!
  if (string.length === 0) return "";
  return reverse(string.slice(1)) + string[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

let solve = reverse("awesome");
console.log(solve);
