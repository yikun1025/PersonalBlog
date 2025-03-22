## Recorded workshop:

## [https://echo360.net.au/media/c0075f63-761c-4b91-8f02-0c5c67a7571f/publicLinks to an external site.](https://echo360.net.au/media/c0075f63-761c-4b91-8f02-0c5c67a7571f/public)

## Becoming Familiar with OpenSSL

OpenSSL is a library and command-line tool for both symmetric and asymmetric (RSA) encryption. OpenSSL is included as part of most Linux builds, and exists in Kali Linux. 

1. To get help and list the the commands, type openssl help
 ```  
 openssl help
```

Note that list of standard commands, message digest (hashing) formats supported, and cipher commands (encryption algorithms) supported.  

2. We will be using the `"enc"`, `"dgst"`, `"genrsa"`, `"rsa"`, `"pkeyutl"`, commands. To get options for each of these commands, use the "-help" option

 ```  
 openssl help
 ```
3. To list all the ciphers supported execute this command
    
    # openssl enc -ciphers
 ```bash
 openssl enc -ciphers
 ```
 
 ## Symmetric Encryption

1. Create a sample file -- just a small text file is fine

```bash
echo "Ethical Hacking is Fun" > plaintext
```

2. Open the text file in a Hex editor to confirm its binary contents
```bash
hexeditor plaintext
```

2. Encrypt the file using AES128 CBC mode. The 128-bit key and IV (initialisation vector) should be chosen randomly for real use, but for the purpose of this exercise anything simple is OK.

```bash
openssl enc -aes-128-cbc -in plaintext -out ciphertext -k 123 -iv 456
```
2. Check the content of the ciphertext

```bash
hexeditor ciphertext
```
Note that the ciphertext has the "Salted__" prefix, indicating that a random salt has been used.  

3. Decrypt the ciphertext and check that you get the original text back

```bash
openssl enc -d -aes-128-cbc -in ciphertext -k 123 -iv 456
```

## ECB vs CBC

As explained in the lecture, ECB (electronic code book) operation mode of AES encryption encrypts blocks of binary independently, so identical blocks encrypt to the same ciphertext. This is bad if you are trying to encrypt something like an image. CBC (cipher block chaining) mode, on the other hand, spreads or diffuses the information over all blocks by chaining.

