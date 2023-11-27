import React from "react";

const AboutModal = () => {
  return (
    <div className="[&>p]:my-2">
      <h3>About</h3>
      <p>
        Hi, I'm Kile Donley, a full-stack web developer. Welcome to my digital
        playground! This website serves as my sandbox where I experiment with
        new tech stacks, showcase my projects, and occasionally share my
        thoughts on tech in my Journal.
      </p>
      <p>
        I have 4 years of experience working in React, Next.js, .NET/C#, among
        other cutting-edge technologies.
      </p>
      <p>
        If you are looking to hire my services, or if you're a fellow developer
        wanting to talk tech, let's connect! Email me at:
      </p>
      <p className="font-bold">kiledonley@gmail.com</p>

      <p>{`Thanks for visiting my site, please enjoy`}</p>
    </div>
  );
};

export default AboutModal;
