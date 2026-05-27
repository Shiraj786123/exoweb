// middleware/admin.js
module.exports = function(req, res, next) {
  // Check if user role is admin
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin only.' });
  }
  next();
};