<template>
    <router-view />
</template>

<script>
export default {};
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";

/* 设置一个全局的变量，来控制标题颜色 */
:root{
    --theme_bg_color: #242f42;
}
</style>
