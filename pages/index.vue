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
                text-[20px]
                md:text-[40px] md:leading-[50px]
                lg:text-[60px] lg:leading-[80px]
                text-[#102A27]
                font-bold
                text-center
                lg:text-left
              "
            >
              Manage your freelance writing business in one place.
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
              Contentre helps freelance writers (content creators) organize
              their content, manage clients, create multiple portfolios,
              discover new opportunities, and lots more, all in one place.
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
                    type="email"
                    placeholder="Enter your email Address"
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
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="
              md:w-[500px]
              mr-16
              md:mr-24
              lg:mr-0 lg:mx-0 lg:w-[45%]
              relative
            "
          >
            <img
              src="~/assets/imgs/hero-img.png"
              alt="hero-image"
              class="w-full"
            />
            <div
              class="
                top-[100px]
                md:-left-0
                absolute
                md:top-[200px]
                lg:-left-[50px]
              "
            >
              <img
                src="~/assets/imgs/Default.png"
                alt=""
                class="w-[100px] md:w-[246px]"
              />
            </div>
            <div
              class="
                absolute
                top-[100px]
                md:top-[320px]
                -right-[60px]
                md:-right-[20px]
                drop-shadow-2xl
              "
            >
              <img
                src="~/assets/imgs/Overall Performance.png"
                alt=""
                class="w-[150px] md:w-[200px] lg:w-[280px]"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- ----------END OF HERO----------------------- -->
      <div class="w-full md:w-[80%] md:mx-auto">
        <ul class="flex justify-between items-center mt-5 md:mt-10">
          <li class="">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/imgs/eBay_Logo.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/imgs/FedEx_Logo.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/imgs/Google_Logo.png"
                alt=""
            /></a>
          </li>
          <li class="ml-4">
            <a href=""
              ><img
                class="w-[40px] md:w-[50px] lg:w-[60px]"
                src="~/assets/imgs/Hulu_Logo.png"
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
                src="~/assets/imgs/Quizlet_Logo.png"
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
          contents and writing business.
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
              Content Management
            </p>
            <p class="text-base text-[#859492]">
              You can organize all your contents and tracking progress with our
              Content Planner and Content Calendar.
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
              Using different plugins, you can promote your content across
              social media and auto-cross publishing on different platforms such
              as WordPress, HashNode, Medium, Strapi, etc
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
              Writers' Resume and Cover letter generator
            </p>
            <p class="text-base text-[#859492]">
              Generate industry standard writing resume and cover letter, that
              attracts hire.
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
              Create multiple portfolios to streamline their content for a
              particular client.
            </p>
          </div>
        </div>

        <div class="flex justify-center mt-12 mb-10">
          <button
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
          </button>
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
                Manage your content business for <br />
                free in less time
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
                    Add as many clients you're writing for as possible. You can
                    even add your own blog or platforms such as Medium,
                    Hashnode, Dev.to, etc
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
                    Enjoy modern writing business
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
                    Contentre gives your freelance writing business a touch of
                    excellence. Spend less time managing your business and more
                    time focused on your writing and getting more clients.
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
              Organize all your contents <br />
              in one place.
            </h4>
            <p class="text-[18px] leading-[28.44px] mt-5">
              No matter where your content is published on your clients website,
              you can easily keep track of your content published anywhere.
            </p>
            <div class="lg:max-w-[90%] mx-auto bg-white rounded-md mt-8">
              <div class="mx-8 mt-2 pt-2">
                <h6 class="mb-6 text-[10.4px] font-extrabold">
                  Christain Holmes
                </h6>
                <div class="relative rounded-md">
                  <img
                    src="~/assets/imgs/Rectangle_1084_(1).png"
                    alt=""
                    srcset=""
                    class="w-full"
                  />
                </div>
              </div>
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
            <div class="rounded-md mt-10 lg:mt-16">
              <img
                src="~/assets/imgs/Dashboard_1_(1).png"
                alt=""
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
              Create and Customize
              <br />
              your writing portfolio easily.
            </h4>
            <p class="text-[18px] leading-[28.44px] mt-5">
              Customizable auto-generated content portfolio. Customize your
              porfolio to best suit your brand or choose from thousands of
              templates.
            </p>
          </div>
          <div class="lg:w-[75%] mt-10 lg:mt-28">
            <img
              src="~/assets/imgs/Dashboard_1_(2).png"
              alt=""
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
              Unlock the benefits of modern writing
              <br />
              business.
            </h3>
          </div>
        </div>

        <!-- ---------------------------CARD GRID------------ -->
        <div class="mt-16 lg:mt-24 grid lg:grid-cols-3 gap-4">
          <!-- ==========TEAM=========== -->

          <div class="bg-[#286963] text-[#E7EAEA] py-8 rounded-lg">
            <div>
              <div class="border-b-2 border-[#FFFFFF33] px-8 pb-8">
                <div class="flex justify-between">
                  <div>
                    <small class="text-lg leading-[23.4px] text-white/70"
                      >Manage Your</small
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
                      Team
                    </h4>
                  </div>
                  <img
                    src="~/assets/imgs/people.svg"
                    alt=""
                    class="w-[50px] lg:w-[60px]"
                  />
                </div>
              </div>
              <div class="h-[420px] overflow-y-scroll">
                <div class="mt-5 px-8">
                  <p>
                    Introducing the teams feature, You can create different
                    teams and invite your writers to each team.
                  </p>
                  <p class="mt-5">
                    Managing your team of writers, editors, etc and numerous
                    clients just got easier. Save time managing teams and
                    clients and focus more on getting more clients.
                  </p>
                </div>

                <div class="mt-5 px-2">
                  <div class="px-5">
                    <p class="mt-4 font-medium text-white">Features</p>
                  </div>
                  <div class="flex mt-4">
                    <div class="mt-2">
                      <img
                        src="~/assets/imgs/polygon.png"
                        alt=""
                        class="w-[25px] lg:w-[30px]"
                      />
                    </div>
                    <p class="leading-[28.44px] ml-2">
                      Advanced Roles: You can create and assign advance roles to
                      writers, editors, etc and collaborate effectively with
                      Contentre.
                    </p>
                  </div>
                  <div class="flex mt-4">
                    <div class="mt-2">
                      <img
                        src="~/assets/imgs/polygon.png"
                        alt=""
                        class="w-[25px] lg:w-[30px]"
                      />
                    </div>
                    <p class="leading-[28.44px] ml-2">
                      Content Briefs: You can create and share content briefs
                      with writers within your team or share it publicly to
                      outsource to writers within Contentre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- =========CLIENTS================= -->
          <div class="bg-[#286963] text-[#E7EAEA] p-8 rounded-lg">
            <div class="border-b-2 border-[#FFFFFF33] pb-8">
              <div class="flex justify-between">
                <div>
                  <small class="text-lg leading-[23.4px] text-white/70"
                    >Manage Your</small
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
                    Clients
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
                The client feature manages all functionalities of a client
                including billings, proposals, invoices, payments
              </p>

              <p class="mt-4 font-medium text-white leading-[28.44px]">
                Billings
              </p>
              <p class="leading-[28.44px]">
                This shows your transactional information, and all your paid,
                declined, and pending transactions.
              </p>

              <p class="mt-4 font-medium text-white leading-[28.44px]">
                Proposals
              </p>
              <p class="leading-[28.44px]">
                The proposal feature allows freelancers to create writing
                proposals for their clients and a central place to manage all
                their writing proposals.
              </p>

              <p class="mt-4 font-medium text-white leading-[28.44px]">
                Invoices
              </p>
              <p class="leading-[28.44px]">
                The invoice feature allows writers to generate invoices using
                custom templates or create them manually using the drag and drop
                plugin.
              </p>
            </div>
          </div>

          <!-- ============PORTFOLIO================ -->
          <div class="bg-[#286963] text-[#E7EAEA] py-8 rounded-lg">
            <div>
              <div class="border-b-2 border-[#FFFFFF33] px-8 pb-8">
                <div class="flex justify-between">
                  <div>
                    <small class="text-lg leading-[23.4px] text-white/70"
                      >Manage Your</small
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
                      Porfolios
                    </h4>
                  </div>
                  <img
                    src="~/assets/imgs/briefcase.svg"
                    alt=""
                    class="w-[50px] lg:w-[60px]"
                  />
                </div>
              </div>
              <div class="h-[420px] overflow-y-scroll">
                <div class="mt-5 px-8">
                  <p class="leading-[28.44px]">
                    Stop sending gigantic portfolio to your clients. Streamline
                    your portfolio to a particular clients needs with our
                    Multiple Portfolio Feature.
                  </p>
                </div>

                <div class="mt-5 px-2">
                  <div class="px-5">
                    <p class="mt-4 font-medium text-white">Features</p>
                  </div>
                  <div class="flex mt-4">
                    <div class="mt-2">
                      <img
                        src="~/assets/imgs/polygon.png"
                        alt=""
                        class="w-[25px] lg:w-[30px]"
                      />
                    </div>
                    <p class="leading-[28.44px] ml-2">
                      Default Portfolio: You can use our default template to
                      create your writing portfolio.
                    </p>
                  </div>

                  <div class="flex mt-5">
                    <div class="mt-2">
                      <img
                        src="~/assets/imgs/polygon.png"
                        alt=""
                        class="w-[25px] lg:w-[30px]"
                      />
                    </div>
                    <p class="leading-[28.44px] ml-2">
                      Sample Portfolio: You can choose from an array of
                      customized templates to represent your portfolio.
                    </p>
                  </div>
                  <div class="flex mt-5">
                    <div class="mt-2">
                      <img
                        src="~/assets/imgs/polygon.png"
                        alt=""
                        class="w-[25px] lg:w-[30px]"
                      />
                    </div>
                    <p class="leading-[28.44px] ml-2">
                      Customized Portfolio: You can customize your portfolio
                      with your brand represent your portfolio.
                    </p>
                  </div>
                </div>
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
                      Get set up for success with all the writing business and
                      videos you need to set up your
                    </p>
                  </div>
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
                      Hire a Certified Specialist to help you with your
                      Contentre account
                    </p>
                  </div>
                  <div class="flex items-cente ml-3 md:ml-6">
                    <p class="text-[15px] text-[#286963] ml-5 lg:ml-0">
                      Join Us
                    </p>
                    <div class="ml-4">
                      <img src="~/assets/imgs/arrow-right-green1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <!-- ---======right-side=============== -->

            <div class="bg-white p-4 rounded-lg lg:mt-10 border">
              <div class="bg-[#F9FCF1] px-3 py-3 rounded-md">
                <p class="text-[#232C2B] font-medium text-[20px]">
                  The Contentre Community for Writers
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
                  <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                    <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                    <div class="ml-4">
                      <img src="~/assets/imgs/arrow-right-green1.png" alt="" />
                    </div>
                  </div>
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
                  <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                    <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                    <div class="ml-4">
                      <img src="~/assets/imgs/arrow-right-green1.png" alt="" />
                    </div>
                  </div>
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
                      Explore content for small business owners
                    </p>
                  </div>
                  <div class="flex items-center ml-4 md:ml-6 lg:ml-12">
                    <p class="text-[#286963] ml-5 lg:ml-0">Join Us</p>
                    <div class="ml-4">
                      <img src="~/assets/imgs/arrow-right-green1.png" alt="" />
                    </div>
                  </div>
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
                <a href="" class="flex">
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

  head() {
    return {
      title: 'Manage your freelance writing business from one place',
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
