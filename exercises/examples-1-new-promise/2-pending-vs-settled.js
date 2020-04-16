// promises can be in one of two states:
//  pending: neither resolve nor reject have been called
//  settled: either resolve or reject has been called
// a settled promise can have two states
//  resolved: resolve was called
//  rejected: reject was called


const executor0 = (resolve, reject) => {
  console.log('always pending, never settled');
};
const pendingPromise = new Promise(executor0);

const executor1 = (resolve, reject) => {
  resolve('settled: resolved');
};
const resolvedPromise = new Promise(executor1);

const executor2 = (resolve, reject) => {
  try {
    reject('settled: rejected');
  } catch (err) {
    console.error(err);
  };
};
const rejectedPromise = new Promise(executor2);

const executor3 = (resolve, reject) => {
  const rando = Math.random();
  if (rando > 0.5) {
    resolve(rando + ': greater than 0.5');
  } else {
    try {
      reject(rando + ': less than 0.5');
    } catch (err) {
      console.error(err);
    };
  };
};
const uncertainPromise = new Promise(executor3);
