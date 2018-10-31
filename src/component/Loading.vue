<template>
<div class="loading">
        <span class="loading-image"><i class="iconfont icon-loading"></i></span>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '正在加载中'
        }
    }
}
</script>

<style lang="less" scoped>
.loading {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 28rpx;
    color: #BBB;
    
    .icon-loading {
        margin-bottom: 5rpx;
    }

    .loading-image {
        animation: animation 1s linear infinite;
    }

    @keyframes animation {
        to {
            transform: rotate(360deg)
        }
    }
}
</style>

