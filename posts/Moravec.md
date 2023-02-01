---
title: "History of Robotics #4 - Hans Moravec Simplifies the Mobility Problem"
date: "2023-02-01"
description: "Tech Support's History of Robotics, #4"
thumbnail: "/static/images/blog/feb1/Moravec-Paradox.jpg"
---

Moravec's Paradox - for a computer, complex reasoning is easy but basic vision is difficult. 


After Shakey the Robot became the first mobile robot in 1970, the technology stagnated. For decades, researchers added more advanced hardware and created complex new algorithms, but the results were only marginally better than Shakey. Then, Hans Moravec, the creator of Moravec’s Paradox, revolutionized robot mobility. Moravec’s brilliance was that he simplified the problem, rather than trying to overwhelm it with hardware and software. 

![](/static/images/blog/feb1/Moravec.jpg)

Like many engineers, Hans Moravec became interested in robotics when he was young. Born in Austria in 1948, he built a car with tin cans and a motor when he was ten, and won two high school science fairs with robots. His 1980 PhD thesis was modeled after Shakey - a robot that could navigate an obstacle course in about five hours. Like Shakey, Moravec’s robot used an onboard camera and a remote computer to identify impediments and find the optimal path. 



After graduating, he started the Mobile Robot Lab at Carnegie Mellon University, with the goal of creating truly “free range” robots. Even in the 1980s, Moravec believed that robots had to be able to navigate autonomously in truly dynamic environments. First, even in controlled environments in which the robot has a predefined map, things can change or the robot can lose its position. Second, over long distances, robots will lose precision on their location. Third, if humans were ever to send a robot to another planet or to the bottom of the ocean, there is no predefined map. The robot would have to be autonomous. 

![](/static/images/blog/feb1/Lost-Robot.jpg)

As Moravec and his team struggled with the problem, he created his Paradox, and explained it by saying, “it is comparatively easy to make computers exhibit adult level performance on intelligence tests or playing checkers, and difficult or impossible to give them the skills of a one-year-old when it comes to perception and mobility.” 

![](/static/images/blog/feb1/Moravec-Paradox.jpg)

Until 1985, robots tried to identify objects as they mapped out their path. They would try to classify each object in view, use their knowledge of the object (i.e. its real size) to compute its distance from the robot, and then create a path to avoid it. Therefore, the robots all had cameras to feed the images to a computer. The computer would use geometric algorithms to identify edges and then pattern match the object. Classifying objects was extremely slow, computationally expensive, unreliable in dark lighting, and struggled with partially blocked objects. 

![](/static/images/blog/feb1/Old-Matching.jpg)

In 1985, Moravec created a new model for robotic perception and mobility. He realized that the robot did not need to know what the blocking object was… just that something was there and how far away it was. Moravec started working on his approach, called “Occupancy Grid Mapping.” He represented the environment as a simple grid in which each element in the grid had a binary value - blocked or open. Then, he used sensors, rather than cameras, to detect the state of each element in the grid. As with SONAR on a submarine, if the signal bounced off a location in the grid, then there was an obstacle. 

![](/static/images/blog/feb1/Occupancy-grid-map.png)

While Moravec’s Occupancy Grid simplified obstacle detection and mapping, he still faced multiple challenges. First, since the environment is dynamic because objects or the robot itself moves, the map has to be continually updated. Unfortunately, with a large area it is expensive to constantly rebuild the grid. Moravec solved the challenge with algorithms that detect changes, rather than always starting from scratch. Second, sensors can be faulty. To solve this problem, Moravec used multiple sensors, and created a map based on each sensor. He combined each of their maps to get a composite view of the environment. If one of the sensor’s maps did not get created or conflicted with the others, the algorithm discarded it. Third, the robot can be in difficult environments (e.g. fog, dust, glass), interact with objects that do not fill an entire space, or work with objects that move rapidly. Moravec added a stochastic model to account for randomness. Each element in the grid has a probability of being full, based on previous observations. To compute the model efficiently for so much data and so many grid elements, he used the logarithms of the data. 

![](/static/images/blog/feb1/Advanced-Grid.jpg)

Moravec’s approach became the new standard. In retrospect, it seemed obvious, but nobody had thought of it. Dozens of research papers explored how to optimize his methods, but did not challenge the core design. 


Then Moravec pushed forward into three dimensions. With more powerful computers and new technology, Moravec believed that true “free range” robots could be possible. One key technology was LiDAR (Light Detection And Ranging). Once again, similar to SONAR, the robot sends out pulses of laser light and time how long it takes for the light. The round trip time reveals how close any object is. Just as importantly, LiDAR can send pulses in 3 dimensions and high performance processors can analyze the results, so robots can make a 3D occupancy grid. 

![](/static/images/blog/feb1/3D-Grid.png)

In 2003, Moravec started his own company, SeeGrid Corporation, to build robots that can function in 3D spaces. Even though he aspired to build completely free range robots, SeeGrid builds robots for warehouses and manufacturing facilities, combining his Occupancy Grid technology with simpler maps and floor cameras. Even Hans Moravec’s company is not excluded from Moravec’s Paradox - building robots that can function in open space is still much harder than you would think. 

![](/static/images/blog/feb1/SeeGrid.jpg)

Hans Moravec transformed the world of robotics. He didn’t do it by inventing new hardware or generating the most optimized piece of software. He looked at the problem and asked - “Could we simplify this?” As we solve problems and build our robots, it’s always worth thinking about Hans Moravec and ask ourselves - “What am I trying to solve, and am I making it harder than it needs to be?”

![](/static/images/blog/feb1/simplify.jpg)
