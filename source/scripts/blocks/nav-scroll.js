const TABLET_WIDTH = 900;

const navScroll = () => {

  const header = document.querySelector('.header__wrap');
  const coverBlock = document.querySelector('.cover');
  const referenceBlock = document.querySelector('.reference');
  const navButtonSvg = document.querySelector('.ham');

  const headerHeight = window.getComputedStyle(header).height.replace(/\D+/, '');
  let coverHeight = window.getComputedStyle(coverBlock).height.replace(/\D+/, '');
  const referenceHeight = +window.getComputedStyle(referenceBlock).height.replace(/\D+/, '');
  let navButton = false;

  //check scroll top (px) to current block
  const offset = (el) => {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const result = rect.top + scrollTop
    return result
  }

  let referenceOffsetTop = +offset(referenceBlock);
  console.log(offset(referenceBlock) + referenceHeight)

  const onScrollCheck = () => {

    if ((window.scrollY > coverHeight - (headerHeight / 2)) && (window.scrollY < (referenceOffsetTop + (headerHeight / 2))) || (window.scrollY > (referenceOffsetTop + referenceHeight))) {
      header.classList.add('header__wrap--scroll');
      if(navButton) {
        navButtonSvg.classList.add('ham--black');
      }
    } else {
        header.classList.remove('header__wrap--scroll');
        if(navButton) {
          navButtonSvg.classList.remove('ham--black');
        }
    }
  }

  if(window.getComputedStyle(header).width.replace(/\D+/, '') < TABLET_WIDTH) {
    navButton = true;
    onScrollCheck();
  }

  const onHeightCheck = () => {
    coverHeight = window.getComputedStyle(coverBlock).height.replace(/\D+/, '');
    onScrollCheck();
  };

  window.addEventListener('scroll', onScrollCheck);
  window.addEventListener('resize', onHeightCheck);

}

export {navScroll}
