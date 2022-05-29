<template>
  <div>
    <div class="relative bg-teal-100">
      <div class="relative container px-4 mx-auto">
        <div class="lg:flex items-center">
          <div class="text-black">
            <div
              class="container mx-auto flex items-center justify-center py-10"
            >
              <div
                class="
                  flex flex-col
                  w-full
                  lg:w-1/2
                  p-8
                  items-center
                  justify-center
                  text-center
                "
              >
                <h1
                  class="
                    text-3xl
                    md:text-4xl
                    mb-10
                    text-black
                    font-bold
                    tracking-loose
                  "
                >
                  Freelance Writers Directory
                </h1>
                <p class="text-lg text-black-50 mb-10">
                  Hiring freelance writers for your content marketing project.
                  Sort through the list of 100,000 freelance writers and content
                  creators for your content marketing project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-gray-200 pb-5">
      <div class="container flex space-x-5 pt-5 container px-4 mx-auto">
        <div class="w-1/3">
          <TextField />
        </div>
        <div class="w-full">
          <div class="flex space-x-5 bg-white">
            <div class="w-40">
              <img class="w-full" src="~/assets/img/writer.jpg" alt="img5" />
            </div>
            <div class="">
              <div class="pb-5">
                <h2>Riley Magee</h2>
                <p class="pr-4">
                  My name is Riley. I am a junior in high school. I have a job
                  as a nail
                </p>
              </div>
              <Button>View Portfolio</Button>
            </div>
          </div>

          <div class="flex space-x-5 mt-5 bg-white">
            <div class="w-40">
              <img class="w-full" src="~/assets/img/writer.jpg" alt="img5" />
            </div>
            <div class="">
              <div class="pb-5">
                <h2>Riley Magee</h2>
                <p>
                  My name is Riley. I am a junior in high school. I have a job
                  as a nail
                </p>
              </div>
              <Button>View Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Hiring',
}
</script>

<style>
</style>