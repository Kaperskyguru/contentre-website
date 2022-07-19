<template>
  <main v-click-outside="onClickOutside" class="min-h-scree">
    <!-- ================Header================================ -->
    <header class="px-5 md:px-8">
      <!-- ------------Navbar-------------------- -->
      <nav class="flex justify-between relative fixed mt-4">
        <div v-click-outside="onClickOutside" class="flex items-center">
          <nuxt-link to="/">
            <div class="flex">
              <img
                src="~/assets/imgs/Logo-contentre.png"
                alt="Logo-contentre"
                class=""
              />
              <div class="text-[#102A27] font-bold text-xl">Contentre</div>
            </div>
          </nuxt-link>

          <div class="text-text-base hidden lg:block nav-menu ml-4">
            <ul class="flex text-[#888888]">
              <li class="ml-12">
                <nuxt-link class="text-base text-[#888888]" to="/writers"
                  >Why Contentre</nuxt-link
                >
              </li>
              <li class="ml-12">
                <nuxt-link class="text-base" to="/examples">Examples</nuxt-link>
              </li>
              <li class="ml-12">
                <nuxt-link class="text-base" to="/pricing">Pricing</nuxt-link>
              </li>
              <li class="ml-12">
                <nuxt-link class="text-base" to="/product">Product</nuxt-link>
              </li>

              <li class="ml-12">
                <button
                  class="text-base text-[#888888]"
                  @click.prevent="onToggleResources"
                >
                  Resources
                  <img
                    src="~/assets/imgs/arrow-down.png"
                    alt=""
                    class="inline-block ml-1 dropbtn"
                  />
                </button>
                <div
                  v-if="showResourceMenu"
                  id="myDropdown"
                  class="
                    dropdown-content
                    bg-white
                    absolute
                    overflow-auto
                    border-2 border-[#EFF1F1]
                    rounded-lg
                    shadow-[#EFF1F1]
                    pt-[12px]
                    pl-[2px]
                    pr-[12px]
                    z-20
                  "
                >
                  <a href="https://blog.contentre.io?source=home_header">
                    <div class="hover:bg-[#EFF1F1] rounded-md py-[12px] px-3">
                      <h6 class="text-base text-[#333333]">Blog</h6>
                    </div>
                  </a>

                  <div class="hover:bg-[#EFF1F1] rounded-md py-[12px] px-3">
                    <a href="https://blog.contentre.io?source=home_header"
                      ><h6 class="text-base text-[#333333]">Ebooks</h6></a
                    >
                  </div>

                  <div class="hover:bg-[#EFF1F1] rounded-md py-[12px] px-3">
                    <a href="https://blog.contentre.io?source=home_header"
                      ><h6 class="text-base text-[#333333]">Webinars</h6></a
                    >
                  </div>

                  <div class="hover:bg-[#EFF1F1] rounded-md py-[12px] px-3">
                    <nuxt-link to="/templates"
                      ><h6 class="text-base text-[#333333]">
                        Templates
                      </h6></nuxt-link
                    >
                  </div>

                  <div class="hover:bg-[#EFF1F1] rounded-md py-[12px] px-3">
                    <nuxt-link to="/examples"
                      ><h6 class="text-base text-[#333333]">
                        Example Portfolios
                      </h6></nuxt-link
                    >
                  </div>

                  <div class="hover:bg-[#EFF1F1] rounded-md py-[12px] px-3">
                    <a
                      href="https://blog.contentre.io/what-is-freelance-writing?source=home_header"
                      ><h6 class="text-base text-[#333333]">
                        Who is a technical writer?
                      </h6></a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- ===========Why Contentre Menu===================== -->

        <!-- ===========Why Contentre Menu===================== -->

        <!-- ===========Hamburger Icon===================== -->
        <div class="hamburger-box" @click.prevent="onToggleMenu">
          <button
            id="menu-btn"
            class="block hamburger lg:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        <!-- ===========Hamburger Icon===================== -->

        <!-- ===============Mobile Menu=================================== -->
        <div v-if="showMenu">
          <div
            id="menu"
            class="
              absolute
              flex flex-col
              items-center
              self-end
              py-8
              mt-10
              space-y-6
              font-bold
              bg-white
              sm:w-auto sm:self-center
              left-6
              right-6
              drop-shadow-md
              z-10
            "
          >
            <nuxt-link class="text-base text-[#888888]" to="/writers"
              >Why Contentre</nuxt-link
            >
            <nuxt-link to="/examples" class="text-base text-[#888888]"
              >Examples</nuxt-link
            >
            <nuxt-link to="/pricing" class="text-base text-[#888888]"
              >Pricing</nuxt-link
            >
            <nuxt-link to="/product" class="text-base text-[#888888]"
              >Product</nuxt-link
            >

            <a
              href="https://blog.contentre.io?source=home_resources"
              class="text-base text-[#888888]"
              >Resources</a
            >
            <div class="text-sm lg:hidden">
              <a href="https://app.contentre.io/"
                ><button
                  class="
                    bg-[#286963]
                    py-[12px]
                    px-[32px]
                    text-white
                    rounded-md
                    text-sm
                    inline-block
                  "
                >
                  Log In
                </button></a
              >
              <a
                href="https://app.contentre.io/auth/register?source=home_header"
                ><button
                  class="
                    bg-[#286963]
                    py-[12px]
                    px-[32px]
                    text-white
                    rounded-md
                    text-sm
                  "
                >
                  Get Started. It's Free
                </button></a
              >
            </div>
          </div>
        </div>

        <!-- ===============Mobile Menu=================================== -->
        <div class="text-sm hidden lg:block">
          <a href="https://app.contentre.io/"
            ><button class="text-[#286963] font-bold text-sm">Log In</button></a
          >
          <a href="https://app.contentre.io/auth/register?source=home_header"
            ><button
              class="
                bg-[#286963]
                py-[12px]
                px-[32px]
                text-white
                ml-8
                rounded-md
                text-sm
              "
            >
              Get Started. It's Free
            </button></a
          >
        </div>
      </nav>
      <!-- ------------Navbar-------------------- -->
    </header>

    <Nuxt />

    <!-- mt-32 -->
    <footer class="bg-[#102A27]">
      <div class="max-w-[80%] mx-auto pt-10 md:pt-16 pb-5">
        <div class="grid lg:grid-cols-3 gap-10 md:gap-16 lg:gap-40">
          <div class="lg:col-span-1">
            <nuxt-link to="/" class="mb-5 flex">
              <div class="flex">
                <img
                  src="~/assets/imgs/Logo-contentre.png"
                  alt="Logo-contentre"
                  class=""
                />
                <h5 class="text-white text-md font-medium">Contentre</h5>
              </div>
            </nuxt-link>
            <p class="text-[#E6E7E9] text-xs font-light leading-relaxed">
              Spend less time managing your freelance technical writing career
              and more time focused on your writing and getting more clients.
            </p>

            <ul class="flex mt-5">
              <li>
                <a href="https://linkedin.com/company/contentre"
                  ><img src="~/assets/imgs/LinkedIN_black.png" alt="" srcset=""
                /></a>
              </li>
              <li class="ml-2">
                <a href="https://twitter.com/contentreio"
                  ><img
                    src="~/assets/imgs/Combined-Shape_(1).png"
                    alt=""
                    srcset=""
                /></a>
              </li>
              <li class="ml-2">
                <a href="https://facebook.com/contentreio"
                  ><img
                    src="~/assets/imgs/Combined-Shape_(2).png"
                    alt=""
                    srcset=""
                /></a>
              </li>
            </ul>
          </div>
          <div class="lg:col-span-2">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Company</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/about"
                      >About</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a
                      class="text-[#E6E7E9] text-xs font-light"
                      href="https://www.termsandconditionsgenerator.com/live.php?token=d7qMQzDBX2dtqge1TzZCiVEPMWanz0Pt"
                      >Terms of service</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a
                      class="text-[#E6E7E9] text-xs font-light"
                      href="https://www.privacypolicygenerator.info/live.php?token=1qbpaQaOJm4eE4nY1ehmjz3ZK5LKf4GC"
                      >Privacy policy</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Contentre Academy</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Contentre Agency</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Resources</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <a
                      class="text-[#E6E7E9] text-xs font-light"
                      href="https://blog.contentre.io?source=home_footer"
                      >Blog</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Ebooks</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/templates"
                      >Templates</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Webinars</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a
                      class="text-[#E6E7E9] text-sm font-light"
                      href="https://blog.contentre.io/what-is-freelance-writing?source=home_header"
                      >Who is a Technical Writer?</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Product</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/product"
                      >All</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/writers"
                      >For Technical Writers</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/hiring"
                      >Hire Technical Writers</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Contact Us</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/contact#book_a_demo"
                      >Book a Demo</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/contact#schedule_a_call"
                      >Schedule a call</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/contact#chat_with_us"
                      >Chat with us</nuxt-link
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <nuxt-link
                      class="text-[#E6E7E9] text-xs font-light"
                      to="/contact#send_an_email"
                      >Send an email</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 lg:mt-0 flex space-x-3">
          <small class="text-[#E6E7E9] text-xs font-extralight"
            >Copyright ® {{ new Date().getFullYear() }} Contentre All rights
            Reserved</small
          >
          <li style="list-style: none">
            <button
              class="
                termly-cookie-preference-button
                text-[#E6E7E9] text-xs
                font-light
              "
              type="button"
              onclick="displayPreferenceModal()"
            >
              Manage Cookie Preferences
            </button>
          </li>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'HomeLayout',

  directives: {
    clickOutside: vClickOutside.directive,
  },

  data: () => ({
    showWhyContentre: false,
    showMenu: false,
    showResourceMenu: false,
  }),

  computed: {
    APP_URL() {
      return process.env.APP_URL ?? 'https://app.contentre.io'
    },
  },
  methods: {
    onToggle() {
      this.showWhyContentre = !this.showWhyContentre
      this.showMenu = false
      this.showResourceMenu = false
    },

    onToggleResources() {
      this.showResourceMenu = !this.showResourceMenu
      this.showMenu = false
      this.showWhyContentre = false
    },

    onToggleMenu() {
      this.showMenu = !this.showMenu
      this.showResourceMenu = false
      this.showWhyContentre = false
    },

    onClickOutside() {
      this.closeDropdown()
    },

    closeDropdown() {
      this.showMenu = false
      this.showResourceMenu = false
      this.showWhyContentre = false
      document.removeEventListener('keyup', this.onKeyUp)
    },

    onKeyUp(event) {
      const keyCode = event.keyCode || event.which
      if (keyCode === 27) this.closeDropdown()
    },
  },
}
</script>

<style>
body {
  font-family: 'gilroy', Arial, sans-serif;
}

/* ==============Hamburger menu==================== */

.hamburger-box {
  position: absolute;
  top: 0px;
  right: 30px;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}

/* ==============Hamburger menu==================== */

@media screen and (max-width: 768px) {
  .nav-menu ul li {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  .nav-menu ul li {
    display: block;
  }
}
</style>
