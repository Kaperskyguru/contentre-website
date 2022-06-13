<template>
  <section>
    <!-- ----------------------HERO SECTION-------------------------- -->
    <section class="mt-20 lg:mb-40">
      <div class="mx-10 lg:ml-28">
        <div class="grid lg:grid-cols-2">
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
                Contentre for Creators
              </h1>
              <p class="text-[#859492] text-[14px] md:text-[18px]">
                Wether you're a Skit Maker, Tiktoker, Youtuber, content creator,
                etc. Contentre has the features to help you turn your Creative
                Passion in a Content Business
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
                  <input type="hidden" name="tags" value="4346005" />
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
          <div class="pt-20 lg:pt-0">
            <div class="flex justify-end">
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <img src="~/assets/imgs/freelance_img1.png" alt="" />
                </div>
                <div>
                  <img src="~/assets/imgs/freelance_img2.png" alt="" />
                </div>
                <div class="hidden md:block">
                  <img src="~/assets/imgs/freelance_img3.png" alt="" />
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-5">
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <img src="~/assets/imgs/freelance_img1.png" alt="" />
                </div>
                <div>
                  <img src="~/assets/imgs/freelance_img2.png" alt="" />
                </div>
                <div class="hidden md:block">
                  <img src="~/assets/imgs/freelance_img5.png" alt="" />
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
            Access great features that turns your <br />passion into a content
            business.
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
            <img src="~/assets/imgs/social_img.png" alt="" class="" />
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
                text-[#102A27] text-center
                lg:text-left
              "
            >
              Social Media Management
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
                  <h6 class="text-[24px] text-[#286963]">
                    Manage social media contents in one place
                  </h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Manage all your social media contents from the comfort of
                      one app. Track views, engagements from one place.
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
                text-[#102A27] text-center
                lg:text-left
              "
            >
              Content Management
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
                  <h6 class="text-[24px] text-[#286963]">
                    Organize all your contents
                  </h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      No matter where your content is published on your clients
                      website, you can easily keep track of your content
                      published anywhere in one place.
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
                  <h6 class="text-[24px] text-[#286963]">Manage categories</h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, update, delete, and assign categories to your
                      contents to help organize your content. Gain insightful
                      analytics of each categories.
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
                  <h6 class="text-[24px] text-[#286963]">Manage tags</h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, update, delete, and assign tags to your contents
                      to help organize your content. Gain insightful analytics
                      of each tags.
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
                  <h6 class="text-[24px] text-[#286963]">Manage niches</h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, update, delete, and assign niches to your contents
                      to help organize your content. Gain insightful analytics
                      of each niches.
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
            <img src="~/assets/imgs/content_icon.png" alt="" class="" />
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
            <img src="~/assets/imgs/analytics_img.png" alt="" class="" />
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
          <div class="order-2 lg:order-1">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27] text-center
                lg:text-left
              "
            >
              Analytics Management
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
                  <h6 class="text-[24px] text-[#286963]">
                    See real time analytics.
                  </h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      See real time analytics of all your content published on
                      Youtube, Tiktok, Twitch, Facebook, Instagram, etc in one
                      place.
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
                  <h6 class="text-[24px] text-[#286963]">
                    Track Views, engagements and revenue across all social
                    platforms
                  </h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Track Views, engagements and revenue across all social
                      platforms and draw comprehensive insights into your
                      content business.
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
                text-[#102A27] text-center
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
                    Unified Content Publishing
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, Schedule or publish to Social Platforms such as
                      Youtube, Tiktok, Twitch, Facebook, Instagram, etc etc
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                    Unified Content Promotion
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Reschedule your content for promotions across social media
                      such as Facebook, Twitter, Linkedin, etc with Automate
                      Content Re-sharing with reminders.
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
            <img src="~/assets/imgs/content_icon2.png" alt="" class="" />
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
          Why wait any longer?
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
  name: 'ContentCreators',
  data: () => ({ user: {}, errors: {} }),
  head() {
    return {
      title: 'Contentre for content creators',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Access great features that turns your passion into a content business.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contentre for content creators',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Access great features that turns your passion into a content business.',
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