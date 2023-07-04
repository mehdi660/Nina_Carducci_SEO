$(document).ready(function () {
  var e = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 };
  $(".gallery").mauGallery({
    columns: e,
    lightBox: !0,
    lightboxId: "myAwesomeLightbox",
    showTags: !0,
    tagsPosition: "top",
  });
});
