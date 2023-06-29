"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 rounded-2xl my-16"
    >
      <div className="flex justify-center">
        <h3 className="text-[#ffffffe6] bg-[#ffffff1a] border border-[#f2f2f25b] my-6 w-fit text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-widest">
          FAQ
        </h3>
      </div>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Got Questions? <br /> We&apos;ve Got Answers.
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-[35px] bg-[#252525] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] py-8 px-6 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>What can Bold do for me?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal opacity-50">
                  We&apos;re all about making your brand shine! We do graphic
                  design, branding, digital marketing, web design, and more.
                  Let&apos;s create something amazing together!
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-[35px] bg-[#252525] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>How do you guys work at Bold?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal opacity-50">
                  We&apos;re all about teamwork here! We chat with you,
                  brainstorm, make a plan, and then bring your vision to life.
                  And don&apos;t worry, you&apos;re part of the team too - your
                  feedback is always welcome.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-[35px]  bg-[#252525] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] py-8 px-6">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>How do I start with Bold?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal opacity-50">
                  Starting with us is as easy as pie! Just drop us a line
                  through our website, email, or give us a call. We can&apos;t
                  wait to meet you and start our creative adventure together!
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
