<template>
  <v-app id="sandbox" style="margin: 0; padding: 0;">
    <div v-if="loading" class="loading">
      <loading />
    </div>
    <v-content style="margin: 0; padding: 0;">
      <v-container fluid style="height: 100%; margin: 0; padding: 0">
        <transition
          name="fade"
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <nuxt />
        </transition>
      </v-container>
    </v-content>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal" style="padding: 10px 50px">
          <v-row>
            <v-col cols="12" md="5" align-self="center">
              <strong class="subheading">
                Будем на связи!
                <br v-if="!$breakpoint.mdAndUp" />
                <span style="font-size: 11px; font-weight: 300">
                  Оставьте свой телефончик.
                </span>
              </strong>
              <br />
              <strong class="body-2">
                Или заполните
                <nuxt-link style="color: blue" to="/contacts">форму</nuxt-link>
              </strong>
            </v-col>

            <v-col cols="12" md="7" align-self="center">
              <v-text-field
                v-model="text"
                placeholder="+7(985) 389-41-66..."
                filled
                rounded
                dense
              ></v-text-field>
              <v-row>
                <v-col cols="1" md="2" lg="1">
                  <v-btn
                    class="mx-4"
                    dark
                    icon
                    href="https://www.facebook.com/AGdesign.classic"
                    target="_blank"
                  >
                    <v-icon size="44px">mdi-facebook</v-icon>
                  </v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="9" md="10" lg="11">
                  <v-btn dark block rounded="" outlined="" @click="send">
                    Отправить
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          2020 — <strong>AG design.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import loading from '../components/loading.vue'

export default {
  components: {
    loading
  },
  data: () => ({
    text: '',
    loading: true
  }),
  mounted() {
    window.addEventListener('load', () => {
      console.log('loaded')
      this.loading = false
    })
  },
  methods: {
    send() {
      this.$axios
        .post(
          `${window.location.origin}/backend/public/index.php/api/web/add`,
          {
            name: 'AG design.',
            mail: 'Номер телефона ниже',
            text: this.text
          }
        )
        .then(() => {
          console.log('Мы обязательно с Вами свяжемся ;)')
          this.text = 'Мы обязательно с Вами свяжемся ;)'
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.7.2';

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  z-index: 9999;
}

@media screen and (min-width: 959px) {
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(199, 199, 199);
    border-radius: 15px;
    border: 3px solid #ffffff;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(170, 170, 170);
  }
}

v-card-title {
  word-break: normal !important;
}
</style>
