var divmidmidiframe = new Vue({
        el:'#div-mid-mid-iframe',
        data:{
            src:'html/images.html'
        },
        methods:{
            switchs:function (i) {
                var x ="html/images.html";
                switch (i){
                    case 0:
                        x ="html/images.html";
                        break;
                    case 1:
                        x ="html/two.html";
                        break;
                    case 2:
                        x ="html/three.html";
                        break;
                    case 3:
                        x ="html/four.html";
                        break;
                    case 4:
                        x ="html/five.html";
                        break;
                    case 5:
                        x ="html/six.html";
                        break;
                    case 6:
                        x ="html/seven.html";
                        break;
                    case 7:
                        x ="html/eight.html";
                        break;
                }
                divmidmidiframe.src= x;
            }
        },
    })
;
window.onload = function () {
    ul = document.getElementById("div-mid-left-ul").children;
    /*    ul = $("#div-mid-left-ul").children;*/
    for(var i=0;i<ul.length;i++){
        ul[i].x = i;
        ul[i].onclick = function () {
            divmidmidiframe.switchs(this.x);
        };
    }

}