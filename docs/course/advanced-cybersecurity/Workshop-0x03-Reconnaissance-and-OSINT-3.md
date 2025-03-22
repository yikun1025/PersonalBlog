## Overview and Objectives

In this workshop, you will explore various (passive) reconnaissance ("Recon") and OSINT (open source intelligence) techniques. This is the first step in a typical open-scope ethical hacking assignment (e.g., you are asked to start from scratch and simulate an adversarial malicious hacker targeting the client company).  The tester tries to gather as much information about the target organisation using passive techniques before proceeding to active hacking.

## Basic Google Operators (Search Modifiers)

Have some practice using the various Google search modifiers on your browser (you can do this on a browser on Windows or Firefox in Kali Linux. You should be aware of the basic operators such as **site**, **inurl**, **intitle**, **allinurl**, **filteype**, **ext**, etc. You can also use operators like AND and OR to refine your results.

1. Search for all pages indexed in the *.adelaide.edu.au domain. This is useful for enumerating sub-domains and hosts manually.
```
site:adelaide.edu.au
```
1. Search for all pages in the adelaide.edu.au domain with file type pdf. Try also other file types such as **xlsx** and **docx**. What about **exe** or **zip**?
```
site:adelaide.edu.au filetype:pdf
```

2. Search for all pages in the adelaide.edu.au domain with URL containing the word "login" or "logon"
 ```
site:adelaide.edu.au inurl:logon OR inurl:login
```
2. Search for all pages with extension "bak". Also try "ext:old". Do you think these are indexed by mistake??
```
config ext:bak
php ext:bak
passwords ext:bak
```
2. Search for the phrase "index of" in the page titles, to see if there are any directory listings (usually directory listing should be prohibited by configuring .htaccess).
```
jpg intitle:"index of" site:jp
```
2. Exclude results by using "-" modifier. Look for insecure pages within a domain, or even look for login pages that are not secure.
 ```
site:adelaide.edu.au -inurl:https
site:adelaide.edu.au -inurl:https intitle:login
```
2. Sometimes when you find an interesting page on Google, but find that it has been taken offline since it was indexed. You can often access the cached page, so don't forget to look!  

## Exploit-DB Google Hacking Database (aka Google Dorks)


1. Go to [https://www.exploit-db.com/google-hacking-database/Links to an external site.](https://www.exploit-db.com/google-hacking-database/) on your browser and explore the various Google searches.  
 
 **Note:** this website is blocked (website categorised as "hacking" on the University URL filter) on the CAT Suite machines.  
   
2. Click the "Filters" button and select the category "Various Online Devices" from the drop-down list, and search for "camera" to see list of public live webcams. e.g.
 ```
intitle:"Live View / - AXIS"
inurl:axis.cgi ext:cgi
```
1. Some UofA websites utilise Drupal. To find out if they might suffer from any known vulnerabilities, search for the keyword "drupal" in the Google Hacking Database. Add the modifier "site:adelaide.edu.au" to see if there are any hits. e.g.,

```
site:adelaide.edu.au inurl:/node/add/event
```

Confirm that none of the searches (with site:adelaide.edu.au modifier) give any results, indicating that none of the UofA sites are vulnerable.  
 

## DNS: Becoming familiar with the dig command

Practice using the dig command to find out various records (SOA, NS, MX, PTR, etc). 

- SOA = Start of Authority record
- NS = Name Server
- MX = Mail eXchange
- PTR = Pointer

```
dig SOA adelaide.edu.au  
dig MX student.adelaide.edu.au  
dig -x  129.127.149.1
```

add more dig examples

1. What is (are) the IP addresses for the FQDN (fully qualified domain name) www.netflix.com?
2. Where do emails sent to @student.adelaide.edu.au get routed to?
3. What is the domain name associated with the IP address 157.240.8.35?

## DNS: Zone Transfer

DNS servers should be configured to allow zone transfers only to explicitly trusted DNS servers (e.g., a backup DNS server). DNS records are not necessarily confidential, but it allows malicious hackers to easily enumerate all hosts and sub-domains.

1. Start a command shell in Kali, and use the **dig** command to find out all DNS entries related to the domain zonetransfer.me (this is a test domain that has been set up to allow zone transfer from any IP address).
```
dig @8.8.8.8 zonetransfer.me any
```
You should see an output like this:


Note down the SOA (start of authority) record, which indicates the authoritative name server for the domain.
2. Now query the authoritative server for the zonetransfer.me domain and see if you can transfer the zone (i.e., enumerate all subdomains).
    
```
dig axfr @nsztm1.digi.ninja zonetransfer.me
```
 
 You should see a fairly long output that includes all the subdomains (xx.zonetransfer.me). What are the subdomains of zonetransfer.me?
3. Now, try the same steps for other domains.

```
dig @8.8.8.8 adelaide.edu.au any
```
```
 dig axfr @{UofA's Name Server} adelaide.edu.au
```
 
 Confirm that you were **NOT** able to list the subdomains under adelaide.edu.au.

## DNS Tools in Kali Linux

Tools **dnsenum**, **dnsmap**, **dnsrecon** and **fierce** are command-line tools in Linux that automates some of the manual whois look-ups and zone transfer testing. They can also scan for existence of subdomains using google search, as well as "brute-force" subdomains using dictionaries. 

1. Execute the following basic command that performs lookup and zone transfer attempt against all name servers.
```bash
dnsenum atlassian.com
```

2. The following command attempts to find subdomains using google's "site:" directive. The "-s" switch limits the number pages searched, and "-p" limits the number of subdomains.
```
dnsenum -s 10 -p 10 atlassian.com
```

3.  Run the following command to "brute-force" subdomains from your favourite domain (try adelaide.edu.au).  

```
fierce --domain atlassian.com
```

It will take some time to try all 2280 commonly-used hostnames/subdomains, so you should stop it after it discovers some subdomains with Ctr+C.

## The Harvester

TheHarvester is a command-line tool included in Kali Linux that acts as a wrapper for a variety of search engines and is used to find email accounts, subdomain names, virtual hosts, open ports / banners, and employee names related to a domain from different public sources (such as search engines and PGP key servers).

**Note:** the Harvester uses various search services to perform its actions. Because we have been using it quite a bit (the lab IP addresses get NAT'd to same address) the search services may be blocked and the Harvester may not work from the lab. 

The harvester can perform similar searches to dnsenum, but can also harvest people's names and email addresses associated with the specified domain.

```
theHarvester -d adelaide.edu.au -l 200 -b hackertarget
```

The above command, for example, harvests names from HackerTarget (hackertarget.com). Execute with -h option to list the various search sources and to get help on using this tool.

```
theHarvester -h
```

```
Whois
```

Use the whois tool to obtain information about a registered domain or IP address. You can use the command line tool, or the interface availalbe on the web.

```
whois adelaide.edu.au  
whois 129.127.149.1
```

There are several online tools for whois lookup.

1. Go to domain tools website [https://whois.domaintools.com/Links to an external site.](https://whois.domaintools.com/)
2. Search for the domain name adelaide.edu.au
3. Search for an IP address 129.127.149.1
4. Read and analyse the results

[https://dnsstuff.comLinks to an external site.](https://dnsstuff.com/) provides similar information.

```
RobTex
```

RobTex ([https://www.robtex.com/Links to an external site.](https://www.robtex.com/)) is also an online web-based DNS tool. You can lookup using domain names or IP address. In addition to name server, sub-domains, etc. The routing graph showing the AS (autonomous system) number is useful in graphing peering relationships. AS7575 is AARNet (Australia's Academic and Research Network) that provides the backbone and internet connectivity for all higher institutions in Australia.

## Job Posting and Wayback Machine

Job postings often give away a lot of information about the technology being used at an organisation, and is an important step in the OSINT phase of a penetration testing exercise.

1. Go to the University of Adelaide's job posting page at [http://careers.adelaide.edu.au/cw/en/listing/](http://careers.adelaide.edu.au/cw/en/listing/)
2. In order to see previously archived versions of this page, go to the wayback machine at [http://web.archive.orgLinks to an external site.](http://web.archive.org/)
3. Enter the job posting URL in the search field to look at the previous versions.
4. Do some browsing and see what kind of Technology Services positions have been advertised. What does it tell you about the software in use at the University?

## BuiltWith

It is useful to find out the technologies used in a particular host that you would like to test for vulnerabilities. One way to gather information on a website is to use builtwith.com.

1. Go to [https://builtwith.com/Links to an external site.](https://builtwith.com/) and search for atlassian.com
2. Review the details provided. What OS and web server are used?
3. Repeat with a search on builtwith itself (i.e., search for builtwith.com)
4. What is the OS and web server used?

Another way to discover technologies used in a particular website is the **Wappalyzer Chrome plugin ([https://www.wappalyzer.com/Links to an external site.](https://www.wappalyzer.com/))**. Try installing this on your Chrome browser and view various websites. Here is what shows up for Netflix:  
![wapplyzer-1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638937/preview)

## Cloning a Website using HTTrack

Sometimes you would want to clone a whole website to facilitate offline analysis. HTTrack is one of the most popular tools for cloning a website to the local file system.

While the Windows version (downloadable from [https://www.httrack.comLinks to an external site.](https://www.httrack.com/) ) has an easy-to-use GUI, the default httrack that comes with Kali Linux is command-line only. Execute the following to create a 3-layer-deep copy (i.e., links are followed only up to 3 layers) of atlassian.com.

HTTrack is not installed in Kali 2020.1 by default, so please install using apt.

```
sudo apt install httrack
```

```
httrack https://www.atlassian.com -O ~/websites/atlassian -%v -r2 
```

Alternatively, just execute the command httrack with no parameters and follow the wizard (make sure to add -r2 directive to limit cloning depth to 2; otherwise it will take a long time). Once the cloning is completed, go to the cloned folder and start firefox to check the cloned site.

```
$ cd ~/websites/atlassian$ firefox index.html&
```

## Shodan.io

Censys.io ([https://censys.ioLinks to an external site.](https://censys.io/)) and Shodan ([https://shodan.ioLinks to an external site.](https://shodan.io/)) are similar tools that can search for hosts connected to the internet beyond google. The tool can tell you various information such hosts under a domain, open network ports, network service, server version, etc. 

1. Go to [https://shodan.io/Links to an external site.](https://shodan.io/)
2. Start by just searching for "**adelaide.edu.au**" which only yields a few results
3. Shodan uses it unique modifiers (similar to Google). Refer, for example, to this cheat sheet: [https://thor-sec.com/cheatsheet/shodan/shodan_cheat_sheet/Links to an external site.](https://thor-sec.com/cheatsheet/shodan/shodan_cheat_sheet/)
4. Try searching by **org:"The University of Adelaide"**, and notice all the assets that are discoverable from the internet relating to the University of Adelaide.  
     ![shodan1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638945/preview)
5. On the left-hand-side navigator, assets are categorised by product name, port, etc.
6. Try clicking on [SSH] which shows you all the SSH servers running on a UofA owned IP address range. **PLEASE DON'T DO THIS** -- if you were then a penetration tester working for the Uni, you might do a basic dictionary attack on these servers to test the strength of passwords.

## ThreatCrowd (Unavailable now)

1. Searching "adelaide.edu.au" using "Threat Crowd" (threatcrowd.org) reveals subdomains etc.![threatcrowd.png](https://myuni.adelaide.edu.au/courses/101160/files/16638939/preview)  


## Other Tools

OK there are many tools out there for Recon. This website seems to have a good collection of links: [https://www.osinttechniques.com/osint-tools.htmlLinks to an external site.](https://www.osinttechniques.com/osint-tools.html)

## Recon-ng

Besides the web-based and command-line, tools, there are several rich multi-function tools including FOCA, Recon-ng and Maltego.

Recon-ng is a Python-based modular tool, very similar in usage style to Metasploit, an exploitation tool that we will explore in a later workshop.

**Note:** For recon-ng to work, many modules require that you have API keys for different services (Google, LinkedIn, Twitter, Shodan). Many of these API tools can be obtained by registering for free, but some are paid services. While for the purpose of this workshop, we will only use modules that do not rely on API keys, you should register to obtain API keys to make full use of the tool.

1. Start recon-ng from the Kali command line. Get help by typing in "help"
```
# recon-ng  
[recon-ng][default] > help
```
    
2. Create a fresh "workspace" by issuing the following command  
 ```
 [recon-ng][default] > workspaces create workshop2
```
3. List modules available
```
[recon-ng][workshop2] > modules search
```

4. Load the **whois_poc** module. This module searches for point of contacts (POC) for a registered domain.
```
[recon-ng][workshop2] > marketplace install whois_pocs  
[recon-ng][workshop2] > modules load recon/domains-contacts/whois_pocs
```
5. Add the target domain and confirm  
```bash
[recon-ng][workshop2] > db insert domains  
domain (TEXT): atlassian.com  
notes (TEXT):   
[recon-ng][workshop2] > show domains
```
6. Use "show info" to see what parameters are required and how to use the module  
```bash
[recon-ng][workshop2][whois_pocs] > info  
  
Name: Whois POC Harvester  
 Path: modules/recon/domains-contacts/whois_pocs.py  
 Author: Tim Tomes (@LaNMaSteR53)  
  
Description:  
 Uses the ARIN Whois RWS to harvest POC data from whois queries for the given domain. Updates the  
 'contacts' table with the results.  
  
Options:  
 Name Current Value Required Description  
 ------ ------------- -------- -----------  
 SOURCE default yes source of input (see 'show info' for details)  
  
Source Options:  
 default SELECT DISTINCT domain FROM domains WHERE domain IS NOT NULL  
 <string> string representing a single input  
 <path> path to a file containing a list of inputs  
 query <sql> database query returning one column of inputs
```

7. Set the SOURCE to "atlassian.com", then type "run" to execute the command.
```bash
[recon-ng][workshop2][whois_pocs] > options set SOURCE atlassian.com  
SOURCE => atlassian.com  
[recon-ng][workshop2][whois_pocs] > run
```

8. Note the output of the module and how it is querying through the REST API of ARIN, showing the contact names and email addresses. You can use this command to list the contacts harvested:  
 ```bash
[recon-ng][workshop2][whois_pocs] > show contacts
```
9.  Let's find more contacts in the pgp register, by using the **pgp_search** module (hint: "back" can go back to the workshop2 module)  
```bash
[recon-ng][workshop2] > marketplace install pgp_search  
[recon-ng][workshop2] > modules load pgp_search  
[recon-ng][workshop2][pgp_search] > run  
[recon-ng][workshop2][pgp_search] > show contacts
```
10. Load the google_site_web and run to find subdomains  
```bash
[recon-ng][workshop2] > marketplace install google_site_web  
[recon-ng][workshop2] > modules load google_site_web  
[recon-ng][workshop2][google_site_web] > run
```

List the discovered hosts by running show hosts
```bash
[recon-ng][workshop2][google_site_Web] > show hosts
```

11. Similarly, use the bing_domain_web module to find out any subdomains that google may have missed  
```bash
[recon-ng][workshop2] > marketplace install bing_domain_web  
[recon-ng][workshop2] > modules load bing_domain_web  
[recon-ng][workshop2][bing_domain_web] > run
```

12. Use the brute_force module to find sub-domains using brute-force using a built-in dictionary of commonly-used domain prefixes (e.g., www2). This might take a few minutes.  

```bash
[recon-ng][workshop2] > modules load brute_hosts  
[recon-ng][workshop2][brute_hosts] > run
```
You can list the hosts discovered through the brute_force module by using SQL like this 
```bash
[recon-ng][workshop2][brute_hosts] > db query select * from hosts where module="brute_hosts"
```
13. Load the metacrawler module (you may need to install pypdf3 at first)  
 ```bash
[recon-ng][workshop2][whois_pocs] > modules load metacrawler  
[recon-ng][workshop2][whois_pocs] > info
 ```
14. Set SOURCE to atlassian.com, set EXTRACT to True and run
```bash
[recon-ng][workshop2][metacrawler] > options set SOURCE atlassian.com  
[recon-ng][workshop2][metacrawler] > options set EXTRACT True  
[recon-ng][workshop2][metacrawler] > run
```

**Note:** this will probably fail after a while, as Google will block excessive searches coming from the same IP address. Please skip this step if you are having problems and try other times or from home.  

Note the tool tries to use google "filetype:xxx" modifier to look for indexed {pdf/word/excel/etc} documents, then extract metadata such as author and email address.  

15. Finally, load the reporting tool and output the findings to an html file  
```bash
[recon-ng][workshop2][metacrawler] > modules load html  
[recon-ng][workshop2][html] > info  
[recon-ng][workshop2][html] > options set CREATOR student  
[recon-ng][workshop2][html] > options set CUSTOMER customer  
[recon-ng][workshop2][html] > options set SANITIZE False  
[recon-ng][workshop2][html] > run
```

16. Open the html file (~/.recon-ng/workspaces/workshop2/results.html) in Firefox.

## Maltego

Maltego is proprietary software used for open-source intelligence and forensics, developed by Paterva. Maltego focuses on providing a library of transforms for discovery of data from open sources, and visualizing that information in a graph format, suitable for link analysis and data mining. The Community Edition is free but is limited in the volume of output, and still require registration.

Some versions of Kali Linux include Maltego by default. If not, just type in “sudo apt install maltego” to install it. Start the GUI by clicking on the icon. The first time you start the tool, you will be asked to register an account. Go ahead and register using your email address.

1. In Kali Linux, click on the start menu, search for maltego and run  
    ![maltego-1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638943/preview)
2. Choose the Maltego Community Edition (CE).  
    ![maltego_free-2.png](https://myuni.adelaide.edu.au/courses/101160/files/16638934/preview)
3. In the wizard, accept the terms and then register an account  
    ![maltego_register.png](https://myuni.adelaide.edu.au/courses/101160/files/16638941/preview)
4. After logging on to Maltego, you can view a sample graph (this is the graph obtained by doing a footprint on the domain maltego.com.  
    ![maltego_example_graph-1-1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638936/preview)
5. To run your own search, click on the [Machines] tab and click on [Run Machine]  
    ![maltego_run_machine-1-1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638942/preview)
6. Select Footprint L2 and click [Next]  
    ![maltego2-1-1-1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638944/preview)
7. For the Domain Name, type in adelaide.edu.au (or something else of your own choice, say, adelaide.edu.au) and click on [Finish]
8. You will see a warning to say that only 12 results will be shown for the Community Edition. Click on [OK] to continue.
9. When prompted click on [Next] to continue.
10. Once it has finished running, examine the graph that has been produced. You can zoom-in/out, click on nodes to get more information, and re-arrange the graph. Make note of various nodes, including name servers, hosts, netblocks (AS number), etc.  
    ![maltego3-1-1-1.png](https://myuni.adelaide.edu.au/courses/101160/files/16638946/preview)
11. Now try running other Machines like "Company Stalker".