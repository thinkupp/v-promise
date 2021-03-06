<template>
  <div class="create">
    <van-cell-group>
      <picker :value="createType" :range="typeRange" @change="createTypeChange">
        <van-cell title="选择类型" label="想要别人监督你什么呢" :value="typeRange[createType]" value-class="create-type"></van-cell>
      </picker>
    </van-cell-group>

    <time-picker @date-change="startTimeChange" v-if="formData.startTime" :value="formData.startTime" title="生效时间"
                 :border="false"></time-picker>

    <van-cell-group>
      <picker :value="effectiveIndex" mode="multiSelector" @change="timeValueChange" @cancel="timeValueCancel"
              @columnchange="timeTypeChange" :range="timeRange">
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
          @input="titleChange"
          placeholder="请输入标题"></van-field>

        <van-field
          :value="formData.des"
          label="描述"
          type="textarea"
          @input="desChange"
          placeholder="描述"></van-field>
      </van-cell-group>
    </div>

    <div class="footer">
      <button class="go-home" @click="goHome">首页</button>
      <button class="submit-button" @click="handleSubmit">{{editing ? "编辑" : "提交"}}</button>
    </div>

  </div>
</template>

<script>
  import TimePicker from '../../component/TimePicker.vue'
  import AnMore from './components/AnMore.vue'
  import CheckOption from '../../component/CheckOption.vue'
  import UploadImage from './components/UploadImage.vue'
  import { formatTime  } from '../../utils/index.js'
  const MINUTES_OPTION = [5, 10, 20, 30, 40, 50];
  const HOURS_OPTION = [1, 2, 3];

  export default {
    data() {
      return {
        typeRange: ['起床', '跑步'],
        createRange: ['从不', '每天', '工作日', '节假日'],
        timeRange: [[1, 2, 3], ['分钟', '小时']],
        showAction: false,
        showAnMore: false,
        effectiveIndex: [1, 1],
        tmpEffectiveIndex: [1, 1],
        tmpTimeRange: [[1, 2, 3], ['分钟', '小时']],
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
        },

        editing: false,
      }
    },

    mounted() {
      this.initData();
    },

    computed: {
      effectiveValue() {
        const tIndex = this.effectiveIndex[0];
        const tType = this.effectiveIndex[1];
        return this.timeRange[0][tIndex] + ' ' + this.timeRange[1][tType];
      }
    },

    methods: {
      initData(part1, start, end) {
        const time = new Date();
        const year = time.getFullYear();
        let month = time.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = time.getDate();
        day = day < 10 ? '0' + day : day;
        part1 = part1 || `${year}-${month}-${day}`;

        // 计算十分钟以后的时间
        let minutes = time.getMinutes();
        time.setMinutes(minutes + 10);
        let hours = time.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        minutes = time.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        start = start || (`${hours}:${minutes}`);
        end = end || '08:00';
        this.formData.startTime = part1 + ' ' + start;
      },

      startTimeChange(v) {
        this.formData.startTime = v;
      },

      endTimeChange(v) {
        this.formData.endTime = v;
      },

      anMoreChange() {
        this.showAnMore = !this.showAnMore;
      },

      onlookersChange(v) {
        this.formData.onlookers = v;
      },

      privateChange(v) {
        this.formData.private = v;
      },

      onlookersQuestion() {
        this.$modal.onlookersQuestionTip();
      },

      privateQuestion() {
        this.$modal.privateQuestion();
      },

      handleSubmit() {
        const mIndex = this.effectiveIndex[0];
        const mType = this.effectiveIndex[1];
        let time = this.timeRange[0][mIndex];
        if (mType === 1) {
          // 小时
          time *= 60;
        }

        this.formData.effectiveTime = time;
        this.formData.type = this.typeRange[this.createType];
        this.editing ? this.updateAppoint() : this.createAppoint();
      },

      createAppoint() {
        this.$api.createAppoint(this.formData).then(res => {
            wx.redirectTo({
                url: '/pages/appoint/main?id=' + res.id
            })
        })
      },

      updateAppoint() {
        this.$api.updateAppoint(this.formData).then(res => {
            wx.redirectTo({
                url: '/pages/appoint/main?id=' + res.id
            })
        })
      },

      timeTypeChange(e) {
        const {column, value} = e.mp.detail;

        let newValue = MINUTES_OPTION;

        if (column) {
          if (value === 1) {
            newValue = HOURS_OPTION;
          }

          this.$set(this.timeRange, 0, newValue);
        }

        this.$set(this.effectiveIndex, column, value);
      },

      timeValueChange(e) {
        const valueIndexAry = e.mp.detail.value;

        this.effectiveIndex = valueIndexAry;
        this.tmpEffectiveIndex = valueIndexAry.deepCopy();
        this.tmpTimeRange = this.timeRange.deepCopy();
      },

      timeValueCancel() {
        this.effectiveIndex = this.tmpEffectiveIndex.deepCopy();
        this.timeRange = this.tmpTimeRange.deepCopy();
      },

      autoCreateChange(e) {
        this.autoCreateIndex = Number(e.mp.detail.value);
      },

      createTypeChange(e) {
        this.createType = Number(e.mp.detail.value)
      },

      uploadSuccess(image) {
        this.formData.images.push(image);
      },

      goHome() {
        this.$route.toIndex();
      },

      titleChange(e) {
        this.formData.title = e.mp.detail;
      },

      desChange(e) {
        this.formData.des = e.mp.detail;
      }
    },

    onLoad(e) {
      if (e.edit) {
        const editData = JSON.parse(JSON.stringify(wx.getStorageSync('APPONT_EDIT_DATA')));
        wx.removeStorageSync('APPONT_EDIT_DATA');

        this.formData = {
          onlookers: editData.onlookers,
          effectiveTime: editData.effectiveTime,
          type: editData.type,
          title: editData.title,
          des: editData.des,
          private: editData.private,
          images: editData.images,
          id: editData.id,
          startTime: formatTime(editData.startTime)
        }

        // 计算有效时间
          let numberIndex = 0;
          let typeIndex = 0;
          
          if (editData.effectiveTime >= 60) {
            // 小时
            typeIndex = 1;
            const hours = Math.floor(editData.effectiveTime / 60);
            numberIndex = HOURS_OPTION.indexOf(hours);
            this.$set(this.timeRange, 0, HOURS_OPTION);
          } else {
            // 分钟
            this.$set(this.timeRange, 0, MINUTES_OPTION);
            numberIndex = MINUTES_OPTION.indexOf(editData.effectiveTime);
          }

          // 类型
         this.createType = this.typeRange.indexOf(editData.type); 
         this.effectiveIndex = [numberIndex, typeIndex];
         this.editing = true;
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
    padding-bottom: 120 rpx;
    box-sizing: border-box;
    position: relative;
    min-height: 100%;
    /*overflow-y: auto;*/

    .submit-button {

    }
  }

  .footer {
    display: flex;
    height: 100 rpx;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    .go-home {
      flex: 2;
    }

    .submit-button {
      background: #aedefc;
      flex: 3;
    }
  }
</style>
