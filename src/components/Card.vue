<template>
  <div class="card-content">
    <div
      v-for="(item, index) in content"
      v-if="currentPage === index"
      :key="index"
      class="card-item"
    >
      <wired-card elevation="5">
        <vue-typed-js
          :strings="[item]"
          :show-cursor="false"
        >
          <p class="typing" />
        </vue-typed-js>
      </wired-card>
    </div>
    <div class="card-pagination">
      <div
        v-if="currentPage !== 0"
        class="card-btn card-prev"
        @click="prev"
      >
        <wired-button elevation="3">
          上一页
        </wired-button>
      </div>
      <div
        v-if="currentPage !== content.length - 1"
        class="card-btn card-next"
        @click="next"
      >
        <wired-button elevation="3">
          下一页
        </wired-button>
      </div>
    </div>
  </div>
</template>

<script>
import WiredButton from 'wired-button'
import WiredCard from 'wired-card'
import wrapTextNumber from '@/utils/text'

export default {
  name: 'Card',
  components: {
    WiredButton,
    WiredCard
  },
  data() {
    return {
      currentPage: 0,
      content: []
    }
  },
  created() {
    this.initContent()
  },
  methods: {
    initContent() {
      const text = '亲爱的小白,不知不觉我们都快要一年啦。时间过得真快呀~现在回想起就像昨天一样。在这一年里我们经历了太多太多开心的事情，我们一起漂流、一起滑雪、一起游戏...渐渐我已经离不开你，生活中的每一件事情无论好与坏我都想与你分享。在你身边我总能像一个小孩子一样无忧无虑,肆意地玩耍、大笑、放下防备,你的陪伴,让我感受到前所未有的安全感和幸福感。虽然有时候我的孩子气与不成熟也会惹你生气,但我们总能和好（每次惹你生气，我都非常后悔和懊恼）,感情需要磨合。我会努力改正自己的缺点,变得更加成熟稳重,让你感受到我对你的真诚对你的爱。尽管现在我们身处异地，但就像你说的你不相信异地恋，但你相信我；在没有见面的日子里,我们每天也是甜甜蜜蜜，仿佛你无时无刻就在我身边。无论是你的笑容、你的声音,还是那些我们一起经历的美好时光,都会成为我前进的动力。我会努力工作,努力考公，争取早日上岸，在未来的某一天里结束异地！让我们相信彼此,相信我们的爱情,异地恋对于我们来说真的不是问题。在你孤单和寂寞的时候只要微信发一句“想你了”，小鸡毛会像超人一样闪现到你面前！在信的末尾送你一句我很喜欢的话,"我从不羡慕街角拥吻的情侣，我只羡慕牵手散步的老人"。我始终相信陪我到老的只会是你，也只能是你~永远爱你的小鸡毛'
      // console.log('process.env.VUE_APP_CONTENT',process.env.VUE_APP_CONTENT)
      this.content = wrapTextNumber(text, 2000)
    },
    /**
     * 下一页
     */
    prev() {
      this.currentPage--
    },
    /**
     * 下一页
     */
    next() {
      this.currentPage++
    }
  }
}
</script>

<style lang="scss">
.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card-item {
    width: 90%;
    font-size: 2rem;
    line-height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.8);

    .wired-rendered,
    .typed-element {
      height: 60vh;
      display: flex;
      align-items: flex-start;
    }
  }

  .card-pagination {
    width: 90%;
    display: flex;
    margin-top: 3rem;
    padding: 1rem;
    justify-content: space-around;
  }
}
</style>
