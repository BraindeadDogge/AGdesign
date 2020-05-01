import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: '112605123722285', //  change 'null' to your Facebook Page ID,
  theme_color: '#d72000', // theme color in HEX
  locale: 'en_US' // default 'en_US'
})
