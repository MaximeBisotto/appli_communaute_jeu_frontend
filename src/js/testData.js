import { writable } from 'svelte/store';

let data = writable(0, () => {
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
});

data.set(1); // does nothing

const unsubscribe = data.subscribe(value => {
    console.log(value);
}); // logs 'got a subscriber', then '1'

unsubscribe(); // logs 'no more subscribers'