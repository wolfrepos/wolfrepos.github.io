const categories = [
  { value: "other", text: "Прочее" },
  { value: "supermarket", text: "Супермаркеты" },
  { value: "restaurant", text: "Рестораны" },
  { value: "coffee", text: "Кофе" },
  { value: "parents", text: "Родители" },
  { value: "travel", text: "Путешествия" },
  { value: "car", text: "Автомобиль" },
  { value: "beauty", text: "Красота" },
  { value: "sport", text: "Спорт" },
  { value: "clothes", text: "Одежда" },
  { value: "education", text: "Образование" },
  { value: "apartment", text: "Квартира" },
  { value: "hcs", text: "ЖКХ" },
  { value: "gifts", text: "Подарки" },
  { value: "diapers", text: "Подгузники" },
  { value: "transport", text: "Транспорт" },
  { value: "communication", text: "Связь" },
  { value: "hobby", text: "Хобби" },
  { value: "appliances", text: "Техника" },
];

$(document).ready(function () {
  $.each(categories, function (key, obj) {
    $("#category").append(`<option value="${obj.value}">${obj.text}</option>`);
  });
});
