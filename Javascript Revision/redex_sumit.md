# JavaScript Regular Expressions (Regex)

# Table of Contents

1. What is Regex?
2. Creating a Regex
3. Regex Flags
4. Character Classes
5. Quantifiers
6. Anchors
7. Groups
8. Alternation
9. Escape Characters
10. Common Regex Methods
11. Useful Regex Patterns
12. Practice Examples
13. Summary

---

# 1. What is Regex?

Regular Expression (Regex) is a pattern used to search, match, validate, and replace text.

### Uses

- Validate emails
- Validate phone numbers
- Password validation
- Search text
- Replace text
- Extract information

---

# 2. Creating a Regex

### Regex Literal

```js
const regex = /hello/;
```

### RegExp Constructor

```js
const regex = new RegExp("hello");
```

---

# 3. Regex Flags

| Flag | Meaning |
|------|---------|
| g | Global search |
| i | Ignore case |
| m | Multiline |
| s | Dot matches newline |
| u | Unicode |
| y | Sticky |

### Example

```js
const text = "Hello hello";

console.log(text.match(/hello/i));
// ["Hello"]

console.log(text.match(/hello/gi));
// ["Hello", "hello"]
```

---

# 4. Character Classes

## Any digit

```regex
\d
```

Matches

```
0-9
```

Example

```js
"123".match(/\d/g);
```

Output

```js
["1", "2", "3"]
```

---

## Non-digit

```regex
\D
```

Example

```js
"a1b2".match(/\D/g);
```

Output

```js
["a", "b"]
```

---

## Word Character

```regex
\w
```

Matches

```
Letters
Numbers
Underscore
```

---

## Non-word Character

```regex
\W
```

---

## Whitespace

```regex
\s
```

Matches

- Space
- Tab
- New line

---

## Non-whitespace

```regex
\S
```

---

## Dot

```regex
.
```

Matches any character except newline.

---

## Custom Character Set

```regex
[abc]
```

Matches

```
a
b
c
```

Example

```js
"cab".match(/[abc]/g);
```

---

## Range

```regex
[a-z]
```

Lowercase letters

```regex
[A-Z]
```

Uppercase

```regex
[0-9]
```

Digits

---

## Negated Set

```regex
[^0-9]
```

Matches everything except digits.

---

# 5. Quantifiers

## *

Zero or more

```regex
ab*
```

Matches

```
a
ab
abb
abbb
```

---

## +

One or more

```regex
ab+
```

Matches

```
ab
abb
abbb
```

---

## ?

Zero or one

```regex
colou?r
```

Matches

```
color
colour
```

---

## Exact Count

```regex
a{3}
```

Matches

```
aaa
```

---

## Minimum Count

```regex
a{2,}
```

Matches

```
aa
aaa
aaaa
```

---

## Range

```regex
a{2,5}
```

Matches

```
aa
aaa
aaaa
aaaaa
```

---

# 6. Anchors

## Start

```regex
^hello
```

Starts with hello.

---

## End

```regex
world$
```

Ends with world.

---

## Exact Match

```regex
^hello$
```

Only matches

```
hello
```

---

# 7. Groups

## Capturing Group

```regex
(abc)
```

Example

```js
const result = "abc123".match(/(abc)(123)/);

console.log(result[1]);
console.log(result[2]);
```

Output

```
abc
123
```

---

## Non-Capturing Group

```regex
(?:abc)
```

---

# 8. Alternation

OR operator

```regex
cat|dog
```

Matches

```
cat
dog
```

---

# 9. Escape Characters

Some characters have special meaning.

Escape them using `\`

Example

```regex
\.
```

Matches

```
.
```

Example

```regex
\$
```

Matches

```
$
```

---

# 10. Common Regex Methods

## test()

Returns true or false.

```js
const regex = /hello/;

console.log(regex.test("hello world"));
```

Output

```js
true
```

---

## exec()

Returns match object.

```js
const regex = /\d+/;

console.log(regex.exec("Age 21"));
```

---

## match()

```js
"Hello123".match(/\d+/);
```

---

## matchAll()

```js
const text = "1 2 3";

console.log([...text.matchAll(/\d/g)]);
```

---

## search()

Returns index.

```js
"Hello".search(/l/);
```

Output

```
2
```

---

## replace()

```js
"Hello".replace("H", "Y");
```

Output

```
Yello
```

---

## replaceAll()

```js
"a a a".replaceAll("a", "b");
```

Output

```
b b b
```

---

## split()

```js
"one,two,three".split(/,/);
```

---

# 11. Useful Regex Patterns

## Email

```regex
^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$
```

---

## Phone Number (10 digits)

```regex
^\d{10}$
```

---

## Only Numbers

```regex
^\d+$
```

---

## Only Letters

```regex
^[A-Za-z]+$
```

---

## Username

```regex
^[A-Za-z0-9_]{3,16}$
```

---

## Password

Minimum 8 characters with uppercase, lowercase, number, and special character.

```regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$
```

---

## URL

```regex
https?:\/\/(www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}
```

---

## ZIP/PIN Code (6 digits)

```regex
^\d{6}$
```

---

## Hex Color

```regex
^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
```

---

# 12. Practice Examples

## Check Email

```js
const email = "test@example.com";

const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

console.log(regex.test(email));
```

---

## Extract Numbers

```js
const text = "Price: 499 Qty: 2";

console.log(text.match(/\d+/g));
```

Output

```js
["499", "2"]
```

---

## Remove Spaces

```js
const text = "Hello World";

console.log(text.replace(/\s/g, ""));
```

Output

```
HelloWorld
```

---

## Replace Multiple Spaces

```js
const text = "Hello    World";

console.log(text.replace(/\s+/g, " "));
```

Output

```
Hello World
```

---

## Validate Username

```js
const username = "sumit_123";

const regex = /^[A-Za-z0-9_]{3,16}$/;

console.log(regex.test(username));
```

---

# 13. Summary

| Symbol | Meaning |
|---------|---------|
| `.` | Any character |
| `\d` | Digit |
| `\D` | Non-digit |
| `\w` | Word character |
| `\W` | Non-word character |
| `\s` | Whitespace |
| `\S` | Non-whitespace |
| `^` | Start |
| `$` | End |
| `*` | Zero or more |
| `+` | One or more |
| `?` | Optional |
| `{n}` | Exactly n |
| `{n,}` | At least n |
| `{n,m}` | Between n and m |
| `[]` | Character set |
| `[^]` | Negated set |
| `()` | Capturing group |
| `(?:)` | Non-capturing group |
| `|` | OR |

---

# Best Practices

- Keep regex patterns simple and readable.
- Use flags (`g`, `i`, `m`) only when needed.
- Test regex with sample inputs before using it in production.
- Escape special characters (`.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, `|`, `\`) when matching them literally.
- Prefer descriptive variable names like `emailRegex` or `passwordRegex` for maintainability.