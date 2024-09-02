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
      const text = '亲爱的小白,我们已经一周年啦！回想起一年前的今天，真的感觉像做梦一样（嘻嘻~虽然那一天我勇敢的一批，现在想起来那天我的表白我的心跳得有200以上！）。这一年里我们走过的每一段旅程、看过的每一场演唱会、对我来说都是人生中最美好的回忆，我本不是一个矫情的人，但是跟你在一起我总感觉自己像一个小孩子，能肆无忌惮的跟你撒娇~虽然这一年里我们有些小摩擦，但是！每次我们都能和好，这证明我们就是天生一对！任何事情都不能把我们分开。仔细回想着一年的变化，除了身材有点幸福肥以外（嘻嘻不重要），我变得愈发成熟，学会了换位思考和多考虑对方感受（嘻嘻是不是很强），小白这一年功不可没，已经把小鸡毛变成了一个成熟的男人！小鸡毛以后会更加更加更加更加爱护小白！！！！回顾一年感情，发现真没有平淡期（天天都很甜蜜），可能这就是命中注定的爱情吧~，反思这一年我们也有好多事情没有做！比如我答应你的老薛的内场~比如自己做一顿饭给小白吃~再比如结束异地~哎，有时候也会感叹下自己的无能，不过小白请相信小鸡毛！我们的未来一定是一片光明！加油！！！！！，最后的最后展望一下未来！我希望在明年！我们可以每天都住在一个房间里，共同走过每一个晨昏！无论是平淡的日子，还是冒险的旅程，你的身边都有我的陪伴！！！！最后的最后！！！祝我们一周年快乐！！！我亲爱的小白'
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
