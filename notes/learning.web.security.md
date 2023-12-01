---
id: nutf7tamgwrrmdxogge4gyq
title: Security
desc: ''
updated: 1701332478039
created: 1701332478039
---

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

- The right action would be to replace powerful characters with harmless equivalents like in  HTML: "<" with "&It;" and ">" with "&gt;"

- typecasting data: Sql sanitization, JS sanitization etc


## Data Security

Data Security Goals: CIA
- Confidentiality: data is only available to privileged users
- Integrity: data is correct and can be trusted
- Availability: data is available when needed

