"use strict";
//________________________________________________

//check Webp compatibility

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//script for no reload page when press empty links or etc.

document.addEventListener("click", (noReload) => {
    const link = noReload.target.closest('a');
    if (noReload.target.matches('a')) {
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        }
    }
    if (noReload.target.matches('img')) {
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        }
    }
    if (noReload.target.matches('picture')) {
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        }
    }
});

//script for side bar and animation for it

const menuBtn = document.querySelector('.menu__button');
const closeBtn = document.querySelector('.close__button');
const sideMenu = document.querySelector('.side__menu');
const body = document.body;
const anim = [document.querySelector('.first-line'), document.querySelector('.mid-line'), document.querySelector('.last-line')];

menuBtn.addEventListener("click", function() {
    body.classList.toggle("noscroll");
    anim[0].classList.add("first-line--close");
    anim[1].classList.add("mid-line--close");
    anim[2].classList.add("last-line--close");
    menuBtn.classList.add("menu__button--opend");
    closeBtn.classList.add("close__button--opend");
    sideMenu.classList.add("side__menu--opend");
});

closeBtn.addEventListener("click", function() {
    body.classList.toggle("noscroll");
    anim[0].classList.remove("first-line--close");
    anim[1].classList.remove("mid-line--close");
    anim[2].classList.remove("last-line--close");
    menuBtn.classList.remove("menu__button--opend");
    closeBtn.classList.remove("close__button--opend");
    sideMenu.classList.remove("side__menu--opend");
});

// ITC Slider

import { ItcSlider } from "./modules/itc-slider.js";

ItcSlider.createInstances();

// Footer-menu

const linksBtn = document.querySelector('.footer__menu-links-button');
const contactsBtn = document.querySelector('.footer__menu-contact-button');
const socialBtn = document.querySelector('.footer__menu-social-button');
const paymentBtn = document.querySelector('.footer__menu-payment-button');
const linksMenu = document.querySelector('.footer-links-menu');
const socialMenu = document.querySelector('.footer-social-menu');
const contactsMenu = document.querySelector('.footer-contacts-menu');
const paymentMenu = document.querySelector('.footer-payment-menu');

linksBtn.addEventListener("click", function() {
    linksMenu.classList.toggle('footer-links-menu--opend');
    linksBtn.classList.toggle('footer__menu-links-button--active');
    socialMenu.classList.remove('footer-social-menu--opend');
    contactsMenu.classList.remove('footer-contacts-menu--opend');
    paymentMenu.classList.remove('footer-payment-menu--opend');
});

socialBtn.addEventListener("click", function() {
    socialMenu.classList.toggle('footer-social-menu--opend');
    socialBtn.classList.toggle('footer__menu-social-button--active');
    paymentMenu.classList.remove('footer-payment-menu--opend');
    contactsMenu.classList.remove('footer-contacts-menu--opend');
    linksMenu.classList.remove('footer-links-menu--opend');
});

contactsBtn.addEventListener("click", function() {
    contactsMenu.classList.toggle('footer-contacts-menu--opend');
    contactsBtn.classList.toggle('footer__menu-contact-button--active');
    linksMenu.classList.remove('footer-links-menu--opend');
    paymentMenu.classList.remove('footer-payment-menu--opend');
    socialMenu.classList.remove('footer-social-menu--opend');
});

paymentBtn.addEventListener("click", function() {
    paymentMenu.classList.toggle('footer-payment-menu--opend');
    paymentBtn.classList.toggle('footer__menu-payment-button--active');
    contactsMenu.classList.remove('footer-contacts-menu--opend');
    linksMenu.classList.remove('footer-links-menu--opend');
    socialMenu.classList.remove('footer-social-menu--opend');
});

// VideoBtn

const allVidBtn = document.querySelectorAll('[id^="vidBtn_"]');

allVidBtn.forEach((btn)=> {
    btn.addEventListener('click', function() {
        const videoNum = this.id.split("_")[1];
        const video = document.getElementById(`vid_${videoNum}`);
        if (video.paused) {
            video.play();
            btn.classList.add('video__play--playing');
        }
        else {
            video.pause();
            btn.classList.remove('video__play--playing');
    }})
});

//Gallery 

const gallery = document.querySelectorAll('[id^="gal_"]');
gallery.forEach(pic => {
    pic.addEventListener('click', () => {
    pic.classList.toggle('social__link--opend');
    body.classList.toggle("noscroll");
    });
});

//Modal-windows

const popupBody = document.getElementById('popup-body');
const popup1 = [document.getElementById('popup1'), document.getElementById('popup1-close'), document.getElementById('popup1-open'), document.getElementById('popup1-side-open'), document.getElementById('popup1-side-open-dub'), document.getElementById('popup1-head-open')];
const popup2 = [document.getElementById('popup2'), document.getElementById('popup2-close'), document.getElementById('popup2-open'), document.getElementById('popup2-side-open')];

popup1[1].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup1[0].classList.toggle('popup__body--opend');
});

popup1[2].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup1[0].classList.toggle('popup__body--opend');
});

popup1[3].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup1[0].classList.toggle('popup__body--opend');
});

popup1[4].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup1[0].classList.toggle('popup__body--opend');
});

popup1[5].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup1[0].classList.toggle('popup__body--opend');
});

popup2[1].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup2[0].classList.toggle('popup__body--opend');
});

popup2[2].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup2[0].classList.toggle('popup__body--opend');
});

popup2[3].addEventListener('click', function() {
    popupBody.classList.toggle('popup--opend');
    popup2[0].classList.toggle('popup__body--opend');
});
