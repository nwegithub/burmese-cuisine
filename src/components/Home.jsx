import React from "react";
import Button from "../layouts/Button";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('https://i.pinimg.com/564x/c5/d2/c3/c5d2c30779c668c58fd372f2264eccb3.jpg')] bg-cover bg-no-repeat">
            <div className="w-full lg:w-2/3 space-y-5">
                <h1 className="text-backgroundColor font-semibold text-6xl">Elevate Your Inner Foodie with Every Bite</h1>
                <p className="text-backgroundColor">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut dolor magni, amet fugiat veniam accusantium minus similique natus porro dolorem? Exercitationem ratione expedita ducimus natus dolorum aperiam iure modi.
                </p>
                <div className="lg:pl-44">
                    <Button title="Order Now" />
                </div>
            </div>
        </div>
    )
}
export default Home;