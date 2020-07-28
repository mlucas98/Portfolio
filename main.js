const menu = $('.navbar');
const anchors = $('.smooth');
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Cambio de "active"
const menuHeight = menu.outerHeight() + 15;
// Items que se corresponden con los href
let scrollItems = anchors.map(function() {
    var item = $($(this).attr('href'));
    if (item.length) { return item; }
});

// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + menuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    anchors
        .parent().removeClass('active')
        .end().filter("[href='#" + id + "']").parent().addClass('active');
});