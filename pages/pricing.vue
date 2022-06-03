<template>
  <span>
    <div class="">
      <div
        class="pt-20 w-[80%] lg:w-[65%] lg:leading-[82px] mx-auto text-center"
      >
        <h1 class="text-2xl md:text-4xl lg:text-6xl text-[#102A27] font-medium">
          Get started now, we've got awesome price that fits your purse
        </h1>
        <p class="mt-10 lg:mt-16 text-base leading-[24px] text-[#54605F]">
          Start for free and upgrade whenever you're ready.
        </p>
      </div>
      <div class="flex justify-center">
        <div class="bg-[#EBFAF8] rounded-full py-1 px-0.5 mt-10 lg:mt-16">
          <button
            class="
              rounded-full
              bg-[bg-transparent]
              text-[#666666]
              px-6
              py-2
              md:py-3 md:px-10
              ml-2
              text-base
            "
            :class="{ 'bg-white text-[#286963]': showYear }"
            @click.prevent="onShowYear"
          >
            Yearly (Save 20%)
          </button>
          <button
            class="
              rounded-full
              bg-[bg-transparent]
              px-6
              py-2
              md:py-3
              lg:py-3
              md:px-10
              text-base text-[#666666]
            "
            :class="{ 'bg-white text-[#286963]': showMonth }"
            @click.prevent="onShowMonth"
          >
            Monthly
          </button>
        </div>
      </div>
    </div>

    <section class="mt-20 mb-10">
      <div class="max-w-[80%] mx-auto">
        <!-- ---------------------------CARD GRID------------ -->
        <div class="mt-10 grid lg:grid-cols-3 gap-6 lg:gap-5">
          <!-- ==========BASIC PLAN=========== -->
          <div
            class="bg-[#FCFCFC] text-[#666666] px-8 pt-8 pb-6 rounded-lg border"
          >
            <div class="border-b-2 border-[#99999966] pb-5">
              <div>
                <div>
                  <small class="text-[#286963] text-[18px] leading-[18px]"
                    >Basic plan</small
                  >
                  <h4
                    class="
                      text-[#102A27]
                      font-medium
                      text-[40px]
                      leading-[40px]
                      mt-1
                    "
                  >
                    Free
                    <sub class="text-[14px] font-extralight text-gray-300"
                      >forever</sub
                    >
                  </h4>
                </div>
                <p class="mt-6 text-base">
                  Get all the basic benefits you need to get started with your
                  freelance writing business.
                </p>
              </div>
            </div>
            <div class="mt-4">
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Contents</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Portfolios</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Clients</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Distribution</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Repurposing</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Calendar</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Unified Content Board/Planner</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Customizer</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Cover Letters</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Messaging</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Analytics</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Time tracking</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Note-taking</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Create and share content briefs</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Available for hiring</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Generate PDFs, Docx, etc</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Plugins</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Generate Profile Links</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Browser extension</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Schedule content promotion</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Premium Resume and Cover letter templates</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Premium Portfolio templates</li>
              </ul>
            </div>

            <div class="mt-20 mb-5 flex justify-center items-center">
              <button
                class="
                  bg-[bg-transparen]
                  border border-[#286963]
                  px-10
                  md:px-24
                  py-3
                  text-[#286963] text-sm
                  rounded-md
                "
              >
                Get Basic Plan
              </button>
            </div>
          </div>

          <!-- =========PREMIUM PLAN================= -->
          <div
            class="bg-[#286963] text-gray-300 px-8 pt-8 pb-6 rounded-lg border"
          >
            <div class="border-b-2 border-[#99999966] pb-5">
              <div>
                <div>
                  <small class="text-text-gray-500 text-[18px] leading-[18px]"
                    >Premium plan</small
                  >
                  <h4
                    class="
                      text-[#FFFFFF]
                      font-medium
                      text-[40px]
                      leading-[40px]
                      mt-3
                    "
                  >
                    ${{ showYear ? 15.99 : 19.99 }}
                    <sub class="text-[14px] font-extralight text-gray-300"
                      >per month</sub
                    >
                  </h4>
                </div>
                <p class="mt-7 text-base">
                  Get all the unlimited benefits you need to manage your
                  freelance writing business.
                </p>
              </div>
            </div>
            <div class="mt-3">
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Contents</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Portfolios</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Clients</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Distribution</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Repurposing</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Calendar</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Unified Content Board/Planner</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Customizer</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Cover Letters</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Messaging</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Analytics</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Time tracking</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Note-taking</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Create and share content briefs</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Available for hiring</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Generate PDFs, Docx, etc</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Plugins</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Generate Profile Links</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Browser extension</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Schedule content promotion</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Premium Resume and Cover letter templates</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Premium Portfolio templates</li>
              </ul>
            </div>

            <div class="mt-20 mb-5 flex justify-center items-center">
              <button
                class="
                  bg-[#fff]
                  border border-[#286963]
                  px-10
                  md:px-20
                  py-3
                  text-[#286963] text-sm
                  rounded-md
                "
              >
                Get Premium Plan
              </button>
            </div>
          </div>

          <!-- ============TEAM PLAN============== -->
          <div class="bg-[#FCFCFC] text-[#666666] px-8 py-8 rounded-lg border">
            <div class="border-b-2 border-[#99999966] pb-5">
              <div>
                <div>
                  <small class="text-[#286963] text-[18px] leading-[18px]"
                    >Standard plan</small
                  >
                  <h4
                    class="
                      text-[#102A27]
                      font-medium
                      text-[40px]
                      leading-[40px]
                      mt-3
                    "
                  >
                    ${{ showYear ? 23.99 : 29.99 }}
                    <sub class="text-[14px] font-extralight text-[#BDBDBD]"
                      >per month</sub
                    >
                  </h4>
                </div>
                <p class="mt-6 text-base">
                  Get all the team benefits you need to get manage your content
                  writing agency.
                </p>
              </div>
            </div>
            <div class="mt-3">
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Contents</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Portfolios</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Clients</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Distribution</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Repurposing</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Content Calendar</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Unified Content Board/Planner</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Customizer</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Cover Letters</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Messaging</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Portfolio Analytics</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Time tracking</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Note-taking</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Create and share content briefs</li>
              </ul>
              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Available for hiring</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Generate PDFs, Docx, etc</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Number of Plugins</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Generate Profile Links</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Browser extension</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Schedule content promotion</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Premium Resume and Cover letter templates</li>
              </ul>

              <ul class="flex text-[14px] mb-3">
                <li>
                  <img
                    src="~/assets/imgs/u_check-circle.png"
                    alt=""
                    srcset=""
                  />
                </li>
                <li class="ml-2">Premium Portfolio templates</li>
              </ul>
            </div>

            <div class="mt-20 mb-5 flex justify-center items-center">
              <button
                class="
                  bg-[bg-transparent]
                  border border-[#286963]
                  px-10
                  md:px-24
                  py-3
                  text-[#286963] text-sm
                  rounded-md
                "
              >
                Get Team Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- ---------------------------CARD GRID------------ -->

      <!-- </div> -->
    </section>
    <!-- -------------------------=====================================END OF==SUBSCRIPTION PLAN========================= -->

    <!-- ------------------------------------------TESTIMONIAL------------------------ -->
    <section class="bg-[#FAFAFA] mt-20">
      <Testimonial />
    </section>
    <!-- -------------------------------END---OF--------TESTIMONIAL------------------------ -->

    <!-- ===========================================FAQ SECTION================================= -->
    <section>
      <FAQ />
    </section>
    <!-- ===========================================FAQ SECTION================================= -->

    <!-- ==============================FORM SECTION============================================================== -->

    <SpreadSheet />
    <!-- ==========================END OF====FORM SECTION============================================================== -->
  </span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pricing',

  data: () => ({
    showYear: true,
    showMonth: false,
  }),

  head() {
    return {
      title: 'Pricing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Get started now, we've got awesome price that fits your purse",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Pricing',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Get started now, we've got awesome price that fits your purse",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://contentre.io/pricing',
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '800',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '800',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },

  methods: {
    onShowYear() {
      this.showYear = true
      this.showMonth = false
    },
    onShowMonth() {
      this.showYear = false
      this.showMonth = true
    },
  },
}
</script>

<style>
</style>