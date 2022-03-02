import React from 'react';

function Business() {
    return (
        <main className="flex-grow">
            <section className="relative">

                {/* Illustration behind content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
                    <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#EAEAEA" offset="77.402%" />
                                <stop stopColor="#DFDFDF" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
                            <circle cx="1630" cy="128" r="128" />
                            <circle cx="178" cy="481" r="40" />
                        </g>
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h2 className="h2 mb-4">Business Plan</h2>
                            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                                Interested in joining Team 7419 as a sponsor or mentor?</p>
                        </div>
<div className="mx-auto text-center">
                        <p className="mb-2">Part of a company who might be willing to provide or match a donation?</p>

                        <p className="mb-2">Check out our Sponsorship Information Packet for more information on supporting Team 7419 as we continue to expand our program! Since we're a 501(c)3, any donation is tax-deductible, and we proudly wear the names and logos of our sponsors on our team shirts, as well as on our robots and team banner.</p>

If you have any questions about how to sponsor the Tech Support Robotics Team, please send us an email at <a className="underline" href="mailto:support@7419.tech">support@7419.tech</a>. Thank you for your interest!
</div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Business;