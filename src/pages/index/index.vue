<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
      <u-input v-model="value" :type="type" :border="border" />
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello',
      value: '',
      type: 'text',
      border: true
    }
  },
  async onLoad () {
    const res = await this.$api.uniapp({ wd: 'uni-app' })
    console.log(res)

  },
  methods: {

  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
