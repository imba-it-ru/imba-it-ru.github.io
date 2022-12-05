export function createMapOffice() {
  // console.log(ymaps);
  ymaps.ready(function () {
    const mapOffice = new ymaps.Map(
      "mapOffice",
      {
        center: [57.584237, 34.558035],
        zoom: 5,
        controls: [],
      },
      {
        // searchControlProvider: 'yandex#search'
      }
    );

    const placemark = new ymaps.Placemark(
      [55.655867, 37.555407],
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader:
          '<div class="balloon-content">' +
          '<h3 class="h3 balloon-title">Москва</h3> ' +
          '<div class="text balloon-text">' +
          "<p>117246, г. Москва, Научный проезд, 14А, стр. 1, БЦ SMART-PARK</p>" +
          "</div> " +
          "</div>",
        // Зададим содержимое основной части балуна.
        balloonContentBody: "",
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: "",
        // Зададим содержимое всплывающей подсказки.
        hintContent: "Москва",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./images/marker_office.svg",
        // Размеры метки.
        iconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -25],
      }
    );

    const placemark_2 = new ymaps.Placemark(
      [59.923419, 30.362895],
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader:
          '<div class="balloon-content">' +
          '<h3 class="h3 balloon-title">Санкт-Петербург</h3> ' +
          '<div class="text balloon-text">' +
          "<p>191040, г. Санкт-Петербург, Лиговский проспект, 50 к. 12, офис 23</p>" +
          "</div> " +
          "</div>",
        // Зададим содержимое основной части балуна.
        balloonContentBody: "",
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: "",
        // Зададим содержимое всплывающей подсказки.
        hintContent: "Санкт-Петербург",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./images/marker_office.svg",
        // Размеры метки.
        iconImageSize: [52, 74],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-26, -57],
      }
    );

    
    //на мобильных устройствах... (проверяем по userAgent браузера)
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      //... отключаем перетаскивание карты
      mapOffice.behaviors.disable("drag");
    }

    //отключаем зум колёсиком мышки
    mapOffice.behaviors.disable("scrollZoom");
    mapOffice.geoObjects.add(placemark).add(placemark_2);
    
  });
}