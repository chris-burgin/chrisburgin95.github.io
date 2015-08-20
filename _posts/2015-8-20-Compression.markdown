---
layout: post
title:  "Compression"
date:   2015-08-20
categories: Programming
tags: compression zip gz bz2
---

Lately I found myself using several different types of compression on a regular basis. This is a quick documentation of the 3 types of compression I find myself using and what my standard uses are.

### ZIP
Standard ZIP Compression is fast but provides minimum compression. I find this useful when I need to zip a folder to move from one server to another when the time it takes for a high level compression isn't worth it.

Zipping a folder to move with secure copy takes much less time than trying to use recursive secure copy on an entire folder.

{% highlight bash %}
$ zip -r foldername.zip /file/or/folder/to/compress
{% endhighlight %}

To uncompress:

{% highlight bash %}
$ zip unzip foldername.zip /extract/here
{% endhighlight %}


### TAR GZ
This form of TAR compression provides a decent compression level and isn't to processor intensive. I find this compression works well for when I need to download a file from a server.

The transfer speed from server to server can peak out at 20mb/s, which makes it easy to transfer large files. But when downloading files to my local machine speeds normally only reach 3 or 4mb/s. Even with this slower speed it is still beneficial to use a slightly lower level compression that runs quicker.

{% highlight bash %}
$ tar -cvzf archive.tar.gz /file/or/folder/to/compress
{% endhighlight %}

To uncompress:

{% highlight bash %}
$ tar -zxvf archive.tar.bz2 /extract/here
{% endhighlight %}

Another nice feature of TAR.GZ is that you can specify the compression level. The default of which is -6 with -9 being the maximum.

{% highlight bash %}
$ GZIP=-9 tar -cvzf archive.tar.gz /file/or/folder/to/compress
{% endhighlight %}


### TAR BZ2
BZ2 provides the best compression level of the formats listed. The downside being that BZ2 is processor intensive. I use this compression the most when creating long term backups. For me the time is worth the extra space I gain on my external backup drive. As mentioned above you can also modify the compression level.

{% highlight bash %}
$ tar -jcvf archive.tar.bz2 /file/or/folder/to/compress
{% endhighlight %}

To uncompress:

{% highlight bash %}
$ tar -jxvf archive.tar.bz2 /extract/here
{% endhighlight %}
