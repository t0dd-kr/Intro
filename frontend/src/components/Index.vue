<template lang="html">
  <div class="index">
    <div class="header">
      <Header/>
    </div>
  </div>

</template>

<script>
import Header from './Header'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
.header{
  width: 100%;
}
</style>
