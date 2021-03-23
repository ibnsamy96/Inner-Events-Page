const setBodyPaddingTop = () => {

    console.log('DOMContentLoaded');

    const documentHeader = document.querySelector('header')

    const headerMainHeight = parseFloat(getComputedStyle(documentHeader).height)
    const headerPaddingTop = parseFloat(getComputedStyle(documentHeader).paddingTop)
    const headerPaddingBottom = parseFloat(getComputedStyle(documentHeader).paddingBottom)
    const headerMarginTop = parseFloat(getComputedStyle(documentHeader).marginTop)
    const headerMarginBottom = parseFloat(getComputedStyle(documentHeader).marginBottom)

    const headerFullHeight = headerMainHeight + headerPaddingTop + headerPaddingBottom + headerMarginTop + headerMarginBottom

    console.log(headerFullHeight);

    document.body.style.paddingTop = `${headerFullHeight}px`

    console.log(document.body.style.paddingTop);

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

// const minimizeHeader = () => {
//     console.log('scroll');
//     document.body.style.transition = "padding-top 500ms"

//     const pageLogo = document.querySelector('#pageLogo')
//     const pageTitle = document.querySelector('#pageTitle')
//     const pageTagline = document.querySelector('#pageTagline')

//     pageLogo.style.width = '80px'

//     pageTitle.style.fontSize = '22px'

//     pageTagline.style.opacity = 0
//     pageTagline.style.fontSize = 0

//     setTimeout(setBodyPaddingTop, 501)
// }

window.addEventListener('load', setBodyPaddingTop)


// window.addEventListener('load', () => {
//     console.log('load');
//     setTimeout(() => {
//         document.addEventListener('scroll', minimizeHeader, {
//             once: true
//         })
//     }, 100)
// })