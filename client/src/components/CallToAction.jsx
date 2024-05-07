import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row items-center justify-center p-3 border border-teal-500 rounded-tl-2xl rounded-br-2xl">
      <div className="flex flex-col items-center justify-center gap-2 flex-1">
        <h1 className="text-center text-lg font-semibold">
          Want to Learn about javaScript ?
        </h1>
        <p className="text-justify font-Dosis text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          optio molestiae, error veniam, sequi nam vero possimus tempora
          voluptatem autem, debitis quod facilis sit. Exercitationem voluptates.
        </p>
        <Link
          to="https://www.100jsprojects.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button gradientDuoTone="purpleToPink">
            100 Projetcs of javaScript
          </Button>
        </Link>
      </div>
      <div className="flex-1">
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png"
          alt="javaScript"
        />
      </div>
    </div>
  );
}
