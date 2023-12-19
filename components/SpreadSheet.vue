<template>
  <section class="mt-20 mb-10 bg-white">
    <div class="max-w-[80%] mx-auto">
      <div
        class="bg-[#F7FDFC] grid lg:grid-cols-2 rounded-lg overflow-hidden pt-5 md:pt-10 lg:pt-0"
      >
        <div class="md:p-5 lg:p-10">
          <h4
            class="font-medium text-[#102A27] md:text-3xl lg:text-[35px] lg:leading-[52px] lg:mt-4 text-center md:text-left mt-5 md:mt-0"
          >
            Ready to ditch Google Drive?
            <span class="text-[#102A27] font-bold"> Try Contentre.</span>
          </h4>
          <div>
            Organize your technical content in one place. Create multiple
            personalized portfolios.
          </div>
          <div
            class="md:mt-10 mt-5 md:justify-start md:items-start items-center flex mx-7 md:flex-row flex-col md:mx-0 mb-16 md:mb-10 lg:mb-0"
          >
            <a
              href="https://app.contentre.io/auth/register?source=home_spreadsheet"
              ><button
                class="bg-[#286963] py-[12px] px-[32px] text-white lg:ml-0 rounded-md text-sm"
              >
                Get Started. It's Free
              </button></a
            >
            <NuxtLink to="/contact">
              <button
                class="border-[#286963] text-sm border py-[12px] px-[60px] text-[#286963] md:ml-3 mt-4 md:mt-0 rounded-md ml-0"
              >
                Contact Us
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class="md:p-0 rounded-full mt-10 w-[95%]">
          <img
            src="https://res.cloudinary.com/kaperskydisk/image/upload/v1656635751/contentre/assets/contents.gif"
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