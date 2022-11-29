<template>
  <main>
    <section class="mt-10 bg-[#4FD1C50D]">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="md:flex justify-between items-center">
          <div class="md:w-[50%]">
            <h1 class="text-2xl font-semibold md:text-5xl">
              Contentre Ambassador Program
            </h1>
            <p class="text-lg md:text-3xl mt-4 md:mt-8">
              Do you want to empower the technical writing community, make the internet
              resourceful, and build your brand while you're at it?
            </p>
            <div class="my-5">
              <a href="#form" class="scroll-smooth">
                <HomeButton class="w-full md:w-[30%]">Join the Mission</HomeButton>
              </a>
            </div>
          </div>
          <div class="mt-10">
            <img class="w-[500px]" src="~/assets/imgs/client_img.png" />
          </div>
        </div>
      </div>
    </section>

    <!-- -----------Section-2------------------- -->
    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="md:flex justify-center items-center">
          <!-- <div class="mt-10">
            <img class="w-[500px]" src="~/assets/imgs/content_icon2.png" />
          </div> -->

          <div class="w-full">
            <h1 class="text-3xl font-semibold md:text-5xl">Our goal</h1>
            <div class="text-lg md:text-xl mt-4 md:mt-8 md:text-justify text-left">
              <p>At Contentre we love technical writers, and serving and giving back to
              the technical writing community is one of the most rewarding things we do.</p>
              <p class="mt-4">Join us in our mission to advocate for the technical writer by sharing
              knowledge on technical writing related topics through meetups,
              conferences, written content, webinars and other events as an
              Contentre Ambassador.</p>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- --------Section 3--------------- -->

    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="md:flex justify-between items-center">
          <div class="md:w-[50%]">
            <h1 class="text-3xl font-semibold md:text-5xl">
              Meet the Ambassadors
            </h1>
            <p class="text-lg md:text-xl mt-4 md:mt-8">
              We have lots Ambassadors excited to help the technical writing community
              with technical writing.
            </p>

            <div class="my-5">
              <nuxt-link type="link" class="py-[16px] px-[24px] bg-[#276862] rounded-[5px] text-white w-full md:w-[30%]" to="/ambassadors">See All Ambassadors</nuxt-link>
            </div>
          </div>
          <div class="mt-10">
            <img class="w-[500px]" src="~/assets/imgs/enterprise_hero_img3_(2).png" />
          </div>
        </div>
      </div>
    </section>

    <!-- -----------Section 4 -->
    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <h1 class="text-3xl font-semibold mt-20 md:text-5xl">
          Contentre Ambassadors of the Month
        </h1>
        <p class="text-lg md:text-xl mt-4 md:mt-8">
          We want to recognize those who give back the most, the ambassadors who
          went above and beyond.<br />
          We thank them greatly for their many contributions this month and
          can't wait to see what they do next!
        </p>

        <div
class="
            bg-gray-300
            md:flex
            justify-between
            p-6
            md:p-16
            rounded-3xl
            mt-16
          ">
          <div class="md:w-[50%]">
            <div class="md:w-[450px] md:h-[450px] rounded-3xl">
              <img class="w-full h-full rounded-3xl" src="~/assets/images/amb1.jpg" />
            </div>
          </div>
          <div class="md:w-[50%] pt-5 md:pt-10">
            <p class="font-semibold text-lg">September 2022 winner</p>
            <h3 class="mt-16 text-4xl">Success Ibekwe</h3>
            <p class="text-lg md:text-xl mt-4 md:mt-8">
              Freelance technical writer, I break down complex technical
              subjects in a manner in which even a non-tech person would be able
              to understand and apply the steps to achieve their desired
              outcome.
            </p>
            <div class="my-5 w-full">
              <nuxt-link  class="py-[16px] px-[24px] bg-[#276862] rounded-[5px] text-white w-full md:w-[30%]" to="/succydcoder">View Portfolio</nuxt-link>
            </div>
          </div>
        </div>
        <div class="my-5 w-full">
            <nuxt-link class="py-[16px] px-[24px] bg-[#276862] rounded-[5px] text-white w-full md:w-[30%]" to="/ambassadors">See Previous
            Winners</nuxt-link>
        </div>
      </div>
    </section>

    <!-- -------Section 5------------------- -->

    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="md:flex justify-between items-center">
          <div class="mt-10">
            <img class="w-[500px]" src="~/assets/imgs/contact-img_(3).png" />
          </div>

          <div class="md:w-[50%]">
            <h1 class="text-3xl font-semibold md:text-5xl">
              Can I be an Ambassador?
            </h1>
            <p class="text-lg md:text-xl mt-4 md:mt-8">
              If you are content creator or enjoy learning and sharing your
              knowledge with other technical writers, then you should apply to be an
              Contentre Ambassador! Ambassadors must:
            </p>

            <div class="flex mt-10 space-x-3">
              <img class="w-10 h-10" src="~/assets/images/check-icon.png" alt="" />

              <p class="text-lg md:text-2xl">
                Contribute to the program on a quarterly basis
              </p>
            </div>
            <div class="flex mt-10 space-x-3">
              <img class="w-10 h-10" src="~/assets/images/check-icon.png" alt="" />

              <p class="text-lg md:text-2xl">
                Be active participants and/or a leader in a developer or writing community
              </p>
            </div>
            <div class="flex mt-10 space-x-3">
              <img class="w-10 h-10" src="~/assets/images/check-icon.png" alt="" />

              <p class="text-lg md:text-2xl">
                Demonstrate interest in creating or sharing technical content be
                it via blog posts, public speaking, or developer or writing events
              </p>
            </div>
            <div class="flex mt-10 space-x-3">
              <img class="w-10 h-10" src="~/assets/images/check-icon.png" alt="" />

              <p class="text-lg md:text-2xl">
                Be committed to Contentre's core values of collaboration,
                experimentation, and transparency
              </p>
            </div>
            <div class="flex mt-10 space-x-3">
              <img class="w-10 h-10" src="~/assets/images/check-icon.png" alt="" />

              <p class="text-lg md:text-2xl">
                Dream of becoming a Developer Advocate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ------Section 6----------------------- -->
    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h1 class="text-5xl">Your Rewards</h1>
            <p class="mt-10 text-xl">
              This is not a paid position, but you will get access to some great
              rewards and perks for being an Contentre Ambassador in exchange
              for contributing to the program.
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Recognition on Contentre's social media accounts
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Access to sponsorship, swags, stickers & travel perks
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Training with experts on technical writing, documentation and
              freelance technical writing topics
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Custom Contentre gear that identifies you as part of the
              Ambassador Program
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Exclusive access to new and experimental Contentre features
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ----------------Section 7 -->
    <section class="mt-10">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="mb-10 md:mb-10 md:my-16">
          <h1 class="text-3xl md:text-5xl mb-10">
            You won't be alone in this mission
          </h1>
          <p class="text-xl">
            You'll have access to expert support from our technical writer's team and a global network of Contentre
            Ambassadors that will help
            you build up your brand and local writing community by:
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Recognition on Contentre social media accounts
            </p>
          </div>

          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Exclusive access to new and experimental Contentre features
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Access to sponsorship, swags, stickers & travel perks
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Training with experts on technical writing, documentation and
              freelance technical writing topics
            </p>
          </div>
          <div class="bg-[#286963] p-8 rounded-3xl">
            <img class="w-20" src="~/assets/images/graph2.png" alt="" />
            <p class="my-5 text-xl text-white">
              Custom Contentre gear that identifies you as part of the
              Ambassador Program
            </p>
          </div>
          <div class="p-4 md:p-8 rounded-3xl flex justify-center items-center">
            <h1 class="text-2xl md:text-4xl font-semibold">
              The more you do, the more rewards and perks you get!
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- --------section 8------------------ -->

    <section id="form" class="mt-10 mb-20 p-4">
      <div
