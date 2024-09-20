import './css/memory.css'

const emojis = ["🐙", "🐙", "😍", "😍", "🐐", "🐐", "😎", "😎", "🥶", "🥶", "❤", "❤", "👍", "👍", "😡", "😡"];
let shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuf_emojis[i];
  
  box.onclick = function () {
    
    if (!this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
      this.classList.add('boxOpen');  // Add 'boxOpen' class to the clicked box
    } else {
      return; 
    }

    setTimeout(function () {
      // Get all boxes that are currently open
      let openBoxes = document.querySelectorAll('.boxOpen');
      
      if (openBoxes.length === 2) {  // Only proceed if two boxes are open
        if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
          // If the emojis match, add 'boxMatch' class and remove 'boxOpen'
          openBoxes[0].classList.add('boxMatch');
          openBoxes[1].classList.add('boxMatch');
          openBoxes[0].classList.remove('boxOpen');
          openBoxes[1].classList.remove('boxOpen');

          // Check if the player has matched all pairs
          if (document.querySelectorAll('.boxMatch').length === emojis.length) {
            setTimeout(() => alert('You win!'), 500);  // Slight delay before showing the alert
          }
        } else {
          // If they don't match, hide them after a short delay
          setTimeout(() => {
            openBoxes[0].classList.remove('boxOpen');
            openBoxes[1].classList.remove('boxOpen');
          }, 1000);  // 1 second delay to show the second box before closing
        }
      }
    }, 300);  // Short delay for the opening animation
  };

  // Add the created box to the game container
  document.querySelector('.game').appendChild(box);
}

