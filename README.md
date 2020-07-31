Implement Rract SSR in 3 ways

1. without framework and tools

```
/react-ssr
```

Issue:
server will send a entire bundle.js to client at once.
Is there any way to split bundle.js into different file?

loadable done 20200730
code-spliting

do not just ts-node
compile ts code by using ts-loader in webpack and run

2. with next.js

```
/react-ssr-with-next
```

3. with razzle.js

```
/react-ssr-with-razzle
```
