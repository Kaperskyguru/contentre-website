<template>
  <main>
    <section
      class="
        flex
        my-10
        justify-between
        items-center
        h-16
        relative
        bg-[#286963]
        px-4
        max-w-[80%]
        mx-auto
      "
    >
      <div class="">
        <button
          class="
            border
            bg-transparent
            px-1
            py-0.5
            lg:px-4 lg:py-1
            rounded
            md:text-lg
            lg:text-2xl
            font-bold
            flex
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
          >
            <path
              d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
            ></path>
          </svg>
          <p class="cover-letter-heading hidden lg:text-[16px] lg:block">
            Cover letter
          </p>
        </button>
      </div>
      <input
        type="text"
        class="
          bg-transparent
          focus:outline-none focus:border-blue-500
          hover:border-b-2
          text-sm
          md:text-2xl
          placeholder-black
          font-medium
        "
        placeholder=" Untitled cover letter"
      />
      <div>
        <div class="flex md:flex-row items-center">
          <button class="dots hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              ></path>
            </svg>
          </button>

          <div class="flex undo-wrapper hidden lg:block">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path
                  d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"
                ></path>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path
                  d="M9 18h3v-2H9c-1.654 0-3-1.346-3-3s1.346-3 3-3h6v3l5-4-5-4v3H9c-2.757 0-5 2.243-5 5s2.243 5 5 5z"
                ></path>
              </svg>
            </button>
          </div>
          <!-- <select
            id="language-picker-select"
            name="language-picker-select"
            class="
              bg-transparent
              border
              py-2
              px-2
              text-2xl
              font-medium
              shadow-lg
              ml-4
              language
              hidden
              lg:block
            "
          >
            <option lang="de" value="deutsch">Deutsch</option>
            <option lang="en" value="english" selected>EN</option>
            <option lang="fr" value="francais">Français</option>
            <option lang="it" value="italiano">Italiano</option>
          </select> -->
          <!-- --------------Testing language select--------------- -->
          <!-- <div class="language-picker js-language-picker" data-trigger-class="btn btn--subtle js-tab-focus">
                    <form action="" class="language-picker__form">
                        <label for="language-picker-select"></label>

                        <select name="language-picker-select" id="language-picker-select">
                            <option lang="de" value="deutsch">Deutsch</option>
                            <option lang="en" value="english" selected> EN</option>
                            <option lang="fr" value="francais">Français</option>
                            <option lang="it" value="italiano">Italiano</option>
                        </select>
                    </form>
                </div> -->

          <div class="ml-4">
            <button
              class="
                font-bold
                text-2xl
                bg-secondary
                text-white
                px-1
                py-0.5
                lg:px-2 lg:py-2
                rounded
              "
            >
              <span class="text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                >
                  <path
                    d="M6 18h12v2H6zm5-14v8.586L6.707 8.293 5.293 9.707 12 16.414l6.707-6.707-1.414-1.414L13 12.586V4z"
                  ></path>
                </svg>
              </span>
              <span class="download hidden lg\:block">Download</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="header">
      <div class="grid lg:grid-cols-2 max-w-[80%] mx-auto">
        <!-- --------LEFT AREA--------- -->
        <div class="left-area bg-slate-100">
          <div class="h-full overflow-hidden p-5 bg-slate-100">
            <div
              class="px-4 overflow-y-auto h-full lg:pb-4 md:px-10 pt-8 bg-white"
            >
              <!-- --------------PERSONAL DETAILS------------------ -->
              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between items-center mb-5">
                    <h3 class="text-xl md:text-2xl lg:text-xl font-medium">
                      Personal details
                    </h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>

                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12">
                      <!-- <div> -->
                      <div
                        class="
                          flex
                          justify-between
                          flex-col
                          space-x-0
                          lg:flex-row lg:space-x-5
                        "
                      >
                        <div class="lg:col-span-2">
                          <div class="flex justify-between w-full lg:mb-1">
                            <h4 class="text-xl md:text-3xl lg:text-sm">
                              Photo
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              style="
                                fill: rgba(0, 0, 0, 1);
                                transform: ;
                                msfilter: ;
                              "
                            >
                              <path
                                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                              ></path>
                            </svg>
                          </div>
                          <div
                            class="
                              bg-zinc-100
                              flex
                              h-[128px]
                              lg:w-[124px]
                              w-full
                              justify-center
                              hover:outline
                              cursor-pointer
                              rounded
                            "
                          >
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                style="
                                  fill: rgba(0, 0, 0, 1);
                                  transform: ;
                                  msfilter: ;
                                "
                              >
                                <path
                                  d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"
                                ></path>
                                <path
                                  d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="lg:col-span-10 col-span-12">
                          <div class="w-full mt-5 lg:mt-0">
                            <div class="grid grid-cols-12 space-x-4">
                              <div class="col-span-6">
                                <h4
                                  class="text-xl md:text-2xl lg:text-sm lg:mb-2"
                                >
                                  Given name
                                </h4>
                                <input
                                  v-model="data.personal.name"
                                  type="text"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    rounded
                                    w-full
                                  "
                                />
                              </div>
                              <div class="col-span-6">
                                <h4
                                  class="text-xl md:text-2xl lg:text-sm lg:mb-2"
                                >
                                  Family name
                                </h4>
                                <input
                                  type="text"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    rounded
                                    w-full
                                  "
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-span-12">
                            <div class="mt-5">
                              <h4
                                class="text-xl md:text-2xl lg:text-sm lg:mb-1"
                              >
                                Email
                              </h4>
                              <div class="grid grid-cols-1">
                                <input
                                  type="email"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- </div> -->
                    </div>

                    <div class="col-span-12">
                      <div class="mt-5">
                        <h4 class="text-xl md:text-2xl lg:text-sm lg:mb-1">
                          Phone number
                        </h4>
                        <div class="grid grid-cols-1">
                          <input
                            type="text"
                            class="
                              bg-zinc-100
                              py-2
                              md:py-4
                              lg:py-2
                              mt-2
                              md:mt-0
                              rounded
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-span-12">
                      <div class="mt-5">
                        <h4 class="text-xl md:text-2xl lg:text-sm lg:mb-1">
                          Address
                        </h4>
                        <div class="grid grid-cols-1">
                          <input
                            type="text"
                            class="
                              bg-zinc-100
                              py-2
                              md:py-4
                              lg:py-2
                              mt-2
                              md:mt-0
                              rounded
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-span-12">
                      <div class="grid grid-cols-1 md:grid-cols-2 mt-6">
                        <div>
                          <h4 class="text-xl md:text-2xl lg:text-sm lg:mb-1">
                            Post code
                          </h4>
                          <div class="grid grid-cols-1">
                            <input
                              type="text"
                              class="
                                bg-zinc-100
                                py-2
                                md:py-4
                                lg:py-2
                                mt-2
                                md:mt-0
                                rounded
                              "
                            />
                          </div>
                        </div>
                        <div class="ml-0 md:ml-5 mt-5 md:mt-0">
                          <h4 class="text-xl md:text-2xl lg:text-sm lg:mb-1">
                            City
                          </h4>
                          <div class="grid grid-cols-1">
                            <input
                              type="text"
                              class="
                                bg-zinc-100
                                py-2
                                md:py-4
                                lg:py-2
                                mt-2
                                md:mt-0
                                rounded
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <button
                    class="
                      border
                      bg-transparent
                      px-3
                      py-1
                      md:px-7 md:py-2
                      lg:py-1 lg:px-4
                      text-2xl
                      rounded
                      flex
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                    </svg>
                    <h4 class="text-lg md:text-2xl lg:text-xl">custom field</h4>
                  </button>
                </div>
              </div>

              <!-- -----------------RECIPIENT DETAILS----------------------- -->
              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between mb-5 lg:mb-3">
                    <h3 class="text-2xl font-medium lg:text-xl">Recipient</h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12 ml-0">
                      <div class="grid grid-cols-2">
                        <div class="col-span-12">
                          <div class="mt-5">
                            <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                              Contact person
                            </h4>
                            <a href="#Contact person" class="grid grid-cols-1">
                              <input
                                type="text"
                                class="
                                  bg-zinc-100
                                  py-2
                                  md:py-4
                                  lg:py-2
                                  mt-2
                                  md:mt-0
                                  rounded
                                "
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-span-12">
                          <div class="mt-5">
                            <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                              Organization
                            </h4>
                            <div class="grid grid-cols-1">
                              <input
                                type="text"
                                class="
                                  bg-zinc-100
                                  py-2
                                  md:py-4
                                  lg:py-2
                                  mt-2
                                  md:mt-0
                                  rounded
                                "
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-span-12">
                          <div class="grid grid-cols-1 md:grid-cols-2 mt-6">
                            <div>
                              <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                                Post code
                              </h4>
                              <div class="grid grid-cols-1">
                                <input
                                  type="text"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                  "
                                />
                              </div>
                            </div>
                            <div class="ml-0 md:ml-5">
                              <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                                City
                              </h4>
                              <div class="grid grid-cols-1">
                                <input
                                  type="text"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-span-12">
                          <div class="mt-5">
                            <div class="flex justify-between">
                              <h4 class="">edit content</h4>

                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  style="
                                    fill: rgba(0, 0, 0, 1);
                                    transform: ;
                                    msfilter: ;
                                  "
                                >
                                  <path
                                    d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  ></path>
                                </svg>
                              </button>
                            </div>

                            <div class="grid grid-cols-1">
                              <div
                                class="
                                  bg-zinc-100
                                  py-2
                                  md:py-4
                                  px-4
                                  mt-2
                                  md:mt-0
                                  rounded
                                "
                              >
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    [ Contact person ]
                                  </h4>
                                </a>
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    [Organisation]
                                  </h4>
                                </a>
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    [Address]
                                  </h4>
                                </a>
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    <span>[Post code]</span>[ City ]
                                  </h4>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ----------------------End of Recipient-------------------------------------- -->

              <!-- ----------------------------Date and Subject----------------------------- -->

              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between mb-5 lg:mb-3">
                    <h3 class="text-2xl font-medium lg:text-xl">
                      Date and subject
                    </h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12 ml-0">
                      <div class="grid grid-cols-2">
                        <div class="col-span-12">
                          <div class="grid grid-cols-1 md:grid-cols-2 mt-6">
                            <div>
                              <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                                City
                              </h4>
                              <div class="grid grid-cols-1">
                                <input
                                  type="text"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                  "
                                />
                              </div>
                            </div>
                            <div class="ml-0 md:ml-5">
                              <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                                Date
                              </h4>
                              <div class="grid grid-cols-1">
                                <input
                                  type="date"
                                  class="
                                    bg-zinc-100
                                    p-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-span-12">
                          <div class="grid grid-cols-1 md:grid-cols-2 mt-6">
                            <div>
                              <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                                Types of application
                              </h4>
                              <div class="grid grid-cols-1">
                                <div
                                  type="text"
                                  class="
                                    bg-zinc-100
                                    p-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                    flex
                                    justify-between
                                  "
                                >
                                  <span>Make a choice</span
                                  ><span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      style="
                                        fill: rgba(0, 0, 0, 1);
                                        transform: ;
                                        msfilter: ;
                                      "
                                    >
                                      <path
                                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="ml-0 md:ml-5">
                              <h4 class="text-xl md:text-2xl lg:text-sm mb-1">
                                Date
                              </h4>
                              <div class="grid grid-cols-1">
                                <input
                                  type="date"
                                  class="
                                    bg-zinc-100
                                    py-2
                                    md:py-4
                                    lg:py-2
                                    mt-2
                                    md:mt-0
                                    rounded
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-span-12">
                          <div class="mt-5">
                            <h4 class="">edit content</h4>
                            <div class="grid grid-cols-1">
                              <div
                                class="
                                  bg-zinc-100
                                  py-2
                                  md:py-4
                                  px-4
                                  mt-2
                                  md:mt-0
                                  rounded
                                "
                              >
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    [ Contact person ]
                                  </h4>
                                </a>
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    [ Contact person ]
                                  </h4>
                                </a>
                                <a href="#Contact person">
                                  <h4
                                    class="text-lg md:text-xl lg:text-sm mb-1"
                                  >
                                    <span>[ Contact person ]</span>[ Contact
                                    person ]
                                  </h4>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ----------------------------Date and Subject----------------------------- -->

              <!-- ----------INTRODUCTION---------------- -->

              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between mb-5 lg:mb-3">
                    <h3 class="text-2xl font-medium lg:text-xl">
                      Introduction
                    </h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12">
                      <div class="mt-5">
                        <div class="grid grid-cols-1">
                          <label
                            for="pet-select"
                            class="text-xl md:text-2xl lg:text-sm mb-1"
                            >Select content</label
                          >

                          <select
                            id="pet-select"
                            name="pets"
                            class="
                              bg-zinc-100
                              py-2
                              px-2
                              md:py-4
                              lg:py-2
                              md:px-4
                              rounded
                              text-xl
                              md:text-2xl
                              lg:text-xl
                            "
                          >
                            <option value="">Make a choice</option>
                            <option value="dog">Open application</option>
                            <option value="cat">
                              Response to ad in newspaper or magazine
                            </option>
                            <option value="hamster">
                              Response to an online ad
                            </option>
                            <option value="parrot">Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ----------INTRODUCTION---------------- -->

              <!-- -------------CURRENT SITUATION---------------------------- -->
              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between mb-5 lg:mb-3">
                    <h3 class="text-xl md:text-2xl lg:text-xl font-medium">
                      Current situation
                    </h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12">
                      <div class="mt-5">
                        <div class="grid grid-cols-1">
                          <label
                            for="pet-select"
                            class="text-xl md:text-2xl lg:text-sm mb-1"
                            >Select content</label
                          >

                          <select
                            id="pet-select"
                            name="pets"
                            class="
                              bg-zinc-100
                              py-2
                              px-2
                              md:py-4
                              lg:py-2
                              md:px-4
                              rounded
                              text-xl
                              md:text-2xl
                              lg:text-xl
                            "
                          >
                            <option value="">Make a choice</option>
                            <option value="dog">I'm currently working</option>
                            <option value="cat">
                              I'm currently working and i have completed my
                              studies
                            </option>
                            <option value="hamster">
                              I am currently working and have an ample
                              experience
                            </option>
                            <option value="parrot">
                              I have completed my studies
                            </option>
                            <option value="parrot">
                              I am currently studying
                            </option>
                            <option value="parrot">
                              I am currently out of work
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- -------------CURRENT SITUATION---------------------------- -->

              <!-- ----------------Motivation------------------------ -->

              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between mb-5 lg:mb-3">
                    <h3 class="text-xl md:text-2xl lg:text-xl font-medium">
                      Motivation
                    </h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12">
                      <div class="mt-5">
                        <div class="grid grid-cols-1">
                          <label
                            for="pet-select"
                            class="text-xl md:text-2xl lg:text-sm mb-1"
                            >Select content</label
                          >

                          <select
                            id="pet-select"
                            name="pets"
                            class="
                              bg-zinc-100
                              py-2
                              px-2
                              md:py-4
                              lg:py-2
                              md:px-4
                              rounded
                              text-xl
                              lg:text-xl
                            "
                          >
                            <option value="">Make a choice</option>
                            <option value="dog">Career Oriented</option>
                            <option value="dog">Education Oriented</option>
                            <option value="dog">Experience Oriented</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ----------------Motivation------------------------ -->

              <!-- --------------------CLOSING---------------------- -->

              <div class="border-b-2 border-neutral-300 pb-12 mb-10">
                <div class="Personal-Details mt-10">
                  <div class="flex justify-between mb-5 lg:mb-3">
                    <h3 class="text-xl md:text-2xl lg:text-xl font-medium">
                      Closing
                    </h3>
                    <div>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          style="
                            fill: rgba(0, 0, 0, 1);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-12">
                      <div class="mt-5">
                        <div class="grid grid-cols-1">
                          <label
                            for="pet-select"
                            class="text-xl md:text-2xl lg:text-sm lg:mb-1"
                            >Select content</label
                          >

                          <select
                            id="pet-select"
                            name="pets"
                            class="
                              bg-zinc-100
                              py-2
                              px-2
                              md:px-4 md:py-4
                              lg:py-2
                              rounded
                              text-xl
                              md:text-2xl
                              lg:text-xl
                            "
                          >
                            <option value="">Job vacancy application</option>
                            <option value="">Open application</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- --------------------CLOSING---------------------- -->

              <div class="mt-10 mb-5">
                <button
                  class="
                    border
                    bg-transparent
                    px-7
                    py-2
                    lg:py-2 lg:px-1.5
                    text-2xl
                    font-bold
                    rounded
                    flex
                    items-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                  >
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                  </svg>
                  <h4 class="lg:text-lg">custom paragraph</h4>
                </button>
              </div>
            </div>

            <!-- --------LEFT AREA--------- -->
          </div>
        </div>
        <!-- --------RIGHT AREA------------ -->
        <div class="right-side bg-slate-100">
          <div
            v-if="openTemplate"
            v-click-outside="onClickOutside"
            class="bg-gray-500 small-card z-10 w-full transition-all"
          >
            <div class="flex">
              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverletter1.svg"
                alt=""
                @click.prevent="switchTemplate('Blank')"
              />
              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverlett1.svg"
                alt=""
                @click.prevent="switchTemplate('First')"
              />
              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverlett.svg"
                alt=""
                @click.prevent="switchTemplate('Second')"
              />
              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverlett3.svg"
                alt=""
                @click.prevent="switchTemplate('Third')"
              />

              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverlett5.svg"
                alt=""
                @click.prevent="switchTemplate('Four')"
              />

              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverlett10.svg"
                alt=""
                @click.prevent="switchTemplate('Five')"
              />

              <img
                class="
                  w-1/4
                  h-2/5
                  px-2
                  py-2
                  cover-letter-img
                  focus:ring focus:ring-violet-300
                  cursor-pointer
                  hover
                "
                src="~/assets/imgs/coverlett4.svg"
                alt=""
                @click.prevent="switchTemplate('Six')"
              />
            </div>
          </div>

          <div class="h-5/6 w-full h-full overflow-hidden">
            <component :is="template" :data="data" />
          </div>

          <div class="flex justify-end px-4 mt-4 md:hidden">
            <button class="px-4 py-1 border bg-secondary">Preview</button>
          </div>

          <div class="px-4 mt-4 md:mt-9 lg:mt-9 mb-1">
            <div
              class="
                bg-white
                py-4
                md:py-5
                lg:py-3
                px-4
                drop-shadow-lg
                rounded-lg
              "
            >
              <div class="flex justify-between">
                <div>
                  <button
                    class="
                      transition
                      ease-in-out
                      delay-150
                      hover:-translate-y-1 hover:scale-110
                      duration-300
                    "
                    @click.prevent="onOpenTemplate"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- --------RIGHT AREA------------ -->
      </div>
    </section>

    <section class="mt-20 mb-10 w-full">
      <div class="max-w-[80%] mx-auto">
        <div class="text-center mb-24 md:pt-28 lg:pt-0">
          <h1
            class="
              text-[24px]
              md:text-[34px]
              lg:text-[48px] lg:leading-[68.2px]
              text-[#102A27]
            "
          >
            Access more great features that turns your <br />
            side hustle into a content business.
          </h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div
            class="
              relative
              w-[330px]
              h-[330px]
              lg:w-[391px] lg:h-[391px]
              md:mx-auto
              lg:mx-0
            "
          >
            <img src="~/assets/imgs/portfolio_img.png" alt="" class="" />
            <div
              class="
                w-[330px]
                h-[330px]
                lg:w-[391px] lg:h-[391px]
                rounded-full
                border-4 border-[#4FD1C5]
                absolute
                top-4
                -left-4
                -z-10
              "
            ></div>
          </div>
          <div class="mt-16 lg:mt-0">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27] text-center
                lg:text-left
              "
            >
              Portfolio Management
            </h2>
            <div class="mt-6">
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Manage Multiple Portfolios
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Stop sending gigantic portfolio to your clients.
                      Streamline your portfolio to a particular clients needs
                      with our Multiple Portfolio Feature.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">Use default template</p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create your portfolio in less than a minute our default
                      template to create your writing portfolio.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Use Customized Templates
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Choose from hundreds of customized portfolio crafted to
                      convert leads to clients.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <p class="text-[24px] text-[#286963]">
                    Use Drag and Drop Portfolio Creator
                  </p>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Customized your portfolio in less than 5 minutes with our
                      Portfolio Customizer to suit your branding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40 mt-20">
          <div class="">
            <h2
              class="
                text-[36px]
                font-medium
                text-[#102A27] text-center
                lg:text-left
              "
            >
              Content Management
            </h2>
            <div class="mt-6">
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <h6 class="text-[24px] text-[#286963]">
                    Organize all your contents
                  </h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      No matter where your content is published on your clients
                      website, you can easily keep track of your content
                      published anywhere in one place.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <h6 class="text-[24px] text-[#286963]">Manage categories</h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, update, delete, and assign categories to your
                      contents to help organize your content. Gain insightful
                      analytics of each categories.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <h6 class="text-[24px] text-[#286963]">Manage tags</h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, update, delete, and assign tags to your contents
                      to help organize your content. Gain insightful analytics
                      of each tags.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="pt-2">
                  <img
                    src="~/assets/imgs/arrow_gray.png"
                    alt=""
                    class="w-[45px]"
                  />
                </div>

                <div class="ml-6">
                  <h6 class="text-[24px] text-[#286963]">Manage niches</h6>
                  <div class="mt-1">
                    <p class="text-[#888888]">
                      Create, update, delete, and assign niches to your contents
                      to help organize your content. Gain insightful analytics
                      of each niches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              relative
              w-[330px]
              h-[330px]
              lg:w-[391px] lg:h-[391px]
              md:mx-auto
              lg:mx-0
            "
          >
            <img src="~/assets/imgs/content_img-icon.png" alt="" class="" />
            <div
              class="
                w-[330px]
                h-[330px]
                lg:w-[391px] lg:h-[391px]
                rounded-full
                border-4 border-[#4FD1C5]
                absolute
                -top-4
                left-4
                z-10
              "
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-40 mb-20 w-full">
      <div class="text-center">
        <h1 class="text-[#102A27] text-[20px] md:text-[35px] lg:text-[48px]">
          Turn your side hustle into a business now 🚀
        </h1>
        <div class="flex justify-center mt-4">
          <a
            href="https://app.contentre.io/auth/register?source=writers_side_hustle_to_business"
          >
            <button
              class="py-[16px] px-[24px] bg-[#276862] rounded-[5px] text-white"
            >
              Get Started. It's Free
            </button></a
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'CoverLetterGenerator',

  directives: {
    clickOutside: vClickOutside.directive,
  },
  data: () => ({
    openTemplate: false,
    template: 'Blank',
    data: {
      personal: {},
      recipient: {},
      dateAndSubject: {},
      introduction: {},
      currentSituation: {},
      motivation: {},
      closing: {},
    },
  }),

  methods: {
    onOpenTemplate() {
      this.openTemplate = !this.openTemplate
    },

    switchTemplate(name) {
      this.template = name
    },

    onClickOutside() {
      this.closeDropdown()
    },

    closeDropdown() {
      this.openTemplate = false
      document.removeEventListener('keyup', this.onKeyUp)
    },

    onKeyUp(event) {
      const keyCode = event.keyCode || event.which
      if (keyCode === 27) this.closeDropdown()
    },
  },
}
</script>

<style scoped>
.header {
  /* height: calc(100vh - 64px); */
}

.left-area {
  height: calc(100vh - 64px);
}

.hero-items {
  height: calc(100vh - 128px);
  overflow-y: auto;
}

.right-side {
  height: calc(100vh - 64px);
  overflow-y: auto;
  position: relative;
}

/* .letter-wrapper {
    height: calc(100vh - 128px);
    overflow-y: auto;
} */

.small-card {
  position: absolute;
  bottom: 13%;
  left: 0;
  overflow-x: scroll;
}

.cover-letter-img {
  border-radius: 5px;
}

/* .img-width {
    width: 100%;
} */

/* .letter-wrapper {
    height: 900px;
} */

@media screen and (max-width: 480px) {
  .undo-wrapper {
    display: none;
  }

  .language {
    display: none;
  }

  .cover-letter-heading {
    display: none;
  }

  .download {
    display: none;
  }

  .dots {
    display: block;
  }

  /* .letter-wrapper {
        height: 550px;
    }

    .text-wrapper {
        font-size: .6rem;
    } */
}
</style>