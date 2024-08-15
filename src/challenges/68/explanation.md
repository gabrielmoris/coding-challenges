# Event Emitter

In the observer pattern (also commonly known as the publish-subscribe model),
we can observe/subscribe to events emitted by publishers and execute code whenever an event happens.

Implement an EventEmitter class similar to the one in Node.js that follows such an observer pattern.

**Examples**

```javascript
const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 2, 5);
// > "The sum is 7"

emitter.on("foo", (a, b) => console.log(`The product is ${a * b}`));
emitter.emit("foo", 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off("foo", addTwoNumbers);
emitter.emit("foo", -3, 9);
// > "The product is -27"
```

## Clarification Questions

The following are good questions to ask the interviewer to demonstrate your thoughtfulness. Depending on their response, you might need to adjust the implementation accordingly.

1. Can emitter.emit() be called without any arguments besides the eventName?
   Yes, it can be.
2. Can the same listener be added multiple times with the same eventName?
   Yes, it can be. It will be called once for each time it is added when eventName is emitted in the order they were added.
3. Following up on the question above, what should happen if a listener is added multiple times and emitter.off() is being called once for that listener?
   The listener will only be removed once.
4. Can non-existent events be emitted?
   Yes, but nothing should happen and the code should not error or crash.
5. What should the this value of the listeners be?
   It can be null.
6. Can listeners contain code that invoke methods on the emitter instance?
   Yes, but we can ignore that scenario for this question.
7. What if the listener callbacks throw an error during emitter.emit()?
   The error should be caught and not halt the rest of the execution. However, we will not test for this case.
   We will handle all the above cases except for the last two cases.

## Solution

#### Data Structure

Firstly, we have to decide on the data structure to store the events and the listeners. We can either use:

1. Map of eventNames to an array of listener functions.

```javascript
events = {
  foo: [Function1, Function3],
  bar: [Function2],
};
```

**Pros:**
Fast lookup of the list of listeners for an eventName.
**Cons:**
Since eventName is provided by the user, it can be any value and might conflict with existing keys on Object.prototype such as toString. We will handle this situation.

2. A flat array of eventName and listener pairs.

```javascript
events = [
  { eventName: "foo", listener: Function1 },
  { eventName: "bar", listener: Function2 },
  { eventName: "foo", listener: Function3 },
];
```

**Pros:**
Simple, flat structure.
**Cons:**

- Requires O(n) time to find the listeners for an event because you have to look through the entire list of events.
- emit() and off() operations will require iterating through the array, you can't instantly determine if an event exists and ignore emission of non-existent events.
- Potentially more space needed to store the data because of the repeated object fields and eventName strings.

Approach #1 is clearly superior, so we will use that. To mitigate the issue of user-provided eventNames conflicting with keys on Object.prototype, we can instantiate the \_events object with Object.create(null) or use a ES6 Map class.

**Implementing EventEmitter.on()**
Implementing `EventEmitter.on()` is pretty straightforward. Firstly check if eventName is present as a key of the `_events` object and make the value an empty array (for the list of listeners for that event) if it is the first time this `eventName` is encountered. Then push the `listener` into the array.

Return this so that the method can be chained.

**Implementing EventEmitter.off()**
First check if `eventName` is present as a key of the \_events object. If no events with `eventName` exists, we do not need to proceed further and can do an early `return`.

Since we only want to remove the first instance of any matching `listener`, we'll use `listeners.findIndex()` and remove only one instance via `.splice()`, instead of using something like `.filter()` which will remove all matching instances.

Return `this` so that the method can be chained.

**Implementing EventEmitter.emit()**
Check if the `eventName` exists or has any events and we can terminate and return false if the `eventName` doesn't exist or if there are no listeners for `eventName`.

To pass the rest of the arguments to each listener, we have to use `...args` in the method signature to capture all other arguments as the variable `args`. The listeners can be called with `args` via `Function.prototype.apply()` or `Function.prototype.call()`.

**Built-in object properties colliding with user-provided eventNames**
As mentioned above, if you're using a plain JavaScript object to map `eventName` to callbacks, one potential issue is using `eventNames` that clash with properties existing on JavaScript objects such as `valueOf` and `toString`.

