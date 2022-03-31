import {createStore} from 'vuex'

export default createStore({
    state: {
        tagsList: [],
        collapse: false
    },
    mutations: {
        delTagsItem(state, data) {
            state
                .tagsList
                .splice(data.index, 1);
        },
        setTagsItem(state, data) {
            state
                .tagsList
                .push(data)
        },
        clearTags(state) {
            state.tagsList = []
        },
        closeTagsOther(state, data) {
            state.tagsList = data;
        },
        closeCurrentTag(state, data) {
            for (let i = 0, len = state.tagsList.length; i < len; i++) {
                const item = state.tagsList[i];
                if (item.path === data.$route.fullPath) {
                    if (i < len - 1) {
                        data
                            .$router
                            .push(state.tagsList[i + 1].path);
                    } else if (i > 0) {
                        data
                            .$router
                            .push(state.tagsList[i - 1].path);
                    } else {
                        data
                            .$router
                            .push("/");
                    }
                    state
                        .tagsList
                        .splice(i, 1);
                    break;
                }
            }
        },
        // 侧边栏折叠
        handleCollapse(state, data) {
            state.collapse = data;
        },
        // 更换标题颜色
        toChangeColor(){
            var color = document.documentElement.style.getPropertyValue("--theme_bg_color");
            if(color == "#242f42" || !color){
                document.documentElement.style.setProperty("--theme_bg_color","#6495ED");
            }else{
                document.documentElement.style.setProperty("--theme_bg_color","#242f42");
            }
            
        }
    },
    actions: {},
    modules: {}
})