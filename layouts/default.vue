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
          <div class="text-text-base hidden lg:block nav-menu ml-8">
            <ul class="flex text-[#888888]">
              <li class="ml-12">
                <a class="text-base">Why Contentre?</a>
              </li>
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

        <!-- ===========Hamburger Icon===================== -->
        <div class="hamburger-box">
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
        <div class="lg:hidden">
          <div
            id="menu"
            class="
              absolute
              flex-col
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
              hidden
            "
          >
            <a href="./index.html" class="text-base text-[#888888]"
              >Why Contentre?</a
            >
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
                    <a
                      class="text-[#E6E7E9] text-xs font-light"
                      href="/freelancers"
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

  computed: {
    APP_URL() {
      return process.env.APP_URL ?? 'https://app.contentre.io'
    },
  },
  methods: {
    toggleDropdown() {
      const dropdown = document.getElementById('navDropdown')
      const dropdown1 = document.getElementById('navDropdown1')
      dropdown.classList.toggle('hidden')
      dropdown1.classList.toggle('hidden')
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
