
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model album
 * 
 */
export type album = $Result.DefaultSelection<Prisma.$albumPayload>
/**
 * Model artist
 * 
 */
export type artist = $Result.DefaultSelection<Prisma.$artistPayload>
/**
 * Model entity
 * 
 */
export type entity = $Result.DefaultSelection<Prisma.$entityPayload>
/**
 * Model jam
 * 
 */
export type jam = $Result.DefaultSelection<Prisma.$jamPayload>
/**
 * Model jam_play_queue
 * 
 */
export type jam_play_queue = $Result.DefaultSelection<Prisma.$jam_play_queuePayload>
/**
 * Model jam_user
 * 
 */
export type jam_user = $Result.DefaultSelection<Prisma.$jam_userPayload>
/**
 * Model like_entity
 * 
 */
export type like_entity = $Result.DefaultSelection<Prisma.$like_entityPayload>
/**
 * Model play_queue
 * 
 */
export type play_queue = $Result.DefaultSelection<Prisma.$play_queuePayload>
/**
 * Model playlist
 * 
 */
export type playlist = $Result.DefaultSelection<Prisma.$playlistPayload>
/**
 * Model playlist_song
 * 
 */
export type playlist_song = $Result.DefaultSelection<Prisma.$playlist_songPayload>
/**
 * Model song
 * 
 */
export type song = $Result.DefaultSelection<Prisma.$songPayload>
/**
 * Model song_album
 * 
 */
export type song_album = $Result.DefaultSelection<Prisma.$song_albumPayload>
/**
 * Model state
 * 
 */
