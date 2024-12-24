"use client";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { redirect } from "@/constants/redirect";

function thankyou() {
  const params = useParams();
  const slug = params?.slug;

  const data = redirect.find((item) => item.slug === slug);

  if (!data) {
    return (
      <main className="overflow-hidden bg-surface gap-4 px-10 py-[72px] lg:py-[120px] lg:px-40 lg:gap-8 flex flex-col justify-center">
        <h1 className="text-textdark text-center mobile3">
          Invalid Plan Selected
        </h1>
        <p className="text-textdark-300 text-center">
          Please select a valid plan to view the details.
        </p>
      </main>
    );
  }
  return (
    <main className=" overflow-hidden bg-surface gap-2 md:gap-4 px-10 py-[72px] lg:py-[120px] lg:px-40 lg:gap-8 flex flex-col justify-center">
      <h1 className=" text-textdark text-center mobile3">
        Welcome to Sanctorum!
      </h1>
      <div className="flex flex-col gap-7 items-center">
        <p className="text-textdark-300 body-italic mobile6 text-center text-balance lg:text-lg lg:line-clamp-2 ">
          {data.first}
        </p>
        <p className="text-textdark-300  text-balance lg:text-lg lg:line-clamp-2">
          Here&apos;s what&apos;s included in your plan:
        </p>
        <ul className="text-textdark-300 text-start text-balance lg:text-lg space-y-2 md:space-y-0 list-disc list-inside">
          {data.plan.map((plans, index) => (
            <li key={index}>
              <span className="font-bold">{plans.title}</span> - {plans.text}
            </li>
          ))}
        </ul>
        {data.package === true && (
          <>
            <p className="text-textdark-300 text-center text-balance lg:text-lg lg:line-clamp-2 ">
              Next Step: Complete Your Payment
            </p>
            <p className="text-textdark-300 text-start md:text-center md:text-balance lg:text-lg lg:line-clamp-2 ">
              Confirm your booking by completing your payment of ₹{data.amount}{" "}
              using the QR code below:
            </p>

            <Image src={data.image} width={300} height={300} alt={data.slug} />

            <p className="text-textdark-300 md:text-center md:text-balance lg:text-lg lg:line-clamp-2 ">
              Once your payment is processed, we&apos;ll send a confirmation
              message on WhatsApp with all the details your team needs to get
              started.
            </p>
          </>
        )}
        {data.package === false && (
          <p className="text-textdark-300 md:text-center md:text-balance lg:text-lg lg:line-clamp-2 ">
            We&apos;ve received your request and will get back to you shortly
            with a confirmation email and all the details you need to get
            started.
          </p>
        )}

        <p className="text-textdark-300 md:text-center md:text-balance lg:text-lg lg:line-clamp-2 ">
          Have any special requests or requirements? Reach out to us, and
          we&apos;ll be happy to assist!
        </p>
        <p className="text-textdark-300 md:text-center md:text-balance lg:text-lg lg:line-clamp-2 ">
          {data.conclusion}
        </p>
      </div>
    </main>
  );
}

export default thankyou;
