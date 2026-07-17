
1. Use threat model to prioritize what needs to be protected first. Find the weakest link and raise the security level to make the weakest point as diificult to exploit as possible.
2. Each system is vulnerable to its own specific  attacks. There is no 'one size fits all' threat model. Create a threat model to analyze:
    - valuables to protect
    - vulnerability
    - types of attack possible.
    - re-evaluate often.


# General Security Principles

## Principle of lease privilege
- It says, every privileged user of the system should operate using the least amount of privilege necessary to complete the job. Only give as much security access to any person or group as they need, and no additional privileges.

- Principle of Least-Privilege Applications:
    - APIs
    - System resources
    - Database access
    - Software version control
    - Public-facing webpages        

## Simple is more secure

Keep the code simple.
- Use clearly named functions and variables 
- Write code comments 
- Prefer built-in functions. 
- Remove cruft(redundant, unused code)
- Disable unused features.(removing unused feature helps us to secure one feature less, i.e one less feature open to threat)
- DRY

## Deny-list Allow-list

Restricting item by default is more secure approach. 
For example: In html form certain tags are allowed whereas rest are not. If we maintain a deny-list, it will be a lot of tags, also if a new tags gets introduced, we need to make sure we update the deny list. 

## Defence in depth
Multi level checkpoints like MFA, Captcha etc.

### Regulating requests
 This is the first line of defence. 
 - Make sure your application accepts only request methods(get, post, put etc) you expect and ignore others. 
 - Also examine the request response format(Content Type and Accept).- Filter problematic IPs in the past.
 - have a cap size for file size etc.

### Validating input
 Only good data is allowed in your web app. This would be different for each request but still some common areas to check are: 
 - Presence/length of i/p
 - type of data (num, jpeg, pdf)
 - format(email)
 - uniqueness (no two email are same etc)

### Sanitizing data
Most languages have special characters that have a definite meaning to them. If these special characters are in the data and are not sanitized, they may use their special meaning and cause problems. 

- The right action would be to replace powerful characters with harmless equivalents like in  `HTML: "<" with "&It;" and ">" with "&gt;"`
- escaping characters: like in sql ' denotes start f a string. Hence: SQL: "WHERE name='fake\'AND 1=1--'''
- typecasting data: Sql sanitization, JS sanitization etc

Data arriving directly from a user is not the only data that needs sanitization. Retrieving any stored data should be treated as new input too. For example, data may be properly sanitized for SQL when it's received and then stored in a database, but when it's retrieved from the database, it needs to be sanitized again before being used as HTML, JavaScript, JSON, XML, or any other format. It's also possible that the data changed since it was last stored. Just because it resides on your system doesn't mean you should trust it more than data coming directly from a user. You should always sanitize data before using it. 

### Label variables

It's important to keep track of which data has been sanitized and which has not. We can use variable names to label which data is potentially dangerous and which data is safe to use. You never want to accidentally pull in raw information, invalidating the entire sanitization process.
- Before sanitization, we can use names such as dirty, raw, or unsafe. 
- After sanitization, we can use names such as clean, sanitized, or safe.

### Keep creds private

- Don't put credentials directly inside your code. We call that hard coding the credentials. Instead, store the credentials in a separate file and use variables or even better constants to refer to the values.
- remove creds config file from version control.
- never reuse creds.

### Keep error msgs vague
Hackers use the results of their actions to improve their chances of success.

Imagine that a hacker visits a standard login page on a website and tries a username and password. If the response is username not found, then the hacker knows to try a different username. If after a few tries the response changes to password not found, then they'll know that they've made progress and they have found a valid username. A more secure approach is to return an identical login failed message in both cases. 

### Smart logging

What to Log:
- Date and time
- Source (IP, user)
- Action and target

Don't log query or post params. It can log user secret infos.
Also don't log any internal network information – including share names, router information, and computer names – needs to be encoded or otherwise obfuscated so that they're recognizable but not a way to access or probe them via automation.


# Most common attacks

## Credential attacks
There's credential theft, brute-force attacks, dictionary attacks, and credential stuffing.

- **credential theft**: somebody knows your credential. Maybe you shared accidently or left them somewhere.
- **brute force**: A brute-force attack is when an attacker uses software to try every combination of characters. In order to guess a password, it is trial and error. 
- **dictionary attack**: It is also a brute force attack, but it's one which prioritizes words that are in a dictionary over random combinations. It does not change the total time required to try every combination, but it can greatly reduce the actual time required to find the correct password.  eg: Qwerty, password
- **credential stuffing**: Once attacker knows password to one site, they try it on the other sites as well for same user. Most people have same psd for all many sites since this way it  is easier to remember.

**Passwords Recommendations**
- Use long, complex passwords
- Never reuse a password
- Use a password manager eg: 1pass etc
- Use SSH keys
- Becrypt passwords
- Use multi-factor authentication

You can also use **Login throttling**, i.e after maybe 10 failed attempts a penalty to wait 5 mins before making next attempt.

## URL manipulation and Insecure Direct Object Reference (IDOR)

- Searching for private webpages
- Exploring the file system
- Enumerating values in the database
- Detecting installed software
- Accessing privileged resources

Manipulating a URL may reveal a private webpage. The public website may not have a link to that page, or the page may be only accessible under certain conditions. For example, adding "preview=true" to a URL might show an unpublished version of the page. 

If a page displays a person's contact information, when the URL contains an ID of 27, then an attacker could try all IDs to get a full list of the people in the database. 

Software on a web server sometimes includes built-in webpages with special information for administration. 

- https://abc.com/orders/1244 : This particular url is a Direct object reference. It is fetching details of order id 1244. If this refernce is insecure(i.e not authorized) anyone with the url could see the order details, address, payment mode and details etc. Also, they can further brute force for other orders like 1243 etc. 

## SQL Injection
- SQL Injection is an attack that occurs when untrusted data is used to construct an SQL query.



# Data Security

Data Security Goals: CIA
- Confidentiality: data is only available to privileged users
- Integrity: data is correct and can be trusted
- Availability: data is available when needed


