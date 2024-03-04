import Image from "next/image";
import React, { useState } from "react";


interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: Array<Technology>;
  url: string;
  urlButton: string
}

interface Technology {
  name: string;
  icon: string;
}

const CardProject: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  url,
  technologies,
  urlButton,
}) => {
  const [toolTipVisible, setToolTipVisible] = useState<string | null>(null);

  return (
    <section>
      <div className="sm:flex gap-5 mb-10 sm:px-0 px-5 items-end">
        <a href={url} target="_blank">
          <div className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700">
            <div className="rounded-lg transition-all duration-500 hover:translate-x-5 hover:translate-y-5 sm:w-96">
              <Image
                src={imageSrc}
                width={400}
                height={400}
                alt="Project"
                className="w-full object-cover rounded-lg items-center"
              />
            </div>
          </div>
        </a>

        <div className="flex flex-col self-center gap-3">
          <div>
            <h3 className="font-bold text-3xl text-slate-600 dark:text-white pt-2">{title}</h3>
          </div>
          <div>
            <p className="text-gray-600 dark:text-white text-lg">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            {technologies.map((tecnology) => (
              <div
                key={tecnology.name}
                className=""
                onMouseEnter={() => setToolTipVisible(tecnology.name)}
                onMouseLeave={() => setToolTipVisible(null)}
              >
                <Image
                  className="w-7"
                  alt="tecnology-icon"
                  src={tecnology.icon}
                  width={400}
                  height={400}
                />
                {toolTipVisible === tecnology.name && (
                  <div className="absolute transform bg-indigo-100 text-indigo-500 dark:bg-white dark:text-black p-1 text-sm rounded mt-1 ">
                    <span className="">{tecnology.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <a
              href={urlButton}
              target="_blank"
            >
              <button className="flex p-3 mt-3 w-auto text-white dark:text-black font-bold dark:font-bold bg-slate-800 dark:bg-white rounded-md transition-all gap-2 hover:gap-5">
                <div>Code</div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    className="fill-white dark:fill-black"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M16.4425 7.32787C16.7196 7.01999 17.1938 6.99503 17.5017 7.27213L19.2392 8.83587C19.9756 9.49853 20.5864 10.0482 21.0058 10.5468C21.4468 11.071 21.7603 11.6343 21.7603 12.3296C21.7603 13.0249 21.4468 13.5882 21.0058 14.1124C20.5864 14.611 19.9756 15.1607 19.2392 15.8233L17.5017 17.3871C17.1938 17.6642 16.7196 17.6392 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7453C18.9826 14.0362 19.5138 13.5558 19.8579 13.1468C20.1882 12.7542 20.2603 12.525 20.2603 12.3296C20.2603 12.1342 20.1882 11.905 19.8579 11.5124C19.5138 11.1034 18.9826 10.623 18.1947 9.91389L16.4983 8.38707C16.1904 8.10997 16.1654 7.63576 16.4425 7.32787Z"
                      ></path>{" "}
                      <path
                        d="M7.50178 8.38707C7.80966 8.10997 7.83462 7.63576 7.55752 7.32787C7.28043 7.01999 6.80621 6.99503 6.49833 7.27213L4.76084 8.83587C4.0245 9.49853 3.41369 10.0482 2.99428 10.5468C2.55325 11.071 2.23975 11.6343 2.23975 12.3296C2.23975 13.0249 2.55325 13.5882 2.99428 14.1124C3.41369 14.611 4.02449 15.1607 4.76082 15.8233L6.49833 17.3871C6.80621 17.6642 7.28043 17.6392 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7453C5.01743 14.0362 4.48623 13.5558 4.14213 13.1468C3.81188 12.7542 3.73975 12.525 3.73975 12.3296C3.73975 12.1342 3.81188 11.905 4.14213 11.5124C4.48623 11.1034 5.01743 10.623 5.80531 9.91389L7.50178 8.38707Z"
                      ></path>{" "}
                      <path
                        opacity="0.5"
                        d="M14.1816 4.2755C14.5817 4.3827 14.8191 4.79396 14.7119 5.19406L10.7383 20.0238C10.6311 20.4239 10.2198 20.6613 9.81974 20.5541C9.41964 20.4469 9.18221 20.0356 9.28941 19.6355L13.263 4.80583C13.3702 4.40573 13.7815 4.16829 14.1816 4.2755Z"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
