$(function () {
  var range = $("#range")[0];
  var percent = ((range.value - range.min) / (range.max - range.min)) * 5;
  var percentshow = Math.round(
    ((range.value - range.min) / (range.max - range.min)) * 100
  );
  if (percent < 5) {
    $(".progress .circle").attr("style", "animation-delay:-" + percent + "s");
  } else {
    $(".progress .circle").attr("style", "animation-delay:5s");
  }
  $(".progress .precent").text(percentshow + "");
  $(document).on("input", "#range", function () {
    var percent = ((this.value - this.min) / (this.max - this.min)) * 5;
    var percentshow = Math.round(
      ((this.value - this.min) / (this.max - this.min)) * 100
    );
    if (percent < 5) {
      $(".progress .circle").attr("style", "animation-delay:-" + percent + "s");
    } else {
      $(".progress .circle").attr("style", "animation-delay:5s");
    }
    $(".progress .precent").text(percentshow + "");
  });
});
