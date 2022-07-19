<template>
  <section>
    <header>
      <div class="text-center mt-20 mx-3 sm:mx-10 md:mx-6 lg:mx-16">
        <h1 class="text-3xl sm:text-4xl md:text-6xl text-[#102A27] font-bold">
          Portfolio Examples
        </h1>
        <p class="mt-5 text-[18px] sm:text-[24px]">
          Explore this selection of handpicked portfolios built with Contentre.
          The range of themes means all portfolios are personalized, branded,
          and different.
        </p>
      </div>
    </header>

    <section class="mt-20 bg-[#4FD1C50D] pb-8 md:pb-10 lg:pb-40">
      <!-- ================================================FIRST PORTFOLIO=================================================== -->

      <div class="mb-32 md:mb-0">
        <div
          class="
            max-w-[90%]
            md:max-w-[90%]
            lg:max-w-[90%]
            xl:max-w-[60%]
            mx-auto
            py-10
            relative
          "
        >
          <img
            src="https://blog.contentre.io/wp-content/uploads/2022/07/Solomon-Eseme-Writing-Portfolio-1024x862.png"
            alt="Solomon Eseme Portfolio"
          />
          <div
            class="
              absolute
              md:top-[40%] md:left-[80px]
              lg:left-[160px]
              md:w-[75%]
              lg:w-[60%]
              h-[160px]
              sm:h-[155px]
              md:h-[170px]
              lg:h-[170px]
              xl:h-[150px]
              bg-gray-800
              flex
              z-10
              mt-2
              md:mt-0
            "
          >
            <div class="w-[120%] sm:w-full md:w-[60%] lg:w-[50%] h-full">
              <img
                src="https://res.cloudinary.com/kaperskydisk/image/upload/v1652433561/contentre/profiles/95f46d41-f6a8-40b8-ab49-66c1a7f77b56/skhkygitafiqw0glg60n.jpg"
                alt="Solomon Eseme"
                class="w-full object-cover block h-full"
              />
            </div>
            <div class="px-5 pt-3">
              <a
                href="#"
                class="text-white font-bold text-[16px] md:text-[18px]"
                >Solomon Eseme</a
              >
              <p class="text-[#ddd] text-sm">
                Full Stack Engineer(Node.js, Laravel, Vue.js/Nuxt.js) | I help
                companies build innovative softwares and technical content to
                power their technical content marketing.
              </p>
              <div class="pt-3">
                <a href="https://contentre.io/kaperskyguru">
                  <button
                    class="
                      text-white text-sm
                      font-semibold
                      bg-[#286963]
                      px-4
                      py-2
                      rounded-md
                      hover:bg-[#35aca0]
                      transition
                      duration-150
                      ease-in-out
                    "
                  >
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ============================================END OF====FIRST PORTFOLIO=================================================== -->

      <div class="mb-32 md:mb-0">
        <div
          class="
            max-w-[90%]
            md:max-w-[90%]
            lg:max-w-[90%]
            xl:max-w-[60%]
            mx-auto
            py-10
            relative
          "
        >
          <img
            src="https://res.cloudinary.com/kaperskydisk/image/upload/v1657545474/contentre/portfolio_examples/adeniyi_portfolio_example.png"
            alt="Adeniyi Stephen Portfolio"
          />
          <div
            class="
              absolute
              md:top-[40%] md:left-[80px]
              lg:left-[160px]
              md:w-[75%]
              lg:w-[60%]
              h-[160px]
              sm:h-[155px]
              md:h-[170px]
              lg:h-[170px]
              xl:h-[150px]
              bg-gray-800
              flex
              z-10
              mt-2
              md:mt-0
            "
          >
            <div class="w-[120%] sm:w-full md:w-[60%] lg:w-[50%] h-full">
              <img
                src="https://res.cloudinary.com/kaperskydisk/image/upload/v1651751268/contentre/profiles/dbd36cc4-4ed0-4a41-809d-c57bdd0125c9/g6cebg9mpxypwj1mfuld.jpg"
                alt="Adeniyi Stephen"
                class="w-full object-cover block h-full"
              />
            </div>
            <div class="px-5 pt-3">
              <a
                href="#"
                class="text-white font-bold text-[16px] md:text-[18px]"
                >Odukoya Adeniyi Stephen</a
              >
              <p class="text-[#ddd] text-sm">
                Odukoya Adeniyi is a Freelance Technica| Blockchain Writer. He
                has worked with several international organizations, increasing
                sales and generating leads via content marketing.
              </p>
              <div class="pt-3">
                <a href="https://contentre.io/AdeniyiSteph">
                  <button
                    class="
                      text-white text-sm
                      font-semibold
                      bg-[#286963]
                      px-4
                      py-2
                      rounded-md
                      hover:bg-[#35aca0]
                      transition
                      duration-150
                      ease-in-out
                    "
                  >
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ============================================END OF====FIRST PORTFOLIO=================================================== -->
    </section>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Examples',

  head() {
    return {
      title: 'Technical Writers Portfolio Examples',
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Personalized, branded and free technical writing portfolio examples.',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Personalized, branded and free technical writing portfolio examples.',
        },
      ],
    }
  },
}
</script>

<style>
</style>