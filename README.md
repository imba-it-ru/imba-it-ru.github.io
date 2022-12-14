# ИМБА ИТ
Российский системный интегратор полного цикла  

## Запуск

Для того, чтобы запустить проект, необходимо в консоли в папке проекта ввести команду npm i.  

В этот момент подгрузятся все зависимости, необходимые для работы приложения. 

Далее, когда загрузка будет завершена, введите команду gulp. 

Эта команда из исходников соберет необходимые стили и скрипты. 

## Расположение файлов
Все исходники расположены в папке src
В этой папке расположены подпапки

* pug 
* scss
* js

Каждой подпапке соответствует своя технология. Pug является исходником для html, scss — для css. 

Pug с помощью gulp преобразуется в файлы html, которые располагаются в корне проекта.

Scss преобразуется в файлы css, которые располагаются в папке assets в подпапке css.

Js собирается с помощью webpack. Файлы располагаются в папке assets в подпапке js

## Структура файлов
Не зависимо от технологии, в проекте соблюдается разделение файлов по следующему принципу. 

В папке «технологии» находятся подпапки 
* pages
* sections

В некоторых технологиях так же есть подпапки utils, parts, some

### pages
Исходная папка для gulp. 
Все файлы, которые располагаются в этой папке с помощью gulp преобразуются в конечный файл, загружаемый на странице.  Поэтому добавлять новые файлы в эту папку крайне не рекомендуется. 
В этих файлах происходит импортирование файлов, необходимых для каждой страницы. Импортирование происходит из файлов подпапки sections. 

### sections 
Основная папка, в которой находится код. В ней располагаются подпапки для каждой страницы. При открытии подпапки можно увидеть файлы, которые относятся к данной странице. Чаще всего разделение происходит по секциям, однако, в случае с js, разделение носит скорее функциональный характер. Помимо этого можно увидеть отдельные файлы для шапки (header) и подвала (footer)

### utils, parts, some 
Помимо этого в подпапке js есть папка utils. Там хранятся вспомогательные модули-хелперы, которые необходимы на разных страницах сайта. 

В подпапке pug находится папка parts. Там хранятся части верстки, которые встречаются чаще одного раза. Папка parts подпапки scss содержит в себе стилизацию этих частей верстки. 

Папка some подпапки scss формирует "стайл кит" проекта. Там хранится информация по всем однотипным частям проекта. Шрифты, кнопки, медиа запросы, контейнеры, константы, удаление дефолтных стилей браузера и тд.
