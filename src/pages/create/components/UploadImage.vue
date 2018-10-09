<template>
  <div class="upload-image-wrapper">
    <span class="title">上传图片</span>
    <div class="upload-image">
      <image class="image" v-for="(img, index) in listData" :key="index" :src="img"></image>

      <div class="add" @click="handleClick">
        <span class="iconfont icon-jiahao icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData: []
      }
    },

//    props: {
//      listData: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      }
//    },

    methods: {
      handleClick () {
        const that = this;

        wx.chooseImage({
          count: 1,
          success ( e ) {
            console.log(e.tempFilePaths);
            wx.uploadFile({
              url: 'http://192.168.8.249:3000/api/upload/image',
              filePath: e.tempFilePaths[0],
              name: 'image',
              formData: {
                "user": 'create-image'
              },
              success(res) {
                console.log(res);
                if ( res.statusCode === 200 && res.data ) {
                  const data = JSON.parse( res.data );
                  if ( data.image ) {
                    that.listData = that.listData.concat( e.tempFilePaths );
                    that.$emit('success');
                  }
                }
              },
              fail(err) {
                console.log(err);
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @image_left: 20rpx;
  @size: 50px;

  .upload-image-wrapper {
    margin-top: 10px;
  }

  .title {
    margin-left: 10px;
    font-size: 14px;
    color: #333;
  }

  .upload-image {
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    margin-top: 10px;
    overflow-x: auto;

    .image {
      width: @size;
      height: @size;
      margin-left: @image_left;
      flex: none;
    }

    .add {
      width: @size;
      height: @size;
      border: 1px solid #CCCCCC;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: @image_left;
      box-sizing: border-box;
      flex: none;

      .icon {
        font-size: 28px;
        color: #CCCCCC;
      }
    }
  }
</style>
