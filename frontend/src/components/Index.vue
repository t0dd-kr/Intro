<template>
  <div class="index">
    <div class="container">
      <Textbox/>
    </div>
    <div class="container">
      <Button/>
    </div>
    <div class="container">
      <Chatbox/>
    </div>
    <div class="container">
      <ResizableTextarea/>
    </div>
    <div class="container">
      <EditableTextarea/>
    </div>
    <div class="container">
      <ProfileImage/>
    </div>
    <div class="container">
      <YoutubeBox/>
    </div>
  </div>
</template>

<script>
import Textbox from './Textbox'
import Button from './Button'
import Chatbox from './Chatbox'
import ResizableTextarea from './ResizableTextarea'
import EditableTextarea from './EditableTextarea'
import ProfileImage from './ProfileImage'
import YoutubeBox from './YoutubeBox'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Textbox, Button, Chatbox, ResizableTextarea, EditableTextarea, ProfileImage, YoutubeBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .container {
    width:100%;
    padding: 1rem 0rem 1rem 0rem;
  }
</style>
