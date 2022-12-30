const wrapper = document.querySelector(".wrapper"),
setBox = wrapper.querySelector(".set input"),
valueBox = wrapper.querySelector(".value input"),
twodBox = wrapper.querySelector(".twod span"),
amBtn = wrapper.querySelector(".save-am span"),
pmBtn = wrapper.querySelector(".save-pm span");

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
      
      amBtn.innerText = `${data.result[1].twod}`;
      pmBtn.innerText = `${data.result[3].twod}`;
  }
}, 1000);

 



