<template>
    <div class="member" :class="{close}" @click="handleClick">
        <div class="content">
            <p class="title">{{title}}</p>

            <ul @click.stop>
                <li v-for="(list, index) in listData" :key="index">
                    <div class="left">
                        <img class="avatar" :src="list.avatar"></img>
                        <span class="nickname">{{list.nickname}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                close: false
            }
        },

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
        },

        methods: {
            handleClick () {
                this.close = true;
                setTimeout(() => {
                    this.$emit('close');
                }, 300);
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
        opacity: 0;
        animation: backgroundAnimation 0.1s linear;
        animation-fill-mode: forwards;

        &.close {
            animation: backgroundCloseAnimation 0.1s linear;
        }

        .content {
            background: #FFF;
            border-radius: 10rpx;
            width: 600rpx;
            height: 900rpx;
            padding: 30rpx;
            box-sizing: border-box;

            .title {
                text-align: center;
            }

            ul {
                margin-top: 10rpx;

                li {
                    .left {
                        display: flex;
                        align-items: center;
                        
                        .nickname {
                            font-size: 30rpx;
                            margin-left: 10rpx;
                        }

                        .avatar {
                            width: 50rpx;
                            height: 50rpx;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }

    @keyframes backgroundAnimation {
        to {
            opacity: 1;
        }
    }

    @keyframes backgroundCloseAnimation {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
</style>
