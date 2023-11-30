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


## General Security Principles

### Principle of lease privilege
- It says, every privileged user of the system should operate using the least amount of privilege necessary to complete the job.

- Principle of Least-Privilege Applications:
    - APIs
    - System resources
    - Database access
    - Software version control
    - Public-facing webpages        

### Simple is more secure

Keep the code simple.
- Use clearly named functions and variables 
- Write code comments 
- Prefer built-in functions. 
- Remove cruft(redundant, unused code)
- Disable unused features.(removing unused feature helps us to secure one feature less, i.e one less feature open to threat)
- DRY

