import DOMPurify from 'dompurify';

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

/**
 * Validates email format using a robust regex pattern
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};

/**
 * Validates name format (no special characters except spaces, hyphens, apostrophes)
 */
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
  return nameRegex.test(name.trim());
};

/**
 * Validates message content (basic length and character restrictions)
 */
export const validateMessage = (message: string): boolean => {
  const trimmedMessage = message.trim();
  return trimmedMessage.length >= 10 && trimmedMessage.length <= 1000;
};

/**
 * Rate limiting simulation for form submissions
 */
class RateLimiter {
  private submissions: number[] = [];
  private readonly maxSubmissions = 3;
  private readonly timeWindow = 60000; // 1 minute

  canSubmit(): boolean {
    const now = Date.now();
    // Remove submissions older than time window
    this.submissions = this.submissions.filter(time => now - time < this.timeWindow);
    
    if (this.submissions.length >= this.maxSubmissions) {
      return false;
    }
    
    this.submissions.push(now);
    return true;
  }

  getTimeUntilNextSubmission(): number {
    if (this.submissions.length < this.maxSubmissions) return 0;
    
    const oldestSubmission = Math.min(...this.submissions);
    const timeRemaining = this.timeWindow - (Date.now() - oldestSubmission);
    return Math.max(0, timeRemaining);
  }
}

export const rateLimiter = new RateLimiter();