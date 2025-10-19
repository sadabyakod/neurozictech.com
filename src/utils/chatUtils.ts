import { ChatMessage } from '@/types/chat';

// Utility functions for chat functionality
export class ChatUtils {
  // Generate unique message ID
  static generateMessageId(): string {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Format timestamp for display
  static formatTimestamp(date: Date): string {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  // Validate message content
  static isValidMessage(message: string): boolean {
    return message.trim().length > 0 && message.length <= 1000;
  }

  // Clean and sanitize message
  static sanitizeMessage(message: string): string {
    return message.trim().replace(/[<>]/g, '');
  }

  // Create user message
  static createUserMessage(text: string): ChatMessage {
    return {
      id: this.generateMessageId(),
      text: this.sanitizeMessage(text),
      sender: 'user',
      timestamp: new Date()
    };
  }

  // Create bot message
  static createBotMessage(text: string): ChatMessage {
    return {
      id: this.generateMessageId(),
      text: text,
      sender: 'bot',
      timestamp: new Date()
    };
  }

  // Local storage helpers
  static saveChatHistory(messages: ChatMessage[]): void {
    try {
      const chatHistory = {
        messages: messages.slice(-50), // Keep only last 50 messages
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('neurozic_chat_history', JSON.stringify(chatHistory));
    } catch (error) {
      console.warn('Failed to save chat history:', error);
    }
  }

  static loadChatHistory(): ChatMessage[] {
    try {
      const stored = localStorage.getItem('neurozic_chat_history');
      if (stored) {
        const { messages } = JSON.parse(stored);
        return messages.map((msg: { id: string; text: string; sender: string; timestamp: string }) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      }
    } catch (error) {
      console.warn('Failed to load chat history:', error);
    }
    return [];
  }

  // Predefined quick responses
  static getQuickResponses(): string[] {
    return [
      "Tell me about your services",
      "How much does it cost?",
      "Contact information",
      "Request a quote",
      "About Neurozic",
      "Technologies you use"
    ];
  }

  // Common business keywords for better responses
  static getBusinessKeywords(): { [key: string]: string[] } {
    return {
      services: ['service', 'offering', 'solution', 'product', 'what do you do'],
      contact: ['contact', 'phone', 'email', 'address', 'reach', 'call'],
      pricing: ['price', 'cost', 'quote', 'budget', 'pricing', 'fee', 'charge'],
      technology: ['tech', 'technology', 'framework', 'programming', 'language'],
      about: ['about', 'company', 'who are you', 'neurozic', 'team'],
      support: ['support', 'help', 'assistance', 'maintenance', 'issue']
    };
  }

  // Check if message contains business keywords
  static categorizeMessage(message: string): string | null {
    const lowerMessage = message.toLowerCase();
    const keywords = this.getBusinessKeywords();
    
    for (const [category, words] of Object.entries(keywords)) {
      if (words.some(word => lowerMessage.includes(word))) {
        return category;
      }
    }
    return null;
  }

  // Rate limiting for API calls
  private static lastApiCall = 0;
  private static readonly MIN_INTERVAL = 1000; // 1 second

  static canMakeApiCall(): boolean {
    const now = Date.now();
    if (now - this.lastApiCall >= this.MIN_INTERVAL) {
      this.lastApiCall = now;
      return true;
    }
    return false;
  }

  // Error handling
  static handleChatError(error: unknown): string {
    console.error('Chat error:', error);
    
    if (error && typeof error === 'object') {
      const err = error as { name?: string; code?: string; status?: number };
      
      if (err.name === 'NetworkError' || err.code === 'NETWORK_ERROR') {
        return 'I\'m having trouble connecting right now. Please check your internet connection and try again.';
      }
      
      if (err.status === 429) {
        return 'I\'m getting a lot of messages right now. Please wait a moment before sending another message.';
      }
    }
    
    return 'I encountered an error. Please try again, and if the problem persists, you can contact our team directly at techinfo@neurozic.com';
  }
}

// Debounce utility for input
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}