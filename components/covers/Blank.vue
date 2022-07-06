<template>
  <div
    class="
      h-[540px]
      md:h-[580px]
      lg:h-[660px] lg:w-[500px]
      overflow-hidden
      mx-auto
      p-5
      w-full
    "
  >
    <div class="bg-white pb-5 drop-shadow-lg my-5 lg:mt-5 w-full flex h-full">
      <div class="overflow-hidden h-full">
        <div class="h-full w-full overflow-y-auto" style="position: relative">
          <div class="bg-white w-full h-full py-10 px-0 md:px-4">
            <div class="">
              <div class="px-2 md:px-4 py-4 text-xs" style="font-size: 0.7rem">
                <div class="mb-5">
                  <p>[Contact person]</p>
                  <p>[Organisation]</p>
                  <p>[Address]</p>
                  <p>
                    <span> [Postcode]</span>
                    <span> [City]</span>
                  </p>
                </div>
                <p class="mb-5">
                  <span>mm</span>
                  <span>dd</span>
                  <span>yy</span>
                </p>

                <p class="mb-4">Dear Sir or Madam,</p>
                <p>
                  By means of this letter i would like to inquire about the
                  possibility of filling an outstanding [position type] at
                </p>
                <p>
                  [organisation]. My preference will be to fill for the position
                  of technical writer
                </p>
                <p>
                  I would describe myself as someone who is [personal
                  description]. Combined with my experience, i believe
                </p>
                <p>
                  I can make a valuable contribution to your organisation. I see
                  the position of technical writer as
                </p>
                <p>
                  the perfect next step to my career. In the position of
                  technical writer i expect to be able to develop myself further
                  as a professional
                </p>
                <p>
                  I would like to further explain my motivation for the position
                  of a technical writer during a personal meeting.
                </p>
                <p>
                  you can reach me either by phone via 081233345565 or by email
                  via solomoneseme@gmail.com.
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>
                <p>
                  Thank you for your consideration, I look forward to hearing
                  from you
                </p>

                <p>Yours Sincerely</p>
                <p>{{ data.personal.name }}</p>
                <p>Attachment: Resume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverBlank',

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
</style>