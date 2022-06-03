<template>
  <main class="min-h-screen">
    <!-- ================Header================================ -->
    <header class="px-5 md:px-8">
      <!-- ------------Navbar-------------------- -->
      <nav class="flex justify-between relative fixed mt-4">
        <div class="flex items-center">
          <a href="/">
            <div class="flex">
              <img
                src="~/assets/imgs/Logo-contentre.png"
                alt="Logo-contentre"
                class=""
              />
              <h1 class="text-[#102A27] font-bold text-xl">Contentre</h1>
            </div>
          </a>

          <div class="relative inline-block dropdown hidden md:block">
            <button
              class="ml-12 text-[#888888] text-base dropbtn"
              @click.prevent="onToggle"
            >
              Why Contentre
              <img
                src="~/assets/imgs/arrow-down.png"
                alt=""
                class="inline-block ml-4 dropbtn"
              />
            </button>
            <div
              v-if="showWhyContentre"
              id="myDropdown"
              class="
                dropdown-content
                bg-white
                absolute
                -left-24
                lg:left-0
                w-[360px]
                lg:min-w-[398px]
                h-[398px]
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
              <a href="/enterprises">
                <div
                  class="
                    hover:bg-[#EFF1F1]
                    rounded-md
                    py-[12px]
                    pl-[32px]
                    pr-[12px]
                  "
                >
                  <h6
                    class="
                      text-base text-[#333333]
                      hover:text-[#286963] hover:font-semibold
                    "
                  >
                    For Content Agencies
                  </h6>
                  <p
                    class="
                      text-[12px] text-[#6D7070]
                      leading-[24px]
                      my-2
                      hover:text-[#6D7070]
                    "
                  >
                    Wether you're a small or large content agency or enterprise,
                    providing Content as a service to your client. Contentre
                    provides...
                  </p>
                </div>
              </a>
              <a href="/creators">
                <div
                  class="
                    hover:bg-[#EFF1F1]
                    rounded-md
                    py-[12px]
                    pl-[32px]
                    pr-[12px]
                  "
                >
                  <h6 class="text-base text-[#333333]">For Content Creators</h6>
                  <p class="text-[12px] text-[#6D7070] leading-[24px] my-2">
                    Wether you're a Skit Maker, Tiktoker, Youtuber, content
                    creator, etc. Contentre has...
                  </p>
                </div>
              </a>
              <a href="/writers">
                <div
                  class="
                    hover:bg-[#EFF1F1]
                    rounded-md
                    py-[12px]
                    pl-[32px]
                    pr-[12px]
                  "
                >
                  <h6 class="text-base text-[#333333]">
                    For Freelance Writers
                  </h6>
                  <p class="text-[12px] text-[#6D7070] leading-[24px] my-2">
                    Wether you're a freelance writer, a technical writer,
                    journalists, copywriters, photographers, illustrator,
                    artist, designers or creative writer. Contentre has...
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div class="text-text-base hidden lg:block nav-menu ml-4">
            <ul class="flex text-[#888888]">
              <li class="ml-12">
                <a class="text-base" href="/about">About</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="/pricing">Pricing</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="/product">Product</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="/contact">Contact</a>
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
            <button
              class="ml-12 text-[#888888] text-base dropbtn"
              @click.prevent="onToggle"
            >
              Why Contentre
              <img
                src="~/assets/imgs/arrow-down.png"
                alt=""
                class="inline-block ml-4 dropbtn"
              />
              <div
                v-if="showWhyContentre"
                id="myDropdown"
                class="
                  dropdown-content
                  bg-white
                  absolute
                  left-0
                  lg:left-0
                  w-[360px]
                  lg:min-w-[398px]
                  h-[398px]
                  overflow-auto
                  border-2 border-[#EFF1F1]
                  rounded-lg
                  shadow-[#EFF1F1]
                  py-[12px]
                  pl-[2px]
                  pr-[12px]
                  z-20
                "
              >
                <a href="/enterprises">
                  <div
                    class="
                      hover:bg-[#EFF1F1]
                      rounded-md
                      py-[12px]
                      pl-[32px]
                      pr-[12px]
                    "
                  >
                    <h6
                      class="
                        text-base text-[#333333]
                        hover:text-[#286963] hover:font-semibold
                      "
                    >
                      For Content Agencies
                    </h6>
                    <p
                      class="
                        text-[12px] text-[#6D7070]
                        leading-[24px]
                        my-2
                        hover:text-[#6D7070]
                      "
                    >
                      Wether you're a small or large content agency or
                      enterprise, providing Content as a service to your client.
                      Contentre provides...
                    </p>
                  </div>
                </a>
                <a href="/creators">
                  <div
                    class="
                      hover:bg-[#EFF1F1]
                      rounded-md
                      py-[12px]
                      pl-[32px]
                      pr-[12px]
                    "
                  >
                    <h6 class="text-base text-[#333333]">
                      For Content Creators
                    </h6>
                    <p class="text-[12px] text-[#6D7070] leading-[24px] my-2">
                      Wether you're a Skit Maker, Tiktoker, Youtuber, content
                      creator, etc. Contentre has...
                    </p>
                  </div>
                </a>
                <a href="/writers">
                  <div
                    class="
                      hover:bg-[#EFF1F1]
                      rounded-md
                      py-[12px]
                      pl-[32px]
                      pr-[12px]
                    "
                  >
                    <h6 class="text-base text-[#333333]">
                      For Freelance Writers
                    </h6>
                    <p class="text-[12px] text-[#6D7070] leading-[24px] my-2">
                      Wether you're a freelance writer, a technical writer,
                      journalists, copywriters, photographers, illustrator,
                      artist, designers or creative writer. Contentre has...
                    </p>
                  </div>
                </a>
              </div>
            </button>
            <a href="About" class="text-base text-[#888888]">About</a>
            <a href="./pricing.html" class="text-base text-[#888888]"
              >Pricing</a
            >
            <a href="Product" class="text-base text-[#888888]">Product</a>
            <a href="Contact" class="text-base text-[#888888]">Contact</a>
            <div class="text-sm lg:hidden">
              <button
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
              </button>
              <button
                class="
                  bg-[#286963]
                  py-[12px]
                  px-[32px]
                  text-white
                  rounded-md
                  text-sm
                "
              >
                Get Started For Free
              </button>
            </div>
          </div>
        </div>

        <!-- ===============Mobile Menu=================================== -->
        <div class="text-sm hidden lg:block">
          <button class="text-[#286963] font-bold text-sm">Log In</button>
          <button
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
          </button>
        </div>
      </nav>
      <!-- ------------Navbar-------------------- -->
    </header>
    <Nuxt />

    <footer class="bg-[#102A27] mt-32">
      <div class="max-w-[80%] mx-auto pt-10 md:pt-16 pb-5">
        <div class="grid lg:grid-cols-3 gap-10 md:gap-16 lg:gap-40">
          <div class="lg:col-span-1">
            <h5 class="text-white mb-5 text-md font-medium">Contentre</h5>
            <p class="text-[#E6E7E9] text-xs font-light leading-relaxed">
              Access your content, monitor your content analytics in real-time,
              create and customize your writing portfolio across your clients.
              Spend less time managing your business and more time focused on
              your writing and getting more clients.
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
                    <a class="text-[#E6E7E9] text-xs font-light" href="/about"
                      >About</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Terms of service</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
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
                      href="https://blog.contentre.io?source=homepage_footer"
                      >Blog</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Ebooks</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Templates</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="#"
                      >Webinars</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-sm font-light" href="#"
                      >Who is a content creator?</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-sm font-light" href="#"
                      >Who is a freelance writer?</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Product</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="/product"
                      >All</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a
                      class="text-[#E6E7E9] text-xs font-light"
                      href="/enterprises"
                      >For Content Agencies/Enterprises</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a
                      class="text-[#E6E7E9] text-xs font-light"
                      href="/creators"
                      >For Content Creators</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="/writers"
                      >For Freelance Writers</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Contact Us</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="/contact"
                      >Book a Demo</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="/contact"
                      >Schedule a call</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="/contact"
                      >Chat with us</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="/contact"
                      >Send an email</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 lg:mt-0">
          <small class="text-[#E6E7E9] text-xs font-extralight"
            >Copyright ® {{ new Date().getFullYear() }} Contentre All rights
            Reserved</small
          >
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'HomeLayout',

  data: () => ({
    showWhyContentre: false,
    showMenu: false,
  }),

  computed: {
    APP_URL() {
      return process.env.APP_URL ?? 'https://app.contentre.io'
    },
  },
  methods: {
    onToggle() {
      this.showWhyContentre = !this.showWhyContentre
    },

    onToggleMenu() {
      this.showMenu = !this.showMenu
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
