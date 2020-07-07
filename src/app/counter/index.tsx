import { Component, Vue } from 'vue-property-decorator'
import style from './index.module.less'
import './index.less'

@Component
export default class Counter extends Vue {

  private count = 0
  private increment() {
    this.count++
  }
  private render() {
    return (
      <div class={style.container}>
        <button onClick={this.increment}>Increment</button>
        <div class="text">text</div>
        <div class="count">{this.count}</div>
      </div>
    )
  }
}
