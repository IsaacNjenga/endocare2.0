export const VerifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Fix: split by space
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, error: "Unauthorized user!" });
      }
      try {
        const user = await UserModel.findById(payload.id).select("-password");
        if (!user)
          return res
            .status(404)
            .json({ success: false, error: "User not found" });

        req.user = user;
        return res.status(200).json({ success: true, user });
      } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
      }
    });
  } else {
    return res
      .status(403)
      .json({ success: false, error: "Forbidden: No token provided" });
  }
};
