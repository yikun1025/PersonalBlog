
## Overview and Objectives

In this first week workshop, you will install Kali Linux, the most popular Linux distribution for cybersecurity professionals. We will also install some additional tools, and become familiar with the environment, and get used to some common Linux commands.

The instructions below are for AMD64 computers ( those that you find in the workshop labs). For Apple M1/M2, please follow the instructions [here](https://myuni.adelaide.edu.au/courses/101160/files/16638885?wrap=1 "Workshop 0x01_ Installing Kali and hacklabVM on Mac m1_m2.pdf") [Download here](https://myuni.adelaide.edu.au/courses/101160/files/16638885/download?download_frd=1). **Note that due to limited resources,  we do not officially support M1/M2 and you will have to troubleshoot issues with these architectures yourself if you choose to use them.**

**Please use the following [updated link](https://universityofadelaide.box.com/s/ae815hjsjjhfdsuwuqukay43d6498jz9 "Link") [Links to an external site.](https://universityofadelaide.box.com/s/ae815hjsjjhfdsuwuqukay43d6498jz9 "Link")to download HacklabVM for UTM.** 
## Installing Kali Linux

**Setting up your environment**

In this and subsequent workshops and assignments, you will be using Kali Linux and a "Hacklab VM", both running in VirtualBox environment as depicted in the diagram below. 

![image.png](https://myuni.adelaide.edu.au/courses/101160/files/16639072/preview)

**Requirements**

You will need to be running a PC (or Apple) with the following minimum requirements:

- A PC with recent 64-bit x86/AMD64 CPU. Apple silicons (M1, etc) will also work with the latest VMWare version (version 17) and we have tested Kali on M1 Macs. As  VMware support on Apple silicon is quite new, you might encounter issues. In those cases (issues with Apple Silicon), you will need to use a lab computer at the University.
- Running Windows 10 or running recent versions of MacOS (see above about Apple silicon) or Linux
- Minimum RAM of 8GB (16GB is recommended)
- Minimum free storage of approx. 40GB
- See also the minimum requirements for the Virtual Box Player [hereLinks to an external site.](https://www.virtualbox.org/wiki/End-user_documentation).

### **Installing Virtual Box**

- Download and install the free Virtual Box from [hereLinks to an external site.](https://www.oracle.com/au/virtualization/technologies/vm/downloads/virtualbox-downloads.html) (Make sure you choose the right platform i.e Mac OS/ Windows).


### **Installing and updating tools inside the University network**

Since Kali runs on Debian, you can install additional packages using apt 

Note: In order to install packages in Kali Linux while being connected to the university's network, you need to use one the repos that is not filtered by our firewalls, add one of the following two lines to your /etc/apt/sources.list file in Kali

•    deb http://mirror.aarnet.edu.au/pub/kali/kali kali-rolling main contrib non-free  
•    deb http://mirrors.ocf.berkeley.edu/kali kali-rolling main contrib non-free  
This should work on the CAT suite machines as well asyour personal devices.

## Installing useless but fun tools

Since Kali runs on Debian, you can install additional packages using apt (as you would use yum package manager on RedHat distributions like CentOS).

Note: In order to install packages in Kali Linux while being connected to the university's network, add the line "`deb http://mirrors.ocf.berkeley.edu/kali kali-rolling main contrib non-free`" at the beginning of your /etc/apt/sources.list file in Kali. This is a mirror link that will allow you to update and download Kali Linux repositories from within the university network and should work on the CAT suite machines as well as your personal devices. 

![kali mirror.png](https://myuni.adelaide.edu.au/courses/101160/files/16638918/preview)

### Figlet

Install figlet with command

```
$ sudo apt install figlet
```

Not a hugely useful tool, but you can create your own logon banner by including a line at the end of your .zshrc script (vim ~/.zshrc). Try adding "figlet cowabunga" and open another terminal

Note: If you are using another shell, add "figlet cowabunga" at the end of the corresponding ~/.*rc file, this applies to all further instructions to edit your ~/.zshrc file

![figlet.png](https://myuni.adelaide.edu.au/courses/101160/files/16638924/preview)

```
$ sudo apt install sl fortune cowsay
```

These gets installed into /usr/games, to which there is no default path. Add to default path by editing your ~/.zshrc file (hint: use "nano" command) and adding the following two lines

```
PATH=$PATH:/usr/gamesexport PATH
```

Now open a new terminal tab (Ctr+Shift+T) or execute _source ~/.zshrc_ to update the PATH variable, then run

```
$ fortune | cowsay -f flaming-sheep
```

## Finding Files and Programs

To find files, use the **find** command. For example, if you want to find where the rockyou password list is located, try executing. This looks for files starting with "rockyou" in all subdirectories under /usr.

```
$ find /usr -name "rockyou*"
```

Another method is the **locate** command, which uses an indexed database. It's very fast, but you would have to run "updatedb" regularly to update the index. 

```
$ sudo updatedb$ locate rockyou
```

For executable files, you can use **which** and **whereis**, but these rely on the executables being in your PATH environment variable.

```
$ which msfconsole
```

```
$ whereis nmap
```

Remember to use **whatis** or **man** to find out more about a particular Linux command

```
$ whatis nmap$ man nmap
```

## Linux Basics

**Note:** You can skip these exercises if you are already familiar with the Linux shells and common tools.

During the course of Cybersecurity Fundamentals, you might want to automate some repetitive tasks. Scripting languages like Bash script and Python scripts are usually much better suited compared to compiled programs like C or Java, as it's quick to edit and debug.

Grep is a command line tool for finding text quickly in files are standard outputs.

1. Go to the /usr/share/wordlists directory in Kali. This is where basic wordlists used for password or directory cracking is stored.
2. List the first 20 lines using the head command
    
    head -n 20 nmap.lst
    
3. Similarly list the last 20 lines using the "tail" command. How would you combine the two to list lines between 40 and 50?
4. Find if the file nmap.lst contains the password "monkey" using the "grep"command.
    
    kali@kali:/usr/share/wordlists$ grep monkey nmap.lst  
    monkey  
    monkey1  
    monkeys  
    monkey2  
    monkey12  
    monkey123  
    monkey7  
    cheekymonkey  
    monkey3  
    monkeybutt  
    monkey13  
    monkeys1  
    monkey11
    
5. You can combine the "nl" command to see which lines these are located. If there is a "permission denied" error, try "sudo" in your command.  
    
    kali@kali:/usr/share/wordlists$ nl nmap.lst | grep monkey
    
6.  If you are only interested in passwords that starts with "monkey", you can use regular expression in grep. If you are not familiar with regular expression (regex) you can go through this quick and fun tutorial ([https://regexone.com/Links to an external site.](https://regexone.com/)). In the example "^" is the symbol for beginning of the line.  
    
    kali@kali:/usr/share/wordlists$ grep "^monkey" nmap.lst
    
7. Say if you want to find all the passwords containing **monkey** and replace it with **elephant**? Grep can only find text, not edit them, but you can combine the **sed** streaming editor.  
    
    kali@kali:/usr/share/wordlists$ sed -i "s/monkey/elephant/g" nmap.lst  
    kali@kali:/usr/share/wordlists$ grep monkey nmap.lst => returns nothing  
    kali@kali:/usr/share/wordlists$ grep elephant nmap.lst => monkey replaced with elephant
    
8. Create 1000 files containing 5 random numbers between 1 and 1000 by running this bash script. Save the script to a file (genfile.sh) and remember to execute "chmod +x genfiles.sh" to make it executable.  
    ```python
    #!/bin/bash  
    rm -rf out  
    mkdir -p out  
    for i in {1..1000}  
        do  
        filename=$(printf out/%05d $i)  
        for j in {1..5}  
        do  
            num=$(( ( RANDOM % 1000 ) + 1 ))  
            echo $num >> $filename  
        done  
    done
    ```
    
    How would you (a) find which files contain the number 999? (b) which files contain numbers that add up to greater than 2000?
9. Similarly, explore and become familiar with the following common commands:  
    **tr**, **cut,** **strings**, **cut**, **sort**, **uniq**, **wc**, **sed**, **awk**
10. Try your skills at [http://overthewire.org/wargames/bandit/Links to an external site.](http://overthewire.org/wargames/bandit/)
11. Also try the challenges here [https://www.hackerrank.com/domains/shellLinks to an external site.](https://www.hackerrank.com/domains/shell)

## Installing additional tools

|   |
|---|
|**Note:** Please run **sudo apt update** before following the steps below.|

### metagoofil

As a practice, install this additional reconnaissance tool called metagoofil (we will cover this in another workshop). If an error "Unable to locate package ..." is reported, you may update the Kali (as described in the last section) and try installation again.

```
$ sudo apt install metagoofil
```

### sn1per

You can also clone tools from github and install them. This, for example, is a ruby-based point-and-click scanner/assessment tool. This might take a while, as it ends up upgrading many components.

```
$ git clone https://github.com/1N3/Sn1per
$ cd Sn1per
$ sudo ./install.sh
```

## Update and Upgrade Kali

You can update and upgrade Kali at your leisure, as it will take some time.  You should reboot Kali afterwards.

```
$ sudo apt update && sudo apt upgrade
```

If you encounter issues with sharing your clipboard between your host and Kali VM, try restarting open-vm-tools after upgrading Kali by running the following command. 

```
$ sudo restart-vm-tools
```