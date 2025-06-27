
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ProductGallery
 * 
 */
export type ProductGallery = $Result.DefaultSelection<Prisma.$ProductGalleryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model Qualification
 * 
 */
export type Qualification = $Result.DefaultSelection<Prisma.$QualificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productGallery`: Exposes CRUD operations for the **ProductGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductGalleries
    * const productGalleries = await prisma.productGallery.findMany()
    * ```
    */
  get productGallery(): Prisma.ProductGalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qualification`: Exposes CRUD operations for the **Qualification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qualifications
    * const qualifications = await prisma.qualification.findMany()
    * ```
    */
  get qualification(): Prisma.QualificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Admin: 'Admin',
    Product: 'Product',
    Image: 'Image',
    ProductGallery: 'ProductGallery',
    Category: 'Category',
    ProductCategory: 'ProductCategory',
    Qualification: 'Qualification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "product" | "image" | "productGallery" | "category" | "productCategory" | "qualification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ProductGallery: {
        payload: Prisma.$ProductGalleryPayload<ExtArgs>
        fields: Prisma.ProductGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductGalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductGalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          findFirst: {
            args: Prisma.ProductGalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductGalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          findMany: {
            args: Prisma.ProductGalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>[]
          }
          create: {
            args: Prisma.ProductGalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          createMany: {
            args: Prisma.ProductGalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductGalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          update: {
            args: Prisma.ProductGalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          deleteMany: {
            args: Prisma.ProductGalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductGalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductGalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          aggregate: {
            args: Prisma.ProductGalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductGallery>
          }
          groupBy: {
            args: Prisma.ProductGalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductGalleryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductGalleryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      Qualification: {
        payload: Prisma.$QualificationPayload<ExtArgs>
        fields: Prisma.QualificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          findFirst: {
            args: Prisma.QualificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          findMany: {
            args: Prisma.QualificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>[]
          }
          create: {
            args: Prisma.QualificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          createMany: {
            args: Prisma.QualificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QualificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          update: {
            args: Prisma.QualificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          deleteMany: {
            args: Prisma.QualificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QualificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          aggregate: {
            args: Prisma.QualificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualification>
          }
          groupBy: {
            args: Prisma.QualificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualificationCountArgs<ExtArgs>
            result: $Utils.Optional<QualificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    product?: ProductOmit
    image?: ImageOmit
    productGallery?: ProductGalleryOmit
    category?: CategoryOmit
    productCategory?: ProductCategoryOmit
    qualification?: QualificationOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    galleryImages: number
    categories: number
    qualifications: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | ProductCountOutputTypeCountGalleryImagesArgs
    categories?: boolean | ProductCountOutputTypeCountCategoriesArgs
    qualifications?: boolean | ProductCountOutputTypeCountQualificationsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductGalleryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountQualificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    gallery: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | ImageCountOutputTypeCountGalleryArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductGalleryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title_en: string | null
    title_fa: string | null
    description_en: string | null
    description_fa: string | null
    status: $Enums.ProductStatus | null
    url: string | null
    imageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title_en: string | null
    title_fa: string | null
    description_en: string | null
    description_fa: string | null
    status: $Enums.ProductStatus | null
    url: string | null
    imageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title_en: number
    title_fa: number
    description_en: number
    description_fa: number
    status: number
    url: number
    imageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title_en?: true
    title_fa?: true
    description_en?: true
    description_fa?: true
    status?: true
    url?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title_en?: true
    title_fa?: true
    description_en?: true
    description_fa?: true
    status?: true
    url?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title_en?: true
    title_fa?: true
    description_en?: true
    description_fa?: true
    status?: true
    url?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_fa?: boolean
    description_en?: boolean
    description_fa?: boolean
    status?: boolean
    url?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | Product$imageArgs<ExtArgs>
    galleryImages?: boolean | Product$galleryImagesArgs<ExtArgs>
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    qualifications?: boolean | Product$qualificationsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    title_en?: boolean
    title_fa?: boolean
    description_en?: boolean
    description_fa?: boolean
    status?: boolean
    url?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_en" | "title_fa" | "description_en" | "description_fa" | "status" | "url" | "imageId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | Product$imageArgs<ExtArgs>
    galleryImages?: boolean | Product$galleryImagesArgs<ExtArgs>
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    qualifications?: boolean | Product$qualificationsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs> | null
      galleryImages: Prisma.$ProductGalleryPayload<ExtArgs>[]
      categories: Prisma.$ProductCategoryPayload<ExtArgs>[]
      qualifications: Prisma.$QualificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_en: string
      title_fa: string
      description_en: string
      description_fa: string
      status: $Enums.ProductStatus
      url: string
      imageId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends Product$imageArgs<ExtArgs> = {}>(args?: Subset<T, Product$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    galleryImages<T extends Product$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Product$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qualifications<T extends Product$qualificationsArgs<ExtArgs> = {}>(args?: Subset<T, Product$qualificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly title_en: FieldRef<"Product", 'String'>
    readonly title_fa: FieldRef<"Product", 'String'>
    readonly description_en: FieldRef<"Product", 'String'>
    readonly description_fa: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly url: FieldRef<"Product", 'String'>
    readonly imageId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.image
   */
  export type Product$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Product.galleryImages
   */
  export type Product$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    where?: ProductGalleryWhereInput
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    cursor?: ProductGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }

  /**
   * Product.categories
   */
  export type Product$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    cursor?: ProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * Product.qualifications
   */
  export type Product$qualificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    where?: QualificationWhereInput
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    cursor?: QualificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    productId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    productId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    public_id: string | null
    width: number | null
    height: number | null
    format: string | null
    size: number | null
    createdAt: Date | null
    productId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    public_id: string | null
    width: number | null
    height: number | null
    format: string | null
    size: number | null
    createdAt: Date | null
    productId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    public_id: number
    width: number
    height: number
    format: number
    size: number
    createdAt: number
    productId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    productId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    productId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    public_id?: true
    width?: true
    height?: true
    format?: true
    size?: true
    createdAt?: true
    productId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    public_id?: true
    width?: true
    height?: true
    format?: true
    size?: true
    createdAt?: true
    productId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    public_id?: true
    width?: true
    height?: true
    format?: true
    size?: true
    createdAt?: true
    productId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    public_id: string
    width: number | null
    height: number | null
    format: string | null
    size: number
    createdAt: Date
    productId: number | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    public_id?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    size?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | Image$productArgs<ExtArgs>
    gallery?: boolean | Image$galleryArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    public_id?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    size?: boolean
    createdAt?: boolean
    productId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "public_id" | "width" | "height" | "format" | "size" | "createdAt" | "productId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Image$productArgs<ExtArgs>
    gallery?: boolean | Image$galleryArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      gallery: Prisma.$ProductGalleryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      public_id: string
      width: number | null
      height: number | null
      format: string | null
      size: number
      createdAt: Date
      productId: number | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Image$productArgs<ExtArgs> = {}>(args?: Subset<T, Image$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gallery<T extends Image$galleryArgs<ExtArgs> = {}>(args?: Subset<T, Image$galleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly public_id: FieldRef<"Image", 'String'>
    readonly width: FieldRef<"Image", 'Int'>
    readonly height: FieldRef<"Image", 'Int'>
    readonly format: FieldRef<"Image", 'String'>
    readonly size: FieldRef<"Image", 'Int'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly productId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.product
   */
  export type Image$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Image.gallery
   */
  export type Image$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    where?: ProductGalleryWhereInput
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    cursor?: ProductGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductGallery
   */

  export type AggregateProductGallery = {
    _count: ProductGalleryCountAggregateOutputType | null
    _avg: ProductGalleryAvgAggregateOutputType | null
    _sum: ProductGallerySumAggregateOutputType | null
    _min: ProductGalleryMinAggregateOutputType | null
    _max: ProductGalleryMaxAggregateOutputType | null
  }

  export type ProductGalleryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    imageId: number | null
  }

  export type ProductGallerySumAggregateOutputType = {
    id: number | null
    productId: number | null
    imageId: number | null
  }

  export type ProductGalleryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    imageId: number | null
  }

  export type ProductGalleryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    imageId: number | null
  }

  export type ProductGalleryCountAggregateOutputType = {
    id: number
    productId: number
    imageId: number
    _all: number
  }


  export type ProductGalleryAvgAggregateInputType = {
    id?: true
    productId?: true
    imageId?: true
  }

  export type ProductGallerySumAggregateInputType = {
    id?: true
    productId?: true
    imageId?: true
  }

  export type ProductGalleryMinAggregateInputType = {
    id?: true
    productId?: true
    imageId?: true
  }

  export type ProductGalleryMaxAggregateInputType = {
    id?: true
    productId?: true
    imageId?: true
  }

  export type ProductGalleryCountAggregateInputType = {
    id?: true
    productId?: true
    imageId?: true
    _all?: true
  }

  export type ProductGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductGallery to aggregate.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductGalleries
    **/
    _count?: true | ProductGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductGalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductGallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductGalleryMaxAggregateInputType
  }

  export type GetProductGalleryAggregateType<T extends ProductGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductGallery[P]>
      : GetScalarType<T[P], AggregateProductGallery[P]>
  }




  export type ProductGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductGalleryWhereInput
    orderBy?: ProductGalleryOrderByWithAggregationInput | ProductGalleryOrderByWithAggregationInput[]
    by: ProductGalleryScalarFieldEnum[] | ProductGalleryScalarFieldEnum
    having?: ProductGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductGalleryCountAggregateInputType | true
    _avg?: ProductGalleryAvgAggregateInputType
    _sum?: ProductGallerySumAggregateInputType
    _min?: ProductGalleryMinAggregateInputType
    _max?: ProductGalleryMaxAggregateInputType
  }

  export type ProductGalleryGroupByOutputType = {
    id: number
    productId: number
    imageId: number
    _count: ProductGalleryCountAggregateOutputType | null
    _avg: ProductGalleryAvgAggregateOutputType | null
    _sum: ProductGallerySumAggregateOutputType | null
    _min: ProductGalleryMinAggregateOutputType | null
    _max: ProductGalleryMaxAggregateOutputType | null
  }

  type GetProductGalleryGroupByPayload<T extends ProductGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGalleryGroupByOutputType[P]>
        }
      >
    >


  export type ProductGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productGallery"]>



  export type ProductGallerySelectScalar = {
    id?: boolean
    productId?: boolean
    imageId?: boolean
  }

  export type ProductGalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "imageId", ExtArgs["result"]["productGallery"]>
  export type ProductGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $ProductGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductGallery"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      imageId: number
    }, ExtArgs["result"]["productGallery"]>
    composites: {}
  }

  type ProductGalleryGetPayload<S extends boolean | null | undefined | ProductGalleryDefaultArgs> = $Result.GetResult<Prisma.$ProductGalleryPayload, S>

  type ProductGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductGalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductGalleryCountAggregateInputType | true
    }

  export interface ProductGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductGallery'], meta: { name: 'ProductGallery' } }
    /**
     * Find zero or one ProductGallery that matches the filter.
     * @param {ProductGalleryFindUniqueArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductGalleryFindUniqueArgs>(args: SelectSubset<T, ProductGalleryFindUniqueArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductGallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductGalleryFindUniqueOrThrowArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductGalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductGalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryFindFirstArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductGalleryFindFirstArgs>(args?: SelectSubset<T, ProductGalleryFindFirstArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryFindFirstOrThrowArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductGalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductGalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductGalleries
     * const productGalleries = await prisma.productGallery.findMany()
     * 
     * // Get first 10 ProductGalleries
     * const productGalleries = await prisma.productGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productGalleryWithIdOnly = await prisma.productGallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductGalleryFindManyArgs>(args?: SelectSubset<T, ProductGalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductGallery.
     * @param {ProductGalleryCreateArgs} args - Arguments to create a ProductGallery.
     * @example
     * // Create one ProductGallery
     * const ProductGallery = await prisma.productGallery.create({
     *   data: {
     *     // ... data to create a ProductGallery
     *   }
     * })
     * 
     */
    create<T extends ProductGalleryCreateArgs>(args: SelectSubset<T, ProductGalleryCreateArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductGalleries.
     * @param {ProductGalleryCreateManyArgs} args - Arguments to create many ProductGalleries.
     * @example
     * // Create many ProductGalleries
     * const productGallery = await prisma.productGallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductGalleryCreateManyArgs>(args?: SelectSubset<T, ProductGalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductGallery.
     * @param {ProductGalleryDeleteArgs} args - Arguments to delete one ProductGallery.
     * @example
     * // Delete one ProductGallery
     * const ProductGallery = await prisma.productGallery.delete({
     *   where: {
     *     // ... filter to delete one ProductGallery
     *   }
     * })
     * 
     */
    delete<T extends ProductGalleryDeleteArgs>(args: SelectSubset<T, ProductGalleryDeleteArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductGallery.
     * @param {ProductGalleryUpdateArgs} args - Arguments to update one ProductGallery.
     * @example
     * // Update one ProductGallery
     * const productGallery = await prisma.productGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductGalleryUpdateArgs>(args: SelectSubset<T, ProductGalleryUpdateArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductGalleries.
     * @param {ProductGalleryDeleteManyArgs} args - Arguments to filter ProductGalleries to delete.
     * @example
     * // Delete a few ProductGalleries
     * const { count } = await prisma.productGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductGalleryDeleteManyArgs>(args?: SelectSubset<T, ProductGalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductGalleries
     * const productGallery = await prisma.productGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductGalleryUpdateManyArgs>(args: SelectSubset<T, ProductGalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductGallery.
     * @param {ProductGalleryUpsertArgs} args - Arguments to update or create a ProductGallery.
     * @example
     * // Update or create a ProductGallery
     * const productGallery = await prisma.productGallery.upsert({
     *   create: {
     *     // ... data to create a ProductGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductGallery we want to update
     *   }
     * })
     */
    upsert<T extends ProductGalleryUpsertArgs>(args: SelectSubset<T, ProductGalleryUpsertArgs<ExtArgs>>): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryCountArgs} args - Arguments to filter ProductGalleries to count.
     * @example
     * // Count the number of ProductGalleries
     * const count = await prisma.productGallery.count({
     *   where: {
     *     // ... the filter for the ProductGalleries we want to count
     *   }
     * })
    **/
    count<T extends ProductGalleryCountArgs>(
      args?: Subset<T, ProductGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductGalleryAggregateArgs>(args: Subset<T, ProductGalleryAggregateArgs>): Prisma.PrismaPromise<GetProductGalleryAggregateType<T>>

    /**
     * Group by ProductGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryGroupByArgs} args - Group by arguments.
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
      T extends ProductGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGalleryGroupByArgs['orderBy'] }
        : { orderBy?: ProductGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductGallery model
   */
  readonly fields: ProductGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductGallery model
   */
  interface ProductGalleryFieldRefs {
    readonly id: FieldRef<"ProductGallery", 'Int'>
    readonly productId: FieldRef<"ProductGallery", 'Int'>
    readonly imageId: FieldRef<"ProductGallery", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductGallery findUnique
   */
  export type ProductGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where: ProductGalleryWhereUniqueInput
  }

  /**
   * ProductGallery findUniqueOrThrow
   */
  export type ProductGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where: ProductGalleryWhereUniqueInput
  }

  /**
   * ProductGallery findFirst
   */
  export type ProductGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductGalleries.
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductGalleries.
     */
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }

  /**
   * ProductGallery findFirstOrThrow
   */
  export type ProductGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductGalleries.
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductGalleries.
     */
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }

  /**
   * ProductGallery findMany
   */
  export type ProductGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGalleries to fetch.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductGalleries.
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }

  /**
   * ProductGallery create
   */
  export type ProductGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductGallery.
     */
    data: XOR<ProductGalleryCreateInput, ProductGalleryUncheckedCreateInput>
  }

  /**
   * ProductGallery createMany
   */
  export type ProductGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductGalleries.
     */
    data: ProductGalleryCreateManyInput | ProductGalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductGallery update
   */
  export type ProductGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductGallery.
     */
    data: XOR<ProductGalleryUpdateInput, ProductGalleryUncheckedUpdateInput>
    /**
     * Choose, which ProductGallery to update.
     */
    where: ProductGalleryWhereUniqueInput
  }

  /**
   * ProductGallery updateMany
   */
  export type ProductGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductGalleries.
     */
    data: XOR<ProductGalleryUpdateManyMutationInput, ProductGalleryUncheckedUpdateManyInput>
    /**
     * Filter which ProductGalleries to update
     */
    where?: ProductGalleryWhereInput
    /**
     * Limit how many ProductGalleries to update.
     */
    limit?: number
  }

  /**
   * ProductGallery upsert
   */
  export type ProductGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductGallery to update in case it exists.
     */
    where: ProductGalleryWhereUniqueInput
    /**
     * In case the ProductGallery found by the `where` argument doesn't exist, create a new ProductGallery with this data.
     */
    create: XOR<ProductGalleryCreateInput, ProductGalleryUncheckedCreateInput>
    /**
     * In case the ProductGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductGalleryUpdateInput, ProductGalleryUncheckedUpdateInput>
  }

  /**
   * ProductGallery delete
   */
  export type ProductGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter which ProductGallery to delete.
     */
    where: ProductGalleryWhereUniqueInput
  }

  /**
   * ProductGallery deleteMany
   */
  export type ProductGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductGalleries to delete
     */
    where?: ProductGalleryWhereInput
    /**
     * Limit how many ProductGalleries to delete.
     */
    limit?: number
  }

  /**
   * ProductGallery without action
   */
  export type ProductGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductGallery
     */
    omit?: ProductGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductGalleryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_fa: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name_en: string | null
    name_fa: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name_en: number
    name_fa: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name_en?: true
    name_fa?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name_en?: true
    name_fa?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name_en?: true
    name_fa?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name_en: string
    name_fa: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_en?: boolean
    name_fa?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name_en?: boolean
    name_fa?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_en" | "name_fa", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_en: string
      name_fa: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name_en: FieldRef<"Category", 'String'>
    readonly name_fa: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    cursor?: ProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryAvgAggregateOutputType = {
    productId: number | null
    categoryId: number | null
  }

  export type ProductCategorySumAggregateOutputType = {
    productId: number | null
    categoryId: number | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    productId: number | null
    categoryId: number | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    productId: number | null
    categoryId: number | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    productId: number
    categoryId: number
    _all: number
  }


  export type ProductCategoryAvgAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type ProductCategorySumAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type ProductCategoryMinAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    productId?: true
    categoryId?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _avg?: ProductCategoryAvgAggregateInputType
    _sum?: ProductCategorySumAggregateInputType
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    productId: number
    categoryId: number
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    categoryId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>



  export type ProductCategorySelectScalar = {
    productId?: boolean
    categoryId?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "categoryId", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      categoryId: number
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productCategoryWithProductIdOnly = await prisma.productCategory.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly productId: FieldRef<"ProductCategory", 'Int'>
    readonly categoryId: FieldRef<"ProductCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Qualification
   */

  export type AggregateQualification = {
    _count: QualificationCountAggregateOutputType | null
    _avg: QualificationAvgAggregateOutputType | null
    _sum: QualificationSumAggregateOutputType | null
    _min: QualificationMinAggregateOutputType | null
    _max: QualificationMaxAggregateOutputType | null
  }

  export type QualificationAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type QualificationSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type QualificationMinAggregateOutputType = {
    id: number | null
    metric_en: string | null
    metric_fa: string | null
    value_en: string | null
    value_fa: string | null
    productId: number | null
  }

  export type QualificationMaxAggregateOutputType = {
    id: number | null
    metric_en: string | null
    metric_fa: string | null
    value_en: string | null
    value_fa: string | null
    productId: number | null
  }

  export type QualificationCountAggregateOutputType = {
    id: number
    metric_en: number
    metric_fa: number
    value_en: number
    value_fa: number
    productId: number
    _all: number
  }


  export type QualificationAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type QualificationSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type QualificationMinAggregateInputType = {
    id?: true
    metric_en?: true
    metric_fa?: true
    value_en?: true
    value_fa?: true
    productId?: true
  }

  export type QualificationMaxAggregateInputType = {
    id?: true
    metric_en?: true
    metric_fa?: true
    value_en?: true
    value_fa?: true
    productId?: true
  }

  export type QualificationCountAggregateInputType = {
    id?: true
    metric_en?: true
    metric_fa?: true
    value_en?: true
    value_fa?: true
    productId?: true
    _all?: true
  }

  export type QualificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qualification to aggregate.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qualifications
    **/
    _count?: true | QualificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualificationMaxAggregateInputType
  }

  export type GetQualificationAggregateType<T extends QualificationAggregateArgs> = {
        [P in keyof T & keyof AggregateQualification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualification[P]>
      : GetScalarType<T[P], AggregateQualification[P]>
  }




  export type QualificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationWhereInput
    orderBy?: QualificationOrderByWithAggregationInput | QualificationOrderByWithAggregationInput[]
    by: QualificationScalarFieldEnum[] | QualificationScalarFieldEnum
    having?: QualificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationCountAggregateInputType | true
    _avg?: QualificationAvgAggregateInputType
    _sum?: QualificationSumAggregateInputType
    _min?: QualificationMinAggregateInputType
    _max?: QualificationMaxAggregateInputType
  }

  export type QualificationGroupByOutputType = {
    id: number
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
    productId: number
    _count: QualificationCountAggregateOutputType | null
    _avg: QualificationAvgAggregateOutputType | null
    _sum: QualificationSumAggregateOutputType | null
    _min: QualificationMinAggregateOutputType | null
    _max: QualificationMaxAggregateOutputType | null
  }

  type GetQualificationGroupByPayload<T extends QualificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualificationGroupByOutputType[P]>
            : GetScalarType<T[P], QualificationGroupByOutputType[P]>
        }
      >
    >


  export type QualificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metric_en?: boolean
    metric_fa?: boolean
    value_en?: boolean
    value_fa?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualification"]>



  export type QualificationSelectScalar = {
    id?: boolean
    metric_en?: boolean
    metric_fa?: boolean
    value_en?: boolean
    value_fa?: boolean
    productId?: boolean
  }

  export type QualificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metric_en" | "metric_fa" | "value_en" | "value_fa" | "productId", ExtArgs["result"]["qualification"]>
  export type QualificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $QualificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Qualification"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      metric_en: string
      metric_fa: string
      value_en: string
      value_fa: string
      productId: number
    }, ExtArgs["result"]["qualification"]>
    composites: {}
  }

  type QualificationGetPayload<S extends boolean | null | undefined | QualificationDefaultArgs> = $Result.GetResult<Prisma.$QualificationPayload, S>

  type QualificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualificationCountAggregateInputType | true
    }

  export interface QualificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Qualification'], meta: { name: 'Qualification' } }
    /**
     * Find zero or one Qualification that matches the filter.
     * @param {QualificationFindUniqueArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualificationFindUniqueArgs>(args: SelectSubset<T, QualificationFindUniqueArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qualification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualificationFindUniqueOrThrowArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualificationFindUniqueOrThrowArgs>(args: SelectSubset<T, QualificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qualification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindFirstArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualificationFindFirstArgs>(args?: SelectSubset<T, QualificationFindFirstArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qualification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindFirstOrThrowArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualificationFindFirstOrThrowArgs>(args?: SelectSubset<T, QualificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qualifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qualifications
     * const qualifications = await prisma.qualification.findMany()
     * 
     * // Get first 10 Qualifications
     * const qualifications = await prisma.qualification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualificationWithIdOnly = await prisma.qualification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualificationFindManyArgs>(args?: SelectSubset<T, QualificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qualification.
     * @param {QualificationCreateArgs} args - Arguments to create a Qualification.
     * @example
     * // Create one Qualification
     * const Qualification = await prisma.qualification.create({
     *   data: {
     *     // ... data to create a Qualification
     *   }
     * })
     * 
     */
    create<T extends QualificationCreateArgs>(args: SelectSubset<T, QualificationCreateArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qualifications.
     * @param {QualificationCreateManyArgs} args - Arguments to create many Qualifications.
     * @example
     * // Create many Qualifications
     * const qualification = await prisma.qualification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualificationCreateManyArgs>(args?: SelectSubset<T, QualificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Qualification.
     * @param {QualificationDeleteArgs} args - Arguments to delete one Qualification.
     * @example
     * // Delete one Qualification
     * const Qualification = await prisma.qualification.delete({
     *   where: {
     *     // ... filter to delete one Qualification
     *   }
     * })
     * 
     */
    delete<T extends QualificationDeleteArgs>(args: SelectSubset<T, QualificationDeleteArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qualification.
     * @param {QualificationUpdateArgs} args - Arguments to update one Qualification.
     * @example
     * // Update one Qualification
     * const qualification = await prisma.qualification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualificationUpdateArgs>(args: SelectSubset<T, QualificationUpdateArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qualifications.
     * @param {QualificationDeleteManyArgs} args - Arguments to filter Qualifications to delete.
     * @example
     * // Delete a few Qualifications
     * const { count } = await prisma.qualification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualificationDeleteManyArgs>(args?: SelectSubset<T, QualificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qualifications
     * const qualification = await prisma.qualification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualificationUpdateManyArgs>(args: SelectSubset<T, QualificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Qualification.
     * @param {QualificationUpsertArgs} args - Arguments to update or create a Qualification.
     * @example
     * // Update or create a Qualification
     * const qualification = await prisma.qualification.upsert({
     *   create: {
     *     // ... data to create a Qualification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qualification we want to update
     *   }
     * })
     */
    upsert<T extends QualificationUpsertArgs>(args: SelectSubset<T, QualificationUpsertArgs<ExtArgs>>): Prisma__QualificationClient<$Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCountArgs} args - Arguments to filter Qualifications to count.
     * @example
     * // Count the number of Qualifications
     * const count = await prisma.qualification.count({
     *   where: {
     *     // ... the filter for the Qualifications we want to count
     *   }
     * })
    **/
    count<T extends QualificationCountArgs>(
      args?: Subset<T, QualificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualificationAggregateArgs>(args: Subset<T, QualificationAggregateArgs>): Prisma.PrismaPromise<GetQualificationAggregateType<T>>

    /**
     * Group by Qualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationGroupByArgs} args - Group by arguments.
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
      T extends QualificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationGroupByArgs['orderBy'] }
        : { orderBy?: QualificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Qualification model
   */
  readonly fields: QualificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qualification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Qualification model
   */
  interface QualificationFieldRefs {
    readonly id: FieldRef<"Qualification", 'Int'>
    readonly metric_en: FieldRef<"Qualification", 'String'>
    readonly metric_fa: FieldRef<"Qualification", 'String'>
    readonly value_en: FieldRef<"Qualification", 'String'>
    readonly value_fa: FieldRef<"Qualification", 'String'>
    readonly productId: FieldRef<"Qualification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Qualification findUnique
   */
  export type QualificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification findUniqueOrThrow
   */
  export type QualificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification findFirst
   */
  export type QualificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qualifications.
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qualifications.
     */
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Qualification findFirstOrThrow
   */
  export type QualificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qualifications.
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qualifications.
     */
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Qualification findMany
   */
  export type QualificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualifications to fetch.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qualifications.
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     */
    skip?: number
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Qualification create
   */
  export type QualificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Qualification.
     */
    data: XOR<QualificationCreateInput, QualificationUncheckedCreateInput>
  }

  /**
   * Qualification createMany
   */
  export type QualificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Qualifications.
     */
    data: QualificationCreateManyInput | QualificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Qualification update
   */
  export type QualificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Qualification.
     */
    data: XOR<QualificationUpdateInput, QualificationUncheckedUpdateInput>
    /**
     * Choose, which Qualification to update.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification updateMany
   */
  export type QualificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Qualifications.
     */
    data: XOR<QualificationUpdateManyMutationInput, QualificationUncheckedUpdateManyInput>
    /**
     * Filter which Qualifications to update
     */
    where?: QualificationWhereInput
    /**
     * Limit how many Qualifications to update.
     */
    limit?: number
  }

  /**
   * Qualification upsert
   */
  export type QualificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Qualification to update in case it exists.
     */
    where: QualificationWhereUniqueInput
    /**
     * In case the Qualification found by the `where` argument doesn't exist, create a new Qualification with this data.
     */
    create: XOR<QualificationCreateInput, QualificationUncheckedCreateInput>
    /**
     * In case the Qualification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualificationUpdateInput, QualificationUncheckedUpdateInput>
  }

  /**
   * Qualification delete
   */
  export type QualificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter which Qualification to delete.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification deleteMany
   */
  export type QualificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qualifications to delete
     */
    where?: QualificationWhereInput
    /**
     * Limit how many Qualifications to delete.
     */
    limit?: number
  }

  /**
   * Qualification without action
   */
  export type QualificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title_en: 'title_en',
    title_fa: 'title_fa',
    description_en: 'description_en',
    description_fa: 'description_fa',
    status: 'status',
    url: 'url',
    imageId: 'imageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    public_id: 'public_id',
    width: 'width',
    height: 'height',
    format: 'format',
    size: 'size',
    createdAt: 'createdAt',
    productId: 'productId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ProductGalleryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    imageId: 'imageId'
  };

  export type ProductGalleryScalarFieldEnum = (typeof ProductGalleryScalarFieldEnum)[keyof typeof ProductGalleryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name_en: 'name_en',
    name_fa: 'name_fa'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    productId: 'productId',
    categoryId: 'categoryId'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const QualificationScalarFieldEnum: {
    id: 'id',
    metric_en: 'metric_en',
    metric_fa: 'metric_fa',
    value_en: 'value_en',
    value_fa: 'value_fa',
    productId: 'productId'
  };

  export type QualificationScalarFieldEnum = (typeof QualificationScalarFieldEnum)[keyof typeof QualificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProductOrderByRelevanceFieldEnum: {
    title_en: 'title_en',
    title_fa: 'title_fa',
    description_en: 'description_en',
    description_fa: 'description_fa',
    url: 'url'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    url: 'url',
    public_id: 'public_id',
    format: 'format'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name_en: 'name_en',
    name_fa: 'name_fa'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const QualificationOrderByRelevanceFieldEnum: {
    metric_en: 'metric_en',
    metric_fa: 'metric_fa',
    value_en: 'value_en',
    value_fa: 'value_fa'
  };

  export type QualificationOrderByRelevanceFieldEnum = (typeof QualificationOrderByRelevanceFieldEnum)[keyof typeof QualificationOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    title_en?: StringFilter<"Product"> | string
    title_fa?: StringFilter<"Product"> | string
    description_en?: StringFilter<"Product"> | string
    description_fa?: StringFilter<"Product"> | string
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    url?: StringFilter<"Product"> | string
    imageId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    galleryImages?: ProductGalleryListRelationFilter
    categories?: ProductCategoryListRelationFilter
    qualifications?: QualificationListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_fa?: SortOrder
    description_en?: SortOrder
    description_fa?: SortOrder
    status?: SortOrder
    url?: SortOrder
    imageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ImageOrderByWithRelationInput
    galleryImages?: ProductGalleryOrderByRelationAggregateInput
    categories?: ProductCategoryOrderByRelationAggregateInput
    qualifications?: QualificationOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    imageId?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title_en?: StringFilter<"Product"> | string
    title_fa?: StringFilter<"Product"> | string
    description_en?: StringFilter<"Product"> | string
    description_fa?: StringFilter<"Product"> | string
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    galleryImages?: ProductGalleryListRelationFilter
    categories?: ProductCategoryListRelationFilter
    qualifications?: QualificationListRelationFilter
  }, "id" | "url" | "imageId">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_fa?: SortOrder
    description_en?: SortOrder
    description_fa?: SortOrder
    status?: SortOrder
    url?: SortOrder
    imageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    title_en?: StringWithAggregatesFilter<"Product"> | string
    title_fa?: StringWithAggregatesFilter<"Product"> | string
    description_en?: StringWithAggregatesFilter<"Product"> | string
    description_fa?: StringWithAggregatesFilter<"Product"> | string
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    url?: StringWithAggregatesFilter<"Product"> | string
    imageId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    public_id?: StringFilter<"Image"> | string
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    format?: StringNullableFilter<"Image"> | string | null
    size?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    productId?: IntNullableFilter<"Image"> | number | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    gallery?: ProductGalleryListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    gallery?: ProductGalleryOrderByRelationAggregateInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    public_id?: string
    productId?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    format?: StringNullableFilter<"Image"> | string | null
    size?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    gallery?: ProductGalleryListRelationFilter
  }, "id" | "public_id" | "productId">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    public_id?: StringWithAggregatesFilter<"Image"> | string
    width?: IntNullableWithAggregatesFilter<"Image"> | number | null
    height?: IntNullableWithAggregatesFilter<"Image"> | number | null
    format?: StringNullableWithAggregatesFilter<"Image"> | string | null
    size?: IntWithAggregatesFilter<"Image"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    productId?: IntNullableWithAggregatesFilter<"Image"> | number | null
  }

  export type ProductGalleryWhereInput = {
    AND?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    OR?: ProductGalleryWhereInput[]
    NOT?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    id?: IntFilter<"ProductGallery"> | number
    productId?: IntFilter<"ProductGallery"> | number
    imageId?: IntFilter<"ProductGallery"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type ProductGalleryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
    product?: ProductOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type ProductGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    OR?: ProductGalleryWhereInput[]
    NOT?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    productId?: IntFilter<"ProductGallery"> | number
    imageId?: IntFilter<"ProductGallery"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type ProductGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
    _count?: ProductGalleryCountOrderByAggregateInput
    _avg?: ProductGalleryAvgOrderByAggregateInput
    _max?: ProductGalleryMaxOrderByAggregateInput
    _min?: ProductGalleryMinOrderByAggregateInput
    _sum?: ProductGallerySumOrderByAggregateInput
  }

  export type ProductGalleryScalarWhereWithAggregatesInput = {
    AND?: ProductGalleryScalarWhereWithAggregatesInput | ProductGalleryScalarWhereWithAggregatesInput[]
    OR?: ProductGalleryScalarWhereWithAggregatesInput[]
    NOT?: ProductGalleryScalarWhereWithAggregatesInput | ProductGalleryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductGallery"> | number
    productId?: IntWithAggregatesFilter<"ProductGallery"> | number
    imageId?: IntWithAggregatesFilter<"ProductGallery"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name_en?: StringFilter<"Category"> | string
    name_fa?: StringFilter<"Category"> | string
    products?: ProductCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_fa?: SortOrder
    products?: ProductCategoryOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_en?: string
    name_fa?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    products?: ProductCategoryListRelationFilter
  }, "id" | "name_en" | "name_fa">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_fa?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name_en?: StringWithAggregatesFilter<"Category"> | string
    name_fa?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    productId?: IntFilter<"ProductCategory"> | number
    categoryId?: IntFilter<"ProductCategory"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ProductCategoryOrderByWithRelationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    product?: ProductOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    productId_categoryId?: ProductCategoryProductIdCategoryIdCompoundUniqueInput
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    productId?: IntFilter<"ProductCategory"> | number
    categoryId?: IntFilter<"ProductCategory"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "productId_categoryId">

  export type ProductCategoryOrderByWithAggregationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _avg?: ProductCategoryAvgOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
    _sum?: ProductCategorySumOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductCategory"> | number
    categoryId?: IntWithAggregatesFilter<"ProductCategory"> | number
  }

  export type QualificationWhereInput = {
    AND?: QualificationWhereInput | QualificationWhereInput[]
    OR?: QualificationWhereInput[]
    NOT?: QualificationWhereInput | QualificationWhereInput[]
    id?: IntFilter<"Qualification"> | number
    metric_en?: StringFilter<"Qualification"> | string
    metric_fa?: StringFilter<"Qualification"> | string
    value_en?: StringFilter<"Qualification"> | string
    value_fa?: StringFilter<"Qualification"> | string
    productId?: IntFilter<"Qualification"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type QualificationOrderByWithRelationInput = {
    id?: SortOrder
    metric_en?: SortOrder
    metric_fa?: SortOrder
    value_en?: SortOrder
    value_fa?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    _relevance?: QualificationOrderByRelevanceInput
  }

  export type QualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QualificationWhereInput | QualificationWhereInput[]
    OR?: QualificationWhereInput[]
    NOT?: QualificationWhereInput | QualificationWhereInput[]
    metric_en?: StringFilter<"Qualification"> | string
    metric_fa?: StringFilter<"Qualification"> | string
    value_en?: StringFilter<"Qualification"> | string
    value_fa?: StringFilter<"Qualification"> | string
    productId?: IntFilter<"Qualification"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type QualificationOrderByWithAggregationInput = {
    id?: SortOrder
    metric_en?: SortOrder
    metric_fa?: SortOrder
    value_en?: SortOrder
    value_fa?: SortOrder
    productId?: SortOrder
    _count?: QualificationCountOrderByAggregateInput
    _avg?: QualificationAvgOrderByAggregateInput
    _max?: QualificationMaxOrderByAggregateInput
    _min?: QualificationMinOrderByAggregateInput
    _sum?: QualificationSumOrderByAggregateInput
  }

  export type QualificationScalarWhereWithAggregatesInput = {
    AND?: QualificationScalarWhereWithAggregatesInput | QualificationScalarWhereWithAggregatesInput[]
    OR?: QualificationScalarWhereWithAggregatesInput[]
    NOT?: QualificationScalarWhereWithAggregatesInput | QualificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Qualification"> | number
    metric_en?: StringWithAggregatesFilter<"Qualification"> | string
    metric_fa?: StringWithAggregatesFilter<"Qualification"> | string
    value_en?: StringWithAggregatesFilter<"Qualification"> | string
    value_fa?: StringWithAggregatesFilter<"Qualification"> | string
    productId?: IntWithAggregatesFilter<"Qualification"> | number
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageCreateNestedOneWithoutProductInput
    galleryImages?: ProductGalleryCreateNestedManyWithoutProductInput
    categories?: ProductCategoryCreateNestedManyWithoutProductInput
    qualifications?: QualificationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageUncheckedCreateNestedOneWithoutProductInput
    galleryImages?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    categories?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
    qualifications?: QualificationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneWithoutProductNestedInput
    galleryImages?: ProductGalleryUpdateManyWithoutProductNestedInput
    categories?: ProductCategoryUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUncheckedUpdateOneWithoutProductNestedInput
    galleryImages?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    categories?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutImageInput
    gallery?: ProductGalleryCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    productId?: number | null
    gallery?: ProductGalleryUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImageNestedInput
    gallery?: ProductGalleryUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    gallery?: ProductGalleryUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    productId?: number | null
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductGalleryCreateInput = {
    product: ProductCreateNestedOneWithoutGalleryImagesInput
    image: ImageCreateNestedOneWithoutGalleryInput
  }

  export type ProductGalleryUncheckedCreateInput = {
    id?: number
    productId: number
    imageId: number
  }

  export type ProductGalleryUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutGalleryImagesNestedInput
    image?: ImageUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type ProductGalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGalleryCreateManyInput = {
    id?: number
    productId: number
    imageId: number
  }

  export type ProductGalleryUpdateManyMutationInput = {

  }

  export type ProductGalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name_en: string
    name_fa: string
    products?: ProductCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name_en: string
    name_fa: string
    products?: ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_fa?: StringFieldUpdateOperationsInput | string
    products?: ProductCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_fa?: StringFieldUpdateOperationsInput | string
    products?: ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name_en: string
    name_fa: string
  }

  export type CategoryUpdateManyMutationInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_fa?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_fa?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCategoryCreateInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    productId: number
    categoryId: number
  }

  export type ProductCategoryUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryCreateManyInput = {
    productId: number
    categoryId: number
  }

  export type ProductCategoryUpdateManyMutationInput = {

  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type QualificationCreateInput = {
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
    product: ProductCreateNestedOneWithoutQualificationsInput
  }

  export type QualificationUncheckedCreateInput = {
    id?: number
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
    productId: number
  }

  export type QualificationUpdateInput = {
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutQualificationsNestedInput
  }

  export type QualificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type QualificationCreateManyInput = {
    id?: number
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
    productId: number
  }

  export type QualificationUpdateManyMutationInput = {
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
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

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type ProductGalleryListRelationFilter = {
    every?: ProductGalleryWhereInput
    some?: ProductGalleryWhereInput
    none?: ProductGalleryWhereInput
  }

  export type ProductCategoryListRelationFilter = {
    every?: ProductCategoryWhereInput
    some?: ProductCategoryWhereInput
    none?: ProductCategoryWhereInput
  }

  export type QualificationListRelationFilter = {
    every?: QualificationWhereInput
    some?: QualificationWhereInput
    none?: QualificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductGalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QualificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_fa?: SortOrder
    description_en?: SortOrder
    description_fa?: SortOrder
    status?: SortOrder
    url?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_fa?: SortOrder
    description_en?: SortOrder
    description_fa?: SortOrder
    status?: SortOrder
    url?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_fa?: SortOrder
    description_en?: SortOrder
    description_fa?: SortOrder
    status?: SortOrder
    url?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    productId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    productId?: SortOrder
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type ProductGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
  }

  export type ProductGalleryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
  }

  export type ProductGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
  }

  export type ProductGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
  }

  export type ProductGallerySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageId?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_fa?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_fa?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name_en?: SortOrder
    name_fa?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductCategoryProductIdCategoryIdCompoundUniqueInput = {
    productId: number
    categoryId: number
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductCategoryAvgOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductCategorySumOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type QualificationOrderByRelevanceInput = {
    fields: QualificationOrderByRelevanceFieldEnum | QualificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QualificationCountOrderByAggregateInput = {
    id?: SortOrder
    metric_en?: SortOrder
    metric_fa?: SortOrder
    value_en?: SortOrder
    value_fa?: SortOrder
    productId?: SortOrder
  }

  export type QualificationAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type QualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    metric_en?: SortOrder
    metric_fa?: SortOrder
    value_en?: SortOrder
    value_fa?: SortOrder
    productId?: SortOrder
  }

  export type QualificationMinOrderByAggregateInput = {
    id?: SortOrder
    metric_en?: SortOrder
    metric_fa?: SortOrder
    value_en?: SortOrder
    value_fa?: SortOrder
    productId?: SortOrder
  }

  export type QualificationSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageCreateNestedOneWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput
    connect?: ImageWhereUniqueInput
  }

  export type ProductGalleryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
  }

  export type ProductCategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type QualificationCreateNestedManyWithoutProductInput = {
    create?: XOR<QualificationCreateWithoutProductInput, QualificationUncheckedCreateWithoutProductInput> | QualificationCreateWithoutProductInput[] | QualificationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QualificationCreateOrConnectWithoutProductInput | QualificationCreateOrConnectWithoutProductInput[]
    createMany?: QualificationCreateManyProductInputEnvelope
    connect?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput
    connect?: ImageWhereUniqueInput
  }

  export type ProductGalleryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
  }

  export type ProductCategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type QualificationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<QualificationCreateWithoutProductInput, QualificationUncheckedCreateWithoutProductInput> | QualificationCreateWithoutProductInput[] | QualificationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QualificationCreateOrConnectWithoutProductInput | QualificationCreateOrConnectWithoutProductInput[]
    createMany?: QualificationCreateManyProductInputEnvelope
    connect?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUpdateOneWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput
    upsert?: ImageUpsertWithoutProductInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProductInput, ImageUpdateWithoutProductInput>, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductGalleryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    upsert?: ProductGalleryUpsertWithWhereUniqueWithoutProductInput | ProductGalleryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    set?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    disconnect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    delete?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    update?: ProductGalleryUpdateWithWhereUniqueWithoutProductInput | ProductGalleryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductGalleryUpdateManyWithWhereWithoutProductInput | ProductGalleryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
  }

  export type ProductCategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutProductInput | ProductCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutProductInput | ProductCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutProductInput | ProductCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type QualificationUpdateManyWithoutProductNestedInput = {
    create?: XOR<QualificationCreateWithoutProductInput, QualificationUncheckedCreateWithoutProductInput> | QualificationCreateWithoutProductInput[] | QualificationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QualificationCreateOrConnectWithoutProductInput | QualificationCreateOrConnectWithoutProductInput[]
    upsert?: QualificationUpsertWithWhereUniqueWithoutProductInput | QualificationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: QualificationCreateManyProductInputEnvelope
    set?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    disconnect?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    delete?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    connect?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    update?: QualificationUpdateWithWhereUniqueWithoutProductInput | QualificationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: QualificationUpdateManyWithWhereWithoutProductInput | QualificationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: QualificationScalarWhereInput | QualificationScalarWhereInput[]
  }

  export type ImageUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput
    upsert?: ImageUpsertWithoutProductInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProductInput, ImageUpdateWithoutProductInput>, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductGalleryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    upsert?: ProductGalleryUpsertWithWhereUniqueWithoutProductInput | ProductGalleryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    set?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    disconnect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    delete?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    update?: ProductGalleryUpdateWithWhereUniqueWithoutProductInput | ProductGalleryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductGalleryUpdateManyWithWhereWithoutProductInput | ProductGalleryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
  }

  export type ProductCategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutProductInput | ProductCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutProductInput | ProductCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutProductInput | ProductCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type QualificationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<QualificationCreateWithoutProductInput, QualificationUncheckedCreateWithoutProductInput> | QualificationCreateWithoutProductInput[] | QualificationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: QualificationCreateOrConnectWithoutProductInput | QualificationCreateOrConnectWithoutProductInput[]
    upsert?: QualificationUpsertWithWhereUniqueWithoutProductInput | QualificationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: QualificationCreateManyProductInputEnvelope
    set?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    disconnect?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    delete?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    connect?: QualificationWhereUniqueInput | QualificationWhereUniqueInput[]
    update?: QualificationUpdateWithWhereUniqueWithoutProductInput | QualificationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: QualificationUpdateManyWithWhereWithoutProductInput | QualificationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: QualificationScalarWhereInput | QualificationScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImageInput = {
    create?: XOR<ProductCreateWithoutImageInput, ProductUncheckedCreateWithoutImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImageInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductGalleryCreateNestedManyWithoutImageInput = {
    create?: XOR<ProductGalleryCreateWithoutImageInput, ProductGalleryUncheckedCreateWithoutImageInput> | ProductGalleryCreateWithoutImageInput[] | ProductGalleryUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutImageInput | ProductGalleryCreateOrConnectWithoutImageInput[]
    createMany?: ProductGalleryCreateManyImageInputEnvelope
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
  }

  export type ProductGalleryUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<ProductGalleryCreateWithoutImageInput, ProductGalleryUncheckedCreateWithoutImageInput> | ProductGalleryCreateWithoutImageInput[] | ProductGalleryUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutImageInput | ProductGalleryCreateOrConnectWithoutImageInput[]
    createMany?: ProductGalleryCreateManyImageInputEnvelope
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateOneWithoutImageNestedInput = {
    create?: XOR<ProductCreateWithoutImageInput, ProductUncheckedCreateWithoutImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImageInput
    upsert?: ProductUpsertWithoutImageInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImageInput, ProductUpdateWithoutImageInput>, ProductUncheckedUpdateWithoutImageInput>
  }

  export type ProductGalleryUpdateManyWithoutImageNestedInput = {
    create?: XOR<ProductGalleryCreateWithoutImageInput, ProductGalleryUncheckedCreateWithoutImageInput> | ProductGalleryCreateWithoutImageInput[] | ProductGalleryUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutImageInput | ProductGalleryCreateOrConnectWithoutImageInput[]
    upsert?: ProductGalleryUpsertWithWhereUniqueWithoutImageInput | ProductGalleryUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ProductGalleryCreateManyImageInputEnvelope
    set?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    disconnect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    delete?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    update?: ProductGalleryUpdateWithWhereUniqueWithoutImageInput | ProductGalleryUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ProductGalleryUpdateManyWithWhereWithoutImageInput | ProductGalleryUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
  }

  export type ProductGalleryUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<ProductGalleryCreateWithoutImageInput, ProductGalleryUncheckedCreateWithoutImageInput> | ProductGalleryCreateWithoutImageInput[] | ProductGalleryUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutImageInput | ProductGalleryCreateOrConnectWithoutImageInput[]
    upsert?: ProductGalleryUpsertWithWhereUniqueWithoutImageInput | ProductGalleryUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ProductGalleryCreateManyImageInputEnvelope
    set?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    disconnect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    delete?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    update?: ProductGalleryUpdateWithWhereUniqueWithoutImageInput | ProductGalleryUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ProductGalleryUpdateManyWithWhereWithoutImageInput | ProductGalleryUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<ProductCreateWithoutGalleryImagesInput, ProductUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutGalleryImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutGalleryInput = {
    create?: XOR<ImageCreateWithoutGalleryInput, ImageUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: ImageCreateOrConnectWithoutGalleryInput
    connect?: ImageWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<ProductCreateWithoutGalleryImagesInput, ProductUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutGalleryImagesInput
    upsert?: ProductUpsertWithoutGalleryImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutGalleryImagesInput, ProductUpdateWithoutGalleryImagesInput>, ProductUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type ImageUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<ImageCreateWithoutGalleryInput, ImageUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: ImageCreateOrConnectWithoutGalleryInput
    upsert?: ImageUpsertWithoutGalleryInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutGalleryInput, ImageUpdateWithoutGalleryInput>, ImageUncheckedUpdateWithoutGalleryInput>
  }

  export type ProductCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type ProductCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutCategoryInput | ProductCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutCategoryInput | ProductCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    upsert?: ProductUpsertWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCategoriesInput, ProductUpdateWithoutCategoriesInput>, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCreateNestedOneWithoutQualificationsInput = {
    create?: XOR<ProductCreateWithoutQualificationsInput, ProductUncheckedCreateWithoutQualificationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutQualificationsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutQualificationsNestedInput = {
    create?: XOR<ProductCreateWithoutQualificationsInput, ProductUncheckedCreateWithoutQualificationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutQualificationsInput
    upsert?: ProductUpsertWithoutQualificationsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutQualificationsInput, ProductUpdateWithoutQualificationsInput>, ProductUncheckedUpdateWithoutQualificationsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
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

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ImageCreateWithoutProductInput = {
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    gallery?: ProductGalleryCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: number
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    gallery?: ProductGalleryUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ProductGalleryCreateWithoutProductInput = {
    image: ImageCreateNestedOneWithoutGalleryInput
  }

  export type ProductGalleryUncheckedCreateWithoutProductInput = {
    id?: number
    imageId: number
  }

  export type ProductGalleryCreateOrConnectWithoutProductInput = {
    where: ProductGalleryWhereUniqueInput
    create: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput>
  }

  export type ProductGalleryCreateManyProductInputEnvelope = {
    data: ProductGalleryCreateManyProductInput | ProductGalleryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryCreateWithoutProductInput = {
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductCategoryUncheckedCreateWithoutProductInput = {
    categoryId: number
  }

  export type ProductCategoryCreateOrConnectWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductCategoryCreateManyProductInputEnvelope = {
    data: ProductCategoryCreateManyProductInput | ProductCategoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type QualificationCreateWithoutProductInput = {
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
  }

  export type QualificationUncheckedCreateWithoutProductInput = {
    id?: number
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
  }

  export type QualificationCreateOrConnectWithoutProductInput = {
    where: QualificationWhereUniqueInput
    create: XOR<QualificationCreateWithoutProductInput, QualificationUncheckedCreateWithoutProductInput>
  }

  export type QualificationCreateManyProductInputEnvelope = {
    data: QualificationCreateManyProductInput | QualificationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithoutProductInput = {
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutProductInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: ProductGalleryUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: ProductGalleryUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ProductGalleryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductGalleryWhereUniqueInput
    update: XOR<ProductGalleryUpdateWithoutProductInput, ProductGalleryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput>
  }

  export type ProductGalleryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductGalleryWhereUniqueInput
    data: XOR<ProductGalleryUpdateWithoutProductInput, ProductGalleryUncheckedUpdateWithoutProductInput>
  }

  export type ProductGalleryUpdateManyWithWhereWithoutProductInput = {
    where: ProductGalleryScalarWhereInput
    data: XOR<ProductGalleryUpdateManyMutationInput, ProductGalleryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductGalleryScalarWhereInput = {
    AND?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
    OR?: ProductGalleryScalarWhereInput[]
    NOT?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
    id?: IntFilter<"ProductGallery"> | number
    productId?: IntFilter<"ProductGallery"> | number
    imageId?: IntFilter<"ProductGallery"> | number
  }

  export type ProductCategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    update: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductCategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    data: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductCategoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductCategoryScalarWhereInput
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCategoryScalarWhereInput = {
    AND?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
    OR?: ProductCategoryScalarWhereInput[]
    NOT?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
    productId?: IntFilter<"ProductCategory"> | number
    categoryId?: IntFilter<"ProductCategory"> | number
  }

  export type QualificationUpsertWithWhereUniqueWithoutProductInput = {
    where: QualificationWhereUniqueInput
    update: XOR<QualificationUpdateWithoutProductInput, QualificationUncheckedUpdateWithoutProductInput>
    create: XOR<QualificationCreateWithoutProductInput, QualificationUncheckedCreateWithoutProductInput>
  }

  export type QualificationUpdateWithWhereUniqueWithoutProductInput = {
    where: QualificationWhereUniqueInput
    data: XOR<QualificationUpdateWithoutProductInput, QualificationUncheckedUpdateWithoutProductInput>
  }

  export type QualificationUpdateManyWithWhereWithoutProductInput = {
    where: QualificationScalarWhereInput
    data: XOR<QualificationUpdateManyMutationInput, QualificationUncheckedUpdateManyWithoutProductInput>
  }

  export type QualificationScalarWhereInput = {
    AND?: QualificationScalarWhereInput | QualificationScalarWhereInput[]
    OR?: QualificationScalarWhereInput[]
    NOT?: QualificationScalarWhereInput | QualificationScalarWhereInput[]
    id?: IntFilter<"Qualification"> | number
    metric_en?: StringFilter<"Qualification"> | string
    metric_fa?: StringFilter<"Qualification"> | string
    value_en?: StringFilter<"Qualification"> | string
    value_fa?: StringFilter<"Qualification"> | string
    productId?: IntFilter<"Qualification"> | number
  }

  export type ProductCreateWithoutImageInput = {
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: ProductGalleryCreateNestedManyWithoutProductInput
    categories?: ProductCategoryCreateNestedManyWithoutProductInput
    qualifications?: QualificationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImageInput = {
    id?: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    categories?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
    qualifications?: QualificationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImageInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImageInput, ProductUncheckedCreateWithoutImageInput>
  }

  export type ProductGalleryCreateWithoutImageInput = {
    product: ProductCreateNestedOneWithoutGalleryImagesInput
  }

  export type ProductGalleryUncheckedCreateWithoutImageInput = {
    id?: number
    productId: number
  }

  export type ProductGalleryCreateOrConnectWithoutImageInput = {
    where: ProductGalleryWhereUniqueInput
    create: XOR<ProductGalleryCreateWithoutImageInput, ProductGalleryUncheckedCreateWithoutImageInput>
  }

  export type ProductGalleryCreateManyImageInputEnvelope = {
    data: ProductGalleryCreateManyImageInput | ProductGalleryCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutImageInput = {
    update: XOR<ProductUpdateWithoutImageInput, ProductUncheckedUpdateWithoutImageInput>
    create: XOR<ProductCreateWithoutImageInput, ProductUncheckedCreateWithoutImageInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImageInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImageInput, ProductUncheckedUpdateWithoutImageInput>
  }

  export type ProductUpdateWithoutImageInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: ProductGalleryUpdateManyWithoutProductNestedInput
    categories?: ProductCategoryUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    categories?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductGalleryUpsertWithWhereUniqueWithoutImageInput = {
    where: ProductGalleryWhereUniqueInput
    update: XOR<ProductGalleryUpdateWithoutImageInput, ProductGalleryUncheckedUpdateWithoutImageInput>
    create: XOR<ProductGalleryCreateWithoutImageInput, ProductGalleryUncheckedCreateWithoutImageInput>
  }

  export type ProductGalleryUpdateWithWhereUniqueWithoutImageInput = {
    where: ProductGalleryWhereUniqueInput
    data: XOR<ProductGalleryUpdateWithoutImageInput, ProductGalleryUncheckedUpdateWithoutImageInput>
  }

  export type ProductGalleryUpdateManyWithWhereWithoutImageInput = {
    where: ProductGalleryScalarWhereInput
    data: XOR<ProductGalleryUpdateManyMutationInput, ProductGalleryUncheckedUpdateManyWithoutImageInput>
  }

  export type ProductCreateWithoutGalleryImagesInput = {
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageCreateNestedOneWithoutProductInput
    categories?: ProductCategoryCreateNestedManyWithoutProductInput
    qualifications?: QualificationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutGalleryImagesInput = {
    id?: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageUncheckedCreateNestedOneWithoutProductInput
    categories?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
    qualifications?: QualificationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutGalleryImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutGalleryImagesInput, ProductUncheckedCreateWithoutGalleryImagesInput>
  }

  export type ImageCreateWithoutGalleryInput = {
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutGalleryInput = {
    id?: number
    url: string
    public_id: string
    width?: number | null
    height?: number | null
    format?: string | null
    size: number
    createdAt?: Date | string
    productId?: number | null
  }

  export type ImageCreateOrConnectWithoutGalleryInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutGalleryInput, ImageUncheckedCreateWithoutGalleryInput>
  }

  export type ProductUpsertWithoutGalleryImagesInput = {
    update: XOR<ProductUpdateWithoutGalleryImagesInput, ProductUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<ProductCreateWithoutGalleryImagesInput, ProductUncheckedCreateWithoutGalleryImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutGalleryImagesInput, ProductUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type ProductUpdateWithoutGalleryImagesInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneWithoutProductNestedInput
    categories?: ProductCategoryUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutGalleryImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUncheckedUpdateOneWithoutProductNestedInput
    categories?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ImageUpsertWithoutGalleryInput = {
    update: XOR<ImageUpdateWithoutGalleryInput, ImageUncheckedUpdateWithoutGalleryInput>
    create: XOR<ImageCreateWithoutGalleryInput, ImageUncheckedCreateWithoutGalleryInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutGalleryInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutGalleryInput, ImageUncheckedUpdateWithoutGalleryInput>
  }

  export type ImageUpdateWithoutGalleryInput = {
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCategoryCreateWithoutCategoryInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
  }

  export type ProductCategoryUncheckedCreateWithoutCategoryInput = {
    productId: number
  }

  export type ProductCategoryCreateOrConnectWithoutCategoryInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCategoryCreateManyCategoryInputEnvelope = {
    data: ProductCategoryCreateManyCategoryInput | ProductCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductCategoryWhereUniqueInput
    update: XOR<ProductCategoryUpdateWithoutCategoryInput, ProductCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductCategoryWhereUniqueInput
    data: XOR<ProductCategoryUpdateWithoutCategoryInput, ProductCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductCategoryScalarWhereInput
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutCategoriesInput = {
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageCreateNestedOneWithoutProductInput
    galleryImages?: ProductGalleryCreateNestedManyWithoutProductInput
    qualifications?: QualificationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageUncheckedCreateNestedOneWithoutProductInput
    galleryImages?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    qualifications?: QualificationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name_en: string
    name_fa: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name_en: string
    name_fa: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutCategoriesInput = {
    update: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateWithoutCategoriesInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneWithoutProductNestedInput
    galleryImages?: ProductGalleryUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUncheckedUpdateOneWithoutProductNestedInput
    galleryImages?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    qualifications?: QualificationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name_en?: StringFieldUpdateOperationsInput | string
    name_fa?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_en?: StringFieldUpdateOperationsInput | string
    name_fa?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutQualificationsInput = {
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageCreateNestedOneWithoutProductInput
    galleryImages?: ProductGalleryCreateNestedManyWithoutProductInput
    categories?: ProductCategoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutQualificationsInput = {
    id?: number
    title_en: string
    title_fa: string
    description_en: string
    description_fa: string
    status: $Enums.ProductStatus
    url: string
    imageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ImageUncheckedCreateNestedOneWithoutProductInput
    galleryImages?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    categories?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutQualificationsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutQualificationsInput, ProductUncheckedCreateWithoutQualificationsInput>
  }

  export type ProductUpsertWithoutQualificationsInput = {
    update: XOR<ProductUpdateWithoutQualificationsInput, ProductUncheckedUpdateWithoutQualificationsInput>
    create: XOR<ProductCreateWithoutQualificationsInput, ProductUncheckedCreateWithoutQualificationsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutQualificationsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutQualificationsInput, ProductUncheckedUpdateWithoutQualificationsInput>
  }

  export type ProductUpdateWithoutQualificationsInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneWithoutProductNestedInput
    galleryImages?: ProductGalleryUpdateManyWithoutProductNestedInput
    categories?: ProductCategoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutQualificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_fa?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_fa?: StringFieldUpdateOperationsInput | string
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    url?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUncheckedUpdateOneWithoutProductNestedInput
    galleryImages?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    categories?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductGalleryCreateManyProductInput = {
    id?: number
    imageId: number
  }

  export type ProductCategoryCreateManyProductInput = {
    categoryId: number
  }

  export type QualificationCreateManyProductInput = {
    id?: number
    metric_en: string
    metric_fa: string
    value_en: string
    value_fa: string
  }

  export type ProductGalleryUpdateWithoutProductInput = {
    image?: ImageUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type ProductGalleryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGalleryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryUpdateWithoutProductInput = {
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductCategoryUncheckedUpdateWithoutProductInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryUncheckedUpdateManyWithoutProductInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type QualificationUpdateWithoutProductInput = {
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    metric_en?: StringFieldUpdateOperationsInput | string
    metric_fa?: StringFieldUpdateOperationsInput | string
    value_en?: StringFieldUpdateOperationsInput | string
    value_fa?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGalleryCreateManyImageInput = {
    id?: number
    productId: number
  }

  export type ProductGalleryUpdateWithoutImageInput = {
    product?: ProductUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type ProductGalleryUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGalleryUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryCreateManyCategoryInput = {
    productId: number
  }

  export type ProductCategoryUpdateWithoutCategoryInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ProductCategoryUncheckedUpdateWithoutCategoryInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryUncheckedUpdateManyWithoutCategoryInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }



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