/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({}).use(Vue3Lottie);

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FirstSection from './components/sections/FirstSection.vue'
import SecondSection from './components/sections/SecondSection.vue'
import ThirdSection from './components/sections/ThirdSection.vue'
import FourthSection from './components/sections/FourthSection.vue'
import FifthSection from './components/sections/FifthSection.vue'
import SixthSection from './components/sections/SixthSection.vue'
import SeventhSection from './components/sections/SeventhSection.vue'
import EighthSection from './components/sections/EighthSection.vue'
import Datenschutz from './components/pages/Datenschutz.vue'
import Impressum from './components/pages/Impressum.vue'
app.component('app-header', Header);
app.component('app-footer',Footer)
app.component('first-section',FirstSection)
app.component('second-section',SecondSection)
app.component('third-section',ThirdSection)
app.component('fourth-section',FourthSection)
app.component('fifth-section',FifthSection)
app.component('sixth-section',SixthSection)
app.component('seventh-section',SeventhSection)
app.component('eighth-section',EighthSection)

app.component('app-datenschutz',Datenschutz)
app.component('app-impressum',Impressum)






/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
