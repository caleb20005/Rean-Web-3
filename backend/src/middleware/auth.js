const jwt = require('jsonwebtoken');

// Simple authentication middleware for admin routes
const authenticateAdmin = (req, res, next) => {
  try {
    // For now, we'll use a simple token-based approach
    // In production, you'd want proper JWT verification
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Access token required' });
    }

    // Verify the token (you'd implement proper JWT verification here)
    // For now, we'll do a basic check
    jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      // Check if user has admin role
      if (user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: 'Authentication error' });
  }
};

// Alternative: Session-based authentication (simpler for this setup)
const authenticateAdminSession = (req, res, next) => {
  // This would check for valid session/cookie
  // For now, we'll implement a basic check
  const userRole = req.headers['x-user-role'];

  if (!userRole || userRole.toLowerCase() !== 'admin') {
    return res.status(403).json({
      message: 'Admin access required. Please log in as an administrator.'
    });
  }

  next();
};

module.exports = {
  authenticateAdmin,
  authenticateAdminSession
};