'use client';

import {useState} from "react";
import Image from 'next/image'

const FlipCoin = () => {
    const [coinSideHead, setCoinSideHead] = useState<boolean>(true)


    const randomEnumValue = () => {
        const values = Object.keys(CoinSide);
        return values[Math.floor(Math.random() * values.length)];
    }

    const setCoinSideHandler = () => {
        const enumValue: string = randomEnumValue()
        if (enumValue === 'Heads') {
            setCoinSideHead(true)
        } else {
            setCoinSideHead(false)
        }

    }

    return (
        <div className="flex flex-col items-center justify-center w-1/2 lg:w-1/3">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Flip a coin</h1>
            {coinSideHead &&
                <Image
                    src="heads.jpg"
                    alt="heads coin"
                    width={200}
                    height={200}
                />
            }
            {!coinSideHead &&
                <Image
                    src="tails.jpg"
                    alt="tails coin"
                    width={200}
                    height={200}
                />
            }

            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={setCoinSideHandler}>Flip
            </button>
        </div>
    );
};

enum CoinSide {
    Heads = "HEADS",
    Tails = "TAILS",
}

export default FlipCoin;
