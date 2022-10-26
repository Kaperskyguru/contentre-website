<template>
  <section>
    <header>
      <div class="border-b-2 pb-12">
        <div class="text-center mt-20 mx-3 sm:mx-10 md:mx-6 lg:mx-16">
          <h1 class="text-4xl sm:text-4xl md:text-5xl text-[#102A27] font-bold">
            Portfolio One
          </h1>
          <div class="mt-5 text-[18px] sm:text-[24px]">
            <p>
              Templates allow you to completely change the look of the your
              technical writing portfolio.
            </p>
            Examples:
            <span><a href="#">Samuel Akpan,</a></span>
            <span><a href="#">Samuel Akpan,</a></span>
            <span><a href="#">Samuel Akpan,</a></span>
            <span><a href="#">Samuel Akpan,</a></span>
            <span><a href="#">Samuel Akpan,</a></span>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-[#4FD1C50D] pb-20 pt-10 w-full">
      <div
        class="
          max-w-[90%]
          xl:max-w-[80%]
          mx-auto
          h-full
          pt-3
          pb-5
          lg:pt-10
          bg-white
          px-12
          mb-14
        "
      >
        <div class="w-full">
          <section class="w-full">
            <div class="mx-auto">
              <div class="mt-20">
                <div
                  class="flex justify-center items-center"
                  style="flex-direction: column"
                >
                  <p class="md:text-4xl text-3xl text-greyGreen">Hello, I'm</p>
                  <h1 class="md:text-6xl text-4xl text-dark mt-2">John Doe</h1>

                  <div class="mt-14" style="width: 265px">
                    <img
                      src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg"
                      alt=""
                      style="height: 265px; border-radius: 50%"
                    />
                  </div>
                  <div class="w-2/3 mx-auto">
                    <p
                      class="
                        text-center
                        mt-6
                        text-greyGreen text-lg
                        md:text-2xl
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Bibendum sed sed sit vitae at. Ante quam amet purus
                      aliquam gravida quisque aliquet lobortis.
                    </p>
                  </div>
                  <Button class="border text-white py-3 px-8 rounded-md mt-4">
                    Hire Me
                  </Button>
                  <div
                    class="
                      flex
                      justify-between
                      bg-TealLight
                      rounded-full
                      py-0.5
                      px-0.5
                      mt-9
                    "
                  >
                    <button
                      class="
                        rounded-full
                        bg-transparent
                        py-3
                        px-10
                        text-greybrown
                      "
                      style="font-size: 18px"
                    >
                      About
                    </button>
                    <button
                      class="
                        rounded-full
                        bg-white
                        rounded-full
                        py-3
                        px-10
                        text-darkGreen
                        ml-10
                      "
                      style="font-size: 18px"
                    >
                      My Contents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-teal mb-10 w-full">
            <!-- i removed the  section container -->
            <div class="">
              <div class="px-4 px-lg-0 hidde">
                <div class="content-box my-10">
                  <div>
                    <h1 class="text-4xl text-textDark">My Content</h1>
                  </div>
                  <div>
                    <div class="flex flex-col lg:flex-row my-4 md:my-0">
                      <div
                        class="
                          flex
                          items-center
                          text-sm
                          font-medium
                          bg-white
                          rounded-lg
                        "
                      >
                        <SearchField
                          id="search"
                          class="text-xl focus:outline-none"
                          placeholder="Search by name..."
                        />
                      </div>
                      <div
                        class="
                          ml-0
                          lg:ml-10
                          my-4
                          md:my-0 md:justify-self-end
                          border
                          px-4
                          py-2.5
                          rounded-lg
                        "
                      >
                        <select
                          id=""
                          name=""
                          class="px-4 py-2.5 focus:outline-none"
                        >
                          <option value="">Most recent</option>
                          <option value="">Most view</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                  <div class="bg-cardBg rounded-xl px-4 pt-5">
                    <img
                      src="./img/portfolio-1 1130 (1).png"
                      alt=""
                      class="w-full mb-2"
                    />
                    <h4 class="text-2xl text-black mb-2" style="width: 250px">
                      The summer rye, hope of the winter
                    </h4>
                    <p class="text-grey1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, dictum nisi mollis arcu at senectus scelerisque
                      convallis. Id vulputate auctor sed in sem.
                    </p>

                    <div class="flex justify-between mt-10">
                      <div class="flex">
                        <div><img src="./img/clock.png" alt="" /></div>
                        <p class="ml-2 text-grey1">22 Dec, 2022</p>
                      </div>
                      <button
                        class="
                          py-1
                          px-5
                          ml-10
                          text-[#008F98]
                          bg-[#DCF6F3]
                          rounded-full
                        "
                        style="font-size: px"
                      >
                        Finance
                      </button>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/comments.png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (2).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (3).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (4).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (5).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (6).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (7).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-cardBg rounded-xl">
                    <div class="w-11/12 mx-auto my-4">
                      <img
                        src="./img/portfolio-1 1130 (8).png"
                        alt=""
                        class="w-full mb-2"
                      />
                      <h4 class="text-2xl text-black mb-2" style="width: 250px">
                        The summer rye, hope of the winter
                      </h4>
                      <p class="text-grey1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, dictum nisi mollis arcu at senectus scelerisque
                        convallis. Id vulputate auctor sed in sem.
                      </p>
                      <div class="flex justify-between mt-10">
                        <div class="flex">
                          <div><img src="./img/clock.png" alt="" /></div>
                          <p class="ml-2 text-grey1">22 Dec, 2022</p>
                        </div>
                        <button
                          class="
                            py-1
                            px-5
                            ml-10
                            text-[#008F98]
                            bg-[#DCF6F3]
                            rounded-full
                          "
                          style="font-size: px"
                        >
                          Finance
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center">
                  <Button
                    class="border text-leaveGreen py-2 px-5 rounded-md mt-10"
                  >
                    Load more
                  </Button>
                </div>
              </div>

              <!-- --------------------------- -->
              <div class="px-4 px-lg-0 hidden">
                <div>
                  <h1 class="md:text-4xl text-2xl text-textDark mb-4">
                    About Me
                  </h1>
                  <p class="md:text-xl text-lg">
                    Pellentesque amet quam iaculis penatibus eu vel velit. Eu
                    semper volutpat augue tortor vivamus vitae eu vitae. Montes,
                    a tellus iaculis non ultrices justo. Etiam lorem urna
                    volutpat ultrices. Nisl ut aliquet viverra ipsum in placerat
                    interdum. Scelerisque enim felis nunc facilisi. Aliquet eu
                    morbi justo, ac auctor nisi elit faucibus molestie. Aliquam
                    odio sit vestibulum velit convallis magna neque congue
                    pellentesque. Malesuada molestie fames ac congue. Ornare
                    purus convallis porta sit ullamcorper. Id urna venenatis at
                    sed aliquam est. Egestas nulla aliquet id etiam nulla.
                    Neque, purus sit vel enim aliquam egestas porta. At lacus ut
                    mauris vulputate. Nibh imperdiet sagittis nisi fames etiam
                    ullamcorper euismod egestas. Arcu duis congue lacus
                    adipiscing nisl dolor id pellentesque fringilla. Vitae, sit
                    viverra suspendisse dictum. Vel euismod eu at elementum.
                    Gravida faucibus malesuada sit nisi. Pulvinar quis praesent
                    faucibus ornare lacus donec iaculis. In leo scelerisque a
                    lorem cursus velit in. Erat at sit rhoncus lorem.
                  </p>
                  <div class="flex mt-6">
                    <div>
                      <img src="./img/Facebook_black.png" alt="" class="w-9" />
                    </div>
                    <div>
                      <img
                        src="./img/Gmail_black.png"
                        alt=""
                        class="w-9 ml-4"
                      />
                    </div>
                    <div>
                      <img
                        src="./img/Instagram_black.png"
                        alt=""
                        class="w-9 ml-4"
                      />
                    </div>
                    <div>
                      <img
                        src="./img/Twitter_black.png"
                        alt=""
                        class="w-9 ml-4"
                      />
                    </div>
                    <div>
                      <img
                        src="./img/WhatsApp_black.png"
                        alt=""
                        class="w-9 ml-4"
                      />
                    </div>
                    <div>
                      <img
                        src="./img/Medium_black.png"
                        alt=""
                        class="w-9 ml-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:w-3/4 md:w-4/5 mx-auto mt-32 rounded-xl">
                <div class="grid lg:grid-cols-3 gap-4">
                  <div class="bg-[#859492] rounded-xl lg:rounded-l-xl">
                    <div class="mx-10 my-10">
                      <div class="">
                        <p class="text-white text-3xl">Get in touch with me.</p>
                        <p class="text-textteal mt-10" style="font-size: 14px">
                          Etiam lorem urna volutpat ultrices. Nisl ut aliquet
                          viverra ipsum in placerat interdum. Scelerisque enim
                          felis nunc facilisi. Aliquet eu morbi justo, ac aucto
                        </p>
                      </div>
                      <div class="mt-44">
                        <div class="flex">
                          <div>
                            <img src="./img/call.png" alt="" />
                          </div>
                          <p class="ml-4 text-white">+2349044485858558</p>
                        </div>
                        <div class="flex">
                          <div>
                            <img src="./img/sms.png" alt="" />
                          </div>
                          <p class="ml-4 text-white">test@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-2">
                    <div>
                      <div class="mx-4 mt-4">
                        <div class="grid">
                          <p>First name</p>
                          <TextField
                            id=""
                            type="text"
                            name=""
                            class="py-2 rounded-lg mt-2"
                          />
                        </div>
                        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
                          <div class="grid">
                            <p>Email</p>
                            <TextField
                              id=""
                              type="email"
                              name=""
                              class="py-2 rounded-lg mt-2"
                            />
                          </div>

                          <div class="grid">
                            <p>Number</p>
                            <TextField
                              id=""
                              type="number"
                              name=""
                              class="py-2 rounded-lg mt-2"
                            />
                          </div>
                        </div>
                        <div class="grid mt-8">
                          <p>Message</p>
                          <TextField
                            id=""
                            name=""
                            cols="30"
                            rows="5"
                            class="mt-2 rounded-lg"
                          ></TextField>
                        </div>
                        <Button class="border text-white py-2 rounded-md mt-10">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PortfolioTwo',
}
</script>

<style scoped>
.content-box {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .content-box {
    flex-direction: column;
  }
}
</style>