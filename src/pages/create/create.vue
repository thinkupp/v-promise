<template>
  <div class="create">
    <van-cell-group>
      <picker :value="createType" :range="typeRange" @change="createTypeChange">
        <van-cell title="选择类型" label="想要别人监督你什么呢" :value="typeRange[createType]" value-class="create-type"></van-cell>
      </picker>
    </van-cell-group>

    <time-picker @date-change="startTimeChange" v-if="formData.startTime" :value="formData.startTime" title="生效时间" :border="false"></time-picker>

    <van-cell-group>
      <picker :value="effectiveIndex" mode="multiSelector" @change="timeValueChange" @cancel="timeValueCancel" @columnchange="timeTypeChange" :range="timeRange">
        <van-cell title="有效时间" :value="effectiveValue" value-class="create-type"></van-cell>
      </picker>
    </van-cell-group>

    <an-more @change="anMoreChange"></an-more>

    <div class="more-option" v-show="showAnMore">
      <check-option
        :select="formData.onlookers"
        @change="onlookersChange"
        @question="onlookersQuestion"
        title="允许围观"></check-option>

      <check-option
        :select="formData.private"
        @change="privateChange"
        @question="privateQuestion"
        title="私密"></check-option>

      <upload-image @success="uploadSuccess"></upload-image>

      <van-cell-group>
        <van-field
          :value="formData.title"
          label="标题"
          placeholder="请输入标题"></van-field>

        <van-field
          :value="formData.des"
          label="描述"
          type="textarea"
          placeholder="描述"></van-field>
      </van-cell-group>
    </div>

    <button class="submit-button" @click="handleSubmit">提交</button>
  </div>
</template>

<script>
  import TimePicker from '../../component/TimePicker.vue'
  import AnMore from './components/AnMore.vue'
  import CheckOption from '../../component/CheckOption.vue'
  import UploadImage from './components/UploadImage.vue'

  export default {
    data() {
      return {
        typeRange: ['起床', '跑步'],
        createRange: ['从不', '每天', '工作日', '节假日'],
        timeRange: [[ 1, 2, 3 ], ['分钟', '小时']],
        showAction: false,
        showAnMore: false,
        effectiveIndex: [1, 1],
        tmpEffectiveIndex: [1, 1],
        tmpTimeRange: [[ 1, 2, 3 ], ['分钟', '小时']],
        createType: 1,          // 约定类型

        formData: {
          startTime: '',
          onlookers: true,
          private: false,
          effectiveTime: 120,
          type: '跑步',
          images: [],
          title: '有人监督，动力十足！',
          des: ''
        }
      }
    },

    mounted() {
      this.initData();
    },

    computed: {
      effectiveValue () {
        const tIndex = this.effectiveIndex[0];
        const tType = this.effectiveIndex[1];
        return this.timeRange[0][tIndex] + ' ' + this.timeRange[1][tType];
      }
    },

    methods: {
      initData ( part1, start, end ) {
        const time = new Date();
        const year = time.getFullYear();
        let month = time.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = time.getDate();
        day = day < 10 ? '0' + day : day;
        part1 = part1 || `${year}-${month}-${day}`;
        start = start || '07:30';
        end = end || '08:00';
        this.formData.startTime = part1 + ' ' + start;
      },

      startTimeChange ( v ) {
        this.formData.startTime = v;
      },

      endTimeChange ( v ) {
        this.formData.endTime = v;
      },

      anMoreChange () {
        this.showAnMore = !this.showAnMore;
      },

      onlookersChange ( v ) {
        this.formData.onlookers = v;
      },

      privateChange ( v ) {
        this.formData.private = v;
      },

      onlookersQuestion () {
        this.$modal.onlookersQuestionTip();
      },

      privateQuestion () {
        this.$modal.privateQuestion();
      },

      handleSubmit () {
        const mIndex = this.effectiveIndex[0];
        const mType = this.effectiveIndex[1];
        let time = this.timeRange[0][mIndex];
        if (mType === 1) {
          // 小时
          time *= 60;
        }

        this.formData.effectiveTime = time;
        this.formData.type = this.typeRange[this.createType];

        this.$api.createAppoint( this.formData ).then(res => {
          wx.redirectTo({
            url: '/pages/appoint/main?id=' + res.id
          })
        })
      },

      timeTypeChange ( e ) {
        const { column, value } = e.mp.detail;

        let newValue = [ 5, 10, 20, 30, 40, 50 ];

        if (column) {
          if (value === 1) {
            newValue = [ 1, 2, 3 ];
          }

          this.$set(this.timeRange, 0, newValue);
        }

        this.$set(this.effectiveIndex, column, value);
      },

      timeValueChange ( e ) {
        const valueIndexAry = e.mp.detail.value;

        this.effectiveIndex = valueIndexAry;
        this.tmpEffectiveIndex = valueIndexAry.deepCopy();
        this.tmpTimeRange = this.timeRange.deepCopy();
      },

      timeValueCancel () {
        this.effectiveIndex = this.tmpEffectiveIndex.deepCopy();
        this.timeRange = this.tmpTimeRange.deepCopy();
      },

      autoCreateChange ( e ) {
        this.autoCreateIndex = Number( e.mp.detail.value );
      },

      createTypeChange ( e ) {
        this.createType = Number( e.mp.detail.value )
      },

      uploadSuccess ( image ) {
        this.formData.images.push( image );
      },
    },

    onLoad ( e ) {
      if (e.edit) {
        const editData = JSON.parse(JSON.stringify(wx.getStorageSync('APPONT_EDIT_DATA')));
        wx.removeStorageSync('APPONT_EDIT_DATA');
        /*
        *
        * startTime: '',
          onlookers: true,
          private: false,
          effectiveTime: 120,
          autoCreate: '',
          type: '跑步',
          images: [],
          title: '有人监督，动力十足！',
          des: ''
        * */
        // this.formData = {
        //   onlookers: editData.onlookers,
        //   effectiveTime: editData.effectiveTime,
        //   type: editData.type,
        //   title: editData.title,
        //   des: editData.des,
        //   private: editData.private,
        //   images: editData.images,
        // }
        //
        // console.log(this.formData);
      }
    },

    components: {
      TimePicker,
      AnMore,
      CheckOption,
      UploadImage
    }
  }
</script>

<style lang="less" scoped>
  .create {
    padding-bottom: 120rpx;
    box-sizing: border-box;
    position: relative;
    min-height: 100%;
    /*overflow-y: auto;*/

    .submit-button {
      height: 100rpx;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #aedefc;
    }
  }
</style>
