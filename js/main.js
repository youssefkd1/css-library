const colors = [
    '#ff0000','#ffcdd2','#ef9a9a','#e57373','#ef5350','#f44336','#e53935','#d32f2f','#c62828','#b71c1c',
    '#00fff7','#b2ebf2','#80deea','#4dd0e1','#26c6da','#00bcd4','#00acc1','#0097a7','#00838f','#006064',
    '#039788','#b2dfdb','#80cbc4','#4db6ac','#26a69a','#009688','#00897b','#00796b','#00695c','#004d40',
    '#e91e63','#f8bbd0','#f48fb1','#f06292','#ec407a','#e91e63','#d81b60','#c2185b','#ad1457','#880e4f',
    '#9c27b0','#e1bee7','#ce93d8','#ba68c8','#ab47bc','#9c27b0','#8e24aa','#7b1fa2','#6a1b9a','#4a148c',
    '#673ab7','#d1c4e9','#b39ddb','#9575cd','#7e57c2','#673ab7','#5e35b1','#512da8','#4527a0','#311b92',
    '#2c3985','#c5cae9','#9fa8da','#7986cb','#5c6bc0','#3f51b5','#3949ab','#303f9f','#283593','#1a237e',
    '#03a9f4','#b3e5fc','#81d4fa','#4fc3f7','#29b6f6','#03a9f4','#039be5','#0288d1','#0277bd','#01579B',
    '#18cca8','#d1f2eb','#a3e4d7','#76d7c4','#48c9b0','#1abc9c','#17a589','#148f77','#117864','#117864',
    '#158d75','#d0ece7','#a2d9ce','#73c6b6','#45b39d','#16a085','#138d75','#117a65','#0e6655','#0e6655',
    '#25db71','#d5f5e3','#abebc6','#82e0aa','#58d68d','#2ecc71','#28b463','#239b56','#1d8348','#186a3b',
    '#795548','#d7ccc8','#bcaaa4','#a1887f','#8d6e63','#795548','#6d4c41','#5d4037','#4e342e','#3e2723',
    '#ffe600','#fff9c4','#fff59d','#fff176','#ffee58','#ffeb3b','#fdd835','#fbc02d','#f9a825','#f57f17',
    '#27ae60','#d4efdf','#a9dfbf','#7dcea0','#52be80','#27ae60','#229954','#1e8449','#196f3d','#145a32',
    '#3498db','#d6eaf8','#aed6f1','#85c1e9','#5dade2','#3498db','#2e86c1','#2874a6','#21618c','#1b4f72',
    '#2980b9','#d4e6f1','#a9cce3','#7fb3d5','#5499c7','#2471a3','#2980b9','#1f618d','#1F618D','#154360',
    '#a343c9','#ebdef0','#d7bde2','#c39bd3','#af7ac5','#9b59b6','#884ea0','#76448a','#633974','#512e5f',
    '#a240cc','#e8daef','#d2b4de','#bb8fce','#a569bd','#8e44ad','#7d3c98','#6c3483','#5b2c6f','#4a235a',
    '#34495e','#d6dbdf','#aeb6bf','#85929e','#5d6d7e','#34495e','#2e4053','#283747','#212f3c','#1b2631',
    '#2c3e50','#d5d8dc','#abb2b9','#808b96','#566573','#2c3e50','#273746','#212f3d','#1c2833','#17202a',
    '#f1c40f','#fcf3cf','#f9e79f','#f7dc6f','#f4d03f','#f1c40f','#d4ac0d','#b7950b','#9a7d0a','#7d6608',
    '#f39c12','#fdebd0','#fad7a0','#f8c471','#f5b041','#f39c12','#d68910','#b9770e','#9c640c','#7e5109',
    '#e67e22','#fae5d3','#f5cba7','#f0b27a','#eb984e','#e67e22','#ca6f1e','#af601a','#935116','#784212',
    '#d35400','#f6ddcc','#edbb99','#e59866','#dc7633','#d35400','#ba4a00','#a04000','#873600','#6e2c00',
    '#e74c3c','#fadbd8','#f5b7b1','#f1948a','#ec7063','#e74c3c','#cb4335','#b03a2e','#943126','#78281f',
    '#c0392b','#f2d7d5','#e6b0aa','#d98880','#cd6155','#c0392b','#a93226','#922b21','#922b21','#641e16',
    '#ecf0f1','#fbfcfc','#f7f9f9','#f4f6f7','#f0f3f4','#ecf0f1','#d0d3d4','#b3b6b7','#979a9a','#7b7d7d',
    '#bdc3c7','#f2f3f4','#e5e7e9','#d7dbdd','#cacfd2','#bdc3c7','#a6acaf','#909497','#797d7f','#626567',
    '#95a5a6','#eaeded','#d5dbdb','#bfc9ca','#aab7b8','#95a5a6','#839192','#717d7e','#5f6a6a','#4d5656',
    '#7f8c8d','#e5e8e8','#ccd1d1','#b2babb','#99a3a4','#7f8c8d','#707b7c','#616a6b','#515a5a','#424949'


];

const palette = document.getElementById("palette");

colors.forEach(color => {
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;
    box.setAttribute("data-hex", color);
    box.addEventListener("click", () => {
        navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard`)
        
        
    });
    palette.appendChild(box);
});

// jquery
$('.nav').animate({'top':'0'} , 200  , function(){
    $('.hero-title').animate({'right':'0'} , 200 , function(){
        $('.hero-description').animate({'left':'0'} , 200 , function(){
            $('.hero-note').animate({'right':'0'} , 200 , function(){
                $('.hero-button-start').animate({'left':'0'} , 200 , function(){
                    $('.hero-button-download').animate({'right':'0'} , 200 , function(){
                        $('.container1').animate({'opacity':'1'} , 500 , function(){
                            $('.container2').animate({'opacity':'1'} , 500 , function(){
                                $('.container3').animate({'opacity':'1'} , 500 , function(){
                                    $('.container4').animate({'opacity':'1'} , 500 , function(){
                                        $('.notify').animate({'right': '10px'} , 700 , function(){
                                            $(this).delay(2000).fadeOut()
                                        });
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });

})