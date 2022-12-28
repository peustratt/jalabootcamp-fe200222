import { testRoute } from './test.js';
import { addNewDog, getAllDogs, getDogById } from './dogs.js';
import { signup, signin } from './auth.js';
import verifyEmailCode from './email.js';

export const routes = [testRoute, addNewDog, getAllDogs, getDogById, signup, signin, verifyEmailCode];
