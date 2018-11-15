var txt = new Vue({
    el:'#two-div-table',
    data:{
        texts:[
            {text:'11111111111111111111111111111111111',date:''}
        ],
        index:1
    },
    methods: {
        getTexts: function (num) {
            $.ajax({
                url: 'http://222.186.36.75:8888/record/record/getAllRecordsStepwithLimit?atype=text&limit=20&pageindex=' + num,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    for(i =0;i<data.data.length;i++){
                        txt.texts.push({text:data.data[i].content,date:getDate(data.data[i].ctime)});
                    }
                    var a;
                },
                error: function () {
                    var b;
                }
            });
        }
    }
});
function getDate(d) {
    var date = new Date(d);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate());
}

var imageclick = new Vue({
    el: '.images-top',
    data: {
        name: 'Vue.js',
        index:1
    },
    methods: {
        leftClick:function () {
            if(txt.index<=1){
                return;
            }
            txt.index= txt.index-1;
            txt.getTexts(txt.index);
            imageclick.index = txt.index;
        },
        rightClick:function () {
            txt.index= txt.index+1;
            txt.getTexts(txt.index);
            imageclick.index = txt.index;
        }
    }
})

txt.getTexts(0);