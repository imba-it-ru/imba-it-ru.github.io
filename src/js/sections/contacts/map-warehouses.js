export function createMapWarehouses() {
  // console.log(ymaps);
  ymaps.ready(function () {
    const mapWarehouses = new ymaps.Map(
      "mapWarehouses",
      {
        center: [55.570397, 37.475477],
        zoom: 9,
        controls: [],
      },
      {
        // searchControlProvider: 'yandex#search'
      }
    );
    const placemarkWarehouses = new ymaps.Placemark(
      [55.446332, 37.260270],
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader:
          '<div class="balloon-content">' +
          '<h3 class="h3 balloon-title">Склад ООО «ИЛС»</h3> ' +
          '<div class="text balloon-text">' +
          "<p>МО, Подольский район, Краснопахорское с/п, л-во Малинское, квартал 56</p>" +
          "</div> " +
          "</div>",
        // Зададим содержимое основной части балуна.
        balloonContentBody: "",
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: "",
        // Зададим содержимое всплывающей подсказки.
        hintContent: "Склад ООО «ИЛС»",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./images/marker_object.svg",
        // Размеры метки.
        iconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -25],
      }
    );

    const placemarkWarehouses_2 = new ymaps.Placemark(
      [55.666944, 37.705104],
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader:
          '<div class="balloon-content">' +
          '<h3 class="h3 balloon-title">Склад ООО «Деловая Лига»</h3> ' +
          '<div class="text balloon-text">' +
          "<p>г. Москва, ул. Шоссейная 90с57</p>" +
          "</div> " +
          "</div>",
        // Зададим содержимое основной части балуна.
        balloonContentBody: "",
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: "",
        // Зададим содержимое всплывающей подсказки.
        hintContent: "Склад ООО «Деловая Лига»",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./images/marker_object.svg",
        // Размеры метки.
        iconImageSize: [52, 74],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-26, -57],
      }
    );

    //отключаем зум колёсиком мышки
    mapWarehouses.behaviors.disable("scrollZoom");

    //на мобильных устройствах... (проверяем по userAgent браузера)
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      //... отключаем перетаскивание карты
      mapWarehouses.behaviors.disable("drag");
    }
    mapWarehouses.geoObjects.add(placemarkWarehouses).add(placemarkWarehouses_2);
  });
}
