const categories = [
  { text: "Прочее", value: "other" },
  { text: "Автомобиль", value: "car" },
  { text: "ЖКХ", value: "hcs" },
  { text: "Квартира", value: "apartment" },
  { text: "Кофе", value: "coffee" },
  { text: "Красота", value: "beauty" },
  { text: "Образование", value: "education" },
  { text: "Одежда", value: "clothes" },
  { text: "Подарки", value: "gifts" },
  { text: "Подгузники", value: "diapers" },
  { text: "Путешествия", value: "travel" },
  { text: "Рестораны", value: "restaurant" },
  { text: "Родители", value: "parents" },
  { text: "Связь", value: "communication" },
  { text: "Спорт", value: "sport" },
  { text: "Супермаркеты", value: "supermarket" },
  { text: "Техника", value: "appliances" },
  { text: "Транспорт", value: "transport" },
  { text: "Хобби", value: "hobby" },
];

$(document).ready(function () {
  $.each(categories, function (key, obj) {
    $("#category").append(`<option value="${obj.value}">${obj.text}</option>`);
  });
});
