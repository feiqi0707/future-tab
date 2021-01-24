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
      items: {
        contents:
        [
          {
            title: {name: '首页', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          },
          {
            title: {name: '首页1', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题1', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          },
          {
            title: {name: '首页', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          },
          {
            title: {name: '首页1', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题1', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          }
        ],
        customStyle: {flexGrow: 0, width: '85px', backgroundColor: '#fff', borderRadius: '5px', textAlign: 'left', padding: '5px 20px', height: '50px'}
      },
      options: {
        activeColor: '#1d98bd',
        fixBottom: false
      },
      bottomItems: {
        contents: [
          {title: {name: '首页', icon: 'iconfont icon-Homehomepagemenu', customStyle: {}}},
          {title: {name: '消息', icon: 'iconfont icon-message', customStyle: {}}},
          {title: {name: '发现', icon: 'iconfont icon-search', customStyle: {}}},
          {title: {name: '我的', icon: 'iconfont icon-me', customStyle: {}}}
        ],
        customStyle: {flexGrow: 1}
      },
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
</style>
