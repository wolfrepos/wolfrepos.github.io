const categories = [
  "Аптеки",
  "ЖКХ",
  "Образование",
  "Одежда",
  "Подписки",
  "Развлечения",
  "Супермаркеты",
  "Транспорт",

  // Должно быть последним
  "Ввести свою категорию",
];

const incomeCategories = [
  "Зарплата",
  "Кэшбек",
  "Депозит",

  // Должно быть последним
  "Ввести свою категорию",
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
