<template>
  <div style="height: 100%; ">
    <div style="height: 100px; width: 98vw;position: fixed; z-index: 9999">
      <v-row align="center" justify="center" style="height: 100%">
        <v-col cols="2" lg="4" md="">
          <nuxt-link to="/">
            <v-img
              style="margin-left: 25px;"
              width="100px"
              src="logo.png"
              lazy-src="logoload.png"
            ></v-img>
          </nuxt-link>
        </v-col>
        <v-col cols="10" lg="8" md="9">
          <v-tabs
            background-color="rgba(0, 0, 0, 0)"
            color="red darken-3"
            right
            optional
          >
            <v-tab to="/contacts" style="margin-right: 25px;">Контакты</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>

    <v-content style="margin: 0; padding: 0;">
      <v-container style="margin: 0; padding: 0;">
        <div style="width: 100vw">
          <TxtPic :url="'/ph/apple.jpg'" :side="'left'">
            <template v-slot:header>
              Новая ступень.
            </template>
            <template>
              С течением времени все большую роль играет интернет-составляющая
              любого бизнеса. В таких условиях, на ряду с интересными
              соц.сетями, незаменимым становится личный сайт. <br />
              Однако, трудно выйти на рынок, если Вы не будете удивлять.
              Прогрессивный и беспрецедентный дизайн Вашего сайта&nbsp;&ndash;
              первый шаг. Мы сделаем его за Вас, чтобы Вы шли уверенно.
            </template>
            <template v-slot:footer>
              <span></span>
              <span style="text-align: right; font-weight: 600">
                "Если ты хочешь перемену в будущем&nbsp;&ndash; стань этой
                переменой в настоящем."
                <br />
                <span style="font-weight: 300; font-size: 18.5px">
                  Ганди Махатма
                </span>
              </span>
            </template>
          </TxtPic>
        </div>

        <div style="width: 100vw" class="transform">
          <TxtPic :url="'/ph/spaincity.jpg'" :side="'right'">
            <template v-slot:header>
              Мир меняется.
            </template>
            <template>
              В современном мире более половины заказов стали совершаться в
              Интернете. И цифра постоянно растет. Это можно объяснить, ведь
              человек, не выходя из дома, может получить все необходимое. И если
              его заинтересовать, он выберет Вас... еще и знакомым расскажет.
              Хороший бизнесмен должен это понимать.
            </template>
            <template v-slot:footer>
              <span></span>
              <span style="text-align: right; font-weight: 600">
                "Все течет, все меняется."
                <br />
                <span style="font-weight: 300; font-size: 18.5px">
                  Гераклит
                </span>
              </span>
            </template>
          </TxtPic>
        </div>

        <div style="width: 100vw;" class="transform">
          <v-card
            style="padding: 80px 30px"
            tile=""
            outlined=""
            dark=""
            color="black"
          >
            <v-card-title class="display-1 font-weight-bold">
              Почему AG&nbsp;design?
            </v-card-title>
            <v-card-text class="subtitle-1">
              <p style="margin-bottom: 30px;">
                У всех крупных компаний есть сайт, который значительно поднимает
                имидж, популярность, соответственно, и прибыль. Он нужен и вам.
              </p>
              <v-row>
                <v-col cols="12" md="6" lg="4">
                  <SmallCard>
                    <template v-slot:icon>mdi-rowing</template>
                    <template v-slot:title>SEO</template>
                    <template>
                      Оптимизируем Ваш сайт, чтобы он соответствовал всем нормам
                      и требованиям, подготовим почву для успешного бизнеса.
                    </template>
                  </SmallCard>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCard>
                    <template v-slot:icon>mdi-iframe-braces-outline</template>
                    <template v-slot:title>Новейшие технологии</template>
                    <template>
                      Мы используем самые востребованные технологии на рынке,
                      обеспечивающие идеальную работу сайта на долгие годы. Все
                      сайты пишутся на стеке Vue, Nuxt, HTML5, CSS3, Laravel.
                    </template>
                  </SmallCard>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCard>
                    <template v-slot:icon>mdi-monitor-cellphone</template>
                    <template v-slot:title>Адаптивный дизайн</template>
                    <template>
                      Ваш сайт будет интересно, а что самое главное правильно
                      смотреться на любом устройстве и в любых обстоятельствах.
                    </template>
                  </SmallCard>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCard>
                    <template v-slot:icon>mdi-pencil-circle-outline</template>
                    <template v-slot:title>Дальнейшая поддержка</template>
                    <template>
                      Всегда готовы помочь, если при дальнейшей работе у Вас
                      возникнут какие то трудности. Никогда не откажем в
                      каком-либо вопросе по теме сайта.
                    </template>
                  </SmallCard>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCard>
                    <template v-slot:icon>mdi-shield-lock-outline</template>
                    <template v-slot:title>Полгода гарантии</template>
                    <template
                      >На весь результат работ у нас полгода гарантийной
                      поддержки. Бесплатно исправим ошибки и
                      недоработки.</template
                    >
                  </SmallCard>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCard>
                    <template v-slot:icon>mdi-information-outline</template>
                    <template v-slot:title>
                      Обучение работе
                      <br v-if="$breakpoint.xs" />
                      с сайтом
                    </template>
                    <template>
                      Расскажем и покажем, как пользоваться функционалом Вашего
                      сайта, если появятся вопросы, обязательно ответим.
                    </template>
                  </SmallCard>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>

        <div style="width: 100vw;" class="transform">
          <v-card
            style="padding: 100px 50px; border: 0"
            tile=""
            outlined=""
            flat
          >
            <v-card-subtitle>
              AG&nbsp;design&nbsp;&ndash; работаем на Ваш успех.
            </v-card-subtitle>
            <v-card-title
              :class="[
                $breakpoint.mdAndUp
                  ? 'display-1 font-weight-bold'
                  : 'headline font-weight-bold'
              ]"
            >
              Взгляните вперед. Конкуренты уже стабильно зарабатывают в
              Интернете и ушли в отрыв. Закажите сайт у AG design, и Вам
              придется оглядываться назад, лишь чтобы увидеть их силуэты.
              <br />
              <span style="color: #720000">
                Конкуренты уже от Вас отстают.
              </span>
            </v-card-title>
          </v-card>
        </div>

        <!-- 
        <div style="width: 100vw;" class="transform">
          <v-card
            style="padding: 100px 50px; border: 0"
            tile=""
            outlined=""
            flat
          >
            <v-card-subtitle>
              А вот и этапы работы.
            </v-card-subtitle>
            <v-card-title
              :class="[
                $breakpoint.mdAndUp
                  ? 'display-1 font-weight-bold'
                  : 'headline font-weight-bold'
              ]"
            >
              У всех крупных компаний есть сайт, который значительно поднимает
              имидж, популярность, соответственно, и прибыль. Он нужен и вам.
            </v-card-title>
            <v-card-text class="subtitle-1">
              <v-row>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>01</template>
                    <template>
                      Брифинг
                      <br />
                      и обговор деталей
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>02</template>
                    <template>
                      Аналитика,
                      <br />
                      сбор семантики
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>03</template>
                    <template>
                      Дизайн,
                      <br />
                      шаблон
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>04</template>
                    <template>
                      Фронтенд
                      <br />
                      разработка
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>05</template>
                    <template>
                      Бэкенд
                      <br />
                      разработка
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>06</template>
                    <template>
                      Наполнение
                      <br />
                      контентом
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>07</template>
                    <template>
                      Сдача и
                      <br />
                      запуск проекта
                    </template>
                  </SmallCardNum>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <SmallCardNum>
                    <template v-slot:title>08</template>
                    <template>
                      Развитие и
                      <br />
                      поддержка проекта
                    </template>
                  </SmallCardNum>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div> -->
      </v-container>
    </v-content>
  </div>
</template>

<style css>
.transform {
  transform: translateY(-100px);
}
.big-font {
  font-size: 60px;
}
.medium-font {
  font-size: 34px;
  line-height: 16px;
}
.small-font {
  font-size: 25px;
  line-height: 12px;
}
@media screen and (max-width: 1099px) {
  .transform {
    transform: translateY(-1px);
  }
}
</style>

<script>
import TxtPic from '@/components/TxtPic.vue'
import SmallCard from '@/components/SmallCard.vue'
// import SmallCardNum from '../components/SmallCardNum.vue'

export default {
  name: 'Web',
  components: {
    TxtPic,
    SmallCard
    // SmallCardNum
  },
  head() {
    return {
      title: 'Сайты'
    }
  }
}
</script>
