$(function () {
  var range = $("#range1")[0];
  var percent = ((range.value - range.min) / (range.max - range.min)) * 5;
  var percentshow = Math.round(
    ((range.value - range.min) / (range.max - range.min)) * 100
  );
  if (percent < 5) {
    $(".progress1 .circle").attr("style", "animation-delay:-" + percent + "s");
  } else {
    $(".progress1 .circle").attr("style", "animation-delay:5s");
  }
  $(".progress1 .precent").text(percentshow + "");
  $(document).on("input", "#range1", function () {
    var percent = ((this.value - this.min) / (this.max - this.min)) * 5;
    var percentshow = Math.round(
      ((this.value - this.min) / (this.max - this.min)) * 100
    );
    if (percent < 5) {
      $(".progress1 .circle").attr("style", "animation-delay:-" + percent + "s");
    } else {
      $(".progress1 .circle").attr("style", "animation-delay:5s");
    }
    $(".progress1 .precent").text(percentshow + "");
  });
});
