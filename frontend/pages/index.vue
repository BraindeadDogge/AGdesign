<template>
  <div style="height: 100%; ">
    <div style="height: 100px; width: 98vw;position: fixed; z-index: 9998">
      <v-row align="center" justify="center" style="height: 100%">
        <v-col cols="2" lg="4" md="">
          <nuxt-link to="/">
            <v-img
              style="margin-left: 25px;"
              width="100px"
              src="/ph/logo.png"
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
            <v-tab to="/web">Сайты</v-tab>
            <v-tab to="/contacts" style="margin-right: 25px;">Контакты</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>

    <v-content style="margin: 0; padding: 0;">
      <v-container style="margin: 0; padding: 0;">
        <div style="height: 100vh; width: 100vw;">
          <v-img
            src="/ph/background1.jpeg"
            lazy-src="/ph/background1-lazy.jpeg"
            height="100%"
          >
            <div
              style="
              height: 83vh;
              width: 100vw;
              align-items: center;
              justify-content: center;
              display: flex"
            >
              <v-row justify="start">
                <v-col cols="12"></v-col>
                <v-col cols="12"></v-col>
                <v-col cols="12"></v-col>
                <v-col cols="12"></v-col>
                <v-col cols="12">
                  <v-card elevation="18" tile style="transform: scale(1);">
                    <v-card-title
                      style="font-family: 'Montserrat', sans-serif; justify-content: center; word-break: normal;"
                      :class="[
                        $breakpoint.smAndDown
                          ? 'headline font-weight-light'
                          : 'display-3 font-weight-light'
                      ]"
                    >
                      Создание сайтов под ключ
                    </v-card-title>
                    <v-card-title
                      v-if="$nuxt.isOffline"
                      class="overline"
                      style="justify-content: center; margin-top: -10px"
                    >
                      По-моему ты не в сети... Но как хочешь, сайт уже
                      подгружен, вроде.
                    </v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card elevation="18" style="transform: scale(0.70)">
                    <v-card-title
                      style="font-family: 'Montserrat', sans-serif; justify-content: center; word-break: normal;"
                      :class="[
                        $breakpoint.smAndDown
                          ? 'headline font-weight-thin'
                          : 'display-1 font-weight-thin'
                      ]"
                    >
                      С AG&nbsp;design Вы получите не только сайт, но и
                      безупречного спутника для Вашего бизнеса.
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div
              style="
              height: 17vh;
              width: 100vw;
              align-items: center;
              justify-content: center;"
            >
              <v-card
                elevation="18"
                color="transparent"
                style="height: 100%; box-shadow: none !important"
                @click="$vuetify.goTo('#info')"
              >
                <v-card-title style="justify-content: center; height: 50%">
                  <scroll />
                </v-card-title>
              </v-card>
            </div>
          </v-img>
        </div>

        <div style="width: 100vw">
          <TxtPic :url="'/ph/house.jpg'" :side="'left'">
            <template v-slot:header>
              Зачем?
            </template>
            <template>
              Сайт для бизнеса&nbsp;&ndash; необходимый инструмент, конечно,
              если Вы хотите привлечь новых клиентов и повысить имидж в глазах
              потенциального покупателя, увеличить объемы продаж или просто
              заявить о себе.
              <br />
              Качественный сайт&nbsp;&ndash; лицо компании. В жизни первое
              мнение о человеке создаётся по его внешности. В
              интернете&nbsp;&ndash; по сайту.
            </template>
            <template v-slot:footer>
              <span></span>
              <span style="text-align: right; font-weight: 600">
                "Мир сегодня – это красота."
                <br />
                <span style="font-weight: 300; font-size: 18.5px">
                  Э.М.Ремарк
                </span>
              </span>
            </template>
          </TxtPic>
        </div>

        <div style="width: 100vw" class="transform">
          <TxtPic :url="'/ph/spaincity.jpg'" :side="'right'">
            <template v-slot:header>
              Почему?
            </template>
            <template>
              В связи с каждодневным ростом конкуренции становится всё труднее
              заинтересовать клиента, интригующий современный дизайн Вашего
              сайта&nbsp;&ndash; всё, что нужно в нынешних реалиях.
            </template>
            <template v-slot:footer>
              <span>
                Дизайн? A<span id="space">a</span
                ><span style="color:#720000">G</span> design.
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
            <v-card-title
              style="word-break: normal;"
              class="display-1 font-weight-bold"
            >
              Ваши преимущества.
            </v-card-title>
            <v-card-text class="subtitle-1">
              <p style="margin-bottom: 6px;">
                "Качественная работа", "профессиональные сотрудники", "быстрое
                исполнение"... Всё это Вы уже видели на сотнях сайтах похожих
                друг на друга.
              </p>
              <p style="margin-bottom: 6px;">
                Мы же, не исключая этих "преимуществ", можем предложить Вам
                настоящие достоинства. Заказывая у нас сайт, клиент работает с
                необычным коллективом: в нём присутствуют как опытные
                сотрудники, так и молодые ребята, которые лучше понимают
                проблемы современного бизнеса.
              </p>
              <p style="margin-bottom: 0px;">
                Это и выступает гарантом лучшего качества.
              </p>
            </v-card-text>
          </v-card>
        </div>

        <div style="width: 100vw;" class="transform" id="info">
          <v-card
            style="padding: 100px 30px; border: 0"
            tile=""
            outlined=""
            color=""
          >
            <v-card-subtitle
              >Наши услуги&nbsp;&ndash; Ваш выбор</v-card-subtitle
            >
            <v-card-title style="word-break: normal;">
              Наши сайты не просто соответствуют времени, они его опережают.
              Станьте обладателем сайта будущего. Сделайте своё будущее
              счастливым.
            </v-card-title>
            <v-card-text>
              <v-row justify="space-around">
                <v-col
                  sm="12"
                  md="6"
                  lg="4"
                  style="display: flex; justify-content: center;"
                >
                  <FlipCard>
                    <!--Front slot begins-->
                    <template v-slot:header>Личный сайт.</template>
                    <!--Front slot ends-->
                    <!--Back slot begins-->
                    <v-card-title
                      style="word-break: normal;"
                      class="headline font-weight-bold"
                    >
                      Личный сайт.
                    </v-card-title>
                    <v-card-subtitle style="margin-top: -10px">
                      От 15.000&#8381;
                    </v-card-subtitle>
                    <v-card-text>
                      &nbsp;Универсальный сайт, подходящий под любые задачи.
                      <br />&nbsp;От развлекательного контента, до малого и
                      среднего бизнса.
                    </v-card-text>
                    <!--Back slot ends-->
                  </FlipCard>
                </v-col>
                <v-col
                  sm="12"
                  md="6"
                  lg="4"
                  style="display: flex; justify-content: center;"
                >
                  <FlipCard>
                    <!--Front slot begins-->
                    <template v-slot:header>Интернет-магазин.</template>
                    <!--Front slot ends-->
                    <!--Back slot begins-->
                    <v-card-title
                      style="word-break: normal;"
                      class="headline font-weight-bold"
                    >
                      Интернет-магазин.
                    </v-card-title>
                    <v-card-subtitle style="margin-top: -10px">
                      От 25.000&#8381;
                    </v-card-subtitle>
                    <v-card-text>
                      &nbsp;Сайт, предназначенный для того, чтобы предоставить
                      полную информацию клиентам о товарах в Вашем магазине.
                      <br />
                      &nbsp;Способствует увеличению продаж и простоте
                      коммуникации с потребителем.
                    </v-card-text>
                    <!--Back slot ends-->
                  </FlipCard>
                </v-col>
                <v-col
                  sm="12"
                  md="6"
                  lg="4"
                  style="display: flex; justify-content: center;"
                >
                  <FlipCard>
                    <!--Front slot begins-->
                    <template v-slot:header>Лендинг.</template>
                    <!--Front slot ends-->
                    <!--Back slot begins-->
                    <v-card-title
                      style="word-break: normal;"
                      class="headline font-weight-bold"
                    >
                      Лендинг.
                    </v-card-title>
                    <v-card-subtitle style="margin-top: -10px">
                      От 5.000&#8381;
                    </v-card-subtitle>
                    <v-card-text>
                      &nbsp;Простой одностраничник, направленный на привлечение
                      клиентов на основной сайт компании.
                    </v-card-text>
                    <!--Back slot ends-->
                  </FlipCard>
                </v-col>
                <v-col
                  sm="12"
                  md="6"
                  lg="4"
                  style="display: flex; justify-content: center;"
                >
                  <FlipCard>
                    <!--Front slot begins-->
                    <template v-slot:header>Корпоративный сайт.</template>
                    <!--Front slot ends-->
                    <!--Back slot begins-->
                    <v-card-title
                      style="word-break: normal;"
                      class="headline font-weight-bold"
                    >
                      Корпоративный сайт.
                    </v-card-title>
                    <v-card-subtitle style="margin-top: -10px">
                      От 20.000&#8381;
                    </v-card-subtitle>
                    <v-card-text>
                      &nbsp;Идеальный вариант для амбициозных или уже крупных
                      компаний. На сайте будет всё для успешного бизнеса.
                      <br />
                      &nbsp;Привлечёт клиента к товару компании любого рода
                      деятельности.
                    </v-card-text>
                    <!--Back slot ends-->
                  </FlipCard>
                </v-col>
                <v-col
                  sm="12"
                  md="6"
                  lg="4"
                  style="display: flex; justify-content: center;"
                >
                  <FlipCard>
                    <!--Front slot begins-->
                    <template v-slot:header>Сайт-визитка.</template>
                    <!--Front slot ends-->
                    <!--Back slot begins-->
                    <v-card-title
                      style="word-break: normal;"
                      class="headline font-weight-bold"
                    >
                      Сайт-визитка.
                    </v-card-title>
                    <v-card-subtitle style="margin-top: -10px">
                      От 10.000&#8381;
                    </v-card-subtitle>
                    <v-card-text>
                      &nbsp;Информационная страница, дающая полное представление
                      о вашей деятельности.
                    </v-card-text>
                    <!--Back slot ends-->
                  </FlipCard>
                </v-col>
                <v-col
                  sm="12"
                  md="6"
                  lg="4"
                  style="display: flex; justify-content: center;"
                >
                  <FlipCard>
                    <!--Front slot begins-->
                    <template v-slot:header>
                      "Индивидуальная концепция"
                    </template>
                    <!--Front slot ends-->
                    <!--Back slot begins-->
                    <v-card-title
                      style="word-break: normal;"
                      class="headline font-weight-bold"
                    >
                      "Индивидуальная концепция"
                    </v-card-title>
                    <v-card-subtitle style="margin-top: -10px">
                      От "Обязательно догоримся"&#8381;
                    </v-card-subtitle>
                    <v-card-text>
                      *Место для Вашего текста*
                    </v-card-text>
                    <!--Back slot ends-->
                  </FlipCard>
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
              style="word-break: normal;"
              :class="[
                $breakpoint.mdAndUp
                  ? 'display-1 font-weight-medium'
                  : 'headline font-weight-medium'
              ]"
            >
              Благодаря анализу ситуации на рынке в Вашей нише и отслеживанию
              трендов, клиент получает уникальный продукт. Никакого шаблонного
              дизайна и никаких длинных скучных текстов. Только красиво и по
              делу.
              <br />
              Мы яв­ля­ем­ся од­ной из не­мно­гих сту­дий, ко­то­рые мо­гут
              до­вес­ти идею до про­дук­та. От эс­ки­за на сал­фет­ке до
              го­то­во­го про­ек­та. У вас есть от­лич­ная идея о но­вом
              про­дук­те, и ни­кто не го­тов за неё взять­ся?
              <br />
              <span style="color: #720000">
                Мы ваш вы­бор.
              </span>
            </v-card-title>
          </v-card>
        </div>
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
import TxtPic from '../components/TxtPic.vue'
import FlipCard from '../components/FlipCard.vue'
import scroll from '../components/scroll.vue'

export default {
  name: 'Home',
  components: {
    TxtPic,
    FlipCard,
    scroll
  },
  head() {
    return {
      title: 'Главная'
    }
  }
}
</script>
