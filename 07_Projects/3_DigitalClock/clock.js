const clock = document.getElementById('clock')
// OR document.queryselector('#clock')

// NOTE - always use this syntax like this only
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());  -- to run on console
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 for 1 sec, 2000 for 2 sec, ....