1. Download this [cbc.bmp](https://myuni.adelaide.edu.au/courses/101160/files/16638926 "Link") to Kali and create a copy of it with the filename **original.bmp**
2. Encrypt this file using AES128 in ECB mode as follows:

```bash
openssl enc -aes-128-ecb -in cbc.bmp -out encrypted.bmp -K 123
```

3. Now copy the bitmap header (first 54 bytes) from the original to the encrypted file using this dd command
```bash
dd if=cbc.bmp count=54 ibs=1 >> out.bmp  
dd if=encrypted.bmp skip=54 ibs=1 >> out.bmp
```

or this Python script.
    ```
```python
original = open('cbc.bmp','rb')  
encrypted = open('encrypted.bmp','rb')  
output = open('output.bmp','wb')  
data_original = original.read()  
data_encrypted = encrypted.read()  
output.write(data_original[0:55]) **# copy the first 54 bytes from original**  
output.write(data_encrypted[55:len(data_encrypted)]) **# write the remainder from encrypted**  
original.close()  
encrypted.close()  
output.close()
```
4. View the encrypted file with the modified header, and confirm that you can make out the original image like this:  

5. Next, encrypt the original BMP file again using CBC this time. Note that you need to specify the initialisation vector (IV) for the CBC mode.
```
openssl enc -aes-128-cbc -in cbc.bmp -out encrypted_cbc.bmp -K 123 -iv 456
```

6. Repeat the header modification as per Step 3 for the CBC-encrypted image, and confirm that the information now looks random.   

## Textbook RSA using Python

In this step you will perform "textbook" RSA encryption and decryption using the following given primes. The key difference between actual PKCS RSA implementation and textbook implementation is padding of messages before encryption. PKCS#1.5 padding includes random bytes, so that ciphertext is actually different each time the same plaintext is encrypted, whereas it is identical each time with textbook RSA. This is a cryptographic weakness. Since a given plaintext always produces the same ciphertext we say that textbook RSA is deterministic. How is this a problem? Think about how you could find the plaintext of a ciphertext encrypted with textbook RSA if you knew that the original plaintext was a number between 0 and 99.

```
p=0xE017  
q=0xD20D  
e=0x010001
```

1. Run the following python code to verify that RSA "works". Experiment with different "messages". Make sure you understand what each line is doing!! You can also download the script from [here](https://myuni.adelaide.edu.au/courses/101160/files/16638935?wrap=1 "textbook_rsa-3.py") [Download here](https://myuni.adelaide.edu.au/courses/101160/files/16638935/download?download_frd=1). Note: You should also try doing it the other way: encrypt with private exponent **d**, then decrypt with public exponent **e**.  

 ```python
    # function to calculate inverse modular
    # using the extended Euclidean algorithm
    def invmod(a,n):
      i=1
      while True:
        c = n * i + 1;
        if(c%a==0):
          c = c//a
          break;
        i = i+1
      # note: indent before the following statement
      return c
    
    p = int("E017",16) # first prime
    q = int("D20D",16) # second prime
    e = int("010001",16) # a number that is co-prime with (p-1)*(q-1)
    
    # calculate modulus n
    n = p*q
    print("n is: " + str(n))
    
    # calculate inverse modular d of exponent e and (p-1)*(q-1)
    d = invmod(e, (p-1)*(q-1))
    print("d is: " + str(d))
    
    # check that d*e mod (p-1)*(q-1) is indeed 1
    print("checking d*e mod (p-1)*(q-1): " + str(((d*e) % ((p-1)*(q-1)))))
    
    # encrypting short message using public exponent e
    msg = 12345
    enc = pow(msg,e, n) # supplying the 3rd parameter in pow() efficiently computes the mod
    print("Message " + str(msg) + " is encrypted to: " + str(enc))
    
    # decrypt message using private exponent d
    plain = pow(enc,int(d), n) # supplying the 3rd parameter efficiently computes the mod
    print("Cipher " + str(enc) + " is decrypted to: " + str(plain)​)
    ```
    

## RSA Encryption with OpenSSL

1. Generate a **512**-bit RSA private key (default is 2048 bits) and check the key (encoded in Base64). Also note that standard exponent (65537 or 0x10001) is again used here.

```bash
openssl genrsa 512 > private.key  
cat private.key
```
2. Generate the corresponding public key. 
 ```bash
openssl rsa -pubout < private.key > public.key  
cat public.key
```    
2. You can get more info on the public key by using the following command
```bash
openssl rsa -text -pubin < public.key
```    
Note the **exponent (e)** and the **modulus (n)** are encoded in the key to allow encryption.  

3. Let's encrypt a short text. The key size is 512bits (64 bytes) so the maximum message size after taking away padding should be 53 byes.  

```bash
echo "Ethical hacking is fun" | openssl pkeyutl -encrypt -pubin -inkey public.key > message.dat
```

4. Trying to encrypt something too long gives you this error (please try)

```bash
RSA operation error  
3080140544:error:0406D06E:rsa routines:RSA_padding_add_PKCS1_type_2:data too large for key size:../crypto/rsa/rsa_pk1.c:125:
```  
This is why RSA is not used to encrypt long messages. RSA can only encrypt input data that is smaller than the modulus value of the RSA key. RSA is most commonly used to encrypt temporary session keys (e.g., AES encryption key) which are then used to encrypt long messages.  

5. Now we can decrypt using the private key as follows. Verify that you get the same message back.  
```bash
openssl pkeyutl -decrypt -inkey **private.key** -in message.dat
```  
## Examining the RSA Private Key

(Update: This part won't work since a 512-bit key was generated in the previous section. The example below is demonstrated with a 128-bit key, which can't be created nowadays as it has been depreciated due to being vulnerable.)

The RSA **private.key** generated in the last exercise is formatted using PEM and has a structure called "ASN.1"(see https://tools.ietf.org/html/rfc3641). You can use the **openssl asn1parse** command to understand what is included in the private.key to obtain the modulus (n), p, q, public exponent (e), and the private exponent (d).

1. Execute the following command (the example below is for 128 bits, so the one you will see is much longer). Note: If you do not get the modulus/exponents/secrets shown below you may have to use openssl's "-strparse" switch to drill down deeper into the private.key (see OpenSSL man page).  

```bash
openssl asn1parse -i -in private.key  
0:d=0 hl=2 l= 97 cons: SEQUENCE  
2:d=1 hl=2 l= 1 prim: INTEGER :00  
5:d=1 hl=2 l= 17 prim: INTEGER :AB32AD57BC713D952BE8D30099B41BEF **# this is the modulus n**  
24:d=1 hl=2 l= 3 prim: INTEGER :010001 **# public exponent e**  
29:d=1 hl=2 l= 16 prim: INTEGER :76B72FA9358DB94B835AF9B0F4C0D721 **# private exponent d**  
47:d=1 hl=2 l= 9 prim: INTEGER :DD454679C3CA4C77 **# secret p**  
58:d=1 hl=2 l= 9 prim: INTEGER :C611776FD9A7A249 **# secret q**  
69:d=1 hl=2 l= 8 prim: INTEGER :75081A01773BFD7B  
79:d=1 hl=2 l= 8 prim: INTEGER :2A37B4DE89651AC9  
89:d=1 hl=2 l= 8 prim: INTEGER :228DBCF687C89CD5
```


2. Now we know n, p, q, e and d, you can use this Python code to verify their relationships (n=p*q and d*e mod (p-1)*(q-1) = 1 as follows  

```bash
p = int("00DD454679C3CA4C77",16)  
q = int("00C611776FD9A7A249", 16)  
n = int("00AB32AD57BC713D952BE8D30099B41BEF", 16)  
e = int("010001",16)  
d = int("76B72FA9358DB94B835AF9B0F4C0D721", 16)  
  
# Verify n = p*q  
print("[n]:" + str(n) + " [p*q]: " + str(p*q))  
  
# verify e*d mod{(p-1)*(q-1)} = 1  
print("[e*d mod{(p-1)*(q-1)}]: " + str((e*d)%((p-1)*(q-1))))
```
## Cryptographic Hashing

OpenSSL includes command for calculating cryptographic hashes using various algorithms. 

1. Calculate the SHA256 hash of the original bitmap file used in the previous exercise as follows  
```bash
openssl dgst cbc.bmp  
SHA256(original.bmp)= 61d9ed6f632e3db1be665fc3c02446d0a76ba153517054bfc3a8855ca9b05322
```
2. Use hexeditor to change 1 bit in the original.bmp file, save, and re-calculate SHA256  

3. Confirm that the generated SHA256 is COMPLETELY different from the original one.  
```bash
openssl dgst cbc.bmp  
SHA256(original.bmp)= 7bf73e1e98c11d3f2233e8f46fc328663405b5d1035bbff0d87e83421823609b
```
## Digital Signature

As covered in the lecture, digital signature involves signing the message digest (hash) of a message with the signer's private key. The recipient verifies that (a) the message has not been modified and (b) the signer is the owner of the private key corresponding to the public key. For digitally signing a document, we will generate a new X.509 certificate as follows

1. Run the following command to generate signing key and certificate (containing the public key)
 ```bash
openssl req -nodes -x509 -sha256 -newkey rsa:2048 -keyout signing.key -out signing.crt
```

When prompted, supply additional details about the signer.
2. Create some message.
```bash
echo "Ethical hacking is cool" > message.txt
```

2. Sign the message with the generated private key as follows
```bash
openssl dgst -sha256 -sign signing.key -out sign.txt.sha256 message.txt
```
2. Imagine that you have sent the message along with the digital signature. The recipient would look up the sender/signer's public X.509 certificate, extract the public key, then use that key to validate the signature.

```bash
openssl x509 -in signing.crt -pubkey -noout > signing.pub.key  
openssl dgst -sha256 -verify signing.pub.key -signature sign.txt.sha256 message.txt  

Verified OK
```


3. Try tampering with either the message or the signature. Again, changing a single bit in either of the files will result in a failed verification.
```bash
sed -i "s/o/0/g" message.txt  
# openssl dgst -sha256 -verify signing.pub.key -signature sign.txt.sha256 message.txt  
Verification Failure
```
## Comparing the Performance between RSA and AES

One reason why RSA is mainly used just to encrypt the secret key and not the whole message, is that RSA is much slower than AES. OpenSSL comes with a tool to measure the performance of RSA and AES. Give it a try.  

1. Test the performance of RSA
```bash
openssl speed rsa
```
2. Test the performance of AES  
```bash
openssl speed aes
```
3. What can you say about the speed of the two protocols?

## Manually Verifying an X.509 Certificate

1. Download a certificate from a real server using openssl 
```openssl s_client -connect [www.spotify.com:443
    Links to an external site.](http://www.spotify.com:443/) -showcerts  
    CONNECTED(00000003)  
    depth=2 C = US, O = DigiCert Inc, OU = www.digicert.com, CN = DigiCert Global Root CA  
    verify return:1  
    depth=1 C = US, O = DigiCert Inc, CN = DigiCert SHA2 Secure Server CA  
    verify return:1  
    depth=0 C = SE, L = Stockholm, O = Spotify AB, CN = *.spotify.com  
    verify return:1  
    ---  
    Certificate chain  
    0 s:/C=SE/L=Stockholm/O=Spotify AB/CN=*.spotify.com  
    i:/C=US/O=DigiCert Inc/CN=DigiCert SHA2 Secure Server CA  
    -----BEGIN CERTIFICATE-----  
    MIIFCDCCA/CgAwIBAgIQA2PTtH+jtsZRxsc3jVOALDANBgkqhkiG9w0BAQsFADBN  
    _**___SNIP____**_  
    -----END CERTIFICATE-----  
    1 s:/C=US/O=DigiCert Inc/CN=DigiCert SHA2 Secure Server CA  
    i:/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert Global Root CA  
    -----BEGIN CERTIFICATE-----  
    MIIElDCCA3ygAwIBAgIQAf2j627KdciIQ4tyS8+8kTANBgkqhkiG9w0BAQsFADBh  
    _**___SNIP___**_  
    -----END CERTIFICATE-----  
    ---  
    Server certificate  
    subject=/C=SE/L=Stockholm/O=Spotify AB/CN=*.spotify.com  
    issuer=/C=US/O=DigiCert Inc/CN=DigiCert SHA2 Secure Server CA  
    ---  
    No client certificate CA names sent  
    Peer signing digest: SHA512  
    Server Temp Key: ECDH, P-256, 256 bits  
    ---  
    SSL handshake has read 3141 bytes and written 302 bytes  
    Verification: OK  
    ---  
    New, TLSv1.2, Cipher is ECDHE-RSA-AES128-GCM-SHA256  
    Server public key is 2048 bit  
    _**___SNIP__**_
```

2. There are two certificates in the output: (1) one for *.spotify.com wildcard URI and (2) issuer cert by DigiCert. Let's verify that both of these are valid by checking the signature embedded in these certificates against the root CA certificate.  
  
>Save each one to files **server.pem** and **issuer.pem** (copy-paste from ----BEGIN CERTIFICATE---- to ----END CERTIFICATE----. Make sure the "begin" and "end" lines are included.)  

3. Open Firefox, open settings, go to "Privacy & Security", "Certificates" and click on [View Certificates]  

4. Find the "DigiCert Global Root CA" and export it to file (the default file name **DigiCertGlobalRootCA.crt** is OK)
5. Now use the following command to verify the issuer and server certs

```bash
openssl verify -verbose -CAfile <(cat DigiCertGlobalRootCA.crt issuer.pem) server.pem
```
We basically need to use cat to concatenate the root CA certificate and the issuer certificate to validate the server certificate.

## Password Hashing 1 - SHA512

1. Create two dummy test accounts, both with with password of "password"   
```bash
$sudo adduser test1
(type "password")​$sudo adduser test2
(type "password")​
```

2. Examine the content of the shadow file (/etc/shadow).   

```bash
$ sudo cat /etc/shadow​test1:$y$j9T$x23oBZ3tUzqPTScTsIKud1$g/XJAFGEITAfrugMpYH3hxMCS9RLz9bDr/T1H9omrYC:19405:0:99999:7:::test2:$y$j9T$gLNja5MeJWEXiECKgrqh50$MObX0SyUO6qsZZT9DJXE4F7JU6DKBh./yTu46HCvKR.:19405:0:99999:7:::*
```
Note: The default hashing mechanism in Kali is now Yescrypt ($y$) however OpenSSL does not currently support this hash. We'll instead demonstrate using SHA512 ($6$) below.   
      
Note:
- The $6$ at the beginning indicates that the password is encrypted using SHA512 with salt
- Although test1 and test2 have the same password, the hash is different due to the different salt

3. Use openssl with "passwd" command to manually create SHA512 hashes of password "password" with salt and check that they match with the values in the shadow file.  

```bash
a1112407@kali:~$ openssl passwd -6 -salt 9VPMbK3ALIhniJHW password  
  
**$6$9VPMbK3ALIhniJHW$bJMWzyPJEeZaVWR9Um/X3TdDs4C9WvLnp6RsnRPA.5CltBhjO4GbxLESwqFUh8YbjreRpxw7NPHjrzfxEaqz6/**  
  
a1112407@kali:~$ openssl passwd -6 -salt ZGKaIrrMWYnPQSSM password  
  
**$6$ZGKaIrrMWYnPQSSM$yFnz8v0k4vCoOqNQSRihMIGbG6lexlkgA73wdDgXj8xBxrvTpdNAII3pcQLyFkXVUkKar8B18BQFc/wiireET/**
```
1. How does the salt help to prevent password hash pre-computation attacks?

## (Optional) Creating an MD5 collision with fastcoll

1. Download this binary executable for [fastcoll](https://myuni.adelaide.edu.au/courses/101160/files/16638933?wrap=1 "fastcoll-2-1") [Download fastcoll](https://myuni.adelaide.edu.au/courses/101160/files/16638933/download?download_frd=1)[](https://myuni.adelaide.edu.au/courses/101160/pages/$CANVAS_COURSE_REFERENCE$/file_ref/g9c63672fbd47b0990435b2fe7a8af82b/download?wrap=1 "fastcoll")to your Kali instance and make it executable (chmod +x). You can also compile it from source using this repository ([https://github.com/upbit/clone-fastcollLinks to an external site.](https://github.com/upbit/clone-fastcoll)) but you would need to install the C++ Boost library first.  

2. Create some "prefix" file to start with, and run fastcoll to generate two files with identical MD5 hashes, and confirm that the MD5 are indeed identical. How would you go about creating two programs (say scripts) with identical MD5 hash but with different execution behaviour?  

```bash
**root@kali:~# echo "This is a test prefix" > prefix.txt**  
**root@kali:~# ./fastcoll prefix.txt**  
Generating first block: .  
Generating second block: W.................  
use 'md5sum md5_data*' check MD5  
**root@kali:~# ls md5_data***  
md5_data1  md5_data2  
**root@kali:~# cat md5_data1**  
This is a test prefix  
���>�6*�u���{e�:W�E0N�9��Ʋ����r�)�f�s����am�B�V����VLO;c�+�M��P���զ�E���H������7���r�792�ĩ���H  
                                                                     ��c��WVJIo**root@kali:~# cat md5_data2**  
This is a test prefix  
���>�6*�u���{e�:W��E0N�9��Ʋ����r�)�f�s�}��am�B�V�(��VLO;c�+�M��P����&�E���H������7���r�792�D����H  
                                                                    ��c��W�**root@kali:~# md5sum md5_data***  
926459c620ba6651ba0ce6d223ca4e25  md5_data1  
926459c620ba6651ba0ce6d223ca4e25  md5_data2
```

## (Optional) Learning more about cryptography

If you're interested in learning more about cryptography and doing more fun challenges, [CryptoHackLinks to an external site.](https://www.cryptohack.org/ "Link") is a great resource.