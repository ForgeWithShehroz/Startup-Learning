import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="">Home Page</h1>
       <Image
      src="https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-ieic5Tq8YMk"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  );
}

