﻿---
title: "History of Robotics #6 - Rodney Brooks Bets Everything on Roomba"
date: "2023-02-15"
description: "Tech Support's History of Robotics, #6"
thumbnail: "/static/images/blog/feb15/roomba.jpg"
---

Rodney Brooks, the inventor of the Roomba, once mused, “Science works by most people throwing away their careers… You make an intellectual bet, and you have to work on it for a long time, and maybe it pays.” Brooks bet his entire career on the principle that robots should be more like ants and less like humans, and he helped create an entirely new class of robot. 

![](/static/images/blog/feb15/Brooks2.jpg)

Like so many robotics innovators, Brooks was drawn to technology from a young age. He was born in Adelaide, Australia in 1954, and he created a machine that could play tic-tac-toe from lightbulbs and telephone parts. After studying mathematics in college in Australia, he enrolled in Stanford’s PhD program to study Artificial Intelligence and Robotics. By 1984, he had graduated and was working at MIT’s robotic labs. 

![](/static/images/blog/feb15/Brooks1.jpg)


In the 1980s, Hans Moravec dramatically simplified robotic mobility. Instead of trying to identify every object when mapping out a path through a room, Moravec’s algorithm simply looked for “obstacle” or “not obstacle” and then built the most efficient path to the target. 

![](/static/images/blog/feb15/Moravec.png)


While Brooks respected Moravec’s work, he rejected the principle of creating and following a map. First, he argued, environments are not static. A robot could hit a moving object before it had time to detect a possible collision and create a new map. Second, since computer processors were so slow, robots could scarcely cross a room in under 8 hours because they spent so much time calculating and recalculating maps. Anything that moved so slowly could not be of any practical use. 


Brooks believed that robotics engineers should not try to make all robots think like humans because most robots are focused on simpler tasks. For example, for robotic mobility, he observed that insects could navigate complex environments without complex reasoning, map-creation, or path creation. If you put an obstacle into a line of ants, they do not stop and recompute a map. They keep moving until they find a way around the blockage, reorient towards the goal, and incrementally adjust until they are back in line. 
![](/static/images/blog/feb15/Ants.jpg)

Modeling his mobility approach after insects, Brooks wanted to build robots that used a rapid feedback loop to direct its action. The first step was to create basic rules or “behaviors” that directed the robot’s behavior. The behaviors would have to be so simple that the robot would not need to pause to recompute. 


Brooks’s first attempt, named Allen, followed three rules:
1. Avoid Objects. The robot used a simple sensor to detect a possible collision, and immediately moved in a different direction to avoid or minimize contact. 
2. Wander Around. The robot moved in random directions, so it would explore the available space. 
3. Explore World. Allen did not try to plot the most efficient path to the remote target, but as it wandered and avoided collisions, it constantly adjusted to get closer to the goal.
Within a year, Allen could move through a crowded room at the speed of a small child. Brooks called the approach “subsumption” because he believed that simple behaviors could subsume the functions of complex AI models. 

![](/static/images/blog/feb15/Allen.webp)


Brooks made the biggest bet of his career when he founded iRobot with two of his students, Helen Greiner and Colin Angle. Initially, iRobot developed PackBot, a mobile robot for the U.S. military. The model of wandering was ideal for finding and destroying landmines and for searching through destroyed buildings for survivors. 

![](/static/images/blog/feb15/Packbot.jpg)

Still Brooks yearned to make a bigger impact. As the cost of robotic components dropped, Brooks declared - “Robots are good at very simple things like cleaning the floor.” By 2002, iRobot released the Roomba, the little robot that vacuumed people’s homes.

![](/static/images/blog/feb15/roomba.jpg)

There were four main components in a Roomba: 
1. Optical sensors - a photocell measured a change in light, which could help detect if the Roomba was approaching stairs or a balcony; an infrared sensor measured object distance to minimize the likelihood/speed at which the Roomba would bump into an object
2. Bump detector - a simple vibration detector that identified a bump, so that the Roomba could change direction
3. Optical encoders on the wheels - the Roomba needed to track distance so it could make its way to a recharging station when the battery ran low
4. Piezoelectric sensor - the sensor creates a voltage when it is pressured (e.g. by dirt particles); when bits of dirt hit the sensor, the Roomba got a signal that it should spend more time in that area, before wandering again

![](/static/images/blog/feb15/Roomba-Arch.webp)

Roomba had only two basic behaviors:
1. Follow the wall - If the Roomba hit a wall, it would try to follow the wall to clean the edges of the room until it hit an object or ran out of wall
2. Random bounce and wander - Without a wall, Roomba would move around the room until it hit an object, then change directions and clean somewhere else 


For a generation, people have seen Roombas randomly clean their homes. Early customers wondered why the Roomba did not follow a methodical pattern, the way a human would. Brooks explained that rooms have odd angles, furniture, people, and pets, so Roomba’s random approach was not a bug to be fixed - it was the core feature. He argued that a “smarter” robot would spend more time computing its map than actually cleaning. iRobot has sold over 25 million Roombas, so Brooks’s bet clearly paid off. 

![](/static/images/blog/feb15/roomba-room.webp)

Not all robots would succeed using Brooks’s “behavior” based subsumption architecture, but the Roomba is an example of a new class of mobile robots that are cost-effective and adaptable. Brooks believed in his idea and made it his life’s work. In his case, it worked out. Still, Rodney Brooks would point out that the scientists whose ideas did not work out are no less important to the history and future of robotics. We have to take risks, and even our failures can help guide others to a more successful future. Science is about the process - not the results.

![](/static/images/blog/feb15/Process.png)
