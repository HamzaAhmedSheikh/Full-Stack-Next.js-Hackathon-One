import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="lg:px-10 px-5 max-w-[1240px] mx-auto mt-10">
      <div className="flex justify-center items-center w-full">
        <SignUp afterSignUpUrl={"/"} />
      </div>
    </section>
  );
}
