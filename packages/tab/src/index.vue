<template>
<div class="tab-list">
  <future-tabbar
    v-model="selectedId"
    v-bind="options"
  >
    <future-tab-item
      class="tab-item"
      v-for="(item, index) in items.contents"
      :key="index"
      :style="items.customStyle"
      >
      <div
        v-if="options.fixBottom && item.title.icon"
        slot="icon">
        <i :class="item.title.icon"></i>
      </div>
      <div class="title" :style="item.title.customStyle">{{ item.title.name }}</div>
      <div class="sub-title" :style="item.subTitle && item.subTitle.customStyle">{{ item.subTitle && item.subTitle.name }}</div>
    </future-tab-item>
  </future-tabbar>
</div>
</template>

<script>
import FutureTabbar from './tabbar'
import FutureTabItem from './tab-item'

export default {
  name: 'FutureTab',
  components: {
    FutureTabbar,
    FutureTabItem
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Object,
      default () {
        return {}
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      selectedId: this.value
    }
  },
  computed: {
    labelKey () {
      return this.options.labelKey || 'label'
    }
  },
  watch: {
    value (value) {
      this.selectedId = value
    },
    selectedId (value) {
      this.$emit('input', value)
      this.$emit('change', this.items[value], value)
    }
  }
}
</script>

<style>

.tab-list{
  background-color: #c5c1c1;
}
/*
.tab-list .tab-item{
  padding: 5px 20px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
}

 .tab-list .tab-item .title{
   margin-bottom: 2px;
}

/*.tab-list .tab-item .sub-title{
} */

</style>
