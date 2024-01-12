import * as bannerBottom from "./bannerBottom";
import * as bannerTop from "./bannerTop";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observerCallback: IntersectionObserverCallback = ([bannerTopEntry]) => {
  if (bannerTopEntry.isIntersecting) {
    bannerBottom.hide();
  }
  if (!bannerTopEntry.isIntersecting) {
    bannerBottom.show();
  }
};

if (!bannerBottom.isClosed()) {
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(bannerTop.element);
  bannerBottom.addOnCloseListener(() => observer.disconnect());
}
