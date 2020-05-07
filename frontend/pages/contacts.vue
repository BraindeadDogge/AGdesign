<template>
  <div class="text-center" style="height: 100%">
    <v-btn class="ma-4" right outlined color="indigo" to="/">
      &times; Закрыть</v-btn
    >
    <div style="height: 80%">
      <v-row justify="center" align="center">
        <v-col cols="11" lg="9" md="10">
          <p
            :class="[$vuetify.breakpoint.lgAndUp ? 'display-2' : 'display-1']"
            class="text-left"
          >
            <a
              style="font-weight: 700; overflow-wrap: normal; word-wrap: normal; word-break: normal; hyphens: manual; margin-left: 10px; margin-bottom: 7px; color: #3949AB"
              >Форма!</a
            >
            <br v-if="!$vuetify.breakpoint.mdAndUp" />
            <span
              :class="[
                $vuetify.breakpoint.lgAndUp ? 'body-2 mx-0' : 'caption mx-3'
              ]"
            >
              или напишите нам на почту:
              <a :href="`mailto:grigory@gulyuk.com`">grigory@gulyuk.com</a>
            </span>
          </p>
          <v-card elevation="1" color="#fffffa">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="9">
                    <v-row>
                      <v-col cols="12" sm="7" md="6">
                        <v-text-field
                          v-model="name"
                          label="Ваше Имя"
                          @input="check()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="5" md="6">
                        <v-text-field
                          v-model="email"
                          label="Ваша почта*"
                          :error-messages="emailErrors"
                          required
                          @input="
                            $v.email.$touch()
                            check()
                          "
                          @blur="$v.email.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="text"
                          label="Ваше сообщение*"
                          :error-messages="textErrors"
                          required
                          @input="
                            $v.text.$touch()
                            check()
                          "
                          @blur="$v.text.$touch()"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <v-checkbox
                          v-if="!$vuetify.breakpoint.mdAndUp"
                          v-model="validbox"
                        >
                          <template v-slot:label>
                            <div
                              :class="[
                                $vuetify.breakpoint.lgAndUp
                                  ? 'body-2'
                                  : 'caption'
                              ]"
                            >
                              <nobr
                                >Я принимаю
                                <router-link to="/policy" v-on="on"
                                  >Политику конфид-ти</router-link
                                >.</nobr
                              >
                            </div>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          v-if="$vuetify.breakpoint.mdAndUp"
                          v-model="validbox"
                        >
                          <template v-slot:label>
                            <div
                              :class="[
                                $vuetify.breakpoint.lgAndUp
                                  ? 'body-2'
                                  : 'caption'
                              ]"
                            >
                              <nobr
                                >Я принимаю
                                <router-link to="/policy" v-on="on"
                                  >Политику конфидециальности</router-link
                                >.</nobr
                              >
                            </div>
                          </template>
                        </v-checkbox>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col class="text-left" cols="12" sm="12" md="3">
                    <v-card-title
                      style="word-break: normal;"
                      :class="[
                        $vuetify.breakpoint.lgAndUp ? 'title' : 'subtitle-1'
                      ]"
                      ><p
                        style="font-weight: 700; overflow-wrap: normal; word-wrap: normal; word-break: normal; hyphens: manual;"
                      >
                        Же&shy;ла&shy;тель&shy;но ука&shy;зать:
                      </p></v-card-title
                    >
                    <v-card-text
                      :class="[
                        $vuetify.breakpoint.lgAndUp ? 'body-1' : 'body-2'
                      ]"
                      class="mx-2"
                    >
                      <p>&ndash; Тип сайта</p>
                      <p>&ndash; Сроки</p>
                      <p>&ndash; Удобное время для связи</p>
                      <p>&ndash; Удобный мессенджер для связи</p>
                      <p>&ndash; Личные пожелания</p>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
              <small>*обязательные поля</small>
            </v-card-text>
            <v-card-actions>
              <v-card-text style="text-align: left">
                Или просто позвоните:
                <nobr>
                  <nobr>
                    <a :href="`tel:8(985) 389-41-66`">8(985) 389-41-66</a>
                  </nobr>
                  <br class="toshow" />
                  или
                  <br class="toshow" />
                  <nobr>
                    <a :href="`tel:8(916) 752-24-49`">8(916) 752-24-49</a>
                  </nobr>
                </nobr>
              </v-card-text>
              <v-spacer />
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="blue darken-1"
                    x-large
                    :disabled="!valid || !validbox"
                    text
                    v-on="on"
                    @click="submit"
                    >Отправить</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title style="word-break: normal;" class="headline"
                    >Спасибо!</v-card-title
                  >
                  <v-card-text
                    >Мы свяжемся с Вами в ближайшее время для уточнения
                    деталей.</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      text
                      to="/"
                      @click="dialog = false"
                      >Ок</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="css">
.toshow {
  display: none;
}
@media screen and (max-width: 460px) {
  .toshow {
    display: inline;
  }
}
</style>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    text: { required },
    email: { required, email }
  },

  data: () => ({
    name: '',
    email: '',
    text: '',
    dialog: false,
    valid: false,
    validbox: false
  }),

  computed: {
    textErrors() {
      const errors = []
      if (!this.$v.text.$dirty) return errors
      !this.$v.text.required && errors.push('Напишите что-нибудь...')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Неправильно написана почта')
      !this.$v.email.required && errors.push('Почта обязательна')
      return errors
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
      if (this.valid === true) {
        this.$axios
          .post(
            `${window.location.origin}/backend/public/index.php/api/web/add`,
            {
              name: this.name,
              mail: this.email,
              text: this.text
            }
          )
          .then(function() {
            console.log('Мы обязательно с Вами свяжемся ;)')
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },

    check() {
      const errors = []
      if (this.$v.text.$dirty)
        !this.$v.text.required && errors.push('Напишите что-нибудь...')
      if (this.$v.email.$dirty) {
        !this.$v.email.email && errors.push('Неправильно написана почта')
        !this.$v.email.required && errors.push('Почта обязательна')
      }
      errors.length > 0 ? (this.valid = false) : (this.valid = true)
    }
  },

  head() {
    return {
      title: 'Контакты'
    }
  }
}
</script>
