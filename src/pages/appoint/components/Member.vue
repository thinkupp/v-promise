<template>
    <div class="member" :class="{close}" @click="handleClick">
        <div class="content">
            <p class="title">{{title}}</p>

            <ul v-if="listData && listData.length" @click.stop>
                <li v-for="(list, index) in listData" :key="index">
                    <div class="left">
                        <img class="avatar" :src="list.avatar"></img>
                        <span class="nickname">{{list.nickname}}</span>
                    </div>
                </li>
            </ul>

            <div v-if="loading" class="loading-wrapper">
                <v-loading></v-loading>           
            </div>

            <div v-if="!loading && !listData.length" class="list-none-wrapper">
                <list-none></list-none>
            </div>
        </div>
    </div>
</template>

<script>
    import VLoading from '../../../component/Loading.vue';
    import ListNone from '../../../component/ListNone.vue';

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
            },

            loading: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            handleClick () {
                this.close = true;
                setTimeout(() => {
                    this.$emit('close');
                }, 300);
            }
        },

        components: {
            VLoading,
            ListNone
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
            position: relative;

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

            .loading-wrapper, .list-none-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
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
