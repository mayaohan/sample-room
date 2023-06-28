<template>
    <div>
        <!-- <el-container>
            <el-menu mode="horizontal" style="width:100%" :default-active="activeIndex">
                <el-menu-item @click="toTher(obj.path)" v-for="(obj,idx) in routeArr" :index="obj.path">{{obj.name}}</el-menu-item>
            </el-menu>
        </el-container> -->
        <nav-layout></nav-layout>
    </div>
</template>

<script setup>
    import navLayout from '@/components/navModel/navLayout.vue'
    import { useRouter,useRoute } from 'vue-router'
    import {reactive, toRefs,getCurrentInstance,onMounted,h,ref} from 'vue'
    import { useI18n } from 'vue-i18n'
    const { proxy } = getCurrentInstance()
    const router = useRouter()
    const route = useRoute()
    const routeArr = router.getRoutes();
    // console.log(router.getRoutes(),route,proxy.$props)
    // console.log(router.getRoutes(true),router.getRoutes(false))
    // const { locale } = useI18n()
    // // 切换中文
    // function  changeZh(){   locale.value = 'zh';   };
    // // 切换英文
    // function  changeEn(){   locale.value = 'en';   };

    const toTher = (param)=>{
        router.push(param)
    }
    const activeIndex = ref('/HomeView')
</script>

<style scoped>

</style>