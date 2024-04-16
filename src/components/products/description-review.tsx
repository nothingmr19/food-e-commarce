"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function DescriptionReviewPage() {
  let [categories] = useState({
    Description: [
      {
        id: 1,
        title:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        subDesc: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ],
      },
    ],
    CustomerReview: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });
  return (
    <div className="bg-gray-50">
      <Tab.Group>
        <Tab.List className="flex space-x-1 border-b border-gray-200 w-full max-w-md">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-6 ",
                  selected
                    ? "text-gray-800 font-semibold text-2xl leading-8 border-b-2 border-yellow-500"
                    : "text-gray-600 font-semibold text-2xl leading-8"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 px-6 pb-8">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames("rounded-xl  p-3")}>
              <div>
                {posts.map((post, idx) => (
                  <div key={idx}>
                    <p>{post.title}</p>
                    <ol></ol>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
