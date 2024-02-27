export function typingEffect(words:any):any {
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  currentWord = words[i];
  if (isDeleting) {
    if (typeof window !== "undefined") {
      document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
      j--;
      if (j == 0) {
        isDeleting = false;
        i++;
        if (i == words.length) {
          i = 0;
        }
      }
    } else {
      document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
      j++;
      if (j == currentWord.length) {
        isDeleting = true;
      }
    }
    setTimeout(typingEffect, 100);
    }
};