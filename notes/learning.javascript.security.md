---
id: f49q2e7ln41rpeqz70st4ow
title: Security
desc: ''
updated: 1692188298007
created: 1664950570990
---

- [OWASP Top Ten Vulnerabilities](https://owasp.org/www-project-top-ten/)

## OWASP(Open Web Application Security Project )

The OWASP (Open Web Application Security Project) Top Ten is a widely recognized list of the most critical web application security risks. These vulnerabilities represent common issues that can lead to security breaches if not properly addressed.

### **Injection**:

This occurs when untrusted data is sent to an interpreter as part of a command or query, leading to unintended actions. An attacker can manipulate input fields to execute arbitrary code.

#### Example

- **SQL Injection** - Attacker inserts malicious SQL code into a login form, gaining unauthorized access to a database.

  - SQL Injection Based on **1=1** is Always True.

  ```sql
  SELECT * FROM Users WHERE UserId = 105 OR 1=1;
  ```

  - SQL Injection Based on Batched SQL Statements

  ```js
  txtUserId = getRequestString('UserId');
  txtSQL = 'SELECT * FROM Users WHERE UserId = ' + txtUserId;
  //What is user entered 105; DROP TABLE Suppliers in input box for UserId? The txtSQL will result in:
  SELECT * FROM Users WHERE UserId = 105; DROP TABLE Suppliers;
  ```

  #### Prevention

  - using **PREPARED STATEMENTS**: The idea is very simple - the query and the data are sent to the database server separately.

The _mysql2_ library handles the parameter binding and escaping internally, ensuring that each value is treated as **data**, not **executable code**.

```js
app.post('/batchInsert', (req, res) => {
  const usersToInsert = req.body.users; // An array of user objects

  // Using a prepared statement for batch insert
  const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
  const values = usersToInsert.map(user => [user.username, user.email]);

  connection.query(sql, [values], (err, results) => {
    if (err) {
      ...
    }
  });
});

```

### Identification and Authentication Failures (previously, Broken Authentication)

Flaws in authentication and session management can lead to unauthorized access to accounts and sensitive data.

#### example

- **Credential stuffing** - Attackers use previously stolen credentials to gain unauthorized access to user accounts on various sites.

#### Prevention

- Implement strong password policies, enable multi-factor authentication (MFA), use secure session management, and enforce secure password storage (e.g., bcrypt hashing).

### Cryptographic Failures (previously : Sensitive Data Exposure)

This vulnerability involves inadequate protection of sensitive data, such as passwords, credit card numbers, and personal information.

#### Example:

- **Insecure storage** - Storing passwords in plain text instead of hashing them, making it easy for attackers to steal user credentials.

#### Prevention

- Encrypt sensitive data at rest and during transmission (use HTTPS).
- Avoid storing sensitive information unless absolutely necessary.
- Implement proper access controls to limit who can access sensitive data.
- Disable caching for response that contain sensitive data.

### Insecure Design

_Scenario_: A chain of cinemas provides discounts for group bookings but mandates a deposit when the group size exceeds fifteen attendees. Malicious actors could analyze this process and attempt to determine whether it's possible to reserve six hundred seats across all cinemas in just a few requests. This could potentially lead to a significant financial loss.

### **Broken Access Control**:

Improper enforcement of restrictions on what authenticated users can do can lead to unauthorized actions.

- Access control enforces policy such that users cannot act outside of their intended permissions

#### Example:

- Permitting viewing or editing someone else's account, by providing its unique identifier (insecure direct object references)

_Scenario_: _An application allows users to view their own account details by navigating to https://example.com/profile?user_id=123. The attacker changes the user_id parameter to access another user's account._

- CORS misconfiguration allows API access from unauthorized/untrusted origins.

#### Prevention

- Except for public resources, deny access by default.
- Stateful session identifiers should be invalidated on the server after logout. Stateless JWT tokens should rather be short-lived so that the window of opportunity for an attacker is minimized. For longer lived JWTs it's highly recommended to follow the OAuth standards to revoke access.

### **Security Misconfiguration**:

Failure to securely configure settings and security controls can expose sensitive data or provide attackers with unnecessary access.

#### Example:

- _Default credentials_ - Leaving default usernames and passwords for admin accounts, enabling attackers to easily access and control the application.

_Scenario_: An application's admin panel has default credentials (admin/admin). The attacker uses these credentials to log in and compromise the system.

In 2023 guidelines, XXE is also under this.

#### XML External Entity (XXE)

XXE security vulnerability allows a attacker to inject unsafe XML entities into a web application that processes XML data. Attackers can exploit this to read files on the server.
eg:

- Attacker submits malicious XML input that references a sensitive file, gaining unauthorized access to its content.

### **Cross-Site Scripting (XSS)**:

XSS occurs when an application includes untrusted data in a web page, allowing attackers to execute malicious scripts in the context of a user's browser.

#### Example:

in an input feild, that directly gets added to the DOM, attacker might add a script to execute something like:

```html
<button
  onclick="window.location.href = 
'http://malicious-site.com'"
>
  Get offers
</button>
```

#### Prevention

- implement non-bypassable Content Security Policy(CSP) policy. CSP specifies which sources of content are considered valid for specific types of resources on a web page

### **Server-Side Request Forgery (SSRF)**

SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL

#### CSRF

Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker’s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

### Vulnerable and Outdated Components (previously: Using Components with Known Vulnerabilities)

Integrating outdated or vulnerable third-party components can expose applications to known exploits.

#### Example:

- Including a vulnerable version of a library in an application, allowing attackers to exploit known weaknesses.

### Security Logging and Monitoring Failures

Without proper logging and monitoring, detecting and responding to security incidents becomes challenging.

#### Example:

- Failing to log failed login attempts, making it difficult to identify and respond to a brute-force attack.
