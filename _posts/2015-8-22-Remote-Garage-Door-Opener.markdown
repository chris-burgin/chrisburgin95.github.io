---
layout: post
title:  "Remote Garage Door Opener"
date:   2015-08-21
categories: Programming
tags: pi garage python
---

For the past 2 months I have been having a great time working on my Saturday project. A remote Garage Door Opener that runs on a raspberry pi. Ive gone beyond just a simple php script that lets you open and close your door.

This application, which for the time I am calling Pi Garage (it needs a new name desperatly), has a full user account system with differing level of permissions.

#### [View on Github](https://github.com/chrisburgin95/Gatecontrol)
 *Checkout the readme and wiki on github for more information. There is fairly extensive documentation*

### Types Of Accounts
- Admin User: This user can add, remove, and edit existing users as well as open and close the garage door.
- Normal User: This user can only open or close the garage door.
- Temporary Users: This user expires after a set amount of time and can only open and close the garage door.

### Let Me Explain
The main concept behind this application is not to replace the classic garage door opener but to provide more functionality while not cluttering the basic idea. To move a large piece of metal out of the way remotely from anywhere in the world.

This could be useful for families who have more members than garage door openers or when away on vacation. You can now give your house sitter temporary access to your house that will automatically expire.

More detailed examples can be found on my github detailing the functionality of this device, including security. I wont go into to much detail in this post. In following post I will talk about the process as well go into more detail on installation. All of which is still covered on github.


### Future Expansion
Right now this is just the base application, the Idea is to expand in the near future with some of the following features that should take little time now that the base application is complete.

- Log: Track when the door has been opened and closed as well as when users have been created, removed or modified.
- Camera: A camera will show the current status of the door, as either open or close. This will allow for the users to access their garage door remotely visually check the status of the door.
- Magnetic Sensors: Another build in optional feature that can read out if the door is open or closed. This is a cheaper solution to the camera but the user will not be able to check for obstructing objects.
- More Advanced User Permissions: Set strict times that the door can be used for each user.
- Notification System: Be notified when the door has been opened or closed by another user from the application.

### Gallary
![](http://i.imgur.com/7wxUytC.png)
![](http://i.imgur.com/D7vS2HI.png)
![](http://i.imgur.com/rjRuYSy.png)
