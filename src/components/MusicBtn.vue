<template>
  <div class="music-btn">
    <audio ref="music-audio" loop autoplay>
      <source :src="audio" type="audio/mp3">
      Your browser does not support the <code>audio</code> element.
    </audio>
  </div>
</template>

<script>
import WiredButton from 'wired-button'
import { store } from '@/store'

export default {
  name: 'MusicBtn',
  components: {
    WiredButton
  },
  data() {
    return {
      elevation: store.elevation,
      musicStatus: false,
      audio: '../assets/Richard Sanderson - Reality.mp3'
    }
  },
  mounted() {
    this.musicChange()
  },
  methods: {
    /**
     * 音乐切换业务
     */
    musicClick() {
      this.musicStatus = !this.musicStatus
      this.musicChange()
    },
    musicChange() {
      this.musicStatus ? this.$refs['music-audio'].play() : this.$refs['music-audio'].pause()
    }
  }
}
</script>

<style lang="scss">
.music-btn {
  position: absolute;
  top: 7rem;
  right: 5rem;
}
</style>
