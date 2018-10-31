<template>
    <div class="list-none">
        <i class="iconfont icon-zanwushuju"></i>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '暂无数据'
        }
    } 
}
</script>

<style lang="less" scoped>
.list-none {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 28rpx;
    color: #BBB;

    .icon-zanwushuju {
        font-size: 90rpx;
        margin-bottom: 10rpx;
    }
}
</style>