class="
          container
          max-w-screen-xl
          mx-auto
          bg-gray-300
          p-10
          md:px-24 md:py-12
          mt-10
          md:mt-28
          rounded-3xl
        ">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-[80%] md:px-10">
            <h1 class="text-3xl md:text-6xl font-semibold">Join the mission</h1>
            <p class="text-xl md:text-2xl mt-6">
              Tell us about yourself by filling out the form and we'll be in
              touch soon! We require ambassadors to be 18 years old or over.
            </p>
          </div>
          <div v-if="false" class="md:w-[50%] md:border-l-2 md:px-40 mt-10 md:mt-0">
            <div class="space-y-5 w-full">
              <TextField type="text" placeholder="Full Name" class="block w-full md:w-96 rounded-lg" />
              <TextField type="text" placeholder="Email" class="block w-full md:w-96 rounded-lg" />

              <TextField type="text" placeholder="Country" class="block w-full md:w-96 rounded-lg" />
              <TextField
type="text" placeholder="Link to a tech blog post, talk or OSS project"
                class="block w-full md:w-96 rounded-lg" />

              <div>
                <DropdownField
id="" placeholder="How did you hear about the program?"
                  class="block w-full md:w-96 rounded-lg" name="">
                  <option value="">Contentre Blog</option>
                  <option value="">Contentre Employees</option>
                  <option value="">Twitter/social media</option>
                  <option value="">Search Engine</option>
                  <option value="">Solomon Eseme youtube channel</option>
                </DropdownField>
              </div>

              <!---------Radio buttons--------  -->
              <div class="flex flex-col">
                <label for="" class="md:w-96 py-3">Have you ever used Contentre before?</label>

                <div class="flex flex-col">
                  <CheckField type="radio"> Yes</CheckField>
                  <CheckField type="radio"> No</CheckField>
                </div>
              </div>

              <div class="">
                <TextField
class="
                    block
                    w-full
                    md:w-96
                    py-3
                    px-4
                    rounded-lg
                    focus:outline-none focus:ring focus:ring-[#286963]
                    resize-none
                    mb-10
                    text-lg
                  "
                  placeholder="In your own words, tell us why you will be a good fit for the ambassador program. Please include links and/or profiles"
                  name="" cols="30" rows="5" />
              </div>

              <CheckField class="w-full">
                I confirm that I am 18+ years old
              </CheckField>

              <Button>Apply</Button>
            </div>
          </div>
          <div class="items-center justify-center mt-10 md:mt-0 md:w-[50%]">
            <a href="http://bit.ly/ContentreAmbassadorProgram"  target="_blank">
            <HomeButton class="w-full md:w-[100%] py-5 py-[16px] px-[24px] bg-[#276862] rounded-[5px] text-white " >Apply Here</HomeButton>
          </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HomeButton from '../../components/templates/HomeButton.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Program",
    components: { HomeButton },
    head() {
        return {
            title: "Contentre Ambassador Program",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Do you want to serve the developer community, make the internet safer and build your brand while you’re at it?",
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "Contentre Ambassador Program",
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: "Do you want to serve the developer community, make the internet safer and build your brand while you’re at it?",
                },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: "https://contentre.io/ambassadors/program",
                },
                {
                    hid: "og:image:width",
                    property: "og:image:width",
                    content: "800",
                },
                {
                    hid: "og:image:height",
                    property: "og:image:height",
                    content: "800",
                },
                {
                    hid: "twitter:card",
                    name: "twitter:card",
                    content: "summary_large_image",
                },
            ],
        };
    }
}
</script>

<style>

</style>