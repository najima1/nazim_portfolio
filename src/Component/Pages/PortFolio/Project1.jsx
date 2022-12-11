import React from "react";
import img1 from "../../image/image1.png";

const Project1 = () => {
  return (
    <div className="pt-16 container">
      {/* banner image */}
      <div>
        <img src={img1} alt="" />
      </div>

      {/* project content her */}
      <div>
        <section className="dark:text-gray-900">
          <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
              <span className="text-2xl">Live Demo </span>
              <a
                href="https://cute-khapse-9156fa.netlify.app/"
                target="_blank"
                className="text-orange-400"
              >
                click here
              </a>

              <a
                className="text-xl ml-8"
                href="https://github.com/najima1/vegetable-shop-client-side.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-lg font-bold md:text-xl">
                  2022 Fresh grocery shop templete
                </h3>
                <ul className="space-y-4">
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current dark:text-violet-400"
                      >
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                      </svg>
                      <h4 className="font-medium">
                        <strong>Feature</strong>
                      </h4>
                    </div>
                    <p className="ml-7 dark:text-gray-500 ">
                      1. This site is MERN Stack templete.
                      <br />
                      2. There are three types of product category. <br />
                      3. A user can purcheas any types of product from there.{" "}
                      <br />
                      4. If user click the any type of product category then he
                      see multiple product with category related.
                      <br />
                      5. If user dosen't login user he can't see category inner
                      product
                      <br />
                      6. If user login he can able to add product & can see
                      added product in here dashboard.
                      <br />
                      7. A user can delete any added product from deshboard.{" "}
                      <br />
                      8. A user can review any product if he wants.
                      <br />
                      9. A user can login or logout
                    </p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current dark:text-violet-400"
                      >
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                      </svg>
                      <h4 className="font-medium">
                        <strong>Technology</strong>
                      </h4>
                    </div>
                    <p className="ml-7 dark:text-gray-500">
                      1. Tailwind css <br />
                      2. React
                      <br />
                      3. React hooks form
                      <br />
                      4. Firebase -- firebase Hosting
                      <br />
                      5. Axios
                      <br />
                      6. React query
                      <br />
                      7. Node js
                      <br />
                      8. Express js
                      <br />
                      9. Database -- mongoDB
                      <br />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project1;
