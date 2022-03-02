---
title: "This Week in FRC"
date: "2022-02-21"
description: "Tech Support's update for the week of 2/21"
thumbnail: "/static/images/blog/feb21/image2.jpg"
---

During the 3 day weekend, we traveled to the Livermore Airport to assist the Livermore Robotics Team 6059 with robot practice. With about a week remaining, the team has been in structured chaos; all of the subteams are rushing to finish our prototype robot in time for Sunday. This season’s *Rapid React* game challenges us to create a robot that can pick up and shoot cargo into a scoring hub. Additionally, during the endgame phase, the robot needs to be able to climb its way up as many as four ascending rungs. Without further ado, here is what we’ve been finalizing and working on this week!

**Intake****:**

The intake of our robot collects cargo, a field element used for scoring points. The intake subteam began working on a 4 bar mechanism several weeks ago but has since decided to move on to a more reliable design. The new design has a single pivot point with pneumatics actuating the rotation of the intake arm. The highlight of the new design is the cut-out in the bumper that serves as a backup method of intaking cargo if the actuated arm fails. It is a compromise between the reliability of an intake similar to the one on our 2020 robot, and the effectiveness of a wide intake. After several iterations over the last couple of weeks, here are photos of our current designs:

![](/static/images/blog/feb21/image3.png)

![](/static/images/blog/feb21/image6.png)

**Loader****:**

The loader may seem like a small part of the robot, but it is quite important, sending balls up to the shooter from the intake. This week, we finalized the design of the shooter and began fabricating it out of aluminum.

**Shooter:**

After our shooter broke during testing, the shooter subteam rushed to put together a new and stronger prototype this week. Using the same design, we made a couple of changes to make the frame more rigid. Rather than having thinner laser-cut wood side plates, we incorporated thick CNC lathe fabricated plywood. The new shooter is mounted on a turret, which is essentially a giant ball bearing. Additionally, we have a motor that spins the shooter up to 180º.

![](/static/images/blog/feb21/image2.jpg)![](/static/images/blog/feb21/image1.jpg)

With the mechanical team knee-deep in aluminum shavings and sawdust, the programmers have also been hard at work finalizing code to make these mechanisms operational. Now is the time when mechanicals and programmers collaborate on subsystems, like our elevator!

**Hangar/Elevator:**

Our elevator allows for the robot to hang on the rungs, a vital part of the game. The robot can hang onto 4 rungs, each one higher than the other. This week, we started to rebuild fixed-length arms as well as motors to ensure it can reach the hangar. With the physical elements done, we also deployed code written by the programmers to control the elevator with a joystick. Using our field elements, we tested the elevator to see if it could lift itself up and hang successfully.

![](/static/images/blog/feb21/image9.png)![](/static/images/blog/feb21/image5.png)

**Limit Switch Sensors:**

We have been implementing both physical and soft limit switches. Limit switches ensure that a mechanism does not go beyond its maximum, which is essential in making sure nothing breaks. Specifically, we have been using them with motor controllers, such as the TalonSRX and the SparkMax.

**Turret:**

As previously mentioned, a turret mechanism using a SparkMax motor allows us to maneuver the shooter in any direction throughout the game. Moreover, we will be able to adjust the shooter independently of the robot itself, which provides us with many improvements in efficiency. A video of this in action can also be found on our [instagram](https://www.google.com/url?q=https://www.instagram.com/7419tech/&sa=D&source=editors&ust=1646262129564072&usg=AOvVaw00QuczXo77321ZgkInhAn9).

**Auton Testing:**

Autonomous code is code written for the autonomous period, which lasts for 15 seconds at the beginning of the game. During this period, robots are controlled solely by code with no driver input. Our autonomous code consists of several commands such as collecting and shooting preloaded cargo. The two most commonly used commands are turning and “straight with motion” magic commands. These commands allow our robot to move and turn accurately; ensuring that the robot will traverse our predefined paths with as little deviation as possible. We also utilized the navX gyroscope, which allows us to track the bearing and direction of the robot. This enables us to perform turns with great precision. This week we have finalized the code and have tested it on our old 2021 robot. Clips of the robot testing can be found on our [instagram](https://www.google.com/url?q=https://www.instagram.com/7419tech/&sa=D&source=editors&ust=1646262129564573&usg=AOvVaw19btqAawVYHYRJJ7OsvmBM)!

![](/static/images/blog/feb21/image7.jpg)![](/static/images/blog/feb21/image4.png)

Build season so far has been a wild but rewarding journey and we are ecstatic to put final touches on our robot and begin with competitions soon! As always, if you have any questions, please do not hesitate to contact the team at support@7419.tech or use our contact page on our [website](https://www.google.com/url?q=https://www.7419.tech/about/contact&sa=D&source=editors&ust=1646262129565108&usg=AOvVaw1Fw3HM8mGyOkU_sRyVoXYF)!

Until next week!

\-7419’s writing crew