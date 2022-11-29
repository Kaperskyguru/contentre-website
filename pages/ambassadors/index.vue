<template>
  <main>
    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="md:px-10">
          <h1 class="text-3xl md:text-6xl font-semibold text-[#102A27]">
            Contentre Ambassador Program
          </h1>
          <p class="text-xl md:text-2xl mt-6">
            Our global team of ambassadors empower their communities and help
            make the resourceful by attending and hosting meetups, conferences,
            and other events that focus on technical writing and documentation
            topics.
          </p>
        </div>
      </div>
    </section>

    <!-- ---------------------Ambassadors-------------->
    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-[#FEF3E3] p-10 rounded-3xl min-h-40">
            <div class="flex items-center space-x-3 mb-5">
              <div class="w-20 h-20 rounded-xl">
                <img
                  class="w-full h-full object-cover rounded-3xl"
                  src="~/assets/images/amb1.jpg"
                  alt=""
                />
              </div>
              <p class="text-2xl text-[#888]">Success Ibekwe</p>
            </div>

            <p class="my-5 text-xl text-[#88888]">
              Custom Contentre gear that identifies you as part of the
              Ambassador Program Custom Contentre gear that identifies you as
              part of the Ambassador Program
            </p>

            <nuxt-link
              class="text-xl decoration-solid decoration-blue-300 text-blue-300"
              to="/succydcoder"
              target="_blank"
              text-gray-400
              >View Portfolio</nuxt-link
            >
          </div>

          <div class="bg-[#EAF9FE] p-10 rounded-3xl min-h-40">
            <div class="flex items-center space-x-3 mb-5">
              <div class="w-20 h-20 rounded-xl">
                <img
                  class="w-full h-full object-cover rounded-3xl"
                  src="https://res.cloudinary.com/kaperskydisk/image/upload/v1654025159/contentre/Founders/ge0hlhast4qdsis2jzht.jpg"
                  alt="Solomon Eseme"
                />
              </div>
              <p class="text-2xl text-gray-400">Solomon Eseme</p>
            </div>

            <p class="my-5 text-xl text-[#88888]">
              Recognition on Contentre social media accounts
            </p>
            <div class="mt-10">
              <nuxt-link
                class="
                  text-xl
                  decoration-solid decoration-blue-300
                  text-blue-300
                "
                to="/kaperskyguru"
                target="_blank"
                text-gray-400
                >View Portfolio</nuxt-link
              >
            </div>
          </div>
          <div class="bg-[#FEF8FD] p-10 rounded-3xl">
            <div class="flex items-center space-x-3 mb-5">
              <div class="w-20 h-20 rounded-xl">
                <img
                  class="w-full h-full object-cover rounded-3xl"
                  src="~/assets/images/amb3.jpeg"
                  alt=""
                />
              </div>
              <p class="text-2xl text-gray-400">Segun Ajibola</p>
            </div>

            <p class="my-5 text-xl text-[#88888]">
              Access to sponsorship & travel perks
            </p>

            <div class="mt-10">
              <nuxt-link
                class="
                  text-xl
                  decoration-solid decoration-blue-300
                  text-blue-300
                "
                to="/succydcoder"
                target="_blank"
                text-gray-400
                >View Portfolio</nuxt-link
              >
            </div>
          </div>
          <div class="bg-[#EAF9FE] p-10 rounded-3xl">
            <div class="flex items-center space-x-3 mb-5">
              <div class="w-20 h-20 rounded-xl">
                <img
                  class="w-full h-full object-cover rounded-3xl"
                  src="https://res.cloudinary.com/kaperskydisk/image/upload/v1654433104/contentre/Founders/moses_headshot.jpg"
                  alt=""
                />
              </div>
              <p class="text-2xl text-gray-400">Moses Anumadu</p>
            </div>

            <p class="my-5 text-xl text-[#88888]">
              Custom Contentre gear that identifies you as part of the
              Ambassador Program
            </p>
            <div class="mt-10">
              <nuxt-link
                class="
                  text-xl
                  decoration-solid decoration-blue-300
                  text-blue-300
                "
                to="/Alloyking1"
                target="_blank"
                text-gray-400
                >View Portfolio</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ambassadors',

  head() {
    return {
      title: 'All Contentre Ambassadors',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Do you want to serve the developer community, make the internet safer and build your brand while you’re at it?',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'All Contentre Ambassadors',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Do you want to serve the developer community, make the internet safer and build your brand while you’re at it?',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://contentre.io/ambassadors',
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
}
</script>

<style>
</style>