const tabItems = document.querySelectorAll('.tab-item');
// I want to grab elements with class tab-item and it put the to the node ListeningStateChangedEvent, which behaves similar to an array, need to loop through them
const tabContentItems = document.querySelectorAll('.tab-content-item');

// when we we click on the tabItem want to show tabContentItem, so add click event and when is click the fuunction selectItem is called

// function selectItem - select tab contect item

function selectItem(e) {
  removeBorder();
  removeShow();
  // add border to current tab
  this.classList.add('tab-border');
  //   grab content item form DOM, need to grab ID
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //   add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove('show'));
}
tabItems.forEach((item) => item.addEventListener('click', selectItem));
