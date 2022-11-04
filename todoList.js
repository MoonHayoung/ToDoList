setTimeout(function (interval) {
    clearInterval(interval);
}, setInterval(function () {
        
    let today = new Date();   

    let year = today.getFullYear(); 
    let month = ("0" + (today.getMonth() + 1)).slice(-2);  
    let date = ("0" + today.getDate()).slice(-2);  
    let day = today.getDay();  

    let hour = today.getHours(); 
    let minute = ("0" + today.getMinutes()).slice(-2); 
    // 초 let time = ("0" + today.getSeconds()).slice(-2);

    today_write =  ('<p>'+ year + '-' + month + '-' + date +'</p>');
    time_write = ('<p>'+ hour + ':'+ minute + '</p>');

    document.getElementById("date").innerHTML = today_write;
    document.getElementById("time").innerHTML = time_write;
}, 1)); 


