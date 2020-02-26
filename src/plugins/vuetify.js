import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: "#ee5555",
                secondary: "#04BBF8",
                accent: "#979797",

            },
            dark: {
                primary: "#ee5555",
                secondary: "#4f5d72",
                accent: "#979797"


            }
        }
    }
});
