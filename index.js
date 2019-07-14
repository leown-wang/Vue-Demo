// let url = "http://rap2api.taobao.org/app/mock/7058/index/hotLists"
// //let axios = require("axios")
//
// axios.get(url,{
//     pageNum:1,
//     pageSize:10
// }).then((res=>{
//     console.log(res.data.lists)
// }))

// let Mock = require("mockjs")
// console.log(Mock.mock({
//     "number|1-100.2": 1
// }))



new Vue({
    el:'#app',
    data:{
        lists:null
    },
    created() {{
        axios.get("http://rap2api.taobao.org/app/mock/7058/index/banner",{
        pageNum:1,
        pageSize:10
    }).then((res=>{
        this.lists = res.data.lists
    }))
    }
    }
})