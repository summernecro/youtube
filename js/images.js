var images = new Vue({
    el:'#images-table',
    data:{
        itemss:[
            {
                items : [
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'},
                    {path:'http://222.186.36.75:8888/records/20180704/hdImg_8b438633165b0ade05acd6eea9c5b0ce1530701932157.jpg'}
                ],
            }
        ],
        index:0
    },
    methods:{
        getimages:function (num) {
            var loading = document.getElementById("images-loading");
            loading.style.display = 'block';
           images.itemss=[];
            $.ajax({
                url:'http://222.186.36.75:8888/record/record/getAllRecordsStepwithLimit?atype=image&limit=20&pageindex='+num,
                type:'get',
                dataType:'json',
                success:function (data) {
                    setTimeout(  function () {
                        loading.style.display = 'none';
                    },1000);
                    for(var i=0;i<data.data.length/5;i++){
                        if(data.data[i*5+0].netpath!=null){
                            var p0 = 'http://222.186.36.75:8888/records'+data.data[i*5+0].netpath.substring("E:\\record".length,data.data[i*5+0].netpath.length).replace("\\","/");
                        }
                        if(data.data[i*5+1].netpath!=null){
                            var p1 = 'http://222.186.36.75:8888/records'+data.data[i*5+1].netpath.substring("E:\\record".length,data.data[i*5+1].netpath.length).replace("\\","/");
                        }
                        if(data.data[i*5+2].netpath!=null){
                            var p2 = 'http://222.186.36.75:8888/records'+data.data[i*5+2].netpath.substring("E:\\record".length,data.data[i*5+2].netpath.length).replace("\\","/");
                        }
                        if(data.data[i*5+3].netpath!=null){
                            var p3 = 'http://222.186.36.75:8888/records'+data.data[i*5+3].netpath.substring("E:\\record".length,data.data[i*5+3].netpath.length).replace("\\","/");
                        }
                        if(data.data[i*5+4].netpath!=null){
                            var p4 = 'http://222.186.36.75:8888/records'+data.data[i*5+4].netpath.substring("E:\\record".length,data.data[i*5+4].netpath.length).replace("\\","/");
                        }
                        images.itemss.push({
                            items:[
                                {path:p0},
                                {path:p1},
                                {path:p2},
                                {path:p3},
                                {path:p4}
                            ]
                        });
                    }

                },
                error:function () {
                    alert("error");
                    setTimeout(  function () {
                        loading.style.display = 'none';
                    },1000);
                }
            });
        },
        gotoImg:function (event) {
            window.open(event.target.src)
        },
        gotoFolder:function (event) {

        }
    },
});

var imageclick = new Vue({
    el: '.images-top',
    data: {
        name: 'Vue.js',
        index:1
    },
    methods: {
        leftClick:function () {
            if(images.index<=1){
                return;
            }
            images.index= images.index-1;
            images.getimages(images.index);
            imageclick.index = images.index;
            imagescle();
        },
        rightClick:function () {
            images.index= images.index+1;
            images.getimages(images.index);
            imageclick.index = images.index;
            imagescle();
        }
    }
})


function imagescle() {
    var imgs = document.getElementsByClassName("images-table-tr-td-div-img");
    for(var i=0;i<imgs.length;i++){
        var w = imgs[i].offsetWidth;
        var h = imgs[i].offsetHeight;
        imgs[i].style.width;
        imgs[i].style.height;
        if(w>h){
            imgs[i].src ='';
        }else{
            imgs[i].style.width = '100%';
        }
    }
}


images.getimages(0);
imagescle();