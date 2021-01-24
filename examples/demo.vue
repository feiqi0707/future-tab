<template>
<div class="demo">
  <future-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </future-tab>
  <h3>请选择移动端调试模式或者真机调试</h3>
  <!-- 通过指定fixBottom为true实现固定在底部的tab -->
  <future-tab
    v-model="bottomSelectedId"
    :items="bottomItems"
    :options="bottomOptions"
    >
  </future-tab>
</div>
</template>

<script>

export default {
  name: 'Demo',
  data () {
    return {
      selectedId: 4,
      bottomSelectedId: 0,
      items: [
        {label: '首页'},
        {label: '推荐'},
        {label: 'Android'},
        {label: '前端'},
        {label: '后端'},
        {label: 'iOS'},
        {label: '产品'},
        {label: '人工智能'},
        {label: '设计'}
      ],
      options: {
        activeColor: '#1d98bd',
        fixBottom: false
      },
      bottomItems: [
        {text: '首页', icon: 'iconfont icon-Homehomepagemenu'},
        {text: '消息', icon: 'iconfont  icon-message'},
        {text: '发现', icon: 'iconfont  icon-search'},
        {text: '我的', icon: 'iconfont  icon-me'}
      ],
      bottomOptions: {
        activeColor: '#1d98bd',
        fixBottom: true,
        labelKey: 'text'
      }
    }
  },

  methods: {
    handleChange (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style>
.demo{
}
</style>
