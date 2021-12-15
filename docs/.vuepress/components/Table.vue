<template>
  <div>
    <button @click="click">{{name}}</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: '自定义',
    }
  },
  methods: {
    click() {
      console.log('点击了按钮');
    }
  }
}
</script>

<style>

</style>