<template>
  <main>
    <div id="hero" class="h-full">
      <div class="relative bg-teal-100">
        <div
          class="
            absolute
            inset-0
            bg-brand-section-light
            rounded-b-3xl
            lg:rounded-b-6xl
          "
        ></div>
        <div class="relative container px-4 mx-auto">
          <div class="lg:flex items-center">
            <section>
              <div class="text-black">
                <div
                  class="
                    container
                    mx-auto
                    flex flex-col
                    md:flex-row
                    items-center
                  "
                >
                  <div
                    class="
                      flex flex-col
                      w-full
                      lg:w-1/2
                      justify-center
                      items-start
                      p-8
                    "
                  >
                    <h1
                      class="
                        text-4xl
                        md:text-5xl
                        mb-10
                        text-black
                        font-bold
                        tracking-loose
                      "
                    >
                      Manage all your contents from one place
                    </h1>
                    <p class="text-sm md:text-base text-black-50 mb-10">
                      Access your contents, monitor your content analytics in
                      real time, create and customize your writing portfolio
                      across your clients. Spend less time using spreadsheets
                      and more time focused on your writing and getting more
                      clients.
                    </p>

                    <h1>Be the first to know when we launch.</h1>
                    <form
                      ref="form"
                      class="mt-4 w-full"
                      action="https://profaily.us1.list-manage.com/subscribe/post?u=731fe09da3abfe832f8122f69&amp;id=62eda625eb"
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
                      <button
                        :href="`${APP_URL}/auth/register`"
                        class="form-btn text-white rounded shadow py-3 px-12"
                        @click.prevent="onClick"
                      >
                        Notify me
                      </button>
                    </form>
                  </div>
                  <div
                    class="
                      px-8
                      md:mb-0 md:mt-0
                      ml-0
                      md:ml-12
                      lg:w-1/2
                      justify-center
                    "
                  >
                    <div
                      class="
                        grid grid-flow-col grid-rows-2 grid-cols-3
                        gap-8
                        -mb-64
                        absolute-imgtop
                      "
                    >
                      <div>
                        <img
                          class="rounded-full"
                          src="~/assets/img/img1.svg"
                          alt="img1"
                        />
                      </div>
                      <div class="col-start-2">
                        <img
                          class="rounded-b-full"
                          src="~/assets/img/img2.svg"
                          alt="img2"
                        />
                      </div>
                      <div class="-mt-32">
                        <img
                          class="rounded-t-full"
                          src="~/assets/img/img3.svg"
                          alt="img3"
                        />
                      </div>
                      <div class="-mt-64">
                        <img
                          class="rounded-full"
                          src="~/assets/img/img4.svg"
                          alt="img4"
                        />
                      </div>
                      <div class="row-start-1 col-start-3 col-span-2 mt-32">
                        <img
                          class="rounded-full"
                          src="~/assets/img/img5.svg"
                          alt="img5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- end of first page -->

    <!-- second page -->
    <section class="">
      <div class="container px-5 py-16 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-black">
            Save Time & Gain Control Over Your Contents <br />
          </h1>
          <h2 class="text-gray font-medium title-font">Published. Anywhere.</h2>
        </div>
        <div
          class="
            flex flex-col
            items-center
            mx-auto
            flex-wrap
            lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between
          "
        >
          <div
            class="
              w-full
              max-w-sm
              mt-6
              lg:mt-8
              bg-gray-100
              rounded
              shadow-lg
              p-3
              lg:p-8 lg:mx-4
            "
          >
            <div class="my-2 font-extrabold tracking-wide mb-10">
              All your contents across different clients in one place
            </div>
            <div class="text-sm">
              No matter where your content is published on your clients website,
              you can easily keep track of your content.
            </div>
          </div>

          <div
            class="
              w-full
              max-w-sm
              mt-8
              bg-gray-100
              rounded
              shadow-lg
              p-3
              lg:p-8 lg:mx-4
            "
            style="background: #fef8fd"
          >
            <div class="my-2 font-extrabold tracking-wide mb-10">
              Comprehensive Content Analytics, Insights and Reporting
            </div>
            <div class="text-sm">
              Gain comprehensive and valuable insights of your contents
              published anywhere. Take charge of your content analytics and
              reporting across your clients.
            </div>
          </div>

          <div
            class="
              w-full
              max-w-sm
              mt-8
              bg-gray-100
              rounded
              shadow-lg
              p-3
              lg:p-8 lg:mx-4
            "
            style="background: #fef3e3"
          >
            <div class="my-2 font-extrabold tracking-wide mb-10">
              Manage your Team and Client from one place
            </div>
            <div class="text-sm">
              Managing your team of writers, editors, etc and numerous clients
              just got easier. Save time managing teams and clients and focus
              more on getting more clients.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of second page -->

    <!-- third page -->

    <div>
      <div
        class="
          relative
          mb-12
          bg-teal-600
          text-white
          px-5
          sm:px-10
          md:px-20
          lg:px-10
          xl:px-20
          py-8
        "
        style="background: #286963"
      >
        <div class="relative container px-4 mx-auto">
          <div class="lg:flex items-center">
            <div class="max-w-screen-xl mx-auto">
              <div class="pt-10">
                <h3 class="font-black text-xl text-center leading-8">
                  Manage your contents for free in less time
                </h3>
              </div>
              <div
                class="
                  flex flex-col
                  text-gray-300
                  items-center
                  flex-wrap
                  lg:flex-row
                  lg:items-stretch
                  lg:flex-no-wrap
                  lg:justify-between
                "
              >
                <div
                  class="w-full max-w-sm mt-6 text-center pb-12 px-12 space-y-2"
                >
                  <div class="mt-4 font-extrabold" style="font-size: 4rem">
                    1
                  </div>
                  <div class="mt-4 text-xl tracking-wide">
                    Add your writing clients.
                  </div>
                  <div class="text-sm">
                    Add as many clients you're writing for as possible. You can
                    even add your own blog or platforms such as Medium,
                    Hashnode, Dev.to, etc
                  </div>
                </div>

                <div
                  class="w-full max-w-sm mt-6 text-center pb-12 px-12 space-y-2"
                >
                  <div class="mt-4 font-extrabold" style="font-size: 4rem">
                    2
                  </div>
                  <div class="mt-4 text-xl tracking-wide">
                    Add/Paste link to your contents
                  </div>
                  <div class="text-sm">
                    Copy and paste the link to your content anywhere published
                    and let us do the magic. Also, you can create the content
                    right from Contentre.
                  </div>
                </div>

                <div
                  class="w-full max-w-sm mt-6 text-center pb-12 px-12 space-y-2"
                >
                  <div class="mt-4 font-extrabold" style="font-size: 4rem">
                    3
                  </div>
                  <div class="mt-4 text-xl tracking-wide">
                    Enjoy real time analytics and portfolio
                  </div>
                  <div class="text-sm">
                    Whoa! Enjoy real-time analytics from your contents and
                    customizable auto-generated writing portfolio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end of third page -->

    <!-- fourth page -->
    <div class="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20">
      <div class="max-w-screen-xl mx-auto">
        <section class="text-black">
          <div
            class="
              container
              mx-auto
              flex
              px-5
              pb-20
              md:flex-row
              flex-col
              items-center
            "
          >
            <div
              class="
                lg:flex-grow
                md:w-1/2
                lg:pr-24
                md:pr-16
                flex flex-col
                md:items-start md:text-left
                mb-16
                md:mb-0
                items-center
                text-center
              "
            >
              <h1
                class="
                  title-font
                  sm:text-4xl
                  text-3xl
                  mb-4
                  font-medium
                  text-black
                "
              >
                All your contents across
                <br class="hidden lg:inline-block text-black" />different
                clients in one place
              </h1>
              <p class="mb-4 leading-8">
                Copy and paste links to your content any published. Create your
                content directly from Contentre and published directly to many
                CRMs such WordPress, Strapi, Hashnode, Medium, etc.
              </p>
              <div class="flex justify-center">
                <ul>
                  <li>
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Create and publish to CRM such as Strapi, Hashnode,
                          WordPress directly.</span
                        >
                      </div>
                    </span>
                  </li>

                  <li class="mt-3">
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Sort, arrange and filter your contents in order of
                          importance.</span
                        >
                      </div>
                    </span>
                  </li>

                  <li class="mt-3">
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Auto content and periodic distribution across
                          different social platforms.</span
                        >
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gray-300 py-8 px-8"
            >
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="~/assets/img/content.png"
              />
            </div>
          </div>
        </section>
      </div>

      <div class="max-w-screen-xl mx-auto">
        <section class="text-black">
          <div
            class="
              container
              mx-auto
              flex
              px-5
              pb-20
              md:flex-row
              flex-col
              items-center
            "
          >
            <div
              class="
                lg:flex-grow
                md:w-1/2
                lg:pr-24
                md:pr-16
                flex flex-col
                md:items-start md:text-left
                mb-16
                md:mb-0
                items-center
                text-center
              "
            >
              <h1
                class="
                  title-font
                  sm:text-4xl
                  text-3xl
                  mb-4
                  font-medium
                  text-black
                "
              >
                Comprehensive Content
                <br class="hidden lg:inline-block text-black" />Analytics,
                Insights and Reporting
              </h1>
              <p class="mb-4 leading-8">
                Calculate the amount of impacts your contents are making on the
                web. Take control of your content analytics and suggestion to
                enhance your deliveries
              </p>
              <div class="flex justify-center">
                <ul>
                  <li>
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Content statistics across your contents published
                          anywhere.</span
                        >
                      </div>
                    </span>
                  </li>

                  <li class="mt-3">
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Show the impacts your contents are making over the
                          web periodically.</span
                        >
                      </div>
                    </span>
                  </li>

                  <li class="mt-3">
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Get your top performing content, client and overall
                          statistics.</span
                        >
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gray-300 py-8 px-8"
            >
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="~/assets/img/Contentre_Analytics.png"
              />
            </div>
          </div>
        </section>
      </div>

      <div class="max-w-screen-xl mx-auto">
        <section class="text-black">
          <div
            class="
              container
              mx-auto
              flex
              px-5
              pb-20
              md:flex-row
              flex-col
              items-center
            "
          >
            <div
              class="
                lg:flex-grow
                md:w-1/2
                lg:pr-24
                md:pr-16
                flex flex-col
                md:items-start md:text-left
                mb-16
                md:mb-0
                items-center
                text-center
              "
            >
              <h1
                class="
                  title-font
                  sm:text-4xl
                  text-3xl
                  mb-4
                  font-medium
                  text-black
                "
              >
                Create and Customize
                <br class="hidden lg:inline-block text-black" />your portfolio
                easily.
              </h1>
              <p class="mb-4 leading-8">
                Customizable auto-generated content portfolio. Customize your
                porfolio to best suit your brand or choose from thousands of
                templates.
              </p>
              <div class="flex justify-center">
                <ul>
                  <li>
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Track your porfolio with Google Analytics and gain
                          more insights.</span
                        >
                      </div>
                    </span>
                  </li>

                  <li class="mt-3">
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Receive emails in a private mailbox via a
                          spam-protected portfolio contact form.</span
                        >
                      </div>
                    </span>
                  </li>

                  <li class="mt-3">
                    <span
                      class="flex items-center text-black dark:text-gray-100"
                    >
                      <i class="far fa-check-circle"></i>
                      <div class="bg-gray-200 rounded-lg px-4 py-4 ml-2">
                        <span class="inline-flex"
                          >Choose portfolio templates from thousands of
                          available templates.</span
                        >
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gray-300 py-8 px-8"
            >
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="~/assets/img/Contentre_Porfolio.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- end of fourth -->

    <!-- fifth page -->

    <div
      class="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8"
      style="background: #dcf6f3"
    >
      <div class="max-w-screen-xl mx-auto">
        <h3 class="font-black text-3xl text-center pt-8">
          Data security and privacy are <br />our top priority
        </h3>

        <!-- <section class="pt-20 bg-[#F3F4F6]">
          <div class="container">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 xl:w-1/2 px-4">
                <div
                  class="bg-white rounded-lg shadow-lg overflow-hidden mb-10"
                >
                  <div class="p-8 sm:p-9 md:p-7 xl:p-9 space-y-4">
                    <h3 class="font-semibold text-dark text-xl mb-4 block">
                      Top level Security
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>

                    <p class="text-base text-body-color leading-relaxed mb-7">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      ha
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/2 px-4">
                <div
                  class="bg-white rounded-lg shadow-lg overflow-hidden mb-10"
                >
                  <div class="p-8 sm:p-9 md:p-7 xl:p-9 space-y-4">
                    <h3 class="font-semibold text-dark text-xl mb-4 block">
                      Hosted in a great environment
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>

                    <p class="text-base text-body-color leading-relaxed mb-7">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      ha
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </div>
    </div>

    <!-- end of fifth page -->

    <!-- sixth page -->

    <section class="">
      <div class="container px-5 py-16 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-black">
            Unlock the benefits a of
          </h1>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-black">
            Modern Writing Portfolio
          </h1>
        </div>
        <div
          class="
            flex flex-col
            items-center
            flex-wrap
            mx-auto
            lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between
          "
        >
          <div
            class="
              w-full
              max-w-sm
              mt-6
              lg:mt-8
              bg-white
              rounded
              shadow-lg
              p-3
              lg:p-8 lg:mx-4
            "
          >
            <div class="my-2 font-extrabold tracking-wide">
              Automatic Generated
            </div>
            <div class="text-sm">
              Automatic Generated and Customizable porfolio with no-code needed.
            </div>
          </div>

          <div
            class="
              w-full
              max-w-sm
              mt-8
              bg-white
              rounded
              shadow-lg
              p-3
              lg:p-8 lg:mx-4
            "
          >
            <div class="my-2 font-extrabold tracking-wide">
              Comprehensive Analytics & Messaging
            </div>
            <div class="text-sm">
              Track your traffic real-time with Google Analytic and receive
              emails in a private mailbox via a spam-protected portfolio contact
              form
            </div>
          </div>

          <div
            class="
              w-full
              max-w-sm
              mt-8
              bg-white
              rounded
              shadow-lg
              p-3
              lg:p-8 lg:mx-4
            "
          >
            <div class="my-2 font-extrabold tracking-widee">
              Customize/choose from thousands of templates
            </div>
            <div class="text-sm">
              Don't like our sample template? Customize your porfolio to best
              suit your brand or choose from thousands of templates.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of sixth page -->

    <!-- Seventh page -->

    <div class="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8">
      <div class="max-w-screen-xl mx-auto">
        <section class="rounded-lg shadow" style="background: #f4fbfa">
          <div class="container px-8 py-16 relative">
            <img
              class="absolute top-0 left-0 h-12 xl:h-20 absolute-star"
              src="~/assets/img/star.svg"
              alt=""
            />
            <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 xl:w-1/2 px-4">
                <div class="space-y-4">
                  <h3 class="font-semibold text-dark text-3xl mb-4 block">
                    Ditch Spreadsheets. Manage your contents with Contentre in
                    minutes.
                  </h3>
                </div>
              </div>

              <form
                ref="form"
                class="mt-4 w-full"
                action="https://profaily.us1.list-manage.com/subscribe/post?u=731fe09da3abfe832f8122f69&amp;id=62eda625eb"
                method="post"
                @submit.prevent="register"
              >
                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2 xl:w-1/2 px-4 pt-">
                    <h1>Be the first to know when we launch.</h1>

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
                        w-full
                      "
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/2 px-4 pt-5">
                    <button
                      class="
                        inline-flex
                        px-20
                        py-5
                        form-btn
                        text-white
                        border
                        rounded-md
                      "
                      :href="`${APP_URL}/auth/register`"
                    >
                      Notify me
                    </button>
                    <a
                      appearance="primary"
                      href="#"
                      class="
                        inline-flex
                        px-20
                        py-3
                        text-black
                        bg-transparent
                        border
                        rounded-md
                        md:ml-6
                        mb-3
                        hidden
                      "
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- end of seventh page -->

    <!-- footer -->
    <section
      class="px-5kl sm:px-10 md:px-20 py-8 mt-20"
      style="background: #102a27"
    >
      <footer class="text-gray-600 body-font bg-transparent">
        <div
          class="
            container
            px-5
            pb-20
            mx-auto
            flex
            md:items-center
            lg:items-start
            md:flex-row md:flex-nowrap
            flex-wrap flex-col
          "
        >
          <div class="items-start md:w-1/2 mx-auto text-center md:text-left">
            <div class="md:w-3/4">
              <a
                href="/"
                class="
                  flex
                  title-font
                  font-medium
                  items-center
                  md:justify-start
                  justify-center
                  text-gray-900
                  mb-5
                "
              >
                <img
                  class="icon w-10 h-10 p-2 bg-white rounded-full"
                  src="~/assets/img/icon.png"
                  alt="logo"
                  width="60"
                />
                <span class="ml-3 text-xl text-white">Contentre</span>
              </a>
              <p class="pt-3 text-sm text-white">
                Access your content, monitor your content analytics in
                real-time, create and customize your writing portfolio across
                your clients. Spend less time and more time focused on your
                writing and getting more clients.
              </p>
            </div>
          </div>
          <div
            class="
              flex flex-wrap
              md:pl-20
              -mb-10
              md:mt-0
              mt-10
              md:text-left
              text-center
            "
          >
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2
                class="
                  title-font
                  font-bold
                  text-white
                  tracking-widest
                  text-md
                  mb-3
                "
              >
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    class="text-white hover:text-teal-300"
                    :href="`${APP_URL}/auth/login`"
                    >Login</a
                  >
                </li>
                <li>
                  <a class="text-white hover:text-teal-300" href="/aboutus"
                    >About us</a
                  >
                </li>
                <li>
                  <a
                    class="text-white hover:text-teal-300"
                    href="https://agency.contentre.io"
                    >Content Agency</a
                  >
                </li>
                <li>
                  <a class="text-white hover:text-teal-300" href="/careers"
                    >Careers</a
                  >
                </li>
                <li>
                  <a class="text-white hover:text-teal-300" href="/contactus"
                    >Contact us</a
                  >
                </li>
              </nav>
            </div>

            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2
                class="
                  title-font
                  font-bold
                  text-white
                  tracking-widest
                  text-md
                  mb-3
                "
              >
                Resources
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    class="text-white hover:text-teal-300"
                    href="https://blog.contentre.io"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-white hover:text-teal-300"
                    href="https://blog.contentre.io/ebooks"
                    >EBooks and Templates</a
                  >
                </li>
                <li>
                  <a
                    class="text-white hover:text-teal-300"
                    href="/privacy-policy"
                    >Privacy policy</a
                  >
                </li>
                <li>
                  <a
                    class="text-white hover:text-teal-300"
                    href="/terms-and-conditions"
                    >Terms of service</a
                  >
                </li>
                <li>
                  <a class="text-white hover:text-teal-300" href="/disclaimer"
                    >Disclaimer</a
                  >
                </li>
                <li>
                  <a class="text-white hover:text-teal-300" href="/contactus"
                    >Contact us</a
                  >
                </li>
              </nav>
            </div>

            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2
                class="
                  title-font
                  font-bold
                  text-white
                  tracking-widest
                  text-md
                  mb-3
                "
              >
                Contact Us
              </h2>
              <div class="list-none mb-10">
                <p class="mt-2 text-sm text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <p class="mt-2 text-sm text-white">+908 89097 890</p>
              </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4 pt-24">
              <nav class="list-none mb-10">
                <li>
                  <span
                    class="
                      inline-flex
                      sm:ml-auto sm:mt-0
                      mt-2
                      justify-center
                      sm:justify-start
                    "
                  >
                    <a
                      href="https://facebook.com/contentre"
                      class="text-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/contentreio"
                      class="ml-3 text-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/contentre"
                      class="ml-3 text-gray-200"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path
                          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/contentre"
                      class="ml-3 text-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-transparent border-t-2">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col">
            <p class="text-white text-sm text-center">
              Copyright ® {{ new Date().getFullYear() }} Contentre All rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
    <!-- end of footer -->
  </main>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      errors: {},
      user: {},
    }
  },

  head() {
    return {
      title: 'Content management for content creators',
    }
  },

  methods: {
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
.list-none > li {
  margin-bottom: 10px;
}

.list-none,
li > a:hover {
  color: #4fd1c5;
}
</style>
