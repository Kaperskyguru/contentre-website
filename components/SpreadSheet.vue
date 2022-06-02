<template>
  <section class="mt-20 mb-10 bg-white">
    <div class="max-w-[80%] mx-auto">
      <div
        class="
          bg-[#F7FDFC]
          grid
          lg:grid-cols-2
          rounded-lg
          overflow-hidden
          pt-5
          md:pt-10
          lg:pt-0
        "
      >
        <div class="md:p-5 lg:p-10">
          <h4
            class="
              font-medium
              text-[#102A27]
              md:text-3xl
              lg:text-[35px] lg:leading-[52px] lg:mt-4
              text-center
              md:text-left
              mt-5
              md:mt-0
            "
          >
            Ditch spreadsheets. Manage your writing business with Contentre in
            minutes.
          </h4>

          <div
            class="
              md:mt-10
              mt-5
              md:justify-start md:items-start
              items-center
              flex
              mx-7
              md:flex-row
              flex-col
              md:mx-0
              mb-16
              md:mb-10
              lg:mb-0
            "
          >
            <button
              class="
                bg-[#286963]
                py-[12px]
                px-[32px]
                text-white
                lg:ml-0
                rounded-md
                text-sm
              "
            >
              Get Started. It's free
            </button>
            <a href="/contact">
              <button
                class="
                  border-[#286963]
                  text-sm
                  border
                  py-[12px]
                  px-[32px]
                  text-[#286963]
                  md:ml-3
                  mt-4
                  md:mt-0
                  rounded-md
                  ml-0
                  md:ml-2
                "
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
        <div class="md:p-0 w-[100%]">
          <img
            src="~/assets/imgs/african-american-man-with-headphone-watching-movie-streaming-services-bright-living-room-computer-user-concentrated-office-job-home-entertainment-smiling_1.png"
            alt=""
            class="w-full h-auto lg:rounded-none md:rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpreadSheet',
}
</script>

<style>
</style>