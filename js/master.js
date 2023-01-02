$(() => {
  $(".shower_hider").on("click", (e) => {
    e.preventDefault();
  });

  $(".shower_hider").on("mouseenter", (e) => {
    $(".hidden-menu").addClass("visible");
  });
  $(".hidden-menu").on("mouseleave", (e) => {
    $(".hidden-menu").removeClass("visible");
  });
  $(window).on("scroll", (e) => {
    $(".hidden-menu").removeClass("visible");
  });
});
