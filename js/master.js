$(() => {
  $(".shower_hider").on("mouseover", () => {
    $(".hidden-menu").css("display", "block");
  });

  $(".hidden-menu").on("mouseout", () => {
    $(".hidden-menu").css("display", "none");
  });
});
