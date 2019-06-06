import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import login from './page/login.vue'
import home from './page/home.vue'
import notFound from './page/404.vue'
import about from './page/about.vue'
import album from './page/album/album.vue'
import albumAdd from './page/album/add.vue'
import article from './page/article/article.vue'
import articleAdd from './page/article/add.vue'
import category from './page/category/category.vue'
import comment from './page/comment/comment.vue'
import message from './page/message/message.vue'
import mine from './page/mine/mine.vue'
import skill from './page/mine/skill.vue'
import whisper from './page/whisper/whisper.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [{
        path: '/login',
        component: login,
        name: '登录',
        hidden: true
    },
    {
        path: '/',
        component: home,
        name: '主页',
        hidden: false,
        children: [
            {
                path: '/article',
                component: article,
                name: '文章',
                children: [
                    {
                        path: '/article/add',
                        component: articleAdd,
                        name: '文章添加'
                    },
                    {
                        path: '/article/comment',
                        component: comment,
                        name: '文章评论'
                    }
                ]
            },
            {
                path: '/category',
                component: category,
                name: '分类'
            },
            {
                path: '/whisper',
                component: whisper,
                name: '微语',
                children: [
                    {
                        path: '/whisper/comment',
                        component: comment,
                        name: '微语评论'
                    }
                ]
            },
            {
                path: '/message',
                component: message,
                name: '留言'
            },
            {
                path: '/album',
                component: album,
                name: '相册',
                children: [
                    {
                        path: '/album/add',
                        component: albumAdd,
                        name: '相册添加'
                    }
                ]
            },
            {
                path: '/mine',
                component: mine,
                name: '个人',
                children: [
                    {
                        path: '/skill',
                        component: skill,
                        name: '技能'
                    }
                ]
            }
        ]
    },
    {
        path: '/404',
        component: notFound,
        name: '页面不见了',
        hidden: true
    },
    {
        path: '/about',
        component: about,
        name: '关于我们',
        hidden: true
    }
];

var router = new VueRouter({
    routes
})
export default router;