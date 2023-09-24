const categories = [
  { text: "Прочее", value: "other" },
  { text: "Автомобиль", value: "car" },
  { text: "ЖКХ", value: "hcs" },
  { text: "Квартира", value: "apartment" },
  { text: "Красота", value: "beauty" },
  { text: "Образование", value: "education" },
  { text: "Одежда", value: "clothes" },
  { text: "Подарки", value: "gifts" },
  { text: "Путешествия", value: "travel" },
  { text: "Рестораны", value: "restaurant" },
  { text: "Благотворительность", value: "charity" },
  { text: "Связь", value: "communication" },
  { text: "Спорт", value: "sport" },
  { text: "Супермаркеты", value: "supermarket" },
  { text: "Техника", value: "appliances" },
  { text: "Транспорт", value: "transport" },
  { text: "Хобби", value: "hobby" },
  { text: "Развлечения", value: "entertainment" },
  { text: "Аптеки", value: "pharmacies" },
  { text: "Медицина", value: "medicine" },
];

const months = [
  { text: "Январь", value: "1" },
  { text: "Февраль", value: "2" },
  { text: "Март", value: "3" },
  { text: "Апрель", value: "4" },
  { text: "Май", value: "5" },
  { text: "Июнь", value: "6" },
  { text: "Июль", value: "7" },
  { text: "Август", value: "8" },
  { text: "Сентябрь", value: "9" },
  { text: "Октябрь", value: "10" },
  { text: "Ноябрь", value: "11" },
  { text: "Декабрь", value: "12" },
];

$(document).ready(function () {
  $.each(categories, function (key, obj) {
    $("#category").append(`<option value="${obj.value}">${obj.text}</option>`);
  });
  $.each(months, function (key, obj) {
    $("#month").append(`<option value="${obj.value}">${obj.text}</option>`);
  });
  if (window.Telegram.WebApp.colorScheme === "dark") {
    $(":root")
      .css('--border-color-2', '#666')
      .css('--border-color', '#222')
      .css('--bg-color', '#444')
      .css('--bg-color-2', '#666')
      .css('--fg-color', '#eee');
  } else {
    $(":root")
      .css('--border-color-2', '#aaa')
      .css('--border-color', '#ccc')
      .css('--bg-color', '#eee')
      .css('--bg-color-2', '#fff')
      .css('--fg-color', '#222');
  }
});

$(".button-group").on("click", ".button", function () {
  $(this)
    .addClass("button-pressed")
    .siblings()
    .removeClass("button-pressed")
    .addClass("button-default");
});
