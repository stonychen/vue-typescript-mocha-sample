import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Counter extends Vue {

  private count = 0
  private increment() {
    this.count++
  }
  private render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <div class="text">text</div>
        <div class="count">{this.count}</div>
      </div>
    )
  }
}
