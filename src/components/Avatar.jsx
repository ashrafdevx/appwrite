import React from "react";

const Avatar = () => {
  return (
    <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
      <div className="absolute inset-0">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s"
          }
          alt={"alt || img"}
        />
      </div>
    </div>
  );
};

export default Avatar;
