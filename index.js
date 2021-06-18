const setBodyPaddingTop = () => {
  console.log("DOMContentLoaded");

  const documentHeader = document.querySelector("header");

  const headerMainHeight = parseFloat(getComputedStyle(documentHeader).height);

  console.log(headerMainHeight);

  document.body.style.paddingTop = `${headerMainHeight}px`;

  console.log(document.body.style.paddingTop);

  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener("load", setBodyPaddingTop);