```javascript
const emitter = new EventEmitter();
emitter.emit("toString"); // Might crash because the property does exist on the object.
```

Two ways to handle this:

- Use a Map instead of an object. This is the modern approach.
- Create your plain JavaScript object with Object.create(null) so that the object does not have a prototype and no additional properties.

### Class-bassed Solution

```typescript
interface IEventEmitter {
  on(eventName: string, listener: Function): IEventEmitter;
  off(eventName: string, listener: Function): IEventEmitter;
  emit(eventName: string, ...args: Array<any>): boolean;
}

export default class EventEmitter implements IEventEmitter {
  _events: Record<string, Array<Function>>;

  constructor() {
    // Avoid creating objects via `{}` to exclude unwanted properties
    // on the prototype (such as `.toString`).
    this._events = Object.create(null);
  }

  on(eventName: string, listener: Function): IEventEmitter {
    if (!Object.hasOwn(this._events, eventName)) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(listener);
    return this;
  }

  off(eventName: string, listener: Function): IEventEmitter {
    // Ignore non-existing eventNames.
    if (!Object.hasOwn(this._events, eventName)) {
      return this;
    }

    const listeners = this._events[eventName];

    // Find only first instance of the listener.
    const index = listeners.findIndex(
      (listenerItem) => listenerItem === listener
    );

    if (index < 0) {
      return this;
    }

    this._events[eventName].splice(index, 1);
    return this;
  }

  emit(eventName: string, ...args: Array<any>): boolean {
    // Return false for non-existing eventNames or events without listeners.
    if (
      !Object.hasOwn(this._events, eventName) ||
      this._events[eventName].length === 0
    ) {
      return false;
    }

    // Make a clone of the listeners in case one of the listeners
    // mutates this listener array.
    const listeners = this._events[eventName].slice();
    listeners.forEach((listener) => {
      listener.apply(null, args);
    });

    return true;
  }
}
```

### Function prototype-based Solution

```javascript
export default function EventEmitter() {
  // Avoid creating objects via `{}` to exclude unwanted properties
  // on the prototype (such as `.toString`).
  this._events = Object.create(null);
}

/**
 * @param {string} eventName
 * @param {Function} listener
 * @returns {EventEmitter}
 */
EventEmitter.prototype.on = function (eventName, listener) {
  if (!Object.hasOwn(this._events, eventName)) {
    this._events[eventName] = [];
  }

  this._events[eventName].push(listener);
  return this;
};

/**
 * @param {string} eventName
 * @param {Function} listener
 * @returns {EventEmitter}
 */
EventEmitter.prototype.off = function (eventName, listener) {
  // Ignore non-existing eventNames.
  if (!Object.hasOwn(this._events, eventName)) {
    return this;
  }

  const listeners = this._events[eventName];

  // Find only first instance of the listener.
  const index = listeners.findIndex(
    (listenerItem) => listenerItem === listener
  );

  if (index < 0) {
    return this;
  }

  this._events[eventName].splice(index, 1);
  return this;
};

/**
 * @param {string} eventName
 * @param  {...any} args
 * @returns {boolean}
 */
EventEmitter.prototype.emit = function (eventName, ...args) {
  // Return false for non-existing eventNames or events without listeners.
  if (
    !Object.hasOwn(this._events, eventName) ||
    this._events[eventName].length === 0
  ) {
    return false;
  }

  // Make a clone of the listeners in case one of the listeners
  // mutates this listener array.
  const listeners = this._events[eventName].slice();
  listeners.forEach((listener) => {
    listener.apply(null, args);
  });

  return true;
};
```

## Edge Casess

- The same listener function can be added more than once for the same event. Removal should be done in order of adding.
- emitter.emit() is called without any arguments.
- Methods are called with non-existing eventNames.
- eventNames are built-in object properties like valueOf, toString.

## Notes

- Arrow functions have a lexical scoping to the this context, hence they should not be used as methods on objects as the this will not be referring to the object. Thus the emitter.on() and emitter.off() methods cannot be defined as an arrow function if the return value is the this object.
- Node.js' EventEmitter's implementation allows eventNames to be symbols which we don't allow here.
