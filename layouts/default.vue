<template>
  <main class="min-h-screen">
    <!-- ================Header================================ -->
    <header class="px-0 md:px-8 py-4">
      <!-- ------------Navbar-------------------- -->
      <nav class="flex justify-between relative mt-4">
        <div class="flex items-center">
          <div class="flex">
            <img src="/imgs/Logo-contentre.png" alt="Logo-contentre" class="" />
            <h1 class="text-[#102A27] font-bold text-xl">Contentre</h1>
          </div>
          <div class="text-text-base hidden lg:block nav-menu ml-8">
            <ul class="flex text-[#888888]">
              <li class="ml-12">
                <a class="text-base" href="./index.html">Why Contentre?</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="about.html">About</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="./pricing.html">Pricing</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="product.html">Product</a>
              </li>
              <li class="ml-12">
                <a class="text-base" href="contact.html">Contact</a>
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
            Get Started For Free
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
              Spend less time and more time focused on your writing and getting
              more clients.
            </p>

            <ul class="flex mt-5">
              <li>
                <a href="#"
                  ><img src="/imgs/LinkedIN_black.png" alt="" srcset=""
                /></a>
              </li>
              <li class="ml-2">
                <a href="#"
                  ><img src="/imgs/Combined-Shape (1).png" alt="" srcset=""
                /></a>
              </li>
              <li class="ml-2">
                <a href="#"
                  ><img src="/imgs/Combined-Shape (2).png" alt="" srcset=""
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
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >About</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Terms of service</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Privacy policy</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Resources</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="Blog"
                      >Blog</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Ebooks</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Templates</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Webinars</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-sm font-light" href="About"
                      >Who is a content creator?</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-sm font-light" href="About"
                      >Who is a freelance writer?</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Product</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >All</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >For enterprise</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >For content creators</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >For freelance writers</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="text-white mb-5 text-md font-medium">Contact Us</h5>
                <ul>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Book a Demo</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Schedule a call</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
                      >Chat with us</a
                    >
                  </li>
                  <li class="mb-1 md:mb-2">
                    <a class="text-[#E6E7E9] text-xs font-light" href="About"
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
            >Copyright ® 2022 contentre All rights Rcerved</small
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
#hero {
  background: #dcf6f3;
}

.text-default {
  color: #dcf6f3;
}

.absolute-imgtop {
  margin-bottom: -30rem;
}

.absolute-star {
  position: absolute;
  left: 40px;
  top: -41px;
}

.absolute-dotbottom {
  bottom: -30px;
  left: -100px;
}

.absolute-dottop {
  right: -80px;
  top: -30px;
}

.absolute-dotbr {
  right: -30px;
}

.absolute-circle {
  height: 17rem;
  left: -50px;
}

#auth-navbar {
  /* background: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 110.84%
  ); */
  border: 2px solid #ffffff;
  box-shadow: 0 7px 23px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(21px);
}

@media screen and (max-width: 1024px) {
  #navDropdown {
    /* background: linear-gradient(
      112.83deg,
      rgba(255, 255, 255, 0.82) 0%,
      rgba(255, 255, 255, 0.8) 110.84%
    ); */
  }
}

.nav-line {
  background: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 110.84%
  );
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
}
.icon {
  display: inline-block;
  vertical-align: middle;
}

.text {
  display: inline-block;
  vertical-align: middle;
  font-size: 13px;
}

.form-bg {
  background: #286963;
}

.form-btn {
  background: #4fd1c5;
}

.btn-outline {
  border: 1.5px solid #4fd1c5;
}

.form-btn:hover {
  background: #286963;
}

.form-footer {
  color: #4fd1c5;
}

.logo-text {
  font-size: 1.5rem;
}
</style>
