const BUCKET_SIZE = 10;
const REFILL_RATE = 1;

class TokenBucket {
  tokens: number;
  capacity: number;

  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.tokens = capacity;
    setInterval(() => {
      this._add(refillRate);
    }, 1000);
  }

  _add(refillRate: number) {
    const refilledTokensCount = this.tokens + refillRate;
    this.tokens = refilledTokensCount > this.capacity ? this.capacity : refilledTokensCount;
  }

  remove() {
    if (this.tokens > 0) {
      this.tokens -= 1
      return 200;
    }

    return 429;
  }
}
