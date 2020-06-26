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
}
