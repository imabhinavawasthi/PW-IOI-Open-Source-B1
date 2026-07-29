    const res3 = await step3(res2);
} catch (err) {
    console.error(err);
}
```
### Code Example
```javascript
const fetchUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Vaibhav" }), 1000);
    });
};
const fetchUserPosts = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
    });
};
// Evolution demo
async function getDashboardData() {
    console.log("Fetching user...");
    const user = await fetchUserData();
    console.log(`User fetched: ${user.name}`);
    const posts = await fetchUserPosts(user.id);
    console.log(`Posts fetched:`, posts);
    return posts;
}
getDashboardData();
```
### Output
```text
Fetching user...
[1s delay]
User fetched: Vaibhav
[1s delay]
Posts fetched: [ 'Post 1', 'Post 2' ]
```
### Important Notes
* Async/Await does not replace Promises; it sits on top of them. An `async` function always returns a Promise.
* Promises introduced standard error handling via `.catch()`, which async/await handles natively with standard synchronous `try/catch` blocks.
