---
layout: post
title:  "Python Political Data Collector"
date:   2016-1-2
categories: Programming
tags: programming python data sql
---
#### [View on Github](https://github.com/chrisburgin95/twitter-data-collector/settings)

With the looming election and politics around every corner I wanted to have some fun collecting some data from my friends. I wanted to figure out whether my friends leaned to the left, or to the right. With one catch, I didn't want to ask them.

## How
The data for this needs to come from somewhere, for this project its twitter. A simple python script looks for twitter usernames inputed into a mysql database. From here the script use the twitter API to fetch their userid and begin pulling in the users tweets, storing them in a database.

Users tweets are then parsed into single words, which are stored in a database with a foreign key linking them to the original tweet.

## Left or Right
After collecting this data, its time to look into the users political stance. Users tweets are compared too the most used words by both republican and democratic presidential candidates.

[Forbes Presidential Words](http://www.forbes.com/sites/kalevleetaru/2015/09/18/second-republican-debate-word-clouds-what-the-candidates-talked-about/)

The results were fairly interesting, I don't have enough data to draw a conclusion as to whether my program is correct or not. Humans are more complex than their 140 character tweet, so it would be foolish to think I can define even their political views from so little information.
