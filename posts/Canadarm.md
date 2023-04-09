---
title: "History of Robotics #10 - Canadarm - Testing, Testing"
date: "2023-03-22"
description: "Tech Support's History of Robotics, #10"
thumbnail: "/static/images/blog/mar22_23/canadarm_work.jpg"
---




What is the most important requirement for any robot? It’s not its speed, power, or even functionality. No, the most important requirement is that it works as intended. Designing and building a robot is fun, but it is only hard work to test a robot. You have to test success, failure, and everything in-between. And if you think testing an Earth-bound robot is challenging, imagine the difficulty in testing a robot designed to work in space. The Canadian Space Agency’s (CSA) Canadarm, the robot arm for NASA’s space shuttles, showed that testing a robot can be more challenging than building it, but that the effort is worth it. 


Canadarm (officially the Shuttle Remote Manipulator System Arm) has been an essential part of space programs for over 40 years. Originally, astronauts needed a mechanism that could safely unload items, such as satellites, from the cargo bay of a space shuttle. Later, the International Space Station needed an arm for assembly and repair. The arm had to be strong enough to lift massive objects, gentle enough to not damage delicate equipment, and precise enough to work on fine-grained components. Most importantly, it had to work reliably in space.


![](/static/images/blog/mar22_23/canadarm_space.jpg)


In 1969, NASA asked the Canadian Space Agency (CSA) to design an arm that could be a part of its future space shuttles. After over a decade of design, implementation, and testing, Canadarm (short for “Canadian Arm”) took flight on the Space Shuttle Columbia on November 12, 1981. The arm was approximately 15m long and 40cm in diameter, and it weighed nearly 500kg. Astronauts controlled the arm from a control station inside the shuttle, with the help of cameras mounted on the arm. 


Canadarm is modeled after a human arm. 
![](/static/images/blog/mar22_23/canadarm_parts.jpg)
It has two long upper and lower booms that are like “bones.” The booms are made of graphite and covered by a protective Kevlar skin. At the end of the arm is the end effector or “mechanical hand” which looks similar to a LEGO hand. It is a cylinder with a 20.3 cm diameter and three cables that secure the object, like closing fingers.
![](/static/images/blog/mar22_23/canadarm_end.jpg)
 The shuttle, bones and hand are connected by three shoulder, elbow, and wrist “joints” made of motor-driven gearboxes. The shoulder joint has two gears to enable side-to-side and up-and-down movement. The elbow has one gear to move up and down. The wrist is made of three gearboxes for motion in all directions. Since each motor is independently controlled, the arm can do things that a human arm cannot. 
![](/static/images/blog/mar22_23/canadarm_joints.jpg)






Canadarm can safely operate on massive objects in space. It has handled objects as large as 265,000 kg, but it generally works on objects that are 5000 kg or less. As the payload increases, the arm slows from a maximum speed of 0.6 m/s to a minimum speed of 0.06m/s. Meanwhile, while the astronauts control the arm, they actually input basic commands and Canadarm’s software translates their commands into the actual motor commands, so that the arm’s integrity is not compromised. Additionally, every 80 milliseconds the system runs a diagnostic and automatically applies the brakes to all joints if there is any issue. 


![](/static/images/blog/mar22_23/canadarm_satellite.jpg)


Despite being designed for safety and reliability, the biggest challenge was testing Canadarm. Since it was designed for space, Canadarm is not even strong enough to support its own weight on Earth. Any standard test on Earth would crack the arm. 


Every part of Canadarm testing required innovative solutions.  
1. They unit tested every component, to ensure that there were no individual flaws.
![](/static/images/blog/mar22_23/canadarm_workers.jpg)
2. The CSA built a computer-based simulation facility to train astronauts.
![](/static/images/blog/mar22_23/canadarm_test.avif)
3. The CSA built a custom test room with a scientifically precise flat floor. Then they installed a special rig with air padding to support the arm. Canadarm “floats” over a floor on a cushion of air, which enables it to move its shoulder, elbow, and wrist joints without compromising the integrity of the arm.
![](/static/images/blog/mar22_23/canadarm_skeleton.jpg)
4. Astronauts tested a real Canadarm underwater at NASA's Neutral Buoyancy Laboratory’s 12m pool that simulates the weightlessness of space.
![](/static/images/blog/mar22_23/nasa-nbl.jpg)


Not surprisingly, over 50% of the budget for Canadarm was spent on testing. 


The time, money, and energy were well spent however. Canadarm has helped build the ISS, fix the Hubble Space Telescope, deployed and retrieved satellites, assisted astronauts walking in space, and performed critical scientific experiments!


![](/static/images/blog/mar22_23/canadarm_astronaut.jpg)


Most interestingly, the astronauts always observe that the computer-based simulation is always more comprehensive than any operation they’ve ever done in space. The testers followed the most important rule of evaluating a product - be prepared for everything. 


Testing may not be the most glamorous aspect of building robots, but there is no worse feeling than seeing your robot break down at the worst possible time. The right tests can make sure that your robot is ready for anything - no matter how harsh the condition. Canadarm has done its job for over 40 years, and astronauts give it the greatest of all compliments - “It just works.”
![](/static/images/blog/mar22_23/Quality.jpg)
