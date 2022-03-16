import React from "react";

import RobotFeatures from "../../partials/RobotFeatures";

function NewRobot() {
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6" />
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-14"
            data-aos="y-zoom-out"
          >
            <h2 className="h2 mb-4">Our Robot</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              <p className="mb-3">The design and execution of our robot </p>
            </p>

            {/* 2020 Robot */}
            <p className="text-xl" data-aos="zoom-y-out">
              <h4 className="mb-3 h4 mx-auto text-center">2020 Robot </h4>
            </p>
            <p className="max-w-4xl w-full  mx-auto text-gray-800">
              Dubbed “Everybot II”, our 2020 robot was made to accomplish the
              goals of the FIRST’s challenge: INFINITE RECHARGE. The simple yet
              effective robot features an intake that feeds cargo into the
              shooter, launching out power cells to score points. In our current
              season, we implement the robot as an exemplar to test out new code
              and give new members an overview of the FRC program.
            </p>
          </div>
          <RobotFeatures />
        </div>
      </section>
    </main>
  );
}

export default NewRobot;
