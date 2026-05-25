import jwt, { decode } from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.json({ success: false, message: "Unauthorized access" });
  }
  const decoded_token = jwt.verify(token, "Secret_Key");
  req.body.userId = decoded_token.id;
  next();
}

export default authMiddleware;
