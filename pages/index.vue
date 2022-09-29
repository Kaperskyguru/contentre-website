<template>
  <span>
    <section class="px-8 md:px-8">
      <!-- ----------Hero----------- -->
      <div class="bg-[#4FD1C50D] px-4 lg:pl-16 lg:pr-6 py-20 mt-9 rounded-md">
        <div
          class="flex lg:flex-row flex-col-reverse items-center lg:items-start"
        >
          <div class="mt-14 xl:w-[55%]">
            <h1
              class="
                text-[23px]
                md:text-[30px] md:leading-[40px]
                lg:text-[50px] lg:leading-[70px]
                text-[#102A27]
                font-bold
                text-center
                lg:text-left
              "
            >
              Portfolio Builder <br />for Tech Writers.
            </h1>

            <p
              class="
                text-[14px] text-[#54605F]
                md:text-base
                font-medium
                leading-relaxed
                lg:w-[75%]
                mt-5
                text-center
                lg:text-left
              "
            >
              Grow your technical writing career from one place. Organize all
              your content, manage clients, share samples, and publish your work
              to various places, all on Contentre.
            </p>
            <div>
              <div
                class="
                  mt-16
                  md:mt-8 md:flex md:justify-center
                  lg:justify-start
                  w-full
                  mx-auto
                  md:flex md:justify-between md:w-full
                "
              >
                <div class="w-full">
                  <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email address"
                    class="
                      border border-[#286963]
                      text-[#286963]
                      py-[12px]
                      w-full
                      px-[18px]
                      md:py-[16px] md:px-[24px]
                      font-medium
                      w-full
                      rounded-md
                      outline-none
                      text-[16px]
                      bg-transparent
                      placeholder:text-[#286963]
                    "
                  />
                </div>
                <div class="w-full">
                  <a
                    :href="`https://app.contentre.io/auth/register?source=home_banner&email=${email}`"
                  >
                    <HomeButton
                      class="
                        py-[12px]
                        px-[16px]
                        md:py-[16px] md:px-[24px] md:ml-[16px]
                        lg:ml-[10px]
                        text-[16px]
                        mt-4
                        md:mt-0
                        w-full
                        md:w-fit
                      "
                      >Get Started. It's Free</HomeButton
                    ></a
                  >
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="pt-2 text-[#286963]">* No Credit Card Required</div>
                <div class="pt-2 text-[#286963]">* Cancel anytime</div>
              </div>
            </div>

            <section>
              <div class="flex justify-start">
                <div class="max-w-3xl">
                  <div class="block p-6 rounded-lg shadow-lg bg-white mt-10">
                    <div class="md:flex md:flex-row">
                      <Avatar
                        size="large"
                        src="https://res.cloudinary.com/kaperskydisk/image/upload/v1654025159/contentre/Founders/ge0hlhast4qdsis2jzht.jpg"
                        name="Solomon Eseme"
                      >
                      </Avatar>

                      <div class="md:ml-6">
                        <blockquote
                          class="
                            font-medium font-gilroy
                            text-lg text-[#54605F]
                            mb-6
                          "
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="quote-left"
                            class="w-6 pr-2 inline-block"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                            ></path>
                          </svg>
                          I use Contentre to generate multiple samples and
                          portfolios with content rules set to what my clients
                          want. It also helps me organize all my technical
                          writing gigs and publish new stuff across different
                          platforms from one place.
                        </blockquote>
                        <p class="font-semibold text-xl mb-2 text-[#102A27]">
                          Solomon Eseme
                        </p>
                        <p class="font-light text-[#102A27] mb-0">
                          Senior Technical Writer @ Kinsta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="md:w-full lg:mr-0 lg:mx-0 lg:w-[45%]">
            <img
              src="https://res.cloudinary.com/kaperskydisk/image/upload/v1656685280/contentre/assets/hero.png"
              alt="hero-image"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <!-- ----------END OF HERO----------------------- -->
      <div class="w-full md:w-[80%] md:mx-auto">
        <h3 class="text-center text-2xl text-[#102A27] pt-5">
          Loved by technical writers at these world-class organizations:
        </h3>
        <ul class="flex justify-between items-center mt-5 md:mt-10">
          <li class="">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/img/hashnode.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/img/kinsta.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/img/logrocket-blog-logo.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/img/Medium-Logo.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/imgs/LinkedIn-Logo.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/images/5f6fd5bb-6075-4f30-bd6b-379298cc8447.png"
                alt=""
            /></a>
          </li>
        </ul>
      </div>
    </section>
    <!-- --------------------END OF--HERO SECTION-------------------------- -->

    <!-- =================================FEATURES SECTION======================================== -->

    <section class="mt-20 px-8">
      <div class="text-center">
        <h3
          class="
            font-medium
            text-2xl
            md:text-4xl md:leading-snug
            lg:text-5xl
            text-[#102A27]
            lg:leading-[62.4px]
          "
        >
          Save time & gain control over your <br />
          technical writing career
        </h3>
        <p
          class="
            text-[20px]
            md:text-[28px] md:leading-loose
            lg:text-[32px]
            leading-[47px]
            text-[#859492]
            font-medium
          "
        >
          Enjoy these features and more
        </p>
      </div>
      <div class="mt-10 w-[80%] md:w-[90%] lg:w-[50%] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5 pt-">
          <div
            class="
              text-center
              bg-[#FCFCFC]
              border border-[#EFF1F1]
              p-10
              rounded-md
            "
          >
            <div class="flex justify-center mb-4">
              <img src="~/assets/imgs/document-text.png" alt="" class="" />
            </div>
            <p class="text-2xl leading-[37px] mb-4 text-[#102A27]">
              Content Hub
            </p>
            <p class="text-base text-[#859492]">
              Sort, filter and organize all your content into categories,
              niches, topics and tags and draw insightful analytics -- published
              anywhere.
            </p>
          </div>
          <div
            class="
              text-center
              bg-[#FCFCFC]
              border border-[#EFF1F1]
              p-10
              rounded-md
            "
          >
            <div class="flex justify-center mb-4">
              <img src="~/assets/imgs/document-text.png" alt="" class="" />
            </div>
            <p class="text-2xl leading-[37px] mb-4 text-[#102A27]">
              Portfolio Management
            </p>
            <p class="text-base text-[#859492]">
              Create multiple personalized portfolios to streamline their
              content to a particular client, category, niche, topic using
              thousands of template or drag and drop to build your personalized
              portfolio.
            </p>
          </div>
          <div
            class="
              text-center
              bg-[#FCFCFC]
              border border-[#EFF1F1]
              p-10
              rounded-md
            "
          >
            <div class="flex justify-center mb-4">
              <img src="~/assets/imgs/send-2.png" alt="" class="" />
            </div>
            <p class="text-2xl leading-[37px] mb-4 text-[#102A27]">
              Content Publishing
            </p>
            <p class="text-base text-[#859492]">
              You can promote your content across social media and auto-publish
              on different platforms such as WordPress, HashNode, Medium,
              Strapi, DevTo with a single click.
            </p>
          </div>
          <div
            class="
              text-center
              bg-[#FCFCFC]
              border border-[#EFF1F1]
              p-10
              rounded-md
            "
          >
            <div class="flex justify-center mb-4">
              <img src="~/assets/imgs/document-text.png" alt="" class="" />
            </div>
            <p class="text-2xl leading-[37px] mb-4 text-[#102A27]">
              Proposals and Cover letter generator
            </p>
            <p class="text-base text-[#859492]">
              Generate industry standard writing proposal and cover letter, that
              attracts results.
            </p>
          </div>
        </div>

        <div class="flex justify-center mt-12 mb-10">
          <nuxt-link
            to="/product"
            class="
              bg-[#286963]
              py-[16px]
              px-[24px]
              text-white
              rounded-md
              text-
              base
            "
          >
            View more features
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- =================================FEATURES SECTION======================================== -->

    <!-- ------------------------------------------TESTIMONIAL------------------------ -->
    <section class="bg-[#FAFAFA] mt-20">
      <Testimonial />
    </section>
    <!-- -------------------------------END---OF--------TESTIMONIAL------------------------ -->

    <!-- -------------------------------------HOW IT WORKS---------------------------- -->

    <section class="mt-20">
      <div class="pb-10 lg:pt-20">
        <div class="lg:ml-36">
          <div class="lg:flex lg:justify-around">
            <div class="lg:w-[38%] text-center lg:text-left">
              <h2
                class="
                  text-[#102A27] text-[40px]
                  lg:text-[64px]
                  font-medium
                  leading-[76.5px]
                "
              >
                How it works.
              </h2>
              <p
                class="
                  text-[#859492] text-[24px]
                  md:text-[28px]
                  lg:text-[32px] lg:leading-[46.24px]
                  mt-2
                  lg:mt-5
                "
              >
                Start managing your freelance technical writing for free in less
                time.
              </p>
            </div>
            <div class="lg:w-[62%] px-16 md:px-28 lg:mx-0 mt-10 lg:mt-0">
              <div class="flex justify-center">
                <div>
                  <img
                    src="~/assets/imgs/Frame_1044.png"
                    alt=""
                    srcset=""
                    class="w-[100px]"
                  />
                </div>
                <div class="ml-10">
                  <p
                    class="
                      text-[#102A27] text-xl
                      md:text-2xl
                      leading-[26px]
                      font-medium
                    "
                  >
                    Add your writing clients
                  </p>
                  <p
                    class="
                      text-[15px]
                      lg:w-[50%]
                      text-[#888888]
                      mt-3
                      leading-[24px]
                    "
                  >
                    Add as many writing clients as possible. You can even add
                    your own blog or platforms such as Medium, HashNode, Dev.to,
                    etc
                  </p>
                </div>
              </div>
              <div class="flex mt-10">
                <div>
                  <img
                    src="~/assets/imgs/Frame_1043.png"
                    alt=""
                    srcset=""
                    class="w-[100px]"
                  />
                </div>
                <div class="ml-10">
                  <p
                    class="
                      text-[#888888] text-xl
                      md:text-2xl
                      leading-[26px]
                      font-medium
                    "
                  >
                    Add/Paste link to your contents
                  </p>
                  <p
                    class="
                      text-[15px]
                      lg:w-[50%]
                      text-[#888888]
                      mt-3
                      leading-[24px]
                    "
                  >
                    Copy and paste the link to your content anywhere published
                    and let us do the magic. Also, you can create the content
                    right from Contentre.
                  </p>
                </div>
              </div>
              <div class="flex mt-10">
                <div>
                  <img
                    src="~/assets/imgs/Frame_1045.png"
                    alt=""
                    srcset=""
                    class="w-[100px]"
                  />
                </div>
                <div class="ml-10">
                  <p
                    class="
                      text-[#888888] text-xl
                      md:text-[24px]
                      leading-[26px]
                      font-medium
                    "
                  >
                    Enjoy modern technical writing career
                  </p>
                  <p
                    class="
                      text-[15px]
                      lg:w-[50%]
                      w-[90%]
                      text-[#888888]
                      mt-3
                      leading-[24px]
                    "
                  >
                    Contentre gives your freelance technical writing career a
                    touch of excellence. Spend less time managing your freelance
                    technical writing career and more time focused on your
                    writing and getting more clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ---------------------------------END OF----HOW IT WORKS---------------------------- -->

    <!-- ----------------------------   CUSTOMIZE PORTFOLIO------------------------------- -->

    <section class="mt-20">
      <div class="max-w-[80%] mx-auto mb-10">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-5">
          <div class="bg-[#FEF8FD] px-5 lg:px-10 pt-10 rounded-md">
            <h4
              class="
                text-[#102A27]
                lg:font-medium
                text-[20px]
                font-bold
                lg:text-[32px] lg:leading-[44.8px]
              "
            >
              Organize all your content <br />
              in one place.
            </h4>
            <p class="text-[18px] leading-[28.44px] mt-5">
              No matter where your content is published on your clients website,
              you can easily keep track, arrange, sort, filter and gain
              insightful analytics of your content published anywhere.
            </p>
            <div class="rounded-md mt-10 lg:mt-20">
              <img
                src="https://res.cloudinary.com/kaperskydisk/image/upload/v1656635751/contentre/assets/contents.gif"
                alt="Organized Content Overview"
                srcset=""
                class="w-full block object-cover"
              />
            </div>
          </div>
          <div class="bg-[#DCF6F3] px-5 lg:px-10 pt-10 rounded-md">
            <h4
              class="
                text-[#102A27]
                lg:font-medium
                text-[20px]
                font-bold
                lg:text-[32px] lg:leading-[44.8px]
              "
            >
              Comprehensive Content
              <br />
              Analytics, Insights and Reporting
            </h4>
            <p class="text-[18px] leading-[28.44px] mt-5">
              Gain comprehensive and valuable insights of your contents
              published anywhere. Take charge of your content analytics and
              reporting across your clients.
            </p>
            <div class="rounded-full mt-10 lg:mt-16">
              <img
                src="https://res.cloudinary.com/kaperskydisk/image/upload/v1656636610/contentre/assets/analytics.gif"
                alt="Analytics Overview"
                srcset=""
                class="w-full block object-cover"
              />
            </div>
          </div>
        </div>
        <div class="lg:flex bg-[#EAF9FE] mt-4 rounded-md">
          <div class="lg:ml-10 mx-4 pt-6 lg:w-[60%]">
            <h4
              class="
                text-[#102A27]
                lg:font-medium
                text-[20px]
                font-bold
                lg:text-[32px] lg:leading-[44.8px]
              "
            >
              Create and Customize your
              <br />
              Personalized writing portfolio easily.
            </h4>
            <p class="text-[18px] leading-[28.44px] mt-5">
              Customizable auto-generated content portfolio. Customize your
              portfolio to best suit your brand or choose from thousands of
              templates.
            </p>
          </div>
          <div class="lg:w-[75%] mt-10 lg:mt-28">
            <img
              src="https://res.cloudinary.com/kaperskydisk/image/upload/v1656635105/contentre/assets/portfolio.gif"
              alt="Creating Portfolio"
              srcset=""
              class="w-full"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- ---------------------------- END OF CUSTOMIZE PORTFOLIO------------------------------- -->

    <!-- ---------------------------------BENEFITS SECTION----------------------------------------- -->
    <section class="mt-20 mb-10">
      <div class="max-w-[80%] mx-auto">
        <div class="flex justify-center">
          <div>
            <div class="flex justify-center">
              <img
                src="~/assets/imgs/shield-security@2x.png"
                alt=""
                class="w-[80px] lg:w-[110px]"
              />
            </div>
            <h3
              class="
                text-3xl
                lg:text-5xl lg:leading-[62.4px]
                text-[#102A27] text-center
                mt-8
                lg:mt-5
              "
            >
              Unlock the benefits of modern technical writing
              <br />
              career.
            </h3>
          </div>
        </div>

        <!-- ---------------------------CARD GRID------------ -->
        <div class="mt-16 lg:mt-24 grid lg:grid-cols-3 gap-4">
          <!-- ==========TEAM=========== -->

          <div class="bg-[#286963] text-[#E7EAEA] p-8 rounded-lg">
            <div>
              <div class="border-b-2 border-[#FFFFFF33] px-8 pb-8">
                <div class="flex justify-between">
                  <div>
                    <small class="text-lg leading-[23.4px] text-white/70"
                      >Organize Your</small
                    >
                    <h4
                      class="
                        text-white
                        font-medium
                        text-3xl
                        lg:text-5xl lg:leading-[62.4px]
                        mt-1
                      "
                    >
                      Content
                    </h4>
                  </div>
                  <img
                    src="~/assets/imgs/people.svg"
                    alt=""
                    class="w-[50px] lg:w-[60px]"
                  />
                </div>
              </div>
              <div class="mt-5">
                <p>
                  No matter where your content is published on your clients
                  website, you can easily keep track of your content published
                  anywhere in one place.
                </p>

                <p class="mt-4 font-medium text-white leading-[28.44px]">
                  Manage categories:
                </p>
                <p class="leading-[28.44px]">
                  Create, update, delete, and assign categories to your content
                  to help organize them. Gain insightful analytics of each
                  categories.
                </p>

                <p class="mt-4 font-medium text-white leading-[28.44px]">
                  Manage niches and topics:
                </p>
                <p class="leading-[28.44px]">
                  Create, update, delete, and assign niches to your content to
                  help organize them. Gain insightful analytics of each niches.
                </p>

                <p class="mt-4 font-medium text-white leading-[28.44px]">
                  Manage tags:
                </p>
                <p class="leading-[28.44px]">
                  Create, update, delete, and assign tags to your content to
                  help organize them. Gain insightful analytics of each tags.
                </p>
              </div>
            </div>
          </div>

          <!-- =========PORTFOLIO================= -->
          <div class="bg-[#286963] text-[#E7EAEA] p-8 rounded-lg">
            <div class="border-b-2 border-[#FFFFFF33] pb-8">
              <div class="flex justify-between">
                <div>
                  <small class="text-lg leading-[23.4px] text-white/70"
                    >Manage Multiple Personalized</small
                  >
                  <h4
                    class="
                      text-white
                      font-medium
                      text-3xl
                      lg:text-5xl lg:leading-[62.4px]
                      mt-1
                    "
                  >
                    Portfolios
                  </h4>
                </div>
                <img
                  src="~/assets/imgs/briefcase.svg"
                  alt=""
                  class="w-[50px] lg:w-[60px]"
                />
              </div>
            </div>
            <div class="mt-5">
              <p class="leading-[28.44px]">
                Stop sending gigantic portfolio to your clients. Streamline your
                portfolio to a particular clients needs with our Multiple and
                Personalized Portfolio Feature.
              </p>

              <p class="mt-4 font-medium text-white leading-[28.44px]">
                Use default template
              </p>
              <p class="leading-[28.44px]">
                Create your portfolio in less than a minute our default template
                to create your technical writing portfolio.
              </p>

              <p class="mt-4 font-medium text-white leading-[28.44px]">
                Use Customized Templates
              </p>
              <p class="leading-[28.44px]">
                Choose from hundreds of customized portfolio crafted to convert
                leads to clients.
              </p>

              <p class="mt-4 font-medium text-white leading-[28.44px]">
                Use Drag and Drop Portfolio Creator
              </p>
              <p class="leading-[28.44px]">
                Customized a personalized portfolio in less than 5 minutes with
                our Portfolio Customizer.
              </p>
            </div>
          </div>

          <!-- ============GET HIRED================ -->
          <div class="bg-[#286963] text-[#E7EAEA] p-8 rounded-lg">
            <div>
              <div class="border-b-2 border-[#FFFFFF33] px-8 pb-8">
                <div class="flex justify-between">
                  <div>
                    <small class="text-lg leading-[23.4px] text-white/70"
                      >Get</small
                    >
                    <h4
                      class="
                        text-white
                        font-medium
                        text-3xl
                        lg:text-5xl lg:leading-[62.4px]
                        mt-1
                      "
                    >
                      Results
                    </h4>
                  </div>
                  <img
                    src="~/assets/imgs/user-octagon.svg"
                    alt=""
                    class="w-[50px] lg:w-[60px]"
                  />
                </div>
              </div>
              <div class="mt-5">
                <p class="leading-[28.44px]">
                  Your portfolio is listed in our technical writers' directory
                  and communities.
                  <!-- where recruiters source and hire technical writers. -->
                </p>
                <p class="mt-4 font-medium text-white leading-[28.44px]">
                  Technical Writers directory
                </p>
                <p class="leading-[28.44px]">
                  Get your portfolio listed in our technical writers' directory
                  <!-- and let clients reach out to your directly. -->
                </p>

                <p class="mt-4 font-medium text-white leading-[28.44px]">
                  Join Technical Writing Communities
                </p>
                <p class="leading-[28.44px]">
                  Join hundreds of technical writers to learn the latest update
                  in technical writing and stay upto date.
                </p>

                <p class="mt-4 font-medium text-white leading-[28.44px]">
                  Generate Proposals/Cover letter
                </p>
                <p class="leading-[28.44px]">
                  Generate proposals and cover letters that get you results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ---------------------------CARD GRID------------ -->

      <!-- </div> -->
    </section>
    <!-- -------------------------------END OF--BENEFITS SECTION----------------------------------------- -->

    <!-- ====================================NEW FEATURES SECTION================================== -->

    <section class="mt-20 mb-10 bg-[#FDFDFD]">
      <div class="max-w-[80%] mx-auto pt-4 pb-10">
        <div class="grid lg:grid-cols-2 gap-5">
          <div class="lg:pt-10">
            <h4
              class="
                lg:text-5xl
                text-4xl
                font-medium
                lg:leading-[62.4px]
                text-[#102A27]
              "
            >
              What's new in <br />
              Contentre?
            </h4>

            <div class="bg-white px-2 py-2 rounded-lg mt-14 border">
              <div class="bg-[#F1FCFC] px-3 py-4 rounded-md">
                <p class="text-[#232C2B] font-medium">Resources</p>
              </div>
              <div class="p-2 mb-1 mt-5">
                <small
                  class="
                    text-[12px]
                    leading-[18.96px]
                    text-[#888888]
                    ml-8
                    md:ml-12
                    lg:ml-7
                  "
                  >WEBINAR</small
                >
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/polygon2.png"
                        alt=""
                        class="w-8 lg:w-4"
                      />
                    </div>
                    <p class="text-[15px] ml-3 text[#102A27]">
                      Join our next webinar to learn our system and get
                      inspiration and ideas
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/channel/UCECTWjjj21fa2bNQ07PKE3A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="flex items-cente ml-3 md:ml-6">
                      <p class="text-[15px] text-[#286963] ml-5 lg:ml-0">
                        Join Us
                      </p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                          class=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="p-2 mb-2">
                <small
                  class="
                    text-[12px]
                    leading-[18.96px]
                    text-[#888888]
                    ml-8
                    md:ml-12
                    lg:ml-7
                  "
                  >HELP CENTER</small
                >
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/polygon2.png"
                        alt=""
                        class="w-8 lg:w-4"
                      />
                    </div>
                    <p class="text-[15px] ml-3 text[#102A27]">
                      Get set up for success with your technical writing career
                      with our help center
                    </p>
                  </div>
                  <a
                    href="https://blog.contentre.io/category/help?source=home_help_center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="flex items-cente ml-3 md:ml-6">
                      <p class="text-[15px] text-[#286963] ml-5 lg:ml-0">
                        Join Us
                      </p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                          class=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="p-2 mb-2">
                <small
                  class="
                    text-[12px]
                    leading-[18.96px]
                    text-[#888888]
                    ml-8
                    md:ml-12
                    lg:ml-7
                  "
                  >REQUEST A CERTIFIED CONTENTRE SPECIALIST</small
                >
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/polygon2.png"
                        alt=""
                        class="w-8 lg:w-4"
                      />
                    </div>
                    <p class="text-[15px] ml-3 text[#102A27]">
                      Request a Certified Specialist to help you with your
                      Contentre account
                    </p>
                  </div>
                  <a href="/contact#book_a_demo">
                    <div class="flex items-cente ml-3 md:ml-6">
                      <p class="text-[15px] text-[#286963] ml-5 lg:ml-0">
                        Contact Us
                      </p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- <div class="p-2 mb-2">
                <small
                  class="
                    text-[12px]
                    leading-[18.96px]
                    text-[#888888]
                    ml-8
                    md:ml-12
                    lg:ml-7
                  "
                  >HIRE A FREELANCE WRITER</small
                >
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/polygon2.png"
                        alt=""
                        class="w-8 lg:w-4"
                      />
                    </div>
                    <p class="text-[15px] ml-3 text[#102A27]">
                      Hire a Certified Technical Writers to help you with your
                      Technical Content Marketing.
                    </p>
                  </div>
                  <a href="#">
                    <div class="flex ml-3 md:ml-6">
                      <nuxt-link to="/hiring">
                        <p class="text-[15px] text-[#286963] ml-5 lg:ml-0">
                          Hire Now
                        </p>
                      </nuxt-link>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div> -->
            </div>
          </div>

          <div>
            <!-- ---======right-side=============== -->

            <div class="bg-white p-4 rounded-lg lg:mt-10 border">
              <div class="bg-[#F9FCF1] px-3 py-3 rounded-md">
                <p class="text-[#232C2B] font-medium text-[20px]">
                  The Contentre Community of Technical Writers
                </p>
              </div>
              <div class="p-2">
                <div class="mt-5">
                  <div class="flex items-center">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/Facebook.png"
                        alt=""
                        class="w-14 md:w-8"
                      />
                    </div>
                    <p class="ml-4 text[#102A27] text-[15px]">
                      Collaborate with others in your industry in our Facebook
                      Community
                    </p>
                  </div>
                  <a
                    href="http://facebook.com/contentreio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                      <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="p-2">
                <div>
                  <div class="flex items-center">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/Instagram.png"
                        alt=""
                        class="w-8"
                      />
                    </div>
                    <p class="ml-4 text[#102A27] text-[15px]">
                      Get a behind the scenes look into what makes us.
                    </p>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                      <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="p-2 mb-5">
                <div>
                  <div class="flex items-center">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/LinkedIN.png"
                        alt=""
                        class="w-8"
                      />
                    </div>
                    <p class="ml-4 text[#102A27] text-[15px]">
                      Explore content for freelance technical writers
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/contentre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                      <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="p-2 mb-5">
                <div>
                  <div class="flex items-center">
                    <div class="pt-2">
                      <img
                        src="~/assets/imgs/Twitter_black_(1).png"
                        alt=""
                        class="w-8"
                      />
                    </div>
                    <p class="ml-4 text[#102A27] text-[15px]">
                      Explore freelance technical writing tweets
                    </p>
                  </div>
                  <a
                    href="https://twitter.com/contentreio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                      <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                      <div class="ml-4">
                        <img
                          src="~/assets/imgs/arrow-right-green1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg mt-5 border">
              <div class="bg-[#FCF1FC] px-3 py-3 rounded-md">
                <p class="text-[#232C2B] font-medium">New Features & Updates</p>
              </div>
              <div class="p-2 mt-4">
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img src="~/assets/imgs/polygon2.png" alt="" />
                    </div>
                    <p class="ml-4 text-[15px] text-[#102A27]">New feature 1</p>
                  </div>
                  <small class="text-[#888888] ml-7">April 24, 2022</small>
                </div>
              </div>
              <div class="p-2">
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img src="~/assets/imgs/polygon2.png" alt="" />
                    </div>
                    <p class="ml-4 text-[15px] text-[#102A27]">New feature 2</p>
                  </div>
                  <small class="text-[#888888] ml-7">April 24, 2022</small>
                </div>
              </div>
              <div class="p-2 mb-5">
                <div>
                  <div class="flex">
                    <div class="pt-2">
                      <img src="~/assets/imgs/polygon2.png" alt="" />
                    </div>
                    <p class="ml-4 text-[15px] text-[#102A27]">New feature 3</p>
                  </div>
                  <small class="text-[#888888] ml-7">April 24, 2022</small>
                </div>
              </div>
              <div>
                <a href="http://eepurl.com/h3BIMD" target="_blank" class="flex">
                  <p class="text-[14px] text-[#286963]">
                    Subscribe to all our new updates
                  </p>
                  <img
                    src="~/assets/imgs/arrow-right-green1.png"
                    alt=""
                    class="ml-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====================================NEW FEATURES SECTION================================== -->

    <!-- ==============================FORM SECTION============================================================== -->

    <SpreadSheet />
    <!-- ==========================END OF====FORM SECTION============================================================== -->
  </span>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
    email: '',
  }),
  head() {
    return {
      title: 'Grow your technical writing career from one place.',
    }
  },

  computed: {
    BASE_URL() {
      return process.env.APP_URL ?? 'https://app.contentre.io'
    },
  },
}
</script>

<style>
.list-none > li {
  margin-bottom: 10px;
}

.list-none,
li > a:hover {
  color: #4fd1c5;
}
</style>
