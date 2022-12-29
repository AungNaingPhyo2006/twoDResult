const wrapper = document.querySelector(".wrapper"),
setBox = wrapper.querySelector(".set input"),
valueBox = wrapper.querySelector(".value input"),
twodBox = wrapper.querySelector(".twod span");

setInterval(() => {
  let api;
  api =`https://api.thaistock2d.com/live`;
  fetch(api).then( response => response.json()).then(data => details(data));
  

  function details(data){
      //console.log(data.live)
      const {set, value,twod} = data.live;
      setBox.value = `${set}`;
      valueBox.value = `${value}`
      twodBox.innerText = `${twod}`
  }
}, 1000);

 



