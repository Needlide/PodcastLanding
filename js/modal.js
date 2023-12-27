document.write(`
<div id="modalContainer" class="modal modal-container">
<div id="closeModal" class="close-wrapper">
<p class="close-modal">X</p>
</div>
<div class="modal__header-wrapper">
        <svg class="modal__header-svg">
            <use xlink:href="./icons/icons.svg#icon-scribble"/>
        </svg>
        <h1 class="modal__header-heading">Get in touch</h1>
        <p class="modal__header-text">Send your message to us</p>
    </div>
    <form id="modalForm" class="modal__content">
        <svg class="modal__svg modal-right_svg">
            <use xlink:href="./icons/icons.svg#icon-stars-hero"/>
        </svg>
        <div class="modal-content__flex-container">
            <div class="modal__item">
                <label class="modal__label" for="name">Full name<span class="modal-label__span">*</span></label>
                <input class="modal__input" type="text" id="name" placeholder="John Doe"/>
            </div>
            <div class="modal__item">
                <label class="modal__label" for="email">Email<span class="modal-label__span">*</span></label>
                <input class="modal__input" type="email" id="email" placeholder="johndoe@example.com"/>
            </div>
            <div class="modal__item">
                <label class="modal__label" for="phone">Phone<span class="modal-label__span">*</span></label>
                <input class="modal__input" type="tel" id="phone" placeholder="Phone"/>
                </div>
            <div class="modal__item">
                <label class="modal__label" for="subject">Subject<span class="modal-label__span">*</span></label>
                <input class="modal__input" type="text" id="subject" placeholder="Subject..."/>
             </div>
        </div>
        <svg class="modal__svg modal-left_svg">
            <use xlink:href="./icons/icons.svg#icon-swirl2"/>
        </svg>
        <div class="modal__item modal__item-msg">
            <label class="modal__label" for="message">Message<span class="modal-label__span">*</span></label>
            <input class="modal__input modal__input-msg" type="text" id="message" placeholder="Your message goes here..."/>
        </div>
        <div class="modal__bottom">
            <p class="modal__text"><span class="modal-label__span">*</span>required</p>
            <div class="modal__button-wrapper">
                <input class="modal__button" type="button" value="SEND MESSAGE"/>
            </div>
            <div class="modal-bottom__link-wrapper">
                <p class="modal__text">Viverra at port accumsan. </p>
                <a class="modal__link" href="#">Orci non</a>
            </div>
        </div>
    </form>
</div>
`);