<template>
    <div class="member">
        <div class="content">
            <p class="title">{{title}}</p>

            <ul>
                <li v-for="(list, index) in listData" :key="index">
                    <img :src="list.avatar"></img>
                    <span>{{list.nickname}}</span>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },

            listData: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .member {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            background: #FFF;
            border-radius: 10rpx;
            width: 600rpx;
            height: 900rpx;

        }
    }
</style>
