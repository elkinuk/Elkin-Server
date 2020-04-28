import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./Consolas/stylesheet.css";
import "./HelveticaNeue/stylesheet.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAstronaut,
  faEnvelope as faEnvelopeSolid,
  faGamepad
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAngular,
  faVuejs,
  faJsSquare,
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(
  faUserAstronaut,
  faReact,
  faAngular,
  faVuejs,
  faJsSquare,
  faEnvelope,
  faEnvelopeSolid,
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
  faCodepen,
  faGamepad
);

Vue.component("fa-icon", FontAwesomeIcon);
