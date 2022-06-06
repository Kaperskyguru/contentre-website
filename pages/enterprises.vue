<template>
  <section>
    <section class="mt-20 lg:mb-40">
      <div class="mx-10 lg:ml-28">
        <div class="grid lg:grid-cols-2 gap-4">
          <div class="lg:w-[500px]">
            <div class="text-center lg:text-left">
              <h1
                class="
                  text-2xl
                  md:text-4xl
                  lg:text-6xl lg:leading-[82px]
                  md:mb-10
                  lg:mb-0
                "
              >
                Contentre for Content Agencies
              </h1>
              <p class="text-[#859492] text-[14px] md:text-[18px]">
                Wether you're a small or large content agency or enterprise,
                providing Content as a service to your client. Contentre
                provides great features that runs your content agency in one
                place.
              </p>
            </div>
            <div class="mt-10 lg:block">
              <form
                ref="form"
                class="mt-4 w-full"
                action="https://contentre.us1.list-manage.com/subscribe/post?u=731fe09da3abfe832f8122f69&amp;id=62eda625eb"
                method="post"
                @submit.prevent="register"
              >
                <em>{{ errors.name }}</em>
                <input
                  v-model="user.email"
                  name="EMAIL"
                  class="
                    font-gilroy
                    focus:border-body-text-color focus:outline-none
                    border-solid border border-border-inner
                    rounded
                    py-4
                    pl-5
                    font-medium
                    block
                    mb-5
                    w-full
                  "
                  placeholder="Enter your email"
                  type="email"
                />
                <div hidden="true">
                  <input type="hidden" name="tags" value="4346013" />
                </div>

                <button
                  class="
                    bg-[#286963]
                    py-[16px]
                    px-[24px]
                    text-white
                    font-medium
                    rounded-md
                    text-sm
                    md:text-base
                  "
                  @click.prevent="onClick"
                >
                  Coming Soon (Notify me)
                </button>
              </form>
            </div>
          </div>
          <div class="">
            <div class="md:flex w-full md:mt-20 lg:mt-0">
              <div>
                <div class="w-[226px] h-[173px] hidden md:block">
                  <img
                    src="~/assets/imgs/enterprise-hero-img.png"
                    alt=""
                    class="w-full"
                  />
                </div>
                <div class="w-[226px] h-[291px] mt-6 relative hidden md:block">
                  <img src="~/assets/imgs/enterprise-hero-img_(2).png" alt="" />
                  <div
                    class="
                      w-[226px]
                      h-[291px]
                      border-2 border-[#FFA17A]
                      absolute
                      top-[3%]
                      left-[5%]
                      -z-10
                      rounded-xl
                    "
                  ></div>
                </div>
              </div>
              <div class="md:ml-6 relative">
                <div class="w-[320px] md:w-[409px] h-[286px] mx-auto">
                  <img
                    src="~/assets/imgs/enterprise_hero_img3_(2).png"
                    alt=""
                    class="w-full"
                  />
                </div>
                <div class="w-[226px] h-[173px] mt-7 hidden md:block">
                  <img
                    src="~/assets/imgs/enterprise_hero_img3_(1).png"
                    alt=""
                    class="w-full"
                  />
                  <div class="absolute -bottom-[13%] right-[20%]">
                    <img src="~/assets/imgs/group_circlee.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- --------------------END OF--HERO SECTION-------------------------- -->

    <!-- ==========================================FEATURES SECTION================================================== -->

    <section class="mt-20 mb-10">
      <div class="max-w-[80%] mx-auto">
        <div class="text-center mb-24 md:pt-28 lg:pt-0">
          <h1
            class="
              text-[24px]
              md:text-[34px]
              lg:text-[48px] lg:leading-[68.2px]
              text-[#102A27]
            "
          >
            Access great features that runs your <br />content agency in one
            place.
          </h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div
            class="
              relative
              w-[330px]
              h-[330px]
              lg:w-[391px] lg:h-[391px]
              md:mx-auto
              lg:mx-0
            "
          >
            <img src="~/assets/imgs/laptop_img.png" alt="" class="" />
            <div
              class="
                w-[330px]
                h-[330px]
                lg:w-[391px] lg:h-[391px]
                rounded-full
                border-4 border-[#4FD1C5]
                absolute
                top-4
                -left-4
                -z-10
              "
            ></div>
          </div>
          <div class="mt-16 lg:mt-0">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27]
                md:text-center
                lg:text-left
              "
            >
              Client Management
            </h2>
            <div class="mt-6">
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Billings</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Track all your billings and transactions from your
                      freelance writing business.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Invoices</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Generate invoices in less than 5 minutes and get paid with
                      popular payment platforms such as PayPal, OutVoice, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Proposal</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create content proposals and contracts using customized
                      and premium templates in less than a minute to land you
                      new gigs from your clients.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Payment</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Receive payments using your favorite payment apps such as
                      PayPal, OutVoice, direct transfer etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40 mt-20">
          <div class="">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27]
                md:text-center
                lg:text-left
              "
            >
              Team Management
            </h2>
            <div class="mt-6">
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Manage Writers</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create and manage your writers with assigned roles, send
                      content briefs and track progress using a unified content
                      board.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Manage Editors</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create and manage your editors with assigned roles, send
                      content briefs and track progress using a unified content
                      board.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Manage Roles/Permissions
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create and manage your roles and permissions, assign roles
                      to members of the team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              relative
              w-[330px]
              h-[330px]
              lg:w-[391px] lg:h-[391px]
              md:mx-auto
              lg:mx-0
            "
          >
            <img src="~/assets/imgs/team_img.png" alt="" class="" />
            <div
              class="
                w-[330px]
                h-[330px]
                lg:w-[391px] lg:h-[391px]
                rounded-full
                border-4 border-[#4FD1C5]
                absolute
                -top-4
                left-4
                z-10
              "
            ></div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 mt-20">
          <div
            class="
              relative
              w-[330px]
              h-[330px]
              lg:w-[391px] lg:h-[391px]
              mt-10
              lg:mt-0
              md:mx-auto
              lg:mx-0
            "
          >
            <img src="~/assets/imgs/content_img.png" alt="" class="" />
            <div
              class="
                w-[330px]
                h-[330px]
                lg:w-[391px] lg:h-[391px]
                rounded-full
                border-4 border-[#4FD1C5]
                absolute
                -top-4
                left-4
                z-10
              "
            ></div>
          </div>
          <div class="">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27]
                md:text-center
                lg:text-left
              "
            >
              Content Creation
            </h2>
            <div class="mt-6">
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Manage Content Briefs
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create and manage content briefs, assign and receive
                      content outlines and track progress of writers and editors
                      in a unified content board.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Unified Content Board
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      A unified content board to track your writers and editors
                      progress, monitor content delivery status across your team
                      and clients.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Unified Content Calenders
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      A unified calendar to monitor content delivery across your
                      clients and team members with reminders integration with
                      Google Calendar, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Real time Collaboration
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Real time content creation and collaboration, teams
                      members can collaborate together to produce high quality
                      content on real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-40 mt-20">
          <div class="">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27]
                md:text-center
                text-left
              "
            >
              Unified Content Analytics
            </h2>
            <div class="mt-6">
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Unified Content Performances
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Track the progress of your contents on your across all
                      your clients website and draw comprehensive and insightful
                      analytics in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              relative
              w-[330px]
              h-[330px]
              lg:w-[391px] lg:h-[391px]
              md:mx-auto
              lg:mx-0
            "
          >
            <img src="~/assets/imgs/content_performance.png" alt="" class="" />
            <div
              class="
                w-[330px]
                h-[330px]
                lg:w-[391px] lg:h-[391px]
                rounded-full
                border-4 border-[#4FD1C5]
                absolute
                top-4
                left-4
                -z-10
              "
            ></div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==========================================FEATURES SECTION================================================== -->

    <!-- ==============================================CTA==================================================== -->
    <section class="mt-40 mb-20">
      <div class="text-center">
        <h1 class="text-[#102A27] text-[20px] md:text-[35px] lg:text-[48px]">
          Get your team onboard now 🚀
        </h1>
        <div class="flex justify-center mt-4">
          <button
            class="py-[16px] px-[24px] bg-[#276862] rounded-[5px] text-white"
          >
            Get started. It's free (Coming Soon)
          </button>
        </div>
      </div>
    </section>
    <!-- ==============================================CTA==================================================== -->

    <!-- ===========================================FAQ SECTION================================= -->
    <section>
      <FAQ />
    </section>
    <!-- ===========================================FAQ SECTION================================= -->

    <!-- ==============================FORM SECTION============================================================== -->

    <section class="mt-20 mb-10 bg-white">
      <SpreadSheet />
    </section>
    <!-- ==========================END OF====FORM SECTION============================================================== -->
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Enterprise',
  data: () => ({ user: {}, errors: {} }),
  head() {
    return {
      title: 'Contentre for content agencies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Access great features that runs your content agency in one place.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contentre for content agencies',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Access great features that runs your content agency in one place.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://contentre.io/creators',
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
    register() {},
    onClick() {
      if (this.validateEmail(this.user.email)) {
        this.suscribeNewsletter()
      } else this.errors.email = 'Enter a valid email'
    },
    suscribeNewsletter() {
      this.$refs.form.submit()
    },
    validateEmail(email) {
      if (email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
      }
      return false
    },
  },
}
</script>

<style>
</style>