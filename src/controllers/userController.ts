import { Request, Response } from "express";
import { UserModel } from "../models/User";
import { User } from "../types/User";

export const renderRegister = (req: Request, res: Response) => {
  res.render("register", { errors: {} });
};

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body as User;
  let errors: Record<string, string> = {};

  if (!name) errors.name = "El nombre es obligatorio.";
  if (!email) errors.email = "El correo es obligatorio.";
  if (!password || password.length < 6)
    errors.password = "La contraseña debe tener al menos 6 caracteres.";

  if (Object.keys(errors).length > 0) {
    return res.render("register", { errors });
  }

  try {
    UserModel.create({ name, email, password }, (err: Error | null) => {
      if (err) {
        if ((err as any).code === "SQLITE_CONSTRAINT_UNIQUE") {
          errors.email = "Ese correo ya está registrado.";
          return res.render("register", { errors });
        }
        return res.status(500).send("Error en el servidor.");
      }
      res.redirect("/users");
    });
  } catch (err: any) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      errors.email = "Ese correo ya está registrado.";
      return res.render("register", { errors });
    }
    return res.status(500).send("Error en el servidor.");
  }
};

export const listUsers = (req: Request, res: Response) => {
  UserModel.findAll((err: Error | null, users?: User[]) => {
    if (err) {
      return res.status(500).send("Error al obtener los usuarios.");
    }
    res.render("users", { users });
  });
};
