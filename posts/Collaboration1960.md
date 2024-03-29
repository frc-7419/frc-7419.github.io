﻿---
title: "Technology and Art #3 - Collaboration the 1960s"
date: "2023-10-08"
description: "Tech Support's Technology and Art, #3"
thumbnail: "/static/images/blog/oct08_23/Graphic1.webp"
---

In the early 1960s, artists were clamoring to use computers to revolutionize the art world, but there was no software and the hardware was too slow and limited. After hearing of the artists’ challenges, engineers at Bell Telephone Laboratories (Bell Labs) and IBM decided to help. After a decade of developing computers for the military, many technologists embraced the opportunity to use computers for something new. Computer art stimulated innovation in programming languages, hardware, and user interfaces. Even better, the early pioneers of developing computers for artists, filmmakers, and musicians built on each others’ work, regardless of the company they worked for. 

![](/static/images/blog/oct08_23/BellLabs.jpg)

**Software**

Before 1963, nobody had built software to help artists use computers. The original computer artists were <a href=ComputerArt1950> programmers </a> who wanted to express their creativity. Unfortunately, most people did not have extensive computer training, and creating art on a computer was exceptionally complicated. For example, creating an animated short required the artists to understand computer architecture. Each frame of animation was 252x184 pixels, in which each pixel was represented by a byte of memory. The operator had to manually set each byte of memory on the computer to a value from 0-7. The values represented different intensities of gray - from white (0) to black (7). When all the values were input, the computer would generate a frame of the film. Not only was the work painstaking, but it was prone to error because any error in converting the desired pixel location to the memory address would ruin the image. Artists desperately needed software packages to help them deal with the complexities of the computers.

![](/static/images/blog/oct08_23/Pixels.jpg)

In 1963, Ken Knowlton invented BEFLIX, a programming language to help artists create animated films. BEFLIX, short for Bell Flicks (slang for movies), simplified the interface to computer memory. Rather than forcing the artists to convert the pixel grid into memory locations, BEFLIX presented the artists with a simple coordinate pair interface. Instead of thinking in terms of memory addresses, they could enter values into a (x,y) coordinate plane. While it may seem simple and crude today, it made the artists over 100 times more productive. 

![](/static/images/blog/oct08_23/BEFLIX.jpg)

Demonstrating the collaboration in the industry, Knowlton built BEFLIX on top of FORTRAN, rather than starting from scratch. BEFLIX was a level of abstraction built from FORTRAN MACRO-FAPs, operations that combined multiple steps for the user. Knowlton’s FORTRAN Macro allowed users to enter “SET (123,63) to 3” and his code would translate the location into the appropriate memory location and set the value. 

![](/static/images/blog/oct08_23/BEFLIX_code.webp)

BEFLIX also enabled artists to check their work more easily. Since monitors were still rare, before BEFLIX most artists would have to send the computer output to magnetic tape for a microfilm recorder to interpret and make actual film. The process was both slow and expensive. If the filmmaker made any mistakes or wanted to change anything, it could cost them days. Knowlton created a print interface, so the artists could check each shot by printing it to paper before committing it to the final tape. 


BEFLIX almost immediately transformed computer art. During the 1960s, filmmakers created dozens of animated movies, including a silent film about the process of how to create an animated movie. Some of the most popular films were the Poemfields, which won multiple awards between 1966 and 1969. Perhaps the best part of BEFLIX, however, is that Knowlton did not hesitate to share his knowledge and his programming language with the public. In 1964 Knowlton published a paper called, "A computer technique for producing animated movies" and made BEFLIX publicly available, so that others could enhance his work. 

![](/static/images/blog/oct08_23/Poemfields.jpg)

**Hardware**

To better leverage the new software, in 1965 Bell Labs also built the revolutionary Graphic 1 computer. By 1965, artists and musicians made two requests of computer companies. First, they wanted a monitor. While printing was more efficient than a “tape out,” they wanted to see their work in real-time. Second, they wanted to be able to modify their work on the monitor, as if it were canvas or paper. William Ninke, Carl Christensen, and Henry S. McDonald undertook the daunting challenge of building a computer system that would allow graphic output and input. They developed a computer that supported a 1024x1024 monitor, and then built an interface on the monitor so it could take input from a light pen. 

![](/static/images/blog/oct08_23/Graphic1.webp)

The Bell Labs engineers succeeded by applying the principle of decomposition. Rather than trying to build one integrated system, they divided the system into two units.


1. The core computer - They used a PDP-5 computer from DEC to store the data and run the BEFLIX code and support the standard keyboard and trackpad interfaces. 


2. The display - They used a 1024x1024 resolution CRT monitor with a 40Hz refresh rate, external memory, and an IBM 7094 computer. The IBM 7094 would pull the data from the PDP-5 into the external memory, then convert it to be displayed on the monitor. A portion of the monitor was reserved for taking input from the light pen, so that the artist could work directly on the screen. The artist's input would then be stored in the external memory and pulled back by the core computer. 


![](/static/images/blog/oct08_23/CoreComputer.webp)

The Bell Labs team really built two separate computers that were connected by translating information through the shared external memory. It was not quite “networking” but the principles were similar. Just as remarkable, their system was built using products from DEC and IBM, two Bell Labs competitors. 


Graphic 1 was a quantum leap for artists. Filmmakers could now make longer, more complex films. Furthermore, they began to compose music on computers as well. Bell Labs released the MUSIC IV software package which allowed composers to write music directly on the monitor. The 1967 film, Frontiers in Computer Graphics demonstrated the display technology and 1968’s The Incredible Machine demonstrated the light-pen interface. 


![](/static/images/blog/oct08_23/Frontiers.png)
**Evolution**

While Graphic 1 was immediately successful, the system still evolved to meet the artists’ needs. For example, the Graphic 1 designers had assumed that the work of the core computer was the most important, so they gave it more compute power. Over time, however, the users made it clear that a responsive user interface (UI) was more important, so more processing power and memory was devoted to the display. 


The expansion of computer technology in the 1960s demonstrates the best of STEAM. Artists inspired software and hardware engineers to create quantum leaps in technology. The engineers collaborated with one another across companies. Hardware and software worked together to build integrated systems. In response to evolving requirements, the engineers modified their systems. Inspiration, execution, and collaboration turned technology into art.


![](/static/images/blog/oct08_23/Collaboration.jpg)
