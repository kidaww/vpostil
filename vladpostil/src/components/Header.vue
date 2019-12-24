<template>
  <div class="header">
    <div class="header__content content">
      <div class="content__section">
        <p class="header__title">Постельное белье</p>
        <p class="header__subtitle">Лучшее качество</p>
        <p class="header__undertitle">Цены от производителя</p>
      </div>
      <div class="content__section content__sail">
      </div>
    </div>

    <div class="header__snow" id="snow"></div>
    
    <div class="header__footer footer">
      <svg class="footer__svg" style="height: 4vw; fill: #212121;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 200" preserveAspectRatio="none">
        <path d="M640 195.5L0 0v200h1280V0"></path> 
      </svg>
      <div class="footer__main">
        <p>Лучшее постельне белье в Харькове</p>
      </div>
    </div>
  </div>
</template>

<script>
import Particle from 'particles.js';

export default {
  computed: {
    getHeight() {
      return window.innerHeight;
    }
  },
  mounted() {
    particlesJS("snow", {
      "particles": {
        "number": {
          "value": 400,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "image",
          "stroke": {
            "width": 3,
            "color": "#fff"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.7,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 20,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 50,
          "color": "#ffffff",
          "opacity": 0.6,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "bottom",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 300,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode":  "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 150,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 20,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.2
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 100vh;

  background-image: url("../assets/back.jpg");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  // Shadow
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
  }

  &__content,
  &__snow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__snow {
    opacity: 0.5;
  }

  &__content {
    color: snow;
  }

  &__title {
    font-size: 72px;
    background: #212121;
  }
  &__subtitle {
    font-size: 48px;
  }
  &__undertitle {
    font-size: 36px;
    background: #ffffff;
    color: #212121;
  }

  &__sail {
    background: snow;
    color: #ff5500;
    font-weight: bold;
  }

}

.content {
  display: flex;
  &__section {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    & * {
      text-transform: uppercase;
      margin: 0;
      padding: 0 20px;
    }
  }
  &__sail {
    align-items: flex-end;
  }
}

.footer {
  &__svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(-60px);
  }
  &__main {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    background: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: snow;
      text-align: center;
      font-size: 19px;
      line-height: 1;
      margin: 0;
    }
  }
}
</style>