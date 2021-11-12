export default  {
    namespaced : true,
    state : {
        msg : '我帅吗',
        name : '子集'
    },
    getters : {
    },
    mutations : {
        changeName (state) {
            state.name = '孙子集'
        }
    }
}