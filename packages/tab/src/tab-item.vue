<template>
  <div
    class="future-tab-item"
    :style="$parent.value === id ? activeStyle : {}"
    @click="onItemClicked">
    <div class="future-tab-item-icon" v-if="$parent.fixBottom"><slot name="icon"></slot></div>
    <div class="future-tab-item-label"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'FutureTabItem',
  computed: {
    activeStyle () {
      return {
        color: this.$parent.activeColor
      }
    }
  },
  data () {
    return {
      id: (this.$parent.$children.length || 1) - 1
    }
  },
  methods: {
    onItemClicked () {
      this.$parent.$emit('input', this.id)
    }
  }
}
</script>

<style>
.future-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.future-tab-item-icon {
  margin: 0 auto 5px;
}

</style>
