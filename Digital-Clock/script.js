setInterval(function(){
    const timeBox = document.getElementById('Time')
    const date = new Date()
    timeBox.innerHTML=date.toLocaleTimeString();
},1000)