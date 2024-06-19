import React from "react";
import img1 from "../../assets/img1.jpg"

const Articles = () => {
    return (
        <div className="container py-14 relative">
            <div >
                <h1 className="py-8 tracking-wider texr-2xl font-semibold text-dark text-center">
                    Taste the Healty Difference
                </h1>

                <div className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div>
                            <p>
                                {" "}
                                We know that<span
                                    className="text-primary">
                                    time
                                </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Molestias, nihil nesciunt consequatur doloremque commodi aspernatur sunt
                                corrupti voluptas dolorem quis aperiam veritatis necessitatibus, voluptatibus
                                magnam voluptate? Pariatur voluptas minus doloremque.
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div></div>
                        <div>
                            <p>
                                {" "}
                                We know that<span
                                    className="text-primary">
                                    time
                                </span>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Molestias, nihil nesciunt consequatur doloremque commodi aspernatu
                                r sunt corrupti voluptas dolorem quis aperiam veritatis necessitatibus,
                                voluptatibus magnam voluptate? Pariatur voluptas minus doloremque.
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div>
                            <p>
                                {" "}
                                We know that<span
                                    className="text-primary">
                                    time
                                </span>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Molestias, nihil nesciunt consequatur doloremque commodi aspernatu
                                r sunt corrupti voluptas dolorem quis aperiam veritatis necessitatibus,
                                voluptatibus magnam voluptate? Pariatur voluptas minus doloremque.
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div></div>
                        <div>
                            <p>
                                {" "}
                                We know that<span
                                    className="text-primary">
                                    time
                                </span>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Molestias, nihil nesciunt consequatur doloremque commodi aspernatu
                                r sunt corrupti voluptas dolorem quis aperiam veritatis necessitatibus,
                                voluptatibus magnam voluptate? Pariatur voluptas minus doloremque.
                            </p>
                        </div>
                        <div></div>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div>
                            <p>
                                {" "}
                                We know that<span
                                    className="text-primary">
                                    time
                                </span>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Molestias, nihil nesciunt consequatur doloremque commodi aspernatu
                                r sunt corrupti voluptas dolorem quis aperiam veritatis necessitatibus,
                                voluptatibus magnam voluptate? Pariatur voluptas minus doloremque.
                            </p>
                        </div>
                        <div></div>
                    </div>
                <div className="flex justify-center mt-10 sm:mt-14">
                    {/* <PrimaryButton /> */}
                </div>
            </div>
            </div>
            <div className="abslute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50
            sm:opacity-100">
                <img src={img1} className="max-w-[160px]" />
            </div>
            <div
                className="absolute -bottom-16 -left-16
             sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100"
            >
                <img src="" className="max-w-[280px]" />
            </div>
            <div
                className="absolute top-10 -right-16
             sm:right-20  opacity-50 sm:opacity-100"
            >
                <img src="" className="max-w-[280px]" />
            </div>
            <div
                className="hidden sm:block absolute bottom-0 right-0"
            >
                <img src="" className="max-w-[280px]" />
            </div>
            <div
                className="hidden sm:block absolute bottom-0 right-0"
            >
                <img src="" className="max-w-[280px]" />
            </div>

        </div>
    )
};
export default Articles