export type state = $Result.DefaultSelection<Prisma.$statePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Albums
 * const albums = await prisma.album.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Albums
   * const albums = await prisma.album.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.album`: Exposes CRUD operations for the **album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.albumDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.artistDelegate<ExtArgs>;

  /**
   * `prisma.entity`: Exposes CRUD operations for the **entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.entityDelegate<ExtArgs>;

  /**
   * `prisma.jam`: Exposes CRUD operations for the **jam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jams
    * const jams = await prisma.jam.findMany()
    * ```
    */
  get jam(): Prisma.jamDelegate<ExtArgs>;

  /**
   * `prisma.jam_play_queue`: Exposes CRUD operations for the **jam_play_queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jam_play_queues
    * const jam_play_queues = await prisma.jam_play_queue.findMany()
    * ```
    */
  get jam_play_queue(): Prisma.jam_play_queueDelegate<ExtArgs>;

  /**
   * `prisma.jam_user`: Exposes CRUD operations for the **jam_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jam_users
    * const jam_users = await prisma.jam_user.findMany()
    * ```
    */
  get jam_user(): Prisma.jam_userDelegate<ExtArgs>;

  /**
   * `prisma.like_entity`: Exposes CRUD operations for the **like_entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Like_entities
    * const like_entities = await prisma.like_entity.findMany()
    * ```
    */
  get like_entity(): Prisma.like_entityDelegate<ExtArgs>;

  /**
   * `prisma.play_queue`: Exposes CRUD operations for the **play_queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Play_queues
    * const play_queues = await prisma.play_queue.findMany()
    * ```
    */
  get play_queue(): Prisma.play_queueDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.playlistDelegate<ExtArgs>;

  /**
   * `prisma.playlist_song`: Exposes CRUD operations for the **playlist_song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlist_songs
    * const playlist_songs = await prisma.playlist_song.findMany()
    * ```
    */
  get playlist_song(): Prisma.playlist_songDelegate<ExtArgs>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.songDelegate<ExtArgs>;

  /**
   * `prisma.song_album`: Exposes CRUD operations for the **song_album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Song_albums
    * const song_albums = await prisma.song_album.findMany()
    * ```
    */
  get song_album(): Prisma.song_albumDelegate<ExtArgs>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **state** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.stateDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    album: 'album',
    artist: 'artist',
    entity: 'entity',
    jam: 'jam',
    jam_play_queue: 'jam_play_queue',
    jam_user: 'jam_user',
    like_entity: 'like_entity',
    play_queue: 'play_queue',
    playlist: 'playlist',
    playlist_song: 'playlist_song',
    song: 'song',
    song_album: 'song_album',
    state: 'state',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'album' | 'artist' | 'entity' | 'jam' | 'jam_play_queue' | 'jam_user' | 'like_entity' | 'play_queue' | 'playlist' | 'playlist_song' | 'song' | 'song_album' | 'state' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      album: {
        payload: Prisma.$albumPayload<ExtArgs>
        fields: Prisma.albumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.albumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.albumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          findFirst: {
            args: Prisma.albumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.albumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          findMany: {
            args: Prisma.albumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>[]
          }
          create: {
            args: Prisma.albumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          createMany: {
            args: Prisma.albumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.albumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          update: {
            args: Prisma.albumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          deleteMany: {
            args: Prisma.albumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.albumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.albumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.albumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.albumCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      artist: {
        payload: Prisma.$artistPayload<ExtArgs>
        fields: Prisma.artistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>
          }
          findFirst: {
            args: Prisma.artistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>
          }
          findMany: {
            args: Prisma.artistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>[]
          }
          create: {
            args: Prisma.artistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>
          }
          createMany: {
            args: Prisma.artistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.artistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>
          }
          update: {
            args: Prisma.artistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>
          }
          deleteMany: {
            args: Prisma.artistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.artistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.artistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.artistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.artistCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      entity: {
        payload: Prisma.$entityPayload<ExtArgs>
        fields: Prisma.entityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>
          }
          findFirst: {
            args: Prisma.entityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>
          }
          findMany: {
            args: Prisma.entityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>[]
          }
          create: {
            args: Prisma.entityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>
          }
          createMany: {
            args: Prisma.entityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.entityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>
          }
          update: {
            args: Prisma.entityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>
          }
          deleteMany: {
            args: Prisma.entityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.entityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.entityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$entityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.entityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.entityCountArgs<ExtArgs>,
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      jam: {
        payload: Prisma.$jamPayload<ExtArgs>
        fields: Prisma.jamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>
          }
          findFirst: {
            args: Prisma.jamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>
          }
          findMany: {
            args: Prisma.jamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>[]
          }
          create: {
            args: Prisma.jamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>
          }
          createMany: {
            args: Prisma.jamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>
          }
          update: {
            args: Prisma.jamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>
          }
          deleteMany: {
            args: Prisma.jamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jamPayload>
          }
          aggregate: {
            args: Prisma.JamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJam>
          }
          groupBy: {
            args: Prisma.jamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JamGroupByOutputType>[]
          }
          count: {
            args: Prisma.jamCountArgs<ExtArgs>,
            result: $Utils.Optional<JamCountAggregateOutputType> | number
          }
        }
      }
      jam_play_queue: {
        payload: Prisma.$jam_play_queuePayload<ExtArgs>
        fields: Prisma.jam_play_queueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jam_play_queueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jam_play_queueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>
          }
          findFirst: {
            args: Prisma.jam_play_queueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jam_play_queueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>
          }
          findMany: {
            args: Prisma.jam_play_queueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>[]
          }
          create: {
            args: Prisma.jam_play_queueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>
          }
          createMany: {
            args: Prisma.jam_play_queueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jam_play_queueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>
          }
          update: {
            args: Prisma.jam_play_queueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>
          }
          deleteMany: {
            args: Prisma.jam_play_queueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jam_play_queueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jam_play_queueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_play_queuePayload>
          }
          aggregate: {
            args: Prisma.Jam_play_queueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJam_play_queue>
          }
          groupBy: {
            args: Prisma.jam_play_queueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Jam_play_queueGroupByOutputType>[]
          }
          count: {
            args: Prisma.jam_play_queueCountArgs<ExtArgs>,
            result: $Utils.Optional<Jam_play_queueCountAggregateOutputType> | number
          }
        }
      }
      jam_user: {
        payload: Prisma.$jam_userPayload<ExtArgs>
        fields: Prisma.jam_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jam_userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jam_userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>
          }
          findFirst: {
            args: Prisma.jam_userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jam_userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>
          }
          findMany: {
            args: Prisma.jam_userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>[]
          }
          create: {
            args: Prisma.jam_userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>
          }
          createMany: {
            args: Prisma.jam_userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jam_userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>
          }
          update: {
            args: Prisma.jam_userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>
          }
          deleteMany: {
            args: Prisma.jam_userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jam_userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jam_userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jam_userPayload>
          }
          aggregate: {
            args: Prisma.Jam_userAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJam_user>
          }
          groupBy: {
            args: Prisma.jam_userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Jam_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.jam_userCountArgs<ExtArgs>,
            result: $Utils.Optional<Jam_userCountAggregateOutputType> | number
          }
        }
      }
      like_entity: {
        payload: Prisma.$like_entityPayload<ExtArgs>
        fields: Prisma.like_entityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.like_entityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.like_entityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>
          }
          findFirst: {
            args: Prisma.like_entityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.like_entityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>
          }
          findMany: {
            args: Prisma.like_entityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>[]
          }
          create: {
            args: Prisma.like_entityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>
          }
          createMany: {
            args: Prisma.like_entityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.like_entityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>
          }
          update: {
            args: Prisma.like_entityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>
          }
          deleteMany: {
            args: Prisma.like_entityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.like_entityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.like_entityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$like_entityPayload>
          }
          aggregate: {
            args: Prisma.Like_entityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLike_entity>
          }
          groupBy: {
            args: Prisma.like_entityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Like_entityGroupByOutputType>[]
          }
          count: {
            args: Prisma.like_entityCountArgs<ExtArgs>,
            result: $Utils.Optional<Like_entityCountAggregateOutputType> | number
          }
        }
      }
      play_queue: {
        payload: Prisma.$play_queuePayload<ExtArgs>
        fields: Prisma.play_queueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.play_queueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.play_queueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>
          }
          findFirst: {
            args: Prisma.play_queueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.play_queueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>
          }
          findMany: {
            args: Prisma.play_queueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>[]
          }
          create: {
            args: Prisma.play_queueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>
          }
          createMany: {
            args: Prisma.play_queueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.play_queueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>
          }
          update: {
            args: Prisma.play_queueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>
          }
          deleteMany: {
            args: Prisma.play_queueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.play_queueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.play_queueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$play_queuePayload>
          }
          aggregate: {
            args: Prisma.Play_queueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlay_queue>
          }
          groupBy: {
            args: Prisma.play_queueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Play_queueGroupByOutputType>[]
          }
          count: {
            args: Prisma.play_queueCountArgs<ExtArgs>,
            result: $Utils.Optional<Play_queueCountAggregateOutputType> | number
          }
        }
      }
      playlist: {
        payload: Prisma.$playlistPayload<ExtArgs>
        fields: Prisma.playlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          findFirst: {
            args: Prisma.playlistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          findMany: {
            args: Prisma.playlistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>[]
          }
          create: {
            args: Prisma.playlistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          createMany: {
            args: Prisma.playlistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.playlistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          update: {
            args: Prisma.playlistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          deleteMany: {
            args: Prisma.playlistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.playlistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.playlistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.playlistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlistCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      playlist_song: {
        payload: Prisma.$playlist_songPayload<ExtArgs>
        fields: Prisma.playlist_songFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlist_songFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlist_songFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>
          }
          findFirst: {
            args: Prisma.playlist_songFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlist_songFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>
          }
          findMany: {
            args: Prisma.playlist_songFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>[]
          }
          create: {
            args: Prisma.playlist_songCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>
          }
          createMany: {
            args: Prisma.playlist_songCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.playlist_songDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>
          }
          update: {
            args: Prisma.playlist_songUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>
          }
          deleteMany: {
            args: Prisma.playlist_songDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.playlist_songUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.playlist_songUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playlist_songPayload>
          }
          aggregate: {
            args: Prisma.Playlist_songAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylist_song>
          }
          groupBy: {
            args: Prisma.playlist_songGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Playlist_songGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlist_songCountArgs<ExtArgs>,
            result: $Utils.Optional<Playlist_songCountAggregateOutputType> | number
          }
        }
      }
      song: {
        payload: Prisma.$songPayload<ExtArgs>
        fields: Prisma.songFieldRefs
        operations: {
          findUnique: {
            args: Prisma.songFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.songFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          findFirst: {
            args: Prisma.songFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.songFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          findMany: {
            args: Prisma.songFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>[]
          }
          create: {
            args: Prisma.songCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          createMany: {
            args: Prisma.songCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.songDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          update: {
            args: Prisma.songUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          deleteMany: {
            args: Prisma.songDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.songUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.songUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$songPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.songGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.songCountArgs<ExtArgs>,
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      song_album: {
        payload: Prisma.$song_albumPayload<ExtArgs>
        fields: Prisma.song_albumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.song_albumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.song_albumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>
          }
          findFirst: {
            args: Prisma.song_albumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.song_albumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>
          }
          findMany: {
            args: Prisma.song_albumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>[]
          }
          create: {
            args: Prisma.song_albumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>
          }
          createMany: {
            args: Prisma.song_albumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.song_albumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>
          }
          update: {
            args: Prisma.song_albumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>
          }
          deleteMany: {
            args: Prisma.song_albumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.song_albumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.song_albumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$song_albumPayload>
          }
          aggregate: {
            args: Prisma.Song_albumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong_album>
          }
          groupBy: {
            args: Prisma.song_albumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Song_albumGroupByOutputType>[]
          }
          count: {
            args: Prisma.song_albumCountArgs<ExtArgs>,
            result: $Utils.Optional<Song_albumCountAggregateOutputType> | number
          }
        }
      }
      state: {
        payload: Prisma.$statePayload<ExtArgs>
        fields: Prisma.stateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          findFirst: {
            args: Prisma.stateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          findMany: {
            args: Prisma.stateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>[]
          }
          create: {
            args: Prisma.stateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          createMany: {
            args: Prisma.stateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.stateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          update: {
            args: Prisma.stateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          deleteMany: {
            args: Prisma.stateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.stateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.stateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.stateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.stateCountArgs<ExtArgs>,
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    song_album: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song_album?: boolean | AlbumCountOutputTypeCountSong_albumArgs
  }

  // Custom InputTypes

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSong_albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: song_albumWhereInput
  }



  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    album: number
    song: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | ArtistCountOutputTypeCountAlbumArgs
    song?: boolean | ArtistCountOutputTypeCountSongArgs
  }

  // Custom InputTypes

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: albumWhereInput
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: songWhereInput
  }



  /**
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    like_entity: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_entity?: boolean | EntityCountOutputTypeCountLike_entityArgs
  }

  // Custom InputTypes

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountLike_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_entityWhereInput
  }



  /**
   * Count Type JamCountOutputType
   */

  export type JamCountOutputType = {
    jam_play_queue: number
    jam_user: number
  }

  export type JamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jam_play_queue?: boolean | JamCountOutputTypeCountJam_play_queueArgs
    jam_user?: boolean | JamCountOutputTypeCountJam_userArgs
  }

  // Custom InputTypes

  /**
   * JamCountOutputType without action
   */
  export type JamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JamCountOutputType
     */
    select?: JamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JamCountOutputType without action
   */
  export type JamCountOutputTypeCountJam_play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jam_play_queueWhereInput
  }


  /**
   * JamCountOutputType without action
   */
  export type JamCountOutputTypeCountJam_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jam_userWhereInput
  }



  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    playlist_song: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist_song?: boolean | PlaylistCountOutputTypeCountPlaylist_songArgs
  }

  // Custom InputTypes

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylist_songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_songWhereInput
  }



  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    jam: number
    jam_play_queue: number
    play_queue: number
    playlist_song: number
    song_album: number
    state: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jam?: boolean | SongCountOutputTypeCountJamArgs
    jam_play_queue?: boolean | SongCountOutputTypeCountJam_play_queueArgs
    play_queue?: boolean | SongCountOutputTypeCountPlay_queueArgs
    playlist_song?: boolean | SongCountOutputTypeCountPlaylist_songArgs
    song_album?: boolean | SongCountOutputTypeCountSong_albumArgs
    state?: boolean | SongCountOutputTypeCountStateArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountJamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jamWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountJam_play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jam_play_queueWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlay_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: play_queueWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylist_songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_songWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountSong_albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: song_albumWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stateWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    like_entity: number
    play_queue: number
    playlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_entity?: boolean | UserCountOutputTypeCountLike_entityArgs
    play_queue?: boolean | UserCountOutputTypeCountPlay_queueArgs
    playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLike_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_entityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlay_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: play_queueWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
  }



  /**
   * Models
   */

  /**
   * Model album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    artist_id: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    artist_id: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    name: string | null
    cover: string | null
    artist_id: number | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cover: string | null
    artist_id: number | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    name: number
    cover: number
    artist_id: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    artist_id?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    artist_id?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    artist_id?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    artist_id?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    artist_id?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which album to aggregate.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type albumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: albumWhereInput
    orderBy?: albumOrderByWithAggregationInput | albumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: albumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    name: string
    cover: string | null
    artist_id: number | null
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends albumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type albumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    artist_id?: boolean
    artist?: boolean | album$artistArgs<ExtArgs>
    song_album?: boolean | album$song_albumArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type albumSelectScalar = {
    id?: boolean
    name?: boolean
    cover?: boolean
    artist_id?: boolean
  }

  export type albumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | album$artistArgs<ExtArgs>
    song_album?: boolean | album$song_albumArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $albumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "album"
    objects: {
      artist: Prisma.$artistPayload<ExtArgs> | null
      song_album: Prisma.$song_albumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cover: string | null
      artist_id: number | null
    }, ExtArgs["result"]["album"]>
    composites: {}
  }


  type albumGetPayload<S extends boolean | null | undefined | albumDefaultArgs> = $Result.GetResult<Prisma.$albumPayload, S>

  type albumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<albumFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface albumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['album'], meta: { name: 'album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {albumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends albumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, albumFindUniqueArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Album that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {albumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends albumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, albumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends albumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, albumFindFirstArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends albumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, albumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends albumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, albumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Album.
     * @param {albumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends albumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, albumCreateArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {albumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends albumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, albumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {albumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends albumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, albumDeleteArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Album.
     * @param {albumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends albumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, albumUpdateArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {albumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends albumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, albumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends albumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, albumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {albumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends albumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, albumUpsertArgs<ExtArgs>>
    ): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends albumCountArgs>(
      args?: Subset<T, albumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends albumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: albumGroupByArgs['orderBy'] }
        : { orderBy?: albumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, albumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the album model
   */
  readonly fields: albumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__albumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artist<T extends album$artistArgs<ExtArgs> = {}>(args?: Subset<T, album$artistArgs<ExtArgs>>): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    song_album<T extends album$song_albumArgs<ExtArgs> = {}>(args?: Subset<T, album$song_albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the album model
   */ 
  interface albumFieldRefs {
    readonly id: FieldRef<"album", 'Int'>
    readonly name: FieldRef<"album", 'String'>
    readonly cover: FieldRef<"album", 'String'>
    readonly artist_id: FieldRef<"album", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * album findUnique
   */
  export type albumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where: albumWhereUniqueInput
  }


  /**
   * album findUniqueOrThrow
   */
  export type albumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where: albumWhereUniqueInput
  }


  /**
   * album findFirst
   */
  export type albumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for albums.
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * album findFirstOrThrow
   */
  export type albumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for albums.
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * album findMany
   */
  export type albumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing albums.
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * album create
   */
  export type albumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * The data needed to create a album.
     */
    data: XOR<albumCreateInput, albumUncheckedCreateInput>
  }


  /**
   * album createMany
   */
  export type albumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many albums.
     */
    data: albumCreateManyInput | albumCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * album update
   */
  export type albumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * The data needed to update a album.
     */
    data: XOR<albumUpdateInput, albumUncheckedUpdateInput>
    /**
     * Choose, which album to update.
     */
    where: albumWhereUniqueInput
  }


  /**
   * album updateMany
   */
  export type albumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update albums.
     */
    data: XOR<albumUpdateManyMutationInput, albumUncheckedUpdateManyInput>
    /**
     * Filter which albums to update
     */
    where?: albumWhereInput
  }


  /**
   * album upsert
   */
  export type albumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * The filter to search for the album to update in case it exists.
     */
    where: albumWhereUniqueInput
    /**
     * In case the album found by the `where` argument doesn't exist, create a new album with this data.
     */
    create: XOR<albumCreateInput, albumUncheckedCreateInput>
    /**
     * In case the album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<albumUpdateInput, albumUncheckedUpdateInput>
  }


  /**
   * album delete
   */
  export type albumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter which album to delete.
     */
    where: albumWhereUniqueInput
  }


  /**
   * album deleteMany
   */
  export type albumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which albums to delete
     */
    where?: albumWhereInput
  }


  /**
   * album.artist
   */
  export type album$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    where?: artistWhereInput
  }


  /**
   * album.song_album
   */
  export type album$song_albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    where?: song_albumWhereInput
    orderBy?: song_albumOrderByWithRelationInput | song_albumOrderByWithRelationInput[]
    cursor?: song_albumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Song_albumScalarFieldEnum | Song_albumScalarFieldEnum[]
  }


  /**
   * album without action
   */
  export type albumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
  }



  /**
   * Model artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
    avatar: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    avatar: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artist to aggregate.
     */
    where?: artistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistOrderByWithRelationInput | artistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type artistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artistWhereInput
    orderBy?: artistOrderByWithAggregationInput | artistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: artistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    name: string
    avatar: string | null
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends artistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type artistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    album?: boolean | artist$albumArgs<ExtArgs>
    song?: boolean | artist$songArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type artistSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
  }

  export type artistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | artist$albumArgs<ExtArgs>
    song?: boolean | artist$songArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $artistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artist"
    objects: {
      album: Prisma.$albumPayload<ExtArgs>[]
      song: Prisma.$songPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      avatar: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }


  type artistGetPayload<S extends boolean | null | undefined | artistDefaultArgs> = $Result.GetResult<Prisma.$artistPayload, S>

  type artistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<artistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface artistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artist'], meta: { name: 'artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {artistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends artistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, artistFindUniqueArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {artistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends artistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, artistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends artistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, artistFindFirstArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends artistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, artistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends artistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, artistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artist.
     * @param {artistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends artistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, artistCreateArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {artistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends artistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, artistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {artistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends artistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, artistDeleteArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {artistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends artistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, artistUpdateArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {artistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends artistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, artistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends artistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, artistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {artistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends artistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, artistUpsertArgs<ExtArgs>>
    ): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends artistCountArgs>(
      args?: Subset<T, artistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends artistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artistGroupByArgs['orderBy'] }
        : { orderBy?: artistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, artistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artist model
   */
  readonly fields: artistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    album<T extends artist$albumArgs<ExtArgs> = {}>(args?: Subset<T, artist$albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findMany'> | Null>;

    song<T extends artist$songArgs<ExtArgs> = {}>(args?: Subset<T, artist$songArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the artist model
   */ 
  interface artistFieldRefs {
    readonly id: FieldRef<"artist", 'Int'>
    readonly name: FieldRef<"artist", 'String'>
    readonly avatar: FieldRef<"artist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * artist findUnique
   */
  export type artistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * Filter, which artist to fetch.
     */
    where: artistWhereUniqueInput
  }


  /**
   * artist findUniqueOrThrow
   */
  export type artistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * Filter, which artist to fetch.
     */
    where: artistWhereUniqueInput
  }


  /**
   * artist findFirst
   */
  export type artistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * Filter, which artist to fetch.
     */
    where?: artistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistOrderByWithRelationInput | artistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artists.
     */
    cursor?: artistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * artist findFirstOrThrow
   */
  export type artistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * Filter, which artist to fetch.
     */
    where?: artistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistOrderByWithRelationInput | artistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artists.
     */
    cursor?: artistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * artist findMany
   */
  export type artistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * Filter, which artists to fetch.
     */
    where?: artistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistOrderByWithRelationInput | artistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artists.
     */
    cursor?: artistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * artist create
   */
  export type artistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * The data needed to create a artist.
     */
    data: XOR<artistCreateInput, artistUncheckedCreateInput>
  }


  /**
   * artist createMany
   */
  export type artistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artists.
     */
    data: artistCreateManyInput | artistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * artist update
   */
  export type artistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * The data needed to update a artist.
     */
    data: XOR<artistUpdateInput, artistUncheckedUpdateInput>
    /**
     * Choose, which artist to update.
     */
    where: artistWhereUniqueInput
  }


  /**
   * artist updateMany
   */
  export type artistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artists.
     */
    data: XOR<artistUpdateManyMutationInput, artistUncheckedUpdateManyInput>
    /**
     * Filter which artists to update
     */
    where?: artistWhereInput
  }


  /**
   * artist upsert
   */
  export type artistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * The filter to search for the artist to update in case it exists.
     */
    where: artistWhereUniqueInput
    /**
     * In case the artist found by the `where` argument doesn't exist, create a new artist with this data.
     */
    create: XOR<artistCreateInput, artistUncheckedCreateInput>
    /**
     * In case the artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artistUpdateInput, artistUncheckedUpdateInput>
  }


  /**
   * artist delete
   */
  export type artistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
    /**
     * Filter which artist to delete.
     */
    where: artistWhereUniqueInput
  }


  /**
   * artist deleteMany
   */
  export type artistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artists to delete
     */
    where?: artistWhereInput
  }


  /**
   * artist.album
   */
  export type artist$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: albumInclude<ExtArgs> | null
    where?: albumWhereInput
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    cursor?: albumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * artist.song
   */
  export type artist$songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    where?: songWhereInput
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    cursor?: songWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * artist without action
   */
  export type artistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artist
     */
    select?: artistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: artistInclude<ExtArgs> | null
  }



  /**
   * Model entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityAvgAggregateOutputType = {
    id: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: number | null
  }

  export type EntityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EntityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entity to aggregate.
     */
    where?: entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entityOrderByWithRelationInput | entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type entityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entityWhereInput
    orderBy?: entityOrderByWithAggregationInput | entityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: entityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _avg?: EntityAvgAggregateInputType
    _sum?: EntitySumAggregateInputType
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: number
    name: string
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends entityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type entitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    like_entity?: boolean | entity$like_entityArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type entitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type entityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_entity?: boolean | entity$like_entityArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $entityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entity"
    objects: {
      like_entity: Prisma.$like_entityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }


  type entityGetPayload<S extends boolean | null | undefined | entityDefaultArgs> = $Result.GetResult<Prisma.$entityPayload, S>

  type entityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<entityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface entityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entity'], meta: { name: 'entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {entityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends entityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, entityFindUniqueArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Entity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {entityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends entityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, entityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends entityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, entityFindFirstArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends entityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, entityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends entityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, entityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Entity.
     * @param {entityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
    **/
    create<T extends entityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, entityCreateArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Entities.
     *     @param {entityCreateManyArgs} args - Arguments to create many Entities.
     *     @example
     *     // Create many Entities
     *     const entity = await prisma.entity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends entityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, entityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entity.
     * @param {entityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
    **/
    delete<T extends entityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, entityDeleteArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Entity.
     * @param {entityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends entityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, entityUpdateArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Entities.
     * @param {entityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends entityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, entityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends entityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, entityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entity.
     * @param {entityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
    **/
    upsert<T extends entityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, entityUpsertArgs<ExtArgs>>
    ): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends entityCountArgs>(
      args?: Subset<T, entityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entityGroupByArgs['orderBy'] }
        : { orderBy?: entityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entity model
   */
  readonly fields: entityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    like_entity<T extends entity$like_entityArgs<ExtArgs> = {}>(args?: Subset<T, entity$like_entityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the entity model
   */ 
  interface entityFieldRefs {
    readonly id: FieldRef<"entity", 'Int'>
    readonly name: FieldRef<"entity", 'String'>
  }
    

  // Custom InputTypes

  /**
   * entity findUnique
   */
  export type entityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * Filter, which entity to fetch.
     */
    where: entityWhereUniqueInput
  }


  /**
   * entity findUniqueOrThrow
   */
  export type entityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * Filter, which entity to fetch.
     */
    where: entityWhereUniqueInput
  }


  /**
   * entity findFirst
   */
  export type entityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * Filter, which entity to fetch.
     */
    where?: entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entityOrderByWithRelationInput | entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entities.
     */
    cursor?: entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }


  /**
   * entity findFirstOrThrow
   */
  export type entityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * Filter, which entity to fetch.
     */
    where?: entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entityOrderByWithRelationInput | entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entities.
     */
    cursor?: entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }


  /**
   * entity findMany
   */
  export type entityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entityOrderByWithRelationInput | entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entities.
     */
    cursor?: entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }


  /**
   * entity create
   */
  export type entityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * The data needed to create a entity.
     */
    data: XOR<entityCreateInput, entityUncheckedCreateInput>
  }


  /**
   * entity createMany
   */
  export type entityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entities.
     */
    data: entityCreateManyInput | entityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * entity update
   */
  export type entityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * The data needed to update a entity.
     */
    data: XOR<entityUpdateInput, entityUncheckedUpdateInput>
    /**
     * Choose, which entity to update.
     */
    where: entityWhereUniqueInput
  }


  /**
   * entity updateMany
   */
  export type entityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entities.
     */
    data: XOR<entityUpdateManyMutationInput, entityUncheckedUpdateManyInput>
    /**
     * Filter which entities to update
     */
    where?: entityWhereInput
  }


  /**
   * entity upsert
   */
  export type entityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * The filter to search for the entity to update in case it exists.
     */
    where: entityWhereUniqueInput
    /**
     * In case the entity found by the `where` argument doesn't exist, create a new entity with this data.
     */
    create: XOR<entityCreateInput, entityUncheckedCreateInput>
    /**
     * In case the entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entityUpdateInput, entityUncheckedUpdateInput>
  }


  /**
   * entity delete
   */
  export type entityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
    /**
     * Filter which entity to delete.
     */
    where: entityWhereUniqueInput
  }


  /**
   * entity deleteMany
   */
  export type entityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entities to delete
     */
    where?: entityWhereInput
  }


  /**
   * entity.like_entity
   */
  export type entity$like_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    where?: like_entityWhereInput
    orderBy?: like_entityOrderByWithRelationInput | like_entityOrderByWithRelationInput[]
    cursor?: like_entityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_entityScalarFieldEnum | Like_entityScalarFieldEnum[]
  }


  /**
   * entity without action
   */
  export type entityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entity
     */
    select?: entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: entityInclude<ExtArgs> | null
  }



  /**
   * Model jam
   */

  export type AggregateJam = {
    _count: JamCountAggregateOutputType | null
    _avg: JamAvgAggregateOutputType | null
    _sum: JamSumAggregateOutputType | null
    _min: JamMinAggregateOutputType | null
    _max: JamMaxAggregateOutputType | null
  }

  export type JamAvgAggregateOutputType = {
    song_id: number | null
    timestampt: number | null
  }

  export type JamSumAggregateOutputType = {
    song_id: number | null
    timestampt: number | null
  }

  export type JamMinAggregateOutputType = {
    id: string | null
    song_id: number | null
    play: boolean | null
    timestampt: number | null
  }

  export type JamMaxAggregateOutputType = {
    id: string | null
    song_id: number | null
    play: boolean | null
    timestampt: number | null
  }

  export type JamCountAggregateOutputType = {
    id: number
    song_id: number
    play: number
    timestampt: number
    _all: number
  }


  export type JamAvgAggregateInputType = {
    song_id?: true
    timestampt?: true
  }

  export type JamSumAggregateInputType = {
    song_id?: true
    timestampt?: true
  }

  export type JamMinAggregateInputType = {
    id?: true
    song_id?: true
    play?: true
    timestampt?: true
  }

  export type JamMaxAggregateInputType = {
    id?: true
    song_id?: true
    play?: true
    timestampt?: true
  }

  export type JamCountAggregateInputType = {
    id?: true
    song_id?: true
    play?: true
    timestampt?: true
    _all?: true
  }

  export type JamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jam to aggregate.
     */
    where?: jamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jams to fetch.
     */
    orderBy?: jamOrderByWithRelationInput | jamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jams
    **/
    _count?: true | JamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JamMaxAggregateInputType
  }

  export type GetJamAggregateType<T extends JamAggregateArgs> = {
        [P in keyof T & keyof AggregateJam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJam[P]>
      : GetScalarType<T[P], AggregateJam[P]>
  }




  export type jamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jamWhereInput
    orderBy?: jamOrderByWithAggregationInput | jamOrderByWithAggregationInput[]
    by: JamScalarFieldEnum[] | JamScalarFieldEnum
    having?: jamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JamCountAggregateInputType | true
    _avg?: JamAvgAggregateInputType
    _sum?: JamSumAggregateInputType
    _min?: JamMinAggregateInputType
    _max?: JamMaxAggregateInputType
  }

  export type JamGroupByOutputType = {
    id: string
    song_id: number | null
    play: boolean | null
    timestampt: number | null
    _count: JamCountAggregateOutputType | null
    _avg: JamAvgAggregateOutputType | null
    _sum: JamSumAggregateOutputType | null
    _min: JamMinAggregateOutputType | null
    _max: JamMaxAggregateOutputType | null
  }

  type GetJamGroupByPayload<T extends jamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JamGroupByOutputType[P]>
            : GetScalarType<T[P], JamGroupByOutputType[P]>
        }
      >
    >


  export type jamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    song_id?: boolean
    play?: boolean
    timestampt?: boolean
    song?: boolean | jam$songArgs<ExtArgs>
    jam_play_queue?: boolean | jam$jam_play_queueArgs<ExtArgs>
    jam_user?: boolean | jam$jam_userArgs<ExtArgs>
    _count?: boolean | JamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jam"]>

  export type jamSelectScalar = {
    id?: boolean
    song_id?: boolean
    play?: boolean
    timestampt?: boolean
  }

  export type jamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | jam$songArgs<ExtArgs>
    jam_play_queue?: boolean | jam$jam_play_queueArgs<ExtArgs>
    jam_user?: boolean | jam$jam_userArgs<ExtArgs>
    _count?: boolean | JamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $jamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jam"
    objects: {
      song: Prisma.$songPayload<ExtArgs> | null
      jam_play_queue: Prisma.$jam_play_queuePayload<ExtArgs>[]
      jam_user: Prisma.$jam_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      song_id: number | null
      play: boolean | null
      timestampt: number | null
    }, ExtArgs["result"]["jam"]>
    composites: {}
  }


  type jamGetPayload<S extends boolean | null | undefined | jamDefaultArgs> = $Result.GetResult<Prisma.$jamPayload, S>

  type jamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JamCountAggregateInputType | true
    }

  export interface jamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jam'], meta: { name: 'jam' } }
    /**
     * Find zero or one Jam that matches the filter.
     * @param {jamFindUniqueArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jamFindUniqueArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jamFindUniqueOrThrowArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jamFindFirstArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jamFindFirstArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jamFindFirstOrThrowArgs} args - Arguments to find a Jam
     * @example
     * // Get one Jam
     * const jam = await prisma.jam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jams
     * const jams = await prisma.jam.findMany()
     * 
     * // Get first 10 Jams
     * const jams = await prisma.jam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jamWithIdOnly = await prisma.jam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends jamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jam.
     * @param {jamCreateArgs} args - Arguments to create a Jam.
     * @example
     * // Create one Jam
     * const Jam = await prisma.jam.create({
     *   data: {
     *     // ... data to create a Jam
     *   }
     * })
     * 
    **/
    create<T extends jamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jamCreateArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jams.
     *     @param {jamCreateManyArgs} args - Arguments to create many Jams.
     *     @example
     *     // Create many Jams
     *     const jam = await prisma.jam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jam.
     * @param {jamDeleteArgs} args - Arguments to delete one Jam.
     * @example
     * // Delete one Jam
     * const Jam = await prisma.jam.delete({
     *   where: {
     *     // ... filter to delete one Jam
     *   }
     * })
     * 
    **/
    delete<T extends jamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jamDeleteArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jam.
     * @param {jamUpdateArgs} args - Arguments to update one Jam.
     * @example
     * // Update one Jam
     * const jam = await prisma.jam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jamUpdateArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jams.
     * @param {jamDeleteManyArgs} args - Arguments to filter Jams to delete.
     * @example
     * // Delete a few Jams
     * const { count } = await prisma.jam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jams
     * const jam = await prisma.jam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jam.
     * @param {jamUpsertArgs} args - Arguments to update or create a Jam.
     * @example
     * // Update or create a Jam
     * const jam = await prisma.jam.upsert({
     *   create: {
     *     // ... data to create a Jam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jam we want to update
     *   }
     * })
    **/
    upsert<T extends jamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jamUpsertArgs<ExtArgs>>
    ): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jamCountArgs} args - Arguments to filter Jams to count.
     * @example
     * // Count the number of Jams
     * const count = await prisma.jam.count({
     *   where: {
     *     // ... the filter for the Jams we want to count
     *   }
     * })
    **/
    count<T extends jamCountArgs>(
      args?: Subset<T, jamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JamAggregateArgs>(args: Subset<T, JamAggregateArgs>): Prisma.PrismaPromise<GetJamAggregateType<T>>

    /**
     * Group by Jam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jamGroupByArgs['orderBy'] }
        : { orderBy?: jamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jam model
   */
  readonly fields: jamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    song<T extends jam$songArgs<ExtArgs> = {}>(args?: Subset<T, jam$songArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    jam_play_queue<T extends jam$jam_play_queueArgs<ExtArgs> = {}>(args?: Subset<T, jam$jam_play_queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findMany'> | Null>;

    jam_user<T extends jam$jam_userArgs<ExtArgs> = {}>(args?: Subset<T, jam$jam_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the jam model
   */ 
  interface jamFieldRefs {
    readonly id: FieldRef<"jam", 'String'>
    readonly song_id: FieldRef<"jam", 'Int'>
    readonly play: FieldRef<"jam", 'Boolean'>
    readonly timestampt: FieldRef<"jam", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * jam findUnique
   */
  export type jamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * Filter, which jam to fetch.
     */
    where: jamWhereUniqueInput
  }


  /**
   * jam findUniqueOrThrow
   */
  export type jamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * Filter, which jam to fetch.
     */
    where: jamWhereUniqueInput
  }


  /**
   * jam findFirst
   */
  export type jamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * Filter, which jam to fetch.
     */
    where?: jamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jams to fetch.
     */
    orderBy?: jamOrderByWithRelationInput | jamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jams.
     */
    cursor?: jamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jams.
     */
    distinct?: JamScalarFieldEnum | JamScalarFieldEnum[]
  }


  /**
   * jam findFirstOrThrow
   */
  export type jamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * Filter, which jam to fetch.
     */
    where?: jamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jams to fetch.
     */
    orderBy?: jamOrderByWithRelationInput | jamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jams.
     */
    cursor?: jamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jams.
     */
    distinct?: JamScalarFieldEnum | JamScalarFieldEnum[]
  }


  /**
   * jam findMany
   */
  export type jamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * Filter, which jams to fetch.
     */
    where?: jamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jams to fetch.
     */
    orderBy?: jamOrderByWithRelationInput | jamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jams.
     */
    cursor?: jamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jams.
     */
    skip?: number
    distinct?: JamScalarFieldEnum | JamScalarFieldEnum[]
  }


  /**
   * jam create
   */
  export type jamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * The data needed to create a jam.
     */
    data: XOR<jamCreateInput, jamUncheckedCreateInput>
  }


  /**
   * jam createMany
   */
  export type jamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jams.
     */
    data: jamCreateManyInput | jamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * jam update
   */
  export type jamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * The data needed to update a jam.
     */
    data: XOR<jamUpdateInput, jamUncheckedUpdateInput>
    /**
     * Choose, which jam to update.
     */
    where: jamWhereUniqueInput
  }


  /**
   * jam updateMany
   */
  export type jamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jams.
     */
    data: XOR<jamUpdateManyMutationInput, jamUncheckedUpdateManyInput>
    /**
     * Filter which jams to update
     */
    where?: jamWhereInput
  }


  /**
   * jam upsert
   */
  export type jamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * The filter to search for the jam to update in case it exists.
     */
    where: jamWhereUniqueInput
    /**
     * In case the jam found by the `where` argument doesn't exist, create a new jam with this data.
     */
    create: XOR<jamCreateInput, jamUncheckedCreateInput>
    /**
     * In case the jam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jamUpdateInput, jamUncheckedUpdateInput>
  }


  /**
   * jam delete
   */
  export type jamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    /**
     * Filter which jam to delete.
     */
    where: jamWhereUniqueInput
  }


  /**
   * jam deleteMany
   */
  export type jamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jams to delete
     */
    where?: jamWhereInput
  }


  /**
   * jam.song
   */
  export type jam$songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    where?: songWhereInput
  }


  /**
   * jam.jam_play_queue
   */
  export type jam$jam_play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    where?: jam_play_queueWhereInput
    orderBy?: jam_play_queueOrderByWithRelationInput | jam_play_queueOrderByWithRelationInput[]
    cursor?: jam_play_queueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jam_play_queueScalarFieldEnum | Jam_play_queueScalarFieldEnum[]
  }


  /**
   * jam.jam_user
   */
  export type jam$jam_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    where?: jam_userWhereInput
    orderBy?: jam_userOrderByWithRelationInput | jam_userOrderByWithRelationInput[]
    cursor?: jam_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jam_userScalarFieldEnum | Jam_userScalarFieldEnum[]
  }


  /**
   * jam without action
   */
  export type jamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
  }



  /**
   * Model jam_play_queue
   */

  export type AggregateJam_play_queue = {
    _count: Jam_play_queueCountAggregateOutputType | null
    _avg: Jam_play_queueAvgAggregateOutputType | null
    _sum: Jam_play_queueSumAggregateOutputType | null
    _min: Jam_play_queueMinAggregateOutputType | null
    _max: Jam_play_queueMaxAggregateOutputType | null
  }

  export type Jam_play_queueAvgAggregateOutputType = {
    song_id: number | null
  }

  export type Jam_play_queueSumAggregateOutputType = {
    song_id: number | null
  }

  export type Jam_play_queueMinAggregateOutputType = {
    jam_id: string | null
    song_id: number | null
  }

  export type Jam_play_queueMaxAggregateOutputType = {
    jam_id: string | null
    song_id: number | null
  }

  export type Jam_play_queueCountAggregateOutputType = {
    jam_id: number
    song_id: number
    _all: number
  }


  export type Jam_play_queueAvgAggregateInputType = {
    song_id?: true
  }

  export type Jam_play_queueSumAggregateInputType = {
    song_id?: true
  }

  export type Jam_play_queueMinAggregateInputType = {
    jam_id?: true
    song_id?: true
  }

  export type Jam_play_queueMaxAggregateInputType = {
    jam_id?: true
    song_id?: true
  }

  export type Jam_play_queueCountAggregateInputType = {
    jam_id?: true
    song_id?: true
    _all?: true
  }

  export type Jam_play_queueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jam_play_queue to aggregate.
     */
    where?: jam_play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_play_queues to fetch.
     */
    orderBy?: jam_play_queueOrderByWithRelationInput | jam_play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jam_play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_play_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jam_play_queues
    **/
    _count?: true | Jam_play_queueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jam_play_queueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jam_play_queueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jam_play_queueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jam_play_queueMaxAggregateInputType
  }

  export type GetJam_play_queueAggregateType<T extends Jam_play_queueAggregateArgs> = {
        [P in keyof T & keyof AggregateJam_play_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJam_play_queue[P]>
      : GetScalarType<T[P], AggregateJam_play_queue[P]>
  }




  export type jam_play_queueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jam_play_queueWhereInput
    orderBy?: jam_play_queueOrderByWithAggregationInput | jam_play_queueOrderByWithAggregationInput[]
    by: Jam_play_queueScalarFieldEnum[] | Jam_play_queueScalarFieldEnum
    having?: jam_play_queueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jam_play_queueCountAggregateInputType | true
    _avg?: Jam_play_queueAvgAggregateInputType
    _sum?: Jam_play_queueSumAggregateInputType
    _min?: Jam_play_queueMinAggregateInputType
    _max?: Jam_play_queueMaxAggregateInputType
  }

  export type Jam_play_queueGroupByOutputType = {
    jam_id: string
    song_id: number
    _count: Jam_play_queueCountAggregateOutputType | null
    _avg: Jam_play_queueAvgAggregateOutputType | null
    _sum: Jam_play_queueSumAggregateOutputType | null
    _min: Jam_play_queueMinAggregateOutputType | null
    _max: Jam_play_queueMaxAggregateOutputType | null
  }

  type GetJam_play_queueGroupByPayload<T extends jam_play_queueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jam_play_queueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jam_play_queueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jam_play_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Jam_play_queueGroupByOutputType[P]>
        }
      >
    >


  export type jam_play_queueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jam_id?: boolean
    song_id?: boolean
    song?: boolean | songDefaultArgs<ExtArgs>
    jam?: boolean | jamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jam_play_queue"]>

  export type jam_play_queueSelectScalar = {
    jam_id?: boolean
    song_id?: boolean
  }

  export type jam_play_queueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | songDefaultArgs<ExtArgs>
    jam?: boolean | jamDefaultArgs<ExtArgs>
  }


  export type $jam_play_queuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jam_play_queue"
    objects: {
      song: Prisma.$songPayload<ExtArgs>
      jam: Prisma.$jamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      jam_id: string
      song_id: number
    }, ExtArgs["result"]["jam_play_queue"]>
    composites: {}
  }


  type jam_play_queueGetPayload<S extends boolean | null | undefined | jam_play_queueDefaultArgs> = $Result.GetResult<Prisma.$jam_play_queuePayload, S>

  type jam_play_queueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jam_play_queueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Jam_play_queueCountAggregateInputType | true
    }

  export interface jam_play_queueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jam_play_queue'], meta: { name: 'jam_play_queue' } }
    /**
     * Find zero or one Jam_play_queue that matches the filter.
     * @param {jam_play_queueFindUniqueArgs} args - Arguments to find a Jam_play_queue
     * @example
     * // Get one Jam_play_queue
     * const jam_play_queue = await prisma.jam_play_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jam_play_queueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jam_play_queueFindUniqueArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jam_play_queue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jam_play_queueFindUniqueOrThrowArgs} args - Arguments to find a Jam_play_queue
     * @example
     * // Get one Jam_play_queue
     * const jam_play_queue = await prisma.jam_play_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jam_play_queueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_play_queueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jam_play_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_play_queueFindFirstArgs} args - Arguments to find a Jam_play_queue
     * @example
     * // Get one Jam_play_queue
     * const jam_play_queue = await prisma.jam_play_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jam_play_queueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_play_queueFindFirstArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jam_play_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_play_queueFindFirstOrThrowArgs} args - Arguments to find a Jam_play_queue
     * @example
     * // Get one Jam_play_queue
     * const jam_play_queue = await prisma.jam_play_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jam_play_queueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_play_queueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jam_play_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_play_queueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jam_play_queues
     * const jam_play_queues = await prisma.jam_play_queue.findMany()
     * 
     * // Get first 10 Jam_play_queues
     * const jam_play_queues = await prisma.jam_play_queue.findMany({ take: 10 })
     * 
     * // Only select the `jam_id`
     * const jam_play_queueWithJam_idOnly = await prisma.jam_play_queue.findMany({ select: { jam_id: true } })
     * 
    **/
    findMany<T extends jam_play_queueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_play_queueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jam_play_queue.
     * @param {jam_play_queueCreateArgs} args - Arguments to create a Jam_play_queue.
     * @example
     * // Create one Jam_play_queue
     * const Jam_play_queue = await prisma.jam_play_queue.create({
     *   data: {
     *     // ... data to create a Jam_play_queue
     *   }
     * })
     * 
    **/
    create<T extends jam_play_queueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jam_play_queueCreateArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jam_play_queues.
     *     @param {jam_play_queueCreateManyArgs} args - Arguments to create many Jam_play_queues.
     *     @example
     *     // Create many Jam_play_queues
     *     const jam_play_queue = await prisma.jam_play_queue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jam_play_queueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_play_queueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jam_play_queue.
     * @param {jam_play_queueDeleteArgs} args - Arguments to delete one Jam_play_queue.
     * @example
     * // Delete one Jam_play_queue
     * const Jam_play_queue = await prisma.jam_play_queue.delete({
     *   where: {
     *     // ... filter to delete one Jam_play_queue
     *   }
     * })
     * 
    **/
    delete<T extends jam_play_queueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jam_play_queueDeleteArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jam_play_queue.
     * @param {jam_play_queueUpdateArgs} args - Arguments to update one Jam_play_queue.
     * @example
     * // Update one Jam_play_queue
     * const jam_play_queue = await prisma.jam_play_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jam_play_queueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jam_play_queueUpdateArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jam_play_queues.
     * @param {jam_play_queueDeleteManyArgs} args - Arguments to filter Jam_play_queues to delete.
     * @example
     * // Delete a few Jam_play_queues
     * const { count } = await prisma.jam_play_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jam_play_queueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_play_queueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jam_play_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_play_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jam_play_queues
     * const jam_play_queue = await prisma.jam_play_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jam_play_queueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jam_play_queueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jam_play_queue.
     * @param {jam_play_queueUpsertArgs} args - Arguments to update or create a Jam_play_queue.
     * @example
     * // Update or create a Jam_play_queue
     * const jam_play_queue = await prisma.jam_play_queue.upsert({
     *   create: {
     *     // ... data to create a Jam_play_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jam_play_queue we want to update
     *   }
     * })
    **/
    upsert<T extends jam_play_queueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jam_play_queueUpsertArgs<ExtArgs>>
    ): Prisma__jam_play_queueClient<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jam_play_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_play_queueCountArgs} args - Arguments to filter Jam_play_queues to count.
     * @example
     * // Count the number of Jam_play_queues
     * const count = await prisma.jam_play_queue.count({
     *   where: {
     *     // ... the filter for the Jam_play_queues we want to count
     *   }
     * })
    **/
    count<T extends jam_play_queueCountArgs>(
      args?: Subset<T, jam_play_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jam_play_queueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jam_play_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jam_play_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jam_play_queueAggregateArgs>(args: Subset<T, Jam_play_queueAggregateArgs>): Prisma.PrismaPromise<GetJam_play_queueAggregateType<T>>

    /**
     * Group by Jam_play_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_play_queueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jam_play_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jam_play_queueGroupByArgs['orderBy'] }
        : { orderBy?: jam_play_queueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jam_play_queueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJam_play_queueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jam_play_queue model
   */
  readonly fields: jam_play_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jam_play_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jam_play_queueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    song<T extends songDefaultArgs<ExtArgs> = {}>(args?: Subset<T, songDefaultArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    jam<T extends jamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jamDefaultArgs<ExtArgs>>): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the jam_play_queue model
   */ 
  interface jam_play_queueFieldRefs {
    readonly jam_id: FieldRef<"jam_play_queue", 'String'>
    readonly song_id: FieldRef<"jam_play_queue", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * jam_play_queue findUnique
   */
  export type jam_play_queueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * Filter, which jam_play_queue to fetch.
     */
    where: jam_play_queueWhereUniqueInput
  }


  /**
   * jam_play_queue findUniqueOrThrow
   */
  export type jam_play_queueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * Filter, which jam_play_queue to fetch.
     */
    where: jam_play_queueWhereUniqueInput
  }


  /**
   * jam_play_queue findFirst
   */
  export type jam_play_queueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * Filter, which jam_play_queue to fetch.
     */
    where?: jam_play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_play_queues to fetch.
     */
    orderBy?: jam_play_queueOrderByWithRelationInput | jam_play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jam_play_queues.
     */
    cursor?: jam_play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_play_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jam_play_queues.
     */
    distinct?: Jam_play_queueScalarFieldEnum | Jam_play_queueScalarFieldEnum[]
  }


  /**
   * jam_play_queue findFirstOrThrow
   */
  export type jam_play_queueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * Filter, which jam_play_queue to fetch.
     */
    where?: jam_play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_play_queues to fetch.
     */
    orderBy?: jam_play_queueOrderByWithRelationInput | jam_play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jam_play_queues.
     */
    cursor?: jam_play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_play_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jam_play_queues.
     */
    distinct?: Jam_play_queueScalarFieldEnum | Jam_play_queueScalarFieldEnum[]
  }


  /**
   * jam_play_queue findMany
   */
  export type jam_play_queueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * Filter, which jam_play_queues to fetch.
     */
    where?: jam_play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_play_queues to fetch.
     */
    orderBy?: jam_play_queueOrderByWithRelationInput | jam_play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jam_play_queues.
     */
    cursor?: jam_play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_play_queues.
     */
    skip?: number
    distinct?: Jam_play_queueScalarFieldEnum | Jam_play_queueScalarFieldEnum[]
  }


  /**
   * jam_play_queue create
   */
  export type jam_play_queueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * The data needed to create a jam_play_queue.
     */
    data: XOR<jam_play_queueCreateInput, jam_play_queueUncheckedCreateInput>
  }


  /**
   * jam_play_queue createMany
   */
  export type jam_play_queueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jam_play_queues.
     */
    data: jam_play_queueCreateManyInput | jam_play_queueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * jam_play_queue update
   */
  export type jam_play_queueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * The data needed to update a jam_play_queue.
     */
    data: XOR<jam_play_queueUpdateInput, jam_play_queueUncheckedUpdateInput>
    /**
     * Choose, which jam_play_queue to update.
     */
    where: jam_play_queueWhereUniqueInput
  }


  /**
   * jam_play_queue updateMany
   */
  export type jam_play_queueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jam_play_queues.
     */
    data: XOR<jam_play_queueUpdateManyMutationInput, jam_play_queueUncheckedUpdateManyInput>
    /**
     * Filter which jam_play_queues to update
     */
    where?: jam_play_queueWhereInput
  }


  /**
   * jam_play_queue upsert
   */
  export type jam_play_queueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * The filter to search for the jam_play_queue to update in case it exists.
     */
    where: jam_play_queueWhereUniqueInput
    /**
     * In case the jam_play_queue found by the `where` argument doesn't exist, create a new jam_play_queue with this data.
     */
    create: XOR<jam_play_queueCreateInput, jam_play_queueUncheckedCreateInput>
    /**
     * In case the jam_play_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jam_play_queueUpdateInput, jam_play_queueUncheckedUpdateInput>
  }


  /**
   * jam_play_queue delete
   */
  export type jam_play_queueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    /**
     * Filter which jam_play_queue to delete.
     */
    where: jam_play_queueWhereUniqueInput
  }


  /**
   * jam_play_queue deleteMany
   */
  export type jam_play_queueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jam_play_queues to delete
     */
    where?: jam_play_queueWhereInput
  }


  /**
   * jam_play_queue without action
   */
  export type jam_play_queueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
  }



  /**
   * Model jam_user
   */

  export type AggregateJam_user = {
    _count: Jam_userCountAggregateOutputType | null
    _avg: Jam_userAvgAggregateOutputType | null
    _sum: Jam_userSumAggregateOutputType | null
    _min: Jam_userMinAggregateOutputType | null
    _max: Jam_userMaxAggregateOutputType | null
  }

  export type Jam_userAvgAggregateOutputType = {
    user_id: number | null
  }

  export type Jam_userSumAggregateOutputType = {
    user_id: number | null
  }

  export type Jam_userMinAggregateOutputType = {
    jam_id: string | null
    user_id: number | null
  }

  export type Jam_userMaxAggregateOutputType = {
    jam_id: string | null
    user_id: number | null
  }

  export type Jam_userCountAggregateOutputType = {
    jam_id: number
    user_id: number
    _all: number
  }


  export type Jam_userAvgAggregateInputType = {
    user_id?: true
  }

  export type Jam_userSumAggregateInputType = {
    user_id?: true
  }

  export type Jam_userMinAggregateInputType = {
    jam_id?: true
    user_id?: true
  }

  export type Jam_userMaxAggregateInputType = {
    jam_id?: true
    user_id?: true
  }

  export type Jam_userCountAggregateInputType = {
    jam_id?: true
    user_id?: true
    _all?: true
  }

  export type Jam_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jam_user to aggregate.
     */
    where?: jam_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_users to fetch.
     */
    orderBy?: jam_userOrderByWithRelationInput | jam_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jam_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jam_users
    **/
    _count?: true | Jam_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jam_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jam_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jam_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jam_userMaxAggregateInputType
  }

  export type GetJam_userAggregateType<T extends Jam_userAggregateArgs> = {
        [P in keyof T & keyof AggregateJam_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJam_user[P]>
      : GetScalarType<T[P], AggregateJam_user[P]>
  }




  export type jam_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jam_userWhereInput
    orderBy?: jam_userOrderByWithAggregationInput | jam_userOrderByWithAggregationInput[]
    by: Jam_userScalarFieldEnum[] | Jam_userScalarFieldEnum
    having?: jam_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jam_userCountAggregateInputType | true
    _avg?: Jam_userAvgAggregateInputType
    _sum?: Jam_userSumAggregateInputType
    _min?: Jam_userMinAggregateInputType
    _max?: Jam_userMaxAggregateInputType
  }

  export type Jam_userGroupByOutputType = {
    jam_id: string
    user_id: number
    _count: Jam_userCountAggregateOutputType | null
    _avg: Jam_userAvgAggregateOutputType | null
    _sum: Jam_userSumAggregateOutputType | null
    _min: Jam_userMinAggregateOutputType | null
    _max: Jam_userMaxAggregateOutputType | null
  }

  type GetJam_userGroupByPayload<T extends jam_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jam_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jam_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jam_userGroupByOutputType[P]>
            : GetScalarType<T[P], Jam_userGroupByOutputType[P]>
        }
      >
    >


  export type jam_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jam_id?: boolean
    user_id?: boolean
    jam?: boolean | jamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jam_user"]>

  export type jam_userSelectScalar = {
    jam_id?: boolean
    user_id?: boolean
  }

  export type jam_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jam?: boolean | jamDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $jam_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jam_user"
    objects: {
      jam: Prisma.$jamPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      jam_id: string
      user_id: number
    }, ExtArgs["result"]["jam_user"]>
    composites: {}
  }


  type jam_userGetPayload<S extends boolean | null | undefined | jam_userDefaultArgs> = $Result.GetResult<Prisma.$jam_userPayload, S>

  type jam_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jam_userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Jam_userCountAggregateInputType | true
    }

  export interface jam_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jam_user'], meta: { name: 'jam_user' } }
    /**
     * Find zero or one Jam_user that matches the filter.
     * @param {jam_userFindUniqueArgs} args - Arguments to find a Jam_user
     * @example
     * // Get one Jam_user
     * const jam_user = await prisma.jam_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jam_userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jam_userFindUniqueArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jam_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jam_userFindUniqueOrThrowArgs} args - Arguments to find a Jam_user
     * @example
     * // Get one Jam_user
     * const jam_user = await prisma.jam_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jam_userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jam_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_userFindFirstArgs} args - Arguments to find a Jam_user
     * @example
     * // Get one Jam_user
     * const jam_user = await prisma.jam_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jam_userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_userFindFirstArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jam_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_userFindFirstOrThrowArgs} args - Arguments to find a Jam_user
     * @example
     * // Get one Jam_user
     * const jam_user = await prisma.jam_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jam_userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jam_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jam_users
     * const jam_users = await prisma.jam_user.findMany()
     * 
     * // Get first 10 Jam_users
     * const jam_users = await prisma.jam_user.findMany({ take: 10 })
     * 
     * // Only select the `jam_id`
     * const jam_userWithJam_idOnly = await prisma.jam_user.findMany({ select: { jam_id: true } })
     * 
    **/
    findMany<T extends jam_userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jam_user.
     * @param {jam_userCreateArgs} args - Arguments to create a Jam_user.
     * @example
     * // Create one Jam_user
     * const Jam_user = await prisma.jam_user.create({
     *   data: {
     *     // ... data to create a Jam_user
     *   }
     * })
     * 
    **/
    create<T extends jam_userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jam_userCreateArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jam_users.
     *     @param {jam_userCreateManyArgs} args - Arguments to create many Jam_users.
     *     @example
     *     // Create many Jam_users
     *     const jam_user = await prisma.jam_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jam_userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jam_user.
     * @param {jam_userDeleteArgs} args - Arguments to delete one Jam_user.
     * @example
     * // Delete one Jam_user
     * const Jam_user = await prisma.jam_user.delete({
     *   where: {
     *     // ... filter to delete one Jam_user
     *   }
     * })
     * 
    **/
    delete<T extends jam_userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jam_userDeleteArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jam_user.
     * @param {jam_userUpdateArgs} args - Arguments to update one Jam_user.
     * @example
     * // Update one Jam_user
     * const jam_user = await prisma.jam_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jam_userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jam_userUpdateArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jam_users.
     * @param {jam_userDeleteManyArgs} args - Arguments to filter Jam_users to delete.
     * @example
     * // Delete a few Jam_users
     * const { count } = await prisma.jam_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jam_userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jam_userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jam_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jam_users
     * const jam_user = await prisma.jam_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jam_userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jam_userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jam_user.
     * @param {jam_userUpsertArgs} args - Arguments to update or create a Jam_user.
     * @example
     * // Update or create a Jam_user
     * const jam_user = await prisma.jam_user.upsert({
     *   create: {
     *     // ... data to create a Jam_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jam_user we want to update
     *   }
     * })
    **/
    upsert<T extends jam_userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jam_userUpsertArgs<ExtArgs>>
    ): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jam_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_userCountArgs} args - Arguments to filter Jam_users to count.
     * @example
     * // Count the number of Jam_users
     * const count = await prisma.jam_user.count({
     *   where: {
     *     // ... the filter for the Jam_users we want to count
     *   }
     * })
    **/
    count<T extends jam_userCountArgs>(
      args?: Subset<T, jam_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jam_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jam_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jam_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jam_userAggregateArgs>(args: Subset<T, Jam_userAggregateArgs>): Prisma.PrismaPromise<GetJam_userAggregateType<T>>

    /**
     * Group by Jam_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jam_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jam_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jam_userGroupByArgs['orderBy'] }
        : { orderBy?: jam_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jam_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJam_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jam_user model
   */
  readonly fields: jam_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jam_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jam_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jam<T extends jamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jamDefaultArgs<ExtArgs>>): Prisma__jamClient<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the jam_user model
   */ 
  interface jam_userFieldRefs {
    readonly jam_id: FieldRef<"jam_user", 'String'>
    readonly user_id: FieldRef<"jam_user", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * jam_user findUnique
   */
  export type jam_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * Filter, which jam_user to fetch.
     */
    where: jam_userWhereUniqueInput
  }


  /**
   * jam_user findUniqueOrThrow
   */
  export type jam_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * Filter, which jam_user to fetch.
     */
    where: jam_userWhereUniqueInput
  }


  /**
   * jam_user findFirst
   */
  export type jam_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * Filter, which jam_user to fetch.
     */
    where?: jam_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_users to fetch.
     */
    orderBy?: jam_userOrderByWithRelationInput | jam_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jam_users.
     */
    cursor?: jam_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jam_users.
     */
    distinct?: Jam_userScalarFieldEnum | Jam_userScalarFieldEnum[]
  }


  /**
   * jam_user findFirstOrThrow
   */
  export type jam_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * Filter, which jam_user to fetch.
     */
    where?: jam_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_users to fetch.
     */
    orderBy?: jam_userOrderByWithRelationInput | jam_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jam_users.
     */
    cursor?: jam_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jam_users.
     */
    distinct?: Jam_userScalarFieldEnum | Jam_userScalarFieldEnum[]
  }


  /**
   * jam_user findMany
   */
  export type jam_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * Filter, which jam_users to fetch.
     */
    where?: jam_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jam_users to fetch.
     */
    orderBy?: jam_userOrderByWithRelationInput | jam_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jam_users.
     */
    cursor?: jam_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jam_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jam_users.
     */
    skip?: number
    distinct?: Jam_userScalarFieldEnum | Jam_userScalarFieldEnum[]
  }


  /**
   * jam_user create
   */
  export type jam_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * The data needed to create a jam_user.
     */
    data: XOR<jam_userCreateInput, jam_userUncheckedCreateInput>
  }


  /**
   * jam_user createMany
   */
  export type jam_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jam_users.
     */
    data: jam_userCreateManyInput | jam_userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * jam_user update
   */
  export type jam_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * The data needed to update a jam_user.
     */
    data: XOR<jam_userUpdateInput, jam_userUncheckedUpdateInput>
    /**
     * Choose, which jam_user to update.
     */
    where: jam_userWhereUniqueInput
  }


  /**
   * jam_user updateMany
   */
  export type jam_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jam_users.
     */
    data: XOR<jam_userUpdateManyMutationInput, jam_userUncheckedUpdateManyInput>
    /**
     * Filter which jam_users to update
     */
    where?: jam_userWhereInput
  }


  /**
   * jam_user upsert
   */
  export type jam_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * The filter to search for the jam_user to update in case it exists.
     */
    where: jam_userWhereUniqueInput
    /**
     * In case the jam_user found by the `where` argument doesn't exist, create a new jam_user with this data.
     */
    create: XOR<jam_userCreateInput, jam_userUncheckedCreateInput>
    /**
     * In case the jam_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jam_userUpdateInput, jam_userUncheckedUpdateInput>
  }


  /**
   * jam_user delete
   */
  export type jam_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    /**
     * Filter which jam_user to delete.
     */
    where: jam_userWhereUniqueInput
  }


  /**
   * jam_user deleteMany
   */
  export type jam_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jam_users to delete
     */
    where?: jam_userWhereInput
  }


  /**
   * jam_user without action
   */
  export type jam_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
  }



  /**
   * Model like_entity
   */

  export type AggregateLike_entity = {
    _count: Like_entityCountAggregateOutputType | null
    _avg: Like_entityAvgAggregateOutputType | null
    _sum: Like_entitySumAggregateOutputType | null
    _min: Like_entityMinAggregateOutputType | null
    _max: Like_entityMaxAggregateOutputType | null
  }

  export type Like_entityAvgAggregateOutputType = {
    entity_id: number | null
    like_id: number | null
    user_id: number | null
  }

  export type Like_entitySumAggregateOutputType = {
    entity_id: number | null
    like_id: number | null
    user_id: number | null
  }

  export type Like_entityMinAggregateOutputType = {
    entity_id: number | null
    like_id: number | null
    user_id: number | null
  }

  export type Like_entityMaxAggregateOutputType = {
    entity_id: number | null
    like_id: number | null
    user_id: number | null
  }

  export type Like_entityCountAggregateOutputType = {
    entity_id: number
    like_id: number
    user_id: number
    _all: number
  }


  export type Like_entityAvgAggregateInputType = {
    entity_id?: true
    like_id?: true
    user_id?: true
  }

  export type Like_entitySumAggregateInputType = {
    entity_id?: true
    like_id?: true
    user_id?: true
  }

  export type Like_entityMinAggregateInputType = {
    entity_id?: true
    like_id?: true
    user_id?: true
  }

  export type Like_entityMaxAggregateInputType = {
    entity_id?: true
    like_id?: true
    user_id?: true
  }

  export type Like_entityCountAggregateInputType = {
    entity_id?: true
    like_id?: true
    user_id?: true
    _all?: true
  }

  export type Like_entityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like_entity to aggregate.
     */
    where?: like_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_entities to fetch.
     */
    orderBy?: like_entityOrderByWithRelationInput | like_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: like_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned like_entities
    **/
    _count?: true | Like_entityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Like_entityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Like_entitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Like_entityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Like_entityMaxAggregateInputType
  }

  export type GetLike_entityAggregateType<T extends Like_entityAggregateArgs> = {
        [P in keyof T & keyof AggregateLike_entity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike_entity[P]>
      : GetScalarType<T[P], AggregateLike_entity[P]>
  }




  export type like_entityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_entityWhereInput
    orderBy?: like_entityOrderByWithAggregationInput | like_entityOrderByWithAggregationInput[]
    by: Like_entityScalarFieldEnum[] | Like_entityScalarFieldEnum
    having?: like_entityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Like_entityCountAggregateInputType | true
    _avg?: Like_entityAvgAggregateInputType
    _sum?: Like_entitySumAggregateInputType
    _min?: Like_entityMinAggregateInputType
    _max?: Like_entityMaxAggregateInputType
  }

  export type Like_entityGroupByOutputType = {
    entity_id: number
    like_id: number
    user_id: number
    _count: Like_entityCountAggregateOutputType | null
    _avg: Like_entityAvgAggregateOutputType | null
    _sum: Like_entitySumAggregateOutputType | null
    _min: Like_entityMinAggregateOutputType | null
    _max: Like_entityMaxAggregateOutputType | null
  }

  type GetLike_entityGroupByPayload<T extends like_entityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Like_entityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Like_entityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Like_entityGroupByOutputType[P]>
            : GetScalarType<T[P], Like_entityGroupByOutputType[P]>
        }
      >
    >


  export type like_entitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entity_id?: boolean
    like_id?: boolean
    user_id?: boolean
    entity?: boolean | entityDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like_entity"]>

  export type like_entitySelectScalar = {
    entity_id?: boolean
    like_id?: boolean
    user_id?: boolean
  }

  export type like_entityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | entityDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $like_entityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "like_entity"
    objects: {
      entity: Prisma.$entityPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entity_id: number
      like_id: number
      user_id: number
    }, ExtArgs["result"]["like_entity"]>
    composites: {}
  }


  type like_entityGetPayload<S extends boolean | null | undefined | like_entityDefaultArgs> = $Result.GetResult<Prisma.$like_entityPayload, S>

  type like_entityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<like_entityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Like_entityCountAggregateInputType | true
    }

  export interface like_entityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like_entity'], meta: { name: 'like_entity' } }
    /**
     * Find zero or one Like_entity that matches the filter.
     * @param {like_entityFindUniqueArgs} args - Arguments to find a Like_entity
     * @example
     * // Get one Like_entity
     * const like_entity = await prisma.like_entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends like_entityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, like_entityFindUniqueArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Like_entity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {like_entityFindUniqueOrThrowArgs} args - Arguments to find a Like_entity
     * @example
     * // Get one Like_entity
     * const like_entity = await prisma.like_entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends like_entityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, like_entityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Like_entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_entityFindFirstArgs} args - Arguments to find a Like_entity
     * @example
     * // Get one Like_entity
     * const like_entity = await prisma.like_entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends like_entityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, like_entityFindFirstArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Like_entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_entityFindFirstOrThrowArgs} args - Arguments to find a Like_entity
     * @example
     * // Get one Like_entity
     * const like_entity = await prisma.like_entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends like_entityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, like_entityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Like_entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_entityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Like_entities
     * const like_entities = await prisma.like_entity.findMany()
     * 
     * // Get first 10 Like_entities
     * const like_entities = await prisma.like_entity.findMany({ take: 10 })
     * 
     * // Only select the `entity_id`
     * const like_entityWithEntity_idOnly = await prisma.like_entity.findMany({ select: { entity_id: true } })
     * 
    **/
    findMany<T extends like_entityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, like_entityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Like_entity.
     * @param {like_entityCreateArgs} args - Arguments to create a Like_entity.
     * @example
     * // Create one Like_entity
     * const Like_entity = await prisma.like_entity.create({
     *   data: {
     *     // ... data to create a Like_entity
     *   }
     * })
     * 
    **/
    create<T extends like_entityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, like_entityCreateArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Like_entities.
     *     @param {like_entityCreateManyArgs} args - Arguments to create many Like_entities.
     *     @example
     *     // Create many Like_entities
     *     const like_entity = await prisma.like_entity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends like_entityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, like_entityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like_entity.
     * @param {like_entityDeleteArgs} args - Arguments to delete one Like_entity.
     * @example
     * // Delete one Like_entity
     * const Like_entity = await prisma.like_entity.delete({
     *   where: {
     *     // ... filter to delete one Like_entity
     *   }
     * })
     * 
    **/
    delete<T extends like_entityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, like_entityDeleteArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Like_entity.
     * @param {like_entityUpdateArgs} args - Arguments to update one Like_entity.
     * @example
     * // Update one Like_entity
     * const like_entity = await prisma.like_entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends like_entityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, like_entityUpdateArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Like_entities.
     * @param {like_entityDeleteManyArgs} args - Arguments to filter Like_entities to delete.
     * @example
     * // Delete a few Like_entities
     * const { count } = await prisma.like_entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends like_entityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, like_entityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Like_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_entityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Like_entities
     * const like_entity = await prisma.like_entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends like_entityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, like_entityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like_entity.
     * @param {like_entityUpsertArgs} args - Arguments to update or create a Like_entity.
     * @example
     * // Update or create a Like_entity
     * const like_entity = await prisma.like_entity.upsert({
     *   create: {
     *     // ... data to create a Like_entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like_entity we want to update
     *   }
     * })
    **/
    upsert<T extends like_entityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, like_entityUpsertArgs<ExtArgs>>
    ): Prisma__like_entityClient<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Like_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_entityCountArgs} args - Arguments to filter Like_entities to count.
     * @example
     * // Count the number of Like_entities
     * const count = await prisma.like_entity.count({
     *   where: {
     *     // ... the filter for the Like_entities we want to count
     *   }
     * })
    **/
    count<T extends like_entityCountArgs>(
      args?: Subset<T, like_entityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Like_entityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_entityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Like_entityAggregateArgs>(args: Subset<T, Like_entityAggregateArgs>): Prisma.PrismaPromise<GetLike_entityAggregateType<T>>

    /**
     * Group by Like_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_entityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends like_entityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: like_entityGroupByArgs['orderBy'] }
        : { orderBy?: like_entityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, like_entityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLike_entityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the like_entity model
   */
  readonly fields: like_entityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like_entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__like_entityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entity<T extends entityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entityDefaultArgs<ExtArgs>>): Prisma__entityClient<$Result.GetResult<Prisma.$entityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the like_entity model
   */ 
  interface like_entityFieldRefs {
    readonly entity_id: FieldRef<"like_entity", 'Int'>
    readonly like_id: FieldRef<"like_entity", 'Int'>
    readonly user_id: FieldRef<"like_entity", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * like_entity findUnique
   */
  export type like_entityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * Filter, which like_entity to fetch.
     */
    where: like_entityWhereUniqueInput
  }


  /**
   * like_entity findUniqueOrThrow
   */
  export type like_entityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * Filter, which like_entity to fetch.
     */
    where: like_entityWhereUniqueInput
  }


  /**
   * like_entity findFirst
   */
  export type like_entityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * Filter, which like_entity to fetch.
     */
    where?: like_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_entities to fetch.
     */
    orderBy?: like_entityOrderByWithRelationInput | like_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for like_entities.
     */
    cursor?: like_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of like_entities.
     */
    distinct?: Like_entityScalarFieldEnum | Like_entityScalarFieldEnum[]
  }


  /**
   * like_entity findFirstOrThrow
   */
  export type like_entityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * Filter, which like_entity to fetch.
     */
    where?: like_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_entities to fetch.
     */
    orderBy?: like_entityOrderByWithRelationInput | like_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for like_entities.
     */
    cursor?: like_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of like_entities.
     */
    distinct?: Like_entityScalarFieldEnum | Like_entityScalarFieldEnum[]
  }


  /**
   * like_entity findMany
   */
  export type like_entityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * Filter, which like_entities to fetch.
     */
    where?: like_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_entities to fetch.
     */
    orderBy?: like_entityOrderByWithRelationInput | like_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing like_entities.
     */
    cursor?: like_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_entities.
     */
    skip?: number
    distinct?: Like_entityScalarFieldEnum | Like_entityScalarFieldEnum[]
  }


  /**
   * like_entity create
   */
  export type like_entityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * The data needed to create a like_entity.
     */
    data: XOR<like_entityCreateInput, like_entityUncheckedCreateInput>
  }


  /**
   * like_entity createMany
   */
  export type like_entityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many like_entities.
     */
    data: like_entityCreateManyInput | like_entityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * like_entity update
   */
  export type like_entityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * The data needed to update a like_entity.
     */
    data: XOR<like_entityUpdateInput, like_entityUncheckedUpdateInput>
    /**
     * Choose, which like_entity to update.
     */
    where: like_entityWhereUniqueInput
  }


  /**
   * like_entity updateMany
   */
  export type like_entityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update like_entities.
     */
    data: XOR<like_entityUpdateManyMutationInput, like_entityUncheckedUpdateManyInput>
    /**
     * Filter which like_entities to update
     */
    where?: like_entityWhereInput
  }


  /**
   * like_entity upsert
   */
  export type like_entityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * The filter to search for the like_entity to update in case it exists.
     */
    where: like_entityWhereUniqueInput
    /**
     * In case the like_entity found by the `where` argument doesn't exist, create a new like_entity with this data.
     */
    create: XOR<like_entityCreateInput, like_entityUncheckedCreateInput>
    /**
     * In case the like_entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<like_entityUpdateInput, like_entityUncheckedUpdateInput>
  }


  /**
   * like_entity delete
   */
  export type like_entityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    /**
     * Filter which like_entity to delete.
     */
    where: like_entityWhereUniqueInput
  }


  /**
   * like_entity deleteMany
   */
  export type like_entityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like_entities to delete
     */
    where?: like_entityWhereInput
  }


  /**
   * like_entity without action
   */
  export type like_entityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
  }



  /**
   * Model play_queue
   */

  export type AggregatePlay_queue = {
    _count: Play_queueCountAggregateOutputType | null
    _avg: Play_queueAvgAggregateOutputType | null
    _sum: Play_queueSumAggregateOutputType | null
    _min: Play_queueMinAggregateOutputType | null
    _max: Play_queueMaxAggregateOutputType | null
  }

  export type Play_queueAvgAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type Play_queueSumAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type Play_queueMinAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type Play_queueMaxAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type Play_queueCountAggregateOutputType = {
    user_id: number
    song_id: number
    _all: number
  }


  export type Play_queueAvgAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type Play_queueSumAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type Play_queueMinAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type Play_queueMaxAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type Play_queueCountAggregateInputType = {
    user_id?: true
    song_id?: true
    _all?: true
  }

  export type Play_queueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which play_queue to aggregate.
     */
    where?: play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of play_queues to fetch.
     */
    orderBy?: play_queueOrderByWithRelationInput | play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` play_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned play_queues
    **/
    _count?: true | Play_queueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Play_queueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Play_queueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Play_queueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Play_queueMaxAggregateInputType
  }

  export type GetPlay_queueAggregateType<T extends Play_queueAggregateArgs> = {
        [P in keyof T & keyof AggregatePlay_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlay_queue[P]>
      : GetScalarType<T[P], AggregatePlay_queue[P]>
  }




  export type play_queueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: play_queueWhereInput
    orderBy?: play_queueOrderByWithAggregationInput | play_queueOrderByWithAggregationInput[]
    by: Play_queueScalarFieldEnum[] | Play_queueScalarFieldEnum
    having?: play_queueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Play_queueCountAggregateInputType | true
    _avg?: Play_queueAvgAggregateInputType
    _sum?: Play_queueSumAggregateInputType
    _min?: Play_queueMinAggregateInputType
    _max?: Play_queueMaxAggregateInputType
  }

  export type Play_queueGroupByOutputType = {
    user_id: number
    song_id: number
    _count: Play_queueCountAggregateOutputType | null
    _avg: Play_queueAvgAggregateOutputType | null
    _sum: Play_queueSumAggregateOutputType | null
    _min: Play_queueMinAggregateOutputType | null
    _max: Play_queueMaxAggregateOutputType | null
  }

  type GetPlay_queueGroupByPayload<T extends play_queueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Play_queueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Play_queueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Play_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Play_queueGroupByOutputType[P]>
        }
      >
    >


  export type play_queueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    song_id?: boolean
    song?: boolean | songDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["play_queue"]>

  export type play_queueSelectScalar = {
    user_id?: boolean
    song_id?: boolean
  }

  export type play_queueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | songDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $play_queuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "play_queue"
    objects: {
      song: Prisma.$songPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      song_id: number
    }, ExtArgs["result"]["play_queue"]>
    composites: {}
  }


  type play_queueGetPayload<S extends boolean | null | undefined | play_queueDefaultArgs> = $Result.GetResult<Prisma.$play_queuePayload, S>

  type play_queueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<play_queueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Play_queueCountAggregateInputType | true
    }

  export interface play_queueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['play_queue'], meta: { name: 'play_queue' } }
    /**
     * Find zero or one Play_queue that matches the filter.
     * @param {play_queueFindUniqueArgs} args - Arguments to find a Play_queue
     * @example
     * // Get one Play_queue
     * const play_queue = await prisma.play_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends play_queueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, play_queueFindUniqueArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Play_queue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {play_queueFindUniqueOrThrowArgs} args - Arguments to find a Play_queue
     * @example
     * // Get one Play_queue
     * const play_queue = await prisma.play_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends play_queueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, play_queueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Play_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {play_queueFindFirstArgs} args - Arguments to find a Play_queue
     * @example
     * // Get one Play_queue
     * const play_queue = await prisma.play_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends play_queueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, play_queueFindFirstArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Play_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {play_queueFindFirstOrThrowArgs} args - Arguments to find a Play_queue
     * @example
     * // Get one Play_queue
     * const play_queue = await prisma.play_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends play_queueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, play_queueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Play_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {play_queueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Play_queues
     * const play_queues = await prisma.play_queue.findMany()
     * 
     * // Get first 10 Play_queues
     * const play_queues = await prisma.play_queue.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const play_queueWithUser_idOnly = await prisma.play_queue.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends play_queueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, play_queueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Play_queue.
     * @param {play_queueCreateArgs} args - Arguments to create a Play_queue.
     * @example
     * // Create one Play_queue
     * const Play_queue = await prisma.play_queue.create({
     *   data: {
     *     // ... data to create a Play_queue
     *   }
     * })
     * 
    **/
    create<T extends play_queueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, play_queueCreateArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Play_queues.
     *     @param {play_queueCreateManyArgs} args - Arguments to create many Play_queues.
     *     @example
     *     // Create many Play_queues
     *     const play_queue = await prisma.play_queue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends play_queueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, play_queueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Play_queue.
     * @param {play_queueDeleteArgs} args - Arguments to delete one Play_queue.
     * @example
     * // Delete one Play_queue
     * const Play_queue = await prisma.play_queue.delete({
     *   where: {
     *     // ... filter to delete one Play_queue
     *   }
     * })
     * 
    **/
    delete<T extends play_queueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, play_queueDeleteArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Play_queue.
     * @param {play_queueUpdateArgs} args - Arguments to update one Play_queue.
     * @example
     * // Update one Play_queue
     * const play_queue = await prisma.play_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends play_queueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, play_queueUpdateArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Play_queues.
     * @param {play_queueDeleteManyArgs} args - Arguments to filter Play_queues to delete.
     * @example
     * // Delete a few Play_queues
     * const { count } = await prisma.play_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends play_queueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, play_queueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Play_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {play_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Play_queues
     * const play_queue = await prisma.play_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends play_queueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, play_queueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Play_queue.
     * @param {play_queueUpsertArgs} args - Arguments to update or create a Play_queue.
     * @example
     * // Update or create a Play_queue
     * const play_queue = await prisma.play_queue.upsert({
     *   create: {
     *     // ... data to create a Play_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Play_queue we want to update
     *   }
     * })
    **/
    upsert<T extends play_queueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, play_queueUpsertArgs<ExtArgs>>
    ): Prisma__play_queueClient<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Play_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {play_queueCountArgs} args - Arguments to filter Play_queues to count.
     * @example
     * // Count the number of Play_queues
     * const count = await prisma.play_queue.count({
     *   where: {
     *     // ... the filter for the Play_queues we want to count
     *   }
     * })
    **/
    count<T extends play_queueCountArgs>(
      args?: Subset<T, play_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Play_queueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Play_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Play_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Play_queueAggregateArgs>(args: Subset<T, Play_queueAggregateArgs>): Prisma.PrismaPromise<GetPlay_queueAggregateType<T>>

    /**
     * Group by Play_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {play_queueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends play_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: play_queueGroupByArgs['orderBy'] }
        : { orderBy?: play_queueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, play_queueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlay_queueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the play_queue model
   */
  readonly fields: play_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for play_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__play_queueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    song<T extends songDefaultArgs<ExtArgs> = {}>(args?: Subset<T, songDefaultArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the play_queue model
   */ 
  interface play_queueFieldRefs {
    readonly user_id: FieldRef<"play_queue", 'Int'>
    readonly song_id: FieldRef<"play_queue", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * play_queue findUnique
   */
  export type play_queueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * Filter, which play_queue to fetch.
     */
    where: play_queueWhereUniqueInput
  }


  /**
   * play_queue findUniqueOrThrow
   */
  export type play_queueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * Filter, which play_queue to fetch.
     */
    where: play_queueWhereUniqueInput
  }


  /**
   * play_queue findFirst
   */
  export type play_queueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * Filter, which play_queue to fetch.
     */
    where?: play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of play_queues to fetch.
     */
    orderBy?: play_queueOrderByWithRelationInput | play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for play_queues.
     */
    cursor?: play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` play_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of play_queues.
     */
    distinct?: Play_queueScalarFieldEnum | Play_queueScalarFieldEnum[]
  }


  /**
   * play_queue findFirstOrThrow
   */
  export type play_queueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * Filter, which play_queue to fetch.
     */
    where?: play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of play_queues to fetch.
     */
    orderBy?: play_queueOrderByWithRelationInput | play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for play_queues.
     */
    cursor?: play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` play_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of play_queues.
     */
    distinct?: Play_queueScalarFieldEnum | Play_queueScalarFieldEnum[]
  }


  /**
   * play_queue findMany
   */
  export type play_queueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * Filter, which play_queues to fetch.
     */
    where?: play_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of play_queues to fetch.
     */
    orderBy?: play_queueOrderByWithRelationInput | play_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing play_queues.
     */
    cursor?: play_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` play_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` play_queues.
     */
    skip?: number
    distinct?: Play_queueScalarFieldEnum | Play_queueScalarFieldEnum[]
  }


  /**
   * play_queue create
   */
  export type play_queueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * The data needed to create a play_queue.
     */
    data: XOR<play_queueCreateInput, play_queueUncheckedCreateInput>
  }


  /**
   * play_queue createMany
   */
  export type play_queueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many play_queues.
     */
    data: play_queueCreateManyInput | play_queueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * play_queue update
   */
  export type play_queueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * The data needed to update a play_queue.
     */
    data: XOR<play_queueUpdateInput, play_queueUncheckedUpdateInput>
    /**
     * Choose, which play_queue to update.
     */
    where: play_queueWhereUniqueInput
  }


  /**
   * play_queue updateMany
   */
  export type play_queueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update play_queues.
     */
    data: XOR<play_queueUpdateManyMutationInput, play_queueUncheckedUpdateManyInput>
    /**
     * Filter which play_queues to update
     */
    where?: play_queueWhereInput
  }


  /**
   * play_queue upsert
   */
  export type play_queueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * The filter to search for the play_queue to update in case it exists.
     */
    where: play_queueWhereUniqueInput
    /**
     * In case the play_queue found by the `where` argument doesn't exist, create a new play_queue with this data.
     */
    create: XOR<play_queueCreateInput, play_queueUncheckedCreateInput>
    /**
     * In case the play_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<play_queueUpdateInput, play_queueUncheckedUpdateInput>
  }


  /**
   * play_queue delete
   */
  export type play_queueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    /**
     * Filter which play_queue to delete.
     */
    where: play_queueWhereUniqueInput
  }


  /**
   * play_queue deleteMany
   */
  export type play_queueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which play_queues to delete
     */
    where?: play_queueWhereInput
  }


  /**
   * play_queue without action
   */
  export type play_queueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
  }



  /**
   * Model playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    name: string | null
    cover: string | null
    user_id: number | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cover: string | null
    user_id: number | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    cover: number
    user_id: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    user_id?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    user_id?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    user_id?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist to aggregate.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type playlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithAggregationInput | playlistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: playlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    name: string
    cover: string | null
    user_id: number
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends playlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type playlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist_song?: boolean | playlist$playlist_songArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type playlistSelectScalar = {
    id?: boolean
    name?: boolean
    cover?: boolean
    user_id?: boolean
  }

  export type playlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist_song?: boolean | playlist$playlist_songArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $playlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlist"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      playlist_song: Prisma.$playlist_songPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cover: string | null
      user_id: number
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }


  type playlistGetPayload<S extends boolean | null | undefined | playlistDefaultArgs> = $Result.GetResult<Prisma.$playlistPayload, S>

  type playlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playlistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface playlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlist'], meta: { name: 'playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {playlistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends playlistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, playlistFindUniqueArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {playlistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends playlistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, playlistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends playlistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, playlistFindFirstArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends playlistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, playlistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends playlistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playlistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlist.
     * @param {playlistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
    **/
    create<T extends playlistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, playlistCreateArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlists.
     *     @param {playlistCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlist = await prisma.playlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends playlistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playlistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {playlistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
    **/
    delete<T extends playlistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, playlistDeleteArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {playlistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends playlistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, playlistUpdateArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {playlistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends playlistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playlistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends playlistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, playlistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {playlistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
    **/
    upsert<T extends playlistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, playlistUpsertArgs<ExtArgs>>
    ): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends playlistCountArgs>(
      args?: Subset<T, playlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlistGroupByArgs['orderBy'] }
        : { orderBy?: playlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlist model
   */
  readonly fields: playlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    playlist_song<T extends playlist$playlist_songArgs<ExtArgs> = {}>(args?: Subset<T, playlist$playlist_songArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the playlist model
   */ 
  interface playlistFieldRefs {
    readonly id: FieldRef<"playlist", 'Int'>
    readonly name: FieldRef<"playlist", 'String'>
    readonly cover: FieldRef<"playlist", 'String'>
    readonly user_id: FieldRef<"playlist", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * playlist findUnique
   */
  export type playlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where: playlistWhereUniqueInput
  }


  /**
   * playlist findUniqueOrThrow
   */
  export type playlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where: playlistWhereUniqueInput
  }


  /**
   * playlist findFirst
   */
  export type playlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * playlist findFirstOrThrow
   */
  export type playlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * playlist findMany
   */
  export type playlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * playlist create
   */
  export type playlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The data needed to create a playlist.
     */
    data: XOR<playlistCreateInput, playlistUncheckedCreateInput>
  }


  /**
   * playlist createMany
   */
  export type playlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlists.
     */
    data: playlistCreateManyInput | playlistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * playlist update
   */
  export type playlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The data needed to update a playlist.
     */
    data: XOR<playlistUpdateInput, playlistUncheckedUpdateInput>
    /**
     * Choose, which playlist to update.
     */
    where: playlistWhereUniqueInput
  }


  /**
   * playlist updateMany
   */
  export type playlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistWhereInput
  }


  /**
   * playlist upsert
   */
  export type playlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The filter to search for the playlist to update in case it exists.
     */
    where: playlistWhereUniqueInput
    /**
     * In case the playlist found by the `where` argument doesn't exist, create a new playlist with this data.
     */
    create: XOR<playlistCreateInput, playlistUncheckedCreateInput>
    /**
     * In case the playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlistUpdateInput, playlistUncheckedUpdateInput>
  }


  /**
   * playlist delete
   */
  export type playlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter which playlist to delete.
     */
    where: playlistWhereUniqueInput
  }


  /**
   * playlist deleteMany
   */
  export type playlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to delete
     */
    where?: playlistWhereInput
  }


  /**
   * playlist.playlist_song
   */
  export type playlist$playlist_songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    where?: playlist_songWhereInput
    orderBy?: playlist_songOrderByWithRelationInput | playlist_songOrderByWithRelationInput[]
    cursor?: playlist_songWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_songScalarFieldEnum | Playlist_songScalarFieldEnum[]
  }


  /**
   * playlist without action
   */
  export type playlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
  }



  /**
   * Model playlist_song
   */

  export type AggregatePlaylist_song = {
    _count: Playlist_songCountAggregateOutputType | null
    _avg: Playlist_songAvgAggregateOutputType | null
    _sum: Playlist_songSumAggregateOutputType | null
    _min: Playlist_songMinAggregateOutputType | null
    _max: Playlist_songMaxAggregateOutputType | null
  }

  export type Playlist_songAvgAggregateOutputType = {
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songSumAggregateOutputType = {
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songMinAggregateOutputType = {
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songMaxAggregateOutputType = {
    playlist_id: number | null
    song_id: number | null
  }

  export type Playlist_songCountAggregateOutputType = {
    playlist_id: number
    song_id: number
    _all: number
  }


  export type Playlist_songAvgAggregateInputType = {
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songSumAggregateInputType = {
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songMinAggregateInputType = {
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songMaxAggregateInputType = {
    playlist_id?: true
    song_id?: true
  }

  export type Playlist_songCountAggregateInputType = {
    playlist_id?: true
    song_id?: true
    _all?: true
  }

  export type Playlist_songAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist_song to aggregate.
     */
    where?: playlist_songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songOrderByWithRelationInput | playlist_songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlist_songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlist_songs
    **/
    _count?: true | Playlist_songCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playlist_songAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playlist_songSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playlist_songMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playlist_songMaxAggregateInputType
  }

  export type GetPlaylist_songAggregateType<T extends Playlist_songAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist_song]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist_song[P]>
      : GetScalarType<T[P], AggregatePlaylist_song[P]>
  }




  export type playlist_songGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_songWhereInput
    orderBy?: playlist_songOrderByWithAggregationInput | playlist_songOrderByWithAggregationInput[]
    by: Playlist_songScalarFieldEnum[] | Playlist_songScalarFieldEnum
    having?: playlist_songScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playlist_songCountAggregateInputType | true
    _avg?: Playlist_songAvgAggregateInputType
    _sum?: Playlist_songSumAggregateInputType
    _min?: Playlist_songMinAggregateInputType
    _max?: Playlist_songMaxAggregateInputType
  }

  export type Playlist_songGroupByOutputType = {
    playlist_id: number
    song_id: number
    _count: Playlist_songCountAggregateOutputType | null
    _avg: Playlist_songAvgAggregateOutputType | null
    _sum: Playlist_songSumAggregateOutputType | null
    _min: Playlist_songMinAggregateOutputType | null
    _max: Playlist_songMaxAggregateOutputType | null
  }

  type GetPlaylist_songGroupByPayload<T extends playlist_songGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playlist_songGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playlist_songGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playlist_songGroupByOutputType[P]>
            : GetScalarType<T[P], Playlist_songGroupByOutputType[P]>
        }
      >
    >


  export type playlist_songSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlist_id?: boolean
    song_id?: boolean
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    song?: boolean | songDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_song"]>

  export type playlist_songSelectScalar = {
    playlist_id?: boolean
    song_id?: boolean
  }

  export type playlist_songInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    song?: boolean | songDefaultArgs<ExtArgs>
  }


  export type $playlist_songPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlist_song"
    objects: {
      playlist: Prisma.$playlistPayload<ExtArgs>
      song: Prisma.$songPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      playlist_id: number
      song_id: number
    }, ExtArgs["result"]["playlist_song"]>
    composites: {}
  }


  type playlist_songGetPayload<S extends boolean | null | undefined | playlist_songDefaultArgs> = $Result.GetResult<Prisma.$playlist_songPayload, S>

  type playlist_songCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playlist_songFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Playlist_songCountAggregateInputType | true
    }

  export interface playlist_songDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlist_song'], meta: { name: 'playlist_song' } }
    /**
     * Find zero or one Playlist_song that matches the filter.
     * @param {playlist_songFindUniqueArgs} args - Arguments to find a Playlist_song
     * @example
     * // Get one Playlist_song
     * const playlist_song = await prisma.playlist_song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends playlist_songFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, playlist_songFindUniqueArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlist_song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {playlist_songFindUniqueOrThrowArgs} args - Arguments to find a Playlist_song
     * @example
     * // Get one Playlist_song
     * const playlist_song = await prisma.playlist_song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends playlist_songFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, playlist_songFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlist_song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songFindFirstArgs} args - Arguments to find a Playlist_song
     * @example
     * // Get one Playlist_song
     * const playlist_song = await prisma.playlist_song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends playlist_songFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, playlist_songFindFirstArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlist_song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songFindFirstOrThrowArgs} args - Arguments to find a Playlist_song
     * @example
     * // Get one Playlist_song
     * const playlist_song = await prisma.playlist_song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends playlist_songFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, playlist_songFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlist_songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlist_songs
     * const playlist_songs = await prisma.playlist_song.findMany()
     * 
     * // Get first 10 Playlist_songs
     * const playlist_songs = await prisma.playlist_song.findMany({ take: 10 })
     * 
     * // Only select the `playlist_id`
     * const playlist_songWithPlaylist_idOnly = await prisma.playlist_song.findMany({ select: { playlist_id: true } })
     * 
    **/
    findMany<T extends playlist_songFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playlist_songFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlist_song.
     * @param {playlist_songCreateArgs} args - Arguments to create a Playlist_song.
     * @example
     * // Create one Playlist_song
     * const Playlist_song = await prisma.playlist_song.create({
     *   data: {
     *     // ... data to create a Playlist_song
     *   }
     * })
     * 
    **/
    create<T extends playlist_songCreateArgs<ExtArgs>>(
      args: SelectSubset<T, playlist_songCreateArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlist_songs.
     *     @param {playlist_songCreateManyArgs} args - Arguments to create many Playlist_songs.
     *     @example
     *     // Create many Playlist_songs
     *     const playlist_song = await prisma.playlist_song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends playlist_songCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playlist_songCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist_song.
     * @param {playlist_songDeleteArgs} args - Arguments to delete one Playlist_song.
     * @example
     * // Delete one Playlist_song
     * const Playlist_song = await prisma.playlist_song.delete({
     *   where: {
     *     // ... filter to delete one Playlist_song
     *   }
     * })
     * 
    **/
    delete<T extends playlist_songDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, playlist_songDeleteArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlist_song.
     * @param {playlist_songUpdateArgs} args - Arguments to update one Playlist_song.
     * @example
     * // Update one Playlist_song
     * const playlist_song = await prisma.playlist_song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends playlist_songUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, playlist_songUpdateArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlist_songs.
     * @param {playlist_songDeleteManyArgs} args - Arguments to filter Playlist_songs to delete.
     * @example
     * // Delete a few Playlist_songs
     * const { count } = await prisma.playlist_song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends playlist_songDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playlist_songDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlist_songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlist_songs
     * const playlist_song = await prisma.playlist_song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends playlist_songUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, playlist_songUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist_song.
     * @param {playlist_songUpsertArgs} args - Arguments to update or create a Playlist_song.
     * @example
     * // Update or create a Playlist_song
     * const playlist_song = await prisma.playlist_song.upsert({
     *   create: {
     *     // ... data to create a Playlist_song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist_song we want to update
     *   }
     * })
    **/
    upsert<T extends playlist_songUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, playlist_songUpsertArgs<ExtArgs>>
    ): Prisma__playlist_songClient<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Playlist_songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songCountArgs} args - Arguments to filter Playlist_songs to count.
     * @example
     * // Count the number of Playlist_songs
     * const count = await prisma.playlist_song.count({
     *   where: {
     *     // ... the filter for the Playlist_songs we want to count
     *   }
     * })
    **/
    count<T extends playlist_songCountArgs>(
      args?: Subset<T, playlist_songCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playlist_songCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist_song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_songAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Playlist_songAggregateArgs>(args: Subset<T, Playlist_songAggregateArgs>): Prisma.PrismaPromise<GetPlaylist_songAggregateType<T>>

    /**
     * Group by Playlist_song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_songGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlist_songGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlist_songGroupByArgs['orderBy'] }
        : { orderBy?: playlist_songGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlist_songGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylist_songGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlist_song model
   */
  readonly fields: playlist_songFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlist_song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlist_songClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    playlist<T extends playlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playlistDefaultArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    song<T extends songDefaultArgs<ExtArgs> = {}>(args?: Subset<T, songDefaultArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the playlist_song model
   */ 
  interface playlist_songFieldRefs {
    readonly playlist_id: FieldRef<"playlist_song", 'Int'>
    readonly song_id: FieldRef<"playlist_song", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * playlist_song findUnique
   */
  export type playlist_songFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * Filter, which playlist_song to fetch.
     */
    where: playlist_songWhereUniqueInput
  }


  /**
   * playlist_song findUniqueOrThrow
   */
  export type playlist_songFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * Filter, which playlist_song to fetch.
     */
    where: playlist_songWhereUniqueInput
  }


  /**
   * playlist_song findFirst
   */
  export type playlist_songFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * Filter, which playlist_song to fetch.
     */
    where?: playlist_songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songOrderByWithRelationInput | playlist_songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlist_songs.
     */
    cursor?: playlist_songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlist_songs.
     */
    distinct?: Playlist_songScalarFieldEnum | Playlist_songScalarFieldEnum[]
  }


  /**
   * playlist_song findFirstOrThrow
   */
  export type playlist_songFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * Filter, which playlist_song to fetch.
     */
    where?: playlist_songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songOrderByWithRelationInput | playlist_songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlist_songs.
     */
    cursor?: playlist_songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlist_songs.
     */
    distinct?: Playlist_songScalarFieldEnum | Playlist_songScalarFieldEnum[]
  }


  /**
   * playlist_song findMany
   */
  export type playlist_songFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * Filter, which playlist_songs to fetch.
     */
    where?: playlist_songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_songs to fetch.
     */
    orderBy?: playlist_songOrderByWithRelationInput | playlist_songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlist_songs.
     */
    cursor?: playlist_songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_songs.
     */
    skip?: number
    distinct?: Playlist_songScalarFieldEnum | Playlist_songScalarFieldEnum[]
  }


  /**
   * playlist_song create
   */
  export type playlist_songCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * The data needed to create a playlist_song.
     */
    data: XOR<playlist_songCreateInput, playlist_songUncheckedCreateInput>
  }


  /**
   * playlist_song createMany
   */
  export type playlist_songCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlist_songs.
     */
    data: playlist_songCreateManyInput | playlist_songCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * playlist_song update
   */
  export type playlist_songUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * The data needed to update a playlist_song.
     */
    data: XOR<playlist_songUpdateInput, playlist_songUncheckedUpdateInput>
    /**
     * Choose, which playlist_song to update.
     */
    where: playlist_songWhereUniqueInput
  }


  /**
   * playlist_song updateMany
   */
  export type playlist_songUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlist_songs.
     */
    data: XOR<playlist_songUpdateManyMutationInput, playlist_songUncheckedUpdateManyInput>
    /**
     * Filter which playlist_songs to update
     */
    where?: playlist_songWhereInput
  }


  /**
   * playlist_song upsert
   */
  export type playlist_songUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * The filter to search for the playlist_song to update in case it exists.
     */
    where: playlist_songWhereUniqueInput
    /**
     * In case the playlist_song found by the `where` argument doesn't exist, create a new playlist_song with this data.
     */
    create: XOR<playlist_songCreateInput, playlist_songUncheckedCreateInput>
    /**
     * In case the playlist_song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlist_songUpdateInput, playlist_songUncheckedUpdateInput>
  }


  /**
   * playlist_song delete
   */
  export type playlist_songDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    /**
     * Filter which playlist_song to delete.
     */
    where: playlist_songWhereUniqueInput
  }


  /**
   * playlist_song deleteMany
   */
  export type playlist_songDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist_songs to delete
     */
    where?: playlist_songWhereInput
  }


  /**
   * playlist_song without action
   */
  export type playlist_songDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
  }



  /**
   * Model song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    artist_id: number | null
  }

  export type SongSumAggregateOutputType = {
    id: number | null
    duration: number | null
    artist_id: number | null
  }

  export type SongMinAggregateOutputType = {
    id: number | null
    name: string | null
    file: string | null
    duration: number | null
    artist_id: number | null
  }

  export type SongMaxAggregateOutputType = {
    id: number | null
    name: string | null
    file: string | null
    duration: number | null
    artist_id: number | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    name: number
    file: number
    duration: number
    artist_id: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    id?: true
    duration?: true
    artist_id?: true
  }

  export type SongSumAggregateInputType = {
    id?: true
    duration?: true
    artist_id?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    name?: true
    file?: true
    duration?: true
    artist_id?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    name?: true
    file?: true
    duration?: true
    artist_id?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    name?: true
    file?: true
    duration?: true
    artist_id?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which song to aggregate.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type songGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: songWhereInput
    orderBy?: songOrderByWithAggregationInput | songOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: songScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: number
    name: string
    file: string
    duration: number
    artist_id: number
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends songGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type songSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    duration?: boolean
    artist_id?: boolean
    jam?: boolean | song$jamArgs<ExtArgs>
    jam_play_queue?: boolean | song$jam_play_queueArgs<ExtArgs>
    play_queue?: boolean | song$play_queueArgs<ExtArgs>
    playlist_song?: boolean | song$playlist_songArgs<ExtArgs>
    song_album?: boolean | song$song_albumArgs<ExtArgs>
    state?: boolean | song$stateArgs<ExtArgs>
    artist?: boolean | artistDefaultArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type songSelectScalar = {
    id?: boolean
    name?: boolean
    file?: boolean
    duration?: boolean
    artist_id?: boolean
  }

  export type songInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jam?: boolean | song$jamArgs<ExtArgs>
    jam_play_queue?: boolean | song$jam_play_queueArgs<ExtArgs>
    play_queue?: boolean | song$play_queueArgs<ExtArgs>
    playlist_song?: boolean | song$playlist_songArgs<ExtArgs>
    song_album?: boolean | song$song_albumArgs<ExtArgs>
    state?: boolean | song$stateArgs<ExtArgs>
    artist?: boolean | artistDefaultArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $songPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "song"
    objects: {
      jam: Prisma.$jamPayload<ExtArgs>[]
      jam_play_queue: Prisma.$jam_play_queuePayload<ExtArgs>[]
      play_queue: Prisma.$play_queuePayload<ExtArgs>[]
      playlist_song: Prisma.$playlist_songPayload<ExtArgs>[]
      song_album: Prisma.$song_albumPayload<ExtArgs>[]
      state: Prisma.$statePayload<ExtArgs>[]
      artist: Prisma.$artistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      file: string
      duration: number
      artist_id: number
    }, ExtArgs["result"]["song"]>
    composites: {}
  }


  type songGetPayload<S extends boolean | null | undefined | songDefaultArgs> = $Result.GetResult<Prisma.$songPayload, S>

  type songCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<songFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface songDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['song'], meta: { name: 'song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {songFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends songFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, songFindUniqueArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {songFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends songFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, songFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends songFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, songFindFirstArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends songFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, songFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends songFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, songFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song.
     * @param {songCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends songCreateArgs<ExtArgs>>(
      args: SelectSubset<T, songCreateArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {songCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends songCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, songCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {songDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends songDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, songDeleteArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {songUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends songUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, songUpdateArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {songDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends songDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, songDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends songUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, songUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {songUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends songUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, songUpsertArgs<ExtArgs>>
    ): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends songCountArgs>(
      args?: Subset<T, songCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {songGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends songGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: songGroupByArgs['orderBy'] }
        : { orderBy?: songGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, songGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the song model
   */
  readonly fields: songFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__songClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jam<T extends song$jamArgs<ExtArgs> = {}>(args?: Subset<T, song$jamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jamPayload<ExtArgs>, T, 'findMany'> | Null>;

    jam_play_queue<T extends song$jam_play_queueArgs<ExtArgs> = {}>(args?: Subset<T, song$jam_play_queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jam_play_queuePayload<ExtArgs>, T, 'findMany'> | Null>;

    play_queue<T extends song$play_queueArgs<ExtArgs> = {}>(args?: Subset<T, song$play_queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findMany'> | Null>;

    playlist_song<T extends song$playlist_songArgs<ExtArgs> = {}>(args?: Subset<T, song$playlist_songArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_songPayload<ExtArgs>, T, 'findMany'> | Null>;

    song_album<T extends song$song_albumArgs<ExtArgs> = {}>(args?: Subset<T, song$song_albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findMany'> | Null>;

    state<T extends song$stateArgs<ExtArgs> = {}>(args?: Subset<T, song$stateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findMany'> | Null>;

    artist<T extends artistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, artistDefaultArgs<ExtArgs>>): Prisma__artistClient<$Result.GetResult<Prisma.$artistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the song model
   */ 
  interface songFieldRefs {
    readonly id: FieldRef<"song", 'Int'>
    readonly name: FieldRef<"song", 'String'>
    readonly file: FieldRef<"song", 'String'>
    readonly duration: FieldRef<"song", 'Int'>
    readonly artist_id: FieldRef<"song", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * song findUnique
   */
  export type songFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where: songWhereUniqueInput
  }


  /**
   * song findUniqueOrThrow
   */
  export type songFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where: songWhereUniqueInput
  }


  /**
   * song findFirst
   */
  export type songFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for songs.
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * song findFirstOrThrow
   */
  export type songFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * Filter, which song to fetch.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for songs.
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * song findMany
   */
  export type songFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * Filter, which songs to fetch.
     */
    where?: songWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of songs to fetch.
     */
    orderBy?: songOrderByWithRelationInput | songOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing songs.
     */
    cursor?: songWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * song create
   */
  export type songCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * The data needed to create a song.
     */
    data: XOR<songCreateInput, songUncheckedCreateInput>
  }


  /**
   * song createMany
   */
  export type songCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many songs.
     */
    data: songCreateManyInput | songCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * song update
   */
  export type songUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * The data needed to update a song.
     */
    data: XOR<songUpdateInput, songUncheckedUpdateInput>
    /**
     * Choose, which song to update.
     */
    where: songWhereUniqueInput
  }


  /**
   * song updateMany
   */
  export type songUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update songs.
     */
    data: XOR<songUpdateManyMutationInput, songUncheckedUpdateManyInput>
    /**
     * Filter which songs to update
     */
    where?: songWhereInput
  }


  /**
   * song upsert
   */
  export type songUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * The filter to search for the song to update in case it exists.
     */
    where: songWhereUniqueInput
    /**
     * In case the song found by the `where` argument doesn't exist, create a new song with this data.
     */
    create: XOR<songCreateInput, songUncheckedCreateInput>
    /**
     * In case the song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<songUpdateInput, songUncheckedUpdateInput>
  }


  /**
   * song delete
   */
  export type songDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    /**
     * Filter which song to delete.
     */
    where: songWhereUniqueInput
  }


  /**
   * song deleteMany
   */
  export type songDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which songs to delete
     */
    where?: songWhereInput
  }


  /**
   * song.jam
   */
  export type song$jamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam
     */
    select?: jamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jamInclude<ExtArgs> | null
    where?: jamWhereInput
    orderBy?: jamOrderByWithRelationInput | jamOrderByWithRelationInput[]
    cursor?: jamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JamScalarFieldEnum | JamScalarFieldEnum[]
  }


  /**
   * song.jam_play_queue
   */
  export type song$jam_play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_play_queue
     */
    select?: jam_play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_play_queueInclude<ExtArgs> | null
    where?: jam_play_queueWhereInput
    orderBy?: jam_play_queueOrderByWithRelationInput | jam_play_queueOrderByWithRelationInput[]
    cursor?: jam_play_queueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jam_play_queueScalarFieldEnum | Jam_play_queueScalarFieldEnum[]
  }


  /**
   * song.play_queue
   */
  export type song$play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    where?: play_queueWhereInput
    orderBy?: play_queueOrderByWithRelationInput | play_queueOrderByWithRelationInput[]
    cursor?: play_queueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Play_queueScalarFieldEnum | Play_queueScalarFieldEnum[]
  }


  /**
   * song.playlist_song
   */
  export type song$playlist_songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_song
     */
    select?: playlist_songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlist_songInclude<ExtArgs> | null
    where?: playlist_songWhereInput
    orderBy?: playlist_songOrderByWithRelationInput | playlist_songOrderByWithRelationInput[]
    cursor?: playlist_songWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_songScalarFieldEnum | Playlist_songScalarFieldEnum[]
  }


  /**
   * song.song_album
   */
  export type song$song_albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    where?: song_albumWhereInput
    orderBy?: song_albumOrderByWithRelationInput | song_albumOrderByWithRelationInput[]
    cursor?: song_albumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Song_albumScalarFieldEnum | Song_albumScalarFieldEnum[]
  }


  /**
   * song.state
   */
  export type song$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    where?: stateWhereInput
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    cursor?: stateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }


  /**
   * song without action
   */
  export type songDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
  }



  /**
   * Model song_album
   */

  export type AggregateSong_album = {
    _count: Song_albumCountAggregateOutputType | null
    _avg: Song_albumAvgAggregateOutputType | null
    _sum: Song_albumSumAggregateOutputType | null
    _min: Song_albumMinAggregateOutputType | null
    _max: Song_albumMaxAggregateOutputType | null
  }

  export type Song_albumAvgAggregateOutputType = {
    song_id: number | null
    album_id: number | null
  }

  export type Song_albumSumAggregateOutputType = {
    song_id: number | null
    album_id: number | null
  }

  export type Song_albumMinAggregateOutputType = {
    song_id: number | null
    album_id: number | null
  }

  export type Song_albumMaxAggregateOutputType = {
    song_id: number | null
    album_id: number | null
  }

  export type Song_albumCountAggregateOutputType = {
    song_id: number
    album_id: number
    _all: number
  }


  export type Song_albumAvgAggregateInputType = {
    song_id?: true
    album_id?: true
  }

  export type Song_albumSumAggregateInputType = {
    song_id?: true
    album_id?: true
  }

  export type Song_albumMinAggregateInputType = {
    song_id?: true
    album_id?: true
  }

  export type Song_albumMaxAggregateInputType = {
    song_id?: true
    album_id?: true
  }

  export type Song_albumCountAggregateInputType = {
    song_id?: true
    album_id?: true
    _all?: true
  }

  export type Song_albumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which song_album to aggregate.
     */
    where?: song_albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of song_albums to fetch.
     */
    orderBy?: song_albumOrderByWithRelationInput | song_albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: song_albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` song_albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` song_albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned song_albums
    **/
    _count?: true | Song_albumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Song_albumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Song_albumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Song_albumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Song_albumMaxAggregateInputType
  }

  export type GetSong_albumAggregateType<T extends Song_albumAggregateArgs> = {
        [P in keyof T & keyof AggregateSong_album]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong_album[P]>
      : GetScalarType<T[P], AggregateSong_album[P]>
  }




  export type song_albumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: song_albumWhereInput
    orderBy?: song_albumOrderByWithAggregationInput | song_albumOrderByWithAggregationInput[]
    by: Song_albumScalarFieldEnum[] | Song_albumScalarFieldEnum
    having?: song_albumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Song_albumCountAggregateInputType | true
    _avg?: Song_albumAvgAggregateInputType
    _sum?: Song_albumSumAggregateInputType
    _min?: Song_albumMinAggregateInputType
    _max?: Song_albumMaxAggregateInputType
  }

  export type Song_albumGroupByOutputType = {
    song_id: number
    album_id: number
    _count: Song_albumCountAggregateOutputType | null
    _avg: Song_albumAvgAggregateOutputType | null
    _sum: Song_albumSumAggregateOutputType | null
    _min: Song_albumMinAggregateOutputType | null
    _max: Song_albumMaxAggregateOutputType | null
  }

  type GetSong_albumGroupByPayload<T extends song_albumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Song_albumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Song_albumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Song_albumGroupByOutputType[P]>
            : GetScalarType<T[P], Song_albumGroupByOutputType[P]>
        }
      >
    >


  export type song_albumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    song_id?: boolean
    album_id?: boolean
    album?: boolean | albumDefaultArgs<ExtArgs>
    song?: boolean | songDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song_album"]>

  export type song_albumSelectScalar = {
    song_id?: boolean
    album_id?: boolean
  }

  export type song_albumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | albumDefaultArgs<ExtArgs>
    song?: boolean | songDefaultArgs<ExtArgs>
  }


  export type $song_albumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "song_album"
    objects: {
      album: Prisma.$albumPayload<ExtArgs>
      song: Prisma.$songPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      song_id: number
      album_id: number
    }, ExtArgs["result"]["song_album"]>
    composites: {}
  }


  type song_albumGetPayload<S extends boolean | null | undefined | song_albumDefaultArgs> = $Result.GetResult<Prisma.$song_albumPayload, S>

  type song_albumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<song_albumFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Song_albumCountAggregateInputType | true
    }

  export interface song_albumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['song_album'], meta: { name: 'song_album' } }
    /**
     * Find zero or one Song_album that matches the filter.
     * @param {song_albumFindUniqueArgs} args - Arguments to find a Song_album
     * @example
     * // Get one Song_album
     * const song_album = await prisma.song_album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends song_albumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, song_albumFindUniqueArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song_album that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {song_albumFindUniqueOrThrowArgs} args - Arguments to find a Song_album
     * @example
     * // Get one Song_album
     * const song_album = await prisma.song_album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends song_albumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, song_albumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song_album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {song_albumFindFirstArgs} args - Arguments to find a Song_album
     * @example
     * // Get one Song_album
     * const song_album = await prisma.song_album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends song_albumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, song_albumFindFirstArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song_album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {song_albumFindFirstOrThrowArgs} args - Arguments to find a Song_album
     * @example
     * // Get one Song_album
     * const song_album = await prisma.song_album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends song_albumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, song_albumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Song_albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {song_albumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Song_albums
     * const song_albums = await prisma.song_album.findMany()
     * 
     * // Get first 10 Song_albums
     * const song_albums = await prisma.song_album.findMany({ take: 10 })
     * 
     * // Only select the `song_id`
     * const song_albumWithSong_idOnly = await prisma.song_album.findMany({ select: { song_id: true } })
     * 
    **/
    findMany<T extends song_albumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, song_albumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song_album.
     * @param {song_albumCreateArgs} args - Arguments to create a Song_album.
     * @example
     * // Create one Song_album
     * const Song_album = await prisma.song_album.create({
     *   data: {
     *     // ... data to create a Song_album
     *   }
     * })
     * 
    **/
    create<T extends song_albumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, song_albumCreateArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Song_albums.
     *     @param {song_albumCreateManyArgs} args - Arguments to create many Song_albums.
     *     @example
     *     // Create many Song_albums
     *     const song_album = await prisma.song_album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends song_albumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, song_albumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song_album.
     * @param {song_albumDeleteArgs} args - Arguments to delete one Song_album.
     * @example
     * // Delete one Song_album
     * const Song_album = await prisma.song_album.delete({
     *   where: {
     *     // ... filter to delete one Song_album
     *   }
     * })
     * 
    **/
    delete<T extends song_albumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, song_albumDeleteArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song_album.
     * @param {song_albumUpdateArgs} args - Arguments to update one Song_album.
     * @example
     * // Update one Song_album
     * const song_album = await prisma.song_album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends song_albumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, song_albumUpdateArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Song_albums.
     * @param {song_albumDeleteManyArgs} args - Arguments to filter Song_albums to delete.
     * @example
     * // Delete a few Song_albums
     * const { count } = await prisma.song_album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends song_albumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, song_albumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Song_albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {song_albumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Song_albums
     * const song_album = await prisma.song_album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends song_albumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, song_albumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song_album.
     * @param {song_albumUpsertArgs} args - Arguments to update or create a Song_album.
     * @example
     * // Update or create a Song_album
     * const song_album = await prisma.song_album.upsert({
     *   create: {
     *     // ... data to create a Song_album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song_album we want to update
     *   }
     * })
    **/
    upsert<T extends song_albumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, song_albumUpsertArgs<ExtArgs>>
    ): Prisma__song_albumClient<$Result.GetResult<Prisma.$song_albumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Song_albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {song_albumCountArgs} args - Arguments to filter Song_albums to count.
     * @example
     * // Count the number of Song_albums
     * const count = await prisma.song_album.count({
     *   where: {
     *     // ... the filter for the Song_albums we want to count
     *   }
     * })
    **/
    count<T extends song_albumCountArgs>(
      args?: Subset<T, song_albumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Song_albumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song_album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Song_albumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Song_albumAggregateArgs>(args: Subset<T, Song_albumAggregateArgs>): Prisma.PrismaPromise<GetSong_albumAggregateType<T>>

    /**
     * Group by Song_album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {song_albumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends song_albumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: song_albumGroupByArgs['orderBy'] }
        : { orderBy?: song_albumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, song_albumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSong_albumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the song_album model
   */
  readonly fields: song_albumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for song_album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__song_albumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    album<T extends albumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, albumDefaultArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    song<T extends songDefaultArgs<ExtArgs> = {}>(args?: Subset<T, songDefaultArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the song_album model
   */ 
  interface song_albumFieldRefs {
    readonly song_id: FieldRef<"song_album", 'Int'>
    readonly album_id: FieldRef<"song_album", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * song_album findUnique
   */
  export type song_albumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * Filter, which song_album to fetch.
     */
    where: song_albumWhereUniqueInput
  }


  /**
   * song_album findUniqueOrThrow
   */
  export type song_albumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * Filter, which song_album to fetch.
     */
    where: song_albumWhereUniqueInput
  }


  /**
   * song_album findFirst
   */
  export type song_albumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * Filter, which song_album to fetch.
     */
    where?: song_albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of song_albums to fetch.
     */
    orderBy?: song_albumOrderByWithRelationInput | song_albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for song_albums.
     */
    cursor?: song_albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` song_albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` song_albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of song_albums.
     */
    distinct?: Song_albumScalarFieldEnum | Song_albumScalarFieldEnum[]
  }


  /**
   * song_album findFirstOrThrow
   */
  export type song_albumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * Filter, which song_album to fetch.
     */
    where?: song_albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of song_albums to fetch.
     */
    orderBy?: song_albumOrderByWithRelationInput | song_albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for song_albums.
     */
    cursor?: song_albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` song_albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` song_albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of song_albums.
     */
    distinct?: Song_albumScalarFieldEnum | Song_albumScalarFieldEnum[]
  }


  /**
   * song_album findMany
   */
  export type song_albumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * Filter, which song_albums to fetch.
     */
    where?: song_albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of song_albums to fetch.
     */
    orderBy?: song_albumOrderByWithRelationInput | song_albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing song_albums.
     */
    cursor?: song_albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` song_albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` song_albums.
     */
    skip?: number
    distinct?: Song_albumScalarFieldEnum | Song_albumScalarFieldEnum[]
  }


  /**
   * song_album create
   */
  export type song_albumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * The data needed to create a song_album.
     */
    data: XOR<song_albumCreateInput, song_albumUncheckedCreateInput>
  }


  /**
   * song_album createMany
   */
  export type song_albumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many song_albums.
     */
    data: song_albumCreateManyInput | song_albumCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * song_album update
   */
  export type song_albumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * The data needed to update a song_album.
     */
    data: XOR<song_albumUpdateInput, song_albumUncheckedUpdateInput>
    /**
     * Choose, which song_album to update.
     */
    where: song_albumWhereUniqueInput
  }


  /**
   * song_album updateMany
   */
  export type song_albumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update song_albums.
     */
    data: XOR<song_albumUpdateManyMutationInput, song_albumUncheckedUpdateManyInput>
    /**
     * Filter which song_albums to update
     */
    where?: song_albumWhereInput
  }


  /**
   * song_album upsert
   */
  export type song_albumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * The filter to search for the song_album to update in case it exists.
     */
    where: song_albumWhereUniqueInput
    /**
     * In case the song_album found by the `where` argument doesn't exist, create a new song_album with this data.
     */
    create: XOR<song_albumCreateInput, song_albumUncheckedCreateInput>
    /**
     * In case the song_album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<song_albumUpdateInput, song_albumUncheckedUpdateInput>
  }


  /**
   * song_album delete
   */
  export type song_albumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
    /**
     * Filter which song_album to delete.
     */
    where: song_albumWhereUniqueInput
  }


  /**
   * song_album deleteMany
   */
  export type song_albumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which song_albums to delete
     */
    where?: song_albumWhereInput
  }


  /**
   * song_album without action
   */
  export type song_albumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song_album
     */
    select?: song_albumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: song_albumInclude<ExtArgs> | null
  }



  /**
   * Model state
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type StateSumAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type StateMinAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type StateMaxAggregateOutputType = {
    user_id: number | null
    song_id: number | null
  }

  export type StateCountAggregateOutputType = {
    user_id: number
    song_id: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type StateSumAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type StateMinAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type StateMaxAggregateInputType = {
    user_id?: true
    song_id?: true
  }

  export type StateCountAggregateInputType = {
    user_id?: true
    song_id?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which state to aggregate.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned states
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type stateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stateWhereInput
    orderBy?: stateOrderByWithAggregationInput | stateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: stateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    user_id: number
    song_id: number | null
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends stateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type stateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    song_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    song?: boolean | state$songArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type stateSelectScalar = {
    user_id?: boolean
    song_id?: boolean
  }

  export type stateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    song?: boolean | state$songArgs<ExtArgs>
  }


  export type $statePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "state"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      song: Prisma.$songPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      song_id: number | null
    }, ExtArgs["result"]["state"]>
    composites: {}
  }


  type stateGetPayload<S extends boolean | null | undefined | stateDefaultArgs> = $Result.GetResult<Prisma.$statePayload, S>

  type stateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<stateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface stateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['state'], meta: { name: 'state' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {stateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends stateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stateFindUniqueArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one State that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {stateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends stateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends stateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindFirstArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends stateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const stateWithUser_idOnly = await prisma.state.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends stateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a State.
     * @param {stateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
    **/
    create<T extends stateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stateCreateArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many States.
     *     @param {stateCreateManyArgs} args - Arguments to create many States.
     *     @example
     *     // Create many States
     *     const state = await prisma.state.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends stateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {stateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
    **/
    delete<T extends stateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stateDeleteArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one State.
     * @param {stateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends stateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stateUpdateArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more States.
     * @param {stateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends stateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends stateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {stateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
    **/
    upsert<T extends stateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stateUpsertArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends stateCountArgs>(
      args?: Subset<T, stateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stateGroupByArgs['orderBy'] }
        : { orderBy?: stateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the state model
   */
  readonly fields: stateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for state.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    song<T extends state$songArgs<ExtArgs> = {}>(args?: Subset<T, state$songArgs<ExtArgs>>): Prisma__songClient<$Result.GetResult<Prisma.$songPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the state model
   */ 
  interface stateFieldRefs {
    readonly user_id: FieldRef<"state", 'Int'>
    readonly song_id: FieldRef<"state", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * state findUnique
   */
  export type stateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where: stateWhereUniqueInput
  }


  /**
   * state findUniqueOrThrow
   */
  export type stateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where: stateWhereUniqueInput
  }


  /**
   * state findFirst
   */
  export type stateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }


  /**
   * state findFirstOrThrow
   */
  export type stateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }


  /**
   * state findMany
   */
  export type stateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing states.
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }


  /**
   * state create
   */
  export type stateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * The data needed to create a state.
     */
    data: XOR<stateCreateInput, stateUncheckedCreateInput>
  }


  /**
   * state createMany
   */
  export type stateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many states.
     */
    data: stateCreateManyInput | stateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * state update
   */
  export type stateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * The data needed to update a state.
     */
    data: XOR<stateUpdateInput, stateUncheckedUpdateInput>
    /**
     * Choose, which state to update.
     */
    where: stateWhereUniqueInput
  }


  /**
   * state updateMany
   */
  export type stateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update states.
     */
    data: XOR<stateUpdateManyMutationInput, stateUncheckedUpdateManyInput>
    /**
     * Filter which states to update
     */
    where?: stateWhereInput
  }


  /**
   * state upsert
   */
  export type stateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * The filter to search for the state to update in case it exists.
     */
    where: stateWhereUniqueInput
    /**
     * In case the state found by the `where` argument doesn't exist, create a new state with this data.
     */
    create: XOR<stateCreateInput, stateUncheckedCreateInput>
    /**
     * In case the state was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stateUpdateInput, stateUncheckedUpdateInput>
  }


  /**
   * state delete
   */
  export type stateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter which state to delete.
     */
    where: stateWhereUniqueInput
  }


  /**
   * state deleteMany
   */
  export type stateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which states to delete
     */
    where?: stateWhereInput
  }


  /**
   * state.song
   */
  export type state$songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the song
     */
    select?: songSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: songInclude<ExtArgs> | null
    where?: songWhereInput
  }


  /**
   * state without action
   */
  export type stateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: string | null
    gender: string | null
    marketing: boolean | null
    share_content: boolean | null
    birthday: Date | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: string | null
    gender: string | null
    marketing: boolean | null
    share_content: boolean | null
    birthday: Date | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    gender: number
    marketing: number
    share_content: number
    birthday: number
    avatar: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    gender?: true
    marketing?: true
    share_content?: true
    birthday?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    gender?: true
    marketing?: true
    share_content?: true
    birthday?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    gender?: true
    marketing?: true
    share_content?: true
    birthday?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    role: string | null
    gender: string
    marketing: boolean | null
    share_content: boolean | null
    birthday: Date
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    gender?: boolean
    marketing?: boolean
    share_content?: boolean
    birthday?: boolean
    avatar?: boolean
    jam_user?: boolean | user$jam_userArgs<ExtArgs>
    like_entity?: boolean | user$like_entityArgs<ExtArgs>
    play_queue?: boolean | user$play_queueArgs<ExtArgs>
    playlist?: boolean | user$playlistArgs<ExtArgs>
    state?: boolean | user$stateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    gender?: boolean
    marketing?: boolean
    share_content?: boolean
    birthday?: boolean
    avatar?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jam_user?: boolean | user$jam_userArgs<ExtArgs>
    like_entity?: boolean | user$like_entityArgs<ExtArgs>
    play_queue?: boolean | user$play_queueArgs<ExtArgs>
    playlist?: boolean | user$playlistArgs<ExtArgs>
    state?: boolean | user$stateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      jam_user: Prisma.$jam_userPayload<ExtArgs> | null
      like_entity: Prisma.$like_entityPayload<ExtArgs>[]
      play_queue: Prisma.$play_queuePayload<ExtArgs>[]
      playlist: Prisma.$playlistPayload<ExtArgs>[]
      state: Prisma.$statePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      role: string | null
      gender: string
      marketing: boolean | null
      share_content: boolean | null
      birthday: Date
      avatar: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jam_user<T extends user$jam_userArgs<ExtArgs> = {}>(args?: Subset<T, user$jam_userArgs<ExtArgs>>): Prisma__jam_userClient<$Result.GetResult<Prisma.$jam_userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    like_entity<T extends user$like_entityArgs<ExtArgs> = {}>(args?: Subset<T, user$like_entityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_entityPayload<ExtArgs>, T, 'findMany'> | Null>;

    play_queue<T extends user$play_queueArgs<ExtArgs> = {}>(args?: Subset<T, user$play_queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$play_queuePayload<ExtArgs>, T, 'findMany'> | Null>;

    playlist<T extends user$playlistArgs<ExtArgs> = {}>(args?: Subset<T, user$playlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    state<T extends user$stateArgs<ExtArgs> = {}>(args?: Subset<T, user$stateArgs<ExtArgs>>): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'String'>
    readonly marketing: FieldRef<"user", 'Boolean'>
    readonly share_content: FieldRef<"user", 'Boolean'>
    readonly birthday: FieldRef<"user", 'DateTime'>
    readonly avatar: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.jam_user
   */
  export type user$jam_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jam_user
     */
    select?: jam_userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jam_userInclude<ExtArgs> | null
    where?: jam_userWhereInput
  }


  /**
   * user.like_entity
   */
  export type user$like_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_entity
     */
    select?: like_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: like_entityInclude<ExtArgs> | null
    where?: like_entityWhereInput
    orderBy?: like_entityOrderByWithRelationInput | like_entityOrderByWithRelationInput[]
    cursor?: like_entityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_entityScalarFieldEnum | Like_entityScalarFieldEnum[]
  }


  /**
   * user.play_queue
   */
  export type user$play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the play_queue
     */
    select?: play_queueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: play_queueInclude<ExtArgs> | null
    where?: play_queueWhereInput
    orderBy?: play_queueOrderByWithRelationInput | play_queueOrderByWithRelationInput[]
    cursor?: play_queueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Play_queueScalarFieldEnum | Play_queueScalarFieldEnum[]
  }


  /**
   * user.playlist
   */
  export type user$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: playlistInclude<ExtArgs> | null
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    cursor?: playlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * user.state
   */
  export type user$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stateInclude<ExtArgs> | null
    where?: stateWhereInput
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cover: 'cover',
    artist_id: 'artist_id'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const EntityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const JamScalarFieldEnum: {
    id: 'id',
    song_id: 'song_id',
    play: 'play',
    timestampt: 'timestampt'
  };

  export type JamScalarFieldEnum = (typeof JamScalarFieldEnum)[keyof typeof JamScalarFieldEnum]


  export const Jam_play_queueScalarFieldEnum: {
    jam_id: 'jam_id',
    song_id: 'song_id'
  };

  export type Jam_play_queueScalarFieldEnum = (typeof Jam_play_queueScalarFieldEnum)[keyof typeof Jam_play_queueScalarFieldEnum]


  export const Jam_userScalarFieldEnum: {
    jam_id: 'jam_id',
    user_id: 'user_id'
  };

  export type Jam_userScalarFieldEnum = (typeof Jam_userScalarFieldEnum)[keyof typeof Jam_userScalarFieldEnum]


  export const Like_entityScalarFieldEnum: {
    entity_id: 'entity_id',
    like_id: 'like_id',
    user_id: 'user_id'
  };

  export type Like_entityScalarFieldEnum = (typeof Like_entityScalarFieldEnum)[keyof typeof Like_entityScalarFieldEnum]


  export const Play_queueScalarFieldEnum: {
    user_id: 'user_id',
    song_id: 'song_id'
  };

  export type Play_queueScalarFieldEnum = (typeof Play_queueScalarFieldEnum)[keyof typeof Play_queueScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cover: 'cover',
    user_id: 'user_id'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const Playlist_songScalarFieldEnum: {
    playlist_id: 'playlist_id',
    song_id: 'song_id'
  };

  export type Playlist_songScalarFieldEnum = (typeof Playlist_songScalarFieldEnum)[keyof typeof Playlist_songScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    name: 'name',
    file: 'file',
    duration: 'duration',
    artist_id: 'artist_id'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const Song_albumScalarFieldEnum: {
    song_id: 'song_id',
    album_id: 'album_id'
  };

  export type Song_albumScalarFieldEnum = (typeof Song_albumScalarFieldEnum)[keyof typeof Song_albumScalarFieldEnum]


  export const StateScalarFieldEnum: {
    user_id: 'user_id',
    song_id: 'song_id'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role',
    gender: 'gender',
    marketing: 'marketing',
    share_content: 'share_content',
    birthday: 'birthday',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type albumWhereInput = {
    AND?: albumWhereInput | albumWhereInput[]
    OR?: albumWhereInput[]
    NOT?: albumWhereInput | albumWhereInput[]
    id?: IntFilter<"album"> | number
    name?: StringFilter<"album"> | string
    cover?: StringNullableFilter<"album"> | string | null
    artist_id?: IntNullableFilter<"album"> | number | null
    artist?: XOR<ArtistNullableRelationFilter, artistWhereInput> | null
    song_album?: Song_albumListRelationFilter
  }

  export type albumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    artist_id?: SortOrderInput | SortOrder
    artist?: artistOrderByWithRelationInput
    song_album?: song_albumOrderByRelationAggregateInput
  }

  export type albumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: albumWhereInput | albumWhereInput[]
    OR?: albumWhereInput[]
    NOT?: albumWhereInput | albumWhereInput[]
    name?: StringFilter<"album"> | string
    cover?: StringNullableFilter<"album"> | string | null
    artist_id?: IntNullableFilter<"album"> | number | null
    artist?: XOR<ArtistNullableRelationFilter, artistWhereInput> | null
    song_album?: Song_albumListRelationFilter
  }, "id">

  export type albumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    artist_id?: SortOrderInput | SortOrder
    _count?: albumCountOrderByAggregateInput
    _avg?: albumAvgOrderByAggregateInput
    _max?: albumMaxOrderByAggregateInput
    _min?: albumMinOrderByAggregateInput
    _sum?: albumSumOrderByAggregateInput
  }

  export type albumScalarWhereWithAggregatesInput = {
    AND?: albumScalarWhereWithAggregatesInput | albumScalarWhereWithAggregatesInput[]
    OR?: albumScalarWhereWithAggregatesInput[]
    NOT?: albumScalarWhereWithAggregatesInput | albumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"album"> | number
    name?: StringWithAggregatesFilter<"album"> | string
    cover?: StringNullableWithAggregatesFilter<"album"> | string | null
    artist_id?: IntNullableWithAggregatesFilter<"album"> | number | null
  }

  export type artistWhereInput = {
    AND?: artistWhereInput | artistWhereInput[]
    OR?: artistWhereInput[]
    NOT?: artistWhereInput | artistWhereInput[]
    id?: IntFilter<"artist"> | number
    name?: StringFilter<"artist"> | string
    avatar?: StringNullableFilter<"artist"> | string | null
    album?: AlbumListRelationFilter
    song?: SongListRelationFilter
  }

  export type artistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    album?: albumOrderByRelationAggregateInput
    song?: songOrderByRelationAggregateInput
  }

  export type artistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: artistWhereInput | artistWhereInput[]
    OR?: artistWhereInput[]
    NOT?: artistWhereInput | artistWhereInput[]
    avatar?: StringNullableFilter<"artist"> | string | null
    album?: AlbumListRelationFilter
    song?: SongListRelationFilter
  }, "id" | "name">

  export type artistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: artistCountOrderByAggregateInput
    _avg?: artistAvgOrderByAggregateInput
    _max?: artistMaxOrderByAggregateInput
    _min?: artistMinOrderByAggregateInput
    _sum?: artistSumOrderByAggregateInput
  }

  export type artistScalarWhereWithAggregatesInput = {
    AND?: artistScalarWhereWithAggregatesInput | artistScalarWhereWithAggregatesInput[]
    OR?: artistScalarWhereWithAggregatesInput[]
    NOT?: artistScalarWhereWithAggregatesInput | artistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"artist"> | number
    name?: StringWithAggregatesFilter<"artist"> | string
    avatar?: StringNullableWithAggregatesFilter<"artist"> | string | null
  }

  export type entityWhereInput = {
    AND?: entityWhereInput | entityWhereInput[]
    OR?: entityWhereInput[]
    NOT?: entityWhereInput | entityWhereInput[]
    id?: IntFilter<"entity"> | number
    name?: StringFilter<"entity"> | string
    like_entity?: Like_entityListRelationFilter
  }

  export type entityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    like_entity?: like_entityOrderByRelationAggregateInput
  }

  export type entityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: entityWhereInput | entityWhereInput[]
    OR?: entityWhereInput[]
    NOT?: entityWhereInput | entityWhereInput[]
    like_entity?: Like_entityListRelationFilter
  }, "id" | "name">

  export type entityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: entityCountOrderByAggregateInput
    _avg?: entityAvgOrderByAggregateInput
    _max?: entityMaxOrderByAggregateInput
    _min?: entityMinOrderByAggregateInput
    _sum?: entitySumOrderByAggregateInput
  }

  export type entityScalarWhereWithAggregatesInput = {
    AND?: entityScalarWhereWithAggregatesInput | entityScalarWhereWithAggregatesInput[]
    OR?: entityScalarWhereWithAggregatesInput[]
    NOT?: entityScalarWhereWithAggregatesInput | entityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entity"> | number
    name?: StringWithAggregatesFilter<"entity"> | string
  }

  export type jamWhereInput = {
    AND?: jamWhereInput | jamWhereInput[]
    OR?: jamWhereInput[]
    NOT?: jamWhereInput | jamWhereInput[]
    id?: StringFilter<"jam"> | string
    song_id?: IntNullableFilter<"jam"> | number | null
    play?: BoolNullableFilter<"jam"> | boolean | null
    timestampt?: IntNullableFilter<"jam"> | number | null
    song?: XOR<SongNullableRelationFilter, songWhereInput> | null
    jam_play_queue?: Jam_play_queueListRelationFilter
    jam_user?: Jam_userListRelationFilter
  }

  export type jamOrderByWithRelationInput = {
    id?: SortOrder
    song_id?: SortOrderInput | SortOrder
    play?: SortOrderInput | SortOrder
    timestampt?: SortOrderInput | SortOrder
    song?: songOrderByWithRelationInput
    jam_play_queue?: jam_play_queueOrderByRelationAggregateInput
    jam_user?: jam_userOrderByRelationAggregateInput
  }

  export type jamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jamWhereInput | jamWhereInput[]
    OR?: jamWhereInput[]
    NOT?: jamWhereInput | jamWhereInput[]
    song_id?: IntNullableFilter<"jam"> | number | null
    play?: BoolNullableFilter<"jam"> | boolean | null
    timestampt?: IntNullableFilter<"jam"> | number | null
    song?: XOR<SongNullableRelationFilter, songWhereInput> | null
    jam_play_queue?: Jam_play_queueListRelationFilter
    jam_user?: Jam_userListRelationFilter
  }, "id" | "id">

  export type jamOrderByWithAggregationInput = {
    id?: SortOrder
    song_id?: SortOrderInput | SortOrder
    play?: SortOrderInput | SortOrder
    timestampt?: SortOrderInput | SortOrder
    _count?: jamCountOrderByAggregateInput
    _avg?: jamAvgOrderByAggregateInput
    _max?: jamMaxOrderByAggregateInput
    _min?: jamMinOrderByAggregateInput
    _sum?: jamSumOrderByAggregateInput
  }

  export type jamScalarWhereWithAggregatesInput = {
    AND?: jamScalarWhereWithAggregatesInput | jamScalarWhereWithAggregatesInput[]
    OR?: jamScalarWhereWithAggregatesInput[]
    NOT?: jamScalarWhereWithAggregatesInput | jamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"jam"> | string
    song_id?: IntNullableWithAggregatesFilter<"jam"> | number | null
    play?: BoolNullableWithAggregatesFilter<"jam"> | boolean | null
    timestampt?: IntNullableWithAggregatesFilter<"jam"> | number | null
  }

  export type jam_play_queueWhereInput = {
    AND?: jam_play_queueWhereInput | jam_play_queueWhereInput[]
    OR?: jam_play_queueWhereInput[]
    NOT?: jam_play_queueWhereInput | jam_play_queueWhereInput[]
    jam_id?: StringFilter<"jam_play_queue"> | string
    song_id?: IntFilter<"jam_play_queue"> | number
    song?: XOR<SongRelationFilter, songWhereInput>
    jam?: XOR<JamRelationFilter, jamWhereInput>
  }

  export type jam_play_queueOrderByWithRelationInput = {
    jam_id?: SortOrder
    song_id?: SortOrder
    song?: songOrderByWithRelationInput
    jam?: jamOrderByWithRelationInput
  }

  export type jam_play_queueWhereUniqueInput = Prisma.AtLeast<{
    jam_id_song_id?: jam_play_queueJam_idSong_idCompoundUniqueInput
    AND?: jam_play_queueWhereInput | jam_play_queueWhereInput[]
    OR?: jam_play_queueWhereInput[]
    NOT?: jam_play_queueWhereInput | jam_play_queueWhereInput[]
    jam_id?: StringFilter<"jam_play_queue"> | string
    song_id?: IntFilter<"jam_play_queue"> | number
    song?: XOR<SongRelationFilter, songWhereInput>
    jam?: XOR<JamRelationFilter, jamWhereInput>
  }, "jam_id_song_id">

  export type jam_play_queueOrderByWithAggregationInput = {
    jam_id?: SortOrder
    song_id?: SortOrder
    _count?: jam_play_queueCountOrderByAggregateInput
    _avg?: jam_play_queueAvgOrderByAggregateInput
    _max?: jam_play_queueMaxOrderByAggregateInput
    _min?: jam_play_queueMinOrderByAggregateInput
    _sum?: jam_play_queueSumOrderByAggregateInput
  }

  export type jam_play_queueScalarWhereWithAggregatesInput = {
    AND?: jam_play_queueScalarWhereWithAggregatesInput | jam_play_queueScalarWhereWithAggregatesInput[]
    OR?: jam_play_queueScalarWhereWithAggregatesInput[]
    NOT?: jam_play_queueScalarWhereWithAggregatesInput | jam_play_queueScalarWhereWithAggregatesInput[]
    jam_id?: StringWithAggregatesFilter<"jam_play_queue"> | string
    song_id?: IntWithAggregatesFilter<"jam_play_queue"> | number
  }

  export type jam_userWhereInput = {
    AND?: jam_userWhereInput | jam_userWhereInput[]
    OR?: jam_userWhereInput[]
    NOT?: jam_userWhereInput | jam_userWhereInput[]
    jam_id?: StringFilter<"jam_user"> | string
    user_id?: IntFilter<"jam_user"> | number
    jam?: XOR<JamRelationFilter, jamWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type jam_userOrderByWithRelationInput = {
    jam_id?: SortOrder
    user_id?: SortOrder
    jam?: jamOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type jam_userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    jam_id_user_id?: jam_userJam_idUser_idCompoundUniqueInput
    AND?: jam_userWhereInput | jam_userWhereInput[]
    OR?: jam_userWhereInput[]
    NOT?: jam_userWhereInput | jam_userWhereInput[]
    jam_id?: StringFilter<"jam_user"> | string
    jam?: XOR<JamRelationFilter, jamWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "jam_id_user_id" | "user_id">

  export type jam_userOrderByWithAggregationInput = {
    jam_id?: SortOrder
    user_id?: SortOrder
    _count?: jam_userCountOrderByAggregateInput
    _avg?: jam_userAvgOrderByAggregateInput
    _max?: jam_userMaxOrderByAggregateInput
    _min?: jam_userMinOrderByAggregateInput
    _sum?: jam_userSumOrderByAggregateInput
  }

  export type jam_userScalarWhereWithAggregatesInput = {
    AND?: jam_userScalarWhereWithAggregatesInput | jam_userScalarWhereWithAggregatesInput[]
    OR?: jam_userScalarWhereWithAggregatesInput[]
    NOT?: jam_userScalarWhereWithAggregatesInput | jam_userScalarWhereWithAggregatesInput[]
    jam_id?: StringWithAggregatesFilter<"jam_user"> | string
    user_id?: IntWithAggregatesFilter<"jam_user"> | number
  }

  export type like_entityWhereInput = {
    AND?: like_entityWhereInput | like_entityWhereInput[]
    OR?: like_entityWhereInput[]
    NOT?: like_entityWhereInput | like_entityWhereInput[]
    entity_id?: IntFilter<"like_entity"> | number
    like_id?: IntFilter<"like_entity"> | number
    user_id?: IntFilter<"like_entity"> | number
    entity?: XOR<EntityRelationFilter, entityWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type like_entityOrderByWithRelationInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
    entity?: entityOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type like_entityWhereUniqueInput = Prisma.AtLeast<{
    entity_id_like_id_user_id?: like_entityEntity_idLike_idUser_idCompoundUniqueInput
    AND?: like_entityWhereInput | like_entityWhereInput[]
    OR?: like_entityWhereInput[]
    NOT?: like_entityWhereInput | like_entityWhereInput[]
    entity_id?: IntFilter<"like_entity"> | number
    like_id?: IntFilter<"like_entity"> | number
    user_id?: IntFilter<"like_entity"> | number
    entity?: XOR<EntityRelationFilter, entityWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "entity_id_like_id_user_id">

  export type like_entityOrderByWithAggregationInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
    _count?: like_entityCountOrderByAggregateInput
    _avg?: like_entityAvgOrderByAggregateInput
    _max?: like_entityMaxOrderByAggregateInput
    _min?: like_entityMinOrderByAggregateInput
    _sum?: like_entitySumOrderByAggregateInput
  }

  export type like_entityScalarWhereWithAggregatesInput = {
    AND?: like_entityScalarWhereWithAggregatesInput | like_entityScalarWhereWithAggregatesInput[]
    OR?: like_entityScalarWhereWithAggregatesInput[]
    NOT?: like_entityScalarWhereWithAggregatesInput | like_entityScalarWhereWithAggregatesInput[]
    entity_id?: IntWithAggregatesFilter<"like_entity"> | number
    like_id?: IntWithAggregatesFilter<"like_entity"> | number
    user_id?: IntWithAggregatesFilter<"like_entity"> | number
  }

  export type play_queueWhereInput = {
    AND?: play_queueWhereInput | play_queueWhereInput[]
    OR?: play_queueWhereInput[]
    NOT?: play_queueWhereInput | play_queueWhereInput[]
    user_id?: IntFilter<"play_queue"> | number
    song_id?: IntFilter<"play_queue"> | number
    song?: XOR<SongRelationFilter, songWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type play_queueOrderByWithRelationInput = {
    user_id?: SortOrder
    song_id?: SortOrder
    song?: songOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type play_queueWhereUniqueInput = Prisma.AtLeast<{
    user_id_song_id?: play_queueUser_idSong_idCompoundUniqueInput
    AND?: play_queueWhereInput | play_queueWhereInput[]
    OR?: play_queueWhereInput[]
    NOT?: play_queueWhereInput | play_queueWhereInput[]
    user_id?: IntFilter<"play_queue"> | number
    song_id?: IntFilter<"play_queue"> | number
    song?: XOR<SongRelationFilter, songWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "user_id_song_id">

  export type play_queueOrderByWithAggregationInput = {
    user_id?: SortOrder
    song_id?: SortOrder
    _count?: play_queueCountOrderByAggregateInput
    _avg?: play_queueAvgOrderByAggregateInput
    _max?: play_queueMaxOrderByAggregateInput
    _min?: play_queueMinOrderByAggregateInput
    _sum?: play_queueSumOrderByAggregateInput
  }

  export type play_queueScalarWhereWithAggregatesInput = {
    AND?: play_queueScalarWhereWithAggregatesInput | play_queueScalarWhereWithAggregatesInput[]
    OR?: play_queueScalarWhereWithAggregatesInput[]
    NOT?: play_queueScalarWhereWithAggregatesInput | play_queueScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"play_queue"> | number
    song_id?: IntWithAggregatesFilter<"play_queue"> | number
  }

  export type playlistWhereInput = {
    AND?: playlistWhereInput | playlistWhereInput[]
    OR?: playlistWhereInput[]
    NOT?: playlistWhereInput | playlistWhereInput[]
    id?: IntFilter<"playlist"> | number
    name?: StringFilter<"playlist"> | string
    cover?: StringNullableFilter<"playlist"> | string | null
    user_id?: IntFilter<"playlist"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    playlist_song?: Playlist_songListRelationFilter
  }

  export type playlistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    playlist_song?: playlist_songOrderByRelationAggregateInput
  }

  export type playlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playlistWhereInput | playlistWhereInput[]
    OR?: playlistWhereInput[]
    NOT?: playlistWhereInput | playlistWhereInput[]
    name?: StringFilter<"playlist"> | string
    cover?: StringNullableFilter<"playlist"> | string | null
    user_id?: IntFilter<"playlist"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    playlist_song?: Playlist_songListRelationFilter
  }, "id">

  export type playlistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: playlistCountOrderByAggregateInput
    _avg?: playlistAvgOrderByAggregateInput
    _max?: playlistMaxOrderByAggregateInput
    _min?: playlistMinOrderByAggregateInput
    _sum?: playlistSumOrderByAggregateInput
  }

  export type playlistScalarWhereWithAggregatesInput = {
    AND?: playlistScalarWhereWithAggregatesInput | playlistScalarWhereWithAggregatesInput[]
    OR?: playlistScalarWhereWithAggregatesInput[]
    NOT?: playlistScalarWhereWithAggregatesInput | playlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playlist"> | number
    name?: StringWithAggregatesFilter<"playlist"> | string
    cover?: StringNullableWithAggregatesFilter<"playlist"> | string | null
    user_id?: IntWithAggregatesFilter<"playlist"> | number
  }

  export type playlist_songWhereInput = {
    AND?: playlist_songWhereInput | playlist_songWhereInput[]
    OR?: playlist_songWhereInput[]
    NOT?: playlist_songWhereInput | playlist_songWhereInput[]
    playlist_id?: IntFilter<"playlist_song"> | number
    song_id?: IntFilter<"playlist_song"> | number
    playlist?: XOR<PlaylistRelationFilter, playlistWhereInput>
    song?: XOR<SongRelationFilter, songWhereInput>
  }

  export type playlist_songOrderByWithRelationInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
    playlist?: playlistOrderByWithRelationInput
    song?: songOrderByWithRelationInput
  }

  export type playlist_songWhereUniqueInput = Prisma.AtLeast<{
    playlist_id_song_id?: playlist_songPlaylist_idSong_idCompoundUniqueInput
    AND?: playlist_songWhereInput | playlist_songWhereInput[]
    OR?: playlist_songWhereInput[]
    NOT?: playlist_songWhereInput | playlist_songWhereInput[]
    playlist_id?: IntFilter<"playlist_song"> | number
    song_id?: IntFilter<"playlist_song"> | number
    playlist?: XOR<PlaylistRelationFilter, playlistWhereInput>
    song?: XOR<SongRelationFilter, songWhereInput>
  }, "playlist_id_song_id">

  export type playlist_songOrderByWithAggregationInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
    _count?: playlist_songCountOrderByAggregateInput
    _avg?: playlist_songAvgOrderByAggregateInput
    _max?: playlist_songMaxOrderByAggregateInput
    _min?: playlist_songMinOrderByAggregateInput
    _sum?: playlist_songSumOrderByAggregateInput
  }

  export type playlist_songScalarWhereWithAggregatesInput = {
    AND?: playlist_songScalarWhereWithAggregatesInput | playlist_songScalarWhereWithAggregatesInput[]
    OR?: playlist_songScalarWhereWithAggregatesInput[]
    NOT?: playlist_songScalarWhereWithAggregatesInput | playlist_songScalarWhereWithAggregatesInput[]
    playlist_id?: IntWithAggregatesFilter<"playlist_song"> | number
    song_id?: IntWithAggregatesFilter<"playlist_song"> | number
  }

  export type songWhereInput = {
    AND?: songWhereInput | songWhereInput[]
    OR?: songWhereInput[]
    NOT?: songWhereInput | songWhereInput[]
    id?: IntFilter<"song"> | number
    name?: StringFilter<"song"> | string
    file?: StringFilter<"song"> | string
    duration?: IntFilter<"song"> | number
    artist_id?: IntFilter<"song"> | number
    jam?: JamListRelationFilter
    jam_play_queue?: Jam_play_queueListRelationFilter
    play_queue?: Play_queueListRelationFilter
    playlist_song?: Playlist_songListRelationFilter
    song_album?: Song_albumListRelationFilter
    state?: StateListRelationFilter
    artist?: XOR<ArtistRelationFilter, artistWhereInput>
  }

  export type songOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
    jam?: jamOrderByRelationAggregateInput
    jam_play_queue?: jam_play_queueOrderByRelationAggregateInput
    play_queue?: play_queueOrderByRelationAggregateInput
    playlist_song?: playlist_songOrderByRelationAggregateInput
    song_album?: song_albumOrderByRelationAggregateInput
    state?: stateOrderByRelationAggregateInput
    artist?: artistOrderByWithRelationInput
  }

  export type songWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: songWhereInput | songWhereInput[]
    OR?: songWhereInput[]
    NOT?: songWhereInput | songWhereInput[]
    name?: StringFilter<"song"> | string
    file?: StringFilter<"song"> | string
    duration?: IntFilter<"song"> | number
    artist_id?: IntFilter<"song"> | number
    jam?: JamListRelationFilter
    jam_play_queue?: Jam_play_queueListRelationFilter
    play_queue?: Play_queueListRelationFilter
    playlist_song?: Playlist_songListRelationFilter
    song_album?: Song_albumListRelationFilter
    state?: StateListRelationFilter
    artist?: XOR<ArtistRelationFilter, artistWhereInput>
  }, "id">

  export type songOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
    _count?: songCountOrderByAggregateInput
    _avg?: songAvgOrderByAggregateInput
    _max?: songMaxOrderByAggregateInput
    _min?: songMinOrderByAggregateInput
    _sum?: songSumOrderByAggregateInput
  }

  export type songScalarWhereWithAggregatesInput = {
    AND?: songScalarWhereWithAggregatesInput | songScalarWhereWithAggregatesInput[]
    OR?: songScalarWhereWithAggregatesInput[]
    NOT?: songScalarWhereWithAggregatesInput | songScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"song"> | number
    name?: StringWithAggregatesFilter<"song"> | string
    file?: StringWithAggregatesFilter<"song"> | string
    duration?: IntWithAggregatesFilter<"song"> | number
    artist_id?: IntWithAggregatesFilter<"song"> | number
  }

  export type song_albumWhereInput = {
    AND?: song_albumWhereInput | song_albumWhereInput[]
    OR?: song_albumWhereInput[]
    NOT?: song_albumWhereInput | song_albumWhereInput[]
    song_id?: IntFilter<"song_album"> | number
    album_id?: IntFilter<"song_album"> | number
    album?: XOR<AlbumRelationFilter, albumWhereInput>
    song?: XOR<SongRelationFilter, songWhereInput>
  }

  export type song_albumOrderByWithRelationInput = {
    song_id?: SortOrder
    album_id?: SortOrder
    album?: albumOrderByWithRelationInput
    song?: songOrderByWithRelationInput
  }

  export type song_albumWhereUniqueInput = Prisma.AtLeast<{
    song_id_album_id?: song_albumSong_idAlbum_idCompoundUniqueInput
    AND?: song_albumWhereInput | song_albumWhereInput[]
    OR?: song_albumWhereInput[]
    NOT?: song_albumWhereInput | song_albumWhereInput[]
    song_id?: IntFilter<"song_album"> | number
    album_id?: IntFilter<"song_album"> | number
    album?: XOR<AlbumRelationFilter, albumWhereInput>
    song?: XOR<SongRelationFilter, songWhereInput>
  }, "song_id_album_id">

  export type song_albumOrderByWithAggregationInput = {
    song_id?: SortOrder
    album_id?: SortOrder
    _count?: song_albumCountOrderByAggregateInput
    _avg?: song_albumAvgOrderByAggregateInput
    _max?: song_albumMaxOrderByAggregateInput
    _min?: song_albumMinOrderByAggregateInput
    _sum?: song_albumSumOrderByAggregateInput
  }

  export type song_albumScalarWhereWithAggregatesInput = {
    AND?: song_albumScalarWhereWithAggregatesInput | song_albumScalarWhereWithAggregatesInput[]
    OR?: song_albumScalarWhereWithAggregatesInput[]
    NOT?: song_albumScalarWhereWithAggregatesInput | song_albumScalarWhereWithAggregatesInput[]
    song_id?: IntWithAggregatesFilter<"song_album"> | number
    album_id?: IntWithAggregatesFilter<"song_album"> | number
  }

  export type stateWhereInput = {
    AND?: stateWhereInput | stateWhereInput[]
    OR?: stateWhereInput[]
    NOT?: stateWhereInput | stateWhereInput[]
    user_id?: IntFilter<"state"> | number
    song_id?: IntNullableFilter<"state"> | number | null
    user?: XOR<UserRelationFilter, userWhereInput>
    song?: XOR<SongNullableRelationFilter, songWhereInput> | null
  }

  export type stateOrderByWithRelationInput = {
    user_id?: SortOrder
    song_id?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    song?: songOrderByWithRelationInput
  }

  export type stateWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: stateWhereInput | stateWhereInput[]
    OR?: stateWhereInput[]
    NOT?: stateWhereInput | stateWhereInput[]
    song_id?: IntNullableFilter<"state"> | number | null
    user?: XOR<UserRelationFilter, userWhereInput>
    song?: XOR<SongNullableRelationFilter, songWhereInput> | null
  }, "user_id">

  export type stateOrderByWithAggregationInput = {
    user_id?: SortOrder
    song_id?: SortOrderInput | SortOrder
    _count?: stateCountOrderByAggregateInput
    _avg?: stateAvgOrderByAggregateInput
    _max?: stateMaxOrderByAggregateInput
    _min?: stateMinOrderByAggregateInput
    _sum?: stateSumOrderByAggregateInput
  }

  export type stateScalarWhereWithAggregatesInput = {
    AND?: stateScalarWhereWithAggregatesInput | stateScalarWhereWithAggregatesInput[]
    OR?: stateScalarWhereWithAggregatesInput[]
    NOT?: stateScalarWhereWithAggregatesInput | stateScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"state"> | number
    song_id?: IntNullableWithAggregatesFilter<"state"> | number | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    role?: StringNullableFilter<"user"> | string | null
    gender?: StringFilter<"user"> | string
    marketing?: BoolNullableFilter<"user"> | boolean | null
    share_content?: BoolNullableFilter<"user"> | boolean | null
    birthday?: DateTimeFilter<"user"> | Date | string
    avatar?: StringNullableFilter<"user"> | string | null
    jam_user?: XOR<Jam_userNullableRelationFilter, jam_userWhereInput> | null
    like_entity?: Like_entityListRelationFilter
    play_queue?: Play_queueListRelationFilter
    playlist?: PlaylistListRelationFilter
    state?: XOR<StateNullableRelationFilter, stateWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    gender?: SortOrder
    marketing?: SortOrderInput | SortOrder
    share_content?: SortOrderInput | SortOrder
    birthday?: SortOrder
    avatar?: SortOrderInput | SortOrder
    jam_user?: jam_userOrderByWithRelationInput
    like_entity?: like_entityOrderByRelationAggregateInput
    play_queue?: play_queueOrderByRelationAggregateInput
    playlist?: playlistOrderByRelationAggregateInput
    state?: stateOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username_email?: userUsernameEmailCompoundUniqueInput
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    role?: StringNullableFilter<"user"> | string | null
    gender?: StringFilter<"user"> | string
    marketing?: BoolNullableFilter<"user"> | boolean | null
    share_content?: BoolNullableFilter<"user"> | boolean | null
    birthday?: DateTimeFilter<"user"> | Date | string
    avatar?: StringNullableFilter<"user"> | string | null
    jam_user?: XOR<Jam_userNullableRelationFilter, jam_userWhereInput> | null
    like_entity?: Like_entityListRelationFilter
    play_queue?: Play_queueListRelationFilter
    playlist?: PlaylistListRelationFilter
    state?: XOR<StateNullableRelationFilter, stateWhereInput> | null
  }, "id" | "username_email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    gender?: SortOrder
    marketing?: SortOrderInput | SortOrder
    share_content?: SortOrderInput | SortOrder
    birthday?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    role?: StringNullableWithAggregatesFilter<"user"> | string | null
    gender?: StringWithAggregatesFilter<"user"> | string
    marketing?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    share_content?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    birthday?: DateTimeWithAggregatesFilter<"user"> | Date | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type albumCreateInput = {
    name: string
    cover?: string | null
    artist?: artistCreateNestedOneWithoutAlbumInput
    song_album?: song_albumCreateNestedManyWithoutAlbumInput
  }

  export type albumUncheckedCreateInput = {
    id?: number
    name: string
    cover?: string | null
    artist_id?: number | null
    song_album?: song_albumUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type albumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: artistUpdateOneWithoutAlbumNestedInput
    song_album?: song_albumUpdateManyWithoutAlbumNestedInput
  }

  export type albumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artist_id?: NullableIntFieldUpdateOperationsInput | number | null
    song_album?: song_albumUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type albumCreateManyInput = {
    id?: number
    name: string
    cover?: string | null
    artist_id?: number | null
  }

  export type albumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type albumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artist_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type artistCreateInput = {
    name: string
    avatar?: string | null
    album?: albumCreateNestedManyWithoutArtistInput
    song?: songCreateNestedManyWithoutArtistInput
  }

  export type artistUncheckedCreateInput = {
    id?: number
    name: string
    avatar?: string | null
    album?: albumUncheckedCreateNestedManyWithoutArtistInput
    song?: songUncheckedCreateNestedManyWithoutArtistInput
  }

  export type artistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    album?: albumUpdateManyWithoutArtistNestedInput
    song?: songUpdateManyWithoutArtistNestedInput
  }

  export type artistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    album?: albumUncheckedUpdateManyWithoutArtistNestedInput
    song?: songUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type artistCreateManyInput = {
    id?: number
    name: string
    avatar?: string | null
  }

  export type artistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entityCreateInput = {
    name: string
    like_entity?: like_entityCreateNestedManyWithoutEntityInput
  }

  export type entityUncheckedCreateInput = {
    id?: number
    name: string
    like_entity?: like_entityUncheckedCreateNestedManyWithoutEntityInput
  }

  export type entityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    like_entity?: like_entityUpdateManyWithoutEntityNestedInput
  }

  export type entityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    like_entity?: like_entityUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type entityCreateManyInput = {
    id?: number
    name: string
  }

  export type entityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type entityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type jamCreateInput = {
    id: string
    play?: boolean | null
    timestampt?: number | null
    song?: songCreateNestedOneWithoutJamInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutJamInput
    jam_user?: jam_userCreateNestedManyWithoutJamInput
  }

  export type jamUncheckedCreateInput = {
    id: string
    song_id?: number | null
    play?: boolean | null
    timestampt?: number | null
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutJamInput
    jam_user?: jam_userUncheckedCreateNestedManyWithoutJamInput
  }

  export type jamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    song?: songUpdateOneWithoutJamNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutJamNestedInput
    jam_user?: jam_userUpdateManyWithoutJamNestedInput
  }

  export type jamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutJamNestedInput
    jam_user?: jam_userUncheckedUpdateManyWithoutJamNestedInput
  }

  export type jamCreateManyInput = {
    id: string
    song_id?: number | null
    play?: boolean | null
    timestampt?: number | null
  }

  export type jamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jam_play_queueCreateInput = {
    song: songCreateNestedOneWithoutJam_play_queueInput
    jam: jamCreateNestedOneWithoutJam_play_queueInput
  }

  export type jam_play_queueUncheckedCreateInput = {
    jam_id: string
    song_id: number
  }

  export type jam_play_queueUpdateInput = {
    song?: songUpdateOneRequiredWithoutJam_play_queueNestedInput
    jam?: jamUpdateOneRequiredWithoutJam_play_queueNestedInput
  }

  export type jam_play_queueUncheckedUpdateInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_play_queueCreateManyInput = {
    jam_id: string
    song_id: number
  }

  export type jam_play_queueUpdateManyMutationInput = {

  }

  export type jam_play_queueUncheckedUpdateManyInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_userCreateInput = {
    jam: jamCreateNestedOneWithoutJam_userInput
    user: userCreateNestedOneWithoutJam_userInput
  }

  export type jam_userUncheckedCreateInput = {
    jam_id: string
    user_id: number
  }

  export type jam_userUpdateInput = {
    jam?: jamUpdateOneRequiredWithoutJam_userNestedInput
    user?: userUpdateOneRequiredWithoutJam_userNestedInput
  }

  export type jam_userUncheckedUpdateInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_userCreateManyInput = {
    jam_id: string
    user_id: number
  }

  export type jam_userUpdateManyMutationInput = {

  }

  export type jam_userUncheckedUpdateManyInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityCreateInput = {
    like_id: number
    entity: entityCreateNestedOneWithoutLike_entityInput
    user: userCreateNestedOneWithoutLike_entityInput
  }

  export type like_entityUncheckedCreateInput = {
    entity_id: number
    like_id: number
    user_id: number
  }

  export type like_entityUpdateInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    entity?: entityUpdateOneRequiredWithoutLike_entityNestedInput
    user?: userUpdateOneRequiredWithoutLike_entityNestedInput
  }

  export type like_entityUncheckedUpdateInput = {
    entity_id?: IntFieldUpdateOperationsInput | number
    like_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityCreateManyInput = {
    entity_id: number
    like_id: number
    user_id: number
  }

  export type like_entityUpdateManyMutationInput = {
    like_id?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityUncheckedUpdateManyInput = {
    entity_id?: IntFieldUpdateOperationsInput | number
    like_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type play_queueCreateInput = {
    song: songCreateNestedOneWithoutPlay_queueInput
    user: userCreateNestedOneWithoutPlay_queueInput
  }

  export type play_queueUncheckedCreateInput = {
    user_id: number
    song_id: number
  }

  export type play_queueUpdateInput = {
    song?: songUpdateOneRequiredWithoutPlay_queueNestedInput
    user?: userUpdateOneRequiredWithoutPlay_queueNestedInput
  }

  export type play_queueUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type play_queueCreateManyInput = {
    user_id: number
    song_id: number
  }

  export type play_queueUpdateManyMutationInput = {

  }

  export type play_queueUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlistCreateInput = {
    name: string
    cover?: string | null
    user: userCreateNestedOneWithoutPlaylistInput
    playlist_song?: playlist_songCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUncheckedCreateInput = {
    id?: number
    name: string
    cover?: string | null
    user_id: number
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutPlaylistNestedInput
    playlist_song?: playlist_songUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    playlist_song?: playlist_songUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistCreateManyInput = {
    id?: number
    name: string
    cover?: string | null
    user_id: number
  }

  export type playlistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_songCreateInput = {
    playlist: playlistCreateNestedOneWithoutPlaylist_songInput
    song: songCreateNestedOneWithoutPlaylist_songInput
  }

  export type playlist_songUncheckedCreateInput = {
    playlist_id: number
    song_id: number
  }

  export type playlist_songUpdateInput = {
    playlist?: playlistUpdateOneRequiredWithoutPlaylist_songNestedInput
    song?: songUpdateOneRequiredWithoutPlaylist_songNestedInput
  }

  export type playlist_songUncheckedUpdateInput = {
    playlist_id?: IntFieldUpdateOperationsInput | number
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_songCreateManyInput = {
    playlist_id: number
    song_id: number
  }

  export type playlist_songUpdateManyMutationInput = {

  }

  export type playlist_songUncheckedUpdateManyInput = {
    playlist_id?: IntFieldUpdateOperationsInput | number
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type songCreateInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type songCreateManyInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
  }

  export type songUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type songUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
  }

  export type song_albumCreateInput = {
    album: albumCreateNestedOneWithoutSong_albumInput
    song: songCreateNestedOneWithoutSong_albumInput
  }

  export type song_albumUncheckedCreateInput = {
    song_id: number
    album_id: number
  }

  export type song_albumUpdateInput = {
    album?: albumUpdateOneRequiredWithoutSong_albumNestedInput
    song?: songUpdateOneRequiredWithoutSong_albumNestedInput
  }

  export type song_albumUncheckedUpdateInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    album_id?: IntFieldUpdateOperationsInput | number
  }

  export type song_albumCreateManyInput = {
    song_id: number
    album_id: number
  }

  export type song_albumUpdateManyMutationInput = {

  }

  export type song_albumUncheckedUpdateManyInput = {
    song_id?: IntFieldUpdateOperationsInput | number
    album_id?: IntFieldUpdateOperationsInput | number
  }

  export type stateCreateInput = {
    user: userCreateNestedOneWithoutStateInput
    song?: songCreateNestedOneWithoutStateInput
  }

  export type stateUncheckedCreateInput = {
    user_id: number
    song_id?: number | null
  }

  export type stateUpdateInput = {
    user?: userUpdateOneRequiredWithoutStateNestedInput
    song?: songUpdateOneWithoutStateNestedInput
  }

  export type stateUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stateCreateManyInput = {
    user_id: number
    song_id?: number | null
  }

  export type stateUpdateManyMutationInput = {

  }

  export type stateUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateInput = {
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userCreateNestedOneWithoutUserInput
    like_entity?: like_entityCreateNestedManyWithoutUserInput
    play_queue?: play_queueCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    state?: stateCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userUncheckedCreateNestedOneWithoutUserInput
    like_entity?: like_entityUncheckedCreateNestedManyWithoutUserInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    state?: stateUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    state?: stateUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUncheckedUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUncheckedUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    state?: stateUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArtistNullableRelationFilter = {
    is?: artistWhereInput | null
    isNot?: artistWhereInput | null
  }

  export type Song_albumListRelationFilter = {
    every?: song_albumWhereInput
    some?: song_albumWhereInput
    none?: song_albumWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type song_albumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type albumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    artist_id?: SortOrder
  }

  export type albumAvgOrderByAggregateInput = {
    id?: SortOrder
    artist_id?: SortOrder
  }

  export type albumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    artist_id?: SortOrder
  }

  export type albumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    artist_id?: SortOrder
  }

  export type albumSumOrderByAggregateInput = {
    id?: SortOrder
    artist_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AlbumListRelationFilter = {
    every?: albumWhereInput
    some?: albumWhereInput
    none?: albumWhereInput
  }

  export type SongListRelationFilter = {
    every?: songWhereInput
    some?: songWhereInput
    none?: songWhereInput
  }

  export type albumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type songOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type artistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type artistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type artistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type artistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type artistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Like_entityListRelationFilter = {
    every?: like_entityWhereInput
    some?: like_entityWhereInput
    none?: like_entityWhereInput
  }

  export type like_entityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type entityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type entityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type entityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type entitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SongNullableRelationFilter = {
    is?: songWhereInput | null
    isNot?: songWhereInput | null
  }

  export type Jam_play_queueListRelationFilter = {
    every?: jam_play_queueWhereInput
    some?: jam_play_queueWhereInput
    none?: jam_play_queueWhereInput
  }

  export type Jam_userListRelationFilter = {
    every?: jam_userWhereInput
    some?: jam_userWhereInput
    none?: jam_userWhereInput
  }

  export type jam_play_queueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jam_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jamCountOrderByAggregateInput = {
    id?: SortOrder
    song_id?: SortOrder
    play?: SortOrder
    timestampt?: SortOrder
  }

  export type jamAvgOrderByAggregateInput = {
    song_id?: SortOrder
    timestampt?: SortOrder
  }

  export type jamMaxOrderByAggregateInput = {
    id?: SortOrder
    song_id?: SortOrder
    play?: SortOrder
    timestampt?: SortOrder
  }

  export type jamMinOrderByAggregateInput = {
    id?: SortOrder
    song_id?: SortOrder
    play?: SortOrder
    timestampt?: SortOrder
  }

  export type jamSumOrderByAggregateInput = {
    song_id?: SortOrder
    timestampt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SongRelationFilter = {
    is?: songWhereInput
    isNot?: songWhereInput
  }

  export type JamRelationFilter = {
    is?: jamWhereInput
    isNot?: jamWhereInput
  }

  export type jam_play_queueJam_idSong_idCompoundUniqueInput = {
    jam_id: string
    song_id: number
  }

  export type jam_play_queueCountOrderByAggregateInput = {
    jam_id?: SortOrder
    song_id?: SortOrder
  }

  export type jam_play_queueAvgOrderByAggregateInput = {
    song_id?: SortOrder
  }

  export type jam_play_queueMaxOrderByAggregateInput = {
    jam_id?: SortOrder
    song_id?: SortOrder
  }

  export type jam_play_queueMinOrderByAggregateInput = {
    jam_id?: SortOrder
    song_id?: SortOrder
  }

  export type jam_play_queueSumOrderByAggregateInput = {
    song_id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type jam_userJam_idUser_idCompoundUniqueInput = {
    jam_id: string
    user_id: number
  }

  export type jam_userCountOrderByAggregateInput = {
    jam_id?: SortOrder
    user_id?: SortOrder
  }

  export type jam_userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type jam_userMaxOrderByAggregateInput = {
    jam_id?: SortOrder
    user_id?: SortOrder
  }

  export type jam_userMinOrderByAggregateInput = {
    jam_id?: SortOrder
    user_id?: SortOrder
  }

  export type jam_userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type EntityRelationFilter = {
    is?: entityWhereInput
    isNot?: entityWhereInput
  }

  export type like_entityEntity_idLike_idUser_idCompoundUniqueInput = {
    entity_id: number
    like_id: number
    user_id: number
  }

  export type like_entityCountOrderByAggregateInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
  }

  export type like_entityAvgOrderByAggregateInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
  }

  export type like_entityMaxOrderByAggregateInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
  }

  export type like_entityMinOrderByAggregateInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
  }

  export type like_entitySumOrderByAggregateInput = {
    entity_id?: SortOrder
    like_id?: SortOrder
    user_id?: SortOrder
  }

  export type play_queueUser_idSong_idCompoundUniqueInput = {
    user_id: number
    song_id: number
  }

  export type play_queueCountOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type play_queueAvgOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type play_queueMaxOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type play_queueMinOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type play_queueSumOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type Playlist_songListRelationFilter = {
    every?: playlist_songWhereInput
    some?: playlist_songWhereInput
    none?: playlist_songWhereInput
  }

  export type playlist_songOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playlistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    user_id?: SortOrder
  }

  export type playlistAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type playlistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    user_id?: SortOrder
  }

  export type playlistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    user_id?: SortOrder
  }

  export type playlistSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type PlaylistRelationFilter = {
    is?: playlistWhereInput
    isNot?: playlistWhereInput
  }

  export type playlist_songPlaylist_idSong_idCompoundUniqueInput = {
    playlist_id: number
    song_id: number
  }

  export type playlist_songCountOrderByAggregateInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songAvgOrderByAggregateInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songMaxOrderByAggregateInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songMinOrderByAggregateInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type playlist_songSumOrderByAggregateInput = {
    playlist_id?: SortOrder
    song_id?: SortOrder
  }

  export type JamListRelationFilter = {
    every?: jamWhereInput
    some?: jamWhereInput
    none?: jamWhereInput
  }

  export type Play_queueListRelationFilter = {
    every?: play_queueWhereInput
    some?: play_queueWhereInput
    none?: play_queueWhereInput
  }

  export type StateListRelationFilter = {
    every?: stateWhereInput
    some?: stateWhereInput
    none?: stateWhereInput
  }

  export type ArtistRelationFilter = {
    is?: artistWhereInput
    isNot?: artistWhereInput
  }

  export type jamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type play_queueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type songCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
  }

  export type songAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
  }

  export type songMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
  }

  export type songMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
  }

  export type songSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    artist_id?: SortOrder
  }

  export type AlbumRelationFilter = {
    is?: albumWhereInput
    isNot?: albumWhereInput
  }

  export type song_albumSong_idAlbum_idCompoundUniqueInput = {
    song_id: number
    album_id: number
  }

  export type song_albumCountOrderByAggregateInput = {
    song_id?: SortOrder
    album_id?: SortOrder
  }

  export type song_albumAvgOrderByAggregateInput = {
    song_id?: SortOrder
    album_id?: SortOrder
  }

  export type song_albumMaxOrderByAggregateInput = {
    song_id?: SortOrder
    album_id?: SortOrder
  }

  export type song_albumMinOrderByAggregateInput = {
    song_id?: SortOrder
    album_id?: SortOrder
  }

  export type song_albumSumOrderByAggregateInput = {
    song_id?: SortOrder
    album_id?: SortOrder
  }

  export type stateCountOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type stateAvgOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type stateMaxOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type stateMinOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type stateSumOrderByAggregateInput = {
    user_id?: SortOrder
    song_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Jam_userNullableRelationFilter = {
    is?: jam_userWhereInput | null
    isNot?: jam_userWhereInput | null
  }

  export type PlaylistListRelationFilter = {
    every?: playlistWhereInput
    some?: playlistWhereInput
    none?: playlistWhereInput
  }

  export type StateNullableRelationFilter = {
    is?: stateWhereInput | null
    isNot?: stateWhereInput | null
  }

  export type playlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userUsernameEmailCompoundUniqueInput = {
    username: string
    email: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    marketing?: SortOrder
    share_content?: SortOrder
    birthday?: SortOrder
    avatar?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    marketing?: SortOrder
    share_content?: SortOrder
    birthday?: SortOrder
    avatar?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    marketing?: SortOrder
    share_content?: SortOrder
    birthday?: SortOrder
    avatar?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type artistCreateNestedOneWithoutAlbumInput = {
    create?: XOR<artistCreateWithoutAlbumInput, artistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: artistCreateOrConnectWithoutAlbumInput
    connect?: artistWhereUniqueInput
  }

  export type song_albumCreateNestedManyWithoutAlbumInput = {
    create?: XOR<song_albumCreateWithoutAlbumInput, song_albumUncheckedCreateWithoutAlbumInput> | song_albumCreateWithoutAlbumInput[] | song_albumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutAlbumInput | song_albumCreateOrConnectWithoutAlbumInput[]
    createMany?: song_albumCreateManyAlbumInputEnvelope
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
  }

  export type song_albumUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<song_albumCreateWithoutAlbumInput, song_albumUncheckedCreateWithoutAlbumInput> | song_albumCreateWithoutAlbumInput[] | song_albumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutAlbumInput | song_albumCreateOrConnectWithoutAlbumInput[]
    createMany?: song_albumCreateManyAlbumInputEnvelope
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type artistUpdateOneWithoutAlbumNestedInput = {
    create?: XOR<artistCreateWithoutAlbumInput, artistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: artistCreateOrConnectWithoutAlbumInput
    upsert?: artistUpsertWithoutAlbumInput
    disconnect?: artistWhereInput | boolean
    delete?: artistWhereInput | boolean
    connect?: artistWhereUniqueInput
    update?: XOR<XOR<artistUpdateToOneWithWhereWithoutAlbumInput, artistUpdateWithoutAlbumInput>, artistUncheckedUpdateWithoutAlbumInput>
  }

  export type song_albumUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<song_albumCreateWithoutAlbumInput, song_albumUncheckedCreateWithoutAlbumInput> | song_albumCreateWithoutAlbumInput[] | song_albumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutAlbumInput | song_albumCreateOrConnectWithoutAlbumInput[]
    upsert?: song_albumUpsertWithWhereUniqueWithoutAlbumInput | song_albumUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: song_albumCreateManyAlbumInputEnvelope
    set?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    disconnect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    delete?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    update?: song_albumUpdateWithWhereUniqueWithoutAlbumInput | song_albumUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: song_albumUpdateManyWithWhereWithoutAlbumInput | song_albumUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: song_albumScalarWhereInput | song_albumScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type song_albumUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<song_albumCreateWithoutAlbumInput, song_albumUncheckedCreateWithoutAlbumInput> | song_albumCreateWithoutAlbumInput[] | song_albumUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutAlbumInput | song_albumCreateOrConnectWithoutAlbumInput[]
    upsert?: song_albumUpsertWithWhereUniqueWithoutAlbumInput | song_albumUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: song_albumCreateManyAlbumInputEnvelope
    set?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    disconnect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    delete?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    update?: song_albumUpdateWithWhereUniqueWithoutAlbumInput | song_albumUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: song_albumUpdateManyWithWhereWithoutAlbumInput | song_albumUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: song_albumScalarWhereInput | song_albumScalarWhereInput[]
  }

  export type albumCreateNestedManyWithoutArtistInput = {
    create?: XOR<albumCreateWithoutArtistInput, albumUncheckedCreateWithoutArtistInput> | albumCreateWithoutArtistInput[] | albumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: albumCreateOrConnectWithoutArtistInput | albumCreateOrConnectWithoutArtistInput[]
    createMany?: albumCreateManyArtistInputEnvelope
    connect?: albumWhereUniqueInput | albumWhereUniqueInput[]
  }

  export type songCreateNestedManyWithoutArtistInput = {
    create?: XOR<songCreateWithoutArtistInput, songUncheckedCreateWithoutArtistInput> | songCreateWithoutArtistInput[] | songUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: songCreateOrConnectWithoutArtistInput | songCreateOrConnectWithoutArtistInput[]
    createMany?: songCreateManyArtistInputEnvelope
    connect?: songWhereUniqueInput | songWhereUniqueInput[]
  }

  export type albumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<albumCreateWithoutArtistInput, albumUncheckedCreateWithoutArtistInput> | albumCreateWithoutArtistInput[] | albumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: albumCreateOrConnectWithoutArtistInput | albumCreateOrConnectWithoutArtistInput[]
    createMany?: albumCreateManyArtistInputEnvelope
    connect?: albumWhereUniqueInput | albumWhereUniqueInput[]
  }

  export type songUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<songCreateWithoutArtistInput, songUncheckedCreateWithoutArtistInput> | songCreateWithoutArtistInput[] | songUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: songCreateOrConnectWithoutArtistInput | songCreateOrConnectWithoutArtistInput[]
    createMany?: songCreateManyArtistInputEnvelope
    connect?: songWhereUniqueInput | songWhereUniqueInput[]
  }

  export type albumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<albumCreateWithoutArtistInput, albumUncheckedCreateWithoutArtistInput> | albumCreateWithoutArtistInput[] | albumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: albumCreateOrConnectWithoutArtistInput | albumCreateOrConnectWithoutArtistInput[]
    upsert?: albumUpsertWithWhereUniqueWithoutArtistInput | albumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: albumCreateManyArtistInputEnvelope
    set?: albumWhereUniqueInput | albumWhereUniqueInput[]
    disconnect?: albumWhereUniqueInput | albumWhereUniqueInput[]
    delete?: albumWhereUniqueInput | albumWhereUniqueInput[]
    connect?: albumWhereUniqueInput | albumWhereUniqueInput[]
    update?: albumUpdateWithWhereUniqueWithoutArtistInput | albumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: albumUpdateManyWithWhereWithoutArtistInput | albumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: albumScalarWhereInput | albumScalarWhereInput[]
  }

  export type songUpdateManyWithoutArtistNestedInput = {
    create?: XOR<songCreateWithoutArtistInput, songUncheckedCreateWithoutArtistInput> | songCreateWithoutArtistInput[] | songUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: songCreateOrConnectWithoutArtistInput | songCreateOrConnectWithoutArtistInput[]
    upsert?: songUpsertWithWhereUniqueWithoutArtistInput | songUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: songCreateManyArtistInputEnvelope
    set?: songWhereUniqueInput | songWhereUniqueInput[]
    disconnect?: songWhereUniqueInput | songWhereUniqueInput[]
    delete?: songWhereUniqueInput | songWhereUniqueInput[]
    connect?: songWhereUniqueInput | songWhereUniqueInput[]
    update?: songUpdateWithWhereUniqueWithoutArtistInput | songUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: songUpdateManyWithWhereWithoutArtistInput | songUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: songScalarWhereInput | songScalarWhereInput[]
  }

  export type albumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<albumCreateWithoutArtistInput, albumUncheckedCreateWithoutArtistInput> | albumCreateWithoutArtistInput[] | albumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: albumCreateOrConnectWithoutArtistInput | albumCreateOrConnectWithoutArtistInput[]
    upsert?: albumUpsertWithWhereUniqueWithoutArtistInput | albumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: albumCreateManyArtistInputEnvelope
    set?: albumWhereUniqueInput | albumWhereUniqueInput[]
    disconnect?: albumWhereUniqueInput | albumWhereUniqueInput[]
    delete?: albumWhereUniqueInput | albumWhereUniqueInput[]
    connect?: albumWhereUniqueInput | albumWhereUniqueInput[]
    update?: albumUpdateWithWhereUniqueWithoutArtistInput | albumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: albumUpdateManyWithWhereWithoutArtistInput | albumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: albumScalarWhereInput | albumScalarWhereInput[]
  }

  export type songUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<songCreateWithoutArtistInput, songUncheckedCreateWithoutArtistInput> | songCreateWithoutArtistInput[] | songUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: songCreateOrConnectWithoutArtistInput | songCreateOrConnectWithoutArtistInput[]
    upsert?: songUpsertWithWhereUniqueWithoutArtistInput | songUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: songCreateManyArtistInputEnvelope
    set?: songWhereUniqueInput | songWhereUniqueInput[]
    disconnect?: songWhereUniqueInput | songWhereUniqueInput[]
    delete?: songWhereUniqueInput | songWhereUniqueInput[]
    connect?: songWhereUniqueInput | songWhereUniqueInput[]
    update?: songUpdateWithWhereUniqueWithoutArtistInput | songUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: songUpdateManyWithWhereWithoutArtistInput | songUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: songScalarWhereInput | songScalarWhereInput[]
  }

  export type like_entityCreateNestedManyWithoutEntityInput = {
    create?: XOR<like_entityCreateWithoutEntityInput, like_entityUncheckedCreateWithoutEntityInput> | like_entityCreateWithoutEntityInput[] | like_entityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutEntityInput | like_entityCreateOrConnectWithoutEntityInput[]
    createMany?: like_entityCreateManyEntityInputEnvelope
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
  }

  export type like_entityUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<like_entityCreateWithoutEntityInput, like_entityUncheckedCreateWithoutEntityInput> | like_entityCreateWithoutEntityInput[] | like_entityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutEntityInput | like_entityCreateOrConnectWithoutEntityInput[]
    createMany?: like_entityCreateManyEntityInputEnvelope
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
  }

  export type like_entityUpdateManyWithoutEntityNestedInput = {
    create?: XOR<like_entityCreateWithoutEntityInput, like_entityUncheckedCreateWithoutEntityInput> | like_entityCreateWithoutEntityInput[] | like_entityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutEntityInput | like_entityCreateOrConnectWithoutEntityInput[]
    upsert?: like_entityUpsertWithWhereUniqueWithoutEntityInput | like_entityUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: like_entityCreateManyEntityInputEnvelope
    set?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    disconnect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    delete?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    update?: like_entityUpdateWithWhereUniqueWithoutEntityInput | like_entityUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: like_entityUpdateManyWithWhereWithoutEntityInput | like_entityUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: like_entityScalarWhereInput | like_entityScalarWhereInput[]
  }

  export type like_entityUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<like_entityCreateWithoutEntityInput, like_entityUncheckedCreateWithoutEntityInput> | like_entityCreateWithoutEntityInput[] | like_entityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutEntityInput | like_entityCreateOrConnectWithoutEntityInput[]
    upsert?: like_entityUpsertWithWhereUniqueWithoutEntityInput | like_entityUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: like_entityCreateManyEntityInputEnvelope
    set?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    disconnect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    delete?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    update?: like_entityUpdateWithWhereUniqueWithoutEntityInput | like_entityUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: like_entityUpdateManyWithWhereWithoutEntityInput | like_entityUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: like_entityScalarWhereInput | like_entityScalarWhereInput[]
  }

  export type songCreateNestedOneWithoutJamInput = {
    create?: XOR<songCreateWithoutJamInput, songUncheckedCreateWithoutJamInput>
    connectOrCreate?: songCreateOrConnectWithoutJamInput
    connect?: songWhereUniqueInput
  }

  export type jam_play_queueCreateNestedManyWithoutJamInput = {
    create?: XOR<jam_play_queueCreateWithoutJamInput, jam_play_queueUncheckedCreateWithoutJamInput> | jam_play_queueCreateWithoutJamInput[] | jam_play_queueUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutJamInput | jam_play_queueCreateOrConnectWithoutJamInput[]
    createMany?: jam_play_queueCreateManyJamInputEnvelope
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
  }

  export type jam_userCreateNestedManyWithoutJamInput = {
    create?: XOR<jam_userCreateWithoutJamInput, jam_userUncheckedCreateWithoutJamInput> | jam_userCreateWithoutJamInput[] | jam_userUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_userCreateOrConnectWithoutJamInput | jam_userCreateOrConnectWithoutJamInput[]
    createMany?: jam_userCreateManyJamInputEnvelope
    connect?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
  }

  export type jam_play_queueUncheckedCreateNestedManyWithoutJamInput = {
    create?: XOR<jam_play_queueCreateWithoutJamInput, jam_play_queueUncheckedCreateWithoutJamInput> | jam_play_queueCreateWithoutJamInput[] | jam_play_queueUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutJamInput | jam_play_queueCreateOrConnectWithoutJamInput[]
    createMany?: jam_play_queueCreateManyJamInputEnvelope
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
  }

  export type jam_userUncheckedCreateNestedManyWithoutJamInput = {
    create?: XOR<jam_userCreateWithoutJamInput, jam_userUncheckedCreateWithoutJamInput> | jam_userCreateWithoutJamInput[] | jam_userUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_userCreateOrConnectWithoutJamInput | jam_userCreateOrConnectWithoutJamInput[]
    createMany?: jam_userCreateManyJamInputEnvelope
    connect?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type songUpdateOneWithoutJamNestedInput = {
    create?: XOR<songCreateWithoutJamInput, songUncheckedCreateWithoutJamInput>
    connectOrCreate?: songCreateOrConnectWithoutJamInput
    upsert?: songUpsertWithoutJamInput
    disconnect?: songWhereInput | boolean
    delete?: songWhereInput | boolean
    connect?: songWhereUniqueInput
    update?: XOR<XOR<songUpdateToOneWithWhereWithoutJamInput, songUpdateWithoutJamInput>, songUncheckedUpdateWithoutJamInput>
  }

  export type jam_play_queueUpdateManyWithoutJamNestedInput = {
    create?: XOR<jam_play_queueCreateWithoutJamInput, jam_play_queueUncheckedCreateWithoutJamInput> | jam_play_queueCreateWithoutJamInput[] | jam_play_queueUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutJamInput | jam_play_queueCreateOrConnectWithoutJamInput[]
    upsert?: jam_play_queueUpsertWithWhereUniqueWithoutJamInput | jam_play_queueUpsertWithWhereUniqueWithoutJamInput[]
    createMany?: jam_play_queueCreateManyJamInputEnvelope
    set?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    disconnect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    delete?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    update?: jam_play_queueUpdateWithWhereUniqueWithoutJamInput | jam_play_queueUpdateWithWhereUniqueWithoutJamInput[]
    updateMany?: jam_play_queueUpdateManyWithWhereWithoutJamInput | jam_play_queueUpdateManyWithWhereWithoutJamInput[]
    deleteMany?: jam_play_queueScalarWhereInput | jam_play_queueScalarWhereInput[]
  }

  export type jam_userUpdateManyWithoutJamNestedInput = {
    create?: XOR<jam_userCreateWithoutJamInput, jam_userUncheckedCreateWithoutJamInput> | jam_userCreateWithoutJamInput[] | jam_userUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_userCreateOrConnectWithoutJamInput | jam_userCreateOrConnectWithoutJamInput[]
    upsert?: jam_userUpsertWithWhereUniqueWithoutJamInput | jam_userUpsertWithWhereUniqueWithoutJamInput[]
    createMany?: jam_userCreateManyJamInputEnvelope
    set?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    disconnect?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    delete?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    connect?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    update?: jam_userUpdateWithWhereUniqueWithoutJamInput | jam_userUpdateWithWhereUniqueWithoutJamInput[]
    updateMany?: jam_userUpdateManyWithWhereWithoutJamInput | jam_userUpdateManyWithWhereWithoutJamInput[]
    deleteMany?: jam_userScalarWhereInput | jam_userScalarWhereInput[]
  }

  export type jam_play_queueUncheckedUpdateManyWithoutJamNestedInput = {
    create?: XOR<jam_play_queueCreateWithoutJamInput, jam_play_queueUncheckedCreateWithoutJamInput> | jam_play_queueCreateWithoutJamInput[] | jam_play_queueUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutJamInput | jam_play_queueCreateOrConnectWithoutJamInput[]
    upsert?: jam_play_queueUpsertWithWhereUniqueWithoutJamInput | jam_play_queueUpsertWithWhereUniqueWithoutJamInput[]
    createMany?: jam_play_queueCreateManyJamInputEnvelope
    set?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    disconnect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    delete?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    update?: jam_play_queueUpdateWithWhereUniqueWithoutJamInput | jam_play_queueUpdateWithWhereUniqueWithoutJamInput[]
    updateMany?: jam_play_queueUpdateManyWithWhereWithoutJamInput | jam_play_queueUpdateManyWithWhereWithoutJamInput[]
    deleteMany?: jam_play_queueScalarWhereInput | jam_play_queueScalarWhereInput[]
  }

  export type jam_userUncheckedUpdateManyWithoutJamNestedInput = {
    create?: XOR<jam_userCreateWithoutJamInput, jam_userUncheckedCreateWithoutJamInput> | jam_userCreateWithoutJamInput[] | jam_userUncheckedCreateWithoutJamInput[]
    connectOrCreate?: jam_userCreateOrConnectWithoutJamInput | jam_userCreateOrConnectWithoutJamInput[]
    upsert?: jam_userUpsertWithWhereUniqueWithoutJamInput | jam_userUpsertWithWhereUniqueWithoutJamInput[]
    createMany?: jam_userCreateManyJamInputEnvelope
    set?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    disconnect?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    delete?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    connect?: jam_userWhereUniqueInput | jam_userWhereUniqueInput[]
    update?: jam_userUpdateWithWhereUniqueWithoutJamInput | jam_userUpdateWithWhereUniqueWithoutJamInput[]
    updateMany?: jam_userUpdateManyWithWhereWithoutJamInput | jam_userUpdateManyWithWhereWithoutJamInput[]
    deleteMany?: jam_userScalarWhereInput | jam_userScalarWhereInput[]
  }

  export type songCreateNestedOneWithoutJam_play_queueInput = {
    create?: XOR<songCreateWithoutJam_play_queueInput, songUncheckedCreateWithoutJam_play_queueInput>
    connectOrCreate?: songCreateOrConnectWithoutJam_play_queueInput
    connect?: songWhereUniqueInput
  }

  export type jamCreateNestedOneWithoutJam_play_queueInput = {
    create?: XOR<jamCreateWithoutJam_play_queueInput, jamUncheckedCreateWithoutJam_play_queueInput>
    connectOrCreate?: jamCreateOrConnectWithoutJam_play_queueInput
    connect?: jamWhereUniqueInput
  }

  export type songUpdateOneRequiredWithoutJam_play_queueNestedInput = {
    create?: XOR<songCreateWithoutJam_play_queueInput, songUncheckedCreateWithoutJam_play_queueInput>
    connectOrCreate?: songCreateOrConnectWithoutJam_play_queueInput
    upsert?: songUpsertWithoutJam_play_queueInput
    connect?: songWhereUniqueInput
    update?: XOR<XOR<songUpdateToOneWithWhereWithoutJam_play_queueInput, songUpdateWithoutJam_play_queueInput>, songUncheckedUpdateWithoutJam_play_queueInput>
  }

  export type jamUpdateOneRequiredWithoutJam_play_queueNestedInput = {
    create?: XOR<jamCreateWithoutJam_play_queueInput, jamUncheckedCreateWithoutJam_play_queueInput>
    connectOrCreate?: jamCreateOrConnectWithoutJam_play_queueInput
    upsert?: jamUpsertWithoutJam_play_queueInput
    connect?: jamWhereUniqueInput
    update?: XOR<XOR<jamUpdateToOneWithWhereWithoutJam_play_queueInput, jamUpdateWithoutJam_play_queueInput>, jamUncheckedUpdateWithoutJam_play_queueInput>
  }

  export type jamCreateNestedOneWithoutJam_userInput = {
    create?: XOR<jamCreateWithoutJam_userInput, jamUncheckedCreateWithoutJam_userInput>
    connectOrCreate?: jamCreateOrConnectWithoutJam_userInput
    connect?: jamWhereUniqueInput
  }

  export type userCreateNestedOneWithoutJam_userInput = {
    create?: XOR<userCreateWithoutJam_userInput, userUncheckedCreateWithoutJam_userInput>
    connectOrCreate?: userCreateOrConnectWithoutJam_userInput
    connect?: userWhereUniqueInput
  }

  export type jamUpdateOneRequiredWithoutJam_userNestedInput = {
    create?: XOR<jamCreateWithoutJam_userInput, jamUncheckedCreateWithoutJam_userInput>
    connectOrCreate?: jamCreateOrConnectWithoutJam_userInput
    upsert?: jamUpsertWithoutJam_userInput
    connect?: jamWhereUniqueInput
    update?: XOR<XOR<jamUpdateToOneWithWhereWithoutJam_userInput, jamUpdateWithoutJam_userInput>, jamUncheckedUpdateWithoutJam_userInput>
  }

  export type userUpdateOneRequiredWithoutJam_userNestedInput = {
    create?: XOR<userCreateWithoutJam_userInput, userUncheckedCreateWithoutJam_userInput>
    connectOrCreate?: userCreateOrConnectWithoutJam_userInput
    upsert?: userUpsertWithoutJam_userInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutJam_userInput, userUpdateWithoutJam_userInput>, userUncheckedUpdateWithoutJam_userInput>
  }

  export type entityCreateNestedOneWithoutLike_entityInput = {
    create?: XOR<entityCreateWithoutLike_entityInput, entityUncheckedCreateWithoutLike_entityInput>
    connectOrCreate?: entityCreateOrConnectWithoutLike_entityInput
    connect?: entityWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLike_entityInput = {
    create?: XOR<userCreateWithoutLike_entityInput, userUncheckedCreateWithoutLike_entityInput>
    connectOrCreate?: userCreateOrConnectWithoutLike_entityInput
    connect?: userWhereUniqueInput
  }

  export type entityUpdateOneRequiredWithoutLike_entityNestedInput = {
    create?: XOR<entityCreateWithoutLike_entityInput, entityUncheckedCreateWithoutLike_entityInput>
    connectOrCreate?: entityCreateOrConnectWithoutLike_entityInput
    upsert?: entityUpsertWithoutLike_entityInput
    connect?: entityWhereUniqueInput
    update?: XOR<XOR<entityUpdateToOneWithWhereWithoutLike_entityInput, entityUpdateWithoutLike_entityInput>, entityUncheckedUpdateWithoutLike_entityInput>
  }

  export type userUpdateOneRequiredWithoutLike_entityNestedInput = {
    create?: XOR<userCreateWithoutLike_entityInput, userUncheckedCreateWithoutLike_entityInput>
    connectOrCreate?: userCreateOrConnectWithoutLike_entityInput
    upsert?: userUpsertWithoutLike_entityInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLike_entityInput, userUpdateWithoutLike_entityInput>, userUncheckedUpdateWithoutLike_entityInput>
  }

  export type songCreateNestedOneWithoutPlay_queueInput = {
    create?: XOR<songCreateWithoutPlay_queueInput, songUncheckedCreateWithoutPlay_queueInput>
    connectOrCreate?: songCreateOrConnectWithoutPlay_queueInput
    connect?: songWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPlay_queueInput = {
    create?: XOR<userCreateWithoutPlay_queueInput, userUncheckedCreateWithoutPlay_queueInput>
    connectOrCreate?: userCreateOrConnectWithoutPlay_queueInput
    connect?: userWhereUniqueInput
  }

  export type songUpdateOneRequiredWithoutPlay_queueNestedInput = {
    create?: XOR<songCreateWithoutPlay_queueInput, songUncheckedCreateWithoutPlay_queueInput>
    connectOrCreate?: songCreateOrConnectWithoutPlay_queueInput
    upsert?: songUpsertWithoutPlay_queueInput
    connect?: songWhereUniqueInput
    update?: XOR<XOR<songUpdateToOneWithWhereWithoutPlay_queueInput, songUpdateWithoutPlay_queueInput>, songUncheckedUpdateWithoutPlay_queueInput>
  }

  export type userUpdateOneRequiredWithoutPlay_queueNestedInput = {
    create?: XOR<userCreateWithoutPlay_queueInput, userUncheckedCreateWithoutPlay_queueInput>
    connectOrCreate?: userCreateOrConnectWithoutPlay_queueInput
    upsert?: userUpsertWithoutPlay_queueInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPlay_queueInput, userUpdateWithoutPlay_queueInput>, userUncheckedUpdateWithoutPlay_queueInput>
  }

  export type userCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: userCreateOrConnectWithoutPlaylistInput
    connect?: userWhereUniqueInput
  }

  export type playlist_songCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<playlist_songCreateWithoutPlaylistInput, playlist_songUncheckedCreateWithoutPlaylistInput> | playlist_songCreateWithoutPlaylistInput[] | playlist_songUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutPlaylistInput | playlist_songCreateOrConnectWithoutPlaylistInput[]
    createMany?: playlist_songCreateManyPlaylistInputEnvelope
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
  }

  export type playlist_songUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<playlist_songCreateWithoutPlaylistInput, playlist_songUncheckedCreateWithoutPlaylistInput> | playlist_songCreateWithoutPlaylistInput[] | playlist_songUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutPlaylistInput | playlist_songCreateOrConnectWithoutPlaylistInput[]
    createMany?: playlist_songCreateManyPlaylistInputEnvelope
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutPlaylistNestedInput = {
    create?: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: userCreateOrConnectWithoutPlaylistInput
    upsert?: userUpsertWithoutPlaylistInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPlaylistInput, userUpdateWithoutPlaylistInput>, userUncheckedUpdateWithoutPlaylistInput>
  }

  export type playlist_songUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<playlist_songCreateWithoutPlaylistInput, playlist_songUncheckedCreateWithoutPlaylistInput> | playlist_songCreateWithoutPlaylistInput[] | playlist_songUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutPlaylistInput | playlist_songCreateOrConnectWithoutPlaylistInput[]
    upsert?: playlist_songUpsertWithWhereUniqueWithoutPlaylistInput | playlist_songUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: playlist_songCreateManyPlaylistInputEnvelope
    set?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    disconnect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    delete?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    update?: playlist_songUpdateWithWhereUniqueWithoutPlaylistInput | playlist_songUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: playlist_songUpdateManyWithWhereWithoutPlaylistInput | playlist_songUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: playlist_songScalarWhereInput | playlist_songScalarWhereInput[]
  }

  export type playlist_songUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<playlist_songCreateWithoutPlaylistInput, playlist_songUncheckedCreateWithoutPlaylistInput> | playlist_songCreateWithoutPlaylistInput[] | playlist_songUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutPlaylistInput | playlist_songCreateOrConnectWithoutPlaylistInput[]
    upsert?: playlist_songUpsertWithWhereUniqueWithoutPlaylistInput | playlist_songUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: playlist_songCreateManyPlaylistInputEnvelope
    set?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    disconnect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    delete?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    update?: playlist_songUpdateWithWhereUniqueWithoutPlaylistInput | playlist_songUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: playlist_songUpdateManyWithWhereWithoutPlaylistInput | playlist_songUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: playlist_songScalarWhereInput | playlist_songScalarWhereInput[]
  }

  export type playlistCreateNestedOneWithoutPlaylist_songInput = {
    create?: XOR<playlistCreateWithoutPlaylist_songInput, playlistUncheckedCreateWithoutPlaylist_songInput>
    connectOrCreate?: playlistCreateOrConnectWithoutPlaylist_songInput
    connect?: playlistWhereUniqueInput
  }

  export type songCreateNestedOneWithoutPlaylist_songInput = {
    create?: XOR<songCreateWithoutPlaylist_songInput, songUncheckedCreateWithoutPlaylist_songInput>
    connectOrCreate?: songCreateOrConnectWithoutPlaylist_songInput
    connect?: songWhereUniqueInput
  }

  export type playlistUpdateOneRequiredWithoutPlaylist_songNestedInput = {
    create?: XOR<playlistCreateWithoutPlaylist_songInput, playlistUncheckedCreateWithoutPlaylist_songInput>
    connectOrCreate?: playlistCreateOrConnectWithoutPlaylist_songInput
    upsert?: playlistUpsertWithoutPlaylist_songInput
    connect?: playlistWhereUniqueInput
    update?: XOR<XOR<playlistUpdateToOneWithWhereWithoutPlaylist_songInput, playlistUpdateWithoutPlaylist_songInput>, playlistUncheckedUpdateWithoutPlaylist_songInput>
  }

  export type songUpdateOneRequiredWithoutPlaylist_songNestedInput = {
    create?: XOR<songCreateWithoutPlaylist_songInput, songUncheckedCreateWithoutPlaylist_songInput>
    connectOrCreate?: songCreateOrConnectWithoutPlaylist_songInput
    upsert?: songUpsertWithoutPlaylist_songInput
    connect?: songWhereUniqueInput
    update?: XOR<XOR<songUpdateToOneWithWhereWithoutPlaylist_songInput, songUpdateWithoutPlaylist_songInput>, songUncheckedUpdateWithoutPlaylist_songInput>
  }

  export type jamCreateNestedManyWithoutSongInput = {
    create?: XOR<jamCreateWithoutSongInput, jamUncheckedCreateWithoutSongInput> | jamCreateWithoutSongInput[] | jamUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jamCreateOrConnectWithoutSongInput | jamCreateOrConnectWithoutSongInput[]
    createMany?: jamCreateManySongInputEnvelope
    connect?: jamWhereUniqueInput | jamWhereUniqueInput[]
  }

  export type jam_play_queueCreateNestedManyWithoutSongInput = {
    create?: XOR<jam_play_queueCreateWithoutSongInput, jam_play_queueUncheckedCreateWithoutSongInput> | jam_play_queueCreateWithoutSongInput[] | jam_play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutSongInput | jam_play_queueCreateOrConnectWithoutSongInput[]
    createMany?: jam_play_queueCreateManySongInputEnvelope
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
  }

  export type play_queueCreateNestedManyWithoutSongInput = {
    create?: XOR<play_queueCreateWithoutSongInput, play_queueUncheckedCreateWithoutSongInput> | play_queueCreateWithoutSongInput[] | play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutSongInput | play_queueCreateOrConnectWithoutSongInput[]
    createMany?: play_queueCreateManySongInputEnvelope
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
  }

  export type playlist_songCreateNestedManyWithoutSongInput = {
    create?: XOR<playlist_songCreateWithoutSongInput, playlist_songUncheckedCreateWithoutSongInput> | playlist_songCreateWithoutSongInput[] | playlist_songUncheckedCreateWithoutSongInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutSongInput | playlist_songCreateOrConnectWithoutSongInput[]
    createMany?: playlist_songCreateManySongInputEnvelope
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
  }

  export type song_albumCreateNestedManyWithoutSongInput = {
    create?: XOR<song_albumCreateWithoutSongInput, song_albumUncheckedCreateWithoutSongInput> | song_albumCreateWithoutSongInput[] | song_albumUncheckedCreateWithoutSongInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutSongInput | song_albumCreateOrConnectWithoutSongInput[]
    createMany?: song_albumCreateManySongInputEnvelope
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
  }

  export type stateCreateNestedManyWithoutSongInput = {
    create?: XOR<stateCreateWithoutSongInput, stateUncheckedCreateWithoutSongInput> | stateCreateWithoutSongInput[] | stateUncheckedCreateWithoutSongInput[]
    connectOrCreate?: stateCreateOrConnectWithoutSongInput | stateCreateOrConnectWithoutSongInput[]
    createMany?: stateCreateManySongInputEnvelope
    connect?: stateWhereUniqueInput | stateWhereUniqueInput[]
  }

  export type artistCreateNestedOneWithoutSongInput = {
    create?: XOR<artistCreateWithoutSongInput, artistUncheckedCreateWithoutSongInput>
    connectOrCreate?: artistCreateOrConnectWithoutSongInput
    connect?: artistWhereUniqueInput
  }

  export type jamUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<jamCreateWithoutSongInput, jamUncheckedCreateWithoutSongInput> | jamCreateWithoutSongInput[] | jamUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jamCreateOrConnectWithoutSongInput | jamCreateOrConnectWithoutSongInput[]
    createMany?: jamCreateManySongInputEnvelope
    connect?: jamWhereUniqueInput | jamWhereUniqueInput[]
  }

  export type jam_play_queueUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<jam_play_queueCreateWithoutSongInput, jam_play_queueUncheckedCreateWithoutSongInput> | jam_play_queueCreateWithoutSongInput[] | jam_play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutSongInput | jam_play_queueCreateOrConnectWithoutSongInput[]
    createMany?: jam_play_queueCreateManySongInputEnvelope
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
  }

  export type play_queueUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<play_queueCreateWithoutSongInput, play_queueUncheckedCreateWithoutSongInput> | play_queueCreateWithoutSongInput[] | play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutSongInput | play_queueCreateOrConnectWithoutSongInput[]
    createMany?: play_queueCreateManySongInputEnvelope
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
  }

  export type playlist_songUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<playlist_songCreateWithoutSongInput, playlist_songUncheckedCreateWithoutSongInput> | playlist_songCreateWithoutSongInput[] | playlist_songUncheckedCreateWithoutSongInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutSongInput | playlist_songCreateOrConnectWithoutSongInput[]
    createMany?: playlist_songCreateManySongInputEnvelope
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
  }

  export type song_albumUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<song_albumCreateWithoutSongInput, song_albumUncheckedCreateWithoutSongInput> | song_albumCreateWithoutSongInput[] | song_albumUncheckedCreateWithoutSongInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutSongInput | song_albumCreateOrConnectWithoutSongInput[]
    createMany?: song_albumCreateManySongInputEnvelope
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
  }

  export type stateUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<stateCreateWithoutSongInput, stateUncheckedCreateWithoutSongInput> | stateCreateWithoutSongInput[] | stateUncheckedCreateWithoutSongInput[]
    connectOrCreate?: stateCreateOrConnectWithoutSongInput | stateCreateOrConnectWithoutSongInput[]
    createMany?: stateCreateManySongInputEnvelope
    connect?: stateWhereUniqueInput | stateWhereUniqueInput[]
  }

  export type jamUpdateManyWithoutSongNestedInput = {
    create?: XOR<jamCreateWithoutSongInput, jamUncheckedCreateWithoutSongInput> | jamCreateWithoutSongInput[] | jamUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jamCreateOrConnectWithoutSongInput | jamCreateOrConnectWithoutSongInput[]
    upsert?: jamUpsertWithWhereUniqueWithoutSongInput | jamUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: jamCreateManySongInputEnvelope
    set?: jamWhereUniqueInput | jamWhereUniqueInput[]
    disconnect?: jamWhereUniqueInput | jamWhereUniqueInput[]
    delete?: jamWhereUniqueInput | jamWhereUniqueInput[]
    connect?: jamWhereUniqueInput | jamWhereUniqueInput[]
    update?: jamUpdateWithWhereUniqueWithoutSongInput | jamUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: jamUpdateManyWithWhereWithoutSongInput | jamUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: jamScalarWhereInput | jamScalarWhereInput[]
  }

  export type jam_play_queueUpdateManyWithoutSongNestedInput = {
    create?: XOR<jam_play_queueCreateWithoutSongInput, jam_play_queueUncheckedCreateWithoutSongInput> | jam_play_queueCreateWithoutSongInput[] | jam_play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutSongInput | jam_play_queueCreateOrConnectWithoutSongInput[]
    upsert?: jam_play_queueUpsertWithWhereUniqueWithoutSongInput | jam_play_queueUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: jam_play_queueCreateManySongInputEnvelope
    set?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    disconnect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    delete?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    update?: jam_play_queueUpdateWithWhereUniqueWithoutSongInput | jam_play_queueUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: jam_play_queueUpdateManyWithWhereWithoutSongInput | jam_play_queueUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: jam_play_queueScalarWhereInput | jam_play_queueScalarWhereInput[]
  }

  export type play_queueUpdateManyWithoutSongNestedInput = {
    create?: XOR<play_queueCreateWithoutSongInput, play_queueUncheckedCreateWithoutSongInput> | play_queueCreateWithoutSongInput[] | play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutSongInput | play_queueCreateOrConnectWithoutSongInput[]
    upsert?: play_queueUpsertWithWhereUniqueWithoutSongInput | play_queueUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: play_queueCreateManySongInputEnvelope
    set?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    disconnect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    delete?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    update?: play_queueUpdateWithWhereUniqueWithoutSongInput | play_queueUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: play_queueUpdateManyWithWhereWithoutSongInput | play_queueUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: play_queueScalarWhereInput | play_queueScalarWhereInput[]
  }

  export type playlist_songUpdateManyWithoutSongNestedInput = {
    create?: XOR<playlist_songCreateWithoutSongInput, playlist_songUncheckedCreateWithoutSongInput> | playlist_songCreateWithoutSongInput[] | playlist_songUncheckedCreateWithoutSongInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutSongInput | playlist_songCreateOrConnectWithoutSongInput[]
    upsert?: playlist_songUpsertWithWhereUniqueWithoutSongInput | playlist_songUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: playlist_songCreateManySongInputEnvelope
    set?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    disconnect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    delete?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    update?: playlist_songUpdateWithWhereUniqueWithoutSongInput | playlist_songUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: playlist_songUpdateManyWithWhereWithoutSongInput | playlist_songUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: playlist_songScalarWhereInput | playlist_songScalarWhereInput[]
  }

  export type song_albumUpdateManyWithoutSongNestedInput = {
    create?: XOR<song_albumCreateWithoutSongInput, song_albumUncheckedCreateWithoutSongInput> | song_albumCreateWithoutSongInput[] | song_albumUncheckedCreateWithoutSongInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutSongInput | song_albumCreateOrConnectWithoutSongInput[]
    upsert?: song_albumUpsertWithWhereUniqueWithoutSongInput | song_albumUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: song_albumCreateManySongInputEnvelope
    set?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    disconnect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    delete?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    update?: song_albumUpdateWithWhereUniqueWithoutSongInput | song_albumUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: song_albumUpdateManyWithWhereWithoutSongInput | song_albumUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: song_albumScalarWhereInput | song_albumScalarWhereInput[]
  }

  export type stateUpdateManyWithoutSongNestedInput = {
    create?: XOR<stateCreateWithoutSongInput, stateUncheckedCreateWithoutSongInput> | stateCreateWithoutSongInput[] | stateUncheckedCreateWithoutSongInput[]
    connectOrCreate?: stateCreateOrConnectWithoutSongInput | stateCreateOrConnectWithoutSongInput[]
    upsert?: stateUpsertWithWhereUniqueWithoutSongInput | stateUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: stateCreateManySongInputEnvelope
    set?: stateWhereUniqueInput | stateWhereUniqueInput[]
    disconnect?: stateWhereUniqueInput | stateWhereUniqueInput[]
    delete?: stateWhereUniqueInput | stateWhereUniqueInput[]
    connect?: stateWhereUniqueInput | stateWhereUniqueInput[]
    update?: stateUpdateWithWhereUniqueWithoutSongInput | stateUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: stateUpdateManyWithWhereWithoutSongInput | stateUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: stateScalarWhereInput | stateScalarWhereInput[]
  }

  export type artistUpdateOneRequiredWithoutSongNestedInput = {
    create?: XOR<artistCreateWithoutSongInput, artistUncheckedCreateWithoutSongInput>
    connectOrCreate?: artistCreateOrConnectWithoutSongInput
    upsert?: artistUpsertWithoutSongInput
    connect?: artistWhereUniqueInput
    update?: XOR<XOR<artistUpdateToOneWithWhereWithoutSongInput, artistUpdateWithoutSongInput>, artistUncheckedUpdateWithoutSongInput>
  }

  export type jamUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<jamCreateWithoutSongInput, jamUncheckedCreateWithoutSongInput> | jamCreateWithoutSongInput[] | jamUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jamCreateOrConnectWithoutSongInput | jamCreateOrConnectWithoutSongInput[]
    upsert?: jamUpsertWithWhereUniqueWithoutSongInput | jamUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: jamCreateManySongInputEnvelope
    set?: jamWhereUniqueInput | jamWhereUniqueInput[]
    disconnect?: jamWhereUniqueInput | jamWhereUniqueInput[]
    delete?: jamWhereUniqueInput | jamWhereUniqueInput[]
    connect?: jamWhereUniqueInput | jamWhereUniqueInput[]
    update?: jamUpdateWithWhereUniqueWithoutSongInput | jamUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: jamUpdateManyWithWhereWithoutSongInput | jamUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: jamScalarWhereInput | jamScalarWhereInput[]
  }

  export type jam_play_queueUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<jam_play_queueCreateWithoutSongInput, jam_play_queueUncheckedCreateWithoutSongInput> | jam_play_queueCreateWithoutSongInput[] | jam_play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: jam_play_queueCreateOrConnectWithoutSongInput | jam_play_queueCreateOrConnectWithoutSongInput[]
    upsert?: jam_play_queueUpsertWithWhereUniqueWithoutSongInput | jam_play_queueUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: jam_play_queueCreateManySongInputEnvelope
    set?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    disconnect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    delete?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    connect?: jam_play_queueWhereUniqueInput | jam_play_queueWhereUniqueInput[]
    update?: jam_play_queueUpdateWithWhereUniqueWithoutSongInput | jam_play_queueUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: jam_play_queueUpdateManyWithWhereWithoutSongInput | jam_play_queueUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: jam_play_queueScalarWhereInput | jam_play_queueScalarWhereInput[]
  }

  export type play_queueUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<play_queueCreateWithoutSongInput, play_queueUncheckedCreateWithoutSongInput> | play_queueCreateWithoutSongInput[] | play_queueUncheckedCreateWithoutSongInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutSongInput | play_queueCreateOrConnectWithoutSongInput[]
    upsert?: play_queueUpsertWithWhereUniqueWithoutSongInput | play_queueUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: play_queueCreateManySongInputEnvelope
    set?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    disconnect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    delete?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    update?: play_queueUpdateWithWhereUniqueWithoutSongInput | play_queueUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: play_queueUpdateManyWithWhereWithoutSongInput | play_queueUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: play_queueScalarWhereInput | play_queueScalarWhereInput[]
  }

  export type playlist_songUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<playlist_songCreateWithoutSongInput, playlist_songUncheckedCreateWithoutSongInput> | playlist_songCreateWithoutSongInput[] | playlist_songUncheckedCreateWithoutSongInput[]
    connectOrCreate?: playlist_songCreateOrConnectWithoutSongInput | playlist_songCreateOrConnectWithoutSongInput[]
    upsert?: playlist_songUpsertWithWhereUniqueWithoutSongInput | playlist_songUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: playlist_songCreateManySongInputEnvelope
    set?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    disconnect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    delete?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    connect?: playlist_songWhereUniqueInput | playlist_songWhereUniqueInput[]
    update?: playlist_songUpdateWithWhereUniqueWithoutSongInput | playlist_songUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: playlist_songUpdateManyWithWhereWithoutSongInput | playlist_songUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: playlist_songScalarWhereInput | playlist_songScalarWhereInput[]
  }

  export type song_albumUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<song_albumCreateWithoutSongInput, song_albumUncheckedCreateWithoutSongInput> | song_albumCreateWithoutSongInput[] | song_albumUncheckedCreateWithoutSongInput[]
    connectOrCreate?: song_albumCreateOrConnectWithoutSongInput | song_albumCreateOrConnectWithoutSongInput[]
    upsert?: song_albumUpsertWithWhereUniqueWithoutSongInput | song_albumUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: song_albumCreateManySongInputEnvelope
    set?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    disconnect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    delete?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    connect?: song_albumWhereUniqueInput | song_albumWhereUniqueInput[]
    update?: song_albumUpdateWithWhereUniqueWithoutSongInput | song_albumUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: song_albumUpdateManyWithWhereWithoutSongInput | song_albumUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: song_albumScalarWhereInput | song_albumScalarWhereInput[]
  }

  export type stateUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<stateCreateWithoutSongInput, stateUncheckedCreateWithoutSongInput> | stateCreateWithoutSongInput[] | stateUncheckedCreateWithoutSongInput[]
    connectOrCreate?: stateCreateOrConnectWithoutSongInput | stateCreateOrConnectWithoutSongInput[]
    upsert?: stateUpsertWithWhereUniqueWithoutSongInput | stateUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: stateCreateManySongInputEnvelope
    set?: stateWhereUniqueInput | stateWhereUniqueInput[]
    disconnect?: stateWhereUniqueInput | stateWhereUniqueInput[]
    delete?: stateWhereUniqueInput | stateWhereUniqueInput[]
    connect?: stateWhereUniqueInput | stateWhereUniqueInput[]
    update?: stateUpdateWithWhereUniqueWithoutSongInput | stateUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: stateUpdateManyWithWhereWithoutSongInput | stateUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: stateScalarWhereInput | stateScalarWhereInput[]
  }

  export type albumCreateNestedOneWithoutSong_albumInput = {
    create?: XOR<albumCreateWithoutSong_albumInput, albumUncheckedCreateWithoutSong_albumInput>
    connectOrCreate?: albumCreateOrConnectWithoutSong_albumInput
    connect?: albumWhereUniqueInput
  }

  export type songCreateNestedOneWithoutSong_albumInput = {
    create?: XOR<songCreateWithoutSong_albumInput, songUncheckedCreateWithoutSong_albumInput>
    connectOrCreate?: songCreateOrConnectWithoutSong_albumInput
    connect?: songWhereUniqueInput
  }

  export type albumUpdateOneRequiredWithoutSong_albumNestedInput = {
    create?: XOR<albumCreateWithoutSong_albumInput, albumUncheckedCreateWithoutSong_albumInput>
    connectOrCreate?: albumCreateOrConnectWithoutSong_albumInput
    upsert?: albumUpsertWithoutSong_albumInput
    connect?: albumWhereUniqueInput
    update?: XOR<XOR<albumUpdateToOneWithWhereWithoutSong_albumInput, albumUpdateWithoutSong_albumInput>, albumUncheckedUpdateWithoutSong_albumInput>
  }

  export type songUpdateOneRequiredWithoutSong_albumNestedInput = {
    create?: XOR<songCreateWithoutSong_albumInput, songUncheckedCreateWithoutSong_albumInput>
    connectOrCreate?: songCreateOrConnectWithoutSong_albumInput
    upsert?: songUpsertWithoutSong_albumInput
    connect?: songWhereUniqueInput
    update?: XOR<XOR<songUpdateToOneWithWhereWithoutSong_albumInput, songUpdateWithoutSong_albumInput>, songUncheckedUpdateWithoutSong_albumInput>
  }

  export type userCreateNestedOneWithoutStateInput = {
    create?: XOR<userCreateWithoutStateInput, userUncheckedCreateWithoutStateInput>
    connectOrCreate?: userCreateOrConnectWithoutStateInput
    connect?: userWhereUniqueInput
  }

  export type songCreateNestedOneWithoutStateInput = {
    create?: XOR<songCreateWithoutStateInput, songUncheckedCreateWithoutStateInput>
    connectOrCreate?: songCreateOrConnectWithoutStateInput
    connect?: songWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutStateNestedInput = {
    create?: XOR<userCreateWithoutStateInput, userUncheckedCreateWithoutStateInput>
    connectOrCreate?: userCreateOrConnectWithoutStateInput
    upsert?: userUpsertWithoutStateInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStateInput, userUpdateWithoutStateInput>, userUncheckedUpdateWithoutStateInput>
  }

  export type songUpdateOneWithoutStateNestedInput = {
    create?: XOR<songCreateWithoutStateInput, songUncheckedCreateWithoutStateInput>
    connectOrCreate?: songCreateOrConnectWithoutStateInput
    upsert?: songUpsertWithoutStateInput
    disconnect?: songWhereInput | boolean
    delete?: songWhereInput | boolean
    connect?: songWhereUniqueInput
    update?: XOR<XOR<songUpdateToOneWithWhereWithoutStateInput, songUpdateWithoutStateInput>, songUncheckedUpdateWithoutStateInput>
  }

  export type jam_userCreateNestedOneWithoutUserInput = {
    create?: XOR<jam_userCreateWithoutUserInput, jam_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: jam_userCreateOrConnectWithoutUserInput
    connect?: jam_userWhereUniqueInput
  }

  export type like_entityCreateNestedManyWithoutUserInput = {
    create?: XOR<like_entityCreateWithoutUserInput, like_entityUncheckedCreateWithoutUserInput> | like_entityCreateWithoutUserInput[] | like_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutUserInput | like_entityCreateOrConnectWithoutUserInput[]
    createMany?: like_entityCreateManyUserInputEnvelope
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
  }

  export type play_queueCreateNestedManyWithoutUserInput = {
    create?: XOR<play_queueCreateWithoutUserInput, play_queueUncheckedCreateWithoutUserInput> | play_queueCreateWithoutUserInput[] | play_queueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutUserInput | play_queueCreateOrConnectWithoutUserInput[]
    createMany?: play_queueCreateManyUserInputEnvelope
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
  }

  export type playlistCreateNestedManyWithoutUserInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type stateCreateNestedOneWithoutUserInput = {
    create?: XOR<stateCreateWithoutUserInput, stateUncheckedCreateWithoutUserInput>
    connectOrCreate?: stateCreateOrConnectWithoutUserInput
    connect?: stateWhereUniqueInput
  }

  export type jam_userUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<jam_userCreateWithoutUserInput, jam_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: jam_userCreateOrConnectWithoutUserInput
    connect?: jam_userWhereUniqueInput
  }

  export type like_entityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<like_entityCreateWithoutUserInput, like_entityUncheckedCreateWithoutUserInput> | like_entityCreateWithoutUserInput[] | like_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutUserInput | like_entityCreateOrConnectWithoutUserInput[]
    createMany?: like_entityCreateManyUserInputEnvelope
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
  }

  export type play_queueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<play_queueCreateWithoutUserInput, play_queueUncheckedCreateWithoutUserInput> | play_queueCreateWithoutUserInput[] | play_queueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutUserInput | play_queueCreateOrConnectWithoutUserInput[]
    createMany?: play_queueCreateManyUserInputEnvelope
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
  }

  export type playlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type stateUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<stateCreateWithoutUserInput, stateUncheckedCreateWithoutUserInput>
    connectOrCreate?: stateCreateOrConnectWithoutUserInput
    connect?: stateWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type jam_userUpdateOneWithoutUserNestedInput = {
    create?: XOR<jam_userCreateWithoutUserInput, jam_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: jam_userCreateOrConnectWithoutUserInput
    upsert?: jam_userUpsertWithoutUserInput
    disconnect?: jam_userWhereInput | boolean
    delete?: jam_userWhereInput | boolean
    connect?: jam_userWhereUniqueInput
    update?: XOR<XOR<jam_userUpdateToOneWithWhereWithoutUserInput, jam_userUpdateWithoutUserInput>, jam_userUncheckedUpdateWithoutUserInput>
  }

  export type like_entityUpdateManyWithoutUserNestedInput = {
    create?: XOR<like_entityCreateWithoutUserInput, like_entityUncheckedCreateWithoutUserInput> | like_entityCreateWithoutUserInput[] | like_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutUserInput | like_entityCreateOrConnectWithoutUserInput[]
    upsert?: like_entityUpsertWithWhereUniqueWithoutUserInput | like_entityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: like_entityCreateManyUserInputEnvelope
    set?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    disconnect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    delete?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    update?: like_entityUpdateWithWhereUniqueWithoutUserInput | like_entityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: like_entityUpdateManyWithWhereWithoutUserInput | like_entityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: like_entityScalarWhereInput | like_entityScalarWhereInput[]
  }

  export type play_queueUpdateManyWithoutUserNestedInput = {
    create?: XOR<play_queueCreateWithoutUserInput, play_queueUncheckedCreateWithoutUserInput> | play_queueCreateWithoutUserInput[] | play_queueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutUserInput | play_queueCreateOrConnectWithoutUserInput[]
    upsert?: play_queueUpsertWithWhereUniqueWithoutUserInput | play_queueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: play_queueCreateManyUserInputEnvelope
    set?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    disconnect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    delete?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    update?: play_queueUpdateWithWhereUniqueWithoutUserInput | play_queueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: play_queueUpdateManyWithWhereWithoutUserInput | play_queueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: play_queueScalarWhereInput | play_queueScalarWhereInput[]
  }

  export type playlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutUserInput | playlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutUserInput | playlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutUserInput | playlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type stateUpdateOneWithoutUserNestedInput = {
    create?: XOR<stateCreateWithoutUserInput, stateUncheckedCreateWithoutUserInput>
    connectOrCreate?: stateCreateOrConnectWithoutUserInput
    upsert?: stateUpsertWithoutUserInput
    disconnect?: stateWhereInput | boolean
    delete?: stateWhereInput | boolean
    connect?: stateWhereUniqueInput
    update?: XOR<XOR<stateUpdateToOneWithWhereWithoutUserInput, stateUpdateWithoutUserInput>, stateUncheckedUpdateWithoutUserInput>
  }

  export type jam_userUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<jam_userCreateWithoutUserInput, jam_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: jam_userCreateOrConnectWithoutUserInput
    upsert?: jam_userUpsertWithoutUserInput
    disconnect?: jam_userWhereInput | boolean
    delete?: jam_userWhereInput | boolean
    connect?: jam_userWhereUniqueInput
    update?: XOR<XOR<jam_userUpdateToOneWithWhereWithoutUserInput, jam_userUpdateWithoutUserInput>, jam_userUncheckedUpdateWithoutUserInput>
  }

  export type like_entityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<like_entityCreateWithoutUserInput, like_entityUncheckedCreateWithoutUserInput> | like_entityCreateWithoutUserInput[] | like_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_entityCreateOrConnectWithoutUserInput | like_entityCreateOrConnectWithoutUserInput[]
    upsert?: like_entityUpsertWithWhereUniqueWithoutUserInput | like_entityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: like_entityCreateManyUserInputEnvelope
    set?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    disconnect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    delete?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    connect?: like_entityWhereUniqueInput | like_entityWhereUniqueInput[]
    update?: like_entityUpdateWithWhereUniqueWithoutUserInput | like_entityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: like_entityUpdateManyWithWhereWithoutUserInput | like_entityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: like_entityScalarWhereInput | like_entityScalarWhereInput[]
  }

  export type play_queueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<play_queueCreateWithoutUserInput, play_queueUncheckedCreateWithoutUserInput> | play_queueCreateWithoutUserInput[] | play_queueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: play_queueCreateOrConnectWithoutUserInput | play_queueCreateOrConnectWithoutUserInput[]
    upsert?: play_queueUpsertWithWhereUniqueWithoutUserInput | play_queueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: play_queueCreateManyUserInputEnvelope
    set?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    disconnect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    delete?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    connect?: play_queueWhereUniqueInput | play_queueWhereUniqueInput[]
    update?: play_queueUpdateWithWhereUniqueWithoutUserInput | play_queueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: play_queueUpdateManyWithWhereWithoutUserInput | play_queueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: play_queueScalarWhereInput | play_queueScalarWhereInput[]
  }

  export type playlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutUserInput | playlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutUserInput | playlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutUserInput | playlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type stateUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<stateCreateWithoutUserInput, stateUncheckedCreateWithoutUserInput>
    connectOrCreate?: stateCreateOrConnectWithoutUserInput
    upsert?: stateUpsertWithoutUserInput
    disconnect?: stateWhereInput | boolean
    delete?: stateWhereInput | boolean
    connect?: stateWhereUniqueInput
    update?: XOR<XOR<stateUpdateToOneWithWhereWithoutUserInput, stateUpdateWithoutUserInput>, stateUncheckedUpdateWithoutUserInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type artistCreateWithoutAlbumInput = {
    name: string
    avatar?: string | null
    song?: songCreateNestedManyWithoutArtistInput
  }

  export type artistUncheckedCreateWithoutAlbumInput = {
    id?: number
    name: string
    avatar?: string | null
    song?: songUncheckedCreateNestedManyWithoutArtistInput
  }

  export type artistCreateOrConnectWithoutAlbumInput = {
    where: artistWhereUniqueInput
    create: XOR<artistCreateWithoutAlbumInput, artistUncheckedCreateWithoutAlbumInput>
  }

  export type song_albumCreateWithoutAlbumInput = {
    song: songCreateNestedOneWithoutSong_albumInput
  }

  export type song_albumUncheckedCreateWithoutAlbumInput = {
    song_id: number
  }

  export type song_albumCreateOrConnectWithoutAlbumInput = {
    where: song_albumWhereUniqueInput
    create: XOR<song_albumCreateWithoutAlbumInput, song_albumUncheckedCreateWithoutAlbumInput>
  }

  export type song_albumCreateManyAlbumInputEnvelope = {
    data: song_albumCreateManyAlbumInput | song_albumCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type artistUpsertWithoutAlbumInput = {
    update: XOR<artistUpdateWithoutAlbumInput, artistUncheckedUpdateWithoutAlbumInput>
    create: XOR<artistCreateWithoutAlbumInput, artistUncheckedCreateWithoutAlbumInput>
    where?: artistWhereInput
  }

  export type artistUpdateToOneWithWhereWithoutAlbumInput = {
    where?: artistWhereInput
    data: XOR<artistUpdateWithoutAlbumInput, artistUncheckedUpdateWithoutAlbumInput>
  }

  export type artistUpdateWithoutAlbumInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    song?: songUpdateManyWithoutArtistNestedInput
  }

  export type artistUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    song?: songUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type song_albumUpsertWithWhereUniqueWithoutAlbumInput = {
    where: song_albumWhereUniqueInput
    update: XOR<song_albumUpdateWithoutAlbumInput, song_albumUncheckedUpdateWithoutAlbumInput>
    create: XOR<song_albumCreateWithoutAlbumInput, song_albumUncheckedCreateWithoutAlbumInput>
  }

  export type song_albumUpdateWithWhereUniqueWithoutAlbumInput = {
    where: song_albumWhereUniqueInput
    data: XOR<song_albumUpdateWithoutAlbumInput, song_albumUncheckedUpdateWithoutAlbumInput>
  }

  export type song_albumUpdateManyWithWhereWithoutAlbumInput = {
    where: song_albumScalarWhereInput
    data: XOR<song_albumUpdateManyMutationInput, song_albumUncheckedUpdateManyWithoutAlbumInput>
  }

  export type song_albumScalarWhereInput = {
    AND?: song_albumScalarWhereInput | song_albumScalarWhereInput[]
    OR?: song_albumScalarWhereInput[]
    NOT?: song_albumScalarWhereInput | song_albumScalarWhereInput[]
    song_id?: IntFilter<"song_album"> | number
    album_id?: IntFilter<"song_album"> | number
  }

  export type albumCreateWithoutArtistInput = {
    name: string
    cover?: string | null
    song_album?: song_albumCreateNestedManyWithoutAlbumInput
  }

  export type albumUncheckedCreateWithoutArtistInput = {
    id?: number
    name: string
    cover?: string | null
    song_album?: song_albumUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type albumCreateOrConnectWithoutArtistInput = {
    where: albumWhereUniqueInput
    create: XOR<albumCreateWithoutArtistInput, albumUncheckedCreateWithoutArtistInput>
  }

  export type albumCreateManyArtistInputEnvelope = {
    data: albumCreateManyArtistInput | albumCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type songCreateWithoutArtistInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
  }

  export type songUncheckedCreateWithoutArtistInput = {
    id?: number
    name: string
    file: string
    duration: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutArtistInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutArtistInput, songUncheckedCreateWithoutArtistInput>
  }

  export type songCreateManyArtistInputEnvelope = {
    data: songCreateManyArtistInput | songCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type albumUpsertWithWhereUniqueWithoutArtistInput = {
    where: albumWhereUniqueInput
    update: XOR<albumUpdateWithoutArtistInput, albumUncheckedUpdateWithoutArtistInput>
    create: XOR<albumCreateWithoutArtistInput, albumUncheckedCreateWithoutArtistInput>
  }

  export type albumUpdateWithWhereUniqueWithoutArtistInput = {
    where: albumWhereUniqueInput
    data: XOR<albumUpdateWithoutArtistInput, albumUncheckedUpdateWithoutArtistInput>
  }

  export type albumUpdateManyWithWhereWithoutArtistInput = {
    where: albumScalarWhereInput
    data: XOR<albumUpdateManyMutationInput, albumUncheckedUpdateManyWithoutArtistInput>
  }

  export type albumScalarWhereInput = {
    AND?: albumScalarWhereInput | albumScalarWhereInput[]
    OR?: albumScalarWhereInput[]
    NOT?: albumScalarWhereInput | albumScalarWhereInput[]
    id?: IntFilter<"album"> | number
    name?: StringFilter<"album"> | string
    cover?: StringNullableFilter<"album"> | string | null
    artist_id?: IntNullableFilter<"album"> | number | null
  }

  export type songUpsertWithWhereUniqueWithoutArtistInput = {
    where: songWhereUniqueInput
    update: XOR<songUpdateWithoutArtistInput, songUncheckedUpdateWithoutArtistInput>
    create: XOR<songCreateWithoutArtistInput, songUncheckedCreateWithoutArtistInput>
  }

  export type songUpdateWithWhereUniqueWithoutArtistInput = {
    where: songWhereUniqueInput
    data: XOR<songUpdateWithoutArtistInput, songUncheckedUpdateWithoutArtistInput>
  }

  export type songUpdateManyWithWhereWithoutArtistInput = {
    where: songScalarWhereInput
    data: XOR<songUpdateManyMutationInput, songUncheckedUpdateManyWithoutArtistInput>
  }

  export type songScalarWhereInput = {
    AND?: songScalarWhereInput | songScalarWhereInput[]
    OR?: songScalarWhereInput[]
    NOT?: songScalarWhereInput | songScalarWhereInput[]
    id?: IntFilter<"song"> | number
    name?: StringFilter<"song"> | string
    file?: StringFilter<"song"> | string
    duration?: IntFilter<"song"> | number
    artist_id?: IntFilter<"song"> | number
  }

  export type like_entityCreateWithoutEntityInput = {
    like_id: number
    user: userCreateNestedOneWithoutLike_entityInput
  }

  export type like_entityUncheckedCreateWithoutEntityInput = {
    like_id: number
    user_id: number
  }

  export type like_entityCreateOrConnectWithoutEntityInput = {
    where: like_entityWhereUniqueInput
    create: XOR<like_entityCreateWithoutEntityInput, like_entityUncheckedCreateWithoutEntityInput>
  }

  export type like_entityCreateManyEntityInputEnvelope = {
    data: like_entityCreateManyEntityInput | like_entityCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type like_entityUpsertWithWhereUniqueWithoutEntityInput = {
    where: like_entityWhereUniqueInput
    update: XOR<like_entityUpdateWithoutEntityInput, like_entityUncheckedUpdateWithoutEntityInput>
    create: XOR<like_entityCreateWithoutEntityInput, like_entityUncheckedCreateWithoutEntityInput>
  }

  export type like_entityUpdateWithWhereUniqueWithoutEntityInput = {
    where: like_entityWhereUniqueInput
    data: XOR<like_entityUpdateWithoutEntityInput, like_entityUncheckedUpdateWithoutEntityInput>
  }

  export type like_entityUpdateManyWithWhereWithoutEntityInput = {
    where: like_entityScalarWhereInput
    data: XOR<like_entityUpdateManyMutationInput, like_entityUncheckedUpdateManyWithoutEntityInput>
  }

  export type like_entityScalarWhereInput = {
    AND?: like_entityScalarWhereInput | like_entityScalarWhereInput[]
    OR?: like_entityScalarWhereInput[]
    NOT?: like_entityScalarWhereInput | like_entityScalarWhereInput[]
    entity_id?: IntFilter<"like_entity"> | number
    like_id?: IntFilter<"like_entity"> | number
    user_id?: IntFilter<"like_entity"> | number
  }

  export type songCreateWithoutJamInput = {
    name: string
    file: string
    duration: number
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateWithoutJamInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutJamInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutJamInput, songUncheckedCreateWithoutJamInput>
  }

  export type jam_play_queueCreateWithoutJamInput = {
    song: songCreateNestedOneWithoutJam_play_queueInput
  }

  export type jam_play_queueUncheckedCreateWithoutJamInput = {
    song_id: number
  }

  export type jam_play_queueCreateOrConnectWithoutJamInput = {
    where: jam_play_queueWhereUniqueInput
    create: XOR<jam_play_queueCreateWithoutJamInput, jam_play_queueUncheckedCreateWithoutJamInput>
  }

  export type jam_play_queueCreateManyJamInputEnvelope = {
    data: jam_play_queueCreateManyJamInput | jam_play_queueCreateManyJamInput[]
    skipDuplicates?: boolean
  }

  export type jam_userCreateWithoutJamInput = {
    user: userCreateNestedOneWithoutJam_userInput
  }

  export type jam_userUncheckedCreateWithoutJamInput = {
    user_id: number
  }

  export type jam_userCreateOrConnectWithoutJamInput = {
    where: jam_userWhereUniqueInput
    create: XOR<jam_userCreateWithoutJamInput, jam_userUncheckedCreateWithoutJamInput>
  }

  export type jam_userCreateManyJamInputEnvelope = {
    data: jam_userCreateManyJamInput | jam_userCreateManyJamInput[]
    skipDuplicates?: boolean
  }

  export type songUpsertWithoutJamInput = {
    update: XOR<songUpdateWithoutJamInput, songUncheckedUpdateWithoutJamInput>
    create: XOR<songCreateWithoutJamInput, songUncheckedCreateWithoutJamInput>
    where?: songWhereInput
  }

  export type songUpdateToOneWithWhereWithoutJamInput = {
    where?: songWhereInput
    data: XOR<songUpdateWithoutJamInput, songUncheckedUpdateWithoutJamInput>
  }

  export type songUpdateWithoutJamInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutJamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type jam_play_queueUpsertWithWhereUniqueWithoutJamInput = {
    where: jam_play_queueWhereUniqueInput
    update: XOR<jam_play_queueUpdateWithoutJamInput, jam_play_queueUncheckedUpdateWithoutJamInput>
    create: XOR<jam_play_queueCreateWithoutJamInput, jam_play_queueUncheckedCreateWithoutJamInput>
  }

  export type jam_play_queueUpdateWithWhereUniqueWithoutJamInput = {
    where: jam_play_queueWhereUniqueInput
    data: XOR<jam_play_queueUpdateWithoutJamInput, jam_play_queueUncheckedUpdateWithoutJamInput>
  }

  export type jam_play_queueUpdateManyWithWhereWithoutJamInput = {
    where: jam_play_queueScalarWhereInput
    data: XOR<jam_play_queueUpdateManyMutationInput, jam_play_queueUncheckedUpdateManyWithoutJamInput>
  }

  export type jam_play_queueScalarWhereInput = {
    AND?: jam_play_queueScalarWhereInput | jam_play_queueScalarWhereInput[]
    OR?: jam_play_queueScalarWhereInput[]
    NOT?: jam_play_queueScalarWhereInput | jam_play_queueScalarWhereInput[]
    jam_id?: StringFilter<"jam_play_queue"> | string
    song_id?: IntFilter<"jam_play_queue"> | number
  }

  export type jam_userUpsertWithWhereUniqueWithoutJamInput = {
    where: jam_userWhereUniqueInput
    update: XOR<jam_userUpdateWithoutJamInput, jam_userUncheckedUpdateWithoutJamInput>
    create: XOR<jam_userCreateWithoutJamInput, jam_userUncheckedCreateWithoutJamInput>
  }

  export type jam_userUpdateWithWhereUniqueWithoutJamInput = {
    where: jam_userWhereUniqueInput
    data: XOR<jam_userUpdateWithoutJamInput, jam_userUncheckedUpdateWithoutJamInput>
  }

  export type jam_userUpdateManyWithWhereWithoutJamInput = {
    where: jam_userScalarWhereInput
    data: XOR<jam_userUpdateManyMutationInput, jam_userUncheckedUpdateManyWithoutJamInput>
  }

  export type jam_userScalarWhereInput = {
    AND?: jam_userScalarWhereInput | jam_userScalarWhereInput[]
    OR?: jam_userScalarWhereInput[]
    NOT?: jam_userScalarWhereInput | jam_userScalarWhereInput[]
    jam_id?: StringFilter<"jam_user"> | string
    user_id?: IntFilter<"jam_user"> | number
  }

  export type songCreateWithoutJam_play_queueInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateWithoutJam_play_queueInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutJam_play_queueInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutJam_play_queueInput, songUncheckedCreateWithoutJam_play_queueInput>
  }

  export type jamCreateWithoutJam_play_queueInput = {
    id: string
    play?: boolean | null
    timestampt?: number | null
    song?: songCreateNestedOneWithoutJamInput
    jam_user?: jam_userCreateNestedManyWithoutJamInput
  }

  export type jamUncheckedCreateWithoutJam_play_queueInput = {
    id: string
    song_id?: number | null
    play?: boolean | null
    timestampt?: number | null
    jam_user?: jam_userUncheckedCreateNestedManyWithoutJamInput
  }

  export type jamCreateOrConnectWithoutJam_play_queueInput = {
    where: jamWhereUniqueInput
    create: XOR<jamCreateWithoutJam_play_queueInput, jamUncheckedCreateWithoutJam_play_queueInput>
  }

  export type songUpsertWithoutJam_play_queueInput = {
    update: XOR<songUpdateWithoutJam_play_queueInput, songUncheckedUpdateWithoutJam_play_queueInput>
    create: XOR<songCreateWithoutJam_play_queueInput, songUncheckedCreateWithoutJam_play_queueInput>
    where?: songWhereInput
  }

  export type songUpdateToOneWithWhereWithoutJam_play_queueInput = {
    where?: songWhereInput
    data: XOR<songUpdateWithoutJam_play_queueInput, songUncheckedUpdateWithoutJam_play_queueInput>
  }

  export type songUpdateWithoutJam_play_queueInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutJam_play_queueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type jamUpsertWithoutJam_play_queueInput = {
    update: XOR<jamUpdateWithoutJam_play_queueInput, jamUncheckedUpdateWithoutJam_play_queueInput>
    create: XOR<jamCreateWithoutJam_play_queueInput, jamUncheckedCreateWithoutJam_play_queueInput>
    where?: jamWhereInput
  }

  export type jamUpdateToOneWithWhereWithoutJam_play_queueInput = {
    where?: jamWhereInput
    data: XOR<jamUpdateWithoutJam_play_queueInput, jamUncheckedUpdateWithoutJam_play_queueInput>
  }

  export type jamUpdateWithoutJam_play_queueInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    song?: songUpdateOneWithoutJamNestedInput
    jam_user?: jam_userUpdateManyWithoutJamNestedInput
  }

  export type jamUncheckedUpdateWithoutJam_play_queueInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    jam_user?: jam_userUncheckedUpdateManyWithoutJamNestedInput
  }

  export type jamCreateWithoutJam_userInput = {
    id: string
    play?: boolean | null
    timestampt?: number | null
    song?: songCreateNestedOneWithoutJamInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutJamInput
  }

  export type jamUncheckedCreateWithoutJam_userInput = {
    id: string
    song_id?: number | null
    play?: boolean | null
    timestampt?: number | null
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutJamInput
  }

  export type jamCreateOrConnectWithoutJam_userInput = {
    where: jamWhereUniqueInput
    create: XOR<jamCreateWithoutJam_userInput, jamUncheckedCreateWithoutJam_userInput>
  }

  export type userCreateWithoutJam_userInput = {
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    like_entity?: like_entityCreateNestedManyWithoutUserInput
    play_queue?: play_queueCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    state?: stateCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutJam_userInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    like_entity?: like_entityUncheckedCreateNestedManyWithoutUserInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    state?: stateUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutJam_userInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutJam_userInput, userUncheckedCreateWithoutJam_userInput>
  }

  export type jamUpsertWithoutJam_userInput = {
    update: XOR<jamUpdateWithoutJam_userInput, jamUncheckedUpdateWithoutJam_userInput>
    create: XOR<jamCreateWithoutJam_userInput, jamUncheckedCreateWithoutJam_userInput>
    where?: jamWhereInput
  }

  export type jamUpdateToOneWithWhereWithoutJam_userInput = {
    where?: jamWhereInput
    data: XOR<jamUpdateWithoutJam_userInput, jamUncheckedUpdateWithoutJam_userInput>
  }

  export type jamUpdateWithoutJam_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    song?: songUpdateOneWithoutJamNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutJamNestedInput
  }

  export type jamUncheckedUpdateWithoutJam_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutJamNestedInput
  }

  export type userUpsertWithoutJam_userInput = {
    update: XOR<userUpdateWithoutJam_userInput, userUncheckedUpdateWithoutJam_userInput>
    create: XOR<userCreateWithoutJam_userInput, userUncheckedCreateWithoutJam_userInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutJam_userInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutJam_userInput, userUncheckedUpdateWithoutJam_userInput>
  }

  export type userUpdateWithoutJam_userInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    like_entity?: like_entityUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    state?: stateUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutJam_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    like_entity?: like_entityUncheckedUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    state?: stateUncheckedUpdateOneWithoutUserNestedInput
  }

  export type entityCreateWithoutLike_entityInput = {
    name: string
  }

  export type entityUncheckedCreateWithoutLike_entityInput = {
    id?: number
    name: string
  }

  export type entityCreateOrConnectWithoutLike_entityInput = {
    where: entityWhereUniqueInput
    create: XOR<entityCreateWithoutLike_entityInput, entityUncheckedCreateWithoutLike_entityInput>
  }

  export type userCreateWithoutLike_entityInput = {
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userCreateNestedOneWithoutUserInput
    play_queue?: play_queueCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    state?: stateCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutLike_entityInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userUncheckedCreateNestedOneWithoutUserInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    state?: stateUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutLike_entityInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLike_entityInput, userUncheckedCreateWithoutLike_entityInput>
  }

  export type entityUpsertWithoutLike_entityInput = {
    update: XOR<entityUpdateWithoutLike_entityInput, entityUncheckedUpdateWithoutLike_entityInput>
    create: XOR<entityCreateWithoutLike_entityInput, entityUncheckedCreateWithoutLike_entityInput>
    where?: entityWhereInput
  }

  export type entityUpdateToOneWithWhereWithoutLike_entityInput = {
    where?: entityWhereInput
    data: XOR<entityUpdateWithoutLike_entityInput, entityUncheckedUpdateWithoutLike_entityInput>
  }

  export type entityUpdateWithoutLike_entityInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type entityUncheckedUpdateWithoutLike_entityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutLike_entityInput = {
    update: XOR<userUpdateWithoutLike_entityInput, userUncheckedUpdateWithoutLike_entityInput>
    create: XOR<userCreateWithoutLike_entityInput, userUncheckedCreateWithoutLike_entityInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLike_entityInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLike_entityInput, userUncheckedUpdateWithoutLike_entityInput>
  }

  export type userUpdateWithoutLike_entityInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUpdateOneWithoutUserNestedInput
    play_queue?: play_queueUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    state?: stateUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLike_entityInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUncheckedUpdateOneWithoutUserNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    state?: stateUncheckedUpdateOneWithoutUserNestedInput
  }

  export type songCreateWithoutPlay_queueInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateWithoutPlay_queueInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutPlay_queueInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutPlay_queueInput, songUncheckedCreateWithoutPlay_queueInput>
  }

  export type userCreateWithoutPlay_queueInput = {
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userCreateNestedOneWithoutUserInput
    like_entity?: like_entityCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    state?: stateCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutPlay_queueInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userUncheckedCreateNestedOneWithoutUserInput
    like_entity?: like_entityUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    state?: stateUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutPlay_queueInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPlay_queueInput, userUncheckedCreateWithoutPlay_queueInput>
  }

  export type songUpsertWithoutPlay_queueInput = {
    update: XOR<songUpdateWithoutPlay_queueInput, songUncheckedUpdateWithoutPlay_queueInput>
    create: XOR<songCreateWithoutPlay_queueInput, songUncheckedCreateWithoutPlay_queueInput>
    where?: songWhereInput
  }

  export type songUpdateToOneWithWhereWithoutPlay_queueInput = {
    where?: songWhereInput
    data: XOR<songUpdateWithoutPlay_queueInput, songUncheckedUpdateWithoutPlay_queueInput>
  }

  export type songUpdateWithoutPlay_queueInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutPlay_queueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type userUpsertWithoutPlay_queueInput = {
    update: XOR<userUpdateWithoutPlay_queueInput, userUncheckedUpdateWithoutPlay_queueInput>
    create: XOR<userCreateWithoutPlay_queueInput, userUncheckedCreateWithoutPlay_queueInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPlay_queueInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPlay_queueInput, userUncheckedUpdateWithoutPlay_queueInput>
  }

  export type userUpdateWithoutPlay_queueInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    state?: stateUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPlay_queueInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUncheckedUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    state?: stateUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutPlaylistInput = {
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userCreateNestedOneWithoutUserInput
    like_entity?: like_entityCreateNestedManyWithoutUserInput
    play_queue?: play_queueCreateNestedManyWithoutUserInput
    state?: stateCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutPlaylistInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userUncheckedCreateNestedOneWithoutUserInput
    like_entity?: like_entityUncheckedCreateNestedManyWithoutUserInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutUserInput
    state?: stateUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutPlaylistInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
  }

  export type playlist_songCreateWithoutPlaylistInput = {
    song: songCreateNestedOneWithoutPlaylist_songInput
  }

  export type playlist_songUncheckedCreateWithoutPlaylistInput = {
    song_id: number
  }

  export type playlist_songCreateOrConnectWithoutPlaylistInput = {
    where: playlist_songWhereUniqueInput
    create: XOR<playlist_songCreateWithoutPlaylistInput, playlist_songUncheckedCreateWithoutPlaylistInput>
  }

  export type playlist_songCreateManyPlaylistInputEnvelope = {
    data: playlist_songCreateManyPlaylistInput | playlist_songCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutPlaylistInput = {
    update: XOR<userUpdateWithoutPlaylistInput, userUncheckedUpdateWithoutPlaylistInput>
    create: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPlaylistInput, userUncheckedUpdateWithoutPlaylistInput>
  }

  export type userUpdateWithoutPlaylistInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUpdateManyWithoutUserNestedInput
    state?: stateUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUncheckedUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUncheckedUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutUserNestedInput
    state?: stateUncheckedUpdateOneWithoutUserNestedInput
  }

  export type playlist_songUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: playlist_songWhereUniqueInput
    update: XOR<playlist_songUpdateWithoutPlaylistInput, playlist_songUncheckedUpdateWithoutPlaylistInput>
    create: XOR<playlist_songCreateWithoutPlaylistInput, playlist_songUncheckedCreateWithoutPlaylistInput>
  }

  export type playlist_songUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: playlist_songWhereUniqueInput
    data: XOR<playlist_songUpdateWithoutPlaylistInput, playlist_songUncheckedUpdateWithoutPlaylistInput>
  }

  export type playlist_songUpdateManyWithWhereWithoutPlaylistInput = {
    where: playlist_songScalarWhereInput
    data: XOR<playlist_songUpdateManyMutationInput, playlist_songUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type playlist_songScalarWhereInput = {
    AND?: playlist_songScalarWhereInput | playlist_songScalarWhereInput[]
    OR?: playlist_songScalarWhereInput[]
    NOT?: playlist_songScalarWhereInput | playlist_songScalarWhereInput[]
    playlist_id?: IntFilter<"playlist_song"> | number
    song_id?: IntFilter<"playlist_song"> | number
  }

  export type playlistCreateWithoutPlaylist_songInput = {
    name: string
    cover?: string | null
    user: userCreateNestedOneWithoutPlaylistInput
  }

  export type playlistUncheckedCreateWithoutPlaylist_songInput = {
    id?: number
    name: string
    cover?: string | null
    user_id: number
  }

  export type playlistCreateOrConnectWithoutPlaylist_songInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutPlaylist_songInput, playlistUncheckedCreateWithoutPlaylist_songInput>
  }

  export type songCreateWithoutPlaylist_songInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateWithoutPlaylist_songInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutPlaylist_songInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutPlaylist_songInput, songUncheckedCreateWithoutPlaylist_songInput>
  }

  export type playlistUpsertWithoutPlaylist_songInput = {
    update: XOR<playlistUpdateWithoutPlaylist_songInput, playlistUncheckedUpdateWithoutPlaylist_songInput>
    create: XOR<playlistCreateWithoutPlaylist_songInput, playlistUncheckedCreateWithoutPlaylist_songInput>
    where?: playlistWhereInput
  }

  export type playlistUpdateToOneWithWhereWithoutPlaylist_songInput = {
    where?: playlistWhereInput
    data: XOR<playlistUpdateWithoutPlaylist_songInput, playlistUncheckedUpdateWithoutPlaylist_songInput>
  }

  export type playlistUpdateWithoutPlaylist_songInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateWithoutPlaylist_songInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type songUpsertWithoutPlaylist_songInput = {
    update: XOR<songUpdateWithoutPlaylist_songInput, songUncheckedUpdateWithoutPlaylist_songInput>
    create: XOR<songCreateWithoutPlaylist_songInput, songUncheckedCreateWithoutPlaylist_songInput>
    where?: songWhereInput
  }

  export type songUpdateToOneWithWhereWithoutPlaylist_songInput = {
    where?: songWhereInput
    data: XOR<songUpdateWithoutPlaylist_songInput, songUncheckedUpdateWithoutPlaylist_songInput>
  }

  export type songUpdateWithoutPlaylist_songInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutPlaylist_songInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type jamCreateWithoutSongInput = {
    id: string
    play?: boolean | null
    timestampt?: number | null
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutJamInput
    jam_user?: jam_userCreateNestedManyWithoutJamInput
  }

  export type jamUncheckedCreateWithoutSongInput = {
    id: string
    play?: boolean | null
    timestampt?: number | null
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutJamInput
    jam_user?: jam_userUncheckedCreateNestedManyWithoutJamInput
  }

  export type jamCreateOrConnectWithoutSongInput = {
    where: jamWhereUniqueInput
    create: XOR<jamCreateWithoutSongInput, jamUncheckedCreateWithoutSongInput>
  }

  export type jamCreateManySongInputEnvelope = {
    data: jamCreateManySongInput | jamCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type jam_play_queueCreateWithoutSongInput = {
    jam: jamCreateNestedOneWithoutJam_play_queueInput
  }

  export type jam_play_queueUncheckedCreateWithoutSongInput = {
    jam_id: string
  }

  export type jam_play_queueCreateOrConnectWithoutSongInput = {
    where: jam_play_queueWhereUniqueInput
    create: XOR<jam_play_queueCreateWithoutSongInput, jam_play_queueUncheckedCreateWithoutSongInput>
  }

  export type jam_play_queueCreateManySongInputEnvelope = {
    data: jam_play_queueCreateManySongInput | jam_play_queueCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type play_queueCreateWithoutSongInput = {
    user: userCreateNestedOneWithoutPlay_queueInput
  }

  export type play_queueUncheckedCreateWithoutSongInput = {
    user_id: number
  }

  export type play_queueCreateOrConnectWithoutSongInput = {
    where: play_queueWhereUniqueInput
    create: XOR<play_queueCreateWithoutSongInput, play_queueUncheckedCreateWithoutSongInput>
  }

  export type play_queueCreateManySongInputEnvelope = {
    data: play_queueCreateManySongInput | play_queueCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type playlist_songCreateWithoutSongInput = {
    playlist: playlistCreateNestedOneWithoutPlaylist_songInput
  }

  export type playlist_songUncheckedCreateWithoutSongInput = {
    playlist_id: number
  }

  export type playlist_songCreateOrConnectWithoutSongInput = {
    where: playlist_songWhereUniqueInput
    create: XOR<playlist_songCreateWithoutSongInput, playlist_songUncheckedCreateWithoutSongInput>
  }

  export type playlist_songCreateManySongInputEnvelope = {
    data: playlist_songCreateManySongInput | playlist_songCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type song_albumCreateWithoutSongInput = {
    album: albumCreateNestedOneWithoutSong_albumInput
  }

  export type song_albumUncheckedCreateWithoutSongInput = {
    album_id: number
  }

  export type song_albumCreateOrConnectWithoutSongInput = {
    where: song_albumWhereUniqueInput
    create: XOR<song_albumCreateWithoutSongInput, song_albumUncheckedCreateWithoutSongInput>
  }

  export type song_albumCreateManySongInputEnvelope = {
    data: song_albumCreateManySongInput | song_albumCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type stateCreateWithoutSongInput = {
    user: userCreateNestedOneWithoutStateInput
  }

  export type stateUncheckedCreateWithoutSongInput = {
    user_id: number
  }

  export type stateCreateOrConnectWithoutSongInput = {
    where: stateWhereUniqueInput
    create: XOR<stateCreateWithoutSongInput, stateUncheckedCreateWithoutSongInput>
  }

  export type stateCreateManySongInputEnvelope = {
    data: stateCreateManySongInput | stateCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type artistCreateWithoutSongInput = {
    name: string
    avatar?: string | null
    album?: albumCreateNestedManyWithoutArtistInput
  }

  export type artistUncheckedCreateWithoutSongInput = {
    id?: number
    name: string
    avatar?: string | null
    album?: albumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type artistCreateOrConnectWithoutSongInput = {
    where: artistWhereUniqueInput
    create: XOR<artistCreateWithoutSongInput, artistUncheckedCreateWithoutSongInput>
  }

  export type jamUpsertWithWhereUniqueWithoutSongInput = {
    where: jamWhereUniqueInput
    update: XOR<jamUpdateWithoutSongInput, jamUncheckedUpdateWithoutSongInput>
    create: XOR<jamCreateWithoutSongInput, jamUncheckedCreateWithoutSongInput>
  }

  export type jamUpdateWithWhereUniqueWithoutSongInput = {
    where: jamWhereUniqueInput
    data: XOR<jamUpdateWithoutSongInput, jamUncheckedUpdateWithoutSongInput>
  }

  export type jamUpdateManyWithWhereWithoutSongInput = {
    where: jamScalarWhereInput
    data: XOR<jamUpdateManyMutationInput, jamUncheckedUpdateManyWithoutSongInput>
  }

  export type jamScalarWhereInput = {
    AND?: jamScalarWhereInput | jamScalarWhereInput[]
    OR?: jamScalarWhereInput[]
    NOT?: jamScalarWhereInput | jamScalarWhereInput[]
    id?: StringFilter<"jam"> | string
    song_id?: IntNullableFilter<"jam"> | number | null
    play?: BoolNullableFilter<"jam"> | boolean | null
    timestampt?: IntNullableFilter<"jam"> | number | null
  }

  export type jam_play_queueUpsertWithWhereUniqueWithoutSongInput = {
    where: jam_play_queueWhereUniqueInput
    update: XOR<jam_play_queueUpdateWithoutSongInput, jam_play_queueUncheckedUpdateWithoutSongInput>
    create: XOR<jam_play_queueCreateWithoutSongInput, jam_play_queueUncheckedCreateWithoutSongInput>
  }

  export type jam_play_queueUpdateWithWhereUniqueWithoutSongInput = {
    where: jam_play_queueWhereUniqueInput
    data: XOR<jam_play_queueUpdateWithoutSongInput, jam_play_queueUncheckedUpdateWithoutSongInput>
  }

  export type jam_play_queueUpdateManyWithWhereWithoutSongInput = {
    where: jam_play_queueScalarWhereInput
    data: XOR<jam_play_queueUpdateManyMutationInput, jam_play_queueUncheckedUpdateManyWithoutSongInput>
  }

  export type play_queueUpsertWithWhereUniqueWithoutSongInput = {
    where: play_queueWhereUniqueInput
    update: XOR<play_queueUpdateWithoutSongInput, play_queueUncheckedUpdateWithoutSongInput>
    create: XOR<play_queueCreateWithoutSongInput, play_queueUncheckedCreateWithoutSongInput>
  }

  export type play_queueUpdateWithWhereUniqueWithoutSongInput = {
    where: play_queueWhereUniqueInput
    data: XOR<play_queueUpdateWithoutSongInput, play_queueUncheckedUpdateWithoutSongInput>
  }

  export type play_queueUpdateManyWithWhereWithoutSongInput = {
    where: play_queueScalarWhereInput
    data: XOR<play_queueUpdateManyMutationInput, play_queueUncheckedUpdateManyWithoutSongInput>
  }

  export type play_queueScalarWhereInput = {
    AND?: play_queueScalarWhereInput | play_queueScalarWhereInput[]
    OR?: play_queueScalarWhereInput[]
    NOT?: play_queueScalarWhereInput | play_queueScalarWhereInput[]
    user_id?: IntFilter<"play_queue"> | number
    song_id?: IntFilter<"play_queue"> | number
  }

  export type playlist_songUpsertWithWhereUniqueWithoutSongInput = {
    where: playlist_songWhereUniqueInput
    update: XOR<playlist_songUpdateWithoutSongInput, playlist_songUncheckedUpdateWithoutSongInput>
    create: XOR<playlist_songCreateWithoutSongInput, playlist_songUncheckedCreateWithoutSongInput>
  }

  export type playlist_songUpdateWithWhereUniqueWithoutSongInput = {
    where: playlist_songWhereUniqueInput
    data: XOR<playlist_songUpdateWithoutSongInput, playlist_songUncheckedUpdateWithoutSongInput>
  }

  export type playlist_songUpdateManyWithWhereWithoutSongInput = {
    where: playlist_songScalarWhereInput
    data: XOR<playlist_songUpdateManyMutationInput, playlist_songUncheckedUpdateManyWithoutSongInput>
  }

  export type song_albumUpsertWithWhereUniqueWithoutSongInput = {
    where: song_albumWhereUniqueInput
    update: XOR<song_albumUpdateWithoutSongInput, song_albumUncheckedUpdateWithoutSongInput>
    create: XOR<song_albumCreateWithoutSongInput, song_albumUncheckedCreateWithoutSongInput>
  }

  export type song_albumUpdateWithWhereUniqueWithoutSongInput = {
    where: song_albumWhereUniqueInput
    data: XOR<song_albumUpdateWithoutSongInput, song_albumUncheckedUpdateWithoutSongInput>
  }

  export type song_albumUpdateManyWithWhereWithoutSongInput = {
    where: song_albumScalarWhereInput
    data: XOR<song_albumUpdateManyMutationInput, song_albumUncheckedUpdateManyWithoutSongInput>
  }

  export type stateUpsertWithWhereUniqueWithoutSongInput = {
    where: stateWhereUniqueInput
    update: XOR<stateUpdateWithoutSongInput, stateUncheckedUpdateWithoutSongInput>
    create: XOR<stateCreateWithoutSongInput, stateUncheckedCreateWithoutSongInput>
  }

  export type stateUpdateWithWhereUniqueWithoutSongInput = {
    where: stateWhereUniqueInput
    data: XOR<stateUpdateWithoutSongInput, stateUncheckedUpdateWithoutSongInput>
  }

  export type stateUpdateManyWithWhereWithoutSongInput = {
    where: stateScalarWhereInput
    data: XOR<stateUpdateManyMutationInput, stateUncheckedUpdateManyWithoutSongInput>
  }

  export type stateScalarWhereInput = {
    AND?: stateScalarWhereInput | stateScalarWhereInput[]
    OR?: stateScalarWhereInput[]
    NOT?: stateScalarWhereInput | stateScalarWhereInput[]
    user_id?: IntFilter<"state"> | number
    song_id?: IntNullableFilter<"state"> | number | null
  }

  export type artistUpsertWithoutSongInput = {
    update: XOR<artistUpdateWithoutSongInput, artistUncheckedUpdateWithoutSongInput>
    create: XOR<artistCreateWithoutSongInput, artistUncheckedCreateWithoutSongInput>
    where?: artistWhereInput
  }

  export type artistUpdateToOneWithWhereWithoutSongInput = {
    where?: artistWhereInput
    data: XOR<artistUpdateWithoutSongInput, artistUncheckedUpdateWithoutSongInput>
  }

  export type artistUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    album?: albumUpdateManyWithoutArtistNestedInput
  }

  export type artistUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    album?: albumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type albumCreateWithoutSong_albumInput = {
    name: string
    cover?: string | null
    artist?: artistCreateNestedOneWithoutAlbumInput
  }

  export type albumUncheckedCreateWithoutSong_albumInput = {
    id?: number
    name: string
    cover?: string | null
    artist_id?: number | null
  }

  export type albumCreateOrConnectWithoutSong_albumInput = {
    where: albumWhereUniqueInput
    create: XOR<albumCreateWithoutSong_albumInput, albumUncheckedCreateWithoutSong_albumInput>
  }

  export type songCreateWithoutSong_albumInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    state?: stateCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateWithoutSong_albumInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    state?: stateUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutSong_albumInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutSong_albumInput, songUncheckedCreateWithoutSong_albumInput>
  }

  export type albumUpsertWithoutSong_albumInput = {
    update: XOR<albumUpdateWithoutSong_albumInput, albumUncheckedUpdateWithoutSong_albumInput>
    create: XOR<albumCreateWithoutSong_albumInput, albumUncheckedCreateWithoutSong_albumInput>
    where?: albumWhereInput
  }

  export type albumUpdateToOneWithWhereWithoutSong_albumInput = {
    where?: albumWhereInput
    data: XOR<albumUpdateWithoutSong_albumInput, albumUncheckedUpdateWithoutSong_albumInput>
  }

  export type albumUpdateWithoutSong_albumInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: artistUpdateOneWithoutAlbumNestedInput
  }

  export type albumUncheckedUpdateWithoutSong_albumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artist_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type songUpsertWithoutSong_albumInput = {
    update: XOR<songUpdateWithoutSong_albumInput, songUncheckedUpdateWithoutSong_albumInput>
    create: XOR<songCreateWithoutSong_albumInput, songUncheckedCreateWithoutSong_albumInput>
    where?: songWhereInput
  }

  export type songUpdateToOneWithWhereWithoutSong_albumInput = {
    where?: songWhereInput
    data: XOR<songUpdateWithoutSong_albumInput, songUncheckedUpdateWithoutSong_albumInput>
  }

  export type songUpdateWithoutSong_albumInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutSong_albumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type userCreateWithoutStateInput = {
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userCreateNestedOneWithoutUserInput
    like_entity?: like_entityCreateNestedManyWithoutUserInput
    play_queue?: play_queueCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutStateInput = {
    id?: number
    username: string
    password: string
    email: string
    role?: string | null
    gender: string
    marketing?: boolean | null
    share_content?: boolean | null
    birthday: Date | string
    avatar?: string | null
    jam_user?: jam_userUncheckedCreateNestedOneWithoutUserInput
    like_entity?: like_entityUncheckedCreateNestedManyWithoutUserInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutStateInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStateInput, userUncheckedCreateWithoutStateInput>
  }

  export type songCreateWithoutStateInput = {
    name: string
    file: string
    duration: number
    jam?: jamCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueCreateNestedManyWithoutSongInput
    play_queue?: play_queueCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songCreateNestedManyWithoutSongInput
    song_album?: song_albumCreateNestedManyWithoutSongInput
    artist: artistCreateNestedOneWithoutSongInput
  }

  export type songUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    file: string
    duration: number
    artist_id: number
    jam?: jamUncheckedCreateNestedManyWithoutSongInput
    jam_play_queue?: jam_play_queueUncheckedCreateNestedManyWithoutSongInput
    play_queue?: play_queueUncheckedCreateNestedManyWithoutSongInput
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutSongInput
    song_album?: song_albumUncheckedCreateNestedManyWithoutSongInput
  }

  export type songCreateOrConnectWithoutStateInput = {
    where: songWhereUniqueInput
    create: XOR<songCreateWithoutStateInput, songUncheckedCreateWithoutStateInput>
  }

  export type userUpsertWithoutStateInput = {
    update: XOR<userUpdateWithoutStateInput, userUncheckedUpdateWithoutStateInput>
    create: XOR<userCreateWithoutStateInput, userUncheckedCreateWithoutStateInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStateInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStateInput, userUncheckedUpdateWithoutStateInput>
  }

  export type userUpdateWithoutStateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    share_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    jam_user?: jam_userUncheckedUpdateOneWithoutUserNestedInput
    like_entity?: like_entityUncheckedUpdateManyWithoutUserNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type songUpsertWithoutStateInput = {
    update: XOR<songUpdateWithoutStateInput, songUncheckedUpdateWithoutStateInput>
    create: XOR<songCreateWithoutStateInput, songUncheckedCreateWithoutStateInput>
    where?: songWhereInput
  }

  export type songUpdateToOneWithWhereWithoutStateInput = {
    where?: songWhereInput
    data: XOR<songUpdateWithoutStateInput, songUncheckedUpdateWithoutStateInput>
  }

  export type songUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    artist?: artistUpdateOneRequiredWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    artist_id?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
  }

  export type jam_userCreateWithoutUserInput = {
    jam: jamCreateNestedOneWithoutJam_userInput
  }

  export type jam_userUncheckedCreateWithoutUserInput = {
    jam_id: string
  }

  export type jam_userCreateOrConnectWithoutUserInput = {
    where: jam_userWhereUniqueInput
    create: XOR<jam_userCreateWithoutUserInput, jam_userUncheckedCreateWithoutUserInput>
  }

  export type like_entityCreateWithoutUserInput = {
    like_id: number
    entity: entityCreateNestedOneWithoutLike_entityInput
  }

  export type like_entityUncheckedCreateWithoutUserInput = {
    entity_id: number
    like_id: number
  }

  export type like_entityCreateOrConnectWithoutUserInput = {
    where: like_entityWhereUniqueInput
    create: XOR<like_entityCreateWithoutUserInput, like_entityUncheckedCreateWithoutUserInput>
  }

  export type like_entityCreateManyUserInputEnvelope = {
    data: like_entityCreateManyUserInput | like_entityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type play_queueCreateWithoutUserInput = {
    song: songCreateNestedOneWithoutPlay_queueInput
  }

  export type play_queueUncheckedCreateWithoutUserInput = {
    song_id: number
  }

  export type play_queueCreateOrConnectWithoutUserInput = {
    where: play_queueWhereUniqueInput
    create: XOR<play_queueCreateWithoutUserInput, play_queueUncheckedCreateWithoutUserInput>
  }

  export type play_queueCreateManyUserInputEnvelope = {
    data: play_queueCreateManyUserInput | play_queueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type playlistCreateWithoutUserInput = {
    name: string
    cover?: string | null
    playlist_song?: playlist_songCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    cover?: string | null
    playlist_song?: playlist_songUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type playlistCreateOrConnectWithoutUserInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput>
  }

  export type playlistCreateManyUserInputEnvelope = {
    data: playlistCreateManyUserInput | playlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type stateCreateWithoutUserInput = {
    song?: songCreateNestedOneWithoutStateInput
  }

  export type stateUncheckedCreateWithoutUserInput = {
    song_id?: number | null
  }

  export type stateCreateOrConnectWithoutUserInput = {
    where: stateWhereUniqueInput
    create: XOR<stateCreateWithoutUserInput, stateUncheckedCreateWithoutUserInput>
  }

  export type jam_userUpsertWithoutUserInput = {
    update: XOR<jam_userUpdateWithoutUserInput, jam_userUncheckedUpdateWithoutUserInput>
    create: XOR<jam_userCreateWithoutUserInput, jam_userUncheckedCreateWithoutUserInput>
    where?: jam_userWhereInput
  }

  export type jam_userUpdateToOneWithWhereWithoutUserInput = {
    where?: jam_userWhereInput
    data: XOR<jam_userUpdateWithoutUserInput, jam_userUncheckedUpdateWithoutUserInput>
  }

  export type jam_userUpdateWithoutUserInput = {
    jam?: jamUpdateOneRequiredWithoutJam_userNestedInput
  }

  export type jam_userUncheckedUpdateWithoutUserInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
  }

  export type like_entityUpsertWithWhereUniqueWithoutUserInput = {
    where: like_entityWhereUniqueInput
    update: XOR<like_entityUpdateWithoutUserInput, like_entityUncheckedUpdateWithoutUserInput>
    create: XOR<like_entityCreateWithoutUserInput, like_entityUncheckedCreateWithoutUserInput>
  }

  export type like_entityUpdateWithWhereUniqueWithoutUserInput = {
    where: like_entityWhereUniqueInput
    data: XOR<like_entityUpdateWithoutUserInput, like_entityUncheckedUpdateWithoutUserInput>
  }

  export type like_entityUpdateManyWithWhereWithoutUserInput = {
    where: like_entityScalarWhereInput
    data: XOR<like_entityUpdateManyMutationInput, like_entityUncheckedUpdateManyWithoutUserInput>
  }

  export type play_queueUpsertWithWhereUniqueWithoutUserInput = {
    where: play_queueWhereUniqueInput
    update: XOR<play_queueUpdateWithoutUserInput, play_queueUncheckedUpdateWithoutUserInput>
    create: XOR<play_queueCreateWithoutUserInput, play_queueUncheckedCreateWithoutUserInput>
  }

  export type play_queueUpdateWithWhereUniqueWithoutUserInput = {
    where: play_queueWhereUniqueInput
    data: XOR<play_queueUpdateWithoutUserInput, play_queueUncheckedUpdateWithoutUserInput>
  }

  export type play_queueUpdateManyWithWhereWithoutUserInput = {
    where: play_queueScalarWhereInput
    data: XOR<play_queueUpdateManyMutationInput, play_queueUncheckedUpdateManyWithoutUserInput>
  }

  export type playlistUpsertWithWhereUniqueWithoutUserInput = {
    where: playlistWhereUniqueInput
    update: XOR<playlistUpdateWithoutUserInput, playlistUncheckedUpdateWithoutUserInput>
    create: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput>
  }

  export type playlistUpdateWithWhereUniqueWithoutUserInput = {
    where: playlistWhereUniqueInput
    data: XOR<playlistUpdateWithoutUserInput, playlistUncheckedUpdateWithoutUserInput>
  }

  export type playlistUpdateManyWithWhereWithoutUserInput = {
    where: playlistScalarWhereInput
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyWithoutUserInput>
  }

  export type playlistScalarWhereInput = {
    AND?: playlistScalarWhereInput | playlistScalarWhereInput[]
    OR?: playlistScalarWhereInput[]
    NOT?: playlistScalarWhereInput | playlistScalarWhereInput[]
    id?: IntFilter<"playlist"> | number
    name?: StringFilter<"playlist"> | string
    cover?: StringNullableFilter<"playlist"> | string | null
    user_id?: IntFilter<"playlist"> | number
  }

  export type stateUpsertWithoutUserInput = {
    update: XOR<stateUpdateWithoutUserInput, stateUncheckedUpdateWithoutUserInput>
    create: XOR<stateCreateWithoutUserInput, stateUncheckedCreateWithoutUserInput>
    where?: stateWhereInput
  }

  export type stateUpdateToOneWithWhereWithoutUserInput = {
    where?: stateWhereInput
    data: XOR<stateUpdateWithoutUserInput, stateUncheckedUpdateWithoutUserInput>
  }

  export type stateUpdateWithoutUserInput = {
    song?: songUpdateOneWithoutStateNestedInput
  }

  export type stateUncheckedUpdateWithoutUserInput = {
    song_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type song_albumCreateManyAlbumInput = {
    song_id: number
  }

  export type song_albumUpdateWithoutAlbumInput = {
    song?: songUpdateOneRequiredWithoutSong_albumNestedInput
  }

  export type song_albumUncheckedUpdateWithoutAlbumInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type song_albumUncheckedUpdateManyWithoutAlbumInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type albumCreateManyArtistInput = {
    id?: number
    name: string
    cover?: string | null
  }

  export type songCreateManyArtistInput = {
    id?: number
    name: string
    file: string
    duration: number
  }

  export type albumUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    song_album?: song_albumUpdateManyWithoutAlbumNestedInput
  }

  export type albumUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    song_album?: song_albumUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type albumUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type songUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUpdateManyWithoutSongNestedInput
    song_album?: song_albumUpdateManyWithoutSongNestedInput
    state?: stateUpdateManyWithoutSongNestedInput
  }

  export type songUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    jam?: jamUncheckedUpdateManyWithoutSongNestedInput
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutSongNestedInput
    play_queue?: play_queueUncheckedUpdateManyWithoutSongNestedInput
    playlist_song?: playlist_songUncheckedUpdateManyWithoutSongNestedInput
    song_album?: song_albumUncheckedUpdateManyWithoutSongNestedInput
    state?: stateUncheckedUpdateManyWithoutSongNestedInput
  }

  export type songUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityCreateManyEntityInput = {
    like_id: number
    user_id: number
  }

  export type like_entityUpdateWithoutEntityInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutLike_entityNestedInput
  }

  export type like_entityUncheckedUpdateWithoutEntityInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityUncheckedUpdateManyWithoutEntityInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_play_queueCreateManyJamInput = {
    song_id: number
  }

  export type jam_userCreateManyJamInput = {
    user_id: number
  }

  export type jam_play_queueUpdateWithoutJamInput = {
    song?: songUpdateOneRequiredWithoutJam_play_queueNestedInput
  }

  export type jam_play_queueUncheckedUpdateWithoutJamInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_play_queueUncheckedUpdateManyWithoutJamInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_userUpdateWithoutJamInput = {
    user?: userUpdateOneRequiredWithoutJam_userNestedInput
  }

  export type jam_userUncheckedUpdateWithoutJamInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type jam_userUncheckedUpdateManyWithoutJamInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_songCreateManyPlaylistInput = {
    song_id: number
  }

  export type playlist_songUpdateWithoutPlaylistInput = {
    song?: songUpdateOneRequiredWithoutPlaylist_songNestedInput
  }

  export type playlist_songUncheckedUpdateWithoutPlaylistInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_songUncheckedUpdateManyWithoutPlaylistInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type jamCreateManySongInput = {
    id: string
    play?: boolean | null
    timestampt?: number | null
  }

  export type jam_play_queueCreateManySongInput = {
    jam_id: string
  }

  export type play_queueCreateManySongInput = {
    user_id: number
  }

  export type playlist_songCreateManySongInput = {
    playlist_id: number
  }

  export type song_albumCreateManySongInput = {
    album_id: number
  }

  export type stateCreateManySongInput = {
    user_id: number
  }

  export type jamUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    jam_play_queue?: jam_play_queueUpdateManyWithoutJamNestedInput
    jam_user?: jam_userUpdateManyWithoutJamNestedInput
  }

  export type jamUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
    jam_play_queue?: jam_play_queueUncheckedUpdateManyWithoutJamNestedInput
    jam_user?: jam_userUncheckedUpdateManyWithoutJamNestedInput
  }

  export type jamUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    play?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timestampt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jam_play_queueUpdateWithoutSongInput = {
    jam?: jamUpdateOneRequiredWithoutJam_play_queueNestedInput
  }

  export type jam_play_queueUncheckedUpdateWithoutSongInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
  }

  export type jam_play_queueUncheckedUpdateManyWithoutSongInput = {
    jam_id?: StringFieldUpdateOperationsInput | string
  }

  export type play_queueUpdateWithoutSongInput = {
    user?: userUpdateOneRequiredWithoutPlay_queueNestedInput
  }

  export type play_queueUncheckedUpdateWithoutSongInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type play_queueUncheckedUpdateManyWithoutSongInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_songUpdateWithoutSongInput = {
    playlist?: playlistUpdateOneRequiredWithoutPlaylist_songNestedInput
  }

  export type playlist_songUncheckedUpdateWithoutSongInput = {
    playlist_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_songUncheckedUpdateManyWithoutSongInput = {
    playlist_id?: IntFieldUpdateOperationsInput | number
  }

  export type song_albumUpdateWithoutSongInput = {
    album?: albumUpdateOneRequiredWithoutSong_albumNestedInput
  }

  export type song_albumUncheckedUpdateWithoutSongInput = {
    album_id?: IntFieldUpdateOperationsInput | number
  }

  export type song_albumUncheckedUpdateManyWithoutSongInput = {
    album_id?: IntFieldUpdateOperationsInput | number
  }

  export type stateUpdateWithoutSongInput = {
    user?: userUpdateOneRequiredWithoutStateNestedInput
  }

  export type stateUncheckedUpdateWithoutSongInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type stateUncheckedUpdateManyWithoutSongInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityCreateManyUserInput = {
    entity_id: number
    like_id: number
  }

  export type play_queueCreateManyUserInput = {
    song_id: number
  }

  export type playlistCreateManyUserInput = {
    id?: number
    name: string
    cover?: string | null
  }

  export type like_entityUpdateWithoutUserInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    entity?: entityUpdateOneRequiredWithoutLike_entityNestedInput
  }

  export type like_entityUncheckedUpdateWithoutUserInput = {
    entity_id?: IntFieldUpdateOperationsInput | number
    like_id?: IntFieldUpdateOperationsInput | number
  }

  export type like_entityUncheckedUpdateManyWithoutUserInput = {
    entity_id?: IntFieldUpdateOperationsInput | number
    like_id?: IntFieldUpdateOperationsInput | number
  }

  export type play_queueUpdateWithoutUserInput = {
    song?: songUpdateOneRequiredWithoutPlay_queueNestedInput
  }

  export type play_queueUncheckedUpdateWithoutUserInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type play_queueUncheckedUpdateManyWithoutUserInput = {
    song_id?: IntFieldUpdateOperationsInput | number
  }

  export type playlistUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_song?: playlist_songUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_song?: playlist_songUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AlbumCountOutputTypeDefaultArgs instead
     */
    export type AlbumCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistCountOutputTypeDefaultArgs instead
     */
    export type ArtistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityCountOutputTypeDefaultArgs instead
     */
    export type EntityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JamCountOutputTypeDefaultArgs instead
     */
    export type JamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistCountOutputTypeDefaultArgs instead
     */
    export type PlaylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use albumDefaultArgs instead
     */
    export type albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = albumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use artistDefaultArgs instead
     */
    export type artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = artistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use entityDefaultArgs instead
     */
    export type entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = entityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jamDefaultArgs instead
     */
    export type jamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jam_play_queueDefaultArgs instead
     */
    export type jam_play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jam_play_queueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jam_userDefaultArgs instead
     */
    export type jam_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jam_userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use like_entityDefaultArgs instead
     */
    export type like_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = like_entityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use play_queueDefaultArgs instead
     */
    export type play_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = play_queueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use playlistDefaultArgs instead
     */
    export type playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playlistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use playlist_songDefaultArgs instead
     */
    export type playlist_songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playlist_songDefaultArgs<ExtArgs>
    /**
     * @deprecated Use songDefaultArgs instead
     */
    export type songArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = songDefaultArgs<ExtArgs>
    /**
     * @deprecated Use song_albumDefaultArgs instead
     */
    export type song_albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = song_albumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stateDefaultArgs instead
     */
    export type stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = stateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}