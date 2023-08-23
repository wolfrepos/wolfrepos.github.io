const brands = [
  { value: "any", text: "Любой бренд" },
  { value: "audi", text: "Audi" },
  { value: "bmw", text: "BMW" },
  { value: "chevrolet", text: "Chevrolet" },
  { value: "daewoo", text: "Daewoo" },
  { value: "ford", text: "Ford" },
  { value: "honda", text: "Honda" },
  { value: "hyndai", text: "Hyundai" },
  { value: "kia", text: "Kia" },
  { value: "lexus", text: "Lexus" },
  { value: "mazda", text: "Mazda" },
  { value: "mers", text: "Mercedes-Benz" },
  { value: "mitsubishi", text: "Mitsubishi" },
  { value: "nissan", text: "Nissan" },
  { value: "opel", text: "Opel" },
  { value: "renault", text: "Renault" },
  { value: "subaru", text: "Subaru" },
  { value: "toyota", text: "Toyota" },
  { value: "volkswagen", text: "Volkswagen" },
];
const models = {
  audi: [
    { value: "80", text: "80" },
    { value: "90", text: "90" },
    { value: "100", text: "100" },
    { value: "a3", text: "A3" },
    { value: "a4", text: "A4" },
    { value: "a5", text: "A5" },
    { value: "a6", text: "A6" },
    { value: "a7", text: "A7" },
    { value: "a8", text: "A8" },
    { value: "q3", text: "Q3" },
    { value: "q5", text: "Q5" },
    { value: "q7", text: "Q7" },
    { value: "s4", text: "S4" },
    { value: "tt", text: "TT" },
  ],
  bmw: [
    { value: "3", text: "3 серии" },
    { value: "5", text: "5 серии" },
    { value: "7", text: "7 серии" },
    { value: "x5", text: "X5" },
    { value: "x6", text: "X6" },
  ],
  kia: [
    { value: "carnival", text: "Carnival" },
    { value: "ceed", text: "Ceed" },
    { value: "cerato", text: "Cerato" },
    { value: "k5", text: "K5" },
    { value: "k7", text: "K7" },
    { value: "magentis", text: "Magentis" },
    { value: "rio", text: "Rio" },
    { value: "sorento", text: "Sorento" },
    { value: "sportage", text: "Sportage" },
  ],
};

$(document).ready(function () {
  $.each(brands, function (key, obj) {
    $("#brand").append(`<option value="${obj.value}">${obj.text}</option>`);
  });
  $("#brand").on("change", function () {
    const brand = this.value;
    if (brand in models) {
      $("#model")
        .empty()
        .attr("disabled", false)
        .append(`<option value="any">Любая модель</option>`);
      $.each(models[brand], function (key, obj) {
        $("#model").append(`<option value="${obj.value}">${obj.text}</option>`);
      });
    } else {
      $("#model")
        .empty()
        .attr("disabled", true)
        .append(`<option value="any">Любая модель</option>`);
    }
  });
  $("#model")
    .empty()
    .attr("disabled", true)
    .append(`<option value="any">Любая модель</option>`);
  $("#year").append(`<option value="any">Любой год</option>`);
  for (var i = 2023; i >= 1980; --i)
    $("#year").append(`<option value="${i}">${i}</option>`);
});

$(".button-group").on("click", ".button", function () {
  $(this)
    .addClass("button-pressed")
    .siblings()
    .removeClass("button-pressed")
    .addClass("button-default");
});
