/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { RuleItem as AsyncValidatorRuleItem } from 'async-validator'
declare global {
  interface Window {
    vm: Vue
  }
  type RuleItem = AsyncValidatorRuleItem

  type RouteMapType = {
    [key: string]: RouteConfig
  }


  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {

    }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {

    }
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
