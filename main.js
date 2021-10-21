const itemScroll = () => {
  let $win = $(window);

  function testScroll() {
    if ($win.scrollTop() > 66.67) {
      $win.off("scroll", testScroll);
      $(".newsletter-cont").fadeIn(2000);
    }
  }
  $win.scroll(testScroll);
};

const timeoutNews = () => {
  let hours = 0.167
  let now = new Date().getTime();
  let setNews = localStorage.getItem("setNews");
  let newscont =$("#newsletter-bar")
  newscont.animate({bottom: '-100%' }, "slow");

  if (setNews == null) {
    localStorage.setItem("setNews", now);
  } else {
    if (now - setNews > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setNews", now);
    }
  }
};

const itemLocal = () => {
let newscont =$("#newsletter-bar")
 if (localStorage.getItem("setNews")) {
    newscont.hide()
 }
}

$( document ).ready(function() {
    itemScroll(); 
    itemLocal()
});
