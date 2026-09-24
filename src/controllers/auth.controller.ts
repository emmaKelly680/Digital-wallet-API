import {Request, Response} from 'express';
import {registerUser} from '../services/auth.service.js';
import { loginUser } from '../services/auth.service.js';

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const user = await registerUser(
    name,
    email,
    password
  );

  return res.status(201).json({message: "Registration successful", user});
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const result = await loginUser(email, password);

  return res.status(200).json({
    message: "Login successful",
    token: result.token,
    user: result.user,
  });
}