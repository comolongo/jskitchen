let autocomplete = function(inputSelector, listSelector) {
  const INPUT = document.querySelector(inputSelector);
  const LIST = document.querySelector(listSelector);
  const DELAY = 500;
  let timeout;

  function init() {
    INPUT.addEventListener('input', () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout((event) => {
        getData();
      }, DELAY);
    });
  }
  
  function getData() {
    let ref = firebase.database().ref();
    let inputValue = INPUT.value;
    clearAutocomplete();

    if (inputValue) {
      ref.orderByChild('title')
      .startAt(inputValue)
      .endAt(inputValue + '\uf8ff')
      .once('value')
      .then(function (snapshot) {
        snapshot.forEach((childSnapshot) => {
          let value = childSnapshot.val();
          if (value) appendElem(value);
        });
      });
    }
  }

  function setValue(event) {
    INPUT.value = event.target.innerText;
    clearAutocomplete();
  }

  function appendElem(elem) {
      let li = document.createElement('li');
      li.innerText = elem.title;
      li.addEventListener('click', event => setValue(event));
      LIST.appendChild(li);
  }
  
  function clearAutocomplete() {
    LIST.innerHTML = '';
  }

  init();
}
