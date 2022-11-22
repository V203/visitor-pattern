[![Node.js CI](https://github.com/V203/visitor-pattern/actions/workflows/node.js.yml/badge.svg)](https://github.com/V203/visitor-pattern/actions/workflows/node.js.yml)
# The visitor design pattern.


## What Is the vistor pattern

One of the behavioral design patterns is the visitor pattern.The visitor design pattern is a technique used in software engineering and object-oriented programming to decouple an algorithm from the object structure it relies on. The ability to add new operations to existing object structures without changing the structures is a useful outcome of this separation.

It places a strong emphasis on polymorphic behavior throughout its flow and structure. allowing for very easy and straightforward addition of new functionality without altering the code.

*****

## Solutions provided by the visitor pattern

For (some) classes of an object structure, it should be possible to define a new operation without changing the classes.
It is inflexible to create new subclasses every time a new operation is needed when the object structure is made up of numerous unrelated classes and new operations are frequently needed because "distributing all these operations across the various node classes leads to a system that's hard to understand, maintain, and change."

It is utilized when we need to carry out an operation on a collection of objects that share a common type. We can move the operational logic from the objects to another class with the aid of the visitor pattern.


****
|Pros| Cons|
|--|--|
|If the operation's logic changes, we only need to update the visitor implementation rather than all the item classes.|We should know the return type of visit() methods at the time of designing otherwise we will have to change the interface and all of its implementations.|
|It is simple to add a new item to the system; only the visitor interface and implementation will need to be changed, and the existing item classes won't be impacted.|If there are too many implementations of visitor interface, it makes it hard to extend.|



