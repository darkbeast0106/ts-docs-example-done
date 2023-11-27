/**
 * Ember tulajdonságait leíró interfész
 */
export interface Person {
  /**
   * Ember azonosítója
   */
  id: number;
  /**
   * Ember teljes neve
   */
  name: string;
  /**
   * Ember e-mail címe
   */
  email: string;
  /**
   * Ember munkaköre
   */
  job: string;
}
