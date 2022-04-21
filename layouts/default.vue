<template>
  <div class="min-h-screen">
    <div id="hero" class="bg-transparent w-full px-8 pt-2 z-10">
      <header>
        <nav
          class="
            flex flex-wrap
            items-center
            justify-between
            py-4
            md:py-0
            z-30
            w-full
          "
        >
          <div>
            <a href="/">
              <img
                class="pl-3 icon"
                src="~/assets/img/icon.png"
                width="60"
                alt="logo"
              />
              <span class="text logo-text">Contentre</span>
            </a>
          </div>

          <svg
            id="menu-button"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click.prevent="toggleDropdown"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            id="navDropdown"
            class="w-full md:flex hidden md:items-center md:w-auto"
          >
            <ul class="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
              <li>
                <a class="md:p-4 py-2 block" href="#">
                  <span class="">About</span>
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block" href="#">
                  <span class="">Products</span>
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block" href="#">
                  <span class="">Services</span>
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block" href="#">
                  <span class="">Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            id="navDropdown1"
            class="w-full hidden md:flex md:items-center md:w-auto"
          >
            <ul class="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
              <li class="pr-5">
                <a
                  href="#"
                  class="
                    inline-flex
                    px-20
                    py-3
                    text-white
                    form-btn
                    border
                    rounded-md
                    mb-3
                  "
                >
                  <span class="">Notify me</span>
                </a>
              </li>
              <li class="items-center">
                <a
                  class="
                    inline-flex
                    px-20
                    py-3
                    text-black
                    bg-transparent
                    border
                    hidden
                    rounded-md
                    md:ml-2
                    mb-3
                  "
                  :href="`${APP_URL}/auth/login?source=home`"
                >
                  <span class="">Login</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'HomeLayout',

  computed: {
    APP_URL() {
      return process.env.APP_URL ?? 'https://contentre.herokuapp.com'
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
