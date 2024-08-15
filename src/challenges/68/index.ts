console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
In the observer pattern (also commonly known as the publish-subscribe model), we can observe/subscribe to events emitted by publishers
 and execute code whenever an event happens.
Implement an EventEmitter class similar to the one in Node.js that follows such an observer pattern.
Example usage of the EventEmitter class:

const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log('The sum is \${a + b}');
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log('The product is \${a * b}'));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);
// > "The product is -27"

https://www.greatfrontend.com/questions/javascript/event-emitter?list=data-structures-algorithms
  `,
  "\x1b[0m"
);
interface IEventEmitter {
  on(eventName: string, listener: Function): IEventEmitter;
  off(eventName: string, listener: Function): IEventEmitter;
  emit(eventName: string, ...args: Array<any>): boolean;
}

export default function createEventEiter() {
  const emitter = new EventEmitter();

  function addTwoNumbers(a: number, b: number) {
    console.log(`The sum is ${a + b}`);
  }
  emitter.on("foo", addTwoNumbers);
  emitter.emit("foo", 2, 5);
  // > "The sum is 7"

  emitter.on("foo", (a: number, b: number) =>
    console.log(`The product is ${a * b}`)
  );
  emitter.emit("foo", 4, 5);
  // > "The sum is 9"
  // > "The product is 20"

  emitter.off("foo", addTwoNumbers);
  emitter.emit("foo", -3, 9);
  // > "The product is -27"
}

class EventEmitter implements IEventEmitter {
  private _events: Record<string, Array<Function>>;

  constructor() {
    this._events = {};
  }

  on(eventName: string, listener: Function): IEventEmitter {
    if (!Object.keys(this._events).includes(eventName)) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(listener);
    return this;
  }

  off(eventName: string, listener: Function): IEventEmitter {
    if (!Object.keys(this._events).includes(eventName)) {
      return this;
    }

    const listeners = this._events[eventName];

    // This if I want to remove all eventlisteners that are the same, but It can be repeated and the user may only want to delete 1 of them
    // this._events[eventName] = listeners.filter((event) => {
    //   return event !== listener;
    // });

    const index = listeners.findIndex((event) => {
      return event === listener;
    });

    if (index < 0) {
      return this;
    }

    this._events[eventName].splice(index, 1);

    return this;
  }

  emit(eventName: string, ...args: Array<any>): boolean {
    if (
      !Object.keys(this._events).includes(eventName) ||
      this._events[eventName].length === 0
    ) {
      return false;
    }

    // Make a clone of the listeners in case one of the listeners
    // mutates this listener array.
    const listeners = this._events[eventName].slice();
    listeners.forEach((listener) => {
      // instead of this i send null as a env of the functions
      listener.apply(null, args);
    });

    return true;
  }
}
