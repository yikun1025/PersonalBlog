"use strict";(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[1640],{2018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const i={},s=void 0,o={unversionedId:"course/advanced-cybersecurity/Workshop-0x02-Cryptography",id:"course/advanced-cybersecurity/Workshop-0x02-Cryptography",title:"Workshop-0x02-Cryptography",description:"Recorded workshop:",source:"@site/docs/course/advanced-cybersecurity/Workshop-0x02-Cryptography.md",sourceDirName:"course/advanced-cybersecurity",slug:"/course/advanced-cybersecurity/Workshop-0x02-Cryptography",permalink:"/docs/course/advanced-cybersecurity/Workshop-0x02-Cryptography",draft:!1,editUrl:"https://github.com/zxuqian/zxuqian.cn/tree/master/docs/course/advanced-cybersecurity/Workshop-0x02-Cryptography.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Workshop-0x01",permalink:"/docs/course/advanced-cybersecurity/Workshop-0x01"},next:{title:"Workshop-0x03-Reconnaissance-and-OSINT-3",permalink:"/docs/course/advanced-cybersecurity/Workshop-0x03-Reconnaissance-and-OSINT-3"}},l={},p=[{value:"Recorded workshop:",id:"recorded-workshop",level:2},{value:"https://echo360.net.au/media/c0075f63-761c-4b91-8f02-0c5c67a7571f/publicLinks to an external site.",id:"httpsecho360netaumediac0075f63-761c-4b91-8f02-0c5c67a7571fpubliclinks-to-an-external-site",level:2},{value:"Becoming Familiar with OpenSSL",id:"becoming-familiar-with-openssl",level:2},{value:"Symmetric Encryption",id:"symmetric-encryption",level:2},{value:"ECB vs CBC",id:"ecb-vs-cbc",level:2},{value:"Textbook RSA using Python",id:"textbook-rsa-using-python",level:2},{value:"RSA Encryption with OpenSSL",id:"rsa-encryption-with-openssl",level:2},{value:"Examining the RSA Private Key",id:"examining-the-rsa-private-key",level:2},{value:"Cryptographic Hashing",id:"cryptographic-hashing",level:2},{value:"Digital Signature",id:"digital-signature",level:2},{value:"Comparing the Performance between RSA and AES",id:"comparing-the-performance-between-rsa-and-aes",level:2},{value:"Manually Verifying an X.509 Certificate",id:"manually-verifying-an-x509-certificate",level:2},{value:"Password Hashing 1 - SHA512",id:"password-hashing-1---sha512",level:2},{value:"(Optional) Creating an MD5 collision with fastcoll",id:"optional-creating-an-md5-collision-with-fastcoll",level:2},{value:"(Optional) Learning more about cryptography",id:"optional-learning-more-about-cryptography",level:2}],c={toc:p},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"recorded-workshop"},"Recorded workshop:"),(0,r.yg)("h2",{id:"httpsecho360netaumediac0075f63-761c-4b91-8f02-0c5c67a7571fpubliclinks-to-an-external-site"},(0,r.yg)("a",{parentName:"h2",href:"https://echo360.net.au/media/c0075f63-761c-4b91-8f02-0c5c67a7571f/public"},"https://echo360.net.au/media/c0075f63-761c-4b91-8f02-0c5c67a7571f/publicLinks to an external site.")),(0,r.yg)("h2",{id:"becoming-familiar-with-openssl"},"Becoming Familiar with OpenSSL"),(0,r.yg)("p",null,"OpenSSL is a library and command-line tool for both symmetric and asymmetric (RSA) encryption. OpenSSL is included as part of most Linux builds, and exists in Kali Linux.\xa0"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"To get help and list the the commands, type openssl help",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"openssl help\n")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\nNote that list of standard commands, message digest (hashing) formats supported, and cipher commands (encryption algorithms) supported.  \n\n2. We will be using the `"enc"`, `"dgst"`, `"genrsa"`, `"rsa"`, `"pkeyutl"`, commands. To get options for each of these commands, use the "-help" option\n\n')),(0,r.yg)("p",null," openssl help"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"3. To list all the ciphers supported execute this command\n   \n   # openssl enc -ciphers\n```bash\nopenssl enc -ciphers\n")),(0,r.yg)("h2",{id:"symmetric-encryption"},"Symmetric Encryption"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a sample file -- just a small text file is fine")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'echo "Ethical Hacking is Fun" > plaintext\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Open the text file in a Hex editor to confirm its binary contents")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"hexeditor plaintext\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Encrypt the file using AES128 CBC mode. The 128-bit key and IV (initialisation vector) should be chosen randomly for real use, but for the purpose of this exercise anything simple is OK.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl enc -aes-128-cbc -in plaintext -out ciphertext -k 123 -iv 456\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Check the content of the ciphertext")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"hexeditor ciphertext\n")),(0,r.yg)("p",null,'Note that the ciphertext has the "Salted__" prefix, indicating that a random salt has been used.  '),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Decrypt the ciphertext and check that you get the original text back")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl enc -d -aes-128-cbc -in ciphertext -k 123 -iv 456\n")),(0,r.yg)("h2",{id:"ecb-vs-cbc"},"ECB vs CBC"),(0,r.yg)("p",null,"As explained in the lecture, ECB (electronic code book) operation mode of AES encryption encrypts blocks of binary independently, so identical blocks encrypt to the same ciphertext. This is bad if you are trying to encrypt something like an image. CBC (cipher block chaining) mode, on the other hand, spreads or diffuses the information over all blocks by chaining."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download this\xa0",(0,r.yg)("a",{parentName:"li",href:"https://myuni.adelaide.edu.au/courses/101160/files/16638926",title:"Link"},"cbc.bmp"),"\xa0to Kali and create a copy of it with the filename\xa0",(0,r.yg)("strong",{parentName:"li"},"original.bmp")),(0,r.yg)("li",{parentName:"ol"},"Encrypt this file using AES128 in ECB mode as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl enc -aes-128-ecb -in cbc.bmp -out encrypted.bmp -K 123\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Now copy the bitmap header (first 54 bytes) from the original to the encrypted file using this dd command")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"dd if=cbc.bmp count=54 ibs=1 >> out.bmp  \ndd if=encrypted.bmp skip=54 ibs=1 >> out.bmp\n")),(0,r.yg)("p",null,"or this Python script."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"```\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"original = open('cbc.bmp','rb')  \nencrypted = open('encrypted.bmp','rb')  \noutput = open('output.bmp','wb')  \ndata_original = original.read()  \ndata_encrypted = encrypted.read()  \noutput.write(data_original[0:55]) **# copy the first 54 bytes from original**  \noutput.write(data_encrypted[55:len(data_encrypted)]) **# write the remainder from encrypted**  \noriginal.close()  \nencrypted.close()  \noutput.close()\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the encrypted file with the modified header, and confirm that you can make out the original image like this:  ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Next, encrypt the original BMP file again using CBC this time. Note that you need to specify the initialisation vector (IV) for the CBC mode."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"openssl enc -aes-128-cbc -in cbc.bmp -out encrypted_cbc.bmp -K 123 -iv 456\n")),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Repeat the header modification as per Step 3 for the CBC-encrypted image, and confirm that the information now looks random.\xa0  ")),(0,r.yg)("h2",{id:"textbook-rsa-using-python"},"Textbook RSA using Python"),(0,r.yg)("p",null,'In this step you will perform "textbook" RSA encryption and decryption using the following given primes. The key difference between actual PKCS RSA implementation and textbook implementation is padding of messages before encryption. PKCS#1.5 padding includes random bytes, so that ciphertext is actually different each time the same plaintext is encrypted, whereas it is identical each time with textbook RSA. This is a cryptographic weakness. Since a given plaintext always produces the same ciphertext we say that textbook RSA is deterministic. How is this a problem? Think about how you could find the plaintext of a ciphertext encrypted with textbook RSA if you knew that the original plaintext was a number between 0 and 99.'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"p=0xE017  \nq=0xD20D  \ne=0x010001\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Run the following python code to verify that RSA "works". Experiment with different "messages". Make sure you understand what each line is doing!! You can also download the script from\xa0',(0,r.yg)("a",{parentName:"p",href:"https://myuni.adelaide.edu.au/courses/101160/files/16638935?wrap=1",title:"textbook_rsa-3.py"},"here"),"\xa0",(0,r.yg)("a",{parentName:"p",href:"https://myuni.adelaide.edu.au/courses/101160/files/16638935/download?download_frd=1"},"Download here"),". Note: You should also try doing it the other way: encrypt with private exponent\xa0",(0,r.yg)("strong",{parentName:"p"},"d"),", then decrypt with public exponent\xa0",(0,r.yg)("strong",{parentName:"p"},"e"),".  "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},'   # function to calculate inverse modular\n   # using the extended Euclidean algorithm\n   def invmod(a,n):\n     i=1\n     while True:\n       c = n * i + 1;\n       if(c%a==0):\n         c = c//a\n         break;\n       i = i+1\n     # note: indent before the following statement\n     return c\n   \n   p = int("E017",16) # first prime\n   q = int("D20D",16) # second prime\n   e = int("010001",16) # a number that is co-prime with (p-1)*(q-1)\n   \n   # calculate modulus n\n   n = p*q\n   print("n is: " + str(n))\n   \n   # calculate inverse modular d of exponent e and (p-1)*(q-1)\n   d = invmod(e, (p-1)*(q-1))\n   print("d is: " + str(d))\n   \n   # check that d*e mod (p-1)*(q-1) is indeed 1\n   print("checking d*e mod (p-1)*(q-1): " + str(((d*e) % ((p-1)*(q-1)))))\n   \n   # encrypting short message using public exponent e\n   msg = 12345\n   enc = pow(msg,e, n) # supplying the 3rd parameter in pow() efficiently computes the mod\n   print("Message " + str(msg) + " is encrypted to: " + str(enc))\n   \n   # decrypt message using private exponent d\n   plain = pow(enc,int(d), n) # supplying the 3rd parameter efficiently computes the mod\n   print("Cipher " + str(enc) + " is decrypted to: " + str(plain)\u200b)\n')))),(0,r.yg)("h2",{id:"rsa-encryption-with-openssl"},"RSA Encryption with OpenSSL"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Generate a\xa0",(0,r.yg)("strong",{parentName:"li"},"512"),"-bit RSA private key (default is 2048 bits) and check the key (encoded in Base64). Also note that standard exponent (65537 or 0x10001) is again used here.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa 512 > private.key  \ncat private.key\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Generate the corresponding public key.\xa0",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl rsa -pubout < private.key > public.key  \ncat public.key\n")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"2. You can get more info on the public key by using the following command\n```bash\nopenssl rsa -text -pubin < public.key\n")),(0,r.yg)("p",null,"Note the\xa0",(0,r.yg)("strong",{parentName:"p"},"exponent (e)"),"\xa0and the\xa0",(0,r.yg)("strong",{parentName:"p"},"modulus (n)"),"\xa0are encoded in the key to allow encryption.  "),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Let's encrypt a short text. The key size is 512bits (64 bytes) so the maximum message size after taking away padding should be 53 byes.  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'echo "Ethical hacking is fun" | openssl pkeyutl -encrypt -pubin -inkey public.key > message.dat\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Trying to encrypt something too long gives you this error (please try)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"RSA operation error  \n3080140544:error:0406D06E:rsa routines:RSA_padding_add_PKCS1_type_2:data too large for key size:../crypto/rsa/rsa_pk1.c:125:\n")),(0,r.yg)("p",null,"This is why RSA is not used to encrypt long messages. RSA can only encrypt input data that is smaller than the modulus value of the RSA key. RSA is most commonly used to encrypt temporary session keys (e.g., AES encryption key) which are then used to encrypt long messages.  "),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Now we can decrypt using the private key as follows. Verify that you get the same message back.  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl pkeyutl -decrypt -inkey **private.key** -in message.dat\n")),(0,r.yg)("h2",{id:"examining-the-rsa-private-key"},"Examining the RSA Private Key"),(0,r.yg)("p",null,"(Update: This part won't work since a 512-bit key was generated in the previous section. The example below is demonstrated with a 128-bit key, which can't be created nowadays as it has been depreciated due to being vulnerable.)"),(0,r.yg)("p",null,"The RSA\xa0",(0,r.yg)("strong",{parentName:"p"},"private.key"),'\xa0generated in the last exercise is formatted using PEM and has a structure called "ASN.1"(see ',(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3641"},"https://tools.ietf.org/html/rfc3641"),"). You can use the\xa0",(0,r.yg)("strong",{parentName:"p"},"openssl asn1parse"),"\xa0command to understand what is included in the private.key to obtain the modulus (n), p, q, public exponent (e), and the private exponent (d)."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Execute the following command (the example below is for 128 bits, so the one you will see is much longer). Note: If you do not get the modulus/exponents/secrets shown below you may have to use openssl\'s "-strparse" switch to drill down deeper into the private.key (see OpenSSL man page).  ')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl asn1parse -i -in private.key  \n0:d=0 hl=2 l= 97 cons: SEQUENCE  \n2:d=1 hl=2 l= 1 prim: INTEGER :00  \n5:d=1 hl=2 l= 17 prim: INTEGER :AB32AD57BC713D952BE8D30099B41BEF **# this is the modulus n**  \n24:d=1 hl=2 l= 3 prim: INTEGER :010001 **# public exponent e**  \n29:d=1 hl=2 l= 16 prim: INTEGER :76B72FA9358DB94B835AF9B0F4C0D721 **# private exponent d**  \n47:d=1 hl=2 l= 9 prim: INTEGER :DD454679C3CA4C77 **# secret p**  \n58:d=1 hl=2 l= 9 prim: INTEGER :C611776FD9A7A249 **# secret q**  \n69:d=1 hl=2 l= 8 prim: INTEGER :75081A01773BFD7B  \n79:d=1 hl=2 l= 8 prim: INTEGER :2A37B4DE89651AC9  \n89:d=1 hl=2 l= 8 prim: INTEGER :228DBCF687C89CD5\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Now we know n, p, q, e and d, you can use this Python code to verify their relationships (n=p",(0,r.yg)("em",{parentName:"li"},"q and d"),"e mod (p-1)*(q-1) = 1 as follows  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'p = int("00DD454679C3CA4C77",16)  \nq = int("00C611776FD9A7A249", 16)  \nn = int("00AB32AD57BC713D952BE8D30099B41BEF", 16)  \ne = int("010001",16)  \nd = int("76B72FA9358DB94B835AF9B0F4C0D721", 16)  \n  \n# Verify n = p*q  \nprint("[n]:" + str(n) + " [p*q]: " + str(p*q))  \n  \n# verify e*d mod{(p-1)*(q-1)} = 1  \nprint("[e*d mod{(p-1)*(q-1)}]: " + str((e*d)%((p-1)*(q-1))))\n')),(0,r.yg)("h2",{id:"cryptographic-hashing"},"Cryptographic Hashing"),(0,r.yg)("p",null,"OpenSSL includes command for calculating cryptographic hashes using various algorithms.\xa0"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Calculate the SHA256 hash of the original bitmap file used in the previous exercise as follows  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl dgst cbc.bmp  \nSHA256(original.bmp)= 61d9ed6f632e3db1be665fc3c02446d0a76ba153517054bfc3a8855ca9b05322\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use hexeditor to change 1 bit in the original.bmp file, save, and re-calculate SHA256  ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm that the generated SHA256 is COMPLETELY different from the original one.  "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl dgst cbc.bmp  \nSHA256(original.bmp)= 7bf73e1e98c11d3f2233e8f46fc328663405b5d1035bbff0d87e83421823609b\n")),(0,r.yg)("h2",{id:"digital-signature"},"Digital Signature"),(0,r.yg)("p",null,"As covered in the lecture, digital signature involves signing the message digest (hash) of a message with the signer's private key. The recipient verifies that (a) the message has not been modified and (b) the signer is the owner of the private key corresponding to the public key. For digitally signing a document, we will generate a new X.509 certificate as follows"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Run the following command to generate signing key and certificate (containing the public key)",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl req -nodes -x509 -sha256 -newkey rsa:2048 -keyout signing.key -out signing.crt\n")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\nWhen prompted, supply additional details about the signer.\n2. Create some message.\n```bash\necho "Ethical hacking is cool" > message.txt\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Sign the message with the generated private key as follows")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl dgst -sha256 -sign signing.key -out sign.txt.sha256 message.txt\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Imagine that you have sent the message along with the digital signature. The recipient would look up the sender/signer's public X.509 certificate, extract the public key, then use that key to validate the signature.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in signing.crt -pubkey -noout > signing.pub.key  \nopenssl dgst -sha256 -verify signing.pub.key -signature sign.txt.sha256 message.txt  \n\nVerified OK\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Try tampering with either the message or the signature. Again, changing a single bit in either of the files will result in a failed verification.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sed -i "s/o/0/g" message.txt  \n# openssl dgst -sha256 -verify signing.pub.key -signature sign.txt.sha256 message.txt  \nVerification Failure\n')),(0,r.yg)("h2",{id:"comparing-the-performance-between-rsa-and-aes"},"Comparing the Performance between RSA and AES"),(0,r.yg)("p",null,"One reason why RSA is mainly used just to encrypt the secret key and not the whole message, is that RSA is much slower than AES. OpenSSL comes with a tool to measure the performance of RSA and AES. Give it a try.  "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Test the performance of RSA")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl speed rsa\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Test the performance of AES  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl speed aes\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"What can you say about the speed of the two protocols?")),(0,r.yg)("h2",{id:"manually-verifying-an-x509-certificate"},"Manually Verifying an X.509 Certificate"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download a certificate from a real server using openssl\xa0")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-openssl",metastring:"s_client -connect [www.spotify.com:443",s_client:!0,"-connect":!0,"[www.spotify.com:443":!0},"    Links to an external site.](http://www.spotify.com:443/) -showcerts  \n    CONNECTED(00000003)  \n    depth=2 C = US, O = DigiCert Inc, OU = www.digicert.com, CN = DigiCert Global Root CA  \n    verify return:1  \n    depth=1 C = US, O = DigiCert Inc, CN = DigiCert SHA2 Secure Server CA  \n    verify return:1  \n    depth=0 C = SE, L = Stockholm, O = Spotify AB, CN = *.spotify.com  \n    verify return:1  \n    ---  \n    Certificate chain  \n    0 s:/C=SE/L=Stockholm/O=Spotify AB/CN=*.spotify.com  \n    i:/C=US/O=DigiCert Inc/CN=DigiCert SHA2 Secure Server CA  \n    -----BEGIN CERTIFICATE-----  \n    MIIFCDCCA/CgAwIBAgIQA2PTtH+jtsZRxsc3jVOALDANBgkqhkiG9w0BAQsFADBN  \n    _**___SNIP____**_  \n    -----END CERTIFICATE-----  \n    1 s:/C=US/O=DigiCert Inc/CN=DigiCert SHA2 Secure Server CA  \n    i:/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert Global Root CA  \n    -----BEGIN CERTIFICATE-----  \n    MIIElDCCA3ygAwIBAgIQAf2j627KdciIQ4tyS8+8kTANBgkqhkiG9w0BAQsFADBh  \n    _**___SNIP___**_  \n    -----END CERTIFICATE-----  \n    ---  \n    Server certificate  \n    subject=/C=SE/L=Stockholm/O=Spotify AB/CN=*.spotify.com  \n    issuer=/C=US/O=DigiCert Inc/CN=DigiCert SHA2 Secure Server CA  \n    ---  \n    No client certificate CA names sent  \n    Peer signing digest: SHA512  \n    Server Temp Key: ECDH, P-256, 256 bits  \n    ---  \n    SSL handshake has read 3141 bytes and written 302 bytes  \n    Verification: OK  \n    ---  \n    New, TLSv1.2, Cipher is ECDHE-RSA-AES128-GCM-SHA256  \n    Server public key is 2048 bit  \n    _**___SNIP__**_\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"There are two certificates in the output: (1) one for *.spotify.com wildcard URI and (2) issuer cert by DigiCert. Let's verify that both of these are valid by checking the signature embedded in these certificates against the root CA certificate.  ")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Save each one to files\xa0",(0,r.yg)("strong",{parentName:"p"},"server.pem"),"\xa0and\xa0",(0,r.yg)("strong",{parentName:"p"},"issuer.pem"),'\xa0(copy-paste from ----BEGIN CERTIFICATE---- to ----END CERTIFICATE----. Make sure the "begin" and "end" lines are included.)  ')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Open Firefox, open settings, go to "Privacy & Security", "Certificates" and click on ',"[View Certificates]","  ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Find the "DigiCert Global Root CA" and export it to file (the default file name\xa0',(0,r.yg)("strong",{parentName:"p"},"DigiCertGlobalRootCA.crt"),"\xa0is OK)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Now use the following command to verify the issuer and server certs"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openssl verify -verbose -CAfile <(cat DigiCertGlobalRootCA.crt issuer.pem) server.pem\n")),(0,r.yg)("p",null,"We basically need to use cat to concatenate the root CA certificate and the issuer certificate to validate the server certificate."),(0,r.yg)("h2",{id:"password-hashing-1---sha512"},"Password Hashing 1 - SHA512"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Create two dummy test accounts, both with with password of "password"\xa0  ')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'$sudo adduser test1\n(type "password")\u200b$sudo adduser test2\n(type "password")\u200b\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Examine the content of the shadow file (/etc/shadow).\xa0  ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ sudo cat /etc/shadow\u200btest1:$y$j9T$x23oBZ3tUzqPTScTsIKud1$g/XJAFGEITAfrugMpYH3hxMCS9RLz9bDr/T1H9omrYC:19405:0:99999:7:::test2:$y$j9T$gLNja5MeJWEXiECKgrqh50$MObX0SyUO6qsZZT9DJXE4F7JU6DKBh./yTu46HCvKR.:19405:0:99999:7:::*\n")),(0,r.yg)("p",null,"Note: The default hashing mechanism in Kali is now Yescrypt (",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mi",{parentName:"mrow"},"y")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),") however OpenSSL does not currently support this hash. We'll instead demonstrate using SHA512 (",(0,r.yg)("span",{parentName:"p",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mn",{parentName:"mrow"},"6")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"6")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"6"))))),") below.\xa0  "),(0,r.yg)("p",null,"Note:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("span",{parentName:"li",className:"math math-inline"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mn",{parentName:"mrow"},"6")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"6")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"6")))))," at the beginning indicates that the password is encrypted using SHA512 with salt"),(0,r.yg)("li",{parentName:"ul"},"Although test1 and test2 have the same password, the hash is different due to the different salt")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'Use openssl with "passwd" command to manually create SHA512 hashes of password "password" with salt and check that they match with the values in the shadow file.  ')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"a1112407@kali:~$ openssl passwd -6 -salt 9VPMbK3ALIhniJHW password  \n  \n**$6$9VPMbK3ALIhniJHW$bJMWzyPJEeZaVWR9Um/X3TdDs4C9WvLnp6RsnRPA.5CltBhjO4GbxLESwqFUh8YbjreRpxw7NPHjrzfxEaqz6/**  \n  \na1112407@kali:~$ openssl passwd -6 -salt ZGKaIrrMWYnPQSSM password  \n  \n**$6$ZGKaIrrMWYnPQSSM$yFnz8v0k4vCoOqNQSRihMIGbG6lexlkgA73wdDgXj8xBxrvTpdNAII3pcQLyFkXVUkKar8B18BQFc/wiireET/**\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"How does the salt help to prevent password hash pre-computation attacks?")),(0,r.yg)("h2",{id:"optional-creating-an-md5-collision-with-fastcoll"},"(Optional) Creating an MD5 collision with fastcoll"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download this binary executable for\xa0",(0,r.yg)("a",{parentName:"p",href:"https://myuni.adelaide.edu.au/courses/101160/files/16638933?wrap=1",title:"fastcoll-2-1"},"fastcoll"),"\xa0",(0,r.yg)("a",{parentName:"p",href:"https://myuni.adelaide.edu.au/courses/101160/files/16638933/download?download_frd=1"},"Download fastcoll"),(0,r.yg)("a",{parentName:"p",href:"https://myuni.adelaide.edu.au/courses/101160/pages/$CANVAS_COURSE_REFERENCE$/file_ref/g9c63672fbd47b0990435b2fe7a8af82b/download?wrap=1",title:"fastcoll"}),"to your Kali instance and make it executable (chmod +x). You can also compile it from source using this repository (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/upbit/clone-fastcoll"},"https://github.com/upbit/clone-fastcollLinks to an external site."),") but you would need to install the C++ Boost library first.  ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Create some "prefix" file to start with, and run fastcoll to generate two files with identical MD5 hashes, and confirm that the MD5 are indeed identical. How would you go about creating two programs (say scripts) with identical MD5 hash but with different execution behaviour?  '))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"**root@kali:~# echo \"This is a test prefix\" > prefix.txt**  \n**root@kali:~# ./fastcoll prefix.txt**  \nGenerating first block: .  \nGenerating second block: W.................  \nuse 'md5sum md5_data*' check MD5  \n**root@kali:~# ls md5_data***  \nmd5_data1  md5_data2  \n**root@kali:~# cat md5_data1**  \nThis is a test prefix  \n\ufffd\ufffd\ufffd>\ufffd6*\ufffdu\ufffd\ufffd\ufffd{e\ufffd:W\ufffdE0N\ufffd9\ufffd\ufffd\u01b2\ufffd\ufffd\ufffd\ufffdr\ufffd)\ufffdf\ufffds\ufffd\ufffd\ufffd\ufffdam\ufffdB\ufffdV\ufffd\ufffd\ufffd\ufffdVLO;c\ufffd+\ufffdM\ufffd\ufffdP\ufffd\ufffd\ufffd\u0566\ufffdE\ufffd\ufffd\ufffdH\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd7\ufffd\ufffd\ufffdr\ufffd792\ufffd\u0129\ufffd\ufffd\ufffdH  \n                                                                     \ufffd\ufffdc\ufffd\ufffdWVJIo**root@kali:~# cat md5_data2**  \nThis is a test prefix  \n\ufffd\ufffd\ufffd>\ufffd6*\ufffdu\ufffd\ufffd\ufffd{e\ufffd:W\ufffd\ufffdE0N\ufffd9\ufffd\ufffd\u01b2\ufffd\ufffd\ufffd\ufffdr\ufffd)\ufffdf\ufffds\ufffd}\ufffd\ufffdam\ufffdB\ufffdV\ufffd(\ufffd\ufffdVLO;c\ufffd+\ufffdM\ufffd\ufffdP\ufffd\ufffd\ufffd\ufffd&\ufffdE\ufffd\ufffd\ufffdH\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd7\ufffd\ufffd\ufffdr\ufffd792\ufffdD\ufffd\ufffd\ufffd\ufffdH  \n                                                                    \ufffd\ufffdc\ufffd\ufffdW\ufffd**root@kali:~# md5sum md5_data***  \n926459c620ba6651ba0ce6d223ca4e25  md5_data1  \n926459c620ba6651ba0ce6d223ca4e25  md5_data2\n")),(0,r.yg)("h2",{id:"optional-learning-more-about-cryptography"},"(Optional) Learning more about cryptography"),(0,r.yg)("p",null,"If you're interested in learning more about cryptography and doing more fun challenges,\xa0",(0,r.yg)("a",{parentName:"p",href:"https://www.cryptohack.org/",title:"Link"},"CryptoHackLinks to an external site."),"\xa0is a great resource."))}h.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),y=r,m=g["".concat(l,".").concat(y)]||g[y]||h[y]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);