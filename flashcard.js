
window.onload = function(){
  const form = document.querySelector('form');
  const list = document.getElementById('card-list');
  const clear = document.getElementById('clear-card');
  const input1 = document.getElementById('item1');
  const input2 = document.getElementById('item2');
  const input3 = document.getElementById('item3');
  const submit = document.getElementById("submit");
  const show = document.getElementById("show-card");
  let item1 = localStorage.getItem('item1') ? JSON.parse(localStorage.getItem('item1')) : [];
  let item2 = localStorage.getItem('item2') ? JSON.parse(localStorage.getItem('item2')) : [];
  let item3 = localStorage.getItem('item3') ? JSON.parse(localStorage.getItem('item3')) : [];
  const data1 = JSON.parse(localStorage.getItem('item1'));
  const data2 = JSON.parse(localStorage.getItem('item2'));
  const data3 = JSON.parse(localStorage.getItem('item3'));
  localStorage.setItem('item1', JSON.stringify(item1));
  localStorage.setItem('item2', JSON.stringify(item2));
  localStorage.setItem('item3', JSON.stringify(item3));

  function createFlashCard(word, type, translation){
    const newCard = document.createElement('div');
    const contentCard = document.createElement('div');
    const cardName = document.createElement('h1');
    const cardType = document.createElement('h5');
    const cardTranslation = document.createElement('h1');
    const cardTranslationType = document.createElement('h5');
    const frontCard = document.createElement('div');
    const backCard = document.createElement('div');
    newCard.className = 'col-lg-4 col-sm-6 col-12';
    contentCard.className = 'flashcard';
    frontCard.className = 'front';
    backCard.className = 'back';
    cardName.innerHTML = word;
    cardType.innerHTML = type;
    cardTranslation.innerHTML = translation;
    if(typeNoun(type) === true) cardTranslationType.innerHTML = 'Danh Tu';
    else if(typeAdjective(type) === true) cardTranslationType.innerHTML = 'Tinh Tu';
    else if(typeVerb(type) === true) cardTranslationType.innerHTML = 'Dong Tu';
    else if(typeAdverb(type) === true) cardTranslationType.innerHTML = 'Trang Tu';
    frontCard.appendChild(cardName).appendChild(cardType);
    backCard.appendChild(cardTranslation).appendChild(cardTranslationType);
    contentCard.appendChild(frontCard);
    contentCard.appendChild(backCard);
    newCard.appendChild(contentCard);
    list.appendChild(newCard);

    contentCard.addEventListener('click', function (e){
      contentCard.classList.toggle('flipped');
    })
  }
  let flag = true;
  show.addEventListener("click", function(){
    if(flag) {
      for(let i = 0; i < data1.length; i++) createFlashCard(item1[i], item2[i], item3[i]);
      flag = false;
      show.innerHTML = "Hide Created Card";
    }
    else{
      list.innerHTML = "";
      flag = true;
      show.innerHTML = "Show Created Card";
    }
  })

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    item1.push(input1.value);
    item2.push(input2.value);
    item3.push(input3.value);
    localStorage.setItem('item1', JSON.stringify(item1));
    localStorage.setItem('item2', JSON.stringify(item2));
    localStorage.setItem('item3', JSON.stringify(item3));
    input1.value = "";
    input2.value = "";
    input3.value = "";
  });

  clear.addEventListener("click", function () {
    localStorage.clear();
    list.innerHTML = "";
    location.reload();
  });
}

function typeNoun(text){
    var reg =  new RegExp('noun', 'i');
    return reg.test(text);
}

function typeAdjective(text){
    var reg =  new RegExp('adjective', 'i');
    return reg.test(text);
}

function typeVerb(text){
    var reg =  new RegExp('verb', 'i');
    return reg.test(text);
}

function typeAdverb(text){
    var reg =  new RegExp('adverb', 'i');
    return reg.test(text);
}