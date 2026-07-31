import { Request, Response } from "express";
import { getUser, searchUsers } from "../users";
import { login } from "../auth";

export function handleGetUser(req: Request, res: Response) {
  const user = getUser(req.params.id);
  if (!user) return res.status(404).json({ error: "Not found" });
  return res.json(user);
}

export function handleSearch(req: Request, res: Response) {
  const term = (req.query.q as string) || "";
  const results = searchUsers(term);
  return res.json(results);
}

export function handleLogin(req: Request, res: Response) {
  const { username, password } = req.body;
  const success = login(username, password);
  return res.json({ success });
}
