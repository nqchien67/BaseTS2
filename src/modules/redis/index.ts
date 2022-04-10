import config from "$config";
import log from "$helpers/log";
import Redis from "ioredis";

export default class RedisService {
  private logger = log("Redis");
  public RedisConnection: Redis;

  constructor() {
    this.RedisConnection = new Redis({
      port: config.redis.port,
      host: config.redis.host,
      family: 4,
      password: config.redis.password,
      db: config.redis.db,
    });
  }
}
