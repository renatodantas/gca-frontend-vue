import Vue from 'vue';
import pt from 'vuetify/es5/locale/pt';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'fa4',
  },
});
