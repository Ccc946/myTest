import Vue from 'vue'

import Message from '@/components/message'
import Confirm from '@/components/confirm'
import Banner from '@/components/banner'
import GlobalMask from '@/components/GlobalMask'


Vue.component('banner', Banner);
Vue.component('global-mask', GlobalMask);

Vue.prototype.$message = Message.install;
Vue.prototype.$confirm = Confirm.install;
