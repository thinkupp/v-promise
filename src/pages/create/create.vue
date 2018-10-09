<template>
  <div>
    <van-cell-group>
      <picker :value="formData.type" :range="typeRange">
        <van-cell title="选择类型" label="想要别人监督你什么呢" :value="typeRange[formData.type]" value-class="create-type"></van-cell>
      </picker>
    </van-cell-group>

    <time-picker @date-change="startTimeChange" v-if="formData.startTime" :value="formData.startTime" title="生效时间"></time-picker>
    <!--<time-picker @date-change="endTimeChange" v-if="formData.endTime" :value="formData.endTime" title="失效时间"></time-picker>-->

    <van-cell-group>
    <picker :value="effectiveIndex" mode="multiSelector" @change="timeValueChange" @cancel="timeValueCancel" @columnchange="timeTypeChange" :range="timeRange">
      <van-cell title="有效时间" :value="effectiveValue" value-class="create-type"></van-cell>
    </picker>
  </van-cell-group>

    <an-more @change="anMoreChange"></an-more>

    <div class="more-option" v-show="showAnMore">
      <van-cell-group>
        <picker :value="formData.autoCreate" :range="createRange">
          <van-cell title="自动创建" label="00:00 系统自动创建" :value="createRange[formData.autoCreate]" value-class="create-type"></van-cell>
        </picker>
      </van-cell-group>

      <check-option
        :select="formData.onlookers"
        @change="onlookersChange"
        @question="onlookersQuestion"
        title="所有人可见"></check-option>

      <check-option
        :select="private"
        @change="privateChange"
        @question="privateQuestion"
        title="私密"></check-option>

      <upload-image></upload-image>
    </div>

    <button @click="handleSubmit">提交</button>
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
        desc: '有你们在一旁，我可能动力会大些！',
        effectiveIndex: [1, 1],
        tmpEffectiveIndex: [1, 1],
        tmpTimeRange: [[ 1, 2, 3 ], ['分钟', '小时']],

        formData: {
          type: 1,
          autoCreate: 0,
          startTime: '',
          endTime: '',
          onlookers: true,
          private: false,
          effectiveTime: 120
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
        this.formData.endTime = part1 + ' ' + end;
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
        wx.showModal({
          title: '说明',
          content: '勾选此项别人便有机会在大厅中看到您的约定',
          showCancel: false
        })
      },

      privateQuestion () {
        wx.showModal({
          title: '说明',
          content: '勾选此项则只有监督者才能看到此条约定的相关信息',
          showCancel: false
        })
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

</style>
