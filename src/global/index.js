import Vue from 'vue'
import utils from '../modules/js/util'
import {WexinShare, WexinPay} from '../modules/js/libs/Wxutil'
import axios from '../modules/js/libs/api.request'
Vue.prototype.$WexinShare = WexinShare
Vue.prototype.$WexinPay = WexinPay
Vue.prototype.$util = utils
Vue.prototype.$axios = axios
